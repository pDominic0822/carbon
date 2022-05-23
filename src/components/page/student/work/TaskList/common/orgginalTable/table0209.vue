<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr class="noborder yellowSty">
				<td class="noneBor" colspan="2">订单交付记录</td>
			</tr>
			<tr>
				<td class="redSty">项目</td>
				<td class="redSty">数值</td>
			</tr>
			<tr v-for="(item, index) in fromInfo" :key="index">
				<td>
					{{item.fieldName}}
				</td>
				<td :class="{'inputClass' : item.countValueReadonly}">
					<template v-if="item.countValueReadonly">
						<el-input-number :readonly="!item.countValueReadonly" controls-position="right" size="mini" :controls="false" v-model="item.countValue" :precision="2" :step="0.1" :max="100000000"></el-input-number>
					</template>
					<template v-else>
						{{item.incomeAmount | formatNumber}}
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
			fromInfo: [{'fieldSort': 100, 'fieldName': '订单数量（个）', 'childFieldList': [], 'fieldCode': 'order_count', 'tableKeyId': 123, 'workFieldValue': null}, {'fieldSort': 95, 'fieldName': '交付数量（个）', 'childFieldList': [], 'fieldCode': 'deliver_count', 'tableKeyId': 124, 'workFieldValue': null}, {'fieldSort': 90, 'fieldName': '获得订单收入（元）', 'childFieldList': [], 'fieldCode': 'order_income', 'tableKeyId': 125, 'workFieldValue': null}, {'fieldSort': 85, 'fieldName': '违约罚款（元）', 'childFieldList': [], 'fieldCode': 'default_penalty', 'tableKeyId': 126, 'workFieldValue': null}, {'fieldSort': 80, 'fieldName': '消耗碳汇碳资产(kg)', 'childFieldList': [], 'fieldCode': 'consume_carbon_sink', 'tableKeyId': 127, 'workFieldValue': null}, {'fieldSort': 75, 'fieldName': '产品碳标签（kg/个）', 'childFieldList': [], 'fieldCode': 'product_label', 'tableKeyId': 128, 'workFieldValue': null}],
			form: {
				value1: '',
				value2: '',
				value3: '',
				value4: ''
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
