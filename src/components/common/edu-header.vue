<template>
	<header class="header">
		<div class="containter">
			<p class="fl logo">
				<img src="./images/logo.png" alt="">
			</p>
			<p class="fl title">
				| 企业经营碳沙盘
			</p>
			<div class="fr exit">
				<p class="fr name">
					{{$storage.get('UserName') || '&nbsp;'}} <i class="triangle-up"></i>
				</p>
				<p class="fr head">
					<img class="round" :src="$storage.get('UserImage')" alt="">
				</p>
				<ul class="info">
					<li @click="centerDialogVisible = true">
						<span>
							<i class="iconfont icon-jiaolian1"></i>
						</span>
						个人信息
					</li>
					<li v-for="(item, index) in returnArr" :key="index" @click="returnClass(item.routerName)">
						<span>
							<i class="iconfont icon-fanhuibanji"></i>
						</span>
						{{item.name}}
					</li>
					<li @click="returnLogin()">
						<span>
							<i class="iconfont icon-fanhui2"></i>
						</span>
						退出
					</li>
				</ul>
			</div>
			<ul class="fr tabs">
				<li v-for="(item,index) in tabsArr" :class="{active : activeIndex === index}" @click="_handleClick(item.routerName, index)" :key="index">
					{{item.name}}
					<div class="tabs-item">
						<p  v-for="(c,i) in item.children" :key="i" @click="_handleChildren(c.routerName ,i, c.isHref)">{{c.name}}</p>
					</div>
				</li>
			</ul>
		</div>
		<el-dialog
			:title="'修改个人信息'"
			:visible.sync="centerDialogVisible"
			width="30%"
			:modal="false"
			:show-close="true"
			center>
			<div>
				<el-form label-position="right" label-width="80px" >
					<el-form-item label="姓名">
						<el-input placeholder="请输入姓名" maxlength="15" v-model="persontName"></el-input>
					</el-form-item>
					<el-form-item label="性别">
						<el-radio v-model="sex" label="1">男生</el-radio>
						<el-radio v-model="sex" label="2">女生</el-radio>
					</el-form-item>
					<el-form-item label="生日">
						<el-date-picker
							v-model="UserDataTime"
							type="date"
							placeholder="请选择生日"
							format="yyyy 年 MM 月 dd 日"
							value-format="yyyy-MM-dd">
						</el-date-picker>
					</el-form-item>
					<el-form-item label="密码">
						<el-input placeholder="请输入密码" maxlength="15" v-model="password"></el-input>
					</el-form-item>
				</el-form>
			</div>
			<span slot="footer" class="dialog-footer">
				<el-button :disabled="!sex || !UserDataTime || !persontName" type="primary" @click="_savePenson()">确 定</el-button>
			</span>
		</el-dialog>
	</header>
</template>

<script>
export default {
	inject: ['reload'],
	name: 'role',
	props: ['returnArr', 'tabsArr'],
	data () {
		return {
			persontName: '',
			password: '',
			sex: '1',
			centerDialogVisible: false,
			UserDataTime: '',
			activeIndex: 0
		};
	},
	methods: {
		_savePenson () {
			this.$ajax({
				method: 'post',
				url: '/userinfo/updateUserInfo',
				params: {
					realName: this.persontName,
					sex: this.sex,
					password: this.password,
					birthdays: this.UserDataTime,
					birthday: this.UserDataTime
				}
			}).then(res => {
				if (res.success) {
					this.$message.success('修改成功');
					let UserName = this.persontName;
					this.centerDialogVisible = false;
					this.$storage.set('UserName', UserName);
					this.reload();
					// history.go(0);
				} else {
					this.$message.error('修改失败');
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		// 退出
		returnLogin () {
			// this.$ajax({
			// 	method: 'post',
			// 	url: '/user/outLogin'
			// }).then(res => {
			// 	if (res.success) {
			// 	} else {
			// 	}
			// }).catch(err => {
			// 	throw new Error(err);
			// });
			// this.$router.push({name: 'chain-login'});
			let LoginAddres = this.$storage.get('LoginAddres'); // 退出地址
			this.$storage.clear(); // 清除缓存
			window.location.href = LoginAddres + 'link/';
		},
		// 返回班级
		returnClass (routerName) {
			let UserType = this.$storage.get('UserType');
			let LoginAddres = this.$storage.get('LoginAddres'); // 退出地址
			if (UserType + '' === '1') {
				window.location.href = LoginAddres + 'link/#/teacher-class/teacher-creator';
			} else {
				window.location.href = LoginAddres + 'link/#/student-class/student-course';
			}
			// this.$router.push({name: routerName});
		},
		// 点击二级下拉路由
		_handleChildren (routerName, i, isHref) {
			if (isHref) {
				let routeData = this.$router.resolve({name: routerName});
				window.open(routeData.href, '_blank');
			} else {
				this.$router.push({name: routerName});
			}
		},
		// 点击一级路由
		_handleClick (routerName, index) {
			let children = this.tabsArr[index].children || [];
			let isHref = this.tabsArr[index].isHref;
			if (children.length === 0) { // 单路由跳转
				if (isHref) { // 新页签
					if (routerName === 'chainStar') {
						let LoginAddres = this.$storage.get('LoginAddres'); // 退出地址
						window.open(LoginAddres + 'link/#/chainStar');
					} else {
						let routeData = this.$router.resolve({name: routerName});
						window.open(routeData.href, '_blank');
					}
				} else {
					this.$router.push({name: routerName});
				}
			} else {
				return false;
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
		margin: 0 15px;
		cursor: pointer;
		position: relative;
		.tabs-item{
			top: 56px;
			left: -46px;
			position: absolute;
			width: 190px;
			display: none;
			background: #fff;
			z-index: 1000;
			p{
				width: 100%;
				text-align: center;
				height: 40px;
				line-height: 40px;
				border-bottom: 1px solid #eee;
				// background: #f44336;
			}
		}
		&:hover{
			.tabs-item{
				display:block;
			}
			color: #656CDC;
		}
	}
}
.header {
	height: 64px;
	line-height: 60px;
	z-index: 3;
	background: #fff;
	// box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
	// margin-bottom: 3px;
	// position: fixed;
	width: 100%;
	// top: 0PX;
	.container{
		position: relative;
	}
	.logo img{
		// margin-top: 15px;
		width: 128px;
		height: 60px;
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
		// box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
		position: absolute;
		right: 0px;
		top: 54px;
		width: 180px;
		// height: 84px;
		background: #fff;
		display: none;
		z-index: 100;
		padding-top: 10px;
		&:hover{
			display: block;
		}
		li{
			padding: 0 15px;
			height: 54px;
			line-height: 54px;
			cursor: pointer;
			border-bottom: 1px solid #eee;
			span{
				display: inline-block;
				width: 40px;
			}
		}
	}
	.title{
		font-size: 16px;
		color: #888888;
		height: 62px;
		font-size: 21px;
		color: #333;
		line-height: 62px;
	}
	.name{
		font-size: 14px;
		height: 62px;
		line-height: 62px;
		margin: 0 15px;
		color: #333;
		cursor: pointer;
	}
	.head img{
		width: 36px;
		margin-top: 14px;
		height: 36px;
		cursor: pointer;
	}
}
.active{
	color: #656CDC;
}
</style>
