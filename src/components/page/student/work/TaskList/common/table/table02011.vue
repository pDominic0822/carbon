<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr class="noborder yellowSty">
				<td class="noneBor" colspan="3">年末损益</td>
			</tr>
			<tr>
				<td class="redSty">分类</td>
				<td class="redSty">项目</td>
				<td class="redSty">数值</td>
			</tr>
			<tr>
				<td rowspan="3">年度收入</td>
				<td>产品销售 （元）</td>
				<td :class="{'inputClass' : showInputMap.value1}">
					<input :readonly="!showInputMap.value1" type="text" v-model="form.value1" class="inputA">
				</td>
			</tr>
			<tr>
				<td>配额碳资产销售（元）</td>
				<td :class="{'inputClass' : showInputMap.value2}">
					<input :readonly="!showInputMap.value2" type="text" v-model="form.value2" class="inputA">
				</td>
			</tr>
			<tr>
				<td>收入合计</td>
				<td :class="{'inputClass' : showInputMap.value3}">
					<input :readonly="!showInputMap.value3" type="text" v-model="form.value3" class="inputA">
				</td>
			</tr>
			<tr>
				<td rowspan="10">成本费用</td>
				<td>物料消耗（元）</td>
				<td :class="{'inputClass' : showInputMap.value4}">
					<input :readonly="!showInputMap.value4" type="text" v-model="form.value4" class="inputA">
				</td>
			</tr>
			<tr>
				<td>绿电消耗（元）</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value5" class="inputA">
				</td>
			</tr>
			<tr>
				<td>煤电消耗（元）</td>
				<td :class="{'inputClass' : showInputMap.value6}">
					<input :readonly="!showInputMap.value6" type="text" v-model="form.value6" class="inputA">
				</td>
			</tr>
			<tr>
				<td>碳汇消耗（元）</td>
				<td :class="{'inputClass' : showInputMap.value7}">
					<input :readonly="!showInputMap.value7" type="text" v-model="form.value7" class="inputA">
				</td>
			</tr>
			<tr>
				<td>超排罚款（元）</td>
				<td :class="{'inputClass' : showInputMap.value8}">
					<input :readonly="!showInputMap.value8" type="text" v-model="form.value8" class="inputA">
				</td>
			</tr>
			<tr>
				<td>订单违约罚款（元）</td>
				<td :class="{'inputClass' : showInputMap.value9}">
					<input :readonly="!showInputMap.value9" type="text" v-model="form.value9" class="inputA">
				</td>
			</tr>
			<tr>
				<td>年度固定成本（元）</td>
				<td :class="{'inputClass' : showInputMap.value10}">
					<input :readonly="!showInputMap.value10" type="text" v-model="form.value10" class="inputA">
				</td>
			</tr>
			<tr>
				<td>绿贷还贷（元）</td>
				<td :class="{'inputClass' : showInputMap.value11}">
					<input :readonly="!showInputMap.value11" type="text" v-model="form.value11" class="inputA">
				</td>
			</tr>
			<tr>
				<td>资产折旧（元）</td>
				<td :class="{'inputClass' : showInputMap.value12}">
					<input :readonly="!showInputMap.value12" type="text" v-model="form.value12" class="inputA">
				</td>
			</tr>
			<tr>
				<td>成本费用合计</td>
				<td :class="{'inputClass' : showInputMap.value13}">
					<input :readonly="!showInputMap.value13" type="text" v-model="form.value13" class="inputA">
				</td>
			</tr>
			<tr>
				<td>年末损益</td>
				<td>年末损益（元）</td>
				<td :class="{'inputClass' : showInputMap.value14}">
					<input :readonly="!showInputMap.value14" type="text" v-model="form.value14" class="inputA">
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
				value1: '',
				value2: '',
				value3: '',
				value4: '',
				value5: '',
				value6: '',
				value7: '',
				value8: '',
				value9: '',
				value10: '',
				value11: '',
				value12: '',
				value13: '',
				value14: ''
			}
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
