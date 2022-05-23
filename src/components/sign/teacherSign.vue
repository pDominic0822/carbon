<!--
 * @LastEditors: Please set LastEditors
 * @Description: 签到管理
 * @Date: 2018-12-20 11:38:25
 * @LastEditTime: 2021-08-02 17:36:23
 -->
<template>
	<div class="handel-market">
		<!-- <div class="banner">
			<div class="banner-box">
				<p class="banner-title mt50">签到管理</p>
				<p class="banner-info mt20">老师发起的签到次数，自己的签到次数和未签到次数进行查询</p>
			</div>
		</div> -->
		<div class="User-info-Banner">
			<div class="info-title">
				<p>
					签到管理
				</p>
				<p>
					教师发起的签到次数、自己的签到次数和未签到次数进行查询
				</p>
			</div>
		</div>
		<div class="content-box map-box">
			<div class="clearfix" style="margin: 20px 0;">
				<div class="fl f18" style="line-height: 40px;">按签到次数查询</div>
				<div class="fr btn-box1">
					<el-button type="primary" @click="sign">
						发起签到
						&nbsp;
						&nbsp;
						&nbsp;
						<i class="icon iconfont icon-ziyuan6"></i>
					</el-button>
				</div>
			</div>
			<div class="content-list">
				<div v-for="(item, index) in signList" :key="index">
					<div style="padding: 20px 0 0 20px;">
						{{item.create}}
					</div>
					<ul class="sign-data clearfix">
						<li class="fl green" v-for="(e, i) in item.list" :key="i">
							<div class="bg-item bg-yqda">
								{{e.createTime | secondTime1}}
							</div>
							<div>
								<p class="font">已签到人数：{{e.yesSign}}人</p>
								<p class="font">未签到人数：{{e.noSign}}人</p>
								<p class="font">总人数：{{e.sumCount}}人</p>
							</div>
							<div class="center mt20">
								<el-button size="small" type="primary" @click="see(e)">详 情</el-button>
							</div>
							<div class="tig clearfix">
								<p class="fl green"></p>
								<p class="fr green"></p>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<el-dialog :title="'详情查询'" :visible.sync="dialogVisible" width="800px" center show-close>
				<div>
					<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" border>
						<el-table-column
							label="序号"
							width="80"
							align="center">
							<template slot-scope="scope">
								<div>{{scope.$index + 1}}</div>
							</template>
						</el-table-column>
						<el-table-column label="学生" prop="realName" align="center"></el-table-column>
						<el-table-column label="教师发起签到总数" prop="" align="isSign">
							<template slot-scope="scope">
								<span v-if="scope.row">{{signList.length}}</span>
							</template>
						</el-table-column>
						<el-table-column label="本次状态" prop="" align="center">
							<template slot-scope="scope">
								<span>{{scope.row.isSign === 1?'已签到':'未签到'}}</span>
							</template>
						</el-table-column>
					</el-table>
				</div>
			</el-dialog>
		</div>
	</div>
</template>

<script>
export default {
	name: 'stu-tooltip',
	data () {
		return {
			dialogVisible: false,
			signList: [],
			tableData: []
		};
	},
	created () {
		this.selectData();
	},
	methods: {
		/**
		 * @msg: 查询签到记录
		 */
		selectData () {
			this.$ajax({
				method: 'post',
				url: '/teacherSign/catSign',
				params: {}
			}).then(res => {
				if (res.success && res.data) {
					this.signList = res.data;
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		/**
		 * @msg: 查看详情
		 */
		see (item) {
			this.$ajax({
				method: 'post',
				url: '/teacherSign/selectTeacherSignList',
				params: {
					id: item.teacherSignId
				}
			}).then(res => {
				if (res.success && res.data) {
					this.tableData = res.data;
					this.dialogVisible = true;
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		/**
		 * @msg: 发起签到
		 */
		sign () {
			this.$ajax({
				method: 'post',
				url: '/teacherSign/addTeacherSign',
				params: {}
			}).then(res => {
				if (res.success) {
					this.$message({
						type: 'success',
						message: res.message,
						showClose: true
					});
					this.selectData();
				} else {
					this.$message({
						type: 'error',
						message: res.message,
						showClose: true
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
.User-info-Banner{
	// width: 1366px;
	margin: 0 auto;
	background: url('././images/banner2.png') no-repeat top center;
	background-size: cover;
	height: 364px;
	padding-top: 50px;
	.info-title{
		width: 1200px;
		height: 100%;
		margin: 0 auto;
		&>p:nth-of-type(1){
			font-family: PingFangSC-Medium;
			font-size: 30px;
			color: #FFFFFF;
			letter-spacing: 2.25px;
			padding-top: 30px;
		}
		&>p:nth-of-type(2){
			font-family: PingFangSC-Regular;
			width: 660px;
			font-size: 18px;
			color: #FFFFFF;
			line-height: 33px;
			padding-top: 28px;
			// padding-left: 33px;
		}
	}
}
// .banner{
// 	height: 180px;
// 	width: 100%;
// 	background: url('./images/banner.jpg') no-repeat;
// 	background-size: 100%;
// 	padding-top: 1px;
// 	.banner-box{
// 		width: 1200px;
// 		margin: 0 auto;
// 		.banner-title{
// 			font-size: 32px;
// 		}
// 		.banner-title, .banner-info{
// 		color: #fff;

// 		}
// 	}
// }
.content-box{
	width: 1200px;
	margin: 30px auto;
}
.map-box{
	width: 1200px;
	min-height: 816px;
	background: #FFFFFF;
	border-radius: 8px;
	border: 6px solid #EBEFFC;
	margin: 0 auto;
	margin-top: -75px;
	padding: 20px;
	position: relative;
	top: -70px;
	padding-top: 0;
	li{
		float: left;
		width: 265px;
		border: 1px solid #dddd;
		margin: 10px;
		padding-bottom: 20px;
	}
}
.btn-box1 /deep/ .el-button{
	background: #F5AE1C;
	border-color: #F5AE1C;
}
.sign-data /deep/ .el-button{
	background: #4570e4;
	border-color: #4570e4;
	color: #fff;
}
.content-list{
	border-top: 1px solid #ddd;
}
.sign-data{
	li{
		width: 217px;
		height: 237px;
		border-radius: 5px;
		margin-left: 19px;
		margin-top: 35px;
		position: relative;
		&>div:nth-of-type(2){
			img{
				width: 135px;
				height: 143px;
			}
		}
		.font{
			font-size: 18px;
			color: #333;
			text-align: center;
			margin-top: 20px;
		}
		.bg-item{
			width: 154px;
			height: 44px;
			transform: translateX(30px) translateY(-18px);
			line-height: 44px;
			color: #fff;
			text-align: center;
		}
		.bg-yqda{
			background: url('./images/w1-top.png') no-repeat;
			background-size: 100%;
			font-size: 13px;
		}
		.tig{
			position: absolute;
			top: 10px;
			padding: 0 10px;
			width: 100%;
			p{
				width: 5px;
				height: 5px;
				border-radius: 50%;
			}
			.green{
				background: #4570e4;
			}
			.yellow{
				background: #F5AE1C;
			}
		}
	}
	.green{
		border: 1px solid #4570e4;

	}
	.yellow{
		border: 1px solid #F5AE1C;
	}
}
</style>
