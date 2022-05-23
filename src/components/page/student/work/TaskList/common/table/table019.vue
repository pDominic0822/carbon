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
				<td>绿电证书数量（千度）</td>
				<td>40</td>
				<td>绿电采购金额（元）</td>
				<td>48000</td>
			</tr>
			<tr>
				<td>煤电采购数量（度）</td>
				<td>210000</td>
				<td>煤电采购金额（元）</td>
				<td>210000</td>
			</tr>
			<tr>
				<td>绿电的总电占比（%）</td>
				<td class="" colspan="3">16%</td>
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
