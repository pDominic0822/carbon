<template>
	<div class="childBox">
		<table class="demo-table">
			<tr>
				<td class="bgBlue" rowspan="2">项目</td>
				<td class="bgBlue" colspan="3">选单结果</td>
				<td class="bgBlue" rowspan="2">交付数量 ( 个 )</td>
				<td class="bgBlue" rowspan="2">获得订单收入 ( 元 )</td>
				<td class="bgBlue" rowspan="2">违约罚款 ( 元 )</td>
				<td class="bgBlue" rowspan="2">物料消耗 ( 包 )</td>
				<td class="bgBlue" rowspan="2">电力消耗 ( 度 )</td>
				<td class="bgBlue" rowspan="2">产品制造碳排放 ( Kg )</td>
				<td class="bgBlue" rowspan="2">消耗碳汇资产 ( Kg )</td>
				<td class="bgBlue" rowspan="2">消耗碳汇价值 ( 元 )</td>
				<td class="bgBlue" rowspan="2">产品碳标签 ( Kg/个 )</td>
				<td class="bgBlue" rowspan="2">产品碳成本 ( 元/个 )</td>
			</tr>
			<tr>
				<td class="bgBlue">订单数量 ( 个 )</td>
				<td class="bgBlue">订单单价 ( 元/个 )</td>
				<td class="bgBlue">订单金额 ( 元 )</td>
			</tr>
			<tr v-for="(item,index) in trList" :key="index">
				<td>
					{{item.orgName}}
				</td>
				<td>
					{{item.orderCount}}
				</td>
				<td>
					{{item.unitPrice}}
				</td>
				<td>
					{{item.orderRevenue}}
				</td>
				<td>
					{{item.deliverCount}}
				</td>
				<td>
					{{item.orderIncome}}
				</td>
				<td>
					{{item.violationFine}}
				</td>
				<td>
					{{item.materialConsumption}}
				</td>
				<td>
					{{item.electricityConsumption}}
				</td>
				<td>
					{{item.actualEmissions}}
				</td>
				<td>
					{{item.carbonSinkConsumption}}
				</td>
				<td>
					{{item.carbonSinkValue}}
				</td>
				<td>
					{{item.productCarbonLabel}}
				</td>
				<td>
					{{item.productCarbonCost}}
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
				url: '/stClazzOrgYearsOrder/findTeacherOrderDeliverList',
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
		width: 3000px;
	}
}
</style>
