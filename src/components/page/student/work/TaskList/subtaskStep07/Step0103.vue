
<template>
	<div class="stu">
		<!-- 绿贷现金余额 -->
		<pageTable ref="pageTable" :tableType="tableType" :showInputMap="showInputMap" :fromInfo ="fromInfo"></pageTable>
		<div class="mt20 center">
			<el-button type="success" :disabled="isSaveData" @click="getPageJson()">
				{{!isSaveData ? '保存' : '已经保存'}}
			</el-button>
		</div>
		<el-dialog
			title="正确答案弹窗"
			:visible.sync="dialogreturnDataVisible"
			width="820px"
			append-to-body
			height="560px"
			>
			<returnMap v-if="dialogreturnDataVisible"></returnMap>
		</el-dialog>
	</div>
</template>

<script>
import { InitHomeWork, GetPageJsonHomeWork } from './../common/js/sendHomeWork';
export default {
	name: 'my-course',
	data () {
		return {
			InitHomeWork: InitHomeWork,
			GetPageJsonHomeWork: GetPageJsonHomeWork,
			// --------返回错误弹窗开始
			dialogreturnDataVisible: false,
			returnDataMap: [],
			// ------------返回错误弹窗结束
			isSaveData: false,
			tableType: 'stockMaterials',
			showInputMap: {
			},
			// 控制某一个空能输入
			ReadOnlyMap: {
				// 期初库存
				'begin_period_stock': {
					countChangeReadonly: false,
					valueChangeReadonly: false,
					emissionChangeReadonly: false,
					countRemainReadonly: false,
					valueRemainReadonly: false,
					emissionRemainReadonly: false
				},
				// 期中采购
				'midterm_purchase_material': {
					countChangeReadonly: true,
					valueChangeReadonly: true,
					emissionChangeReadonly: true,
					countRemainReadonly: true,
					valueRemainReadonly: true,
					emissionRemainReadonly: true
				},
				// 消耗合计数量
				'total_midterm_consume': {
					countChangeReadonly: false,
					valueChangeReadonly: false,
					emissionChangeReadonly: false,
					countRemainReadonly: false,
					valueRemainReadonly: false,
					emissionRemainReadonly: false
				},
				// 期初消耗
				'begin_period_midterm_consume': {
					countChangeReadonly: false,
					valueChangeReadonly: false,
					emissionChangeReadonly: false,
					countRemainReadonly: false,
					valueRemainReadonly: false,
					emissionRemainReadonly: false
				},
				// 采购消耗
				'purchase_midterm_consume': {
					countChangeReadonly: false,
					valueChangeReadonly: false,
					emissionChangeReadonly: false,
					countRemainReadonly: false,
					valueRemainReadonly: false,
					emissionRemainReadonly: false
				},
				// 期末库存
				'end_period_stock': {
					countChangeReadonly: false,
					valueChangeReadonly: false,
					emissionChangeReadonly: false,
					countRemainReadonly: false,
					valueRemainReadonly: false,
					emissionRemainReadonly: false
				}
			},
			// 控制提交的时候，返回值ajax
			sendAjaxMap: {
				// 期初库存
				'begin_period_stock': {
					countChange: false,
					valueChange: false,
					emissionChange: false,
					countRemain: false,
					valueRemain: false,
					emissionRemain: false
				},
				// 期中采购
				'midterm_purchase_material': {
					countChange: true,
					valueChange: true,
					emissionChange: true,
					countRemain: true,
					valueRemain: true,
					emissionRemain: true
				},
				// 消耗合计数量
				'total_midterm_consume': {
					countChange: false,
					valueChange: false,
					emissionChange: false,
					countRemain: false,
					valueRemain: false,
					emissionRemain: false
				},
				// 期初消耗
				'begin_period_midterm_consume': {
					countChange: false,
					valueChange: false,
					emissionChange: false,
					countRemain: false,
					valueRemain: false,
					emissionRemain: false
				},
				// 采购消耗
				'purchase_midterm_consume': {
					countChange: false,
					valueChange: false,
					emissionChange: false,
					countRemain: false,
					valueRemain: false,
					emissionRemain: false
				},
				// 期末库存
				'end_period_stock': {
					countChange: false,
					valueChange: false,
					emissionChange: false,
					countRemain: false,
					valueRemain: false,
					emissionRemain: false
				}
			},
			fromInfo: []
		};
	},
	created () {
		this.init();
	},
	methods: {
		init () {
			this.$ajax({
				method: 'post',
				url: '/stDefaultTableKey/findOrgWorkFieldValueInfoMap',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					clazzYearsPushId: this.$route.query.clazzYearsPushId || '',
					subtaskId: this.$route.query.subtaskId || '',
					taskId: this.$route.query.taskId || '',
					industryId: this.$route.query.industryId || '',
					tableType: this.tableType
				}
			}).then(res => {
				if (res.success) {
					// 后端返回一个数组
					let array = res.data;
					console.log(JSON.stringify(res.data));
					let arr = [];
					for (let index = 0; index < array.length; index++) {
						let element = array[index];
						// todo: 1-----------处理那个空能够输入
						// 解决有的值能输入，有的不能输入
						// 改变element对象中的某一个key  true/false

						let childArr = [];

						for (let j = 0; j < element.childFieldList.length; j++) {
							const childField = element.childFieldList[j];
							let onlyMap = this.ReadOnlyMap[childField.fieldCode];

							// todo2 ---- 回显数据
							let workFieldValue = {};

							if (childField.workFieldValue) {
								workFieldValue = childField.workFieldValue;
								let ajaxmap = this.sendAjaxMap[childField.fieldCode];
								for (const key in ajaxmap) {
									if (ajaxmap[key]) { // 判断当前是不是要提交的，
									// 再看这个数有没有输入
										if (workFieldValue[key] || workFieldValue[key] === 0) { // 只要满足一个-true,不能写else
										// 如果有值，则按钮置灰，不能点击
											this.isSaveData = true;
										}
									}
								}
							}

							// todo2 ---------- 结束

							childArr.push({
								...childField,
								...workFieldValue,
								...onlyMap
							});
						}
						// todo: 1-----------结束

						// 对象拼接
						let obj = {
							...element
						};
						obj['childFieldList'] = childArr;
						// 数组重新拼接一下
						arr.push(obj);
					}
					console.log(arr);
					this.fromInfo = arr;
				}
			});
		},
		getPageJson () {
			let array = this.fromInfo;
			console.log(array);
			let arr = [];
			for (let index = 0; index < array.length; index++) {
				let element = array[index];

				for (let j = 0; j < element.childFieldList.length; j++) {
					const childField = element.childFieldList[j];
					console.log(childField);
					let ajaxMap = this.sendAjaxMap[childField.fieldCode];

					console.log(ajaxMap);
					let answerObj = {
					};

					let workFieldValue = {};
					// 对象循环
					for (const key in ajaxMap) {
						if (ajaxMap[key]) {
							let val = childField[key];
							if (!val && val !== 0) {
								this.$message({
									type: 'error',
									message: '请填写当前作业全部表单'
								});
								return false;
							}

							answerObj['tableKeyId'] = childField.tableKeyId;
							answerObj['fieldCode'] = childField.fieldCode;
							answerObj[key] = childField[key];
							workFieldValue[key] = childField[key];
						}
					}
					// 当前tableKeyId有值，我才拼接到数组
					if (answerObj.tableKeyId) {
						childField.workFieldValue = {
							...workFieldValue
						};
						arr.push(answerObj);
					}
				}
			}
			console.log(arr);
			this.$confirm('是否提交', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				center: true,
				type: 'warning'
			}).then(() => {
				this.$confirm('是否确认提交（只有一次提交机会）', '再次提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					center: true,
					type: 'warning'
				}).then(() => {
					this.saveTableJson(arr);
				}).catch(() => {});
			}).catch(() => {});
		},
		saveTableJson (arr) {
			this.$ajax({
				method: 'post',
				url: '/stDefaultTableKey/submitOrgWorkAuditAndSave',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					clazzYearsPushId: this.$route.query.clazzYearsPushId || '',
					subtaskId: this.$route.query.subtaskId || '',
					taskId: this.$route.query.taskId || '',
					industryId: this.$route.query.industryId || '',
					tableType: this.tableType,
					tableFieldJson: JSON.stringify(arr),
					tableJsonAll: JSON.stringify(this.fromInfo)
				}
			}).then(res => {
				if (res.success) {
					if (res.data) {
						if (!res.data.auditResult) { // 回答错误，弹窗显示
							this.$store.commit('setTableType', this.tableType);
							this.$store.commit('setReturnDataMap', res.data.returnDataMap);
							this.$confirm('填写错误', '错误', {
								confirmButtonText: '查看答案',
								cancelButtonText: '取消',
								center: true,
								showCancelButton: true,
								type: 'error'
							}).then(() => {
								this.dialogreturnDataVisible = true;
							}).catch(() => {});
						} else {
							this.init();
							this.$confirm(`${res.message}`, '提交成功', {
								confirmButtonText: '确定',
								center: true,
								showCancelButton: false,
								type: 'success'
							}).then(() => {
							}).catch(() => {});
						}
					} else {
						this.$confirm(`${res.message}}`, '错误', {
							confirmButtonText: '确定',
							center: true,
							showCancelButton: false,
							type: 'error'
						}).then(() => {
						}).catch(() => {});
					}
				} else {
					this.$confirm(`${res.message}`, '错误', {
						confirmButtonText: '确定',
						center: true,
						showCancelButton: false,
						type: 'error'
					}).then(() => {
					}).catch(() => {});
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>

</style>
