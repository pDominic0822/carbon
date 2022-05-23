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
			fromInfo: [{'fieldSort': 100, 'fieldName': '期初库存', 'childFieldList': [{'fieldSort': 95, 'fieldName': '绿电', 'childFieldList': [], 'fieldCode': 'begin_green_electricity', 'tableKeyId': 99, 'workFieldValue': null}, {'fieldSort': 90, 'fieldName': '煤电', 'childFieldList': [], 'fieldCode': 'begin_coal_electricity', 'tableKeyId': 100, 'workFieldValue': null}], 'fieldCode': 'begin_period_stock', 'tableKeyId': 98, 'workFieldValue': null}, {'fieldSort': 85, 'fieldName': '期中采购', 'childFieldList': [{'fieldSort': 80, 'fieldName': '合计数量', 'childFieldList': [], 'fieldCode': 'purchase_total', 'tableKeyId': 102, 'workFieldValue': null}, {'fieldSort': 75, 'fieldName': '绿电', 'childFieldList': [], 'fieldCode': 'purchase_green_electricity', 'tableKeyId': 103, 'workFieldValue': null}, {'fieldSort': 70, 'fieldName': '煤电', 'childFieldList': [], 'fieldCode': 'purchase_coal_electricity', 'tableKeyId': 104, 'workFieldValue': null}], 'fieldCode': 'midterm_purchase', 'tableKeyId': 101, 'workFieldValue': null}, {'fieldSort': 65, 'fieldName': '期中消耗', 'childFieldList': [{'fieldSort': 60, 'fieldName': '期初绿电', 'childFieldList': [], 'fieldCode': 'consume_begin_green_electricity', 'tableKeyId': 106, 'workFieldValue': null}, {'fieldSort': 55, 'fieldName': '采购绿电', 'childFieldList': [], 'fieldCode': 'consume_purchase_green_electricity', 'tableKeyId': 107, 'workFieldValue': null}, {'fieldSort': 50, 'fieldName': '期初煤电', 'childFieldList': [], 'fieldCode': 'consume_begin_coal_electricity', 'tableKeyId': 108, 'workFieldValue': null}, {'fieldSort': 45, 'fieldName': '采购煤电', 'childFieldList': [], 'fieldCode': 'consume_purchase_coal_electricity', 'tableKeyId': 109, 'workFieldValue': null}, {'fieldSort': 25, 'fieldName': '合计数量', 'childFieldList': [], 'fieldCode': 'consumer_total_count', 'tableKeyId': 122, 'workFieldValue': null}], 'fieldCode': 'midterm_consume', 'tableKeyId': 105, 'workFieldValue': null}, {'fieldSort': 40, 'fieldName': '期末库存', 'childFieldList': [{'fieldSort': 35, 'fieldName': '绿电', 'childFieldList': [], 'fieldCode': 'end_green_electricity', 'tableKeyId': 111, 'workFieldValue': null}, {'fieldSort': 30, 'fieldName': '煤电', 'childFieldList': [], 'fieldCode': 'end_coal_electricity', 'tableKeyId': 112, 'workFieldValue': null}], 'fieldCode': 'end_period_stock', 'tableKeyId': 110, 'workFieldValue': null}],
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
