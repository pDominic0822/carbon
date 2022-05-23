<template>
	<div class="student-mold">
		<div class="clearfix tabsli" :class="{'leng' : moldYearList.length === 5}">
			<span class="meau"
			:style='{left: left + "px", top: "5px"}'
			>
			</span>
			<ul >
				<li :class="{'active': patternIndex === index}" v-for="(item, index) in moldYearList" @click="_handlePattern(index)" :key="index">
					{{item.yearsTime}}
				</li>
			</ul>
		</div>
        <div class="clearfix mt20">
			<div class="modleyear">
				<div class="selecyear center clearfix">
					<el-switch
						@change="handPushYear()"
						v-model="isYearOpen"
						size="mini"
						:active-text="moldYearMap.yearsTime + '开启'"
						:inactive-text="moldYearMap.yearsTime + '关闭'"
						active-color="#13ce66"
						inactive-color="#ff4949"
						>
					</el-switch>
				</div>
			</div>
			<div class="mt20">
				<el-tabs v-model="subtaskActiveIndex" type="border-card" @tab-click="handleClick">
					<el-tab-pane
					:key="taskListIndex"
					v-for="(taskListitem, taskListIndex) in subtaskList"
					:label="taskListitem.taskName"
					:name="taskListIndex + ''"
					>
					</el-tab-pane>
			</el-tabs>
			</div>
            <!-- <div class="moldelist fl">
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
            </div> -->
            <div class="modledes fl">
                <div class="deshead">
                <div class="title fl">
                    <p>
						{{subtaskMap.taskName || ''}}
					</p>
                </div>
                <ul class="fr subinis">
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
                <div class="step clearfix">
                    <ul class="clearfix">
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
                <div class="tables clearfix">
                    <teacherView :moldId="moldId" :subtaskId ="subtaskId" :clazzYearsPushId ="clazzYearsPushId " :taskCode="taskCode"></teacherView>
                </div>
            </div>
        </div>
	</div>
</template>

<script>

import teacherView from '@@/teacher/teacherView/teacherView';
export default {
	components: {
		teacherView
	},
	name: 'login',
	data () {
		return {
			taskCode: '',
			moldId: '',
			clazzYearsPushId: '',
			subtaskId: '',
			dataSrc: {
				resourceName: ''
			},
			left: 0,
			taskListIndex: '0',
			subtaskActiveIndex: '0',
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
			patternIndex: 0,
			subtaskList: [],
			moldYearList: []
		};
	},
	created () {
		this.getMoldYear();
	},
	methods: {
		_handlePattern (index) {
			this.patternIndex = index;
			let arr = [
				5,
				124,
				124 + 119,
				124 + 119 + 119 + 9,
				124 + 119 + 119 + 119 + 9 + 9,
				124 + 119 + 119 + 119 + 119,
				124 + 119 + 119 + 119 + 119 + 119
			];
			this.left = arr[index];

			this.MoldYearIndex = index;
			this.subtaskActiveIndex = '0';
			this.handleMoldYear();
		},
		subTaskText () {
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
		subTaskYearPush (item) {
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
							moldId: this.moldMap.moldId || this.$route.query.moldId || this.moldId || '', // 模块id
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
						moldId: this.moldMap.moldId || this.$route.query.moldId || this.moldId || '', // 模块id
						defaultMoldYearsId: this.moldYearMap.defaultMoldYearsId,
						yearsTime: this.moldYearMap.yearsTime
					}
				}).then((res) => {
					if (res.success) {
						// this.moldYearMap.isOpen = true;
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
		handleClick () {
			console.log(this.subtaskActiveIndex);
			this.getMoldSubtask(this.subtaskActiveIndex);
		},
		getMoldSubtask (taskListIndex) {
			this.subtaskIndex = taskListIndex + '';
			this.subtaskMap = this.subtaskList[taskListIndex];
			this.taskCode = this.subtaskList[taskListIndex].taskCode || '';
			// this.moldId = this.moldMap.moldId;
			this.subtaskId = this.subtaskMap.subtaskId;
			// console.log('这个是', this.moldId);
			console.log(this.taskCode);
			this.getMoldTaskList();
		},
		getMoldTaskList () {
			this.$ajax({
				method: 'post',
				url: '/TaskListBusiness/findTaskListBySubtaskId',
				params: {
					moldId: this.moldMap.moldId || this.$route.query.moldId || this.moldId || '', // 模块id
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
			this.subtaskIndex = 0 + '';
			this.$ajax({
				method: 'post',
				url: '/stClazzSubtaskPush/findMoldYearsSubtaskPushInfoList',
				params: {
					moldId: this.moldMap.moldId || this.$route.query.moldId || this.moldId || '', // 模块id
					chapterId: this.moldYearMap.chapterId || '',
					clazzYearsPushId: this.moldYearMap.clazzYearsPushId || '',
					defaultMoldYearsId: this.moldYearMap.defaultMoldYearsId || ''
				}
			})
				.then((res) => {
					if (res.success) {
						this.subtaskList = res.data;
						if (res.data.length > 0) {
							this.getMoldSubtask(0);
						}
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
			console.log(this.moldYearMap);
			this.isYearOpen = this.moldYearMap.isOpen === 1;
			this.getTeacherYearSubTask();
		},
		// 获取模块下的年
		getMoldYear () {
			this.moldYearList = [];
			this.MoldYearIndex = '';
			this.$ajax({
				method: 'post',
				url: '/stClazzYearsPush/findMoldYearsTimeInfoList',
				params: {
					moldId: this.$route.query.moldId || this.moldId || ''
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
		_handleRouter (item) {
			this.$router.push({name: item.routerLink});
		}
	}
};
</script>

<style lang="scss" scoped>
.tabsli{
	// height: 36px;
    overflow: hidden;
    position: relative;
    border-radius: 20px;
	background: rgba(224, 229, 232, 1);
	// widows: 180px;
	// float: right;
	margin-right: 15px;
	position: relative;
	width: 250px;
	margin-top: 20px;
	&.leng{
		width: 630px;
	}
	.meau{
		margin: 4px;
		display: inline-block;
		height: 29px;
		position: absolute;
		width: 110px;
		background-color: #A377FF;
		left: 6px;
		top: 5px;
		border-radius: 24px;
		transition: left .4s;
	}
	// ul{
	// 	position: absolute;
	// 	z-index: 100;
	// }
	li{
		width: 125px;
		// height: 36px;
		line-height: 36px;
		text-align: center;
		float: left;
		cursor: pointer;
		// background: rgba(224, 229, 232, 1);
		z-index: 100;
		padding: 5px 10px;
		position: relative;
		&.active{
			color: #fff;
		}
	}
}
.student-mold{
	padding: 0 10px;
}
.modleyear {
	// margin: 15px auto;
	width: 230px;
	height: 42px;
	// background: #f2f7ff;
	// border: 1px solid #99abce;
}
.moldelist {
	width: 250px;
//   height: 680px;
	background: #f7faff;
	box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);

	ul {
		// height: 680px;
		overflow: auto;
		li {
			float: left;
			margin-top: 5px;
			margin-left: 15px;
			width: 240px;
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

.dddds{
	margin-top: 10px;
	margin-right: 20px;
}

.modledes {
	width: 100%;
	.deshead {
	height: 50px;
	margin-top: 15px;
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
			color: #fff;
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
	// margin-top: 13px;
	ul {
		// margin-left: 20px;
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
		margin-top: 30px;
	}
}
</style>
