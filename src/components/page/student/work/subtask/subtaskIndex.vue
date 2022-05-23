<!--
 * @Date: 2019-08-06 19:18:20
 -->
<template>
	<div class="subtask-index">
		<div class="titletext">企业经营碳沙盘</div>
		<template v-if="$storage.get('UserType') + '' === '1'">
			<div class="containter teacherop">
				<div class="introduction">
					<p>班级人数:<span>{{classNumber}}</span>人</p>
					<p>邀请码:<span>{{classCode}}</span></p>
					<p>班级名称:<span>{{className}}</span></p>
				</div>
				<ul class="clearfix mt20">
					<li v-for="(item, index) in operatArr"  @click="_handlePath(item.path)"  :key="index">
						<img :src="item.imgUrl" alt="">
						{{item.operatTit}}
					</li>
				</ul>
				<div class="task-schedule">
					<h2>任务推送</h2>
					<div class="progress-container">
						<div class="progress" :style="{width:progress+'%' , background:'#5BA8FF'}"></div>
						<span class="progress-num">{{progress}}%</span>
					</div>
					<div class="pok">已推送<span>{{Pushed}}</span>个/总任务<span>{{totaltask}}</span>个</div>
						<!-- <div class="pok2"></div> -->
				</div>
			</div>
		</template>
		<div class="mt50 center">
			<ul class="nav-list clearfix">
				<li class="fl clearfix" v-for="(moldItem, moldIndex) in MoldListArr" :key="moldIndex">
					<div class="nav-list-left fl" @click="tagTask(moldIndex)">
						<p v-if='moldItem.moldName'>
							<!-- {{(moldIndex + 1) | numToCharacter}}、 -->
							{{moldItem.moldName}}
						</p>
					</div>
					<div class="nav-list-right fl" :class="{zoomClass: moldItem.isZoom}">
						<div class="right-content">
							<div class="mold-name">
								{{(moldIndex + 1) | numToCharacter}}、
								{{moldItem.moldName}}
								<div class="switch" v-if="$storage.get('UserType') + '' === '1'">
									<el-switch
										@change="openMold(moldItem)"
										v-model="moldItem.moldIsdone"
										active-text="开"
										inactive-text="关"
										active-color="#13ce66"
										inactive-color="#ff4949">
									</el-switch>
								</div>
							</div>
							<div class="mold-info">
								<p v-html="moldItem.moldInfo">
								</p>
							</div>
							<div class="center bossBth">
								<p class="start moldBth" @click="startsNold(moldItem)">
									开始学习
								</p>
							</div>
						</div>
						<div class="pageTa" v-if="moldItem.isZoom"></div>
						<div class="pageTa" v-if="moldItem.isZoom"></div>
					</div>
				</li>
			</ul>
		</div>
		<el-dialog title="请选择岗位" append-to-body  :visible.sync="centerDialogVisible" fullscreen width="100%" center>
			<selectOrg v-if="centerDialogVisible" @close="close"></selectOrg>
		</el-dialog>
	</div>
</template>

<script>
import selectOrg from '@@/student/selectOrg/selectOrg';
export default {
	name: 'login',
	data () {
		return {
			Pushed: '',
			totaltask: '',
			progress: '',
			classNumber: '',
			classCode: '',
			className: '',
			centerDialogVisible: false,
			moldList: [],
			operatArr: [
				{
					operatTit: '签到管理',
					operatRoute: 'icon-liebiao',
					imgUrl: require('./images/ii1.png'),
					path: 'teacher-sign'
				},
				{
					operatTit: '学生成果',
					operatRoute: 'icon-chengguo',
					imgUrl: require('./images/ii2.png'),
					path: 'teacher-results'
				},
				{
					operatTit: '风暴选人',
					operatRoute: 'icon-fengbaoxuanren',
					imgUrl: require('./images/ii3.png'),
					path: 'pack-person'
				},
				{
					operatTit: '模块权重',
					operatRoute: 'icon-qukuailian',
					imgUrl: require('./images/ii4.png'),
					path: 'mold-weight'
				},
				{
					operatTit: '实训报告',
					operatRoute: 'icon-mubiao',
					imgUrl: require('./images/ii5.png'),
					path: 'class-report'
				}
			],
			MoldListArr: []
		};
	},
	created () {
		this.selectMold();
		this.ProgressSelect();
		this.getClassNumber();
		this.getRole();
	},
	components: {
		selectOrg
	},
	watch: {
	},
	methods: {
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
						if (this.$storage.get('UserType') + '' === '1') { // 老师不弹选择的班级
						} else {
							this.centerDialogVisible = true;
						}
					} else {
						this.$storage.set('orgName', res.data.clazzOrg.orgName);
						this.$storage.set('indName', res.data.industry.name);
						this.$storage.set('clazzOrg', res.data.clazzOrg);
						this.$storage.set('industry', res.data.industry);
					}
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		getClassNumber () { // 获取班级人数
			this.$ajax({
				method: 'post',
				url: 'clazz/findClazzToClazz'
			}).then(res => {
				if (res.success && res.data) {
					this.classNumber = res.data.number;
					this.classCode = res.data.inviteCode;
					this.className = res.data.name;
				}
			});
		},
		ProgressSelect () {
			this.$ajax({
				method: 'post',
				url: 'TeacherClazzMold/taskToPush'
			}).then(res => {
				if (res.success && res.data) {
					this.Pushed = res.data.isOpen;
					this.totaltask = res.data.count;
					this.progress = parseInt((res.data.isOpen / res.data.count) * 100);
				};
			}).catch(err => {
				throw new Error(err);
			});
		},
		_handlePath (path) {
			this.$router.push({name: path});
		},
		/**
		 * @name: zhangln
		 * @msg: 开启模块
		 * @param {*} row
		 * @param {*} state
		 */
		openMold (row) {
			this.$ajax({
				method: 'post',
				url: '/TeacherClazz/teacherOpenCloseMold',
				params: {
					moldId: row.moldId,
					moldIsDone: row.moldIsdone ? 1 : 0
				}
			}).then(res => {
				if (res.success) {
					this.selectMold();
					this.$myMessage.success(res.message);
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		/**
		 * @name: zhangln
		 * @msg: 查询多少模块+讲
		 */
		selectMold () {
			this.$ajax({
				method: 'post',
				url: '/mold/getMoldInfo'
			}).then(res => {
				if (res.success) {
					let array = res.data;

					for (let index = 0; index < array.length; index++) {
						const element = array[index];
						element.moldIsdone = false;
						if (element.mold_isdone === 1) {
							element.moldIsdone = true;
						}
					}
					this.MoldListArr = array;
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		tagTask (index) {
			this.MoldListArr.forEach((e, i) => {
				e.isZoom = false;
			});
			this.$storage.set('moldIndex', index);
			let item = this.MoldListArr[this.$storage.get('moldIndex') || 1];
			item.isZoom = true;
		},
		startsNold (item) {
			console.log(item);
			// 学生
			if (this.$storage.get('UserType') + '' === '2' && !item.moldIsdone) {
				this.$alert(`该模块老师未推送，请进入其他模块学习`, '', {
					confirmButtonText: '确定',
					type: 'success',
					center: true,
					callback: action => {
					}
				});
				return;
			}

			// let chapter = item.moldChapter[0];
			this.$storage.set('moldCode', item.moldCode || '');
			this.$storage.set('moldType', item.moldType || '');
			this.$router.push({name: 'subtask-work', params: {'moldId': item.moldId}, query: {}});
		},
		starts (item, chapter) {
			console.log(item);
			// 学生
			if (this.$storage.get('UserType') + '' === '2' && !item.moldIsdone) {
				this.$alert(`该模块老师未推送，请进入其他模块学习`, '', {
					confirmButtonText: '确定',
					type: 'success',
					center: true,
					callback: action => {
					}
				});
				return;
			}

			this.$storage.set('moldCode', item.moldCode || '');
			this.$storage.set('moldType', item.moldType || '');
			this.$storage.set('chapterImage', chapter.chapterImage);
			this.$storage.remove('currentTask');
			this.$router.push({name: 'subtask-work', params: {'moldId': item.moldId}, query: {'chapterId': chapter.id}});
		}
	}
};
</script>

<style lang="scss" scoped>
.subtask-index{
	height: calc(100vh - 78px);
	width: 100%;
	background: url('./images/bigbg.png') no-repeat center center;
	background-size: cover;
	padding-top: 50px;
	padding-bottom: 50px;
	overflow: auto;
	.titletext {
		font-family: FZZZHONGJW--GB1-0;
		font-size: 52px;
		color: #FFFFFF;
		letter-spacing: 1.08px;
		text-align: center;
	}
}
.nav-list {
	display: inline-block;
	&>li:first-child{
		margin-left: 0;
	}
	&>li {
		margin-left: 8px;
		height: 480px;
		.nav-list-left {
			width: 92px;
			height: 100%;
			position: relative;
			cursor: pointer;
			p{
				font-family: HYk2gj;
				font-size: 22px;
				color: #FFFFFF;
				letter-spacing: 0;
				line-height: 28px;
				text-shadow: 0 2px 4px rgba(0,0,0,0.16);
				width: 24px;
				text-align: center;
				// position: absolute;
				// left: 50%;
				// top: 50%;
				// -webkit-transform: translate(-50%,-50%);
				// transform: translate(-50%,-50%);
				margin: 105px auto 0;
			}
		}
		.nav-list-right {
			transition: all .1s;
			width: 400px;
			height: 100%;
			// overflow: hidden;
			text-align: left;
			position: relative;
			.right-content {
				overflow-y: scroll;
				padding-left: 15px;
				.mold-name {
					letter-spacing: 0;
					margin-top: 24px;
					font-size: 20px;
					font-family: PingFangSC-Semibold, PingFang SC;
					font-weight: 600;
					color: #222222;
					line-height: 24px;
					position: relative;
					.switch{
						position: absolute;
						top: 0px;
						right: 5px;
					}
				}
				// .mold-info {
				// 	font-family: PingFangSC-Medium;
				// 	font-size: 14px;
				// 	letter-spacing: 0;
				// 	border-bottom: 1px solid #B6B9D6;
				// 	padding: 13px 0 20px;
				// 	font-family: PingFangSC-Medium, PingFang SC;
				// 	font-weight: 500;
				// 	color: #222222;
				// 	line-height: 25px;
				// }
			}
		}
		.zoomClass {
			width: 0px;
			padding: 20px 30px 20px 20px;
			animation: animaZoomClass 0.3s linear forwards;
			-webkit-animation: animaZoomClass 0.3s linear forwards;
			.right-content{
				animation: animaZoomClassDiv 0.2s linear 0.3s forwards;
				-webkit-animation: animaZoomClassDiv 0.2s linear 0.3s forwards;
				opacity: 0;
			}
		}
		.pageTa{
			width: 36px;
			height: 63px;
			background: url('./images/page1.png') no-repeat center;
			background-size: contain;
			position: absolute;
			left: -18px;
			&:nth-child(2){
				top: 65px;
			}
			&:nth-child(3){
				top: 315px;
			}
		}
	}
	&>li:nth-of-type(1) {
		.nav-list-left {
			background: url('./images/b1.png') no-repeat center center;
			background-size: cover;
		}
		.nav-list-right {
			background: url('./images/rbg1.png') no-repeat center center;
			background-size: 100% 100%;
			.num {
				background: #5664E7;
			}
			.start {
				background: #5664E7;
			}
			.mold-info {
				p{
					strong{
						display: initial;
						padding: 2px 9px;
						color: #5664E7;
					}
				}
			}
		}
	}
	&>li:nth-of-type(2) {
		.nav-list-left {
			background: url('./images/b2.png') no-repeat center center;
			background-size: cover;
		}
		.nav-list-right {
			background: url('./images/rbg2.png') no-repeat center center;
			background-size: 100% 100%;
			.num {
				background: #099FC4;
			}
			.start {
				background: #099FC4;
			}
			.mold-info {
				p{
					strong{
						color: #099FC4;
					}
				}
			}
		}
	}
	&>li:nth-of-type(3) {
		.nav-list-left {
			background: url('./images/b3.png') no-repeat center center;
			background-size: cover;
		}
		.nav-list-right {
			background: url('./images/rbg3.png') no-repeat center center;
			background-size: 100% 100%;
			.num {
				background: #00A7B6;
			}
			.start {
				background: #00A7B6;
			}
			.mold-info {
				p{
					strong{
						color: #00A7B6;
					}
				}
			}
		}
	}
	&>li:nth-of-type(4) {
		.nav-list-left {
			background: url('./images/b4.png') no-repeat center center;
			background-size: cover;
		}
		.nav-list-right {
			background: url('./images/rbg4.png') no-repeat center center;
			background-size: 100% 100%;
			.num {
				background: #0DA85D;
			}
			.start {
				background: #0DA85D;
			}
			.mold-info {
				p{
					strong{
						color: #0DA85D;
					}
				}
			}
		}
	}
	&>li:nth-of-type(5) {
		.nav-list-left {
			background: url('./images/b5.png') no-repeat center center;
			background-size: cover;
		}
		.nav-list-right {
			background: url('./images/rbg5.png') no-repeat center center;
			background-size: 100% 100%;
			.num {
				background: #6E9A01;
			}
			.start {
				background: #6E9A01;
			}
			.mold-info {
				p{
					strong{
						color: #6E9A01;
					}
				}
			}
		}
	}
	&>li:nth-of-type(6) {
		.nav-list-left {
			background: url('./images/b6.png') no-repeat center center;
			background-size: cover;
		}
		.nav-list-right {
			background: url('./images/rbg6.png') no-repeat center center;
			background-size: 100% 100%;
			.num {
				background: #BE9400;
			}
			.start {
				background: #BE9400;
			}
			.mold-info {
				p{
					strong{
						color: #BE9400;
					}
				}
			}
		}
	}
	&>li:nth-of-type(7) {
		.nav-list-left {
			background: url('./images/b7.png') no-repeat center center;
			background-size: cover;
		}
		.nav-list-right {
			background: url('./images/rbg7.png') no-repeat center center;
			background-size: 100% 100%;
			.num {
				background: #CA711D;
			}
			.start {
				background: #CA711D;
			}
			.mold-info {
				p{
					strong{
						color: #CA711D;
					}
				}
			}
		}
	}
}
.chapter-list {
	li {
		margin-top: 11px;
		cursor: pointer;
		.num {
			border-radius: 2px;
			color: #FFF;
			font-size: 12px;
			padding: 6px 9.4px;
			margin-top: 1px;
		}
		.name {
			margin-left: 12px;
			font-family: PingFangSC-Medium;
			font-size: 15px;
			color: #222222;
			letter-spacing: 0;
			line-height: 26px;
		}
		.start {
			cursor: pointer;
			border-radius: 13px;
			color: #FFF;
			padding: 7px 14px;
			font-size: 12px;
		}
	}
}
.bossBth{
	position: absolute;
	bottom: 50px;
	width: 100%;
}
.moldBth{
	cursor: pointer;
	display: inline-block;
	padding: 7px 14px;
	color: #FFF;
	font-size: 12px;
	border-radius: 13px;
}
.teacherop{
	margin-bottom: 40px;
	li{
		float: left;
		width: 200px;
		margin-right: 15px;
		width: 226px;
		height: 91px;
		background: #E6F1FF;
		border-radius: 8px;
		border: 2px solid #FFFFFF;
		text-align: center;
		padding-top: 30px;
		font-size: 20px;
		cursor: pointer;
		img{
			height: 30px;
			vertical-align: middle;
			margin-right: 15px;
		}
		&:nth-child(1) {
			background: #E6F1FF;;
		}
		&:nth-child(6) {
			background: #FFF7F0;
		}
		&:nth-child(2) {
			background: #E6FAFF;
		}
		&:nth-child(3) {
			background: #E7FFF7;
		}
		&:nth-child(4) {
			background: #E7FFF2;
		}
		&:nth-child(5) {
			background: #FFF9EB;
		}
		&:last-child{
			margin-right: 0px;
		}
	}
}
.task-schedule{
	position: relative;
	width: 1160px;
	height: 30px;
	margin: 0 auto;
	margin-top: 38px;
	margin-bottom: 12px;
	h2{
		float: left;
		font-size: 20px;
		color: #ffffff;
		font-weight: 400;
	}
	.pok{
		position:absolute;
		// display: block;
		right:-37px;
		font-size: 16px;
		color: #ffffff;
		line-height: 16px;
		height: 16px;
		}
	.pok2{
	position:absolute;
	// display: block;
	right:76px;
	font-size: 16px;
	color: #ffffff;
	line-height: 16px;
	height: 16px;
	}
}

	.p{
		float: right;
		// display: block;
		font-size: 16px;
		color: #ffffff;
		line-height: 16px;
		height: 16px;
		}
div.progress-container{
	height: 8px;
	width: 790px;
	border-radius: 10px;
	background: rgba(255,255,255,0.20);
	margin-left: 2%;
	position: relative;
	margin-left: 40px;
	margin-top: 6px;
	float: left;
	border: 1px solid #5BA8FF;
	div.progress{
		border-radius: 10px;
		height:8px;
		line-height: 8px;
		position: absolute;
		top:0;
		left:-1px;
	}
	.progress-num{
		position: absolute;
		right:-50px;
		top:-4px;
		font-size: 14px;
		color: #ffffff;
	}
}
.introduction{
	color:#FFF;
	margin-top: 40px;
	text-align: center;
	// justify-content:center;
	p{
		font-size: 16px;
		display: inline-block;
		margin-right: 31px;
		font-weight: 400;
	}
	span{
		display:inline-block;
		margin-left: 8px;
	}
}
@keyframes animaZoomClass{
	0%{
		width: 0;
	}
	100%{
		width: 508px;
	}
 }
 @-webkit-keyframes animaZoomClass{
	0%{
		width: 0;
	}
	100%{
		width: 508px;
	}
 }
 @keyframes animaZoomClassDiv{
	0%{
		opacity: 0;
	}
	100%{
		opacity: 1;
	}
 }
 @-webkit-keyframes animaZoomClassDiv{
	0%{
		opacity: 0;
	}
	100%{
		opacity: 1;
	}
 }
</style>
