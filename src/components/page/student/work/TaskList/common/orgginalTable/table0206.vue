<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr class="noborder yellowSty">
				<td class="noneBor" colspan="5">自有现金余额</td>
			</tr>
			<tr>
				<td class="redSty" colspan=""></td>
				<td class="redSty" colspan="">项目</td>
				<td class="redSty" colspan="">收入</td>
				<td class="redSty" colspan="">支出</td>
				<td class="redSty" colspan="">余额(万)</td>
			</tr>
			<tr v-for="(item, index) in fromInfo" :key="index">
				<td>
					{{index + 1}}
				</td>
				<td>
					{{item.fieldName}}
				</td>
				<td :class="{'inputClass' : item.incomeAmountReadonly}">
					<template v-if="item.incomeAmountReadonly">
						<el-input-number :readonly="!item.incomeAmountReadonly" controls-position="right" size="mini" :controls="false" v-model="item.incomeAmount" :precision="2" :step="0.1" :max="100000000"></el-input-number>
					</template>
					<template v-else>
						{{item.incomeAmount | formatNumber}}
					</template>
				</td>
				<td  :class="{'inputClass' : item.expenditureAmountReadonly}">
					<template v-if="item.expenditureAmountReadonly">
						<el-input-number :readonly="!item.expenditureAmountReadonly" controls-position="right" size="mini" :controls="false" v-model="item.expenditureAmount" :precision="2" :step="0.1" :max="100000000"></el-input-number>
					</template>
					<template v-else>
						{{item.expenditureAmount | formatNumber}}
					</template>
				</td>
				<td :class="{'inputClass' : item.balanceAmountReadonly}">
					<template v-if="item.balanceAmountReadonly">
						<el-input-number :readonly="!item.balanceAmountReadonly" controls-position="right" size="mini" :controls="false" v-model="item.balanceAmount" :precision="2" :step="0.1" :max="100000000"></el-input-number>
					</template>
					<template v-else>
						{{item.balanceAmount | formatNumber}}
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
			fromInfo: [{'fieldSort': 100, 'fieldName': '年初余额（元）', 'childFieldList': [], 'fieldCode': 'beginning_balance', 'tableKeyId': 64, 'workFieldValue': null}, {'fieldSort': 95, 'fieldName': '碳汇竞购（元）', 'childFieldList': [], 'fieldCode': 'carbon_sink_bid', 'tableKeyId': 65, 'workFieldValue': null}, {'fieldSort': 90, 'fieldName': '技术改造（元）（无绿贷时）', 'childFieldList': [], 'fieldCode': 'technological_transformation', 'tableKeyId': 66, 'workFieldValue': null}, {'fieldSort': 85, 'fieldName': '物料采购（元）', 'childFieldList': [], 'fieldCode': 'materials_purchase', 'tableKeyId': 67, 'workFieldValue': null}, {'fieldSort': 80, 'fieldName': '煤电采购（元）', 'childFieldList': [], 'fieldCode': 'coal_power_purchase', 'tableKeyId': 68, 'workFieldValue': null}, {'fieldSort': 75, 'fieldName': '绿电采购（元）', 'childFieldList': [], 'fieldCode': 'green_power_purchase', 'tableKeyId': 69, 'workFieldValue': null}, {'fieldSort': 70, 'fieldName': '销售收入（元）', 'childFieldList': [], 'fieldCode': 'sales_revenue', 'tableKeyId': 70, 'workFieldValue': null}, {'fieldSort': 65, 'fieldName': '订单违约罚款（元）', 'childFieldList': [], 'fieldCode': 'order_violation_penalty', 'tableKeyId': 71, 'workFieldValue': null}, {'fieldSort': 60, 'fieldName': '绿贷还款（元）（无绿贷时）', 'childFieldList': [], 'fieldCode': 'green_loan_repayment', 'tableKeyId': 72, 'workFieldValue': null}, {'fieldSort': 55, 'fieldName': '配额场外交易收入（元）', 'childFieldList': [], 'fieldCode': 'quota_off_field_trade_income', 'tableKeyId': 73, 'workFieldValue': null}, {'fieldSort': 50, 'fieldName': '配额场内卖出收入（元）', 'childFieldList': [], 'fieldCode': 'quota_on_field_sell_income', 'tableKeyId': 74, 'workFieldValue': null}, {'fieldSort': 45, 'fieldName': '配额清缴超排罚款（元）', 'childFieldList': [], 'fieldCode': 'quota_super_row_fine', 'tableKeyId': 75, 'workFieldValue': null}, {'fieldSort': 40, 'fieldName': '年度固定成本（元）', 'childFieldList': [], 'fieldCode': 'year_fixed_cost', 'tableKeyId': 76, 'workFieldValue': null}, {'fieldSort': 35, 'fieldName': '年底现金余额（元）', 'childFieldList': [], 'fieldCode': 'end_cash_balance', 'tableKeyId': 77, 'workFieldValue': null}]
		};
	},
	props: [
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
