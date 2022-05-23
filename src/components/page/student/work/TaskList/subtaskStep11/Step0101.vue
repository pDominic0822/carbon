<template>
	<div class="stu">
		<table class="demo-table">
			<tr>
				<td>
					模拟经营
				</td>
				<td>
					绿贷还款
				</td>
				<td>
					模拟经营公司
				</td>
				<td>
					{{$storage.get('orgName') || '&nbsp;'}}
				</td>
			</tr>
			<tr>
				<td>绿贷金额（元）</td>
				<td colspan="3" >
					{{reenLoanRepaymen.orgLoansMoney}}
				</td>
			</tr>
			<tr>
				<td>利率</td>
				<td colspan="3">
					{{reenLoanRepaymen.greenLoanRate}}
				</td>
			</tr>
			<tr>
				<td colspan="4">
					<template v-if="reenLoanRepaymen.isRepayment == 0">
						<el-button type="success"  @click="sendPrice()">
							还款
						</el-button>
					</template>
					<template v-if="reenLoanRepaymen.isRepayment == 1">
						<el-button type="success" :disabled="isSaveData" @click="_handPlDialog()">
							披露
						</el-button>
					</template>
				</td>
			</tr>
		</table>
		<el-dialog
			title="数据披露单"
			append-to-body
			:visible.sync="isDialogVisible"
			width="80%"
			center>
			<div class="tesdddsdds">
				<pageTable ref="pageTable" :tableType="tableType" :showInputMap="showInputMap" :fromInfo ="fromInfo"></pageTable>
				<div class="mt20 center">
					<el-button type="success" :disabled="isSaveData" @click="getPageJson()">
						{{!isSaveData ? '保存' : '已经保存'}}
					</el-button>
				</div>
			</div>
		</el-dialog>
		<el-dialog
			title="年度还款"
			append-to-body
			:visible.sync="isPriceVisible"
			width="80%"
			center>
			<table class="demo-table">
				<tr>
					<td>申请金额</td>
					<td>
						{{reenLoanRepaymen.orgLoansMoney}}
					</td>
				</tr>
				<tr>
					<td>利率</td>
					<td>
						{{reenLoanRepaymen.greenLoanRate}}
					</td>
				</tr>
				<tr>
					<td>还款金额</td>
					<td>
						{{reenLoanRepaymen.repaymentMoney}}
					</td>
				</tr>
			</table>
			<div class="mt20 center">
				<el-button type="success" @click="savePriceJson()">
					确认
				</el-button>
			</div>
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
			tableType: 'dataDisclosureSheet',
			tableJson: {},
			arrList: [],
			isPriceVisible: false,
			showInputMap: {
				value1: true,
				value2: true,
				value3: true,
				value4: true,
				value5: true,
				value6: true,
				value7: true,
				value8: true,
				value9: true
			},
			// 控制某一个空能输入
			ReadOnlyMap: {
				// 技改投入资金（元）
				'retrofit_cost_money': {
					countValueReadonly: true
				},
				// 技改剩余绿贷资金（元）
				'retrofit_remaining_green_loan_money': {
					countValueReadonly: true
				},
				// 节能技改减少耗电（度）
				'energy_saving_reduce_power': {
					countValueReadonly: true
				},
				// 节能技改减少排放（kg）
				'energy_saving_reduce_emission': {
					countValueReadonly: true
				},
				// 减排技改减少排放（kg）
				'emission_reduction_reduce_emission': {
					countValueReadonly: true
				},
				// 合计技改减排量（kg）
				'total_reduce_emission': {
					countValueReadonly: true
				},
				// 年度产品碳标签（kg/个）
				'year_produce_label': {
					countValueReadonly: true
				},
				// 年度产品碳成本（元/个）
				'year_produce_carbon_cost': {
					countValueReadonly: true
				},
				// 年度还贷金额（元）
				'year_repay_loan_money': {
					countValueReadonly: true
				}
			},
			// 控制提交的时候，返回值ajax
			sendAjaxMap: {
				// 技改投入资金（元）
				'retrofit_cost_money': {
					countValue: true
				},
				// 技改剩余绿贷资金（元）
				'retrofit_remaining_green_loan_money': {
					countValue: true
				},
				// 节能技改减少耗电（度）
				'energy_saving_reduce_power': {
					countValue: true
				},
				// 节能技改减少排放（kg）
				'energy_saving_reduce_emission': {
					countValue: true
				},
				// 减排技改减少排放（kg）
				'emission_reduction_reduce_emission': {
					countValue: true
				},
				// 合计技改减排量（kg）
				'total_reduce_emission': {
					countValue: true
				},
				// 年度产品碳标签（kg/个）
				'year_produce_label': {
					countValue: true
				},
				// 年度产品碳成本（元/个）
				'year_produce_carbon_cost': {
					countValue: true
				},
				// 年度还贷金额（元）
				'year_repay_loan_money': {
					countValue: true
				}
			},
			trList: [],
			isDialog: false,
			isDialogVisible: false,
			isSaveData: false,
			reenLoanRepaymen: {},
			fromInfo: []
		};
	},
	created () {
		this.init();
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
		},
		sendPrice () {
			this.isPriceVisible = true;
		},
		savePriceJson () {
			this.$ajax({
				method: 'post',
				url: '/stDecisionLoansRecord/updateOrgGreenLoanRepayment',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					subtaskId: this.$route.query.subtaskId || '',
					taskId: this.$route.query.taskId || '',
					industryId: this.$route.query.industryId || '',
					clazzYearsPushId: this.$route.query.clazzYearsPushId || '',
					decisionLoansRecordId: this.reenLoanRepaymen.decisionLoansRecordId
				}
			}).then(res => {
				if (res.success) {
					this.$store.commit('getPropertyTypeStatis', 'ownCashAmount');
					this.$confirm(`绿贷成功还款${this.reenLoanRepaymen.repaymentMoney}元`, '成功', {
						confirmButtonText: '确定',
						center: true,
						showCancelButton: false,
						type: 'success'
					}).then(() => {

					}).catch(() => {
					});
				}
			});
		},
		init () {
			this.$ajax({
				method: 'post',
				url: '/stDecisionLoansRecord/getOrgGreenLoanRepaymentInfo',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					subtaskId: this.$route.query.subtaskId || '',
					clazzYearsPushId: this.$route.query.clazzYearsPushId || ''
				}
			}).then(res => {
				if (res.success) {
					if (res.data) {
						this.reenLoanRepaymen = res.data;
					}
					// if (res.data && res.data.applyAmount) { // 有值的时候，不再提交
					// 	this.isdisabledCollse = true;
					// }
					// if (res.data) {
					// 	this.fromInfo = res.data;
					// }
				}
			});
		},
		_handPlDialog () {
			this.isDialogVisible = true;
			this.getJsInit();
		},
		showPageJson () {
		}
	}
};
</script>

<style lang="scss" scoped>
.stu{
	color: white;
	.chooseBox{
		text-align: center;
		margin: 20 auto;
	}
}
.tesdddsdds{
	background: #2c325e;
}
</style>
