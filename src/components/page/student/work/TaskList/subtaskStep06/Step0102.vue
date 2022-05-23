
<template>
	<div class="stu">
		<pageTable ref="pageTable" :fromInfo="fromInfo" :tableType="tableType"  :showInputMap="showInputMap"></pageTable>
		<div class="mt20 center">
			<el-button type="success" :disabled="isSaveData" @click="getPageJson()">
				{{!isSaveData ? '保存' : '已经保存'}}
			</el-button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'my-course',
	data () {
		return {
			tableType: 'pagetable0602',
			isSaveData: false,
			arrList: [],
			showInputMap: {
				retrofitCountA: true,
				retrofitCountB: true
			},
			fromInfo: {
				energySaving: {
					retrofitType: 'energySaving',
					retrofitCount: '',
					retrofitPrice: '',
					retrofitCost: '',
					reduceRate: ''
				},
				emissionReduction: {
					retrofitType: 'emissionReduction',
					retrofitCount: '',
					retrofitPrice: '',
					retrofitCost: '',
					reduceRate: ''
				}
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
				url: '/stOrgRetrofitRecord/findOrgYeRetrofitRecord',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					clazzYearsPushId: this.$route.query.clazzYearsPushId || ''
				}
			}).then(res => {
				if (res.success) {
					if (res.data.length > 0) {
						this.isSaveData = true;
						this.fromInfo.energySaving.retrofitCount = res.data[0].retrofitCount;
						this.fromInfo.emissionReduction.retrofitCount = res.data[1].retrofitCount;
					} else {
						this.isSaveData = false;
					}
				}
			});
		},
		getPageJson () {
			console.log(this.fromInfo);
			if (((this.fromInfo.energySaving.retrofitCount || 0) + (this.fromInfo.emissionReduction.retrofitCount || 0)) > 4) {
				this.$message({
					type: 'error',
					message: '技改合计不能大于4个季度'
				});
				return false;
			}
			let arr = [];
			arr[0] = {
				...this.fromInfo.energySaving || {}
			};
			arr[1] = {
				...this.fromInfo.emissionReduction || {}
			};
			// if (this.fromInfo.energySaving.retrofitCount === '') {
			// 	this.$message({
			// 		type: 'error',
			// 		message: '输入值不得为空'
			// 	});
			// }
			// if (this.fromInfo.emissionReduction.retrofitCount === '') {
			// 	this.$message({
			// 		type: 'error',
			// 		message: '输入值不得为空'
			// 	});
			// }
			this.$confirm('是否确认提交（只有一次提交机会）', '再次提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				center: true,
				type: 'warning'
			}).then(() => {
				this.$ajax({
					method: 'post',
					url: '/stOrgRetrofitRecord/saveStOrgRetrofitRecord',
					params: {
						moldId: this.$route.query.moldId || this.moldId || '',
						clazzYearsPushId: this.$route.query.clazzYearsPushId || '',
						subtaskId: this.$route.query.subtaskId || '',
						taskId: this.$route.query.taskId || '',
						industryId: this.$route.query.industryId || '',
						retrofitJson: JSON.stringify(arr)
					}
				}).then(res => {
					if (res.success) {
						this.$store.commit('getPropertyTypeStatis', 'greenLoansAmount');
						this.$store.commit('getPropertyTypeStatis', 'ownCashAmount');
						this.$message({
							type: 'success',
							message: '技改成功'
						});
						this.init();
					} else {
						this.$message({
							type: 'error',
							message: res.message
						});
					}
				});
			}).catch(() => {});
		}
	}
};
</script>

<style lang="scss" scoped>

</style>
