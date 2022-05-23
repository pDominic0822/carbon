
<template>
	<div class="stu">
		<div class="mb20">
			<el-button type="primary" @click="_ranking()">班级碳权排名</el-button>
		</div>
		<pageTable ref="pageTable" :tableType="tableType" :showInputMap="showInputMap" :fromInfo="fromInfo"></pageTable>
		<div class="mt20 center">
			<el-button type="success" :disabled="isSaveData" @click="getPageJson()">
				{{!isSaveData ? '提交' : '已经提交'}}
			</el-button>
		</div>
		<el-dialog
			title="碳权排名"
			:visible.sync="centerDialogVisible"
			width="30%"
			close-on-click-modal
			append-to-body
			center>
			<table class="demo-table">
				<tr>
					<td>排名</td>
					<td>碳权合计</td>
					<td>小组名称</td>
				</tr>
				<tr v-for="(item,index) in rankingArr" :key="index">
					<td>
						{{index + 1}}
					</td>
					<td>
						{{item.carbonRightsTotal}}
					</td>
					<td>
						{{item.orgName}}
					</td>
				</tr>
			</table>
		</el-dialog>
	</div>
</template>

<script>
export default {
	name: 'my-course',
	data () {
		return {
			tableType: 'pagetable0404',
			tableJson: {},
			arrList: [],
			isSaveData: false,
			centerDialogVisible: false,
			// applyTurns: '',
			showInputMap: {
				secondBuy: true
			},
			fromInfo: {},
			rankingArr: []
		};
	},
	created () {
		this.init();
	},
	methods: {
		init () {
			console.log(this.$route.query.taskId);
			this.$ajax({
				method: 'post',
				url: '/stOrgCarbonSinkRecord/getOrgSecondCarbonSinkRecord',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					subtaskId: this.$route.query.subtaskId || '',
					clazzYearsPushId: this.$route.query.clazzYearsPushId || ''
				}
			}).then(res => {
				if (res.success) {
					if (res.data) {
						this.fromInfo = res.data;
						if (res.data.secondBuy) {
							this.isSaveData = true;
						}
					}
				}
			});
		},
		_ranking () {
			this.centerDialogVisible = true;
			this.$ajax({
				method: 'post',
				url: '/stOrgCarbonSinkRecord/findCarbonRightsRankingList',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					clazzYearsPushId: this.$route.query.clazzYearsPushId || ''
				}
			}).then(res => {
				if (res.success) {
					if (res.data) {
						this.rankingArr = res.data;
					}
				}
			});
		},
		getPageJson () {
			if (this.fromInfo.firstBuy === '') {
				this.$message({
					type: 'error',
					message: '请先进行第一轮采购'
				});
				return false;
			}
			if (this.fromInfo.secondBuy === '') {
				this.$message({
					type: 'error',
					message: '第二轮采购数量不得为空'
				});
			}
			let price = this.fromInfo.unitSinkValue * this.fromInfo.secondBuy;
			this.$confirm(`是否购买${this.fromInfo.secondBuy}KG碳汇`, '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				center: true,
				type: 'warning'
			}).then(() => {
				this.$confirm(`将花费自由现金${price}元`, '再次提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					center: true,
					type: 'warning'
				}).then(() => {
					let worthValue = (this.fromInfo.unitSinkValue) * (this.fromInfo.secondBuy);
					this.$ajax({
						method: 'post',
						url: '/stOrgCarbonSinkRecord/saveStOrgCarbonSinkRecord',
						params: {
							moldId: this.$route.query.moldId || this.moldId || '',
							clazzYearsPushId: this.$route.query.clazzYearsPushId || '',
							subtaskId: this.$route.query.subtaskId || '',
							taskId: this.$route.query.taskId || '',
							applyAmount: this.fromInfo.secondBuy,
							applyTurns: 'secondBuy',
							worthValue: worthValue || ''
						}
					}).then(res => {
						if (res.success) {
							this.$store.commit('getPropertyTypeStatis', 'carbonSinkAmount');
							this.$store.commit('getPropertyTypeStatis', 'ownCashAmount');
							this.$confirm(`成功购买碳汇${this.fromInfo.secondBuy}KG`, '成功', {
								confirmButtonText: '确定',
								center: true,
								showCancelButton: false,
								type: 'success'
							}).then(() => {

							}).catch(() => {
							});
							this.init();
						}
					});
				}).catch(() => {});
			}).catch(() => {});
		}
	}
};
</script>

<style lang="scss" scoped>
.mb20{
	margin-bottom: 20px;
	text-align: right;
}
</style>
