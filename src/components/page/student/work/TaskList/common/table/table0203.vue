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
				<td class="">价值（元）</td>
			</tr>
		</table>
		<table class="demo-table" v-for="(item, index) in fromInfo" :key="index">
			<tr v-for="(childField, childFieldIndex) in item.childFieldList" :key="childFieldIndex">
				<td :rowspan="item.childFieldList.length" v-if="childFieldIndex === 0">
					{{item.fieldName}}
				</td>
				<td>
					{{childField.fieldName}}
				</td>
				<td :class="{'inputClass' : childField.countChangeReadonly}">
					<template v-if="childField.countChangeReadonly">
						<el-input-number :readonly="!childField.countChangeReadonly" controls-position="right" size="mini" :controls="false" v-model="childField.countChange" :precision="0" :step="1" :max="100000000"></el-input-number>
					</template>
					<template v-else>
						{{childField.countChange}}
					</template>
				</td>
				<td :class="{'inputClass' : childField.emissionChangeReadonly}">
					<template v-if="childField.emissionChangeReadonly">
						<el-input-number :readonly="!childField.emissionChangeReadonly" controls-position="right" size="mini" :controls="false" v-model="childField.emissionChange" :precision="0" :step="0.1" :max="100000000"></el-input-number>
					</template>
					<template v-else>
						{{childField.emissionChange}}
					</template>
				</td>
				<td :class="{'inputClass' : childField.valueChangeReadonly}">
					<template v-if="childField.valueChangeReadonly">
						<el-input-number :readonly="!childField.valueChangeReadonly" controls-position="right" size="mini" :controls="false" v-model="childField.valueChange" :precision="2" :step="1" :max="100000000"></el-input-number>
					</template>
					<template v-else>
						{{childField.valueChange}}
					</template>
				</td>
				<td :class="{'inputClass' : childField.countRemainReadonly}">
					<template v-if="childField.countRemainReadonly">
						<el-input-number :readonly="!childField.countRemainReadonly" controls-position="right" size="mini" :controls="false" v-model="childField.countRemain" :precision="0" :step="1" :max="100000000"></el-input-number>
					</template>
					<template v-else>
						{{childField.countRemain}}
					</template>
				</td>
				<td :class="{'inputClass' : childField.emissionRemainReadonly}">
					<template v-if="childField.emissionRemainReadonly">
						<el-input-number :readonly="!childField.emissionRemainReadonly" controls-position="right" size="mini" :controls="false" v-model="childField.emissionRemain" :precision="0" :step="0.1" :max="100000000"></el-input-number>
					</template>
					<template v-else>
						{{childField.emissionRemain}}
					</template>
				</td>
				<td :class="{'inputClass' : childField.valueRemainReadonly}">
					<template v-if="childField.valueRemainReadonly">
						<el-input-number :readonly="!childField.valueRemainReadonly" controls-position="right" size="mini" :controls="false" v-model="childField.valueRemain" :precision="2" :step="1" :max="100000000"></el-input-number>
					</template>
					<template v-else>
						{{childField.valueRemain}}
					</template>
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
				numberOf: '',
				emissions: '',
				valueOf: '',
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
		'showInputMap',
		'fromInfo'
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
