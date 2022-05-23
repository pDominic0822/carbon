<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr>
				<td>次序</td>
				<td>碳权合计 ( 采购数量+碳配额 )</td>
				<td>小组名称</td>
				<td>订单数量 ( 个 )</td>
				<td>订单单价 ( 元 )</td>
				<td>违约单价 ( 元 )</td>
				<td>交付数量 ( 个 )</td>
				<td>违约数量 ( 个 )</td>
				<td>违约金额 ( 元 )</td>
				<td></td>
			</tr>
			<tr v-for="(trItem, trIndex) in trList" :key="trIndex">

			</tr>
		</table>
	</div>
</template>

<script>
export default {
	name: '',
	data () {
		return {

		};
	},
	props: [
		'showInputMap'
	],
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
