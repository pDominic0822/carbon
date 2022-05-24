<template>
	<div class="stu">
		<div>
			<el-tabs v-model="areaVal" @tab-click="_ClickBuyer()">
				<el-tab-pane v-for="(tabsItem, index) in areaList"
				:key="index" :label="tabsItem.label">
				</el-tab-pane>
			</el-tabs>
		</div>
		<template v-if="areaType === 'sell'">
			<el-tabs v-model="tabsVal" @tab-click="handleClick">
				<el-tab-pane v-for="(tabsItem, index) in tabList"
				:key="index" :label="tabsItem.label">
				</el-tab-pane>
			</el-tabs>
			现有碳汇：{{carbonQuotaAmount}}
			<!-- <el-button type="primary" @click="getRecord()">主要按钮</el-button> -->
			<template v-if="sellType === 'floorTrading'">
				<table class="demo-table mt20">
					<tr>
						<td>卖出数量 ( Kg )</td>
						<td>系统单价 ( 元 / Kg )</td>
						<!-- <td colspan="2">操作</td> -->
					</tr>
					<tr>
						<td>
							<el-input-number  controls-position="right" size="mini" :controls="false" v-model="fromInfo.sellCount" :precision="0" :step="1" :max="100000000"></el-input-number>
						</td>
						<td>
							{{fromInfo.quotaBuyPenalty}}
						</td>
						<!-- <td>确认出售</td>
						<td @click="_isGetRecordDialog()">交易记录</td> -->
					</tr>
				</table>
				<div class="mt20 center">
					<el-button type="success" @click="saveotcTradingJson()">销售</el-button>
				</div>
			</template>
			<template v-if="sellType === 'otcTrading'">
				<table class="demo-table mt20">
					<tr>
						<td>选择小组</td>
						<td>卖出数量 ( Kg )</td>
						<td>系统单价 ( 元 / Kg )</td>
						<td>自定义单价 ( 元 / Kg )</td>
					</tr>
					<tr>
						<td>
							<el-select v-model="fromInfo.orgId" placeholder="请选择">
								<el-option
								v-for="item in orgList"
								:key="item.orgId"
								:label="item.orgName"
								:value="item.orgId">
								</el-option>
							</el-select>
						</td>
						<td>
							<input type="text" v-model="fromInfo.sellCount" >
						</td>
						<td>
							{{fromInfo.quotaBuyPenalty}}
						</td>
						<td>
							<input type="text" v-model="fromInfo.MyUnitPrice">
						</td>
					</tr>
				</table>
				<div class="mt20 center">
					<el-button type="success" @click="savefloorTradingJson()">销售</el-button>
				</div>
			</template>
		</template>
		<template v-if="areaType === 'buy'">
			<table class="demo-table">
				<tr>
					<td>卖出方</td>
					<td>买入方</td>
					<td>卖出数量 ( Kg )</td>
					<td>单价 ( 元 / Kg )</td>
					<td>操作</td>
					<td>交易状态</td>
				</tr>
				<tr v-for="(sellItem,sellIndex) in sellList" :key="sellIndex">
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
		<el-dialog
			title="交易记录"
			:visible.sync="isGetRecordDialog"
			append-to-body
			width="80%"
			center>
			<table class="demo-table">
				<tr>
					<td></td>
					<td>指定人</td>
					<td>卖出数量 ( Kg )</td>
					<td>单价 ( 元 / Kg )</td>
					<td>状态</td>
					<td>操作</td>
				</tr>
				<tr v-for="(recordItem, recordIndex) in recordList" :key="recordIndex">
					<td>
						{{recordIndex + 1}}
					</td>
					<td>
						{{recordItem.trader}}
					</td>
					<td>
						{{recordItem.sellCount}}
					</td>
					<td>
						{{recordItem.sellUnitPrice}}
					</td>
					<td v-if="recordItem.sellState === 2">
						已交易
					</td>
					<td v-if="recordItem.sellState === 1">
						未交易
					</td>
					<td v-if="recordItem.sellState === 0">
						交易失败
					</td>
					<td @click="_handCancel(recordIndex)">
						取消交易
					</td>
				</tr>
			</table>
		</el-dialog>
	</div>
</template>

<script>
export default {
	name: 'my-course',
	data () {
		return {
			areaList: [
				{
					label: '卖方区',
					sellType: 'floorTrading',
					areaType: 'sell'
				},
				{
					label: '买方区',
					sellType: 'otcTrading',
					areaType: 'buy'
				}
			],
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
			recordList: [],
			// tableType: 'pagetable1201',
			isGetRecordDialog: false,
			tableJson: {},
			carbonQuotaAmount: '',
			arrList: [],
			sellList: [],
			showInputMap: {
				value1: true,
				value2: true,
				value3: true
			},
			tabsVal: '0',
			sellType: 'floorTrading',
			orgList: [],
			fromInfo: {
				orgId: '',
				sellCount: '',
				sellUnitPrice: ''
			}
		};
	},
	created () {
		this.areaType = 'sell';
		this.init();
		this.getOrgList();
	},
	methods: {
		// 切换 场内外
		handleClick () {
			let item = this.tabList[this.tabsVal];
			this.sellType = item.sellType;
		},
		// 切换买卖方
		_ClickBuyer () {
			let areaItem = this.areaList[this.areaVal];
			this.areaType = areaItem.areaType;
			this.getListRecord();
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
					message: '销售数量不能大于现有碳汇数量'
				});
				return false;
			}
			this.$confirm(`是否销售${this.fromInfo.sellCount}KG碳汇，单价为：${this.fromInfo.quotaBuyPenalty}元`, '再次提示', {
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
		getRecord () {
			this.$ajax({
				method: 'post',
				url: '/stOrgQuotaTransactionRecord/getOrgSellCarbonQuotaInfoMap',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					clazzYearsPushId: this.$route.query.clazzYearsPushId || ''
				}
			}).then(res => {
				if (res.success && res.data) {
					this.recordList = res.data;
				}
			});
		},
		// 取消交易
		_handCancel (recordIndex) {
			let item = this.sellList[recordIndex];
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
		getListRecord () {
			this.$ajax({
				method: 'post',
				url: '/stOrgQuotaTransactionRecord/findClazzSellQuotaTransactionInfoList',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					clazzYearsPushId: this.$route.query.clazzYearsPushId || ''
				}
			}).then(res => {
				if (res.success && res.data) {
					this.sellList = res.data;
				}
			});
		},
		_handBuy (sellIndex) {
			let item = this.sellList[sellIndex];
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
</style>
