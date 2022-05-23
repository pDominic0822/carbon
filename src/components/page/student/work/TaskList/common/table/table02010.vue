<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr class="noborder yellowSty">
				<td class="noneBor" colspan="2">数据披露</td>
			</tr>
			<tr>
				<td class="redSty">项目</td>
				<td class="redSty">数值</td>
			</tr>
			<tr>
				<td>已投入技改资金（万）</td>
				<td :class="{'inputClass' : showInputMap.value1}">
					<input :readonly="!showInputMap.value1" type="text" v-model="form.value1" class="inputA">
				</td>
			</tr>
			<tr>
				<td>剩余绿贷（万）</td>
				<td :class="{'inputClass' : showInputMap.value2}">
					<input :readonly="!showInputMap.value2" type="text" v-model="form.value2" class="inputA">
				</td>
			</tr>
			<tr>
				<td>节能项目减少耗电（万度）</td>
				<td :class="{'inputClass' : showInputMap.value3}">
					<input :readonly="!showInputMap.value3" type="text" v-model="form.value3" class="inputA">
				</td>
			</tr>
			<tr>
				<td>节能减少排放（Kg）</td>
				<td :class="{'inputClass' : showInputMap.value4}">
					<input :readonly="!showInputMap.value4" type="text" v-model="form.value4" class="inputA">
				</td>
			</tr>
			<tr>
				<td>消减排项目减少排放（Kg）</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value5" class="inputA">
				</td>
			</tr>
			<tr>
				<td>合计年度减排量（Kg）</td>
				<td :class="{'inputClass' : showInputMap.value6}">
					<input :readonly="!showInputMap.value6" type="text" v-model="form.value6" class="inputA">
				</td>
			</tr>
			<tr>
				<td>年度产品碳标签（kg/个）</td>
				<td :class="{'inputClass' : showInputMap.value7}">
					<input :readonly="!showInputMap.value7" type="text" v-model="form.value7" class="inputA">
				</td>
			</tr>
			<tr>
				<td>年度产品碳成本（元/个）</td>
				<td :class="{'inputClass' : showInputMap.value8}">
					<input :readonly="!showInputMap.value8" type="text" v-model="form.value8" class="inputA">
				</td>
			</tr>
			<tr>
				<td>年度还贷金额（万）</td>
				<td :class="{'inputClass' : showInputMap.value9}">
					<input :readonly="!showInputMap.value9" type="text" v-model="form.value9" class="inputA">
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
				value9: ''
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
