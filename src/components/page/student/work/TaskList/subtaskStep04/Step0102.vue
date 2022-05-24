
<template>
	<div class="stu">
		<div class="mb20">
			<el-button type="primary" @click="_ranking()">班级碳权排名</el-button>
		</div>
		<ul class="sell-box">
			<li>
				<div class="fl imgps">
				</div>
				<div class="fl sellinfo">
					<div class="span1 mt15">
						碳汇采购申请
						<p class="fr">
							模拟经营公司：{{$storage.get('orgName')}}
						</p>
					</div>
					<div class="mt20">
						<el-row :gutter="20">
							<el-col :span="6">
								当前年份：
							</el-col>
							<el-col :span="12">
								{{fromInfo.nowYearsTime || ''}}
							</el-col>
						</el-row>
					</div>
					<div class="mt20">
						<el-row :gutter="20">
							<el-col :span="6">
								采购单价( 元/kg )：
							</el-col>
							<el-col :span="12">
								{{fromInfo.unitSinkValue || ''}}
							</el-col>
						</el-row>
					</div>
					<div class="mt20">
						<el-row :gutter="20">
							<el-col :span="6">
								一轮采购数量( kg )：
							</el-col>
							<el-col :span="12">
								<el-input-number controls-position="right" size="mini" :controls="false" v-model="fromInfo.firstBuy" :precision="0" :step="1" :max="100000000"></el-input-number>
							</el-col>
						</el-row>
					</div>
					<div class="mt20">
						<el-row :gutter="20">
							<el-col :span="6">
								采购费用( 元 )：
							</el-col>
							<el-col :span="12">
								{{(fromInfo.unitSinkValue || 0) * (fromInfo.firstBuy || 0)}}
							</el-col>
						</el-row>
					</div>
					<div class="mt15">
						<p class="fr">
							<el-button type="success" :disabled="isSaveData" @click="getPageJson()">
								{{!isSaveData ? '提交' : '已经提交'}}
							</el-button>
						</p>
					</div>
				</div>
			</li>
		</ul>
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
			tableType: 'pagetable0402',
			tableJson: {},
			arrList: [],
			centerDialogVisible: false,
			isSaveData: false,
			// 控制class
			showInputMap: {
				firstBuy: true
			},
			// 控制数据的
			fromInfo: {},
			rankingArr: []
		};
	},
	created () {
		this.init();
	},
	methods: {
		init () {
			this.$ajax({
				method: 'post',
				url: '/stOrgCarbonSinkRecord/getOrgFirstCarbonSinkRecord',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					subtaskId: this.$route.query.subtaskId || '',
					taskId: this.$route.query.taskId || '',
					clazzYearsPushId: this.$route.query.clazzYearsPushId || ''
				}
			}).then(res => {
				if (res.success) {
					if (res.data) {
						// 处理
						if (res.data.firstBuy || res.data.firstBuy === 0) {
							this.isSaveData = true;
						}

						// 接受
						this.fromInfo = res.data;
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
			if (!this.fromInfo.firstBuy && this.fromInfo.firstBuy !== 0) {
				this.$message({
					type: 'error',
					message: '采购数量不得为空'
				});
				return false;
			}
			let worthValue = (this.fromInfo.unitSinkValue || 0) * (this.fromInfo.firstBuy || 0);
			this.$confirm(`是否购买${this.fromInfo.firstBuy}KG碳汇,碳汇排名会影响你的选单顺序哦`, '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				center: true,
				type: 'warning'
			}).then(() => {
				this.$confirm(`将花费自有现金${worthValue}元`, '再次提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					center: true,
					type: 'warning'
				}).then(() => {
					this.$ajax({
						method: 'post',
						url: '/stOrgCarbonSinkRecord/saveStOrgCarbonSinkRecord',
						params: {
							moldId: this.$route.query.moldId || this.moldId || '',
							clazzYearsPushId: this.$route.query.clazzYearsPushId || '',
							subtaskId: this.$route.query.subtaskId || '',
							taskId: this.$route.query.taskId || '',
							applyAmount: this.fromInfo.firstBuy || 0,
							applyTurns: 'firstBuy',
							worthValue: worthValue || 0
						}
					}).then(res => {
						if (res.success) {
							this.$store.commit('getPropertyTypeStatis', 'carbonSinkAmount');
							this.$store.commit('getPropertyTypeStatis', 'ownCashAmount');
							this.$confirm(`成功购买碳汇${this.fromInfo.firstBuy}KG，花费自有现金${worthValue}元`, '成功', {
								confirmButtonText: '确定',
								center: true,
								showCancelButton: false,
								type: 'success'
							}).then(() => {

							}).catch(() => {
							});
							this.init();
						} else {
							this.$message({
								type: 'success',
								message: `${res.message}`
							});
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
.sell-box{
	width: 100%;
	li{
		border: 1px solid #CCCCCC;
		height: 260px;
		margin-top: 20px;
		cursor: pointer;
		color: #ccc;
		&.isSelect {
			border: 1px solid #CCCCCC;
			color: #373737;
			.sellinfo{
				.span1{
					font-weight: 600;
					color: #373737;
				}
				.span2{
					font-size: 18px;
					color: #EC7F00;
				}
				.span3{
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #666666;
				}
			}
		}
		&.active{
			border: 1px solid #4657AD;
		}
		.imgps{
			width: 220px;
			height: 100%;
			background: url('./../common/images/moneyFund.jpg');
			background-size: cover;
		}
		.sellinfo{
			width: calc(100% - 220px);
			padding: 10px 20px;
			.span1{
				font-weight: 600;
				color: #ccc;
			}
			.span2{
				font-size: 18px;
				color: #ccc;
			}
			.span3{
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #ccc;
			}
		}
	}
}
</style>
