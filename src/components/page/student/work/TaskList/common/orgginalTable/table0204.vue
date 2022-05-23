<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr class="noborder yellowSty">
				<td class="noneBor" colspan="3">技改记录</td>
			</tr>
			<tr>
				<td class="redSty"></td>
				<td class="redSty" colspan="">项目</td>
				<td class="redSty" colspan="">数值</td>
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
				<td :class="{'inputClass' : childField.countValueReadonly}">
					<template v-if="childField.countValueReadonly">
						<el-input-number :readonly="!childField.countValueReadonly" controls-position="right" size="mini" :controls="false" v-model="childField.countValue" :precision="0" :step="1" :max="100000000"></el-input-number>
					</template>
					<template v-else>
						{{childField.countValue}}
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
			fromInfo: [{'fieldSort': 100, 'fieldName': '期初', 'childFieldList': [{'fieldSort': 95, 'fieldName': '生产线耗电（度/季度）', 'childFieldList': [], 'fieldCode': 'begin_production_electricity', 'tableKeyId': 80, 'workFieldValue': null}, {'fieldSort': 90, 'fieldName': '生产线排放（kg/季度）', 'childFieldList': [], 'fieldCode': 'begin_production_emission', 'tableKeyId': 81, 'workFieldValue': null}], 'fieldCode': 'begin_period', 'tableKeyId': 79, 'workFieldValue': null}, {'fieldSort': 85, 'fieldName': '技改', 'childFieldList': [{'fieldSort': 80, 'fieldName': '能耗降低（度/季度）', 'childFieldList': [], 'fieldCode': 'electricity_reduce', 'tableKeyId': 83, 'workFieldValue': null}, {'fieldSort': 75, 'fieldName': '排放减少（kg/季度）', 'childFieldList': [], 'fieldCode': 'emission_reduce', 'tableKeyId': 84, 'workFieldValue': null}], 'fieldCode': 'technology_retrofit', 'tableKeyId': 82, 'workFieldValue': null}, {'fieldSort': 70, 'fieldName': '期末', 'childFieldList': [{'fieldSort': 65, 'fieldName': '生产线耗电（度/季度）', 'childFieldList': [], 'fieldCode': 'end_production_electricity', 'tableKeyId': 86, 'workFieldValue': null}, {'fieldSort': 60, 'fieldName': '生产线排放（kg/季度）', 'childFieldList': [], 'fieldCode': 'end_production_emission', 'tableKeyId': 87, 'workFieldValue': null}], 'fieldCode': 'end_period', 'tableKeyId': 85, 'workFieldValue': null}],
			form: {
				numerical: '',
				numerical2: '',
				value3: '',
				value4: '',
				value5: '',
				value6: ''
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
