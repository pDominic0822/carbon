<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr class="noborder thStyle">
				<td class="noneBor" colspan="4">年度核定配额</td>
			</tr>
			<tr>
				<td>
					模拟经营
				</td>
				<td>
					1
				</td>
				<td>
					组号
				</td>
				<td>
					1
				</td>
			</tr>
			<tr>
				<td>模拟经营公司</td>
				<td colspan="3">知链冶金公司</td>
			</tr>
			<tr>
				<td>配额场外卖出数量（Kg）</td>
				<td>122</td>
				<td colspan="">场外交易金额（万）</td>
				<td>6.1</td>
			</tr>
			<tr>
				<td>交易对手组号</td>
				<td colspan="3">10</td>
			</tr>
			<tr>
				<td>配额场内卖出数量（Kg）</td>
				<td>122</td>
				<td>场内交易金额（万）</td>
				<td>1.88</td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	name: '',
	data () {
		return {
			form: {
			}
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
