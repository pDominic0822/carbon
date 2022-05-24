
<template>
	<div class="stu">
	<!-- 库存碳配额 -->
		<ul class="sell-box">
			<li>
				<div class="fl imgps">
				</div>
				<div class="fl sellinfo">
					<div class="span1 mt15">
						年度核定配额
						<p class="fr">
							模拟经营公司：{{$storage.get('orgName')}}
						</p>
					</div>
					<div class="mt15">
						<p>
							额度核定      =   （全额生产碳排放（kg）+     全额物料碳排放（kg）+    全额煤电碳排放（kg））*     碳配额比例（%）
						</p>
						<p class="mt10">
							全额生产碳排放   =    系统参数生产线碳排放*4
						</p>
						<p class="mt10">
							全额物料碳排放（kg）=系统季度消耗数量*（第一年）系统参数物料碳排放*4
						</p>
						<p class="mt10">
							全额煤电碳排放（kg）=季度消耗电力数量  *   系统参数电力碳排放 *  4
						</p>
					</div>
					<div class="mt20">
						核定配额 ( Kg ):
						{{(showInputMap.receiveAmount) | formatNumber}}
						<p class="fr">
							<el-button type="success" :disabled="isSaveData" @click="getPageJson()">
								{{!isSaveData ? '领取' : '已领取'}}
							</el-button>
						</p>
					</div>
				</div>
			</li>
		</ul>
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
			this.$confirm(
				`领取核定配额：${this.showInputMap.receiveAmount}KG`,
				'提示',
				{
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					center: true,
					showCancelButton: true,
					type: 'warning'
				}
			).then(res => {
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
						this.$confirm(`领取核定配额${this.showInputMap.receiveAmount}KG`, '成功', {
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
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.sell-box{
	width: 100%;
	li{
		border: 1px solid #CCCCCC;
		height: 240px;
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
			background: url('./../common/images/financingFactoring.jpg');
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
