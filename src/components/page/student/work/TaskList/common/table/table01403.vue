<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr class="noborder thStyle">
				<td class="noneBor" colspan="4">绿贷现金余额</td>
			</tr>
			<tr>
				<td>
					模拟经营
				</td>
				<td>
					绿贷申请
				</td>
				<td>
					组号
				</td>
				<td>
					{{$storage.get('orgName') || '&nbsp;'}}
				</td>
			</tr>
			<tr>
				<td>模拟经营公司</td>
				<td colspan="3">知链冶金公司</td>
			</tr>
			<tr>
				<td>绿贷金额（元）</td>
				<td colspan="3"  :class="{'inputClass' : showInputMap.allNum}">
					<input type="num" :readonly="!showInputMap.allNum" v-model="form.allNum">
				</td>
			</tr>
			<tr>
				<td>利率</td>
				<td colspan="3">
					1.50%
				</td>
			</tr>
			<tr>
				<td>绿贷年限（年）</td>
				<td class="" colspan="3" :class="{'inputClass' : showInputMap.year}">
					<!-- 5 -->
					<!-- readonly 只读-不能输入 -->
					<input type="num" :readonly="!showInputMap.year" v-model="form.year">
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
			form: {
				year: '',
				allNum: ''
			}
		};
	},
	// 接受
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
