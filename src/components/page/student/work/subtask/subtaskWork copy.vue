<!--
 * @Author: zhangln
 * @Description: 学生端大任务详情页
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="subtask-index">
		<eduHeader3 :returnArr="returnArr" :tabsArr="tabsArr"></eduHeader3>
		<div>
			<div class="right-content">
				<div>
					<div class="subtask-tig-title">
						<!-- <el-dropdown @command="handleCommand">
							<span class="el-dropdown-link" style="font-size: 20px;">
								<img class="" width="50px" style="vertical-align: middle;" src="./images/left2.png" alt="">
								{{MoldYearObj.moldYearName}}
								<i class="el-icon-arrow-down el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item v-for="(item, index) in moldYearList" :command="index" :key="index">
									<span :class="{dropDownActive: moldYearIndex === index}">{{item.yearsTime}}</span>
								</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown> -->
					</div>
				</div>
				<div class="task-content">
					<div class="clearfix title-icon">
						<div class="clearfix fl" v-for="(item, index) in moldYearList" :key="index">
							<img class="fl" width="24px" src="./img/p3.png" alt="">
							<p style="margin-top: 5px; margin-left: 5px;" class="fl">年份：{{item.yearsTime}}</p>
							<div class="mt20">
								<el-button size="mini" type="primary" class="toYh" @click="handPushYear(item)">
									推送年
								</el-button>
								<el-button size="mini" type="primary" class="toYh" @click="getYearSubTask(item)">
									获取大任务
								</el-button>
							</div>
						</div>
					</div>
					<!-- 第一讲的小任务 -->
					<div class="moldYear-bg" :class='$storage.get("moldYearImage")'>
						<ul class="subtask-list clearfix">
							<li v-for="(subItem, subIndex) in subtaskList" :key="subIndex">
								<p class='subtaskTitle'>
									<span>0{{subIndex + 1}}</span>
									{{subItem.taskName}}
								</p>
								<p class="ans-btn">
									<el-button class="saveBtn" type="primary" size="mini" @click="getTaskArr(subItem)">查看小任务</el-button>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!-- 学习资源-->
		<el-dialog append-to-body :visible.sync="learnVisible3"
		title="资源答案"
		width="460px" class='onHeadLearn onHeadLearn3'>
			<div class='dialogHead'>
				<p @click="learnVisible3 = false"></p>
			</div>
			<div style='padding:10px;min-height: 230px;'>
				<ul class='pdfList'>
					<li v-for='(item, index) in resourcesPdf' :key='index' @click="lookPdf(item)">
						<img src="./images/pdf.png" alt="">
						<el-tooltip class="item" effect="dark" :content="item.resourceName" placement="top-start">
							<p>{{item.resourceName}}</p>
						</el-tooltip>
					</li>
				</ul>
			</div>
		</el-dialog>
		<!-- pdf -->
		<el-dialog append-to-body
		:title="dataSrc.resourceName"
		:visible.sync="isVisiblePdf" width="800px" class='onHeadLearn onHeadLearn3'>
			<div class='dialogHead'>
				<p @click="isVisiblePdf = false"></p>
			</div>
			<div style='height:600px;overflow:auto;'>
				<top-res :dataSrc = dataSrc></top-res>
			</div>
		</el-dialog>
		<!-- 教师课件 -->
		<el-drawer
			:show-close="true"
			:visible.sync="isteacherRes"
			append-to-body
			title="教师课件"
			size="40%"
			>
			<div class="deawer-box">
			</div>
		</el-drawer>
	</div>
</template>

<script>
import {studentTabsArr, teacherTabsArr, teacherSubTaskTag, studentSubTaskTag} from '#/common/json/WorkJson';
import eduHeader3 from '#/common/edu-header3';
import { commonFunction, modelatlasUrl } from '@/config';

export default {
	name: 'login',
	components: {
		eduHeader3
	},
	data () {
		return {
			subtaskActive: 0,
			isDrawerOne: false,
			isteacherRes: false,
			returnArr: [{
				name: '返回班级',
				routerName: 'student-class'
			}],
			tabsArr: [
			],
			toolList: [
				{
					name: '任务答案',
					icon: 'icon-tishi1',
					fontColor: '#FFF',
					toolType: 'taskInfo',
					taskType: 'task',
					showType: 'demo01'
				}
			],
			subtaskTig: -1,
			moldYearIndex: -1,
			MoldYearObj: {},
			taskListArr: [],	// 小任务
			moldYearList: [],	// 讲
			subtaskList: [],	// 大任务,
			isdrawer: false,
			isTeacherGo: false,
			drawerTitle: '',
			currentTask: this.$storage.get('currentTask'),
			totalTasks: '',
			dataSrc: {
				resourceName: ''
			},
			isVisiblePdf: false,
			useTokenNum: '',
			totalTokenNum: '',
			// 实验题的路由，新页签打开
			experimentPage: ['handle-task0406', 'handle-task0504', 'handle-task0507', 'handle-task0510', 'handle-task05013'],
			// 是否是pdf页面
			isPdf: false,
			isCongSuccess: false,
			visitDuration: 0,
			subtaskId: '',
			teacherSeeCanvasJson: '',
			timer: null,
			userList: [],
			taskUrl: '',
			addScore: 0,
			addMaxScore: 0,
			isTeacherNo: false,
			isvisible: false,
			referenceState: false,
			learnVisible3: false,
			resourcesPdf: [],
			userIndex: 0,
			defaultMoldYearsId: '',
			clazzYearsPushId: '',
			taskId: '',
			taskName: '',
			tokenForm: {
				addToken: 0,
				reduceToken: 0,
				thinkingAbility: 10
			}
		};
	},
	inject: ['reload'],
	created () {
		this.getMoldYear();
		this.init();
	},
	methods: {
		// 任务列表，学习指导切换
		_switchTag (index) {
			// this.subtaskActive = index;
			// this.subtaskTig = '';
			let item = this.subTaskTag[index];
			this.subtaskTig = item.tagCode;
			if (this.subtaskTig === 'taskAnswer') { // 信息互动
				this.isDrawerOne = true;
				return 0;
			}
			if (this.subtaskTig === 'teacherRes') { // 信息互动
				this.isteacherRes = true;
				return 0;
			}
			if (this.subtaskTig === 'studyMap') { // 信息互动
				let routeData = this.$router.resolve({name: 'study-map', params: this.$route.params.moldId});
				window.open(routeData.href, '_blank');
				return 0;
			}
			if (this.subtaskTig === 'studyData') { // 信息互动
				let routeData = this.$router.resolve({name: 'study-data', params: this.$route.params.moldId});
				window.open(routeData.href, '_blank');
				return 0;
			}
			if (this.subtaskTig === 'teacherStudyMap') { // 信息互动
				let routeData = this.$router.resolve({name: 'teacher-study-data', params: this.$route.params.moldId});
				window.open(routeData.href, '_blank');
				return 0;
			}
			// 运行大屏
			if (this.subtaskTig === 'largeScreen') { // 信息互动
				let routeData = this.$router.resolve({name: 'large-screen', params: this.$route.params.moldId});
				window.open(routeData.href, '_blank');
				return 0;
			}
		},
		goYhEvent () {
			this.$axios
				.post(`${modelatlasUrl()}/modelatlas/atlasScore/insertUserTaskAtlasScore`, {
					sessionId: this.$Cookie.get('sessionId'),
					systemId: this.$storage.get('systemId'),
					moldId: this.$route.params.moldId, //     模块id
					moldYearId: this.$route.query.moldYearId,
					subtaskId: this.subtaskId,
					taskId: this.taskId,
					scoreType: 'taskTeacherSubjectivity',
					scoreSource: '老师' + this.$storage.get('taskName') + '下主观评分',
					addScore: this.addScore || 0,
					addUserId: this.userList[this.userIndex].userId || 1
				})
				.then(res => {
					if (res.success) {
						this.$message({
							type: 'success',
							message: res.message
						});
					} else {
						this.$message({
							type: 'error',
							message: res.message
						});
					}
				}).catch(error => {
					console.log(error);
				});
		},
		closeDialog () {
			this.$store.commit('addUserSubtaskVisitDuration', this.visitDuration || 10000);
			clearInterval(this.timer);
			this.timer = null;
		},
		/**
		 * @name: zhangln
		 * @msg: 判断当前登录是老师还是学生
		 */
		init () {
			let UserType = this.$storage.get('UserType'); // 用户类型
			UserType = parseFloat(UserType);
			if (UserType + '' === '1') { // 老师
				this.tabsArr = teacherTabsArr;
				this.subTaskTag = teacherSubTaskTag;
				this.returnArr = [{
					name: '返回班级',
					routerName: 'teacher-class'
				}];
			} else if (UserType + '' === '2') { // 学生
				this.tabsArr = studentTabsArr;
				this.subTaskTag = studentSubTaskTag;
				this.returnArr = [{
					name: '返回班级',
					routerName: 'student-class'
				}];
			}
		},
		getTaskArr (subItem) {
			this.$ajax({
				method: 'post',
				url: '/stClazzSubtaskPush/findClazzYearTaskInfoList',
				params: {
					moldId: this.$route.params.moldId || '', // 模块id
					clazzYearsPushId: this.clazzYearsPushId || '', // 节id
					subtaskId: subItem.subtaskId || '' // 大任务id
				}
			}).then(res => {
				this.subtaskId = subItem.subtaskId || '';
			}).catch(err => {
				throw new Error(err);
			});
		},
		/**
		 * @name: zhangln
		 * @msg: 判断老师是否开启答案
		 */
		_openAnswer (subItem) {
			this.$ajax({
				method: 'post',
				url: '/resourceReference/openOrShutReference',
				params: {
					moldId: this.$route.params.moldId || '', // 模块id
					moldYearId: this.$route.query.moldYearId || '', // 节id
					subtaskId: subItem.id || '' // 大任务id
				}
			}).then(res => {
				this.$myMessage.success(res.message.data);
			}).catch(err => {
				throw new Error(err);
			});
		},
		// 加载pdf列表
		findStandardCourse (subtaskId, resourceType) {
			this.$ajax({
				method: 'post',
				url: '/subtaskResource/findSubtaskResouceByType',
				params: {
					subtaskId: subtaskId,
					resourceType: resourceType
				}
			}).then(res => {
				if (res.success && res.data.length !== 0) {
					this.resourcesPdf = res.data;
					this.learnVisible3 = true;
				} else {
					this.$alert(`老师未挂载答案`, '', {
						confirmButtonText: '确定',
						type: 'error',
						center: true,
						callback: action => {
						}
					});
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		// 查看pdf
		lookPdf (item) {
			this.dataSrc = item;
			this.isVisiblePdf = true;
		},
		/**
		 * @name: zhangln
		 * @msg: 判断老师是否开启答案
		 */
		getReference (subItem) {
			this.$ajax({
				method: 'post',
				url: '/resourceReference/findResourceReference',
				params: {
					moldId: this.$route.params.moldId, // 模块id
					moldYearId: this.$route.query.moldYearId, // 节id
					subtaskId: subItem.id // 大任务id
				}
			}).then(res => {
				if (res.success) {
					if (res.referenceState === '1') {
						this.referenceState = true;
						this.findStandardCourse(subItem.id, 'studentSubtaskAnswer');
					} else {
						this.referenceState = false;
						if (this.$storage.get('UserType') + '' === '1') {
							this.$confirm('老师未开启答案,是否开启?', '提示', {
								confirmButtonText: '确定',
								cancelButtonText: '取消',
								type: 'warning'
							}).then(() => {
								this._openAnswer(subItem);
							}).catch(() => {
							});
						} else {
							this.$alert(`老师未开启答案`, '', {
								confirmButtonText: '确定',
								type: 'error',
								center: true,
								callback: action => {
								}
							});
						}
						// this.$alert(`老师未开启答案`, '', {
						// 	confirmButtonText: '确定',
						// 	type: 'error',
						// 	center: true,
						// 	callback: action => {
						// 	}
						// });
					}
				} else {
					this.referenceState = false;
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		handPushYear (item) {
			this.$ajax({
				method: 'post',
				url: '/stClazzYearsPush/updateClazzYearsPushOpen',
				params: {
					moldId: this.$route.params.moldId, // 模块id
					defaultMoldYearsId: item.defaultMoldYearsId,
					yearsTime: item.yearsTime
				}
			}).then(res => {
				if (res.success) {
					this.defaultMoldYearsId = item.defaultMoldYearsId;
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		getYearSubTask (item) {
			this.$ajax({
				method: 'post',
				url: '/stClazzSubtaskPush/findMoldYearsSubtaskPushInfoList',
				params: {
					moldId: this.$route.params.moldId, // 模块id
					defaultMoldYearsId: item.defaultMoldYearsId || '',
					clazzYearsPushId: item.clazzYearsPushId || ''
				}
			}).then(res => {
				if (res.success) {
					this.clazzYearsPushId = item.clazzYearsPushId;
					this.subtaskList = res.data;
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		handleCommand (index) {
			this.moldYearIndex = index;
			this.MoldYearObj = this.moldYearList[index];
			this.$storage.set('moldYearImage', this.MoldYearObj.moldYearImage);
			// this.$router.replace({name: 'subtask-work', params: {'moldId': this.$route.params.moldId}, query: {'moldYearId': this.MoldYearObj.id}});
			this.getSubtaskArr();
		},
		// 查询讲列表
		selectChaper () {
			this.$ajax({
				method: 'post',
				url: '/moldmoldYear/findMoldmoldYearByParam',
				params: {
					moldId: this.$route.params.moldId // 模块id
				}
			}).then(res => {
				if (res.success) {
					this.moldYearList = res.data;
					this.moldYearIndex = this.moldYearList.findIndex((e, i) => {
						return e.id === this.MoldYearObj.id;
					});
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		/**
		 * @name: zhangln
		 * @msg: 获取当前的班级学生
		 */
		getUserList () {
			this.$axios
				.post(`${commonFunction}/function/Windstorm/windstormMessage`, {
					sessionId: this.$Cookie.get('sessionId')
				})
				.then(res => {
					this.userList = res.data.clazzUserList || [];
					this._handleStudentUser(0);
				}).catch(error => {
					console.log(error);
				});
		},
		_handleStudentUser (index) {
			this.userIndex = index;
			let studentId = this.userList[index].userId;
			this.addScore = 0;
			this.getCanvasJson(studentId);
			this.getStudentScore({studentId});
		},
		getStudentScore (params) {
			this.$axios
				.post(`${modelatlasUrl()}/modelatlas/performanceRecord/findTaskPerformanceRecordInfoList`, {
					sessionId: this.$Cookie.get('sessionId'),
					systemId: this.$storage.get('systemId'),
					moldId: this.$route.params.moldId, //     模块id
					moldYearId: this.$route.query.moldYearId,
					subtaskId: this.subtaskId,
					taskId: this.taskId,
					taskScoreType: 'taskTeacherSubjectivity',
					...params
				})
				.then(res => {
					if (res.success) {
						if (res.data.length > 0) {
							this.addScore = res.data[0].atlasScore;
							this.isTeacherNo = true;
						} else {
							this.addScore = 0;
							this.isTeacherNo = false;
						}
					} else {
						this.addScore = 0;
						this.isTeacherNo = false;
					}
				}).catch(error => {
					console.log(error);
				});
		},
		getCanvasJson (studentId) {
			this.teacherSeeCanvasJson = '';
			this.$ajax({
				method: 'post',
				url: '/scUserCanvasRecord/findStudentUserCanvasRecordList',
				params: {
					moldId: this.$route.params.moldId, //     模块id
					subtaskId: this.subtaskId,
					taskId: this.taskId,
					studentId: studentId
				}
			}).then(res => {
				if (res.success) {
					if (res.data.length > 0) {
						if (res.data[0].recordState === 1) {
							this.teacherSeeCanvasJson = res.data[0].canvasJson;
						} else {
							this.teacherSeeCanvasJson = '';
							this.userIndex !== 0 && this.$message({
								type: 'success',
								message: '该学生未提交'
							});
						}
					} else {
						this.teacherSeeCanvasJson = '';
						this.userIndex !== 0 && this.$message({
							type: 'success',
							message: '该学生未提交'
						});
					}
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		// 任务列表，学习指导切换
		_switch (tig) {
			this.subtaskTig = tig;
			if (tig === 1) {	// 学习指导
				this.$ajax({
					method: 'post',
					url: '/taskResource/findTaskResourceByParam',
					params: {
						taskId: this.taskId,
						resourceCode: 'demo03'
					}
				}).then(res => {
					if (res.success) {
						if (res.data.length > 0) {
							this.$nextTick(() => {
								this.imgId = res.data[0];
							});
						} else {
							this.imgId = null;
						}
					}
				}).catch(err => {
					throw new Error(err);
				});
			} else if (tig === 2) {	// 实训数据+品牌
			} else if (tig === 3) { // 财务制度
				this.dialogVisible2 = true;
			} else if (tig === 6) { // 互动问答
			}
		},
		/**
		 * @name: zhangln
		 * @msg: 查询模块下年
		 */
		getMoldYear () {
			this.$ajax({
				method: 'post',
				url: '/stClazzYearsPush/findMoldYearsTimeInfoList',
				params: {
					moldId: this.$route.params.moldId
				}
			}).then(res => {
				if (res.success) {
					this.moldYearList = res.data;
					// this.selectChaper();
					// this.getSubtaskArr();
					// this.$storage.set('moldYearName', this.MoldYearObj.moldYearName);
				} else {
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		/**
		 * @name: zhangln
		 * @msg: 获取当前节下所有的大任务
		 */
		getSubtaskArr () {
			this.$ajax({
				method: 'post',
				url: 'moldSubtask/findTaskAndSubTaskInfo',
				params: {
					moldId: this.$route.params.moldId,
					moldYearId: this.MoldYearObj.id,
					showComplete: 1
				}
			}).then(res => {
				if (res.success) {
					this.subtaskList = res.data;
					let _num = 0;
					this.subtaskList.forEach(item => {
						item.taskListBusinessesList.forEach(itemSon => {
							_num++;
							itemSon.itemIndex = _num;
						});
					});
					this.totalTasks = _num;
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		// 跳转小任务
		toTaskPage (taskItem) {
			this.$storage.set('currentTask', taskItem.itemIndex);
			this.currentTask = taskItem.itemIndex;
			this.subtaskId = taskItem.subtaskId;
			this.taskId = taskItem.id;
			if (this.experimentPage.indexOf(taskItem.taskUrl) === -1) {
				// pdf资源文件不加画布的样式
				if (taskItem.taskUrl === 'handle-pdf' || taskItem.taskUrl === 'handle-pager' || taskItem.taskUrl === 'handle-more-pdf') {
					this.isPdf = true;
				} else {
					this.isPdf = false;
				}
				this.drawerTitle = taskItem.taskName;
				this.isdrawer = true;
				this.$router.push({
					name: taskItem.taskUrl,
					query: {
						moldYearId: this.$route.query.moldYearId,
						subtaskId: taskItem.subtaskId,
						taskId: taskItem.id
					}
				});

				if (this.$storage.get('UserType') + '' === '1') {
					this.$nextTick(() => {
						this.getUserList();
						this.TeacherTaskSubjectivity();
						return 0;
					});
				}

				// 学生的时候才有完成任务1020
				if (this.$storage.get('UserType') + '' === '2') {
					this.$nextTick(() => {
						this.$store.commit('addUserTaskVisitCount', taskItem.taskId || '');
						this.getStudentScore({});
						this.TeacherTaskSubjectivity();
						clearInterval(this.timer);
						this.timer = null;
						this.visitDuration = 0;
						this.timer = setInterval(() => {
							// console.log('TMD');
							this.visitDuration += 1000;
							// console.log(this.visitDuration);
						}, 1000);
					});
				}
			} else {
				let routeData = this.$router.resolve({
					name: taskItem.taskUrl,
					query: {
						moldYearId: this.$route.query.moldYearId,
						subtaskId: taskItem.subtaskId,
						taskId: taskItem.id
					}
				});
				window.open(routeData.href, '_blank');
			}
		},
		TeacherTaskSubjectivity () {
			this.$axios
				.post(`${modelatlasUrl()}/modelatlas/allAtlas/findTaskAllAtlasRecordList`, {
					sessionId: this.$Cookie.get('sessionId'),
					systemId: this.$storage.get('systemId'),
					moldId: this.$route.params.moldId, //     模块id
					subtaskId: this.subtaskId,
					taskId: this.taskId,
					scoreType: 'taskTeacherSubjectivity'
				})
				.then(res => {
					if (res.data.length > 0) {
						this.addMaxScore = res.data[0].score;
						this.isTeacherGo = true;
					} else {
						this.isTeacherGo = false;
						this.addMaxScore = 0;
					}
					// this.userList = res.data.clazzUserList || [];
				}).catch(error => {
					console.log(error);
				});
		},
		// 关闭小任务
		closeDrawer () {
			this.isdrawer = false;
			this.$router.go(-1);
		},
		// 给每个学生添加默认的token
		getCurrentToken () {
			this.$ajax({
				method: 'post',
				url: '/atlasScore/initUserTokenValue',
				params: {
					atlasCode: 'supplyToken'
				}
			}).then(res => {
				if (res.success) {
					this.totalTokenNum = res.data.totalTokenNum;
					this.useTokenNum = res.data.useTokenNum;
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		// 小任务完成的时候更新父页面的任务进度和资金池
		chageTaskRange () {
			// this.getCurrentToken();
			this.getSubtaskArr();
		},
		// 答题画布结束过去本任务的token值
		getTaskToken () {
			this.$ajax({
				method: 'post',
				url: '/performanceRecord/findPerformanceListBytaskId',
				params: {
					taskId: this.$route.query.taskId
				}
			}).then(res => {
				if (res.success && res.data) {
					this.isCongSuccess = true;
					let addNum = 0;
					let reduceNum = 0;
					res.data.forEach(item => {
						if (item.tradeType === 1) {
							addNum = parseFloat(parseFloat(addNum) + parseFloat(item.pValues)).toFixed(2);
						} else if (item.tradeType === 0) {
							reduceNum = parseFloat(parseFloat(reduceNum) + parseFloat(item.pValues)).toFixed(2);
						}
					});
					this.tokenForm.addToken = addNum;
					if (reduceNum > 0) {
						this.tokenForm.reduceToken = '-' + reduceNum;
					} else {
						this.tokenForm.reduceToken = 0;
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
.pdfList{
	overflow: hidden;
	li{
		float: left;
		box-shadow: 0 0px 10px 0 rgba(0,0,0,.1);
		margin: 10px;
		padding: 20px 10px;
		border-radius: 4px;
		width: 126px;
		text-align-last: center;
		cursor: pointer;
		img{
			width: 80px;
			height: 80px;
		}
		p{
			overflow: hidden;
			text-overflow:ellipsis;
			white-space: nowrap;
			margin-top: 12px;
		}
	}
	li:nth-child(3n) {
		margin-right: 0;
	}
}
.user-list{
	.userList{
		border-bottom: 1px solid #CCCCCC;
		height: 50px;
		line-height: 50px;
		text-align: center;
		cursor: pointer;
		&.active{
			background: #408AD5;
			color: #fff;
		}
	}
	border: 1px solid #CCCCCC;
}
.subtask-index{
	position: relative;
	.subtask-tig-box{
		position: fixed;
		top: 64px;
		height: 100%;
	}
	.subtask-tig{
		box-shadow: 11px -10px 19px -21px #000;
		position: relative;
		z-index: 1;
		width: 80px;
		height: 100%;
		background: url('./img/left.jpg') center center;
		z-index: 1;
		width: 80px;
		height: 100%;
		background: url('./img/left.png') center center;
		.subtask-tig-list{
			li{
				padding: 20px 8px;
				font-size: 14px;
				line-height: 18px;
				text-align: center;
				cursor: pointer;
				color: #ffffff;
				transition: all .3s;
				border-right: 1px solid rgba(255,255,255,0.40);
				img{
					width: 43px;
					// height: 40px;
				}
				p{
					margin-top: 10px;
				}
			}
			li:nth-of-type(2){
				border-top: 1px solid rgba(255,255,255,0.30);
				border-bottom: 1px solid rgba(255,255,255,0.30);
			}
			li:nth-of-type(3){
				border-bottom: 1px solid rgba(255,255,255,0.30);
			}
			li:nth-of-type(4){
				border-bottom: 1px solid rgba(255,255,255,0.30);
			}
			li:nth-of-type(5){
				border-bottom: 1px solid rgba(255,255,255,0.30);
			}
			li:nth-of-type(6){
				border-bottom: 1px solid rgba(255,255,255,0.30);
			}
			li:nth-of-type(7){
				border-bottom: 1px solid rgba(255,255,255,0.30);
			}
			.active{
				background: #005EB3;
			}
		}
	}
	.right-content {
		position: fixed;
		top: 64px;
		left: 80px;
		width: calc(100% - 80px);
		height: 100%;
		background: #fff;
		border-left: 1px solid #ccc;
		overflow-y: scroll;
		.subtask-tig-title{
			color: #000;
			width: 100%;
			cursor: pointer;
			border-bottom: 1px solid rgba(255,255,255,0.40);
			color: #fff;
			padding:15px 32px;
		}
	}
	.task-content {
		padding: 32px;
		border-top: 1px solid #D8D8D8;
	}
	.title-icon {
		&>div {
			margin-left: 20px;
		}
	}
}
// 第一讲个章节样式
.moldYear-bg {
	width: 1200px;
	height: 543px;
	margin: 25px auto 0;
	background-size: 100% !important;
}
.subtask-list {
	li {
		width: 388px;
		height: 262px;
		position: relative;
		color: #373737;
		.ans-btn{
			position: absolute;
			top: 20px;
			right: 20px;
		}
		.taskItem {
			position: absolute;
			width: 30px;
			height: 30px;
			line-height: 30px;
			text-align: center;
			border-radius: 50%;
			background: #fff;
			cursor: pointer;
			outline: none;
			img {
				width: 100%;
				position: absolute;
				top: 0;
				left: 0;
			}
		}
		.taskP{
			color: white;
			position: absolute;
		}
		.activeTask{
			background: #DF8417;
			color: #ffffff !important;
			width: 34px;
			height: 34px;
			line-height: 30px;
			border: 2px solid #ffffff;
			font-size: 16px;
			margin-top: -2px;
			margin-left: -2px;
			img{
				display: none;
			}
		}
		.taskTitle{
			position: absolute;
			font-family: PingFangSC-Medium;
			font-size: 14px;
			color: #FFFFFF;
			white-space: nowrap;
		}
		.subtaskTitle {
			// color: #FFF;
			font-size: 16px;
			padding-top: 22px;
			padding-left: 20px;
			line-height: 25px;
			span{
				width: 25px;
				height: 25px;
				line-height: 25px;
				text-align: center;
				border-radius: 50%;
				background: #fff;
				float: left;
				font-size: 12px;
				margin-right: 10px;
			}
		}
	}
	li:nth-of-type(-1n + 3) {
		float: left;
	}
	li:nth-of-type(n+4) {
		float: right;
	}
	li:nth-of-type(1) {
		&>div {
			color: #13A2DD;
		}
		.subtaskTitle{
			span{
				color: #13A2DD;
			}
		}
	}
	li:nth-of-type(2) {
		margin-left: 18px;
		&>div {
			color: #13A2DD;
		}
		.subtaskTitle{
			span{
				color: #13A2DD;
			}
		}
	}
	li:nth-of-type(3) {
		margin-left: 18px;
		&>div {
			color: #00BBAE;
		}
		.subtaskTitle{
			span{
				color: #00BBAE;
			}
		}
	}
	li:nth-of-type(4) {
		margin-top: 20px;
		&>div {
			color: #21BB74;
		}
		.subtaskTitle{
			span{
				color: #21BB74;
			}
		}
	}
	li:nth-of-type(5) {
		&>div {
			color: #4C85EB;
		}
		margin-right: 18px;
		margin-top: 20px;
		.subtaskTitle{
			span{
				color: #4C85EB;
			}
		}
	}
	li:nth-of-type(6) {
		margin-right: 18px;
		margin-top: 20px;
		&>div {
			color: #796FE2;
		}
		.subtaskTitle{
			span{
				color: #796FE2;
			}
		}
	}
}
.moldYearItem0{
	background: url('./img/task-back1.jpg') no-repeat center center;
}
.moldYearItem1{
	background: url('./img/task-back2.jpg') no-repeat center center;
}
.moldYearItem2{
	background: url('./img/task-back3.jpg') no-repeat center center;
}
.moldYearItem3{
	background: url('./img/task-back4.jpg') no-repeat center center;
}
.moldYearItem4{
	width: 1115px;
	background: url('./img/task-back5.jpg') no-repeat center center;
	.subtask-list {
		li {
			width: 548px;
		}
		li:nth-of-type(-1n + 2) {
			float: left;
		}
		li:nth-of-type(n+3) {
			float: right;
		}
		li:nth-of-type(1) {
			&>div {
				color: #13A2DD;
			}
		}
		li:nth-of-type(2) {
			margin-left: 18px;
			&>div {
				color: #13A2DD;
			}
		}
		li:nth-of-type(3) {
			margin-top: 20px;
			&>div {
				color: #00BBAE;
			}
		}
		li:nth-of-type(4) {
			margin-top: 20px;
			&>div {
				color: #796FE2;
			}
		}
	}
}
.moldYearItem5{
	width: 1115px;
	background: url('./img/task-back6.jpg') no-repeat center center;
	.subtask-list {
		li {
			width: 548px;
		}
		li:nth-of-type(-1n + 2) {
			float: left;
		}
		li:nth-of-type(n+3) {
			float: right;
		}
		li:nth-of-type(1) {
			&>div {
				color: #13A2DD;
			}
		}
		li:nth-of-type(2) {
			margin-left: 18px;
			&>div {
				color: #13A2DD;
			}
		}
		li:nth-of-type(3) {
			margin-top: 20px;
			&>div {
				color: #00BBAE;
			}
		}
		li:nth-of-type(4) {
			margin-top: 20px;
			&>div {
				color: #796FE2;
			}
		}
	}
}
/deep/ .el-drawer{
	background: #ffffff;
	outline: none;
}
/deep/ .el-drawer__header {
	font-size: 18px;
    color: #333333;
}
/deep/ .el-drawer__header span, /deep/ .el-drawer__close-btn{
	outline: none;
}
.drawerConTop{
	margin: 0 10px 20px;
	border: 4px solid #839EBD;
	background: url(./img/zl_bj.jpg) no-repeat center center;
	background-size: cover;
	min-height: calc(100% - 20px);
	padding-bottom: 30px;
}
.bodyFixed{
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: rgba(0,0,0,0.4);
	overflow: auto;
	z-index: 3000;
	.modelCon{
		width: 440px;
		height: 460px;
		background: #FFFFFF;
		border: 1px solid #979797;
		border-radius: 4px;
		position: absolute;
		left: 50%;
		top: 50%;
		-webkit-transform: translate(-50%,-50%);
		transform: translate(-50%,-50%);
		.topImg{
			width: 260px;
			position: absolute;
			top: -83px;
			left: 90px;
		}
		.modelConColse{
			overflow: hidden;
			img{
				float: right;
				cursor: pointer;
				height: 15.8px;
				margin: 15px 15px 0 0;
			}
		}
		.getTitle{
			font-family: PingFangSC-Semibold;
			font-size: 22px;
			color: #3D7FFF;
			letter-spacing: 0.46px;
			text-align: center;
			margin: 130px 0 28px;
			font-weight: bold;
		}
		.scoreList{
			padding: 0 48px;
			li{
				overflow: hidden;
				margin-bottom: 22px;
				.scoreListLeft{
					float: left;
					img{
						float: left;
						width: 24px;
						height: 24px;
						margin-right: 13px;
					}
					span{
						float: left;
						font-family: PingFangSC-Medium;
						font-size: 18px;
						color: #111111;
						letter-spacing: 0.56px;
						line-height: 24px;
					}
				}
				.scoreListRight{
					float: right;
					span{
						float: left;
						font-family: PingFangSC-Medium;
						font-size: 18px;
						color: #111111;
						letter-spacing: 0.56px;
						line-height: 24px;
					}
					img{
						float: left;
						height: 11px;
						margin-left: 12px;
						margin-top: 7.5px;
					}
				}
			}
			li:last-child{
				margin-bottom: 0;
			}
		}
		.closeButtom{
			background: #3D7FFF;
			border-radius: 3px;
			font-family: PingFangSC-Regular;
			font-size: 16px;
			color: #FFFFFF;
			letter-spacing: 0;
			text-align: center;
			width: 124px;
			height: 42px;
			line-height: 42px;
			margin: 32px auto;
			cursor: pointer;
		}
	}
}
</style>
