<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr>
				<td>卖出方</td>
				<td>卖出数量 ( Kg )</td>
				<td>单价 ( 元 / Kg )</td>
				<td>指定人 ( 选填 )</td>
				<td>操作</td>
				<td>买入方</td>
				<td>交易状态</td>
			</tr>
			<tr>
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
	props: [
		'fromInfo',
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
