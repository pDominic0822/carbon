<!--
 * @Author: zhangln
 * @Description: 老师端组织管理
 * @Date: 2019-03-20 10:07:18
 -->
<template>
	<div class="mainbox" :class="teacherCode">
		<div class="headyear clearfix mt40">
			<div class="onceyear" v-for="(item, index) in yearArr" :key="index"
			:class="{'active':activeIndex === index}"
			@click="_ClickcollseSty(index)">
				{{item.yearsTime}}
			</div>
		</div>
		<div class="benchmark mt20">
			产品基准单价：{{thisYearsProductPrice}}
		</div>
		<div class="headyear clearfix mt40 order">
			<div class="orderpart fl mt20" v-for="(item, index) in orderList" :key="index">
				<div class="lftitle fl" :class="{'leftActive' : item.orderType === 'defaultOrder'}">
					<div class="lfimg"></div>
					<p>订单{{index + 1}}</p>
				</div>
				<div class="rhdes fl">
					<p>订单单价：{{item.unitPrice}}</p>
					<p>订单数量：{{item.orderCount}}</p>
					<p>违约罚款（元/个）：{{item.violationFine}}</p>
					<div class="button" v-if="teacherCode === 'teacher'">
						<div class="addorder orde" @click="_ClickCopy(index)"></div>
						<div class="writeorder orde" @click="_ClickUpdate(index)"></div>
						<div class="delorder orde" v-if="item.orderType !== 'defaultOrder'" @click="_ClickDelete(index)"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="mt20 center" v-if="teacherCode === 'teacher' && ParamsVisible">
			<!-- <el-button type="success" @click="getPageJson()">保存</el-button> -->
			<el-button type="success" @click="SaveParams()">提交</el-button>
		</div>
		<div class="mt20">
			&nbsp;
		</div>
		<el-dialog
			title="订单"
			:visible.sync="updateDialog"
			modal-append-to-body
			append-to-body
			width="30%"
			>
			<table>
				<tr>
					<td>订单单价：</td>
					<td>
						<el-input type="number" v-model="from.unitPrice" placeholder="请输入内容"></el-input>
					</td>
				</tr>
				<tr>
					<td>订单数量：</td>
					<td>
						<el-input type="number" v-model="from.orderCount" placeholder="请输入内容"></el-input>
					</td>
				</tr>
			</table>
			<span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="_ClickdetermineUpdate()">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
export default {
	name: 'login',
	props: ['teacherCode', 'moldId'],
	data () {
		return {
			ifDelete: '',
			defaultYearsOrderId: '',
			// 声明一个对象，接受
			OrderIdMap: {},
			orderId: '',
			updateDialog: false,
			index: 0,
			from: {
				orderPrice: '',
				orderNum: ''
			},
			arr: [
				{
					name: '',
					id: '',
					code: ''
				}, // 0
				{}, // 1
				{},
				{},
				{},
				{}
			],
			ParamsVisible: false,
			yearArr: [],
			activeIndex: 0,
			defaultMoldYearsId: '',
			orderList: [],
			orderType: '',
			orderCount: '',
			unitPrice: '',
			thisYearsProductPrice: ''
		};
	},
	created () {
		// 初始化，第一步加载数据
		this.init();
		this.getMoldIsDefaultParams();
	},
	methods: {
		getMoldIsDefaultParams () {
			this.$ajax({
				method: 'post',
				url: '/stClazzReadySchedule/getStClazzReadySchedule',
				params: {
					moldId: this.$route.query.moldId || this.moldId || ''
				}
			}).then((res) => {
				if (res.success) {
					if (res.data) {
						if (res.data.orderSuccess === 0) {
							this.ParamsVisible = true;
						} else {
							this.ParamsVisible = false;
						}
					} else {
						this.ParamsVisible = true;
					}
				} else {
				}
			}).catch((err) => {
				throw new Error(err);
			});
		},
		init () {
			this.$ajax({
				method: 'post',
				url: '/stDefaultMoldYears/findDefaultMoldYearsByParams',
				params: {
					moldId: this.$route.query.moldId || this.moldId || ''
				}
			}).then((res) => {
				if (res.success) {
					this.yearArr = res.data;
					// 默认加载第一个年
					this._ClickcollseSty(0);
				} else {
				}
			}).catch((err) => {
				throw new Error(err);
			});
		},
		_ClickcollseSty (index) {
			// 改变样式，添加class
			this.activeIndex = index;
			// 取数组里面的索引下标的对象 {}
			let item = this.yearArr[index];
			this.defaultMoldYearsId = item.id;
			this.geDefaultYearOrder();
		},
		// 查询到的订单信息
		geDefaultYearOrder () {
			this.$ajax({
				method: 'post',
				url: '/stClazzYearsOrder/findStClazzOrderInfoMapList',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					defaultMoldYearsId: this.defaultMoldYearsId
				}
			}).then((res) => {
				if (res.success) {
					if (res.data) {
						let orderArray = res.data; // 返回值？看返回值 是数组 []，对象 {}, true / false
						this.orderList = orderArray.orderList;
						this.thisYearsProductPrice = orderArray.thisYearsProductPrice;
					}
				} else {
				}
			}).catch((err) => {
				throw new Error(err);
			});
		},
		// 复制按钮
		_ClickCopy (index) {
			// 取数组下标索引的对象obj {}
			let item = this.orderList[index];
			console.log(item);
			this.$confirm(
				`是否复制一个相同的订单`,
				'提示',
				{
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					center: true,
					showCancelButton: true,
					type: 'warning'
				}
			).then(res => {
				let params = {
					moldId: this.$route.query.moldId || this.moldId || '',
					defaultMoldYearsId: this.defaultMoldYearsId,
					orderCount: item.orderCount,
					unitPrice: item.unitPrice
				};
				this.saveClassOrder(params);
			}).catch(() => {});
		},
		_ClickdetermineUpdate () {
			let item = this.OrderIdMap;
			let params = {};
			// 默认的shidefaultOrder预制订单
			if (item.orderType === 'defaultOrder') {
				params = {
					moldId: this.$route.query.moldId || this.moldId || '',
					defaultMoldYearsId: this.defaultMoldYearsId,
					orderCount: this.from.orderCount,
					unitPrice: this.from.unitPrice,
					defaultYearsOrderId: item.defaultOrderId
				};
			}
			// clazzOrder班级自定义订单
			if (item.orderType === 'clazzOrder') {
				params = {
					id: item.orderId,
					moldId: this.$route.query.moldId || this.moldId || '',
					defaultMoldYearsId: this.defaultMoldYearsId,
					orderCount: this.from.orderCount,
					unitPrice: this.from.unitPrice
				};
			}
			// 添加输入限制
			// 做限制条件的时候，不满足的时候，进入，不往下走了
			if (this.from.orderCount % 1 !== 0 || this.from.unitPrice % 1 !== 0) {
				this.$message({
					type: 'error',
					message: '订单数量和订单单价必须为整数'
				});
				return false;
			}
			if (this.from.orderCount > 40 || this.from.orderCount < 0) {
				this.$message({
					type: 'error',
					message: '订单数量在0和40之间!'
				});
				return false;
			}
			if (this.from.unitPrice < (this.thisYearsProductPrice * 0.7) || this.from.unitPrice > (this.thisYearsProductPrice * 1.3)) {
				this.$message({
					type: 'error',
					message: '订单单价范围在大于或者小于30000*30%!之间'
				});
				return false;
			} else {
				this.saveClassOrder(params);
			}
		},
		// 保存接口
		saveClassOrder (params) {
			this.$ajax({
				method: 'post',
				url: '/stClazzYearsOrder/saveStClazzYearsOrderRecord',
				params: {
					...params
				}
			}).then(res => {
				if (res.success) {
					this.$message({
						type: 'success',
						message: '修改成功!'
					});
					this.getMoldIsDefaultParams();
					this._ClickcollseSty(this.activeIndex);
					this.updateDialog = false;
				}
				if (!res.success) {
					this.$message({
						type: 'error',
						message: res.message
					});
				}
			});
		},
		_ClickDelete (index) {
			let item = this.orderList[index];
			this.$confirm(
				`是否删除`,
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
					url: '/stClazzYearsOrder/deleteStClazzYearsOrderById',
					params: {
						moldId: this.$route.query.moldId || this.moldId || '',
						clazzYearsOrderId: item.orderId
					}
				}).then(res => {
					if (res.success) {
						this.$message({
							type: 'success',
							message: '删除成功!'
						});
						this.getMoldIsDefaultParams();
					}
					if (!res.success) {
						this.$message({
							type: 'error',
							message: res.message
						});
					}
				});
			});
		},
		_ClickUpdate (index) {
			// {} obj队形
			let item = this.orderList[index];
			this.OrderIdMap = item; // 全部接受到了，包括id,....
			this.updateDialog = true;
			this.from = item;
		},
		SaveParams () {
			this.$confirm(
				`是否提交，提交以后，不能修改`,
				'提示',
				{
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					center: true,
					showCancelButton: true,
					type: 'warning'
				}
			).then(() => {
				this.$ajax({
					method: 'post',
					url: '/stClazzReadySchedule/updateStClazzReadySchedule',
					params: {
						moldId: this.$route.query.moldId || this.moldId || '',
						orderSuccess: 1
					}
				}).then(res => {
					if (res.success) {
						this.$emit('sendInIt');
						this.getMoldIsDefaultParams();
					} else {
					}
				}).catch(err => {
					throw new Error(err);
				});
				this.getPageJson();
			}).catch(() => {});
		}
	}
};
</script>

<style lang="scss" scoped>
.mainbox{
	margin: 0 auto;
	&.student{
		.benchmark{
			color: #ffffff;
		}
	}
	// width: 1200px;
	// height: 600px;
	.headyear{
		margin: 0 auto;
		margin-top: 20px;
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
		margin-top: 20px;
		width: 960px;
	}
	.order{
		background: #FFFFFF;
		border-top: 1px solid transparent;
	}
	.orderpart{
		.lftitle{
			width: 82px;
			height: 136px;
			background: url("../img/order1.png") no-repeat center center;
			&.leftActive{
				background: url("../img/order2.png") no-repeat center center;
			}
			.lfimg{
				width: 24px;
				height: 24px;
				margin: 0px auto;
				margin-top: 45px;
				background: url("../img/dindan.png") no-repeat center center;
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
					background: url("../img/addo.png") no-repeat center center;
				}
				.writeorder{
					background: url("../img/writeo.png") no-repeat center center;
				}
				.delorder{
					background: url("../img/delorder.png") no-repeat center center;
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
}
</style>
