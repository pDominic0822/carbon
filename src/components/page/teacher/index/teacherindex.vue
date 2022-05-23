<!--
 * @Date: 2019-10-14 10:09:07
 -->
<template>
	<div class="teacher-index">
		<div class="indexmodel">
			<div class="teacherhead">
				<div class="headtitle">
					<div class="hleft fl active">
						<p class="center mt10">
							<el-dropdown @command="handleMoldDrop">
								<span class="el-dropdown-link">
									{{moldName || ''}}
									<i class="el-icon-arrow-down el-icon--right"></i>
								</span>
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item
									v-for="(item, index) in MoldListArr"
									:key="index"
									:command="index">
									{{item.moldName}}
									</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
						</p>
					</div>
					<div class="mt20 erer fr">
						<!-- 只接受true,fasle -->
						<el-switch
						@change="openMold(moldMap)"
						v-model="isMoldOpen"
						active-text="开启"
						inactive-text="关闭"
						active-color="#13ce66"
						inactive-color="#ff4949"
						>
						</el-switch>
					</div>
				</div>
				<ul>
					<li
						class="fl handCollse"
						v-for="(MoldListitem, MoldListIndex) in RouteArrrList"
						@click="_handleRouterList(MoldListitem)"
						:key="MoldListIndex">
						<div class="img"></div>
						<p>{{ MoldListitem.name }}</p>
					</li>
				</ul>
			</div>
			<div class="clearfix">
				<div class="moldelist fl">
					<div class="modleyear">
						<div class="selecyear clearfix">
							<el-select
								style="width:120px"
								v-model="MoldYearIndex"
								size="mini"
								@change="handleMoldYear"
								placeholder="请选择"
								>
								<el-option
									v-for="(item, index) in moldYearList"
									:key="item.value"
									:label="item.chapterName"
									:value="index"
								>
								</el-option>
							</el-select>
							<el-switch
								class="fr"
								@change="handPushYear()"
								v-model="isYearOpen"
								size="mini"
								active-text="开"
								inactive-text="关"
								active-color="#13ce66"
								inactive-color="#ff4949"
								>
							</el-switch>
						</div>
					</div>
					<ul>
						<li class="handCollse"
							v-for="(taskListitem, taskListIndex) in subtaskList"
							:key="taskListIndex"
							:class="{ active: subtaskIndex === taskListIndex }"
							@click="getMoldSubtask(taskListIndex)">
							<p>
								{{ taskListitem.taskName }}
								<i class="fr dddds"  :class="taskListitem.isPush === 1 ? 'el-icon-unlock' : 'el-icon-lock'"></i>
							</p>
							<div class="trianle"></div>
						</li>
					</ul>
				</div>
				<div class="modledes fl">
					<div class="deshead">
					<div class="title fl">
						<p>任务1：首年绿贷款</p>
					</div>
					<ul class="fl subinis">
						<li><p>任务进度</p></li>
						<li @click="subTaskText(subtaskMap)"><p>课件</p></li>
						<li @click="subTaskYearPush(subtaskMap)">
							<p>
								{{subtaskMap.isPush === 0? '推送': '已经推送'}}
							</p>
						</li>
					</ul>
					</div>
					<!-- 填写步骤 -->
					<div class="step">
						<ul class="fl">
							<li class="handCollse" v-for="(stepitem, stepIndex) in taskArrList" :key="stepIndex">
								<div class="bigfont">
									{{ stepitem.industryName && stepitem.industryName.substring(0, 1) }}
								</div>
								<p class="ellipsis">
									{{ stepitem.taskName }}
								</p>
								<div class="trianle"></div>
							</li>
						</ul>
					</div>
					<div class="tables">
						<teacherView :moldId="moldId" :subtaskId ="subtaskId" :clazzYearsPushId ="clazzYearsPushId " :taskCode="taskCode"></teacherView>
					</div>
				</div>
			</div>
		</div>
		<!-- 弹窗：请选择开启模式 -->
		<div class="mask-black02" v-if="moldVisibleState" >
			<div class="mask-box mask-org-box" style="width:1200px" v-if="moldVisibleState" >
				<div class="marsk-titles" v-drag>
					<i class="el-icon-error" @click="moldVisibleState = false">
					</i>
					<div class="pstli">
						<div class="tliiii fl">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
						请选择开启模式
						<div class="tliiii fr">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
				<div class="clearfix conterMit mt40">
					<div class="moli" v-for="(item, index) in MoldListArr"
					:class="{'active': moldIndex === index}" @click="_handleMold(index)" :key="index">
						<!--item 数组里面的 item-->
						<div class="AA">
							{{
								item.isMoldOpen ? '已开启' : '未开启'
							}}
						</div>
						<div class="modelLabel">
							{{item.moldName}}
						</div>
						<div class="on-off">
							{{
								moldIndex === index ? '已选择' : '选择'
							}}
						</div>
					</div>
				</div>
				<div  class="center">
					<el-button type="primary" @click="updatayqmCode()">推 送</el-button>
				</div>
			</div>
		</div>
		<!-- 弹窗：教师课件 -->
		<div class="mask-black02" v-if="isVisiblePdf" >
			<div class="mask-box mask-org-box" style="width:1200px" v-if="isVisiblePdf" >
				<div class="marsk-titles" v-drag>
					<i class="el-icon-error" @click="isVisiblePdf = false"></i>
					<div class="pstli">
						<div class="tliiii fl">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
						教师课件
						<div class="tliiii fr">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
				<div  style='height:600px;overflow:auto;'>
					<top-res :dataSrc = dataSrc></top-res>
				</div>
			</div>
		</div>
		<!-- 弹窗：团队推送 -->
		<div class="mask-black02" v-if="isVisiblePushOrgIndy" >
			<div class="mask-box mask-org-box" style="width:1300px" v-if="isVisiblePushOrgIndy" >
				<div class="marsk-titles" v-drag>
					<i class="el-icon-error" @click="isVisiblePushOrgIndy = false"></i>
					<div class="pstli">
						<div class="tliiii fl">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
						团队推送
						<div class="tliiii fr">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
				<div  style='height:600px;overflow:auto;'>
					<pushOrg @sendInIt="getInit"></pushOrg>
				</div>
			</div>
		</div>
		<!-- 弹窗：开启参数预制 -->
		<div class="mask-black02" v-if="DialogParamsVisible" >
			<div class="mask-box mask-org-box" style="width:1300px" v-if="DialogParamsVisible" >
				<div class="marsk-titles" v-drag>
					<i class="el-icon-error" @click="DialogParamsVisible = false"></i>
					<div class="pstli">
						<div class="tliiii fl">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
						规则参数
						<div class="tliiii fr">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
				<div  style='height:600px;overflow:auto;'>
					<deferData :teacherCode="'teacher'" @sendInIt="getInit" :moldId="moldMap.moldId"></deferData>
				</div>
			</div>
		</div>
		<!--  弹窗：规则订单 -->
		<div class="mask-black02" v-if="DialogOrderVisible" >
			<div class="mask-box mask-org-box" style="width:1300px" v-if="DialogOrderVisible" >
				<div class="marsk-titles" v-drag>
					<i class="el-icon-error" @click="DialogOrderVisible = false"></i>
					<div class="pstli">
						<div class="tliiii fl">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
						客户订单
						<div class="tliiii fr">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
				<div  style='height:600px;overflow:auto;'>
					<deferOrder :teacherCode="'teacher'" @sendInIt="getInit" :moldId="moldMap.moldId"></deferOrder>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import deferData from '@@/teacher/deferData/deferData';
import deferOrder from '@@/teacher/deferData/deferOrder';
import teacherView from '@@/teacher/teacherView/teacherView';
import pushOrg from '../orgAdmin/push.vue';
export default {
	name: 'login',
	components: {
		pushOrg,
		deferData,
		deferOrder,
		teacherView
	},
	data () {
		return {
			taskCode: '',
			moldId: '',
			clazzYearsPushId: '',
			subtaskId: '',
			dataSrc: {
				resourceName: ''
			},
			isVisiblePdf: false,
			isMoldOpen: false,
			moldVisibleState: false,
			DialogParamsVisible: false,
			isVisiblePushOrgIndy: false,
			DialogOrderVisible: false,
			isYearOpen: false,
			moldIndex: 0,
			MoldYearIndex: 0,
			subtaskIndex: 0,
			moldMap: {},
			moldYearMap: {},
			subtaskMap: {},
			moldName: '',
			value: '',
			MoldListArr: [],
			RouteArrrList: [
				{
					name: '系统参数预置',
					isHref: true,
					routerName: 'deferData'
				},
				{
					name: '备选订单预置',
					routerName: 'deferOrder'
				},
				{
					name: '拓展资料'
				},
				{
					name: '市场'
				},
				{
					name: '权益排名'
				},
				{
					name: '经营分析'
				},
				{
					name: '业务流程'
				}
			],
			taskArrList: [
			],
			subtaskList: [],
			moldYearList: []
		};
	},
	created () {
		this.init();
		this.selectMold('init');
	},
	methods: {
		getInit () {
			this.DialogOrderVisible = false;
			this.DialogParamsVisible = false;
			this.isVisiblePushOrgIndy = false;
			this.isVisiblePdf = false;
			this.moldVisibleState = false;
			console.log(333);
			this.init();
		},
		// 判断组织有没有推送
		getTeacherIsPushDoing () {
			this.$ajax({
				method: 'post',
				url: '/clazzOrg/findNotOpenClazzOrg',
				params: {
				}
			}).then(res => {
				if (res.success) {
					if (res.data) { // 已经推送过了，不用推送，查询是否有开启的模块
						this.isVisiblePushOrgIndy = false;
						this.getTeacherMoldDoing();
					} else { // 推送组织
						this.isVisiblePushOrgIndy = true;
					}
				} else {
					this.isVisiblePushOrgIndy = true;
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		// 判断是否已经推送了模块
		getTeacherMoldDoing () {
			this.$ajax({
				method: 'post',
				url: '/stClazzMoldSwitch/getStClazzOpenMoldFlag',
				params: {
				}
			}).then(res => {
				if (res.success) {
					if (res.data) { // 已经推送过了，不用推送，查询是否有开启的模块
						this.selectMold();
					} else { // 推送组织
						this.moldVisibleState = true;
						this.selectMold();
					}
				} else {
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		init () {
			this.getTeacherIsPushDoing();
		},
		handleMoldDrop (index) {
			console.log(index);
			this.moldIndex = index;
			let row = this.MoldListArr[this.moldIndex];
			this.isMoldOpen = row.isMoldOpen;
			this.moldName = row.moldName;
			this.moldMap = row;
			// 查询当前模块下，参数订单是否预制上，预制上，则不需要弹框
			this.getMoldIsDefaultParams(row);
			// 获取年
			this.getMoldYear(row);
		},
		getMoldIsDefaultParams (row) {
			this.$ajax({
				method: 'post',
				url: '/stClazzReadySchedule/getStClazzReadySchedule',
				params: {
					moldId: row.moldId
				}
			}).then((res) => {
				if (res.success) {
					if (res.data) {
						if (res.data.parameterSuccess === 0) {
							this.DialogParamsVisible = false;
							return false;
						}
						if (res.data.orderSuccess === 0) {
							this.DialogOrderVisible = false;
							return false;
						}
					} else {
						this.DialogParamsVisible = true;
					}
				} else {
				}
			}).catch((err) => {
				throw new Error(err);
			});
		},
		_handleMold (index) {
			this.moldIndex = index;
		},
		updatayqmCode () {
			let row = this.MoldListArr[this.moldIndex];
			this.isMoldOpen = 1;
			this.openMold(row);
		},
		_handleRouterList (item) {
			if (!this.moldMap.moldId) { // 获取是否选择模块了，如果没有选择，则弹窗选择模块
				this.$confirm('请选择一个模块进行推送', '提示', {
					confirmButtonText: '确定',
					center: true,
					showCancelButton: false,
					type: 'warning'
				}).then(() => {
					this.moldVisibleState = true;
				}).catch(() => {});
				return false;
			}
			let routerName = item.routerName;
			if (routerName === 'deferData') {
				this.DialogParamsVisible = true;
				return false;
			}
			if (routerName === 'deferOrder') {
				this.DialogOrderVisible = true;
				return false;
			}
			// if (item.isHref) {
			// 	let routeData = this.$router.resolve({
			// 		name: item.routerName,
			// 		query: { moldId: this.moldMap.moldId }
			// 	});
			// 	window.open(routeData.href, '_blank');
			// } else {
			// 	this.$router.push({
			// 		name: item.routerName,
			// 		query: { moldId: this.moldMap.moldId }
			// 	});
			// }
		},
		openRightMold () {
			this.openMold(this.moldMap);
		},
		subTaskText () {
			if (!this.moldMap.moldId) { // 获取是否选择模块了，如果没有选择，则弹窗选择模块
				this.$confirm('请选择一个模块进行推送', '提示', {
					confirmButtonText: '确定',
					center: true,
					showCancelButton: false,
					type: 'warning'
				}).then(() => {
					this.moldVisibleState = true;
				}).catch(() => {});
				return false;
			}
			this.$ajax({
				method: 'post',
				url: '/subtaskResource/findSubtaskResouceByType',
				params: {
					subtaskId: this.subtaskMap.subtaskId,
					resourceType: 'teachingPlan'
				}
			}).then(res => {
				if (res.success && res.data.length !== 0) {
					this.dataSrc = res.data[0];
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
		/**
		 * @name: zhangln
		 * @msg: 开启模块
		 */
		openMold (row) {
			if (!row.moldId) { // 获取是否选择模块了，如果没有选择，则弹窗选择模块
				this.$confirm('请选择一个模块进行推送', '提示', {
					confirmButtonText: '确定',
					center: true,
					showCancelButton: false,
					type: 'warning'
				}).then(() => {
					this.moldVisibleState = true;
				}).catch(() => {});
				return false;
			}
			this.$confirm(
				`是否${this.isMoldOpen ? '开启' : '关闭'}${row.moldName}`,
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
					url: '/stClazzMoldSwitch/saveStClazzMoldSwitchRecord',
					params: {
						moldId: row.moldId,
						isOpen: this.isMoldOpen ? 1 : 0
					}
				}).then((res) => {
					if (res.success) {
						this.getTeacherMoldDoing();
						this.moldVisibleState = false;
						this.$myMessage.success(res.message);
					}
				})
					.catch((err) => {
						throw new Error(err);
					});
			}).catch(() => {});
		},
		getMoldSubtask (taskListIndex) {
			this.subtaskIndex = taskListIndex;
			this.subtaskMap = this.subtaskList[taskListIndex];
			this.taskCode = this.subtaskList[taskListIndex].taskCode || '';
			this.moldId = this.moldMap.moldId;
			this.subtaskId = this.subtaskMap.subtaskId;

			console.log('这个是', this.moldId);
			console.log(this.taskCode);
			this.getMoldTaskList();
		},
		getMoldTaskList () {
			this.$ajax({
				method: 'post',
				url: '/TaskListBusiness/findTaskListBySubtaskId',
				params: {
					moldId: this.moldMap.moldId, // 模块id
					subtaskId: this.subtaskMap.subtaskId // 模块id
				}
			})
				.then((res) => {
					if (res.success) {
						this.taskArrList = res.data;
					}
				})
				.catch((err) => {
					throw new Error(err);
				});
		},
		// 老师端查询
		getTeacherYearSubTask () {
			// 没有就不传clazzYearsPushId
			this.subtaskList = [];
			this.subtaskIndex = 0;
			this.$ajax({
				method: 'post',
				url: '/stClazzSubtaskPush/findMoldYearsSubtaskPushInfoList',
				params: {
					moldId: this.moldMap.moldId, // 模块id
					chapterId: this.moldYearMap.chapterId || '',
					clazzYearsPushId: this.moldYearMap.clazzYearsPushId || '',
					defaultMoldYearsId: this.moldYearMap.defaultMoldYearsId || ''
				}
			})
				.then((res) => {
					if (res.success) {
						this.subtaskList = res.data;
						this.getMoldSubtask(0);
					}
				})
				.catch((err) => {
					throw new Error(err);
				});
		},
		handleMoldYear () {
			this.moldYearMap = this.moldYearList[this.MoldYearIndex];
			this.moldId = this.moldYearList[this.MoldYearIndex].moldId;
			this.clazzYearsPushId = this.moldYearMap.clazzYearsPushId;
			this.isYearOpen = this.moldYearMap.isOpen === 1;
			this.getTeacherYearSubTask();
		},
		subTaskYearPush (item) {
			if (!this.moldMap.moldId) { // 获取是否选择模块了，如果没有选择，则弹窗选择模块
				this.$confirm('请选择一个模块进行推送', '提示', {
					confirmButtonText: '确定',
					center: true,
					showCancelButton: false,
					type: 'warning'
				}).then(() => {
					this.moldVisibleState = true;
				}).catch(() => {});
				return false;
			}
			if (item.isPush === 1) {
				return false;
			}
			if (!this.moldYearMap.clazzYearsPushId) {
				this.$confirm('当前年下未开启，无法开启任务', '提示', {
					confirmButtonText: '确定',
					center: true,
					showCancelButton: false,
					type: 'warning'
				})
					.then(() => {})
					.catch(() => {});
				return false;
			}
			this.$confirm(
				`是否推送`,
				'提示',
				{
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					center: true,
					showCancelButton: true,
					type: 'warning'
				}
			)
				.then(() => {
					this.$ajax({
						method: 'post',
						url: '/stClazzSubtaskPush/updateClazzSubtaskPush',
						params: {
							moldId: this.moldMap.moldId, // 模块id
							subtaskId: item.subtaskId,
							clazzYearsPushId: this.moldYearMap.clazzYearsPushId
						}
					})
						.then((res) => {
							if (res.success) {
								this.$message({
									message: res.message,
									type: 'success'
								});
								item.isPush = 1;
								// this.handleMoldYear(this.MoldYearIndex);
							} else {
								this.$message({
									message: res.message,
									type: 'success'
								});
							}
						})
						.catch((err) => {
							throw new Error(err);
						});
				})
				.catch(() => {});
		},
		handPushYear () {
			if (!this.moldMap.moldId) { // 获取是否选择模块了，如果没有选择，则弹窗选择模块
				this.$confirm('请选择一个模块进行推送', '提示', {
					confirmButtonText: '确定',
					center: true,
					showCancelButton: false,
					type: 'warning'
				}).then(() => {
					this.moldVisibleState = true;
				}).catch(() => {});
				return false;
			}
			console.log(this.isYearOpen);
			if (!this.isYearOpen) {
				this.isYearOpen = true;
				return false;
			}
			this.$confirm('推送后不能修改系统参数预制', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				center: true,
				type: 'warning'
			}).then(() => {
				this.$ajax({
					method: 'post',
					url: '/stClazzYearsPush/updateClazzYearsPushOpen',
					params: {
						moldId: this.moldMap.moldId, // 模块id
						defaultMoldYearsId: this.moldYearMap.defaultMoldYearsId,
						yearsTime: this.moldYearMap.yearsTime
					}
				}).then((res) => {
					if (res.success) {
						this.moldYearMap.isOpen = true;
						this.$message({
							message: res.message,
							type: 'success'
						});
					} else {
						this.$message({
							message: res.message,
							type: 'success'
						});
					}
				}).catch((err) => {
					throw new Error(err);
				});
			}).catch(() => {});
		},
		// 获取模块下的年
		getMoldYear (item) {
			this.moldYearList = [];
			this.MoldYearIndex = '';
			this.$ajax({
				method: 'post',
				url: '/stClazzYearsPush/findMoldYearsTimeInfoList',
				params: {
					moldId: item.moldId
				}
			})
				.then((res) => {
					if (res.success) {
						this.moldYearList = res.data;
						// 默认加载第一个年
						this.MoldYearIndex = 0;
						this.handleMoldYear();
					} else {
					}
				})
				.catch((err) => {
					throw new Error(err);
				});
		},
		/**
		 * @name: zhangln
		 * @msg: 查询多少模块+讲
		 */
		selectMold (code) {
			this.$ajax({
				method: 'post',
				url: '/mold/getMoldInfo'
			}).then((res) => {
				if (res.success) {
					let array = res.data;
					for (let index = 0; index < array.length; index++) {
						const element = array[index];
						element.isMoldOpen = false;
						if (element.isOpen + '' === '1') {
							element.isMoldOpen = true;
						}
					}
					this.MoldListArr = array;
					if (code === 'init') { // 初始化加载的时候，不往下走
						return false;
					}
					if (this.MoldListArr[0].isMoldOpen) {
						this.handleMoldDrop(0);
						this.moldVisibleState = false;
						return false;
					}
					if (this.MoldListArr[1].isMoldOpen) {
						this.handleMoldDrop(1);
						this.moldVisibleState = false;
						return false;
					}
					this.handleMoldDrop(0);
					this.moldVisibleState = false;
				}
			}).catch((err) => {
				throw new Error(err);
			});
		}
	}
};
</script>

<style lang="scss" scoped>
// ==============弹窗
.mask-box{
	width: 1100px;
	height: 660px;
	// background: #ff0055;
    background: url('./../img/mask-bg.png') no-repeat 100% 100%;
    // background-size: contain;
    background-size: 100% 100%;
	position: absolute;
    z-index: 100;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);   /* for Chrome || Safari */
    -moz-transform: translate(-50%,-50%);     /* for Firefox */
    -ms-transform: translate(-50%,-50%);       /* for IE */
    -o-transform: translate(-50%,-50%);         /* for Opera */
    transform: translate(-50%,-50%);
    animation: show 1s ease-in-out 0s 1 normal forwards;
	overflow: hidden;
	overflow-y: auto;
    .marsk-titles{
        position: relative;
        height: 50px;
        border-bottom: 1px dashed rgba($color: #373737, $alpha: 0.5);
        text-align: center;
        cursor: move;
        .el-icon-error{
            position: absolute;
            right: 8px;
            top: 22px;
            color: #373737;
            font-size: 20px;
            cursor: pointer;
            &:hover{
                color: #3cefff;
            }
        }
        .pstli{
            position: relative;
            top: 29px;
            height: 40px;
            width: 270px;
            margin: 0 auto;
            color: #2c325e;
            line-height: 40px;
            background: #fff;
            padding: 0 5px;
        }
    }
    .mtask-title{
      // position: relative;
      height: 50px;
      border-bottom: 1px dashed rgba($color: #373737, $alpha: 0.5);
      // text-align: center;
      cursor: move;
      .dddsss{
        margin-left: 15px;
        color: #3cefff;
        cursor: pointer;
      }
      .el-icon-error{
          position: absolute;
          right: 8px;
          top: 22px;
          color: #373737;
          font-size: 20px;
          cursor: pointer;
          &:hover{
              color: #3cefff;
          }
      }
      .pstli{
          // position: relative;
          // top: 29px;
          height: 50px;
          width: 270px;
          // margin: 0 auto;
          color: #373737;
          line-height: 50px;
          // background: #2c325e;
          padding: 0px 15px;
          text-align: center;
      }
  }
    @keyframes show {
        0% {
            opacity: 0.5;
            transform: translate(-10%, -10%);
            // transform: rotateX(90deg);
        }

        // 8% {
        //     opacity: 1;
        //     transform: rotateX(-60deg);
        // }

        // 18% {
        //     opacity: 1;
        //     transform: rotateX(40deg);
        // }

        // 34% {
        //     opacity: 1;
        //     transform: rotateX(-28deg);
        // }

        // 44% {
        //     opacity: 1;
        //     transform: rotateX(18deg);
        // }

        // 58% {
        //     opacity: 1;
        //     transform: rotateX(-12deg);
        // }

        // 72% {
        //     opacity: 1;
        //     transform: rotateX(9deg);
        // }

        // 88% {
        //     opacity: 1;
        //     transform: rotateX(-5deg);
        // }

        // 96% {
        //     opacity: 1;
        //     transform: rotateX(2deg);
        // }

        100% {
            opacity: 1;
            transform: translate(-50%,-50%);
        }
    }
}

.erer{
	margin-top: 10px;
	margin-right: 10px;
}
p {
  color: #ffffff;
}

.dddds{
	margin-top: 10px;
	margin-right: 20px;
}
.teacher-index {
  // width: 1440px;
//   height: 875px;
  background: url("../img/bgc.png") no-repeat center center;
  background-size: 100% 100%;
  padding-top: 24px;
  padding-bottom: 24px;
  .indexmodel {
    width: 1200px;
    min-height: 770px;
    margin: 0 auto;
    background-color: #ffffff;
  }
}

.teacherhead {
	width: 1200px;
	height: 150px;
	background: #f7f7f7;
	.headtitle {
	margin: 0 auto;
	// width: 240px;
	height: 38px;
	.hleft {
		width: 120px;
		height: 38px;
		background: #dbe1eb;
		// border-radius: 0px 0px 0px 100px;
		border-radius: 0px 0px 100px 0px;
		// &:nth-child(2) {
		// }
		p {
		color: #5c697d;
		}
		&.active {
		background: #4283e8;
		p {
			color: #ffffff;
		}
		}
	}
	}
	ul {
	width: 940px;
	height: 75px;
	margin: 0 auto;
	margin-top: 20px;
	li {
		width: 90px;
		height: 75px;
		margin-left: 39px;
		.img {
		width: 46px;
		height: 46px;
		margin: 0 auto;
		}
		p {
		width: 90px;
		margin: 0 auto;
		margin-top: 8px;
		height: 20px;
		line-height: 20px;
		text-align: center;
		color: #000000;
		}
		&:first-child {
		.img {
			background: url("../img/list1.png") no-repeat center center;
		}
		}
		&:nth-child(2) {
		.img {
			background: url("../img/list2.png") no-repeat center center;
		}
		}
		&:nth-child(3) {
		.img {
			background: url("../img/list3.png") no-repeat center center;
		}
		}
		&:nth-child(4) {
		.img {
			background: url("../img/list4.png") no-repeat center center;
		}
		}
		&:nth-child(5) {
		.img {
			background: url("../img/list5.png") no-repeat center center;
		}
		}
		&:nth-child(6) {
		.img {
			background: url("../img/list6.png") no-repeat center center;
		}
		}
		&:nth-child(7) {
		.img {
			background: url("../img/list7.png") no-repeat center center;
		}
		}
	}
	}
}

.moldelist {
	width: 250px;
//   height: 680px;
	background: #f7faff;
	box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
	.modleyear {
	margin: 15px auto;
	width: 230px;
	height: 42px;
	// background: #f2f7ff;
	// border: 1px solid #99abce;
	}
	ul {
	height: 680px;
	overflow: auto;
	li {
		float: left;
		margin-top: 5px;
		margin-left: 15px;
		width: 220px;
		height: 42px;
		//   background: linear-gradient(315deg, #21aaf3 0%, #1576e4 100%);
		position: relative;
		border-radius: 3px;
		p {
		text-align: left;
		margin-left: 30px;
		line-height: 42px;
		height: 42px;
		color: #000;
		}
		.trianle {
		position: absolute;
		right: -6px;
		top: 14px;
		width: 0;
		height: 0;
		border-top: 6px solid transparent;
		border-left: 8px solid #ffffff;
		border-bottom: 6px solid transparent;
		}
		&.active {
		background: linear-gradient(315deg, #21aaf3 0%, #1576e4 100%);
		.trianle {
			border-left: 8px solid #21aaf3;
		}
		p {
			color: #ffffff;
		}
		}
	}
	}
}

.modledes {
	width: 950px;
	.deshead {
	height: 50px;
	.title {
		width: 150px;
		height: 50px;
		p {
		text-align: center;
		line-height: 50px;
		height: 50px;
		color: #000;
		}
	}
	// 用class
	.subinis {
		width: 800px;
		height: 50px;
		li {
		float: right;
		margin-top: 15px;
		margin-right: 16px;
		width: 88px;
		height: 34px;
		background: linear-gradient(313deg, #736aff 0%, #4a65ef 100%);
		border-radius: 1px;
		cursor: pointer;
		p {
			text-align: center;
			line-height: 35px;
			height: 35px;
		}
		&:nth-child(2) {
			background: linear-gradient(316deg, #02bce2 0%, #0095d2 100%);
		}
		&:nth-child(3) {
			background: linear-gradient(316deg, #00caa2 0%, #00a2b3 100%);
		}
		}
	}
	}
	.step {
	// width: 1200px;
	margin-top: 13px;
	ul {
		margin-left: 20px;
		li {
		float: left;
		width: 184px;
		height: 42px;
		margin-right: 22px;
		background: #f2f6fc;
		border: 1px solid #99abce;
		padding-left: 13px;
		padding-top: 10px;
		position: relative;
		border-radius: 3px;
		margin-top: 15px;
		.trianle {
			position: absolute;
			right: -8px;
			top: 14px;
			width: 0;
			height: 0;
			border-top: 6px solid transparent;
			border-left: 8px solid #99abce;
			border-bottom: 6px solid transparent;
		}
		.bigfont {
			float: left;
			width: 20px;
			height: 20px;
			text-align: center;
			line-height: 20px;
			margin-right: 7px;
			border-radius: 50%;
			color: #ffffff;
		}
		p {
			// float: left;
			height: 20px;
			line-height: 20px;
			color: #000;
		}

		&:nth-child(5n+1) {
			.bigfont {
				background: linear-gradient(140deg, #f97f6d 0%, #fa6d9a 100%);
			}
		}
		&:nth-child(5n+2) {
			.bigfont {
				background: linear-gradient(137deg, #00a9a9 0%, #0090bf 100%);
			}
		}
		&:nth-child(5n+3) {
			.bigfont {
				background: linear-gradient(139deg, #707bf8 0%, #8452ea 100%);
			}
		}
		&:nth-child(5n+4) {
			.bigfont {
				background: linear-gradient(137deg, #00a9a9 0%, #0090bf 100%);
			}
		}
		&:nth-child(5n+5) {
			.bigfont {
				background: linear-gradient(137deg, #00a9a9 0%, #0090bf 100%);
			}
		}
		&:hover:first-child {
			.bigfont {
			color: #e15b86;
			background: #ffffff;
			}
			.trianle {
			border-left: 8px solid #e15b86;
			}
			border-radius: 3px;
			background: linear-gradient(139deg, #f97361 0%, #e15b86 100%);
			border-image: linear-gradient(
				143deg,
				rgba(255, 69, 44, 1),
				rgba(255, 150, 89, 1)
			)
			1 1;
		}
		&:hover:nth-child(5n+2) {
			.bigfont {
			color: #0090bf;
			background: #ffffff;
			}
			.trianle {
			border-left: 8px solid #0090bf;
			}
			border-radius: 3px;
			background: linear-gradient(137deg, #00a9a9 0%, #0090bf 100%);
			border-image: linear-gradient(
				138deg,
				rgba(21, 128, 208, 1),
				rgba(49, 237, 255, 1)
			)
			1 1;
		}
		&:hover:nth-child(5n+3) {
			.bigfont {
			color: #8452ea;
			background: #ffffff;
			}
			.trianle {
			border-left: 8px solid #8452ea;
			}
			border-radius: 3px;
			background: linear-gradient(139deg, #707bf8 0%, #8452ea 100%);
			border-image: linear-gradient(
				141deg,
				rgba(135, 145, 255, 1),
				rgba(161, 115, 255, 1)
			)
			1 1;
		}
		&:hover:nth-child(5n+4) {
			.bigfont {
			color: #0090bf;
			background: #ffffff;
			}
			.trianle {
			border-left: 8px solid #0090bf;
			}
			border-radius: 3px;
			background: linear-gradient(137deg, #00a9a9 0%, #0090bf 100%);
			border-image: linear-gradient(
				138deg,
				rgba(21, 128, 208, 1),
				rgba(49, 237, 255, 1)
			)
			1 1;
		}
		&:hover:nth-child(5n+5) {
			.bigfont {
			color: #0090bf;
			background: #ffffff;
			}
			.trianle {
			border-left: 8px solid #0090bf;
			}
			border-radius: 3px;
			background: linear-gradient(137deg, #00a9a9 0%, #0090bf 100%);
			border-image: linear-gradient(
				138deg,
				rgba(21, 128, 208, 1),
				rgba(49, 237, 255, 1)
			)
			1 1;
		}
		&:hover:nth-child(5n+6) {
			.bigfont {
			color: #0090bf;
			background: #ffffff;
			}
			.trianle {
			border-left: 8px solid #0090bf;
			}
			border-radius: 3px;
			background: linear-gradient(137deg, #00a9a9 0%, #0090bf 100%);
			border-image: linear-gradient(
				138deg,
				rgba(21, 128, 208, 1),
				rgba(49, 237, 255, 1)
			)
			1 1;
		}
		&:hover {
			p {
				color: #ffffff;
			}
		}
		}
	}
	}
	.tables {
	width: 950px;
	height: 300px;
	}
}
.conterMit{
	width: 678px;
	margin: 30px auto;
}
.moli {
	width: 309px;
	height: 231px;
	float: left;
	color: white;
	margin-right: 30px;
	text-align: center;
	background: url('../img/open2.png') no-repeat;
	.modelLabel{
		width: 77px;
		height: 100px;
		display: inline-block;
		text-align: center;
		line-height: 206px;
		margin-top: 1px;
	}
	.AA{
		color: #222222;
		margin-top: 30px;
		margin-right: -227px;
	}
	.on-off{
		width: 88px;
		height: 34px;
		background: #1A9FE9;
		border-radius: 2px;
		text-align: center;
		line-height: 34px;
		margin: 15px auto;
	}
	&:nth-child(1){
		.modelLabel{
			background: url('../img/moldIco1.png') no-repeat;
			color: #222222;
		}
	}
	&:nth-child(2){
		.modelLabel{
			background: url('../img/moldIco3.png') no-repeat;
			color: #222222;
		}
	}
	&.active {
		background: url('../img/bg1.png') no-repeat;
		background-size: 100% 100%;
		.AA{
			color: white;
		}
		&:nth-child(1){
		.modelLabel{
			background: url('../img/moldIco2.png') no-repeat;
			color: white;
		}
			.on-off{
				width: 88px;
				height: 34px;
				background: rgba(255, 255, 255, 0.3);
				border-radius: 2px;
			}
		}
		&:nth-child(2){
			.modelLabel{
			background: url('../img/moldIco4.png') no-repeat;
			color: white;
		}
		.on-off{
			width: 88px;
			height: 34px;
			background: rgba(255, 255, 255, 0.3);
			border-radius: 2px;
		}
		}
	}
}
.yearli {
	height: 40px;
	line-height: 40px;
	border-bottom: 1px solid #ccc;
	&.active {
		background: rgb(103, 194, 58);
	}
}
.subtli {
	height: 340px;
	border: 1px solid #ccc;
	margin-top: 30px;
}
.handCollse{
	cursor: pointer;
}
</style>
