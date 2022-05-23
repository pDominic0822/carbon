<template>
	<div class="learning-record">
		<div>
			<div class="banner">
				<div class="banner-box">
					<div>
						<p class="title">签到查询</p>
						<p class="info">教师发起的签到次数、自己的签到次数和未签到次数进行查询</p>
						<div class="mt30 clearfix">
							<div class="titleList-item clearfix fl">
								<div class="fl">
									<img src="./images/lsfq.png" alt="">
								</div>
								<div class="fr">
									<p>教师发起签到</p>
									<p><span>{{teacherSigns || 0}}</span>次</p>
								</div>
							</div>
							<div class="titleList-item clearfix fl" style="margin-left: 30px; background: #F6FFF5;">
								<div class="fl">
									<img src="./images/yqd.png" alt="">
								</div>
								<div class="fr">
									<p>已签到</p>
									<p><span>{{studentSigns || 0}}</span>次</p>
								</div>
							</div>
							<div class="titleList-item clearfix fl" style="margin-left: 30px; background: #F2FDFF;">
								<div class="fl">
									<img src="./images/wqd.png" alt="">
								</div>
								<div class="fr">
									<p>未签到</p>
									<p><span>{{noStudentSigns || 0}}</span>次</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="banner-content">
				<div>
					<el-button @click="SignIn()"  type="primary">签到</el-button>
				</div>
				<div class="content-box" v-for="(sign, signIndex) in signList" :key="signIndex" :class="signIndex">
					<div>
						{{sign.create}}
					</div>
					<ul class="sign-data clearfix">
						<li class="fl" v-for="(item, index) in sign.list"  :key="index" :class="{'yellow': item.isSign === 0,'green': item.isSign === 1}">
							<div class="bg-item" :class="{'bg-wqd': item.isSign === 0,'bg-yqda': item.isSign === 1}">
								{{item.isSign === 1 ? '已签到': '未签到'}}
							</div>
							<div class="mt30">
								<img v-if="item.isSign === 0" class="btn-position" src="./images/b1.png" alt="">
								<img v-else class="btn-position" src="./images/b2.png" alt="">
							</div>
							<div class="center mt20">
								{{item.createTime | secondTime1}}
							</div>
							<div class="tig clearfix">
								<p class="fl" :class="{'yellow': item.isSign === 0,'green': item.isSign === 1}"></p>
								<p class="fr" :class="{'yellow': item.isSign === 0,'green': item.isSign === 1}"></p>
							</div>
						</li>
					</ul>
					<div class="page-block" v-if="signList.length > 0">
						<el-pagination
						background
						layout="prev, pager, next"
						:page-size="15"
						@current-change="paginationClick"
						:total="totalNum">
						</el-pagination>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'my-course',
	data () {
		return {
			signList: [],
			totalNum: 0,
			pageNum: 1,
			studentSigns: 0,
			noStudentSigns: 0,
			teacherSigns: 0
		};
	},
	created () {
		this.selectData();
	},
	methods: {
		SignIn () {	// 签到
			this.$ajax({
				method: 'post',
				url: '/studentSign/addStudentSign'
			}).then(res => {
				if (res.success) {
					this.$message.success(res.message);
					this.selectData();
				} else {
					this.$message.error(res.message);
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		/**
		 * @msg: 签到记录
		 */
		selectData () {	// 签到记录
			this.$ajax({
				method: 'post',
				url: '/studentSign/selectStudentSignList',
				params: {
					pageNum: this.pageNum,
					pageSize: 8
				}
			}).then(res => {
				if (res.success && res.data) {
					this.signList = res.data;
					this.studentSigns = res.studentSigns;	// 学生签到次数
					this.teacherSigns = res.teacherSigns;	// 老师发起次数
					this.noStudentSigns = res.noStudentSigns;	//	学生未签到次数
					this.totalNum = res.sumCount;
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		/**
		 * @msg: 分页
		 */
		paginationClick (page) { // 页码变化
			this.pageNum = page;
			this.selectData();
		}
	}
};
</script>

<style lang="scss" scoped>
.banner{
	min-height: 325px;
	background: url('./images/banner.png') no-repeat top center;
	background-size: 100%;
	padding-top: 50px;
	.banner-box{
		width: 1200px;
		margin: 0 auto;
		padding-top: 1px;
		// margin-top: 180px;
		.title{
			font-family: PingFangSC-Medium;
			font-size: 36px;
			color: #FFFFFF;
			letter-spacing: 2.25px;
		}
		.info{
			font-family: PingFangSC-Regular;
			font-size: 18px;
			color: #FFFFFF;
			margin-top: 30px;
		}
	}
}
.banner-content{
	width: 1200px;
	min-height: 816px;
	background: #FFFFFF;
	border-radius: 8px;
	border: 6px solid #EBEFFC;
	margin: 0 auto;
	margin-top: -25px;
	padding: 20px;
	.title-list{
		float: left;
		li{
			width: 148px;
			height: 68px;
			line-height: 68px;
			text-align: center;
			float: left;
			border-bottom: 2px solid #fff;
			cursor: pointer;
			transition: all .5s;
			img{
				width: 20px;
				height: 20px;
				position: relative;
				top: 5px;
			}
		}
		.active{
			background: #EFFBF5;
			border-bottom: 2px solid #4570e4;
			color: #4570e4;
		}
	}
	.content-box{
		padding: 20px;
	}
}
.titleList-item{
	width: 190px;
	height: 100px;
	background: #FFFEF5;
	box-shadow: 0 2px 4px 0 rgba(0,0,0,0.20);
	border-radius: 10px;
	&>div{
		width: 50%;
		height: 100%;
		position: relative;
	}
	&>div:nth-of-type(1){
		img{
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translateX(-50%) translateY(-50%);
		}
	}
	&>div:nth-of-type(2) {
		&>p:nth-of-type(1){
			font-size: 14px;
			color: #666666;
			margin-top: 25px;
		}
		&>p:nth-of-type(2){
			margin-top: 10px;
			span{
				font-size: 24px;
				padding-right: 10px;
			}
		}
	}
}
.sign-box{
	height: 40px;
	line-height: 40px;
	padding: 0 20px;
	.sign-title{
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #333333;
		margin-left: 5px;
	}
	&>img{
		transform: translateY(5px);
	}
}
.sign-data{
	li{
		width: 264px;
		height: 300px;
		border-radius: 5px;
		margin-left: 19px;
		margin-top: 30px;
		position: relative;
		&>div:nth-of-type(2){
			img{
				width: 135px;
				height: 143px;
			}
		}
		.bg-item{
			width: 154px;
			height: 44px;
			transform: translateX(51px) translateY(-18px);
			line-height: 44px;
			color: #fff;
			text-align: center;
		}
		.bg-wqd{
			background: url('./images/w-top.png') no-repeat;
			background-size: 100%;
		}
		.bg-yqda{
			background: url('./images/w1-top.png') no-repeat;
			background-size: 100%;
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
.page-block{
	margin: 30px auto;
	display: inline-block;
	position: relative;
	left: 50%;
	// bottom: 10%;
	transform: translateX(-50%);
	padding-bottom: 20px;
}
.btn-position{
	position: relative;
	left: 50%;
	transform: translateX(-50%);
}
</style>
