<template>
	<div class="stu">
		<el-tabs v-model="tabsVal" @tab-click="handleClick">
			<el-tab-pane v-for="(tabsItem, index) in tabList"
			:key="index" :label="tabsItem.label">
			</el-tab-pane>
		</el-tabs>
		<template v-if="sellType === 'otcTrading'">
			场外
			<input type="text">
			<div class="mt20 center">
				<el-button type="success" @click="saveotcTradingJson()">保存</el-button>
			</div>
		</template>
		<template v-if="sellType === 'floorTrading'">
			场内

			<div class="mt20 center">
				<el-button type="success" @click="savefloorTradingJson()">保存</el-button>
			</div>
		</template>
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
					sellType: 'otcTrading',
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
		handleClick () {
			let item = this.tabList[this.tabsVal];
			this.sellType = item.sellType;
		},
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
				}
			});
		},
		// 场外
		saveotcTradingJson () {
			let param = {
				sellType: this.sellType || 0,
				appointOrgId: this.fromInfo.orgId || 0,
				sellCount: this.fromInfo.sellCount || 0,
				sellUnitPrice: this.fromInfo.sellUnitPrice || 0
			};
			this.getPageJson(param);
		},
		// 场外
		savefloorTradingJson () {
			let param = {
				sellType: this.sellType || 0,
				appointOrgId: this.fromInfo.orgId || 0,
				sellCount: this.fromInfo.sellCount || 0,
				sellUnitPrice: this.fromInfo.sellUnitPrice || 0
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
				if (res.success && res.data) {
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
