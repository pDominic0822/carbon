<template>
	<div class="stu">
		<el-tabs v-model="tabsVal" @tab-click="handleClick">
			<el-tab-pane v-for="(tabsItem, index) in tabList"
			:key="index" :label="tabsItem.label">
			</el-tab-pane>
		</el-tabs>
		<pageTable ref="pageTable" :tableType="tableType" :showInputMap="showInputMap"></pageTable>
		<div class="mt20 center">
			<el-button type="success" @click="getPageJson()">进入经营年</el-button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'my-course',
	data () {
		return {
			tabList: [
				{
					label: '生产线参数',
					tableType: 'pagetable0101'
				},
				{
					label: '数据披露',
					tableType: 'pagetable0102'
				},
				{
					label: '绿贷申请',
					tableType: 'pagetable0103'
				},
				{
					label: '数据披露',
					tableType: 'pagetable0104'
				}
			],
			tabsVal: '',
			tableType: 'pagetable0101',
			tableJson: {},
			arrList: [],
			showInputMap: {
			}
		};
	},
	created () {
	},
	methods: {
		handleClick () {
			let item = this.tabList[this.tabsVal];
			this.tableType = item.tableType;
		},
		getPageJson () {
			this.$confirm('是否确认提交（只有一次提交机会）', '再次提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				center: true,
				type: 'warning'
			}).then(() => {
				this.saveTableJson();
			}).catch(() => {});
		},
		saveTableJson () {
			this.$ajax({
				method: 'post',
				url: '/stClazzYearsPush/startOperateYearCarryRecord',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					clazzYearsPushId: this.$route.query.clazzYearsPushId || '',
					subtaskId: this.$route.query.subtaskId || '',
					taskId: this.$route.query.taskId || '',
					industryId: this.$route.query.industryId || ''
				}
			}).then(res => {
				if (res.success) {
					this.$message({
						type: 'success',
						message: '开启成功'
					});
				} else {
					this.$message({
						type: 'error',
						message: '开启失败'
					});
				}
			}).catch(err => {
				throw new Error(err);
			});
		}
	}
};
</script>

<style lang="scss" scoped>
</style>
