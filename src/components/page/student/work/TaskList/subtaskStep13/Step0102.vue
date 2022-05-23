
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
			tableType: 'carbonStockQuota',
			showInputMap: {
			},
			// 控制某一个空能输入
			ReadOnlyMap: {
				// 期初库存
				'initial_quota': {
					countValueReadonly: false,
					worthValueReadonly: false
				},
				// 额度核定
				'amount_approved': {
					countValueReadonly: false,
					worthValueReadonly: false
				},
				// 实际排放
				'actual_emission': {
					countValueReadonly: false,
					worthValueReadonly: false
				},
				// 场外交易卖出
				'off_field_sell': {
					countValueReadonly: false,
					worthValueReadonly: false
				},
				// 场外交易买入
				'off_field_buy': {
					countValueReadonly: false,
					worthValueReadonly: false
				},
				// 场内交易卖出
				'on_field_sell': {
					countValueReadonly: false,
					worthValueReadonly: false
				},
				// 清缴超排处罚
				'exceed_emissions_punish': {
					countValueReadonly: true,
					worthValueReadonly: true
				},
				// 年末库存
				'year_end_quota': {
					countValueReadonly: true,
					worthValueReadonly: true
				}
			},
			// 控制提交的时候，返回值ajax
			sendAjaxMap: {
				// 期初库存
				'initial_quota': {
					worthValue: false,
					countValue: false
				},
				// 额度核定
				'amount_approved': {
					worthValue: true,
					countValue: true
				},
				// 实际排放
				'actual_emission': {
					worthValue: false,
					countValue: false
				},
				// 场外交易卖出
				'off_field_sell': {
					worthValue: false,
					countValue: false
				},
				// 场外交易买入
				'off_field_buy': {
					worthValue: false,
					countValue: false
				},
				// 场内交易卖出
				'on_field_sell': {
					worthValue: false,
					countValue: false
				},
				// 清缴超排处罚
				'exceed_emissions_punish': {
					worthValue: true,
					countValue: true
				},
				// 年末库存
				'year_end_quota': {
					worthValue: true,
					countValue: true
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
