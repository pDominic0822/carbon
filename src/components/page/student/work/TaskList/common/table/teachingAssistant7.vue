<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr>
				<td>序号</td>
				<td>组名</td>
				<td>节能技改次数</td>
				<td>技改后生产线耗电</td>
				<td>减排技改次数</td>
				<td>技改费用合计</td>
			</tr>
			<tr v-for="(trItem, trIndex) in trList" :key="trIndex">
				<td>
					{{trIndex + 1}}
				</td>
				<td>
					{{trItem.groupName}}
				</td>
				<td>
					{{trItem.powerConsumption}}
				</td>
				<td>
					{{trItem.reduceEmissions}}
				</td>
				<td>
					{{trItem.emissions}}
				</td>
				<td>
					{{trItem.combined}}
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
