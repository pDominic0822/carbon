<template>
	<div class="stu">
		<div>
			<el-button type="info" @click="_handCommunication()">交流区</el-button>
			<el-button type="info">决策提示</el-button>
		</div>
		<el-tabs v-model="tabsVal" @tab-click="handleClick">
			<el-tab-pane v-for="(tabsItem, index) in tabList"
			:key="index" :label="tabsItem.label">
			</el-tab-pane>
		</el-tabs>
		<pageTable ref="pageTable" :tableType="tableType" :tableJson="tableJson" :showInputMap="showInputMap"></pageTable>
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
			arrList: [],
			showInputMap: {},
			isCommunication: false
		};
	},
	components: {
		Step0101
	},
	created () {
	},
	methods: {
		handleClick () {
			let item = this.tabList[this.tabsVal];
			this.tableType = item.tableType;
		},
		_handCommunication () {
			this.isCommunication = true;
		}
		// getPageJson () {
		// 	let json = this.$refs.pageTable.getpageTableJson();
		// 	console.log(json);
		// }
	}
};
</script>

<style lang="scss" scoped>

</style>
