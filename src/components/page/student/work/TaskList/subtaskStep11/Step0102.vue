
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
			tableType: 'greenLoansCash',
			tableJson: {},
			arrList: [],
			showInputMap: {
			},
			// 控制某一个空能输入
			ReadOnlyMap: {
				// 首年绿贷（万）
				'first_year_green_loans': {
					incomeAmountReadonly: false,
					expenditureAmountReadonly: false,
					balanceAmountReadonly: false
				},
				// 技术改造（万）
				'technological_transformation': {
					incomeAmountReadonly: false,
					expenditureAmountReadonly: false,
					balanceAmountReadonly: false
				},
				// 年度还债（万）
				'years_repay_debt': {
					incomeAmountReadonly: false,
					expenditureAmountReadonly: true,
					balanceAmountReadonly: true
				},
				// 年底绿贷余额
				'end_year_balance': {
					incomeAmountReadonly: false,
					expenditureAmountReadonly: false,
					balanceAmountReadonly: false
				}
			},
			// 控制提交的时候，返回值ajax
			sendAjaxMap: {
				// 首年绿贷（万）
				'first_year_green_loans': {
					incomeAmount: false,
					expenditureAmount: false,
					balanceAmount: false
				},
				// 技术改造（万）
				'technological_transformation': {
					incomeAmount: false,
					expenditureAmount: false,
					balanceAmount: false
				},
				// 年度还债（万）
				'years_repay_debt': {
					incomeAmount: false,
					expenditureAmount: true,
					balanceAmount: true
				},
				// 年底绿贷余额
				'end_year_balance': {
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
