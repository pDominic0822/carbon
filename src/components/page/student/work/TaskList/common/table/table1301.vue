<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr>
				<td colspan="4">配额清缴</td>
			</tr>
			<tr>
				<td>年度核定碳配额( kg )</td>
				<td :class="{'inputClass' : showInputMap.value1}">
					<input :readonly="!showInputMap.value1" type="number" v-model="form.value1" class="inputA">
				</td>
				<td>年度实际排放量( kg )</td>
				<td :class="{'inputClass' : showInputMap.value2}">
					<input :readonly="!showInputMap.value2" type="number" v-model="form.value2" class="inputA">
				</td>
			</tr>
			<tr>
				<td>年初碳配额库存( kg )</td>
				<td :class="{'inputClass' : showInputMap.value3}">
					<input :readonly="!showInputMap.value3" type="number" v-model="form.value3" class="inputA">
				</td>
				<td>年度买入配额( kg )</td>
				<td :class="{'inputClass' : showInputMap.value4}">
					<input :readonly="!showInputMap.value4" type="number" v-model="form.value4" class="inputA">
				</td>
			</tr>
			<tr>
				<td>年度碳排放超排( kg )</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="number" v-model="form.value5" class="inputA">
				</td>
				<td>超排罚款金额( kg )</td>
				<td :class="{'inputClass' : showInputMap.value6}">
					<input :readonly="!showInputMap.value6" type="number" v-model="form.value6" class="inputA">
				</td>
			</tr>
			<tr>
				<td>配额清缴结余( kg )</td>
				<td :class="{'inputClass' : showInputMap.value7}">
					<input :readonly="!showInputMap.value7" type="number" v-model="form.value7" class="inputA">
				</td>
				<td>买入配额的费用( kg )</td>
				<td :class="{'inputClass' : showInputMap.value8}">
					<input :readonly="!showInputMap.value8" type="number" v-model="form.value8" class="inputA">
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
				value8: ''
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
