<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr>
				<td>次序</td>
				<td colspan="2">碳权合计 ( Kg )</td>
				<td>小组名称</td>
				<td>订单数量 ( 个 )</td>
				<td>订单单价 ( 元 )</td>
				<td>违约单价 ( 元 )</td>
				<td>选单状态</td>
			</tr>
			<tr v-for="(trItem, trIndex) in trList" :key="trIndex">
				<td>
					{{trIndex + 1}}
				</td>
				<td colspan="2">
					{{trItem.carbonRightsTotal}}
				</td>
				<td>
					{{trItem.orgName}}
				</td>
				<td>
					{{trItem.orderCount}}
				</td>
				<td>
					{{trItem.unitPrice}}
				</td>
				<td>
					{{trItem.violationPrice}}
				</td>
				<td>
					<template v-if="trItem.isMyChoose">
						<el-button type="success"  @click="_handChoose()">
							请选单
						</el-button>
					</template>
					<template v-else>
						{{trItem.isChoose ? '已经选单': '未选单'}}
					</template>
				</td>
			</tr>
		</table>
		<el-dialog
			title="提示"
			:visible.sync="centerDialogVisible"
			width="90%"
			append-to-body
			center>
			<div class="headyear clearfix mt40 order">
			<div class="orderpart fl" v-for="(item, index) in orderList" :key="index">
				<div class="lftitle fl" :class="{'leftActive' : item.orderType === 'defaultOrder'}">
					<div class="lfimg"></div>
					<p>订单{{index + 1}}</p>
				</div>
				<div class="rhdes fl">
					<p>订单单价：{{item.unitPrice}}</p>
					<p>订单数量：{{item.orderCount}}</p>
					<p>违约罚款（元/个）：{{item.violationFine}}</p>
					<div class="chooseBox">
						<el-button type="success" :disabled="item.isChoose === 1" @click="handOrder(index)">
							{{item.isChoose === 1 ? '已选择' : '选择'}}
						</el-button>
					</div>
				</div>
			</div>
		</div>
		</el-dialog>
	</div>
</template>

<script>
export default {
	name: '',
	data () {
		return {
			trList: [],
			centerDialogVisible: false,
			isChoose: false,
			isorgID: '',
			orderList: []
		};
	},
	props: [
		'showInputMap',
		'fromInfo'
	],
	watch: {
	},
	created () {
		this.init();
	},
	methods: {
		init () {
			console.log(this.isorgID);
			this.$ajax({
				method: 'post',
				url: '/stClazzOrgYearsOrder/findClazzYearsOrgChooseOrderInfoList',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					clazzYearsPushId: this.$route.query.clazzYearsPushId || '',
					isOrder: 1
				}
			}).then(res => {
				if (res.success) {
					if (res.data.length > 0) {
						let array = res.data;
						let seIndex = 0;
						for (let index = 0; index < array.length; index++) {
							const element = array[index];
							element.isMyChoose = false;
							if (!element.isChoose) { // 未选择
								seIndex = index;
								break;
							} else { // 如果
							}
						}
						console.log(seIndex);
						let orgId = this.$storage.get('orgId');
						if (array[seIndex].orgId + '' === orgId + '') {
							array[seIndex].isMyChoose = true;
						}
						this.trList = res.data;
					}
					this.isSaveData = true;
				}
			});
		},
		_handChoose () {
			this.centerDialogVisible = true;
			this.$ajax({
				method: 'post',
				url: '/stClazzYearsOrder/findClazzOrgChooseOrderInfoMapList',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					clazzYearsPushId: this.$route.query.clazzYearsPushId || ''
				}
			}).then(res => {
				if (res.success) {
					if (res.data) {
						this.orderList = res.data;
					}
				}
			});
		},
		handOrder (index) {
			this.$confirm('是否确认提交（只有一次选单机会）', '选择', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				center: true,
				type: 'warning'
			}).then(() => {
				let item = this.orderList[index];
				this.$ajax({
					method: 'post',
					url: '/stClazzOrgYearsOrder/saveClazzOrgChooseYearsOrder',
					params: {
						moldId: this.$route.query.moldId || this.moldId || '',
						subtaskId: this.$route.query.subtaskId || this.subtaskId || '',
						clazzYearsPushId: this.$route.query.clazzYearsPushId || '',
						orderId: item.orderId,
						orderType: item.orderType,
						orderCount: item.orderCount,
						unitPrice: item.unitPrice
					}
				}).then(res => {
					if (res.success) {
						this.$store.commit('getOrgChooseOrder', '');
						this.$message({
							type: 'success',
							message: '选择成功'
						});
						this.centerDialogVisible = false;
						this.init();
					} else {
						this.$message({
							type: 'error',
							message: '已经选单，请勿重复选单'
						});
					}
				});
			}).catch(() => {});
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
.headyear{
		margin: 0 auto;
		margin-top: 40px;
		width: 960px;
		// height: 44px;
		background: #ECEFF6;
		.onceyear{
			float: left;
			width: 120px;
			height: 46px;
			border-radius: 2px 2px 0px 0px;
			color: #32518C;
			line-height: 46px;
			text-align: center;
			&.active {
				color: #FFFFFF;
				background: linear-gradient(316deg, #6D77F0 0%, #3B72DC 100%);
			}
		}
		.orderpart{
			width: 310px;
			height: 136px;
			margin-right: 15px;
			margin-bottom: 16px;
			background: #FFFFFF;
			border-radius: 4px;
			border: 1px solid #AAB0D9;
			&:nth-child(3n+3){
				margin-right: 0px;
			}
		}
	}
	.benchmark{
		margin: 0 auto;
		margin-top: 40px;
		width: 960px;
	}
	.order{
		background: #FFFFFF;
	}
.orderpart{
	.lftitle{
		width: 82px;
		height: 136px;
		background: url("./img/order1.png") no-repeat center center;
		&.leftActive{
			background: url("./img/order2.png") no-repeat center center;
		}
		.lfimg{
			width: 24px;
			height: 24px;
			margin: 0px auto;
			margin-top: 45px;
			background: url("./img/dindan.png") no-repeat center center;
		}
		p{
			margin-top: 5px;
			color: #FFFFFF;
			text-align: center;
		}
	}
	.rhdes{
		width: 225px;
		height: 136px;
		padding-top: 15px;
		p{
			margin-left: 16px;
			color: #222222;
			height: 20px;
			line-height: 20px;
			font-family: PingFangSC-Regular, PingFang SC;
			font-size: 14px;
			text-align: left;
		}
		.button{
			margin-top: 20px;
			width: 224px;
			height: 30px;
			padding-left: 100px;
			.orde{
				float: left;
				width: 20px;
				height: 20px;
				margin-top: 10px;
				margin-left: 10px;
				cursor: pointer;
			}
		}
		.button{
			.addorder{
				background: url("./img/addo.png") no-repeat center center;
			}
			.writeorder{
				background: url("./img/writeo.png") no-repeat center center;
			}
			.delorder{
				background: url("./img/delorder.png") no-repeat center center;
			}
		}
	}
}
.flbtn{
	width: 236px;
	margin: 0 auto;
	height: 50px;
	margin-top: 50px;
	.btn{
		float: left;
		width: 88px;
		height: 36px;
		margin-left: 20px;
		background: #3B72DC;
		border-radius: 2px;
		color: #ffffff;
		text-align: center;
		line-height: 36px;
		&:nth-child(2){
			background: #545DEE;
		}
	}
}
.chooseBox{
	padding-top: 10px;
	text-align: center;
}
</style>
