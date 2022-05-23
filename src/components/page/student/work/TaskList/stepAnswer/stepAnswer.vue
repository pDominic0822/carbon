<!--
 * @Author: ljt
 * @Date: 2019-02-25 20:45:37
 -->
<template>
	<div class="node">
		<div class="node-box">
			<div v-for="(item, index) in showKnowArr" :key="index" class="answer-box clearfix" :class="'position' + item.p">
				<div class="imgs">
				</div>
				<div class="toptic">
					<div class="box-triangle"></div>
					<!-- 标题 -->
					<p v-html="item.t" class="titstitles">
					</p>
					<!-- 标题 -->
					<p class="mt15 tr" v-if="item.c === 't'">
						<el-button type="danger" size="small" @click="_nextSubStep(index)">
							下一步
						</el-button>
					</p>
					<!-- 单选 -->
					<template v-if="item.c === 'r'">
						<div class="mt15" v-if="item.rq && item.rq.length > 0">
							<el-radio-group class="radioGroupSty" v-model="item.rUv">
								<el-radio :key="questionIndex" :label="questionIndex + ''" v-for="(question, questionIndex) in item.rq">
									{{
										question
									}}
								</el-radio><br>
							</el-radio-group>
						</div>
						<p class="mt15 tr">
							<el-button type="danger" size="small" @click="_nextRadio(item, index)">
								提交
							</el-button>
						</p>
					</template>
					<!-- 判断 -->
					<template v-if="item.c === 'b'">
						<div class="mt15" v-if="item.rq && item.rq.length > 0">
							<el-radio-group class="radioGroupSty" v-model="item.rUv">
								<el-radio :key="questionIndex" :label="questionIndex + ''" v-for="(question, questionIndex) in item.rq">
									{{
										question
									}}
								</el-radio><br>
							</el-radio-group>
						</div>
						<p class="mt15 tr">
							<el-button type="danger" size="small" @click="_nextRadio(item, index)">
								提交
							</el-button>
						</p>
					</template>
					<!-- 多选 -->
					<template v-if="item.c === 'c'">
						<div class="mt15" v-if="item.rq && item.rq.length > 0">
							<el-checkbox-group class="radioGroupSty" v-model="item.cUv">
								<el-checkbox :key="questionIndex" :label="questionIndex + ''" v-for="(question, questionIndex) in item.rq">
									{{
										question
									}}
								</el-checkbox><br>
							</el-checkbox-group>
						</div>
						<p class="mt15 tr">
							<el-button type="danger" size="small" @click="_nextCheckbox(item, index)">
								提交
							</el-button>
						</p>
					</template>
					<!-- 填空 -->
					<template v-if="item.c === 'f'">
						<div class="mt15">
							<span v-for="(fill, fillIndex) in item.rq" :key="fillIndex">
								{{fill.fA}}
								<input type="text" style="width:100px;" v-model="fill.fUB">
								{{fill.fC}}
							</span>
						</div>
						<p class="mt15 tr">
							<el-button type="danger" size="small" @click="_nextFill(item, index)">
								提交
							</el-button>
						</p>
					</template>
					<!-- 表单 -->
					<template v-if="item.c === 'tb'">
						<table class="demo-table mt15">
							<tr>
								<th v-for="(th, thindex) in item.th" :key="thindex">
									{{th}}
								</th>
							</tr>
							<tr v-for="(tr, trIndex) in item.tr" :key="trIndex">
								<td v-for="(td, tdIndex) in tr.td" :key="tdIndex + 'a'">
									<template v-if="td.v === 'a'">
										{{td.n}}
									</template>
									<template v-if="td.v === 'b'">
										<input type="text" v-model="td.Un">
									</template>
								</td>
							</tr>
						</table>
						<p class="mt15 tr">
							<el-button type="danger" size="small" @click="_nextTable(item, index)">
								提交
							</el-button>
						</p>
					</template>
					<!-- 碳沙盘模拟经营参数 -->
					<template v-if="item.c === 'ProjectParameter'">
						<!-- <div class="mt15">
							{{item.params}}-
							{{paramMap[item.params]}}
						</div> -->
						<div class="mt15">
							<table class="demo-table">
								<tr class="titlebg">
									<td colspan="3">
										碳沙盘模拟经营参数
									</td>
									<td colspan="1" v-for="item in yearLeng" :key="item">
										第{{item}}年
									</td>
								</tr>
							</table>
							<template v-if="paramMap[item.params]">
								<table class="demo-table tables" :class="'bg' + tableindex "
								v-for="(tableItem, tableindex) in paramMap[item.params]"
								:key="tableindex">
									<tr v-for="(trItem, trIndex) in tableItem.childFieldList" :key="trIndex">
										<!-- 分类 -->
										<td :rowspan="tableItem.childFieldList.length " v-if="trIndex === 0" colspan="1"  class="colors">
											{{tableItem.fieldName}}
										</td>
										<!-- 参数 -->
										<td colspan="2" class="colors">
											{{trItem.fieldName}}
										</td>
										<!-- 1 -->
										<td v-for="(item, index) in trItem.yearsValuesList" :key="tableindex + trIndex + index" colspan="1">
											{{item.fieldValue}}
										</td>
									</tr>
								</table>
							</template>
						</div>
						<p class="mt15 tr">
							<el-button type="danger" size="small" @click="_nextSubStep(index)">
								下一步
							</el-button>
						</p>
					</template>
					<!-- 表格 -->
					<template v-if="item.c === 'carbonTable'">
						<div class="mt15">
							{{item.params}}
						</div>
						<div class="mt15">
							<originalTable :tableType="item.params"></originalTable>
						</div>
						<p class="mt15 tr">
							<el-button type="danger" size="small" @click="_nextSubStep(index)">
								下一步
							</el-button>
						</p>
					</template>
				</div>
			</div>
			<div class="center mt30" v-if="(knowIndex - 1) === knowledgeIntro.length">
				<el-button type="success">
					任务完成
				</el-button>
			</div>
		</div>
	</div>
</template>

<script>
import originalTable from '#/page/student/work/TaskList/common/originalTable';
export default {
	components: {
		originalTable
	},
	name: 'login',
	props: ['resourceTextId', 'taskStepIndex'],
	data () {
		return {
			knowIndex: 0,
			maskVisible: false,
			// 原生态数组
			knowledgeIntro: [
			],
			textArr: [
			],
			markVisible: false,
			textContent: '',
			visible: false,
			textLabel: '',
			textObj: {},
			paramMap: {},
			isUp: false,
			appIndex: '',
			inputAnswer: '',
			bottomBtnIsActive: false,
			itemNow: {},
			showKnowArr: [
			],
			yearLeng: 0,
			parameterList: [],
			showAll: false
		};
	},
	inject: ['reload'],
	created () {
		this.preview();
		// this.fetchResource();
		this.findProjectParameterInfoList();
	},
	watch: {
	},
	methods: {
		findProjectParameterInfoList () {	// 查询富文本文档
			this.$ajax({
				method: 'post',
				url: '/stClazzProjectParameter/findProjectParameterInfoList',
				params: {
					moldId: this.$route.query.moldId || this.moldId || ''
				}
			}).then(res => {
				if (res.success) {
					this.parameterList = res.data;
					let array = this.parameterList;

					// 组装表单的数据
					let paramMap = {

					};

					for (let index = 0; index < array.length; index++) {
						const element = array[index];
						paramMap[element.fieldCode] = [{
							...element
						}];
					}

					this.paramMap = paramMap;

					// 搞年的数据
					let yearLeng = 0;
					if (array.length > 0) {
						if (array[0].childFieldList.length > 0) {
							if (array[0].childFieldList[0].yearsValuesList.length > 0) {
								yearLeng = array[0].childFieldList[0].yearsValuesList.length;
							}
						}
					}
					this.yearLeng = yearLeng;
				} else {
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		fetchResource () {	// 查询富文本文档
			this.$ajax({
				method: 'post',
				url: '/taskText/findTaskTextMapByParam',
				params: {
					taskId: this.$route.query.taskId,
					type: 'main'
				}
			}).then(res => {
				if (res.success && res.data.length !== 0) {
					this.textArrContent = res.data;
					this.tooltip(0);
				};
			}).catch(err => {
				throw new Error(err);
			});
		},
		NextStep (index) {
			this.knowIndex = index;
			this.showKnowArr = this.knowledgeIntro.slice(0, index);
		},
		_nextRadio (item, index) {
			console.log(item);
			if (item.rUv === item.rv) { // 回答正确
				this.NextStep(index + 2);
				this.$message.success('回答正确');
			} else {
				this.$message.error('回答错误，请重新选择');
			}
		},
		_nextFill (item, index) {
			console.log(item);
			let rq = item.rq;
			for (let index = 0; index < rq.length; index++) {
				const element = rq[index];
				if (element.fUB !== element.fB) {
					this.$message.error('回答错误，请重新选择');
					return false;
				}
			}
			this.$message.success('回答正确');
			this.NextStep(index + 2);
		},
		_nextTable (item, index) {
			console.log(item);
			let tr = item.tr;
			for (let index = 0; index < tr.length; index++) {
				const td = tr[index].td;
				for (let j = 0; j < td.length; j++) {
					const element = td[j];
					if (element.v === 'b') { // 填空题
						if (element.Un !== element.n) {
							this.$message.error('回答错误，请重新选择');
							return false;
						}
					}
				}
			}
			this.$message.success('回答正确');
			this.NextStep(index + 2);
		},
		_nextCheckbox (item, index) {
			console.log(item);
			let cUv = item.cUv;
			let cv = item.cv;
			if (cUv.length !== cv.length) {
				this.$message.error('回答错误，请重新选择');
				return false;
			}
			for (let index = 0; index < cUv.length; index++) {
				const element = cUv[index];
				if (!cv.includes(element)) { // 判断是否有元素
					this.$message.error('回答错误，请重新选择');
					return false;
				}
			}
			this.$message.success('回答正确');
			this.NextStep(index + 2);
		},
		_nextSubStep (index) {
			// this.knowIndex++;
			this.NextStep(index + 2);
		},
		// 预览
		preview () {
			this.$ajax({
				method: 'post',
				url: '/resourceText/getResourceTextById',
				params: {
					resourceTextId: this.resourceTextId
				}
			}).then(res => {
				if (res.success && res.data) {
					this.knowledgeIntro = JSON.parse(res.data.textContent);
					this.knowledgeIntro.forEach(element => {
						if (element.c === 'c') {
							// element.cUv = [];
							this.$set(element, 'cUv', element.cUv || []);
						}
					});
					this.knowledgeIntro.sort(function (a, b) {
						return b.s - a.s;
					});
					console.log(this.knowledgeIntro);
					this.NextStep(1);
				} else {
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		_delKArr (index) {
			this.showKnowArr.splice(index, 1);
		}
	}
};
</script>
<style lang="scss" scoped>
@import './css/setp.scss';
</style>
<style lang="scss" scoped>
.node-box{
	// padding-bottom: 200px;
	// height: calc(100vh - 370px);
	overflow-y: scroll;
}
.node{
	position: relative;
}
.tsesdf{
	position: absolute;
	top: -70px;
    right: 15px;
	width: 200px;
	// transform:rotate(-90deg);
}
.imgs{
	color: red;
	text-align: center;
}

.radioGroupSty{
	line-height: 20px;
}
.table1Sty{
	text-align: center;
	border-collapse: collapse;
	.tableSelf{
		line-height: 25px;
		// width: 690px;
		border-collapse: collapse;
		tr{
			height: 40px;
		}
		td{
			border: 1px solid #fff;
		}
		th{
			border: 1px solid #fff;
		}
	}
}
.myCont{
	line-height: 25px
}
input{
	width: 175px;
	outline: none;
}
.fixBtn{
	position: absolute;
	bottom: -80px;
	// right: 10px;
	border-radius: 0;
	// opacity: 0.3;
	width: 100%;
}
.toptic .demo-table .titlebg td{
	color: #fff;
}
</style>
