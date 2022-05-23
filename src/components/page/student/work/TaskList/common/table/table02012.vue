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
				<td rowspan="8">年末资产</td>
				<td>现金（万）</td>
				<td :class="{'inputClass' : showInputMap.value1}">
					<input :readonly="!showInputMap.value1" type="text" v-model="form.value1" class="inputA">
				</td>
			</tr>
			<tr>
				<td>绿贷现金（万）</td>
				<td :class="{'inputClass' : showInputMap.value2}">
					<input :readonly="!showInputMap.value2" type="text" v-model="form.value2" class="inputA">
				</td>
			</tr>
			<tr>
				<td>生产线资产（万）</td>
				<td :class="{'inputClass' : showInputMap.value3}">
					<input :readonly="!showInputMap.value3" type="text" v-model="form.value3" class="inputA">
				</td>
			</tr>
			<tr>
				<td>库存配额碳资产（万）</td>
				<td :class="{'inputClass' : showInputMap.value4}">
					<input :readonly="!showInputMap.value4" type="text" v-model="form.value4" class="inputA">
				</td>
			</tr>
			<tr>
				<td>库存碳汇碳资产（万）</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value5" class="inputA">
				</td>
			</tr>
			<tr>
				<td>库存物料（万）</td>
				<td :class="{'inputClass' : showInputMap.value6}">
					<input :readonly="!showInputMap.value6" type="text" v-model="form.value6" class="inputA">
				</td>
			</tr>
			<tr>
				<td>库存绿电（万）</td>
				<td :class="{'inputClass' : showInputMap.value7}">
					<input :readonly="!showInputMap.value7" type="text" v-model="form.value7" class="inputA">
				</td>
			</tr>
			<tr>
				<td>库存煤电（万）</td>
				<td :class="{'inputClass' : showInputMap.value8}">
					<input :readonly="!showInputMap.value8" type="text" v-model="form.value8" class="inputA">
				</td>
			</tr>
			<tr>
				<td>资产合计</td>
				<td :class="{'inputClass' : showInputMap.value9}">
					<input :readonly="!showInputMap.value9" type="text" v-model="form.value9" class="inputA">
				</td>
			</tr>
			<tr>
				<td rowspan="3">年末负债</td>
				<td>绿贷利息（万）</td>
				<td :class="{'inputClass' : showInputMap.value10}">
					<input :readonly="!showInputMap.value10" type="text" v-model="form.value10" class="inputA">
				</td>
			</tr>
			<tr>
				<td>绿贷本金（万）</td>
				<td :class="{'inputClass' : showInputMap.value11}">
					<input :readonly="!showInputMap.value11" type="text" v-model="form.value11" class="inputA">
				</td>
			</tr>
			<tr>
				<td>负债合计</td>
				<td :class="{'inputClass' : showInputMap.value12}">
					<input :readonly="!showInputMap.value12" type="text" v-model="form.value12" class="inputA">
				</td>
			</tr>
			<tr>
				<td>年末权益</td>
				<td>年末权益（万）</td>
				<td :class="{'inputClass' : showInputMap.value13}">
					<input :readonly="!showInputMap.value13" type="text" v-model="form.value13" class="inputA">
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
				value13: ''
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
