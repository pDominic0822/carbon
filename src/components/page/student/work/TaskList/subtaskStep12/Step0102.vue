<template>
	<div class="stu">
		<el-tabs v-model="tabsVal" @tab-click="handleClick">
			<el-tab-pane v-for="(tabsItem, index) in tabList"
			:key="index" :label="tabsItem.label">
			</el-tab-pane>
		</el-tabs>
		<p class="mt20">
			现有碳配额：{{carbonQuotaAmount}}
		</p>
		<template v-if="sellType === 'floorTrading'">
			<ul class="sell-box">
				<li>
					<div class="fl imgps">
					</div>
					<div class="fl sellinfo">
						<p class="span1 mt20">
							碳配额卖出
						</p>
						<p class="mt20">
							卖出收益计算公式=卖出数量 ( Kg ) * 系统单价 ( 元 / Kg )
						</p>
						<div class="demo-input mt20">
							卖出数量 ( Kg ):
							<el-input-number  controls-position="right" size="mini" :controls="false" v-model="fromInfo.sellCount" :precision="0" :step="1" :max="100000000"></el-input-number>
						</div>
						<div class="mt20">
							系统单价 ( 元 / Kg )：{{fromInfo.quotaBuyPenalty}}
						</div>
						<div class="clearfix mt20 demo-input">
							卖出收益 ( 元 )：{{fromInfo.sellCount && (fromInfo.quotaBuyPenalty * fromInfo.sellCount) }}
							<p class="tr">
								<el-button type="success" size="mini" @click="saveotcTradingJson()">销售</el-button>
							</p>
						</div>
					</div>
				</li>
			</ul>
			<div class="mt20 center">
				<table class="demo-table">
					<tr>
						<td>序号</td>
						<td>卖出数量 ( Kg )</td>
						<td>单价 ( 元 / Kg )</td>
						<td>收益</td>
					</tr>
					<tr v-for="(recordItem, recordIndex) in recordFloorList" :key="recordIndex">
						<td>
							{{recordIndex + 1}}
						</td>
						<td>
							{{recordItem.sellCount}}
						</td>
						<td>
							{{recordItem.sellUnitPrice}}
						</td>
						<td>
							{{recordItem.sellUnitPrice * recordItem.sellCount}}
						</td>
					</tr>
				</table>
			</div>
		</template>
		<template v-if="sellType === 'otcTrading'">
			<ul class="sell-box bossd">
				<li>
					<div class="fl imgps">
					</div>
					<div class="fl sellinfo">
						<p class="span1 mt15">
							碳配额卖出
						</p>
						<p class="mt15">
							卖出收益计算公式=卖出数量 ( Kg ) * 自定义单价 ( 元 / Kg )
						</p>
						<div class="mt15">
							系统单价 ( 元 / Kg )：{{fromInfo.quotaBuyPenalty}}
						</div>
						<div class="mt15">
							买入小组：
								<el-select size="mini" v-model="fromInfo.orgId" placeholder="请选择">
									<el-option
									v-for="item in orgList"
									:key="item.orgId"
									:label="item.orgName"
									:value="item.orgId">
									</el-option>
								</el-select>
						</div>
						<div class="demo-input mt15">
							卖出数量 ( Kg ):
							<el-input-number  controls-position="right" size="mini" :controls="false" v-model="fromInfo.sellCount" :precision="0" :step="1" :max="100000000"></el-input-number>
						</div>
						<div class="mt15">
							自定义单价 ( 元 / Kg )：
							<el-input-number  controls-position="right" size="mini" :controls="false" v-model="fromInfo.MyUnitPrice" :max="100000000"></el-input-number>
						</div>
						<div class="clearfix mt15 demo-input">
							卖出收益 ( 元 )：{{fromInfo.MyUnitPrice && (fromInfo.MyUnitPrice * fromInfo.sellCount) }}
							<p class="tr">
								<el-button type="success" size="mini" @click="savefloorTradingJson()">销售</el-button>
							</p>
						</div>
					</div>
				</li>
			</ul>
			<table class="demo-table mt20">
				<tr>
					<td>卖出方</td>
					<td>买入方</td>
					<td>卖出数量 ( Kg )</td>
					<td>单价 ( 元 / Kg )</td>
					<td>操作</td>
					<td>交易状态</td>
				</tr>
				<tr v-for="(sellItem,sellIndex) in sellotcTradList" :key="sellIndex">
					<td>
						{{sellItem.sellOrgName}}
					</td>
					<td>
						{{sellItem.trader || '空'}}
					</td>
					<td>
						{{sellItem.sellCount}}
					</td>
					<td>
						{{sellItem.sellUnitPrice}}
					</td>
					<td>
						<template v-if="($storage.get('orgId') + '') === (sellItem.buyOrgId + '')">
							<template v-if="sellItem.sellState === 0">
								取消交易
							</template>
							<template v-if="sellItem.sellState === 1">
								<el-button type="success" @click="_handBuy(sellIndex)">
									买入
								</el-button>
							</template>
							<template v-if="sellItem.sellState === 2">
								已交易
							</template>
						</template>
						<template v-else>
							<template v-if="sellItem.sellState === 0">
								取消交易
							</template>
							<template v-if="sellItem.sellState === 1">
								未交易
							</template>
							<template v-if="sellItem.sellState === 2">
								已交易
							</template>
						</template>
					</td>
					<td >
						<template v-if="sellItem.sellState === 0">
							取消交易
						</template>
						<template v-if="sellItem.sellState === 1">
							<template v-if="($storage.get('orgId') + '') === (sellItem.sellOrgId + '')">
								<el-button type="success" @click="_handCancel(sellIndex)">
									取消交易
								</el-button>
							</template>
						</template>
						<template v-if="sellItem.sellState === 2">
							已交易
						</template>
					</td>
				</tr>
			</table>
		</template>
	</div>
</template>

<script>
export default {
	name: 'my-course',
	data () {
		return {
			areaVal: '0',
			tabList: [
				{
					label: '系统卖出',
					sellType: 'floorTrading',
					routerLink: 'marketTip10'
				},
				{
					label: '小组交易',
					sellType: 'otcTrading',
					routerLink: 'marketTip10'
				}
			],
			recordFloorList: [],
			// tableType: 'pagetable1201',
			isGetRecordDialog: false,
			tableJson: {},
			carbonQuotaAmount: '',
			arrList: [],
			sellotcTradList: [],
			showInputMap: {
				value1: true,
				value2: true,
				value3: true
			},
			tabsVal: '0',
			sellType: 'floorTrading',
			orgList: [],
			fromInfo: {
			}
		};
	},
	created () {
		this.init();
		this.tabsVal = '0';
		this.handleClick();
		this.getOrgList();
	},
	methods: {
		// 切换 场内外
		handleClick () {
			let item = this.tabList[this.tabsVal];

			this.sellType = item.sellType;
			if (item.sellType === 'floorTrading') {
				this.getfloorRecord();
			}
			if (item.sellType === 'otcTrading') {
				this.getotcTradRecord();
			}
		},
		// 查询 库存
		init () {
			this.$ajax({
				method: 'post',
				url: '/stOrgQuotaTransactionRecord/getOrgCarbonQuotaStockInfoMap',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					clazzYearsPushId: this.$route.query.clazzYearsPushId || ''
				}
			}).then(res => {
				if (res.success && res.data) {
					this.carbonQuotaAmount = res.data.carbonQuotaAmount;
					this.fromInfo.quotaBuyPenalty = res.data.quotaBuyPenalty;
				}
			});
		},
		//  查询组织指定人
		getOrgList () {
			this.$ajax({
				method: 'post',
				url: '/stClazzOperationAnalysis/stOperationAnalysisClazzOrgInfoList',
				params: {
					moldId: this.$route.query.moldId || this.moldId || ''
				}
			}).then(res => {
				if (res.success && res.data) {
					let arr = [];
					for (let index = 0; index < res.data.length; index++) {
						const element = res.data[index];
						let orgId = this.$storage.get('orgId');
						if (element.orgId + '' === orgId + '') {
						} else {
							arr.push(element);
						}
					}
					this.orgList = arr;
				}
			});
		},
		// 场外
		saveotcTradingJson () {
			if (this.fromInfo.sellCount <= 0) {
				this.$message({
					type: 'error',
					message: '销售数量不能小于0KG'
				});
				return false;
			}
			if (this.fromInfo.sellCount > this.carbonQuotaAmount) {
				this.$message({
					type: 'error',
					message: '销售数量不能大于现有碳配额数量'
				});
				return false;
			}
			this.$confirm(`是否销售${this.fromInfo.sellCount}KG碳配额，单价为：${this.fromInfo.quotaBuyPenalty}元`, '再次提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				center: true,
				type: 'warning'
			}).then(() => {
				let param = {
					sellType: this.sellType || '', // sellType
					sellCount: this.fromInfo.sellCount || 0, // 卖出数量( kg )
					sellUnitPrice: this.fromInfo.quotaBuyPenalty || 0 // 单价( 元 )
				};
				this.getPageJson(param);
			});
		},
		// 场外
		savefloorTradingJson () {
			if (this.fromInfo.sellCount <= 0) {
				this.$message({
					type: 'error',
					message: '销售数量不能小于0KG'
				});
				return false;
			}
			if (!this.fromInfo.orgId) {
				this.$message({
					type: 'error',
					message: '请选择某一个小组'
				});
				return false;
			}
			if (this.fromInfo.MyUnitPrice <= 0) {
				this.$message({
					type: 'error',
					message: '销售单价不能小于0元'
				});
				return false;
			}
			if (this.fromInfo.MyUnitPrice > this.fromInfo.quotaBuyPenalty) {
				this.$message({
					type: 'error',
					message: '销售单价不能大于系统单价'
				});
				return false;
			}
			let param = {
				sellType: this.sellType || 0,
				sellCount: this.fromInfo.sellCount || 0,
				appointOrgId: this.fromInfo.orgId || '',
				buyOrgId: this.fromInfo.orgId || '',
				sellUnitPrice: this.fromInfo.MyUnitPrice || 0
			};
			this.getPageJson(param);
		},
		// 原始后端联调
		getPageJson (param) {
			this.$ajax({
				method: 'post',
				url: '/stOrgQuotaTransactionRecord/saveOrgSellQuotaTransactionRecordInfo',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					subtaskId: this.$route.query.subtaskId || '',
					taskId: this.$route.query.taskId || '',
					industryId: this.$route.query.industryId || '',
					clazzYearsPushId: this.$route.query.clazzYearsPushId || '',
					...param
				}
			}).then(res => {
				if (res.success) {
					this.$message({
						type: 'success',
						message: '销售成功'
					});
					if (this.sellType === 'floorTrading') {
						this.getfloorRecord();
					}
					if (this.sellType === 'otcTrading') {
						this.getotcTradRecord();
					}
					this.init();
				}
			});
		},
		// 交易记录弹框
		_isGetRecordDialog () {
			this.isGetRecordDialog = true;
			this.getRecord();
		},
		// 查询交易记录
		getfloorRecord () {
			this.$ajax({
				method: 'post',
				url: '/stOrgQuotaTransactionRecord/getOrgSellCarbonQuotaInfoMap',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					sellType: this.sellType,
					clazzYearsPushId: this.$route.query.clazzYearsPushId || ''
				}
			}).then(res => {
				if (res.success && res.data) {
					this.recordFloorList = res.data;
				}
			});
		},
		// 取消交易
		_handCancel (recordIndex) {
			let item = this.sellotcTradList[recordIndex];
			let transactionId = item.transactionId;
			this.$ajax({
				method: 'post',
				url: '/stOrgQuotaTransactionRecord/cancelOrgQuotaTransactionRecord',
				params: {
					transactionId: transactionId
				}
			}).then(res => {
				if (res.success) {
					this.getRecord();
					this.$message({
						type: 'success',
						message: res.message
					});
				}
			});
		},
		getotcTradRecord () {
			this.$ajax({
				method: 'post',
				url: '/stOrgQuotaTransactionRecord/findClazzSellQuotaTransactionInfoList',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					clazzYearsPushId: this.$route.query.clazzYearsPushId || ''
				}
			}).then(res => {
				if (res.success && res.data) {
					this.sellotcTradList = res.data;
				}
			});
		},
		_handBuy (sellIndex) {
			let item = this.sellotcTradList[sellIndex];
			let transactionId = item.transactionId;
			this.$ajax({
				method: 'post',
				url: '/stOrgQuotaTransactionRecord/saveOrgBuyQuotaTransactionRecordInfo',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					subtaskId: this.$route.query.subtaskId || '',
					taskId: this.$route.query.moldId || this.taskId || '',
					industryId: this.$route.query.industryId || '',
					clazzYearsPushId: this.$route.query.clazzYearsPushId || '',
					transactionId: transactionId
				}
			}).then(res => {
				if (res.success && res.data) {
					this.record();
					this.$message({
						type: 'success',
						message: res.message
					});
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.stu{
	color: white;
}
.sell-box{
	width: 100%;
	&.bossd{
		li{
			height: 305px;
		}
	}
	li{
		border: 1px solid #CCCCCC;
		height: 240px;
		margin-top: 20px;
		cursor: pointer;
		color: #ccc;
		&.isSelect {
			border: 1px solid #CCCCCC;
			color: #373737;
			.sellinfo{
				.span1{
					font-weight: 600;
					color: #373737;
				}
				.span2{
					font-size: 18px;
					color: #EC7F00;
				}
				.span3{
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #666666;
				}
			}
		}
		&.active{
			border: 1px solid #4657AD;
		}
		.imgps{
			width: 220px;
			height: 100%;
			background: url('./../common/images/purchaseOnCredit.jpg');
			background-size: cover;
		}
		.sellinfo{
			width: calc(100% - 220px);
			padding: 10px 20px;
			.span1{
				font-weight: 600;
				color: #ccc;
			}
			.span2{
				font-size: 18px;
				color: #ccc;
			}
			.span3{
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #ccc;
			}
		}
	}
}
</style>
