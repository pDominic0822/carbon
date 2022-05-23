<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr>
				<td>小组名称</td>
				<td>节能技改次数</td>
				<td colspan="2">技改后生产线耗电(万度/季度)</td>
				<td>减排技改次数</td>
				<td colspan="2">减排后生产线排放(Kg/季度)</td>
				<td>技改费用合计</td>
			</tr>
			<tr v-for="(trItem, trIndex) in trList" :key="trIndex">
				<td>
					{{trItem.orgName}}
				</td>
				<td>
					{{trItem.energySavingCount}}
				</td>
				<td colspan="2">
					{{trItem.energySavingValue}}
				</td>
				<td>
					{{trItem.emissionReductionCount}}
				</td>
				<td colspan="2">
					{{trItem.emissionReductionValue}}
				</td>
				<td>
					{{trItem.retrofitCost}}
				</td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	name: '',
	data () {
		return {
			trList: []
		};
	},
	watch: {
	},
	created () {
		this.init();
	},
	methods: {
		init () {
			this.$ajax({
				method: 'post',
				url: '/stOrgRetrofitRecord/findClazzOrgYearsRetrofitMarketInfoList',
				params: {
					moldId: this.$route.query.moldId || this.moldId,
					clazzYearsPushId: this.$route.query.clazzYearsPushId || this.clazzYearsPushId
				}
			}).then(res => {
				if (res.success) {
					if (res.data) {
						this.trList = res.data;
					}
				}
			});
		}
	},
	mounted () {
	}
};
</script>

<style lang="scss" scoped>
.contentBox{
	padding: 0 15px;
	margin: 0 auto;
}
</style>
