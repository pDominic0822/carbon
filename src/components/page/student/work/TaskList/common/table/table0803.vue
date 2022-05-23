<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr class="noborder yellowSty">
				<td class="noneBor" colspan="8">库存电力</td>
			</tr>
			<tr>
				<td class="redSty" colspan=""></td>
				<td class="redSty" colspan="">项目</td>
				<td class="redSty" colspan="3">变化</td>
				<td class="redSty" colspan="3">余额数</td>
			</tr>
			<tr>
				<td class=""></td>
				<td class="">项目</td>
				<td class="">数量(度)</td>
				<td class="">碳排放（kg）</td>
				<td class="">价值（元）</td>
				<td class="">数量(度)</td>
				<td class="">碳排放（kg）</td>
				<td class="">价值（元）></td>
			</tr>
			<tr>
				<td rowspan="2">期初库存</td>
				<td>煤电</td>
				<td :class="{'inputClass' : showInputMap.value1}">
					<input :readonly="!showInputMap.value1" type="text" v-model="form.value1" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value2}">
					<input :readonly="!showInputMap.value2" type="text" v-model="form.value2" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value3}">
					<input :readonly="!showInputMap.value3" type="text" v-model="form.value3" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.numberOf}">
					<input :readonly="!showInputMap.numberOf" type="text" v-model="form.numberOf" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.emissions}">
					<input :readonly="!showInputMap.emissions" type="text" v-model="form.emissions" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.valof}">
					<input :readonly="!showInputMap.valof" type="text" v-model="form.valof" class="inputA">
				</td>
			</tr>
			<tr>
				<td>绿电</td>
				<td :class="{'inputClass' : showInputMap.value4}">
					<input :readonly="!showInputMap.value4" type="text" v-model="form.value4" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value5" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value7" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value8" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value7" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value8" class="inputA">
				</td>
			</tr>

			<tr>
				<td rowspan="3">期中采购</td>
				<td>合计数量</td>
				<td :class="{'inputClass' : showInputMap.fillIn1}">
					<input :readonly="!showInputMap.fillIn1" type="text" v-model="form.fillIn1" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.fillIn2}">
					<input :readonly="!showInputMap.fillIn2" type="text" v-model="form.fillIn2" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.fillIn3}">
					<input :readonly="!showInputMap.fillIn3" type="text" v-model="form.fillIn3" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value12" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value7" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value8" class="inputA">
				</td>
			</tr>
			<tr>
				<td>绿电</td>
				<td :class="{'inputClass' : showInputMap.fillIn4}">
					<input :readonly="!showInputMap.fillIn4" type="text" v-model="form.fillIn4" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.fillIn5}">
					<input :readonly="!showInputMap.fillIn5" type="text" v-model="form.fillIn5" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.fillIn6}">
					<input :readonly="!showInputMap.fillIn6" type="text" v-model="form.fillIn6" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.fillIn7}">
					<input :readonly="!showInputMap.fillIn7" type="text" v-model="form.fillIn7" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.fillIn8}">
					<input :readonly="!showInputMap.fillIn8" type="text" v-model="form.fillIn8" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.fillIn9}">
					<input :readonly="!showInputMap.fillIn9" type="text" v-model="form.fillIn9" class="inputA">
				</td>
			</tr>
			<tr>
				<td>煤电</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value13" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value14" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value15" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value16" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value7" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value8" class="inputA">
				</td>
			</tr>
			<tr>
				<td rowspan="5">期中消耗</td>
				<td>合计数量</td>
				<td :class="{'inputClass' : showInputMap.fillIn31}">
					<input :readonly="!showInputMap.fillIn31" type="text" v-model="form.fillIn31" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value18" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value19" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value20" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value7" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value7" class="inputA">
				</td>
			</tr>
			<tr>
				<td>期初绿电</td>
				<td :class="{'inputClass' : showInputMap.fillIn37}">
					<input :readonly="!showInputMap.fillIn37" type="text" v-model="form.fillIn37" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.fillIn38}">
					<input :readonly="!showInputMap.fillIn38" type="text" v-model="form.fillIn38" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.fillIn39}">
					<input :readonly="!showInputMap.fillIn39" type="text" v-model="form.fillIn39" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value20" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value7" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value7" class="inputA">
				</td>
			</tr>
			<tr>
				<td>采购绿电</td>
				<td :class="{'inputClass' : showInputMap.fillIn43}">
					<input :readonly="!showInputMap.fillIn43" type="text" v-model="form.fillIn43" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.fillIn44}">
					<input :readonly="!showInputMap.fillIn44" type="text" v-model="form.fillIn44" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.fillIn45}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.fillIn45" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value20" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value7" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value7" class="inputA">
				</td>
			</tr><tr>
				<td>期初绿电</td>
				<td :class="{'inputClass' : showInputMap.fillIn49}">
					<input :readonly="!showInputMap.fillIn49" type="text" v-model="form.fillIn49" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.fillIn50}">
					<input :readonly="!showInputMap.fillIn50" type="text" v-model="form.fillIn50" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.fillIn51}">
					<input :readonly="!showInputMap.fillIn51" type="text" v-model="form.fillIn51" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value20" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value7" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value7" class="inputA">
				</td>
			</tr><tr>
				<td>采购绿电</td>
				<td :class="{'inputClass' : showInputMap.fillIn55}">
					<input :readonly="!showInputMap.fillIn55" type="text" v-model="form.fillIn55" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.fillIn56}">
					<input :readonly="!showInputMap.fillIn56" type="text" v-model="form.fillIn56" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.fillIn57}">
					<input :readonly="!showInputMap.fillIn57" type="text" v-model="form.fillIn57" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value20" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value7" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value7" class="inputA">
				</td>
			</tr>
			<tr>
				<td rowspan="2">期末库存</td>
				<td>煤电</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value17" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value18" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value19" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.fillIn64}">
					<input :readonly="!showInputMap.fillIn64" type="text" v-model="form.fillIn64" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.fillIn65}">
					<input :readonly="!showInputMap.fillIn65" type="text" v-model="form.fillIn65" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.fillIn66}">
					<input :readonly="!showInputMap.fillIn66" type="text" v-model="form.fillIn66" class="inputA">
				</td>
			</tr>
			<tr>
				<td>绿电</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value17" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value18" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.value5}">
					<input :readonly="!showInputMap.value5" type="text" v-model="form.value19" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.fillIn70}">
					<input :readonly="!showInputMap.fillIn70" type="text" v-model="form.fillIn70" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.fillIn71}">
					<input :readonly="!showInputMap.fillIn71" type="text" v-model="form.fillIn71" class="inputA">
				</td>
				<td :class="{'inputClass' : showInputMap.fillIn72}">
					<input :readonly="!showInputMap.fillIn72" type="text" v-model="form.fillIn72" class="inputA">
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
				fillIn1: '',
				fillIn2: '',
				fillIn3: '',
				fillIn4: '',
				fillIn5: '',
				fillIn6: '',
				fillIn7: '',
				fillIn8: '',
				fillIn9: '',
				fillIn31: '',
				fillIn37: '',
				fillIn38: '',
				fillIn39: '',
				fillIn43: '',
				fillIn44: '',
				fillIn45: '',
				fillIn49: '',
				fillIn50: '',
				fillIn51: '',
				fillIn55: '',
				fillIn56: '',
				fillIn57: '',
				fillIn64: '',
				fillIn65: '',
				fillIn66: '',
				fillIn70: '',
				fillIn71: '',
				fillIn72: '',
				value1: '',
				value2: '',
				value3: '',
				numberOf: '',
				emissions: '',
				valof: '',
				value7: '',
				value8: '',
				value9: '',
				value10: '',
				value11: '',
				value12: '',
				value13: '',
				value14: '',
				value15: '',
				value16: '',
				value17: '',
				value18: '',
				value19: '',
				value20: '',
				value21: '',
				value22: '',
				value23: '',
				value24: '',
				value25: '',
				value26: '',
				value27: '',
				value28: '',
				value29: '',
				value30: '',
				value31: '',
				value32: ''
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
