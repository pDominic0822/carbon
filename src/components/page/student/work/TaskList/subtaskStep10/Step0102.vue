
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
			tableType: 'orderDeliverRecord',
			tableJson: {},
			arrList: [],
			showInputMap: {
			},
			// 控制某一个空能输入
			ReadOnlyMap: {
				// 订单数量（个）
				'order_count': {
					countValueReadonly: true
				},
				// 交付数量（个）
				'deliver_count': {
					countValueReadonly: true
				},
				// 获得订单收入（元）
				'order_income': {
					countValueReadonly: true
				},
				// 违约罚款（元）
				'default_penalty': {
					countValueReadonly: true
				},
				// 消耗碳汇碳资产(kg)
				'consume_carbon_sink': {
					countValueReadonly: true
				},
				// 产品碳标签（kg/个）
				'product_label': {
					countValueReadonly: true
				}
			},
			// 控制提交的时候，返回值ajax
			sendAjaxMap: {
				// 订单数量（个）
				'order_count': {
					countValue: true
				},
				// 交付数量（个）
				'deliver_count': {
					countValue: true
				},
				// 获得订单收入（元）
				'order_income': {
					countValue: true
				},
				// 违约罚款（元）
				'default_penalty': {
					countValue: true
				},
				// 消耗碳汇碳资产(kg)
				'consume_carbon_sink': {
					countValue: true
				},
				// 产品碳标签（kg/个）
				'product_label': {
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
