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
				<td>节能技改次数</td>
				<td>1</td>
				<td>减排技改次数</td>
				<td>2</td>
			</tr>
			<tr>
				<td>节能技改费用（万）</td>
				<td>25.00</td>
				<td>减排技改次数</td>
				<td>40.00</td>
			</tr>
			<tr>
				<td class="txtFr" colspan="4">生态环境服务公司</td>
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
