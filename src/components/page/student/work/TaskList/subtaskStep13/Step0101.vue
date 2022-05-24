<template>
	<div class="stu">
		<!-- <div>
			<el-button type="info" @click="_handCommunication()">交流区</el-button>
			<el-button type="info">决策提示</el-button>
		</div> -->
		<!-- <el-tabs v-model="tabsVal" @tab-click="handleClick">
			<el-tab-pane v-for="(tabsItem, index) in tabList"
			:key="index" :label="tabsItem.label">
			</el-tab-pane>
		</el-tabs> -->
		<!-- <pageTable ref="pageTable" :tableType="tableType" :tableJson="tableJson" :showInputMap="showInputMap"></pageTable> -->
		<table class="demo-table mt20">
			<tr class="noborder" colspan="4">
				<td class="blueSty">配额清缴</td>
			</tr>
			<tr>
				<td>年度核定碳配额（kg）</td>
				<td>
					<input type="text" v-model="form.approvedCarbonQuota" class="inputA">
				</td>
				<td>年度实际排放（kg）</td>
				<td>
					<input type="text" v-model="form.yearActualEmissionCount" class="inputA">
				</td>
			</tr>
			<tr>
				<td>年初碳配额库存（kg）</td>
				<td>
					<input type="text" v-model="form.beginYearQuotaStock" class="inputA">
				</td>
				<td>年度碳排放超排（kg）</td>
				<td>
					<input type="text" v-model="form.yearExceedEmissionCount" class="inputA">
				</td>
			</tr>
			<tr>
				<td>超排罚款金额（元）</td>
				<td>
					<input type="text" v-model="form.yearExceedEmissionAmerce" class="inputA">
				</td>
				<td>年度买入配额（kg）</td>
				<td>
					<input type="text" v-model="form.yearBuyQuotaCount" class="inputA">
				</td>
			</tr>
			<tr>
				<td>买入配额的费用（元）</td>
				<td>
					<input type="text" v-model="form.yearBuyQuotaValue" class="inputA">
				</td>
				<td>年度卖出配额（kg）</td>
				<td>
					<input type="text" v-model="form.yearSellQuotaCount" class="inputA">
				</td>
			</tr>
			<tr>
				<td>年度卖出配额收入（元）</td>
				<td>
					<input type="text" v-model="form.yearSellQuotaValue" class="inputA">
				</td>
				<td>配额清缴结余（kg）</td>
				<td>
					<input type="text" v-model="form.quotaClearSurplusCount" class="inputA">
				</td>
			</tr>
		</table>
		<div class="mt20 center">
			<el-button type="success" @click="getPageJson()">保存</el-button>
		</div>
		<el-dialog
		title="提示"
		append-to-body
		:visible.sync="isCommunication"
		width="90%"
		center>
		<Step0101></Step0101>
		</el-dialog>
	</div>
</template>

<script>
import Step0101 from './../subtaskStep02/Step0101.vue';
export default {
	name: 'my-course',
	data () {
		return {
			tabList: [
				{
					label: '买方区',
					tableType: 'pagetable130101'
				},
				{
					label: '卖方区',
					tableType: 'pagetable130102'
				}
			],
			tableType: 'pagetable130101',
			tableJson: {},
			form: {},
			arrList: [],
			showInputMap: {},
			isCommunication: false
		};
	},
	components: {
		Step0101
	},
	created () {
		this.init();
	},
	methods: {
		handleClick () {
			let item = this.tabList[this.tabsVal];
			this.tableType = item.tableType;
		},
		init () {
			this.$ajax({
				method: 'post',
				url: '/stOrgQuotaClearRecord/getStOrgQuotaClearRecord',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					subtaskId: this.$route.query.subtaskId || this.subtaskId || '',
					taskId: this.$route.query.taskId,
					clazzYearsPushId: this.$route.query.clazzYearsPushId || ''
				}
			}).then(res => {
				if (res.success && res.data) {
					this.form = res.data || {};
				}
			});
		},
		_handCommunication () {
			this.isCommunication = true;
		},
		getPageJson () {
			this.$ajax({
				method: 'post',
				url: '/stOrgQuotaClearRecord/updateOrgQuotaCLearRecordStock',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					subtaskId: this.$route.query.subtaskId || this.subtaskId || '',
					taskId: this.$route.query.taskId,
					clazzYearsPushId: this.$route.query.clazzYearsPushId || '',
					clearJson: JSON.stringify(this.form)
				}
			}).then(res => {
				if (res.success && res.data) {
					this.form = res.data.returnAnswerMap;
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.demo-table{
tr{
	td{
		color: #fff;
	}
}
}
</style>
