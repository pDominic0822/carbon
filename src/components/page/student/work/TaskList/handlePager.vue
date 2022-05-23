<!--
 * @Author: zhangln
 * @LastEditors: Please set LastEditors
 * @Description: x
 * @Date: 2019-02-23 18:21:14
 * @LastEditTime: 2021-12-14 11:15:14
 -->
<template>
	<div class="task-work">
		<!-- 小任务关联试卷 -->
		<div class="clearfix"  v-if="$storage.get('UserType') + '' === '1'">
			<el-button type="info" @click="getPageAnalysis()">成绩排名</el-button>
			<el-button type="primary warning" @click="getPageAnalysis3(1, '试题错误率')">试题错误率</el-button>
			<!-- <el-button type="warning" @click="getPageAnalysis3(2, '多选错误率')">多选错误率</el-button> -->
			<el-button type="danger" @click="getPageAnalysis2(1, '单选选项重复率')">单选选项重复率</el-button>
			<el-button type="primary" @click="getPageAnalysis2(2, '多选选项重复率')">多选选项重复率</el-button>
		</div>
		<div class="clearfix mt30">
			<div class="">
				<div class="topicBox-right-info clearfix" v-if="isAnswer">
					<p>试卷总得分：{{totalScore}}分</p>
				</div>
				<div class="clearfix has-top">
					<ul v-if="dataArr.length > 0" class="TopTitle">
						<li v-for="(item, index) in dataArr" :key="index" class="TopIndex">
							<div class="topTitle">
								{{index + 1}}、{{item.question}}
								<span style="color:#5FC18E">
									{{item.type === 1 ? '单选题' : '多选题'}}&nbsp;&nbsp;
									（{{item.score}}分）
								</span>
								<span style="color:#f56c6c" v-if="item.answerItem">
									答案：{{item.answerItem}}
								</span>
							</div>
							<ul class="TopOption">
								<!-- 单选 -->
								<template v-if="item.type === 1">
									<li v-for="(itemIndex, index1) in item.questionOptions" :key="index1">
										<el-radio-group v-model="item.stuAnswer" v-if="itemIndex">
											<el-radio :label="itemIndex.id + ''"><span >{{itemIndex.options}}、{{itemIndex.optionInfo}}</span></el-radio>
										</el-radio-group>
									</li>
								</template>
								<!-- 多选 -->
								<template v-if="item.type === 2">
									<li v-for="(itemIndex, index1) in item.questionOptions" :key="index1">
										<el-checkbox-group  v-model="item.stuAnswer">
											<el-checkbox :label="itemIndex.id + ''"><span >{{itemIndex.options}}、{{itemIndex.optionInfo}}</span></el-checkbox>
										</el-checkbox-group>
									</li>
								</template>
							</ul>
						</li>
					</ul>
					<div class="center m30" v-if="!isAnswer">
						<el-button type="primary" v-if="$storage.get('UserType') + '' === '2'" size="small" @click="_handleEnter()" :disabled="idSubmit">提交</el-button>
					</div>
				</div>
			</div>
		</div>
		<el-dialog title="成绩排名" center width="600px" :visible.sync="dialogFormVisible" append-to-body custom-class="my-dialog">
			<div class="clearfix">
				<p class="lh24 clearfix">
					<span class="fl">
						交卷人数：{{submitUserObj.submitNum}}/{{submitUserObj.totalNum}}人
					</span>
					<span class="fr">
						试卷平均分：{{submitUserObj.averageScore}}分
					</span>
				</p>
				<table class="demo-table mt30">
					<tr class="color1">
						<td>
							姓名
						</td>
						<td>
							试卷分数
						</td>
						<td>
							排行
						</td>
					</tr>
					<tr v-for="(item, index) in submitUserList" :key="index">
						<td>
							{{item.realName}}
						</td>
						<td>
							{{item.paperScore}}
						</td>
						<td>
							{{index + 1}}
						</td>
					</tr>
				</table>
			</div>
		</el-dialog>
		<el-dialog :title="Errortitle" center width="1200px" :visible.sync="dialogFormVisibl2" append-to-body custom-class="my-dialog">
			<div v-for="(item, index) in ErrorRateArr" :key="index">
				<div class="topTitle mt30">
					{{index + 1}}、
					{{
						item.questionContent
					}}
					<div class="mt20">
						<el-progress :text-inside="true" :status="item.status" :stroke-width="26" :percentage="item.percentage"></el-progress>
					</div>
				</div>
			</div>
		</el-dialog>
		<el-dialog :title="Errortitle" center width="1200px" :visible.sync="dialogFormVisible3" append-to-body custom-class="my-dialog">
			<div class="clearfix">
				<table class="demo-table mt30">
					<tr class="color1">
						<td colspan="6">
							题目
						</td>
						<td>
							A
						</td>
						<td>
							B
						</td>
						<td>
							C
						</td>
						<td>
							D
						</td>
					</tr>
					<tr v-for="(item, index) in ErrorRate" :key="index">
						<td colspan="6">
							{{item.questionContent}}
						</td>
						<td v-for="(option, optionIndex) in item.optionsInfoList" :key="optionIndex">
							{{option.userChooseCount}}
							/
							{{
								option.totalCount
							}}
							<p class="mt15">
								(
									{{
										((option.userChooseCount / (option.totalCount || 1)) * 100).toFixed(2)
									}}%
								)
							</p>
							<p class="mt15">
								&nbsp;
							</p>
						</td>
					</tr>
				</table>
			</div>
		</el-dialog>
	</div>
</template>

<script>
import { encodeUnicode } from '_@/js/utils';	// code编码
import { modelatlasUrl } from '@/config';
import * as echarts from 'echarts'; // 获取echarts
export default {
	name: 'login',
	data () {
		return {
			hasTop: false,	// 有没有题
			dataArr: [],	// 题List
			ErrorRate: [],
			RowTopic: {},	// 单道题
			score: 0, // 分数
			totalScore: 0,
			Minutes: 10, // 分钟
			second: '00',	// 秒
			Errortitle: '',
			dialogFormVisible: false,
			dialogFormVisibl2: false,
			dialogFormVisible3: false,
			submitUserList: [],
			submitUserObj: {},
			ErrorRateArr: [],
			answerOptionsArr: [],	// 答案
			isAnswer: false,
			idSubmit: false
		};
	},
	created () {
		this.topSelect();
	},
	methods: {
		getPageAnalysis () {
			this.$axios
				.post(`${modelatlasUrl()}/modelatlas/testPaperRecord/findClazzUserTaskPaperInfoList`, {
					sessionId: this.$Cookie.get('sessionId'),
					moldId: this.$route.params.moldId,
					testPaperId: this.RowTopic.testPaperId, // 试题ID
					taskId: this.$route.query.taskId
				})
				.then(res => {
					if (res.success) {
						this.dialogFormVisible = true;
						this.submitUserList = res.data.submitUserList;
						this.submitUserObj = res.data;
					} else {
					}
				}).catch(error => {
					console.log(error);
				});
		},
		getPageAnalysis2 (questionType, title) {
			this.$axios
				.post(`${modelatlasUrl()}/modelatlas/testPaperRecord/findPaperQuestionOptionsRepetitionRate`, {
					sessionId: this.$Cookie.get('sessionId'),
					moldId: this.$route.params.moldId,
					testPaperId: this.RowTopic.testPaperId, // 试题ID
					taskId: this.$route.query.taskId,
					questionType: questionType || '1'
				})
				.then(res => {
					if (res.success) {
						this.dialogFormVisible3 = true;
						this.Errortitle = title;
						this.ErrorRate = res.data;
					} else {
					}
				}).catch(error => {
					console.log(error);
				});
		},
		showEchart (xData, showData) {
			// 指定图表的配置项和数据
			this.myChart = echarts.init(this.$refs.echarts1);

			// option
			let option = {
				backgroundColor: '#141845',
				tooltip: {
					trigger: 'axis',
					backgroundColor: 'rgba(255,255,255,0.1)',
					axisPointer: {
						type: 'shadow',
						label: {
							show: true,
							backgroundColor: '#7B7DDC'
						},
						axisLabel: {
						},
						formatter: '{value} %'
					}
				},
				legend: {
					data: ['错误率'],
					// data: legendData,
					textStyle: {
						color: '#B4B4B4'
					},
					top: '7%'
				},
				grid: {
					left: '2%',
					right: '4%',
					bottom: '14%',
					top: '16%',
					containLabel: true
				},
				xAxis: {
					data: xData,
					axisLine: {
						lineStyle: {
							color: '#B4B4B4'
						}
					},
					axisTick: {
						show: false
					}
				},
				yAxis: [
					{
						splitLine: {show: false},
						axisLine: {
							lineStyle: {
								color: '#B4B4B4'
							}
						},
						axisLabel: {
							formatter: '{value} %'
						}
					},
					{

						splitLine: {show: false},
						axisLine: {
							lineStyle: {
								color: '#B4B4B4'
							}
						},
						axisLabel: {
							formatter: '{value} '
						}
					}
				],
				series: [
					{
						name: '错误率',
						type: 'bar',
						barWidth: '5px',
						itemStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: '#5CBFFF'
								}, {
									offset: 1,
									color: '#5997FF'
								}]),
								barBorderRadius: [4, 4, 0, 0]
							}
						},
						data: showData
					}
				]
			};
			this.myChart.setOption(option);
		},
		getPageAnalysis3 (questionType, title) {
			this.$axios
				.post(`${modelatlasUrl()}/modelatlas/testPaperRecord/findPaperQuestionErrorRate`, {
					sessionId: this.$Cookie.get('sessionId'),
					moldId: this.$route.params.moldId,
					testPaperId: this.RowTopic.testPaperId, // 试题ID
					taskId: this.$route.query.taskId,
					questionType: questionType
				})
				.then(res => {
					if (res.success) {
						let json = res.data || [];
						for (let index = 0; index < json.length; index++) {
							const element = json[index];
							element.percentage =
								parseFloat(
									((element.errorCount / (element.submitCount || 1)) * 100).toFixed(2)
								);
							if (element.percentage < 25) {
								element.status = 'exception';
							} else if (element.percentage > 45 && element.percentage < 55) {
								element.status = 'warning';
							} else if (element.percentage > 55 && element.percentage < 75) {
								element.status = 'success';
							} else if (element.percentage > 75 && element.percentage < 105) {
								element.status = 'exception';
							}
						}
						this.ErrorRateArr = json;
						this.dialogFormVisibl2 = true;
						this.Errortitle = title;
						// this.$nextTick(() => {
						// 	this.showEchart(xData, showData);
						// });
					} else {
					}
				}).catch(error => {
					console.log(error);
				});
		},
		/**
		 * @msg: 查询试卷
		 */
		selectData (index) {
			this.$axios
				.post(`${modelatlasUrl()}/modelatlas/testPaper/findUserPaperQuestionList`, {
					sessionId: this.$Cookie.get('sessionId'),
					moldId: this.$route.params.moldId,
					taskId: this.$route.query.taskId,
					testPaperId: this.RowTopic.testPaperId // 试题ID
				})
				.then(res => {
					if (res.success) {
						this.isAnswer = res.isSubmit !== 0;
						let data = res.data;
						if (res.isSubmit === 1) { // 回答
							this.score = res.totalScore;
							this.totalScore = res.totalScore;
							for (let i = 0; i < data.length; i++) {
								if (data[i].type === 1) {
									data[i].stuAnswer = '';
									console.log(data[i].userOptions);
									if (data[i].userOptions) {
										data[i].stuAnswer = (data[i].userOptions && data[i].userOptions['0'].optionId) || '';
									}
								} else if (data[i].type === 2) {
									data[i].stuAnswer = [];
									if (data[i].userOptions) {
										data[i].stuAnswer = data[i].userOptions.map(item => item.optionId);
									}
								}

								// 答案回显
								let answerItem = '';
								data[i].questionOptions = data[i].questionOptions || [];
								data[i].questionAnswers.forEach(itt => {
									data[i].questionOptions.forEach(its => {
										if (itt.answerId + '' === its.id + '') {
											answerItem += its.options;
										}
									});
									console.log(answerItem);
								});
								data[i].answerItem = answerItem;
							}
						} else {
							for (let i = 0; i < data.length; i++) {
								if (data[i].type === 1) {
									data[i].stuAnswer = '';
								} else if (data[i].type === 2) {
									data[i].stuAnswer = [];
								}
								// 老师的时候，回显答案
								if (this.$storage.get('UserType') + '' === '1') {
									let answerItem = '';
									console.log(i);
									console.log(data[i].questionAnswers);
									data[i].questionOptions = data[i].questionOptions || [];
									data[i].questionAnswers.forEach(itt => {
										data[i].questionOptions.forEach(its => {
											if (itt.answerId + '' === its.id + '') {
												answerItem += its.options;
											}
										});
										console.log(answerItem);
									});
									data[i].answerItem = answerItem;
								}
							}
						}
						console.log(data);
						this.dataArr = data;
					} else {
					}
				}).catch(error => {
					console.log(error);
				});
		},
		/**
		 * @msg: 提交确认
		 */
		_handleEnter () {
			this.$confirm('是否提交?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				this.SubmitData();
			}).catch(() => {});
		},
		/**
		 * @msg: 提交试卷
		 */
		SubmitData () {
			let answerOptions = [];
			for (let i = 0; i < this.dataArr.length; i++) {
				let AnsweroptionId = '';
				if (!this.dataArr[i].stuAnswer) { // 未有提交的返回
					this.$alert(`第${i + 1}题没有完成，请全部选择完成后提交。`, '', {
						confirmButtonText: '确定',
						type: 'error',
						center: true,
						callback: action => {
						}
					});
					return;
				}
				if (this.dataArr[i].type === 2) {
					AnsweroptionId = this.dataArr[i].stuAnswer.join(',');
				} else {
					AnsweroptionId = this.dataArr[i].stuAnswer || '';
				};
				answerOptions.push({
					optionId: AnsweroptionId, // 选项
					questionId: this.dataArr[i].id,
					type: this.dataArr[i].type,	// 题类型
					score: this.dataArr[i].score	// 提题数
				});
			};
			console.log(answerOptions);
			let StrOption = JSON.stringify(answerOptions);
			let Utf16StrOption = encodeUnicode(StrOption);
			console.log(Utf16StrOption);
			console.log(this.RowTopic);
			this.$axios
				.post(`${modelatlasUrl()}/modelatlas/testPaper/userSubmitPaperQuestion`, {
					sessionId: this.$Cookie.get('sessionId'),
					moldId: this.$route.params.moldId,
					subtaskId: this.$route.query.subtaskId,
					chapterId: this.$route.query.chapterId,
					taskId: this.$route.query.taskId,
					testPaperId: this.RowTopic.testPaperId || 1, // 试题ID
					testPaperType: 0,
					answerOptions: Utf16StrOption
				})
				.then(res => {
					if (res.success) {
						this.$message.success(res.message);
						this.topSelect();
						this.$store.commit('accomplishTaskRests', '');
					} else {
					}
				}).catch(error => {
					console.log(error);
				});
			// this.$ajax({
			// 	method: 'post',
			// 	url: '/paperQuestionRecord/userSubmitPaperQuestion',
			// 	params: {
			// 		testPaperId: this.RowTopic.testPaperId,
			// 		testPaperType: 0,
			// 		subtaskId: this.$route.query.subtaskId,
			// 		taskId: this.$route.query.taskId,
			// 		moldId: this.$route.params.moldId,
			// 		answerOptions: Utf16StrOption
			// 	}
			// }).then(res => {
			// 	if (res.success && res.data) {
			// 		this.score = res.data.totalScore;
			// 		this.idSubmit = true;
			// 		this.selectData();
			// 		this.$message.success(res.message);
			// 	} else {
			// 		this.$message.error(res.message);
			// 	}
			// }).catch(err => {
			// 	throw new Error(err);
			// });
		},
		/**
		 * @msg: 时间
		 */
		createTime () {
			let maxtime = 10 * 60;
			let TimeInter = setInterval(() => {
				if (maxtime >= 0) {
					this.Minutes = Math.floor(maxtime / 60);
					this.second = Math.floor(maxtime % 60);
					if (this.second < 10) {
						this.second = `0${this.second}`;
					}
					--maxtime;
				} else {
					clearInterval(TimeInter);
					this.SubmitData();
				}
			}, 1000);
		},
		/**
		 * @msg: 试卷查询-在去查询题
		 */
		topSelect () {
			// this.$ajax({
			// 	method: 'post',
			// 	url: '/taskPaper/examineTaskPaper',
			// 	params: {
			// 		taskId: this.$route.query.taskId
			// 	}
			// }).then(res => {
			// 	if (res.success && res.data) {
			// 		this.RowTopic = res.data[0];	// 只拉取一套试卷，要用名字
			// 		this.selectData();
			// 	}
			// }).then(res => {
			// }).catch(err => {
			// 	throw new Error(err);
			// });
			this.$axios
				.post(`${modelatlasUrl()}/modelatlas/testPaper/examineTaskPaper`, {
					sessionId: this.$Cookie.get('sessionId'),
					taskId: this.$route.query.taskId
				})
				.then(res => {
					if (res.success) {
						this.RowTopic = res.data[0];	// 只拉取一套试卷，要用名字
						this.selectData();
					} else {
					}
				}).catch(error => {
					console.log(error);
				});
		}
	}
};
</script>

<style lang="scss" scoped>
.has-top /deep/ .el-radio .is-checked .el-radio__inner,
.has-top /deep/ .el-checkbox .is-checked .el-checkbox__inner{
	border-color: #00BA88;
    background: #00BA88;
}
.has-top /deep/ .el-radio__input.is-checked+.el-radio__label,
.has-top /deep/ .el-checkbox__input.is-checked+.el-checkbox__label{
	color: #00BA88;
}
#split-gutter{
	top: 0;
	bottom: 0;
	position: absolute;
	cursor: ew-resize;
	background: transparent;
	background: #F5F5F5;
	border-left: 1px groove #FAFFFC;
	border-right: 1px groove #FAFFFC;
	z-index: 1000;
	width: 4px;
	left: 50%;
}
.work-content{
	height: calc(100%);
	position: relative;
	.work-left{
		// width: 49%;
		height: 100%;
		background: #ccc;
	}
	.work-right{
		// width: 50%;
		height: 100%;
		background: #dddddd;
	}
}
.footer{
	height: 60px;
	background: red;
}
.task-work{
	height: calc(100%);
	padding: 20px;
}
.topicBox-right-title{
	text-align: center;
	padding: 20px 0;
	font-size: 18px;
	font-weight: 900;
	// color: #FFF;
}

.demo-table td{
	line-height: 24px;
}
.topicBox-right-info{
	padding: 10px 0;
	margin-left: -52px;
	border-bottom: 1px solid #fff;
	&>p{
		float: left;
		// width: 155px;
		margin-left: 56px;
		text-align: center;
	}
	// &>p:nth-of-type(1){
	// 	color: #fff;
	// }
	// &>p:nth-of-type(2){
	// 	color: #fff;
	// }
	// &>p:nth-of-type(3){
	// 	color: #fff;
	// }
	&>p:nth-of-type(4){
		color: #F5696C;
	}
}
.TopTitle{
	li{
		margin-top: 40px;
	}
}
.echarts1{
	width: 1000px;
	height: 500px;
	margin: 0 auto;
}
.TopOption{
	margin-top: 10px;
	li{
		margin: 15px 0;
	}
}
.topTitle{
	padding-bottom: 20px;
	border-bottom: 1px solid #EEE;
	font-size: 16px;
	line-height: 30px;
	// color: #FFF;
}
</style>
