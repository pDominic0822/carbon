<!--
 * @Author: zhangln
 * @LastEditors: Please set LastEditors
 * @Description: 课程封皮页
 * @Date: 2019-02-21 11:09:58
 * @LastEditTime: 2021-12-30 15:15:21
 -->
<template>
	<div class="teacher-pk">
		<edu-header :returnArr="returnArr" :tabsArr="tabsArr"></edu-header>
		<div class="banner mt20 containter">
			<div class="address">
				<span class="iconfont icon-dingwei icon"></span>
				<span class="address-city">{{address}}</span>
			</div>
			<p class="new-list f16">
				新课首发!
			</p>
			<p class="mt50 p1">{{courseInfo.systemName}}</p>
			<p class="mt50 tl p2">
				{{courseInfo.systemInfo}}
			</p>
			<ul class="p3 clearfix">
				<li>
					<p>难度</p>
					<p>
						{{courseInfo.applyCrowd}}
					</p>
				</li>
				<li>
					<p>学习时长</p>
					<p>建议{{courseInfo.hour}}课时</p>
				</li>
				<li>
					<p>课程定位</p>
					<p>
						{{courseInfo.trainingObj}}
					</p>
				</li>
			</ul>
			<div class="center mt60">
				<el-button @click="_enterCourse2()"  type="primary">进入课程</el-button>
			</div>
		</div>
		<div class="containter">
			<ul class="banner-info clearfix">
				<li>
					<p>{{course.moldCount}}</p>
					<!-- <p>5</p> -->
					<p>模块数</p>
				</li>
				<li>
					<p>594</p>
					<!-- <p>{{course.taskListBusinessCount}}</p> -->
					<p>任务总数</p>
				</li>
				<li>
					<p>{{course.resourceCount}}</p>
					<p>资源总数</p>
				</li>
				<li>
					<p>237</p>
					<p>知识点</p>
				</li>
				<li>
					<p>{{6}}</p>
					<p>岗位数</p>
				</li>
			</ul>
		</div>
		<div class="footer-box">
			<Footer></Footer>
		</div>
	</div>
</template>

<script>
import { setCookie } from '_@/js/utils';
import { baseUrl } from '@/config';
export default {
	name: 'login',
	data () {
		return {
			baseUrl: baseUrl,
			course: {
				moldCount: 2,
				taskListBusinessCount: 2,
				resourceCount: 3,
				financialIndustryCount: 3
			},
			returnArr: [],
			tabsArr: [],
			address: '北京',
			moldList: [],
			moldInfo: '',
			moldName: '',
			courseInfo: {},
			isShow: false,
			isGroup: false,
			centerDialogVisible: false,
			courseTips: []
		};
	},
	components: {
	},
	created () {
		console.log(this.$route.query.sessionId);
		setCookie('sessionId', this.$route.query.sessionId || '');
		this.getUserSession();
		this.getUserType();
	},
	methods: {
		getClassNumber () { // 获取班级人数
			this.$ajax({
				method: 'post',
				url: 'clazz/findClazzToClazz'
			}).then(res => {
				if (res.success && res.data) {
					this.$storage.set('className', res.data.name);
				}
			});
		},
		/**
		 * @name: zhangln
		 * @msg: 获取用户类型渲染header
		 */
		getUserType () {
			let UserType = this.$storage.get('UserType'); // 用户类型
			UserType = parseFloat(UserType);
			if (UserType === 1) { // 老师
				this.returnArr = [{
					name: '返回班级',
					routerName: 'teacher-class'
				}];
			} else if (UserType === 2) { // 学生
				this.returnArr = [{
					name: '返回班级',
					routerName: 'student-class'
				}];
			}
		},
		/**
		 * @name: zhangln
		 * @msg: 获取模块信息
		 */
		getMoldInfo () {
			this.$ajax({
				method: 'post',
				url: '/mold/getMoldInfo'
			}).then(res => {
				if (res.success) {
					this.moldList = res.data;
					this.moldInfo = res.data[0].moldInfo;
					this.moldName = res.data[0].moldName;
					this.moldId = res.data[0].moldId;
					this.$storage.set('moldName', this.moldName);
					this.$storage.set('moldId', this.moldId);
					if (parseFloat(this.$storage.get('UserType')) === 2) {	// 是学生检查有没有小组
						this.getRole(this.moldId);
					} else {	// 老师直接进入
						this.isGroup = true;
					}
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		/**
		 * @name: zhangln
		 * @msg: 获取位置
		 */
		getAddress () {
			this.$ajax({
				method: 'post',
				url: '/user/getUserIpAdrress'
			}).then(res => {
				if (res.success) {
					this.address = res.data.city;
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		getUserSession () {
			this.$ajax({
				method: 'post',
				url: '/user/getUserInfoLogin'
			}).then(res => {
				if (res.success) {
					this.$storage.set('resUrl', res.resourceUrl + '/pages/view/documentView?resourceID=');
					this.$storage.set('baseUrl', res.resourceUrl || '');
					this.$storage.set('systemId', res.systemId || ''); // 课程ID
					this.$storage.set('courseId', res.courseId || ''); // 课程ID
					this.$storage.set('classId', res.clazzId || '');
					this.$storage.set('modelUrl', res.modelUrl || ''); // 跨域代理
					this.$storage.set('commonFunction', res.commonFunction || ''); // 跨域代理
					this.$storage.set('className', res.clazzName || '');
					this.$storage.set('teacherName', res.teacherName || ''); // 老师名称
					this.$storage.set('LoginAddres', res.outLoginUrl || ''); // 退出地址
					let user = res.user;
					this.$storage.set('UserType', user.userType);
					this.$storage.set('userId', user.id); // 用户ID
					let syUserInfo = res.syUserInfo;
					this.$storage.set('User', JSON.stringify(user)); // 存储用户信息
					if (syUserInfo) {
						this.$storage.set('UserImage', syUserInfo.userImage || 'http://thirdwx.qlogo.cn/mmopen/nKRDZpwiakwhE4pfgQJAch885Wa6X49o43V3p1tT2iamPjUrtZbpEnr1JF3rTiccqCNQ7aVpWG1oclDKhrLtINx7bYE20gGPFpy/132'); // 存储用户头像
						this.$storage.set('UserName', syUserInfo.realName); // 存储用户信息
					} else {
						this.$storage.set('UserImage', 'http://thirdwx.qlogo.cn/mmopen/nKRDZpwiakwhE4pfgQJAch885Wa6X49o43V3p1tT2iamPjUrtZbpEnr1JF3rTiccqCNQ7aVpWG1oclDKhrLtINx7bYE20gGPFpy/132'); // 存储用户头像
						this.$storage.set('UserName', user.userPhone); // 存储用户信息
					}
					this.getresNum();
					this.getCourseinfo();
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		/**
		 * @name: zhangln
		 * @msg: 获取当前课程信息
		 */
		getCourseinfo () {
			this.$ajax({
				method: 'post',
				url: '/CourseSystem/findCourseSystemById',
				params: {
					id: this.$storage.get('systemId')
				}
			}).then(res => {
				if (res.success) {
					this.courseInfo = res.data;
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		/**
		 * @name: zhangln
		 * @msg: 获取当前课程信息
		 */
		getresNum () {
			this.$ajax({
				method: 'post',
				url: '/mold/findResources',
				params: {
					courseSystemId: this.$storage.get('systemId')
				}
			}).then(res => {
				if (res.success) {
					this.course = res.data;
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		/**
		 * @name: zhangln
		 * @msg: 根据用户类型进入不同的页面
		 */
		_enterCourse2 (index) {
			let UserType = this.$storage.get('UserType'); // 用户类型
			UserType = parseFloat(UserType);
			console.log(UserType);
			if (UserType === 1) { // 老师
				this.$router.push({name: 'teacher-index'});
			} else if (UserType === 2) { // 学生
				// this.getRole();
				this.$router.push({name: 'work-index'});
			}
		},
		isClose () {
			this.isShow = false;
		},
		close (state) {
			console.log('?????');
			this.centerDialogVisible = state;
		},
		getRole () {
			this.$ajax({
				method: 'post',
				url: '/clazzIndustry/findUserIndustry',
				params: {
				}
			}).then(res => {
				if (res.success && res.data) {
					if (!res.data.isIndustry) {
						this.centerDialogVisible = true;
					} else {
						this.$storage.set('orgName', res.data.clazzOrg.orgName);
						this.$storage.set('indName', res.data.industry.name);
						this.$storage.set('clazzOrg', res.data.clazzOrg);
						this.$storage.set('industry', res.data.industry);
						this.selectOrgData();
					}
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		selectOrgData () {
			this.$ajax({
				method: 'post',
				url: '/clazzOrg/getOrgGroupLeader',
				params: {}
			}).then(res => {
				if (res.success && res.data) {
					if (res.data.notLeader) { // 是组长
						this.$storage.set('isOrgLoader', 1);
					} else {
						this.$storage.set('isOrgLoader', 0);
					}
				}
			}).catch(err => {
				throw new Error(err);
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.address {
	position: absolute;
	top: 60px;
	right: 50px;
	cursor: pointer;
	.icon {
		// background: #FFFFFF;
		color: #FFFFFF;
		font-size: 16px;
	}
	.address-city {
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #FFFFFF;
	}
}
.new-list{
	position: absolute;
	top: 0px;
	left: 10px;
	width: 180px;
	height: 40px;
	top: 65px;
    left: 2px;
	line-height: 40px;
	color: #fff;
	text-align: center;
	background: url('./img/00.png') no-repeat left center;
}
.banner{
	background: url('./img/ccc.png') no-repeat center center;
	background-size: contain;
	height: 680px;
	border-top: 1px solid transparent;
	position: relative;
	.p1{
		font-family: PingFangSC-Regular;
		font-size: 46px;
		color: #FFFFFF;
		// letter-spacing: 1.17px;
		text-align: center;
		margin-top: 120px;
	}
	.p3{
		li{
			float: left;
			width: 33%;
			text-align: center;
			p{
				&:nth-child(1) {
					font-family: PingFangSC-Regular;
					font-size: 16px;
					color: #FFFFFF;
					text-align: center;
					margin-top: 50px;
				}
				&:nth-child(2) {
					font-family: PingFangSC-Regular;
					font-size: 28px;
					color: #FFFFFF;
					margin-top: 30px;
					text-align: center;
				}
			}
		}
	}
	.p2{
		font-family: PingFangSC-Regular;
		font-size: 18px;
		color: #FFFFFF;
		padding: 0 130px;
		// letter-spacing: 0.56px;
		text-align: left;
		padding: 0 110px;
		text-align: center;
		line-height: 28px;
	}
}
.banner-info{
	li{
		float: left;
		width: 20%;
		margin-top: 10px;
		text-align: center;
		border-right: 1px solid #CCCCCC;
		border-top: 1px solid transparent;
		p{
			&:nth-child(1){
				font-family: PingFangSC-Regular;
				font-size: 32px;
				color: #222222;
				margin-top: 0px;
				// letter-spacing: 0.67px;
				text-align: center;
			}
			&:nth-child(2){
				font-family: PingFangSC-Regular;
				font-size: 16px;
				color: #555555;
				text-align: center;
				margin-top: 30px;
			}
		}
		&:last-child{
			border-right: none;
		}
	}
}
.content {
	width: 960px;
	// height: 400px;
	z-index: 1000;
	background: #fff;
	padding: 30px;
	h2 {
		font-family: PingFangSC-Medium;
		font-size: 18px;
		color: #333333;
	}
	.course-info {
		margin-top: 20px;
		border: 1px dashed #CCCCCC;
		border-radius: 2px;
		padding: 20px;
		p {
			margin: 5px 0;
			font-family: PingFangSC-Regular;
			font-size: 15px;
			color: #333333;
			line-height: 20px;
			span {
				display: inline-block;
				vertical-align: middle;
				width: 8px;
				height: 8px;
				border-radius: 50%;
				margin: -4px 5px 0;
				&.one {
					border: 1px solid #5FC18E;
				}
				&.two {
					border: 1px solid #62B631;
				}
				&.three {
					border: 1px solid #E3C633;
				}
				&.four {
					border: 1px solid #E59332;
				}
				&.five {
					border: 1px solid #D165A6;
				}
			}
		}
	}
	.course-tips {
		margin-top: 20px;
		border: 1px dashed #CCCCCC;
		border-radius: 2px;
		padding: 20px;
		.course-item {
			text-align: center;
			width: 86px;
			position: relative;
			.cicle {
				margin: 0 auto;
				width: 40px;
				height: 40px;
				border-radius: 50%;
				background: #5fc18e;
				font-family: PingFangSC-Regular;
				font-size: 13px;
				color: #FFFFFF;
				line-height: 40px;
				&.bg0 {
					background: #5fc18e;
				}
				&.bg1 {
					background: #4ca840;
				}
				&.bg2 {
					background: #62b631;
				}
				&.bg3 {
					background: #7dbe32;
				}
				&.bg4 {
					background: #74ba24;
				}
				&.bg5 {
					background: #afce31;
				}
				&.bg6 {
					background: #e3c633;
				}
				&.bg7 {
					background: #e5b332;
				}
				&.bg8 {
					background: #e59332;
				}
			}
			p {
				width: 70px;
				margin: 0 auto;
				color: #333333;
				font-family: PingFangSC-Regular;
				font-size: 13px;
				color: #333333;
				line-height: 20px;
				margin-top: 15px;
				// height: 52px;
				overflow: hidden;
			}
			.icon {
				background: url('./img/jiantou.png') no-repeat top left;
				width: 25px;
				height: 5px;
				position: absolute;
				top: 18px;
				left: 73px;
			}
		}
	}
	.close {
		position: absolute;
		top: 20px;
		right: 20px;
		cursor: pointer;
		transition: all 0.6s;
		&:hover {
			transform: rotate(90deg);
			transform-origin: 50% 50%;
		}
	}
}
.footer-box {
	// position: absolute;
	// bottom: 0;
	// left: 0;
	// right: 0;
	margin-top: 25px;
}
</style>
