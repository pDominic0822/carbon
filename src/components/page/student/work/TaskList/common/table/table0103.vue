<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr>
				<td rowspan="5">年初负债</td>
				<td>还贷年份</td>
				<td></td>
			</tr>
			<tr>
				<td>绿贷利息 ( 万 )</td>
				<td></td>
			</tr>
			<tr>
				<td>绿贷本金 ( 万 )</td>
				<td></td>
			</tr>
			<tr>
				<td>年初负债小计 ( 万 )</td>
				<td></td>
			</tr>
			<tr>
				<td>年初企业权益</td>
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
