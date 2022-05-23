<template>
	<div class="childBox">
		<table class="demo-table">
			<tr>
				<td colspan="2" class="bgBlue">项目</td>
				<td colspan="2" class="bgBlue">全额生产碳排放 ( Kg )</td>
				<td colspan="2" class="bgBlue">全额物料碳排放 ( Kg )</td>
				<td colspan="2" class="bgBlue">全额煤电碳排放 ( Kg )</td>
				<td colspan="2" class="bgBlue">小计 ( Kg )</td>
				<td colspan="2" class="bgBlue">碳配额比例 ( % )</td>
				<td colspan="2" class="bgBlue">政府核定配额 ( Kg )</td>
				<td colspan="2" class="bgBlue">配额买入定价（元/kg）</td>
				<td colspan="2" class="bgBlue">配额买入价值（元）</td>
			</tr>
			<tr v-for="(trItem, trIndex) in trList" :key="trIndex">
				<td colspan="2">
					{{trItem.orgName}}
				</td>
				<td colspan="2">
					{{(trItem.yearsProductionEmission) | formatNumber}}
				</td>
				<td colspan="2">
					{{(trItem.yearsMaterialsEmission) | formatNumber}}
				</td>
				<td colspan="2">
					{{(trItem.yearsCoalPowerEmission) | formatNumber}}
				</td>
				<td colspan="2">
					{{trItem.enterpriseYearsEmission | formatNumber}}
				</td>
				<td colspan="2">
					{{trItem.carbonRate}}
				</td>
				<td colspan="2">
					{{(trItem.governmentQuota) | formatNumber}}
				</td>
				<td colspan="2">
					{{(trItem.governmentQuotaUnitPrice) | formatNumber}}
				</td>
				<td colspan="2">
					{{(trItem.governmentQuota * trItem.governmentQuotaUnitPrice) | formatNumber}}
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
			trList: [

			]
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
				url: '/stOrgCarbonQuotaRecord/findClazzOrgCarbonQuotaInfoList',
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
// .childBox{
// 	padding: 80px 15px;
// }
</style>
