<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<ul class="sell-box">
			<li>
				<div class="fl imgps">
				</div>
				<div class="fl sellinfo">
					<p class="span1 mt15">
						绿贷申请
					</p>
					<p class="mt15">
						利息计算公式=本金*利率
					</p>
					<div class="demo-input mt15">
						贷款本金：
						<el-input-number size="mini" style="width:240px" v-model="fromInfo.applyAmount" :precision="2" :step="1000" :min="1000" :max="1000000000"></el-input-number>
					</div>
					<div class="mt20">
						利率:{{fromInfo.loansRate}}
					</div>
					<div class="clearfix mt15 demo-input">
						绿贷年限: {{fromInfo.loansYears}}（年）
					</div>
					<div class="clearfix mt15 demo-input">
						贷款利息: {{fromInfo.applyAmount * parseFloat(fromInfo.loansRate) / 100}}（元/年）
					</div>
				</div>
			</li>
		</ul>
		<!-- <pageTable ref="pageTable" :tableType="tableType" :showInputMap="showInputMap" :fromInfo ="fromInfo"></pageTable> -->
		<div class="mt20 center">
			<el-button type="success" :disabled="isdisabledCollse" @click="getPageJson()">
				{{isdisabledCollse ? '已经提交' : '提交'}}
			</el-button>
		</div>
	</div>
</template>

<script>
export default {
	name: '',
	data () {
		return {
			isdisabledCollse: false,
			tableType: 'pagetable01402',
			// 第一层,当前那个空能够输入,对象---
			showInputMap: {
				applyAmount: true, // 加class :class="{'inputClass' : showInputMap.allNum}"
				loansRate: false,
				loansYears: false,
				chooseFalse: false
			},
			fromInfo: {
				applyAmount: '',
				loansRate: '',
				loansYears: ''
			}
		};
	},
	watch: {
	},
	created () {
		this.init();
	},
	// 方法体的所有的方法func
	methods: {
		init () {
			this.$ajax({
				method: 'post',
				url: '/stDecisionLoansRecord/getOrgDecisionLoansRecord',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					subtaskId: this.$route.query.subtaskId || '',
					clazzYearsPushId: this.$route.query.clazzYearsPushId || ''
				}
			}).then(res => {
				if (res.success) {
					if (res.data && res.data.applyAmount) { // 有值的时候，不再提交
						this.isdisabledCollse = true;
					}
					if (res.data) {
						this.fromInfo = res.data;
					}
				}
			});
		},
		getPageJson () {
			let applyAmount = this.fromInfo.applyAmount;
			console.log(applyAmount);
			if (applyAmount === '') {
				this.$message({
					type: 'error',
					message: '输入金额不得为空!'
				});
				return false;
			}
			if (applyAmount < 0 || applyAmount > 100000000) {
				this.$message({
					type: 'error',
					message: '输入金额最小为0,最大为一个亿!'
				});
				return false;
			}
			this.$confirm(
				`是否确认提交（只有一次提交机会）`,
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
					url: '/stDecisionLoansRecord/saveOrgDecisionLoansRecord',
					params: {
						moldId: this.$route.query.moldId || this.moldId || '',
						subtaskId: this.$route.query.subtaskId || '',
						clazzYearsPushId: this.$route.query.clazzYearsPushId || '',
						applyAmount: this.fromInfo.applyAmount || '0'
					}
				}).then(res => {
					if (res.success) {
						this.init();
						this.$store.commit('getPropertyTypeStatis', 'greenLoansAmount');
						this.$confirm(`申请绿贷金额：${this.fromInfo.applyAmount}`, '成功', {
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
							message: res.message
						});
					}
				});
			});
		}
	},
	mounted () {
	}
};
</script>

<style lang="scss" scoped>
.contentBox{
	width: 100%;
	margin: 0 auto;
	color: #FFFFFF;
}
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
			background: url('./../common/images/fixedDeposit.jpg');
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
