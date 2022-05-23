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
					模拟经营公司
				</td>
				<td>
					{{$storage.get('orgName')}}
				</td>
			</tr>
			<tr>
				<td>核定配额 ( Kg )</td>
				<td>
					{{(showInputMap.receiveAmount) | formatNumber}}
				</td>
				<td colspan="2">吨二氧化碳当量</td>
			</tr>
			<tr>
				<td colspan="4">感谢为国家双碳战略做出的贡献！</td>
			</tr>
			<tr>
				<td class="txtFr" colspan="4">地方生态环境管理部门</td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	name: '',
	data () {
		return {
			// receiveAmount: ''
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
