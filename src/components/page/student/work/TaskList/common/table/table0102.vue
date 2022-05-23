<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr>
					<td rowspan="3">现金资产</td>
					<td>现金 ( 万 )</td>
					<td></td>
				</tr>
				<tr>
					<td>绿贷现金 ( 万 )</td>
					<td></td>
				</tr>
				<tr>
					<td>生产线资产 ( 万 )</td>
					<td></td>
				</tr>
				<tr>
					<td rowspan="2">
						配额碳资产
					</td>
					<td>碳配额资产数量 ( 吨 )</td>
					<td></td>
				</tr>
				<tr>
					<td>碳配额资产价值 ( 万 )</td>
					<td></td>
				</tr>
				<tr>
					<td rowspan="2">
						碳汇碳资产
					</td>
					<td>碳汇碳资产 ( 吨 )</td>
					<td></td>
				</tr>
				<tr>
					<td>碳汇碳资产价值 ( 万 )</td>
					<td></td>
				</tr>
				<tr>
					<td rowspan="3">库存物料</td>
					<td>库存物料 ( 包 )</td>
					<td></td>
				</tr>
				<tr>
					<td>库存物料价值 ( 万 )</td>
					<td></td>
				</tr>
				<tr>
					<td>库存物料排放 ( 吨 )</td>
					<td></td>
				</tr>
				<tr>
					<td rowspan="3">库存绿电</td>
					<td>库存绿电 ( 万度 )</td>
					<td></td>
				</tr>
				<tr>
					<td>库存绿电价值 ( 万 )</td>
					<td></td>
				</tr>
				<tr>
					<td>库存绿电减排 ( 吨 )</td>
					<td></td>
				</tr>
				<tr>
					<td rowspan="4">库存煤电</td>
					<td>库存煤电 ( 万度 )</td>
					<td></td>
				</tr>
				<tr>
					<td>库存煤电价值 ( 万)</td>
					<td></td>
				</tr>
				<tr>
					<td>库存煤电排放 ( 吨 )</td>
					<td></td>
				</tr>
				<tr>
					<td>年初资产小计 ( 万 )</td>
					<td></td>
				</tr>
		</table>
	</div>
</template>

<script>
export default {
	name: '',
	data () {
		return {
			trList: [
				{
					groupName: '生产线参数',
					numberOf: '1',
					powerConsumption: '自动带出',
					reduceEmissions: '0',
					emissions: '2',
					combined: '150'
				}
			]
		};
	},
	watch: {
	},
	created () {
	},
	methods: {
	},
	mounted () {
	}
};
</script>

<style lang="scss" scoped>
.contentBox{
	width: 100%;
	margin: 0 auto;
	color: #FFFFFF;
}
</style>
