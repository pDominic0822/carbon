
<template>
	<div class="stu">
		<!-- 绿贷现金余额 -->
		<pageTable ref="pageTable" :tableType="tableType" :showInputMap="showInputMap" :fromInfo ="fromInfo"></pageTable>
		<div class="mt20 center">
			<el-button type="success" :disabled="isSaveData" @click="getPageJson()">
				{{!isSaveData ? '保存' : '已经保存'}}
			</el-button>
		</div>
		<el-dialog
			title="正确答案弹窗"
			:visible.sync="dialogreturnDataVisible"
			width="820px"
			append-to-body
			height="560px"
			>
			<returnMap v-if="dialogreturnDataVisible" :tableType="tableType" :returnDataMap="returnDataMap"></returnMap>
		</el-dialog>
	</div>
</template>

<script>
import { InitHomeWork, GetPageJsonHomeWork } from './../common/js/sendHomeWork';
export default {
	name: 'my-course',
	data () {
		return {
			InitHomeWork: InitHomeWork,
			GetPageJsonHomeWork: GetPageJsonHomeWork,
			// --------返回错误弹窗开始
			dialogreturnDataVisible: false,
			returnDataMap: [],
			// ------------返回错误弹窗结束
			isSaveData: false,
			tableType: 'ownCashBalance',
			showInputMap: {
			},
			// 控制某一个空能输入
			ReadOnlyMap: {
				// 年初余额（元）
				'beginning_balance': {
					incomeAmountReadonly: false,
					expenditureAmountReadonly: false,
					balanceAmountReadonly: false
				},
				// 碳汇竞购（元）
				'carbon_sink_bid': {
					incomeAmountReadonly: false,
					expenditureAmountReadonly: true,
					balanceAmountReadonly: true
				},
				// 技术改造（元）（无绿贷时）
				'technological_transformation': {
					incomeAmountReadonly: false,
					expenditureAmountReadonly: false,
					balanceAmountReadonly: false
				},
				// 物料采购（元）
				'materials_purchase': {
					incomeAmountReadonly: false,
					expenditureAmountReadonly: false,
					balanceAmountReadonly: false
				},
				// 煤电采购（元）
				'coal_power_purchase': {
					incomeAmountReadonly: false,
					expenditureAmountReadonly: false,
					balanceAmountReadonly: false
				},
				// 绿电采购（元）
				'green_power_purchase': {
					incomeAmountReadonly: false,
					expenditureAmountReadonly: false,
					balanceAmountReadonly: false
				},
				// 销售收入（元）
				'sales_revenue': {
					incomeAmountReadonly: false,
					expenditureAmountReadonly: false,
					balanceAmountReadonly: false
				},
				// 订单违约罚款（元）
				'order_violation_penalty': {
					incomeAmountReadonly: false,
					expenditureAmountReadonly: false,
					balanceAmountReadonly: false
				},
				// 绿贷还款（元）（无绿贷时）
				'green_loan_repayment': {
					incomeAmountReadonly: false,
					expenditureAmountReadonly: false,
					balanceAmountReadonly: false
				},
				// 配额场外交易收入（元）
				'quota_off_field_trade_income': {
					incomeAmountReadonly: false,
					expenditureAmountReadonly: false,
					balanceAmountReadonly: false
				},
				// 配额场内卖出收入（元）
				'quota_on_field_sell_income': {
					incomeAmountReadonly: false,
					expenditureAmountReadonly: false,
					balanceAmountReadonly: false
				},
				// 配额清缴超排罚款（元）
				'quota_super_row_fine': {
					incomeAmountReadonly: false,
					expenditureAmountReadonly: false,
					balanceAmountReadonly: false
				},
				// 年度固定成本（元）
				'year_fixed_cost': {
					incomeAmountReadonly: false,
					expenditureAmountReadonly: false,
					balanceAmountReadonly: false
				},
				// 年底现金余额（元）
				'end_cash_balance': {
					incomeAmountReadonly: false,
					expenditureAmountReadonly: false,
					balanceAmountReadonly: false
				}
			},
			// 控制提交的时候，返回值ajax
			sendAjaxMap: {
				// 年初余额（元）
				'beginning_balance': {
					incomeAmount: false,
					expenditureAmount: false,
					balanceAmount: false
				},
				// 碳汇竞购（元）
				'carbon_sink_bid': {
					incomeAmount: false,
					expenditureAmount: true,
					balanceAmount: true
				},
				// 技术改造（元）（无绿贷时）
				'technological_transformation': {
					incomeAmount: false,
					expenditureAmount: false,
					balanceAmount: false
				},
				// 物料采购（元）
				'materials_purchase': {
					incomeAmount: false,
					expenditureAmount: false,
					balanceAmount: false
				},
				// 煤电采购（元）
				'coal_power_purchase': {
					incomeAmount: false,
					expenditureAmount: false,
					balanceAmount: false
				},
				// 绿电采购（元）
				'green_power_purchase': {
					incomeAmount: false,
					expenditureAmount: false,
					balanceAmount: false
				},
				// 销售收入（元）
				'sales_revenue': {
					incomeAmount: false,
					expenditureAmount: false,
					balanceAmount: false
				},
				// 订单违约罚款（元）
				'order_violation_penalty': {
					incomeAmount: false,
					expenditureAmount: false,
					balanceAmount: false
				},
				// 绿贷还款（元）（无绿贷时）
				'green_loan_repayment': {
					incomeAmount: false,
					expenditureAmount: false,
					balanceAmount: false
				},
				// 配额场外交易收入（元）
				'quota_off_field_trade_income': {
					incomeAmount: false,
					expenditureAmount: false,
					balanceAmount: false
				},
				// 配额场内卖出收入（元）
				'quota_on_field_sell_income': {
					incomeAmount: false,
					expenditureAmount: false,
					balanceAmount: false
				},
				// 配额清缴超排罚款（元）
				'quota_super_row_fine': {
					incomeAmount: false,
					expenditureAmount: false,
					balanceAmount: false
				},
				// 年度固定成本（元）
				'year_fixed_cost': {
					incomeAmount: false,
					expenditureAmount: false,
					balanceAmount: false
				},
				// 年底现金余额（元）
				'end_cash_balance': {
					incomeAmount: false,
					expenditureAmount: false,
					balanceAmount: false
				}
			},
			fromInfo: []
		};
	},
	created () {
		this.getJsInit();
	},
	methods: {
		async getJsInit () {
			let obj = await this.InitHomeWork(this.tableType, this.ReadOnlyMap, this.sendAjaxMap);
			console.log(obj);
			this.fromInfo = obj['fromInfo'];
			this.isSaveData = obj['isSaveData'];
		},
		getPageJson () {
			this.GetPageJsonHomeWork(this.tableType, this.ReadOnlyMap, this.sendAjaxMap, this.fromInfo);
		}
	}
};
</script>

<style lang="scss" scoped>

</style>
