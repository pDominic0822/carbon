<template>
	<div class='conDiv'>
		<div style='margin-top:20px;font-size:30px;color:red;'><span>注意：未理解下列文字，禁止使用该功能</span></div>
		<div class='tipsDiv'>
			<p>1、如果遇到模型分数是总分的2倍：联系研发（配置了2份一样的答案和分数，需要删除一条记录。）</p>
			<p>2、资源不加分：如果需要替换小任务上的PDF资源，需要重新配置能力模型分数</p>
			<p>3、答案提交不回显分数：请重新审查该任务是老师打分，还是答案精准校验，或者混合使用的画布。<br>
				1、如果是老师打分，请使用良知配置能力模型，如果老师端画布未显示打分按钮，则为良知未配置能力模型<br>
				2、如果是精准校验，请使用http:// ****课程域名****/#/configureAnswers（DCEP课程配分功能）配置画布答案及分数<br>
				3、如果这者都有，都需要配置，但是不能配置在同一个能力值上
			</p>
			<p>4、画布老师打分和精准校验，可以同时存在，但不能配在同一个能力值上，同时需检查两种能力值总分是否都是100</p>
		</div>
        <div class='publicTitle mt20'><span>一、查询 </span></div>
        <div class='containterDiv'>
			<ul>
				<li>
					<i>模块：</i>
					<el-select v-model="moldId" placeholder="请选择" @change="getChapter()">
						<el-option
						v-for="item in moldList"
						:key="item.moldId"
						:label="item.moldName"
						:value="item.moldId">
						</el-option>
					</el-select>
					<i>讲：</i>
					<el-select v-model="chapterId" placeholder="请选择" @change="getSubTask()">
						<el-option
						v-for="item in chapterList"
						:key="item.id"
						:label="item.chapterName"
						:value="item.id">
						</el-option>
					</el-select>
					<i>大任务：</i>
					<el-select v-model="subtaskId" placeholder="请选择" @change="getTask()">
						<el-option
						v-for="item in subtaskList"
						:key="item.moldSubtasId"
						:label="item.taskName"
						:value="item.moldSubtasId">
						</el-option>
					</el-select>
					<i>小任务：</i>
					<el-select v-model="taskId" placeholder="请选择" @change="getTaskAnswerScore()">
						<el-option
						v-for="item in taskList"
						:key="item.taskId"
						:label="item.taskName"
						:value="item.taskId">
						</el-option>
					</el-select>
					<div class='opBtn' style='display:inline-block;'>
						<el-button type="success" size="mini" @click="getTaskAnswerScore()">查询</el-button>
					</div>

				</li>
			</ul>
		</div>
		<div class='mt20'>
			<div class='publicTitle mt20'><span>二、 编辑答案和分数</span></div>
			<div class='containterDiv'>
				<ul>
					<li>
						<i>模型id：</i>
						<el-select v-model="activeObj.modelId" placeholder="请选择"  @change="laodModelAtlas()">
							<el-option
							v-for="item in modelCodeList"
							:key="item.modelId"
							:label="item.modelName"
							:value="item.modelId">
							</el-option>
						</el-select>
						<i>子能力id：</i>
						<el-select v-model="activeObj.atlasId" placeholder="请选择">
							<el-option
							v-for="item in atlasIdList"
							:key="item.id"
							:label="item.atlasName"
							:value="item.id">
							</el-option>
						</el-select>
						<i>功能code：</i>
						<el-input v-model="activeObj.functionCode" placeholder=""></el-input>
						<i>页面路径：</i>
						<el-input :value="taskUrlPage" placeholder="" readonly></el-input>
					</li>
					<li>
						答案json：
						<el-input
							type="textarea"
							:rows="5"
							placeholder="请输入答案json"
							v-model="activeObj.answerJson">
						</el-input>
					</li>
					<li>
						分值json：
						<el-input
							type="textarea"
							:rows="5"
							placeholder="请输入分值json"
							v-model="activeObj.scoreJson">
						</el-input>
					</li>
					<li>
						详情json：
						<el-input
							type="textarea"
							:rows="5"
							placeholder="请输入详情json"
							v-model="activeObj.detailsJson">
						</el-input>
					</li>
					<li>
						采分点介绍：
						<el-input
							type="textarea"
							:rows="5"
							placeholder="请输入采分点介绍"
							v-model="activeObj.introduce">
						</el-input>
					</li>
					<li>
						<span style='width: 85px;margin:0;'>总分：</span>
						<el-input v-model="activeObj.totalScore" placeholder=""></el-input>
					</li>
				</ul>
				<div class='opBtn42' :class='{opBtnGray: !taskId}'>
					<el-button type="primary" :disabled='!taskId' @click="saveEdit">
						<template v-if='isNew'>新增</template>
						<template v-else>编辑提交</template>
					</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import { Cookie } from '_@/js/one';
import { modelatlasUrl } from '@/config';
export default {
	name: 'App',
	data () {
		return {
			// 查询
			moldList: [],
			moldId: '',
			chapterList: [],
			chapterId: '',
			subtaskList: [],
			subtaskId: '',
			taskList: [],
			taskId: '',
			// 答案分数
			activeObj: {
				modelId: '',
				atlasId: '',
				functionCode: '',
				answerJson: '',
				scoreJson: '',
				detailsJson: '',
				totalScore: '',
				introduce: ''
			},
			//
			modelCodeList: [],
			atlasIdList: []
		};
	},
	computed: {
		isNew () {
			let isTrue = true;
			if (this.activeObj.id) {
				isTrue = false;
			}
			return isTrue;
		},
		taskUrlPage () {
			let text = '';
			this.taskList.forEach(item => {
				if (item.taskId === this.taskId) {
					text = item.taskUrl;
				}
			});
			return text;
		}
	},
	created () {
		this.getMoldInfo();
	},
	methods: {
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
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		// 查询讲
		getChapter () {
			this.laodModelId();
			this.chapterList = [];
			this.chapterId = '';
			this.subtaskList = [];
			this.subtaskId = '';
			this.taskList = [];
			this.taskId = '';
			this.activeObj = this.$options.data().activeObj;
			this.atlasIdList = [];
			this.$ajax({
				method: 'post',
				url: '/moldChapter/findMoldChapterByParam',
				params: {
					moldId: this.moldId
				}
			}).then(res => {
				if (res.success && res.data) {
					this.chapterList = res.data;
				} else {
					this.chapterList = [];
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		// 查询大任务
		getSubTask () {
			this.subtaskList = [];
			this.subtaskId = '';
			this.taskList = [];
			this.taskId = '';
			this.activeObj = this.$options.data().activeObj;
			this.atlasIdList = [];
			this.$ajax({
				method: 'post',
				url: '/moldSubtask/findTaskBoard',
				params: {
					moldId: this.moldId,
					chapterId: this.chapterId
				}
			}).then(res => {
				if (res.success && res.data) {
					this.subtaskList = res.data.findMoldSubTaskList;
				} else {
					this.subtaskList = [];
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		// 查询小任务
		getTask () {
			this.taskList = [];
			this.taskId = '';
			this.activeObj = this.$options.data().activeObj;
			this.atlasIdList = [];
			this.$ajax({
				method: 'post',
				url: '/TaskListBusiness/findTaskBusinessIndustryListInfo',
				params: {
					moldId: this.moldId,
					subtaskId: this.subtaskId
				}
			}).then(res => {
				if (res.success && res.data) {
					this.taskList = res.data.filter(item => {
						return item.taskUrl.indexOf('mold') !== -1;
					});
				} else {
					this.taskList = [];
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		// 查询小任务下的答案和分数
		getTaskAnswerScore () {
			if (!this.taskId) {
				this.$message.error('请选择小任务');
				return false;
			}
			let params = {
				sessionId: Cookie.get('sessionId'),
				isLoading: true,
				moldId: this.moldId,
				subtaskId: this.subtaskId,
				taskId: this.taskId
			};
			axios
				.post(`${modelatlasUrl()}/modelatlas/taskOperationAnswerScore/getTaskOperationAnswerScoreByParams`, params)
				.then(res => {
					if (res.success && res.data) {
						this.activeObj = res.data;
						this.laodModelAtlas();
					} else {
						this.activeObj = this.$options.data().activeObj;
					}
				}).catch(error => {
					console.log(error);
				});
		},
		// 点击提交编辑
		saveEdit () {
			let params = {
				sessionId: Cookie.get('sessionId'),
				isLoading: true,
				moldId: this.moldId,
				subtaskId: this.subtaskId,
				taskId: this.taskId,
				modelId: this.activeObj.modelId,
				atlasId: this.activeObj.atlasId,
				functionCode: this.activeObj.functionCode,
				answerJson: this.activeObj.answerJson,
				scoreJson: this.activeObj.scoreJson,
				detailsJson: this.activeObj.detailsJson,
				totalScore: this.activeObj.totalScore,
				introduce: this.activeObj.introduce
			};
			if (this.activeObj.id) {
				params.id = this.activeObj.id;
			}
			axios
				.post(`${modelatlasUrl()}/modelatlas/taskOperationAnswerScore/insertTaskOperationAnswerScore`, params)
				.then(res => {
					if (res.success) {
						this.getTaskAnswerScore();
						this.$message.success('提交成功');
					}
				}).catch(error => {
					console.log(error);
				});
		},
		// 查询modelId列表
		laodModelId () {
			this.atlasIdList = [];
			let params = {
				sessionId: Cookie.get('sessionId'),
				isLoading: true,
				systemId: this.$storage.get('systemId'),
				moldId: this.moldId
			};
			axios
				.post(`${modelatlasUrl()}/modelatlas/modelSystem/findModelSystemInfoList`, params)
				.then(res => {
					if (res.success && res.data) {
						this.modelCodeList = res.data;
					} else {
						this.modelCodeList = [];
					}
				}).catch(error => {
					console.log(error);
				});
		},
		// 查询atlasId列表
		laodModelAtlas () {
			let params = {
				sessionId: Cookie.get('sessionId'),
				isLoading: true,
				modelId: this.activeObj.modelId
			};
			axios
				.post(`${modelatlasUrl()}/modelatlas/modelAtlas/findAtlasGenreList`, params)
				.then(res => {
					if (res.success && res.data) {
						this.atlasIdList = res.data;
					} else {
						this.atlasIdList = [];
					}
				}).catch(error => {
					console.log(error);
				});
		}
	}
};
</script>

<style lang="scss" scoped>
.conDiv{
	padding: 0 16px 100px;
}
.publicTitle{
	font-size: 16px;
	font-weight: 600;
	color: #222222;
	line-height: 22px;
	b{
		font-weight: normal;
		color: #EA7000;
	}
}
.opBtn{
	text-align: center;
	margin: 30px 0 0;
	button{
		background: #25B5A9;
		border: #25B5A9;
		width: 104px;
		height: 38px;
		line-height: 36px;
		border-radius: 4px;
		font-size: 14px;
		padding: 0;
	}
}
.demo-table {
	thead{
		th{
			background: #0FA0B4;
			border: 1px solid #0FA0B4;
			color: #FFFFFF;
			font-weight: normal;
			height: 54px;
			line-height: 54px;
			font-size: 15px;
		}
	}
	td{
		height: 52px;
		line-height: 52px;
		background: #FFFFFF;
		border: 1px solid #BABABA;
		color: #222222;
		font-size: 15px;
	}
}
.detailsBtn{
	color: #0FA0B4;
	cursor: pointer;
}
.containterDiv{
	margin-top: 20px;
	li{
		margin-bottom: 10px;
		i{
			font-style: normal;
		}
		>span{
			width: 78px;
			display: inline-block;
		}
		/deep/ .el-input{
			width: 200px;
			margin-right: 20px;
		}
		/deep/ .el-textarea{
			margin-top: 10px;;
		}
	}
}
.tipsDiv{
	margin-top:20px;
	font-size:21px;
	color:red;
	p{
		margin-bottom: 10px;
		line-height: 40px;
	}
}
</style>
