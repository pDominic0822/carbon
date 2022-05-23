<!--
 * @Author: liujiatian
 * @Date: 2019-02-25 20:45:37
 -->
<template>
	<ul class='assemblyUl noScroll assemblyUlSon'>
		<li v-if='codeType === "code56"'>
			<div class='funDiv'>
				<div class='iconDiv'>
					<img src="./img/c03.png" alt="">
				</div>
				<div class='funDivCon'>
					<span>定义函数</span>
					<p class='textPradus'>合同生效</p>
				</div>
			</div>
			<ul class='assemblyUl assemblyUlSon'>
				<li>
					<div class='detectDiv'>
						设置
						<p class='textPradus'>甲方签名</p>
						<span>为</span>
						<p class='textPradus'>“hj4534g6h4j5g6h57g5hj8g5h8g8g7”</p>
					</div>
				</li>
				<li>
					<div class='detectDiv'>
						设置
						<p class='textPradus'>乙方签名</p>
						<span>为</span>
						<p class='textPradus'>“hj4534g6h4j5g6h57g5hj8g5h8g8g7”</p>
					</div>
				</li>
				<li>
					<div class='detectDiv'>
						设置
						<p class='textPradus'>甲方输入签名</p>
						<span>为</span>
						<span>显示输入</span>
						<p class='noTextPradus'></p>
					</div>
				</li>
				<li>
					<div class='detectDiv'>
						设置
						<p class='textPradus'>乙方输入签名</p>
						<span>为</span>
						<span>显示输入</span>
						<p class='noTextPradus'></p>
					</div>
				</li>
				<li>
					<div class='controlDiv'>
						<div class='ctTop'>
							<span>如果</span>
							<div class='operaDiv2'>
								<p class='textPradus' style='margin-left:0;'>甲方签名</p>
								<el-select value='1' placeholder="" style='width:60px;margin-left:8px;' :disabled='isLook'>
									<el-option
									label="="
									value="1">
									</el-option>
								</el-select>
								<p class='textPradus'>甲方输入签名</p>
							</div>
							<el-select value='1' placeholder="" style='width:60px;margin-left:8px;' :disabled='isLook'>
								<el-option
								label="且"
								value="1">
								</el-option>
							</el-select>
							<div class='operaDiv2'>
								<p class='textPradus' style='margin-left:0;'>乙方签名</p>
								<el-select value='1' placeholder="" style='width:60px;margin-left:8px;' :disabled='isLook'>
									<el-option
									label="="
									value="1">
									</el-option>
								</el-select>
								<p class='textPradus'>乙方输入签名</p>
							</div>
							<el-select value='1' placeholder="" style='width:60px;margin-left:8px;' :disabled='isLook'>
								<el-option
								label="="
								value="1">
								</el-option>
							</el-select>
							<div class='operaDiv2'>
								<el-select value='1' placeholder="" style='width:60px;margin-left:8px;' :disabled='isLook'>
									<el-option
									label="真"
									value="1">
									</el-option>
								</el-select>
							</div>
						</div>
						<div class='ctCenter'>
							<p class='ctCenterP'></p>
							<div class='ctCenterCon'>
								<div class='listCodeDiv'>
									生效
								</div>
							</div>
						</div>
						<div class='ctBottom'></div>
					</div>
				</li>
				<li>
					<div class='funDiv2'>
						返回
						<p class='textPradus'>合同生效</p>
					</div>
				</li>
			</ul>
		</li>
		<li v-if='codeType === "code57"'>
			<div class='funDiv'>
				<div class='iconDiv'>
					<img src="./img/c03.png" alt="">
				</div>
				<div class='funDivCon'>
					<span>定义函数</span>
					<p class='textPradus'>投资人投资请求</p>
				</div>
			</div>
			<ul class='assemblyUl assemblyUlSon'>
				<li>
					<div class='funDiv2'>
						筹资人筹资请求
						<p class='textPradus'>注资期限</p>
					</div>
				</li>
				<li>
					<div class='detectDiv'>
						设置
						<p class='textPradus'>注资金额</p>
						<span>为</span>
						<draggable
						v-model='jsonObj.capitalInjectionAmount'
						class='draggableSingle'
						element="div"
						v-bind="options2"
						id='capitalInjectionAmount'
						@add.stop="addDraggable($event)"
						>
							<p><template v-if='jsonObj.capitalInjectionAmount.length > 0'>{{jsonObj.capitalInjectionAmount[0].label}}</template></p>
						</draggable>
					</div>
				</li>
				<li>
					<div class='funDiv'>
						<div class='iconDiv'>
							<img src="./img/c03.png" alt="">
						</div>
						<div class='funDivCon'>
							<span>定义函数</span>
							<p class='textPradus'>注资期限</p>
						</div>
					</div>
					<ul class='assemblyUl assemblyUlSon'>
						<li>
							<div class='funDiv2'>
								筹资人筹资请求
								<p class='textPradus'>违约金</p>
							</div>
						</li>
						<li>
							<div class='detectDiv'>
								设置
								<p class='textPradus'>注资次数</p>
								<span>为</span>
								<draggable
									v-model='jsonObj.capitalInjectionsNumber'
									class='draggableSingle'
									element="div"
									v-bind="options2"
									id='capitalInjectionsNumber'
									@add.stop="addDraggable($event)"
									>
										<p><template v-if='jsonObj.capitalInjectionsNumber.length > 0'>{{jsonObj.capitalInjectionsNumber[0].label}}</template></p>
									</draggable>
							</div>
						</li>
						<li>
							<div class='detectDiv'>
								设置
								<p class='textPradus'>滞纳金</p>
								<span>为</span>
								<draggable
								v-model='jsonObj.lateFeeSet[0]'
								class='draggableSingle'
								element="div"
								v-bind="options2"
								id='lateFeeSet_0'
								@add.stop="addDraggable($event)"
								>
									<p><template v-if='jsonObj.lateFeeSet[0].length > 0'>{{jsonObj.lateFeeSet[0][0].label}}</template></p>
								</draggable>
								<el-select v-model="jsonObj.lateFeeOperator" placeholder="" style='width:60px;margin-left:8px;' :disabled='isLook'>
									<el-option
									v-for="item in operaOptions1"
									:key="item.value"
									:label="item.label"
									:value="item.value">
									</el-option>
								</el-select>
								<draggable
								v-model='jsonObj.lateFeeSet[1]'
								class='draggableSingle'
								element="div"
								v-bind="options2"
								id='lateFeeSet_1'
								@add.stop="addDraggable($event)"
								>
									<p><template v-if='jsonObj.lateFeeSet[1].length > 0'>{{jsonObj.lateFeeSet[1][0].label}}</template></p>
								</draggable>
							</div>
						</li>
						<li>
							<div class='detectDiv'>
								设置  显示输入
								<p class='textPradus'>注资期限</p>
								<span>为</span>
								<p class='noTextPradus'></p>
							</div>
						</li>
						<li>
							<div  class='eventDiv'>
								<div class='iconDiv'>
									<img src="./img/c02.png" alt="">
								</div>
								<div class='eventDivCon' style='width:260px'>
									<span>当</span>
									<span>日期</span>
									<p class='textPradus'>0</p>
									<span style='margin-left:10px;'>到</span>
									<p class='textPradus'>7</p>
								</div>
							</div>
							<ul class='assemblyUl assemblyUlSon'>
								<li>
									<div class='controlDiv'>
										<div class='ctTop'>
											<span>如果</span>
											<div class='operaDiv2'>
												<p class='textPradus'>合同生效</p>
											</div>
										</div>
										<div class='ctCenter'>
											<p class='ctCenterP'></p>
											<div class='ctCenterCon'>
												<div class='funDiv2'>
													<draggable
													v-model='jsonObj.executionTime'
													class='draggableSingle'
													element="div"
													v-bind="options2"
													id='executionTime'
													@add.stop="addDraggable($event)"
													>
														<p><template v-if='jsonObj.executionTime.length > 0'>{{jsonObj.executionTime[0].label}}</template></p>
													</draggable>
													<span>日 执行</span>
													<draggable
													v-model='jsonObj.executionPay'
													class='draggableSingle'
													element="div"
													v-bind="options2"
													id='executionPay'
													@add.stop="addDraggable($event)"
													>
														<p><template v-if='jsonObj.executionPay.length > 0'>{{jsonObj.executionPay[0].label}}</template></p>
													</draggable>
												</div>
											</div>
										</div>
										<div class='ctBottom'></div>
									</div>
								</li>
							</ul>
						</li>
						<li>
							<div  class='eventDiv'>
								<div class='iconDiv'>
									<img src="./img/c02.png" alt="">
								</div>
								<div class='eventDivCon' style='width:260px'>
									<span>当</span>
									<span>日期</span>
									<p class='textPradus'>8</p>
									<span style='margin-left:10px;'>到</span>
									<p class='textPradus'>30</p>
								</div>
							</div>
							<ul class='assemblyUl assemblyUlSon'>
								<li>
									<div class='controlDiv'>
										<div class='ctTop'>
											<span>如果</span>
											<div class='operaDiv2'>
												<p class='textPradus'>合同生效</p>
											</div>
										</div>
										<div class='ctCenter'>
											<p class='ctCenterP'></p>
											<div class='ctCenterCon'>
												<div class='funDiv2'>
													每
													<el-select v-model="jsonObj.conditionTwo[0]" placeholder="" style='width:60px;margin-left:8px;' :disabled='isLook'>
														<el-option
														v-for="item in operaOptions3"
														:key="item.value"
														:label="item.label"
														:value="item.value">
														</el-option>
													</el-select>
													<draggable
													v-model='jsonObj.conditionTwo[1]'
													class='draggableSingle'
													element="div"
													v-bind="options2"
													id='conditionTwo_1'
													@add.stop="addDraggable($event)"
													>
														<p><template v-if='jsonObj.conditionTwo[1].length > 0'>{{jsonObj.conditionTwo[1][0].label}}</template></p>
													</draggable>
													<el-select v-model="jsonObj.conditionTwo[2]" placeholder="" style='width:60px;margin-left:8px;' :disabled='isLook'>
														<el-option
														v-for="item in operaOptions4"
														:key="item.value"
														:label="item.label"
														:value="item.value">
														</el-option>
													</el-select>
													<span>支付</span>
													<draggable
													v-model='jsonObj.conditionTwo[3]'
													class='draggableSingle'
													element="div"
													v-bind="options2"
													id='conditionTwo_3'
													@add.stop="addDraggable($event)"
													>
														<p><template v-if='jsonObj.conditionTwo[3].length > 0'>{{jsonObj.conditionTwo[3][0].label}}</template></p>
													</draggable>
												</div>
											</div>
										</div>
										<div class='ctBottom'></div>
									</div>
								</li>
							</ul>
						</li>
						<li>
							<div  class='eventDiv'>
								<div class='iconDiv'>
									<img src="./img/c02.png" alt="">
								</div>
								<div class='eventDivCon' style='width:260px'>
									<span>当</span>
									<span>日期</span>
									<el-select value="1" readonly placeholder="" style='width:60px;margin-left:8px;' :disabled='isLook'>
										<el-option
										label="大于"
										value="1">
										</el-option>
									</el-select>
									<p class='textPradus'>30</p>
								</div>
							</div>
							<ul class='assemblyUl assemblyUlSon'>
								<li>
									<div class='controlDiv'>
										<div class='ctTop'>
											<span>如果</span>
											<div class='operaDiv2'>
												<p class='textPradus'>合同生效</p>
											</div>
										</div>
										<div class='ctCenter'>
											<p class='ctCenterP'></p>
											<div class='ctCenterCon'>
												<div class='listCodeDiv'>
													解除合同
												</div>
												<br>
												<div class='actionDiv mt10'>
													<span>违约</span>
													<span>设置</span>
													<p class='textPradus'>违约金</p>
													<span>为</span>
													<p class='textPradus'>违约金</p>
												</div>
											</div>
										</div>
										<div class='ctBottom'></div>
									</div>
								</li>
							</ul>
						</li>
						<li>
							<div class='funDiv'>
								<div class='iconDiv'>
									<img src="./img/c03.png" alt="">
								</div>
								<div class='funDivCon'>
									<span>定义函数</span>
									<p class='textPradus'>违约金</p>
								</div>
							</div>
							<ul class='assemblyUl assemblyUlSon'>
								<li>
									<div class='funDiv2'>
										筹资人筹资请求
										<p class='textPradus'>注资金额</p>
									</div>
								</li>
								<li>
									<div class='detectDiv'>
										设置
										<p class='textPradus'>违约金</p>
										<span>为</span>
										<draggable
										v-model='jsonObj.liquidatedDamagesSet2[0]'
										class='draggableSingle'
										element="div"
										v-bind="options2"
										id='liquidatedDamagesSet2_0'
										@add.stop="addDraggable($event)"
										>
											<p><template v-if='jsonObj.liquidatedDamagesSet2[0].length > 0'>{{jsonObj.liquidatedDamagesSet2[0][0].label}}</template></p>
										</draggable>
										<el-select v-model="jsonObj.liquidatedOperator2" placeholder="" style='width:60px;margin-left:8px;' :disabled='isLook'>
											<el-option
											v-for="item in operaOptions1"
											:key="item.value"
											:label="item.label"
											:value="item.value">
											</el-option>
										</el-select>
										<draggable
										v-model='jsonObj.liquidatedDamagesSet2[1]'
										class='draggableSingle'
										element="div"
										v-bind="options2"
										id='liquidatedDamagesSet2_1'
										@add.stop="addDraggable($event)"
										>
											<p><template v-if='jsonObj.liquidatedDamagesSet2[1].length > 0'>{{jsonObj.liquidatedDamagesSet2[1][0].label}}</template></p>
										</draggable>
									</div>
								</li>
								<li>
									<div class='funDiv2'>
										返回
										<p class='textPradus'>违约金</p>
									</div>
								</li>
							</ul>
						</li>
						<li>
							<div class='funDiv2'>
								返回
								<p class='textPradus'>注资期限</p>
							</div>
						</li>
					</ul>
				</li>
				<li>
					<div class='funDiv2'>
						返回
						<p class='textPradus'>投资人投资请求</p>
					</div>
				</li>
			</ul>
		</li>
	</ul>
</template>

<script>
import draggable from 'vuedraggable';
export default {
	name: 'editorComment',
	// 流程数据，是否可编辑
	props: ['codeType', 'isLook', 'jsonData'],
	data () {
		return {
			// 组件
			options2: {
				animation: 300,
				group: {name: 'people1', pull: ''},
				sort: false
			},
			// 代码区域
			operaOptions1: [
				{
					label: '+',
					value: 1
				},
				{
					label: '-',
					value: 2
				},
				{
					label: '*',
					value: 3
				},
				{
					label: '/',
					value: 4
				}
			],
			operaOptions2: [
				{
					label: '增加',
					value: 1
				},
				{
					label: '减少',
					value: 2
				}
			],
			operaOptions3: [
				{
					label: '加',
					value: 1
				},
				{
					label: '减',
					value: 2
				}
			],
			operaOptions4: [
				{
					label: '年',
					value: 1
				},
				{
					label: '月',
					value: 2
				},
				{
					label: '日',
					value: 3
				},
				{
					label: '小时',
					value: 4
				},
				{
					label: '分钟',
					value: 5
				},
				{
					label: '秒',
					value: 6
				}
			],
			operaOptions7: [
				{
					label: '=',
					value: 1
				},
				{
					label: '≠',
					value: 2
				},
				{
					label: '<',
					value: 3
				},
				{
					label: '≤',
					value: 4
				},
				{
					label: '>',
					value: 5
				},
				{
					label: '≥',
					value: 6
				}
			],
			jsonObj: {}
		};
	},
	inject: ['reload'],
	components: {
		draggable
	},
	created () {
	},
	methods: {
		// 添加回调
		addDraggable (evt) {
			let id = evt.target.id;
			// 每一个拖拽点的值替换
			let itemRrr = [];
			let code = '';
			if (id.indexOf('_') !== -1) {
				let item = id.split('_');
				itemRrr = this.jsonObj[item[0]][item[1]];
			} else {
				itemRrr = this.jsonObj[id];
			}
			if (itemRrr.length > 0) {
				code = itemRrr[0].code;
			}
			// 获取拖拽框的值
			let arr = [];
			if (code === 'fun' || code === 'variable') {
				if (code === 'variable' && !itemRrr[0].value) {
					this.$message.warning('请先选择变量再拖拽');
				} else {
					arr.push(JSON.parse(JSON.stringify(itemRrr[0])));
				}
			} else if (code === 'opera1' || code === 'opera2' || code === 'opera3' || code === 'opera6' || code === 'opera7' || code === 'opera9' || code === 'opera10') {
				let valueArr = itemRrr[0].valueArr;
				// 防止拖拽到组件容器的下方
				if (!valueArr && itemRrr.length > 1) {
					valueArr = itemRrr[1].valueArr;
					code = itemRrr[1].code;
				}
				let value = '';
				// 运算1
				if (code === 'opera1') {
					if (valueArr[0] === undefined || valueArr[1] === '' || valueArr[2] === undefined) {
						this.$message.warning('请先给运算组件赋值');
					} else {
						if (valueArr[1] === 4 && valueArr[2] === 0) {
							this.$message.warning('除法运算时除数不能为0');
						} else {
							if (valueArr[1] === 1) {
								value = valueArr[0] + valueArr[2];
							} else if (valueArr[1] === 2) {
								value = valueArr[0] - valueArr[2];
							} else if (valueArr[1] === 3) {
								value = valueArr[0] * valueArr[2];
							} else if (valueArr[1] === 4) {
								value = valueArr[0] / valueArr[2];
							} else if (valueArr[1] === 5) {
								value = valueArr[0] += valueArr[2];
							}
							arr.push({
								code: code,
								label: value.toString(),
								value: value.toString()
							});
						}
					}
				} else if (code === 'opera2') {
					if (valueArr[0] === undefined || valueArr[1] === undefined) {
						this.$message.warning('请先给运算组件赋值');
					} else {
						value = Math.pow(valueArr[0], valueArr[1]);
						arr.push({
							code: code,
							label: value.toString(),
							value: value.toString()
						});
					}
				} else if (code === 'opera3') {
					if (valueArr[0] === undefined || valueArr[1] === undefined) {
						this.$message.warning('请先给运算组件赋值');
					} else {
						value = parseInt(Math.random() * (valueArr[0] - valueArr[1] + 1) + valueArr[1], 10);
						arr.push({
							code: code,
							label: value.toString(),
							value: value.toString()
						});
					}
				} else if (code === 'opera6') {
					if (valueArr[0] === '' || valueArr[1] === undefined) {
						this.$message.warning('请先给运算组件赋值');
					} else {
						if (valueArr[0] === 1) {
							value = Math.round(valueArr[1]);
						} else if (valueArr[0] === 2) {
							value = Math.ceil(valueArr[1]);
						} else if (valueArr[0] === 3) {
							value = Math.floor(valueArr[1]);
						}
						arr.push({
							code: code,
							label: value.toString(),
							value: value.toString()
						});
					}
				} else if (code === 'opera7') {
					if (valueArr[0] === '') {
						this.$message.warning('请先给运算组件赋值');
					} else {
						value = valueArr[0];
						arr.push({
							code: code,
							label: value.toString(),
							value: value.toString()
						});
					}
				} else if (code === 'opera9') {
					if (valueArr[0] === '' || valueArr[1] === '') {
						this.$message.warning('请先给运算组件赋值');
					} else {
						let _arr = valueArr[0].split('');
						if (valueArr[1] === 1) {
							value = _arr.join('，');
						} else if (valueArr[1] === 2) {
							value = _arr.join(' ');
						} else if (valueArr[1] === 3) {
							value = _arr.join('-');
						} else if (valueArr[1] === 4) {
							value = _arr.join('.');
						} else if (valueArr[1] === 5) {
							value = _arr.join(';');
						}
						arr.push({
							code: code,
							label: value.toString(),
							value: value.toString()
						});
					}
				} else if (code === 'opera10') {
					if (valueArr[0] === '') {
						this.$message.warning('请先给运算组件赋值');
					} else {
						value = valueArr[0].length;
						arr.push({
							code: code,
							label: value.toString(),
							value: value.toString()
						});
					}
				}
			} else {
				if (itemRrr.length > 1) {
					arr.push(itemRrr[1]);
				}
				this.$message.warning('该组件不符合语法类型');
			}
			// 赋值给特定的区域
			if (id.indexOf('_') !== -1) {
				let item = id.split('_');
				this.$set(this.jsonObj[item[0]], item[1], arr);
			} else {
				this.$set(this.jsonObj, id, arr);
			}
		}
	},
	watch: {
		jsonData: {
			handler () {
				if (this.jsonData) {
					this.jsonObj = JSON.parse(this.jsonData);
				}
			},
			deep: true,
			immediate: true
		},
		// 预览
		isLook: {
			handler () {
				if (this.isLook) {
					this.$set(this.options2.group, 'name', 'null');
				} else {
					this.$set(this.options2.group, 'name', 'people1');
				}
			},
			deep: true,
			immediate: true
		}
	}
};
</script>

<style lang="scss" scoped>
// 拖拽组件
.assemblyUl{
	width: 100%;
	height: 100%;
	margin-top: 0;
	overflow-y: auto;
	font-size: 14px;
	position: relative;
	>li{
		margin-bottom:16px;
		/deep/ .el-select{
			width: 80px;
			margin-right: 5px;
		}
		/deep/ .el-date-editor{
			width: 88px;
			margin-right: 5px;
			.el-input__prefix, .el-input__suffix{
				display: none;
			}
		}
		/deep/ .el-input__inner{
			height: 30px;
			line-height: 30px;
			color: #222222;
			font-size: 13px;
			padding: 0 6px;
			border: 0;
		}
		/deep/ .el-input-number{
			width: 50px;
			margin: 0 8px;
		}
		/deep/ .el-input-number{
			.el-input__inner{
				border-radius: 20px;
				color: #200000;
			}
		}
		/deep/ .el-input__inner:focus{
			border-color: transparent;
		}
		.diamondDiv1{
			background: url('./img/diamond1.png') no-repeat no-repeat;
			height:30px;
			line-height: 30px;
			background-size: 100% 100%;
			display: inline-block;
			vertical-align: middle;
			margin-left: 8px;
			position: relative;
			top: -1px;
			width:84px;
			/deep/ .el-input{
				width: 64px;
				margin-left: 10px;
			}
		}
		.textPradus{
			height: 30px;
			line-height: 30px;
			background: #FFFFFF;
			border-radius: 15px;
			padding: 0 16px;
			text-align: center;
			color: #222222;
			display: inline-block;
			margin-left: 8px;
		}
		.noTextPradus{
			height: 30px;
			background: #dddddd;
			border-radius: 15px;
			display: inline-block;
			margin-left: 8px;
			width: 102px;
			vertical-align: bottom;
			margin-bottom: 5px;
		}
		.inputPradus{
			width: 88px;
			margin-left: 5px;
			/deep/ .el-input__inner{
				border-radius: 20px;
				color: #200000;
				text-align: center;
			}
		}
		.draggableSingle{
			display: inline-block;
			overflow: hidden;
			height: 40px;
			line-height: 40px;
			vertical-align: bottom;
			p{
				height: 30px;
				background: #ffffff;
				border-radius: 15px;
				display: inline-block;
				margin-left: 8px;
				min-width: 102px;
				vertical-align: bottom;
				margin-bottom: 5px;
				color: #222222;
				line-height: 30px;
				text-align: center;
				padding: 0 15px;
			}
		}
	}
	>li:last-child{
		margin-bottom:0;
	}
}
.assemblyUl{
	.isStartDragActive{
		margin-bottom: 8px;
		.assemblyUlSon{
			min-height: 8px;
		}
	}
}
.assemblyUlSon{
	padding-left: 40px;
	>li:first-child{
		margin-top: 10px;
	}
}
.noScroll::-webkit-scrollbar{
	width: 0;
	height: 0;
}
// 事件
.eventDiv{
	position: relative;
	padding: 6px 0;
	.eventDivCon{
		height: 36px;
		line-height: 36px;
		background: #126EFD;
		border-radius: 18px;
		margin-left: 24px;
		padding-left: 24px;
		position: relative;
		span{
			padding-right: 5px;
		}
		.deleteIcon{
			position: absolute;
			top: 10px;
			right: 5px;
			cursor: pointer;
		}
	}
	.iconDiv{
		width: 48px;
		height: 48px;
		background: #126EFD;
		border-radius: 50%;
		text-align: center;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		img{
			height: 22px;
			margin-top: 13px;
		}
	}
	.eventRun{
		font-size: 15px;
		img{
			height: 28px;
			width: 28px;
			margin-top: 10px;
		}
	}
}
.eventDiv2{
	padding: 0;
	.eventDivCon{
		border-radius: 0 18px 18px 0;
		margin-left: 0;
		padding-left: 18px;
	}
}
// 控制
.controlDiv{
	.ctTop{
		height: 50px;
		background: #01A2F3;
		border-radius: 0px 100px 100px 0px;
		line-height: 50px;
		padding: 0 24px 0 20px;
		width: auto;
		display: inline-block;
	}
	.ctTop2{
		width: 164px;
		height: 40px;
		line-height: 40px;
	}
	.ctCenter{
		min-height: 30px;
		display: flex;
		.ctCenterP{
			width: 20px;
			background: #01A2F3;
		}
		.ctCenterCon{
			flex-grow: 1;
			padding:10px
		}
	}
	.ctBottom{
		width: 143px;
		height: 24px;
		background: #01A2F3;
		border-radius: 0px 100px 100px 0px;
	}
	.controlDivMin{
		width: 114px;
		height: 40px;
		line-height: 40px;
		background: #01A2F3;
		border-radius: 0px 100px 100px 0px;
		padding-left: 20px;
	}
}
// 动作
.actionDiv{
	display: inline-block;
	min-width: 80px;
	height: 40px;
	line-height: 40px;
	background: #01B08D;
	border-radius: 0px 20px 20px 0px;
	padding: 0 24px 0 14px;
	span{
		margin-left: 8px;
	}
}
// 侦测
.detectDiv{
	display: inline-block;
	min-width: 80px;
	height: 40px;
	line-height: 40px;
	background: #3EB15D;
	border-radius: 0px 20px 20px 0px;
	padding: 0 24px 0 14px;
	span{
		margin-left: 8px;
	}
}
// 运算
.operaDiv{
	display: inline-block;
	height: 40px;
	line-height: 40px;
	background: #64B545;
	border-radius: 20px;
	padding: 0 24px 0 14px;
	span{
		margin-left: 8px;
	}
}
.operaDiv2{
	background: url('./img/diamond2.png') no-repeat no-repeat;
	height:40px;
	line-height: 40px;
	background-size: 100% 100%;
	display: inline-block;
	padding: 0 24px 0 14px;
}
// 变量
.variableDiv{
	display: inline-block;
	height: 40px;
	background: #DCB404;
	border-radius: 0px 20px 20px 0px;
	line-height: 40px;
	padding: 0 24px 0 14px;
}
// 函数
.funDiv{
	position: relative;
	padding: 6px 0;
	.funDivCon{
		display: inline-block;
		height: 36px;
		line-height: 36px;
		background: #DE911D;
		border-radius: 18px;
		margin-left: 24px;
		padding: 0 24px;
		span{
			padding-right: 5px;
		}
	}
	.iconDiv{
		width: 48px;
		height: 48px;
		background: #DE911D;
		border-radius: 50%;
		text-align: center;
		position: absolute;
		top: 0;
		left: 0;
		img{
			height: 20px;
			width: 20px;
			margin-top: 14px;
		}
	}
}
.funDiv2{
	display: inline-block;
	height: 40px;
	line-height: 40px;
	background: #DE911D;
	border-radius: 0px 20px 20px 0px;
	padding: 0 24px 0 14px;
}
.funDiv3{
	display: inline-block;
	height: 40px;
	line-height: 40px;
	height: 40px;
	background: #DE911D;
	border-radius: 20px;
	text-align: center;
	padding: 0 30px;
	min-width: 90px;
}
// 列表
.listCodeDiv{
	display: inline-block;
	min-width: 80px;
	height: 40px;
	line-height: 40px;
	background: #CF503D;
	border-radius: 0px 20px 20px 0px;
	padding: 0 24px 0 14px;
	span{
		margin-left: 8px;
	}
}
</style>
