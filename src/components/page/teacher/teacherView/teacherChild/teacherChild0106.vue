<template>
	<div class="childBox">
		<table class="demo-table">
			<tr>
				<td class="bgBlue" rowspan="2">
					项目
				</td>
				<td class="bgBlue" colspan="10">节能技改</td>
				<td class="bgBlue" colspan="12">减排</td>
				<td class="bgBlue" rowspan="2">消耗绿贷费用</td>
				<td class="bgBlue" rowspan="2">消耗自有现金费用</td>
				<td class="bgBlue" rowspan="2">合计费用</td>
				<td class="bgBlue" rowspan="2">年度可能产能</td>
				<td class="bgBlue" rowspan="2">自有资金</td>
			</tr>
			<tr>
				<td class="bgBlue" colspan="2">节能技改次数 ( 次 )</td>
				<td class="bgBlue" colspan="2">节能技改费用 (元)</td>
				<td class="bgBlue" colspan="2">技改后生产线能耗降低 ( % )</td>
				<td class="bgBlue" colspan="2">年度减少能耗 ( 度 )</td>
				<td class="bgBlue" colspan="2">技改后生产线能耗 ( 度/季度 )</td>
				<td class="bgBlue" colspan="2">减排技改次数</td>
				<td class="bgBlue" colspan="2">减排技改费用</td>
				<td class="bgBlue" colspan="2">合计技改次数</td>
				<td class="bgBlue" colspan="2">技改后生产线排放降低 ( % )</td>
				<td class="bgBlue" colspan="2">年度减少排放 ( Kg )</td>
				<td class="bgBlue" colspan="2">技改后生产线排放 ( Kg )</td>
			</tr>
			<tr v-for="(item, index) in trList" :key="index">
				<td colspan="">
					{{item.orgName}}
				</td>
				<td colspan="2">
					{{item.energyCount}}
				</td>
				<td colspan="2">
					{{item.energyCost | formatNumber}}
				</td>
				<td colspan="2">
					{{item.energyReduceRate}}
				</td>
				<td colspan="2">
					{{item.energyReduceValue | formatNumber}}
				</td>
				<td colspan="2">
					{{item.energyRetrofitValue | formatNumber}}
				</td>
				<td colspan="2">
					{{item.emissionCount}}
				</td>
				<td colspan="2">
					{{item.emissionCost | formatNumber}}
				</td>
				<td colspan="2">
					{{(item.energyCount + item.emissionCount) | formatNumber}}
				</td>
				<td colspan="2">
					{{item.emissionReduceRate}}
				</td>
				<td colspan="2">
					{{item.emissionReduceValue  | formatNumber}}
				</td>
				<td colspan="2">
					{{item.emissionRetrofitValue | formatNumber}}
				</td>
				<td colspan="">
					{{item.costGreenLoansAmount | formatNumber}}
				</td>
				<td colspan="">
					{{item.costOwnCashAmount | formatNumber}}
				</td>
				<td colspan="">
					{{item.retrofitTotalCost | formatNumber}}
				</td>
				<td colspan="">
					{{item.remainingCapacity}}
				</td>
				<td colspan="">
					{{item.orgOwnCashProperty}}
				</td>
			</tr>
		</table>
	</div>
</template>

<script>

export default {
	components: {

	},
	name: 'login',
	data () {
		return {
			trList: []
		};
	},
	props: ['moldId', 'clazzYearsPushId'],
	created () {
		this.init();
	},
	methods: {
		init () {
			this.$ajax({
				method: 'post',
				url: '/stOrgRetrofitRecord/findClazzOrgRetrofitInfoMapList',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '', // 模块id
					clazzYearsPushId: this.clazzYearsPushId || ''
				}
			}).then(res => {
				if (res.success) {
					if (res.data) {
						this.trList = res.data;
					}
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.childBox{
	// padding: 57px 15px;
	overflow: hidden;
	overflow-x: auto;
	.demo-table{
		width: 2400px;
	}
}
</style>
