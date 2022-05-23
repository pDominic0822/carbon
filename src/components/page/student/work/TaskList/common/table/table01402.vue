<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr class="noborder thStyle">
				<td class="noneBor" colspan="4">绿贷申请单</td>
			</tr>
			<tr>
				<td>
					模拟经营
				</td>
				<td>
					绿贷申请
				</td>
				<td>
					模拟经营公司
				</td>
				<td>
					{{$storage.get('orgName') || '&nbsp;'}}
				</td>
			</tr>
			<tr>
				<td>绿贷金额（元）</td>
				<td colspan="3"  :class="{'inputClass' : showInputMap.applyAmount}">
					<el-input-number :readonly="!showInputMap.applyAmount" controls-position="right" size="mini" :step-strictly="true" :controls="false" v-model="fromInfo.applyAmount" :precision="2" :step="1000" :max="100000000"></el-input-number>
				</td>
			</tr>
			<tr>
				<td>利率</td>
				<td colspan="3">
					{{fromInfo.loansRate}}
				</td>
			</tr>
			<tr>
				<td>绿贷年限（年）</td>
				<td class="" colspan="3">
					{{fromInfo.loansYears}}
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
		};
	},
	// 接受
	props: [
		'showInputMap', 'fromInfo'
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
	.borderRed{
	color: red;
}
}
</style>
