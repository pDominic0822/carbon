<template>
	<div class="stu">
		<el-tabs v-model="tabsVal" @tab-click="handleClick">
			<el-tab-pane v-for="(tabsItem, index) in tabList"
			:key="index" :label="tabsItem.label">
			</el-tab-pane>
		</el-tabs>

		<div class="contentBox">
			<table class="demo-table">
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td>交流区</td>
					<td>决策提示</td>
				</tr>
				<tr>
					<td>卖出方</td>
					<td>卖出数量( kg )</td>
					<td>单价( 元 )</td>
					<td>指定人( 选填 )</td>
					<td>操作</td>
					<td>买入方</td>
					<td>交易状态</td>
				</tr>
				<tr>
					<td>2组</td>
					<td>50</td>
					<td>100</td>
					<td>1组</td>
					<td>买入</td>
					<td></td>
					<td>未交易</td>
				</tr>
				<tr>
					<td>2组</td>
					<td>50</td>
					<td>100</td>
					<td>1组</td>
					<td>买入</td>
					<td>已售出</td>
					<td>已交易</td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td>库存碳配额</td>
					<td>指定人( 选填 )</td>
					<td>卖出数量( kg )</td>
					<td>单价( 元 )</td>
					<td>操作</td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td>
						{{carbonQuotaAmount}}
					</td>
					<td >
						<el-select v-model="fromInfo.orgId" placeholder="请选择">
							<el-option
							v-for="item in orgList"
							:key="item.orgId"
							:label="item.orgName"
							:value="item.orgId">
							</el-option>
						</el-select>
					</td>
					<td :class="{'inputClass' : showInputMap.value2}">
						<input type="text" :readonly="!showInputMap.value2" v-model="fromInfo.sellCount" class="inputA">
					</td>
					<td  :class="{'inputClass' : showInputMap.value3 }">
						<input type="num" :readonly="!showInputMap.value3" v-model="fromInfo.sellUnitPrice">
					</td>
					<td>出售</td>
					<td></td>
					<td></td>
				</tr>
			</table>
			<div class="mt20 center">
					<el-button type="success" @click="getPageJson()">保存</el-button>
				</div>
			</div>
	</div>
</template>

<script>
export default {
	name: 'my-course',
	data () {
		return {
			tabList: [
				{
					label: '场外',
					sellType: '',
					routerLink: 'marketTip10'
				},
				{
					label: '场内',
					sellType: 'floorTrading',
					routerLink: 'marketTip10'
				}
			],
			// tableType: 'pagetable1201',
			tableJson: {},
			carbonQuotaAmount: '',
			arrList: [],
			showInputMap: {
				value1: true,
				value2: true,
				value3: true
			},
			sellType: '',
			orgList: [],
			fromInfo: {
				orgId: '',
				sellCount: '',
				sellUnitPrice: ''
			}
		};
	},
	created () {
		this.init();
		this.getOrgList();
	},
	methods: {
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
				}
			});
		},
		getOrgList () {
			this.$ajax({
				method: 'post',
				url: '/stClazzOperationAnalysis/stOperationAnalysisClazzOrgInfoList',
				params: {
					moldId: this.$route.query.moldId || this.moldId || ''
				}
			}).then(res => {
				if (res.success && res.data) {
					this.orgList = res.data;
					let marketMap = {
						orgName: '市场',
						orgId: 'AAA'
					};
					this.orgList.unshift(marketMap);
				}
			});
		},
		getPageJson () {
			if (this.orgList.orgId === 10588) {
				this.sellType = 'floorTrading';
			} else {
				this.sellType = 'otcTrading';
			}
			this.$ajax({
				method: 'post',
				url: '/stOrgQuotaTransactionRecord/saveOrgSellQuotaTransactionRecordInfo',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					subtaskId: this.$route.query.subtaskId || '',
					taskId: this.$route.query.taskId || '',
					industryId: this.$route.query.industryId || '',
					clazzYearsPushId: this.$route.query.clazzYearsPushId || '',
					sellType: this.sellType || 0,
					appointOrgId: this.fromInfo.orgId || 0,
					sellCount: this.fromInfo.sellCount || 0,
					sellUnitPrice: this.fromInfo.sellUnitPrice || 0
				}
			}).then(res => {
				if (res.success && res.data) {
					// this.orgList = res.data;
					// let marketMap = {
					// 	orgName: '市场',
					// 	orgId: 'floorTrading'
					// };
					// this.orgList.unshift(marketMap);
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
