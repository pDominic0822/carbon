<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr>
				<td colspan="3">库存碳配额</td>
			</tr>
			<tr class="noborder">
				<td class="redSty">项目</td>
				<td class="redSty">数值</td>
				<td class="redSty">价值（元）</td>
			</tr>
			<tr>
				<td>期初库存（Kg）</td>
				<td  :class="{'inputClass' : showInputMap.numerical}">
					<input type="num" :readonly="!showInputMap.numerical" v-model="form.numerical">
				</td>
				<td :class="{'inputClass' : showInputMap.valof}">
					<input :readonly="!showInputMap.valof" type="text" v-model="form.valof" class="inputA">
				</td>
			</tr>
			<tr>
				<td>额度核定（Kg）</td>
				<td  :class="{'inputClass' : showInputMap.value3}">
					<input :readonly="!showInputMap.value3" type="text" v-model="form.value3" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value4}">
					<input :readonly="!showInputMap.value4" type="text" v-model="form.value4" class="inputA">
				</td>
			</tr>
			<tr>
				<td>实际排放（Kg）</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input  :readonly="!showInputMap.value5" type="text" v-model="form.value5" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value6}">
					<input :readonly="!showInputMap.value6" type="text" v-model="form.value6" class="inputA">
				</td>
			</tr>
			<tr>
				<td>场外交易卖出（Kg）</td>
				<td :class="{'inputClass' : showInputMap.value7}">
					<input :readonly="!showInputMap.value7" type="text" v-model="form.value7" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value8}">
					<input :readonly="!showInputMap.value8" type="text" v-model="form.value8" class="inputA">
				</td>
			</tr>
			<tr>
				<td>清缴超排处罚（Kg）</td>
				<td :class="{'inputClass' : showInputMap.value9}">
					<input :readonly="!showInputMap.value9" type="text" v-model="form.value9" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value10}">
					<input :readonly="!showInputMap.value10" type="text" v-model="form.value10" class="inputA">
				</td>
			</tr>
			<tr>
				<td>超排处罚清缴（Kg）</td>
				<td :class="{'inputClass' : showInputMap.value11}">
					<input :readonly="!showInputMap.value11" type="text" v-model="form.value11" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value12}">
					<input :readonly="!showInputMap.value12" type="text" v-model="form.value12" class="inputA">
				</td>
			</tr>
			<tr>
				<td>年末库存配额（Kg）</td>
				<td :class="{'inputClass' : showInputMap.value13}">
					<input :readonly="!showInputMap.value13" type="text" v-model="form.value13" class="inputA">
				</td>
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
				numerical: '',
				valof: '',
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
	width: 550px;
	margin: 0 auto;
	color: #FFFFFF;
}
</style>
