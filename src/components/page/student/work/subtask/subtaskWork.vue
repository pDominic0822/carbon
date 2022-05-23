<!--
 * @Author: zhangln
 * @Description: 学生端大任务详情页
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="subtask-index">
		<eduHeader3 :returnArr="returnArr" :tabsArr="tabsArr"></eduHeader3>
		<div>
			<!-- <div class="mt30">
				<div v-for="(item, index) in subtaskList" class="subtli" :key="index">
					{{item.taskName}}
					<div class="mt20">
						（{{item.isPush === 1 ? '已推送' : '未推送'}}）
					</div>
					<div class="mt20">
						<el-button class="saveBtn" type="primary" size="mini" @click="getTaskArr(item)">
							查看小任务列表
						</el-button>
					</div>
				</div>
			</div> -->
			<div class="fl index-left">
				left
			</div>
		</div>
		<el-dialog
		append-to-body
		:visible.sync="isMoldListVisible"
		width="800px" class='onHeadLearn onHeadLearn3'>
			<div class="moldli" v-for="(item, index) in MoldListArr" @click="getMoldYear(index)" :key="index">
				{{item.moldName}}
			</div>
			<!-- 年 -->
			<div v-for="(item, index) in moldYearList" class="yearli" :class="{'active': MoldYearIndex === index}" @click="handleMoldYear(index)" :key="index">
				{{item.yearsTime}}
				年
				（{{item.isOpen === 1 ? '已开启' : '未开启'}}）
			</div>
		</el-dialog>
	</div>
</template>

<script>
import { studentTabsArr } from '#/common/json/WorkJson';
import eduHeader3 from '#/common/edu-header3';

export default {
	name: 'login',
	components: {
		eduHeader3
	},
	data () {
		return {
			isMoldListVisible: false,
			returnArr: [],
			tabsArr: [],
			moldIndex: 0,
			MoldYearIndex: 0,
			moldMap: {},
			moldYearMap: {},
			subtaskMap: {},
			MoldListArr: [],
			subtaskList: [],
			moldYearList: []
		};
	},
	inject: ['reload'],
	created () {
		this.init();
	},
	methods: {
		getTaskArr (subItem) {
			this.subtaskMap = subItem;
			this.$ajax({
				method: 'post',
				url: '/stClazzSubtaskPush/findClazzYearTaskInfoList',
				params: {
					moldId: this.$route.params.moldId || '', // 模块id
					clazzYearsPushId: this.clazzYearsPushId || '', // 节id
					subtaskId: subItem.subtaskId || '' // 大任务id
				}
			}).then(res => {
			}).catch(err => {
				throw new Error(err);
			});
		},
		// 获取模块下的年
		getMoldYear (index) {
			this.moldIndex = index;
			let item = this.MoldListArr[index];
			this.moldMap = item;
			if (!this.moldMap.moldIsdone) {
				this.$confirm('当前模式未开启，请选择其他模式实训', '提示', {
					confirmButtonText: '确定',
					center: true,
					showCancelButton: false,
					type: 'warning'
				}).then(() => {

				}).catch(() => {
				});
				return false;
			}
			this.$ajax({
				method: 'post',
				url: '/stClazzYearsPush/findMoldYearsTimeInfoList',
				params: {
					moldId: item.moldId
				}
			}).then(res => {
				if (res.success) {
					this.moldYearList = res.data;
				} else {
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		handleMoldYear (index) {
			this.MoldYearIndex = index;
			this.moldYearMap = this.moldYearList[index];
			if (!this.moldYearMap.clazzYearsPushId) {
				this.$confirm('当前年下未开启，无法开启任务', '提示', {
					confirmButtonText: '确定',
					center: true,
					showCancelButton: false,
					type: 'warning'
				}).then(() => {

				}).catch(() => {
				});
				return false;
			}
			// let query = {
			// 	moldId: this.moldMap.moldId,
			// 	clazzYearsPushId: this.moldYearMap.clazzYearsPushId
			// };

			// 切换模式（模块）
			// this.$router.push({name: 'subtask-work', query: query});

			this.isMoldListVisible = false;
			this.getTeacherYearSubTask();
		},
		// 老师端查询
		getTeacherYearSubTask () {
			this.$ajax({
				method: 'post',
				url: '/stClazzSubtaskPush/findMoldYearsSubtaskPushInfoList',
				params: {
					moldId: this.moldMap.moldId, // 模块id
					defaultMoldYearsId: this.moldYearMap.defaultMoldYearsId || '',
					clazzYearsPushId: this.moldYearMap.clazzYearsPushId || ''
				}
			}).then(res => {
				if (res.success) {
					this.subtaskList = res.data;
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		/**
		 * @name: zhangln
		 * @msg: 查询多少模块
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
					this.isMoldListVisible = true;
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		/**
		 * @name: zhangln
		 * @msg: 判断当前登录是老师还是学生
		 */
		init () {
			this.tabsArr = studentTabsArr;
			this.returnArr = [{
				name: '返回班级',
				routerName: 'teacher-class'
			}];
			if (!this.$route.query.moldId) { // 没有选择模块的时候，弹窗
				this.selectMold();
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.teacher-index{
	background: #fff;
}
.moli{
	width: 450px;
	height: 200px;
	float: left;
	margin-right: 30px;
	border: 1px solid rgb(103, 194, 58);
	&.active{
		background: rgb(103, 194, 58);
	}
}
.yearli{
	height: 40px;
	line-height: 40px;
	border-bottom: 1px solid #ccc;
	&.active{
		background: rgb(103, 194, 58);
	}
}
.subtli{
	height: 340px;
	border: 1px solid #ccc;
	margin-top: 30px;
}

.index-left{
	float: left;
	width: 250px;
	border-left: 1px solid #ccc;
}
</style>
