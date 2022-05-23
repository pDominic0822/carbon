<template>
	<div class="header">
		<div class="containter">
			<p class="fl logo">
				<img style="width:140px;height:42px;" src="./images/logo3.png" alt="">
			</p>
			<p class="fl title">
				<!-- 知链区块链普及云平台 -->
			</p>
			<div class="fr exit">
				<p class="fr name">
					{{$storage.get('UserName') || '&nbsp;'}}
				</p>
				<p class="fr head">
					<img class="round" :src="$storage.get('UserImage')" alt="">
				</p>
				<div class="info">
					<div class="info-img clearfix">
						<img class="round fl" :src="$storage.get('UserImage')" alt="">
						<p class="namesd">
							{{$storage.get('UserName') || '&nbsp;'}}
						</p>
						<p class="nsdfsd">
							<!-- 学力值：4 -->
						</p>
					</div>
					<ul class="tas-list">
						<li v-for="(item, index) in tabsArr" :key="index" @click="_handleRouter(item)">
							<i class="iconfont" :class="item.icon"></i>
							{{item.name}}
						</li>
					</ul>
					<div class="sdfs" @click="returnLogin()">
						安全退出
					</div>
				</div>
			</div>
			<ul class="fl tabs">
				<li v-for="(item,index) in headerArr" @click="_handleClick(item.routerName)" :key="index">{{item.name}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'role',
	inject: ['reload'],
	data () {
		return {
			persontName: '',
			school: '',
			sex: '1',
			schoolArr: [],
			centerDialogVisible: false,
			headerArr: [
			],
			tabsArr: [],
			UserDataTime: ''
		};
	},
	created () {
		this.init();
	},
	methods: {
		init () {
			if (this.$storage.get('userType') + '' === '2') { // 学生
				this.tabsArr = [
				// {
				// 	routerName: 'student-class',
				// 	icon: 'icon-shouye',
				// 	name: '班级首页'
				// },
				// {
				// 	routerName: 'chainStar',
				// 	icon: 'icon-pingfenchengji',
				// 	name: '知链星球'
				// },
					{
						routerName: 'user-info',
						icon: 'icon-chanpinpinzhi',
						name: '个人中心'
					}
				// {
				// 	routerName: 'chainStar',
				// 	icon: 'icon-xuexiao',
				// 	name: '学校中心'
				// }
				];
			}
			if (this.$storage.get('userType') + '' === '1') { // 老师
				this.tabsArr = [
				// {
				// 	routerName: 'mooc',
				// 	icon: 'icon-shouye',
				// 	name: '课程首页'
				// }, {
				// 	routerName: 'school',
				// 	icon: 'icon-xuexiao',
				// 	name: '学校中心'
				// },
				// {
				// 	routerName: 'resource-library',
				// 	icon: 'icon-pingfenchengji',
				// 	name: '知链星球'
				// },
					{
						routerName: 'user',
						icon: 'icon-chanpinpinzhi',
						name: '个人中心'
					}];
			}
		},
		_handleRouter (item) {
			let routerName = item.routerName;
			if (routerName === 'chainStar') {
				let routeData = this.$router.resolve({name: 'chainStar'});
				window.open(routeData.href, '_blank');
			} else if (routerName === 'student-pk') {
				let routeData = this.$router.resolve({name: 'student-pk'});
				window.open(routeData.href, '_blank');
			} else {
				this.$router.push({name: routerName});
			}
		},
		getSchool () {
			this.$ajax({
				method: 'post',
				url: 'userinfo/findSchoolByParam'
			}).then(res => {
				if (res.success) {
					this.schoolArr = res.data;
				};
			}).catch(err => {
				throw new Error(err);
			});
		},
		/**
		 * @name: zhangln
		 * @msg: 获取当前个人信息
		 */
		selectPass () {
			this.$ajax({
				method: 'post',
				url: 'userinfo/findMessage'
			}).then(res => {
				if (res.success) {
					if (res.data.syUserInfo) {
						this.persontName = res.data.syUserInfo.realName;
						this.sex = res.data.syUserInfo.sex + '' || '1';
						this.UserDataTime = '';
						this.school = res.data.syUserInfo.userSchoolName;
					}
				};
			}).catch(err => {
				throw new Error(err);
			});
		},
		_savePenson () {
			this.$ajax({
				method: 'post',
				url: '/userinfo/updateUserInfo',
				params: {
					realName: this.persontName,
					sex: this.sex,
					userSchoolName: this.school,
					birthdays: this.UserDataTime
				}
			}).then(res => {
				if (res.success) {
					this.$message.success('修改成功');
					let UserName = this.persontName;
					this.centerDialogVisible = false;
					this.$storage.set('UserName', UserName);
					this.reload();
				} else {
					this.$message.error('修改失败');
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		returnLogin () {
			this.$router.push({name: 'chain-login'});
		},
		returnClass () {
			this.$router.push({name: 'student-class'});
		},
		_handleClick (routerName) {
			console.log(routerName);
			if (routerName === 'chainStar') {
				let routeData = this.$router.resolve({name: 'chainStar'});
				window.open(routeData.href, '_blank');
			} else if (routerName === 'student-pk') {
				let routeData = this.$router.resolve({name: 'student-pk'});
				window.open(routeData.href, '_blank');
			} else {
				this.$router.push({name: routerName});
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.tabs{
	margin-right: 20px;
	li{
		float: left;
		margin: 0 20px;
		cursor: pointer;
		&:hover{
			color: #656CDC;
		}
	}
}
.header {
	height: 64px;
	line-height: 64px;
	z-index: 3;
	padding: 0 15px;
	// background: #fff;
	// box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
	.container{
		position: relative;
	}
	.logo img{
		margin-top: 15px;
		width: 128px;
		height: 64px;
	}
	.exit{
		position: relative;
		&:hover{
			.info{
				display: block;
			}
		}
	}
	.info{
		position: absolute;
		right: 0;
		top: 54px;
		width: 360px;
		height: 305px;
		// height: 180px;
		background: #fff;
		display: none;
		z-index: 2;
		padding-top: 10px;
		box-shadow: 0 8px 16px 0 rgba(7,17,27,0.2);
		border-bottom-right-radius: 8px;
		border-bottom-left-radius: 8px;
		padding: 24px;
		&:hover{
			display: block;
		}
		.info-img{
			img{
				width: 76px;
				height: 76px;
			}
			.namesd{
				text-indent: 20px;
				line-height: 50px;
				font-size: 16px;
				color: #07111b;
				position: relative;
				top: 15px;
			}
			.nsdfsd{
				color: #93999f;
				text-indent: 20px;
				font-size: 14px;
				font-weight: 600;
			}
		}
		.sdfs{
			border-top: 1px solid #edf1f2;
			line-height: 50px;
			font-size: 12px;
			color: #93999F;
			margin-top: 10px;
			&:hover{
				color: #a2cdf7;
				cursor: pointer;
			}
		}
		.tas-list{
			text-align: center;
			margin-top: 10px;
			li{
				display: inline-block;
				// float: left;
				height: 44px;;
				line-height: 44px;
				background: #F8FAFC;
				border-radius: 2px;
				color: #373737;
				font-size: 16px;
				width: 150px;
				margin-top: 1px;
				cursor: pointer;
				margin-right: 1px;
				text-align: center;
				border-radius: 4px;
				&:hover{
					background: #a2cdf7;
				}
			}
		}
		// li{
		// 	padding: 0 15px;
		// 	height: 54px;;
		// 	line-height: 54px;
		// 	cursor: pointer;
		// 	text-indent: 5px;
		// 	border-bottom: 1px solid #eee;
		// 	height: 54px;
		// 	line-height: 54px;
		// 	cursor: pointer;
		// 	span{
		// 		display: inline-block;
		// 		width: 40px;
		// 	}
		// }
	}
	.title{
		font-size: 16px;
		color: #fff;
		height: 64px;
		line-height: 64px;
		font-size: 24px;
		color: #248FFF;
		text-align: center;
		margin-left: 20px;
	}
	.name{
		font-size: 14px;
		height: 64px;
		line-height: 64px;
		margin: 0 15px;
		color: #fff;
		cursor: pointer;
	}
	.head img{
		width: 36px;
		margin-top: 14px;
		height: 36px;
		cursor: pointer;
	}
}
</style>
