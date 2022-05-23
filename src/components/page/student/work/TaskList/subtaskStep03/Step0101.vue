
<template>
	<div class="stu">
	<!-- 库存碳配额 -->
		<pageTable ref="pageTable" :tableType="tableType" :tableJson="tableJson" :showInputMap="showInputMap"></pageTable>
		<div class="mt20 center">
			<el-button type="success" :disabled="isSaveData" @click="getPageJson()">
				{{!isSaveData ? '领取' : '已领取'}}
			</el-button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'my-course',
	data () {
		return {
			tableType: 'pagetable013',
			tableJson: {},
			arrList: [],
			isSaveData: false,
			showInputMap: {
				receiveAmount: '',
				isReceive: ''
			}
		};
	},
	created () {
		this.init();
	},
	methods: {
		init () {
			this.$ajax({
				method: 'post',
				url: '/stOrgCarbonQuotaRecord/getYearsReceiveCarbonQuota',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					clazzYearsPushId: this.$route.query.clazzYearsPushId || ''
				}
			}).then(res => {
				if (res.success) {
					if (res.data) {
						this.showInputMap.receiveAmount = res.data.receiveAmount;
						this.showInputMap.isReceive = res.data.isReceive;
					}
					if (this.showInputMap.isReceive) {
						this.isSaveData = true;
					}
				}
			});
		},
		getPageJson () {
			let json = this.$refs.pageTable.getpageTableJson();
			console.log(json);
			this.$ajax({
				method: 'post',
				url: '/stOrgCarbonQuotaRecord/updateReceiveYearsCarbonQuota',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					subtaskId: this.$route.query.subtaskId || '',
					taskId: this.$route.query.taskId || '',
					clazzYearsPushId: this.$route.query.clazzYearsPushId || '',
					receiveAmount: this.showInputMap.receiveAmount || ''
				}
			}).then(res => {
				if (res.success) {
					this.init();
					this.$store.commit('getPropertyTypeStatis', 'carbonQuotaAmount');
					this.$confirm(`领取${this.showInputMap.receiveAmount}KG`, '成功', {
						confirmButtonText: '确定',
						center: true,
						showCancelButton: false,
						type: 'success'
					}).then(() => {

					}).catch(() => {
					});
				} else {
					this.$message({
						type: 'error',
						message: '领取成功'
					});
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>

</style>
