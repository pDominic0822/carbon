<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr class="noborder yellowSty">
				<td class="noneBor" colspan="8">库存物料</td>
			</tr>
			<tr>
				<td class="redSty" colspan="2"></td>
				<td class="redSty" colspan="3">变化</td>
				<td class="redSty" colspan="3">余额数</td>
			</tr>
			<tr>
				<td>分类</td>
				<td>项目</td>
				<!-- countChange -->
				<td>数量(包)</td>
				<!-- emissionChange -->
				<td>排放(Kg)</td>
				<!-- valueChange -->
				<td>价值（元）</td>
				<!-- countRemain -->
				<td>数量(包)</td>
				<!-- emissionRemain -->
				<td>排放(Kg)</td>
				<!-- valueRemain -->
				<td>价值（元）</td>
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
						<el-input-number :readonly="!childField.emissionChangeReadonly" controls-position="right" size="mini" :controls="false" v-model="childField.emissionChange" :precision="0" :step="1" :max="100000000"></el-input-number>
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
			fromInfo:
			[{'fieldSort': 100, 'fieldName': '期初库存', 'childFieldList': [{'fieldSort': 95, 'fieldName': '期初库存', 'childFieldList': [], 'fieldCode': 'begin_period_stock', 'tableKeyId': 95, 'workFieldValue': null}], 'fieldCode': 'begin_period_stock', 'tableKeyId': 88, 'workFieldValue': null}, {'fieldSort': 90, 'fieldName': '期中采购', 'childFieldList': [{'fieldSort': 85, 'fieldName': '期中采购', 'childFieldList': [], 'fieldCode': 'midterm_purchase_material', 'tableKeyId': 96, 'workFieldValue': null}], 'fieldCode': 'midterm_purchase', 'tableKeyId': 89, 'workFieldValue': null}, {'fieldSort': 80, 'fieldName': '期中消耗', 'childFieldList': [{'fieldSort': 75, 'fieldName': '消耗合计数量', 'childFieldList': [], 'fieldCode': 'total_midterm_consume', 'tableKeyId': 91, 'workFieldValue': null}, {'fieldSort': 70, 'fieldName': '期初消耗', 'childFieldList': [], 'fieldCode': 'begin_period_midterm_consume', 'tableKeyId': 92, 'workFieldValue': null}, {'fieldSort': 65, 'fieldName': '采购消耗', 'childFieldList': [], 'fieldCode': 'purchase_midterm_consume', 'tableKeyId': 93, 'workFieldValue': null}], 'fieldCode': 'midterm_consume', 'tableKeyId': 90, 'workFieldValue': null}, {'fieldSort': 60, 'fieldName': '期末库存', 'childFieldList': [{'fieldSort': 55, 'fieldName': '期末库存', 'childFieldList': [], 'fieldCode': 'end_period_stock', 'tableKeyId': 97, 'workFieldValue': null}], 'fieldCode': 'end_period', 'tableKeyId': 94, 'workFieldValue': null}],
			form: {
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
				value32: '',
				value33: '',
				value34: '',
				value35: '',
				value36: ''
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
