<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="table-form">
		<div class="img-a" v-show="form.pageState == 20">
		</div>
		<table class="demo-table">
			<tr class="noborder">
				<td colspan="16" class="f26">
					差旅费报销单
				</td>
			</tr>
			<tr class="noborder">
				<td colspan="3" class="noborder f">
					部门
				</td>
				<td colspan="3" class="noborder">
					<template v-if="isSaveType === 'isSave'">
						<input maxlength="20" type="text" v-model="form.input1" placeholder="">
					</template>
					<template v-else>
						{{form.input1 || ''}}
					</template>
				</td>
				<td colspan="2" class="noborder">
					日期：
				</td>
				<td colspan="3" class="noborder">
					<el-date-picker
						size="small"
						v-model="form.makeTimes"
						type="date"
						placeholder="请选择日期"
						format="yyyy 年 MM 月 dd 日"
						value-format="yyyy-MM-dd"
						>
					</el-date-picker>
				</td>
			</tr>
			<tr class="bordertop" style="border-bottom: 1px solid #000" >
				<td colspan="3" >
					出差人
				</td>
				<td colspan="5" >
					<template v-if="isSaveType === 'isSave'">
						<input maxlength="20" type="text" v-model="form.input2" placeholder="">
					</template>
					<template v-else>
						{{form.input2 || ''}}
					</template>
				</td>
				<td colspan="3" >
					出差事由
				</td>
				<td colspan="5" >
					<template v-if="isSaveType === 'isSave'">
						<input maxlength="20" type="text" v-model="form.input3" placeholder="">
					</template>
					<template v-else>
						{{form.input3 || ''}}
					</template>
				</td>
			</tr>
			<tr class="bordertop" style="border-bottom: 1px solid #000" >
				<td colspan="4" >
					出发
				</td>
				<td colspan="4" >
					到达
				</td>
				<td colspan="1" rowspan="2" >
					交通工具
				</td>
				<td colspan="2" >
					交通费
				</td>
				<td colspan="2" >
					出差补贴
				</td>
				<td colspan="3" >
					其他费用
				</td>
			</tr>
			<tr class="bordertop" style="border-bottom: 1px solid #000" >
				<td colspan="1" >
					月
				</td>
				<td colspan="1" >
					日
				</td>
				<td colspan="1" >
					时
				</td>
				<td colspan="1" >
					地点
				</td>
				<td colspan="1" >
					月
				</td>
				<td colspan="1" >
					日
				</td>
				<td colspan="1" >
					时
				</td>
				<td colspan="1" >
					地点
				</td>
				<td colspan="1" >
					单据张数
				</td>
				<td colspan="1" >
					金额
				</td>
				<td colspan="1" >
					天数
				</td>
				<td colspan="1" >
					金额
				</td>
				<td colspan="1" >
					项目
				</td>
				<td colspan="1" >
					单据张数
				</td>
				<td colspan="1" >
					金额
				</td>
			</tr>
			<tr class="bordertop" style="border-bottom: 1px solid #000" >
				<td colspan="1" >
					<template v-if="isSaveType === 'isSave'">
						<input maxlength="20" type="text" v-model="form.input4" placeholder="">
					</template>
					<template v-else>
						{{form.input4 || ''}}
					</template>
				</td>
				<td colspan="1" >
					<template v-if="isSaveType === 'isSave'">
						<input maxlength="20" type="text" v-model="form.input5" placeholder="">
					</template>
					<template v-else>
						{{form.input5 || ''}}
					</template>
				</td>
				<td colspan="1" >
					<template v-if="isSaveType === 'isSave'">
						<input maxlength="20" type="text" v-model="form.input6" placeholder="">
					</template>
					<template v-else>
						{{form.input6 || ''}}
					</template>
				</td>
				<td colspan="1" >
					<template v-if="isSaveType === 'isSave'">
						<input maxlength="20" type="text" v-model="form.input7" placeholder="">
					</template>
					<template v-else>
						{{form.input7 || ''}}
					</template>
				</td>
				<td colspan="1" >
					<template v-if="isSaveType === 'isSave'">
						<input maxlength="20" type="text" v-model="form.input8" placeholder="">
					</template>
					<template v-else>
						{{form.input8 || ''}}
					</template>
				</td>
				<td colspan="1" >
					<template v-if="isSaveType === 'isSave'">
						<input maxlength="20" type="text" v-model="form.input9" placeholder="">
					</template>
					<template v-else>
						{{form.input9 || ''}}
					</template>
				</td>
				<td colspan="1" >
					<template v-if="isSaveType === 'isSave'">
						<input maxlength="20" type="text" v-model="form.input10" placeholder="">
					</template>
					<template v-else>
						{{form.input10 || ''}}
					</template>
				</td>
				<td colspan="1" >
					<template v-if="isSaveType === 'isSave'">
						<input maxlength="20" type="text" v-model="form.input11" placeholder="">
					</template>
					<template v-else>
						{{form.input11 || ''}}
					</template>
				</td>
				<td colspan="1" >
					<template v-if="isSaveType === 'isSave'">
						<input maxlength="20" type="text" v-model="form.input12" placeholder="">
					</template>
					<template v-else>
						{{form.input12 || ''}}
					</template>
				</td>
				<td colspan="1" >
					<template v-if="isSaveType === 'isSave'">
						<input maxlength="20" type="text" v-model="form.input13" placeholder="">
					</template>
					<template v-else>
						{{form.input13 || ''}}
					</template>
				</td>
				<td colspan="1" >
					<template v-if="isSaveType === 'isSave'">
						<input maxlength="20" type="text" v-model="form.input14" placeholder="">
					</template>
					<template v-else>
						{{form.input14 || ''}}
					</template>
				</td>
				<td colspan="1" >
					<template v-if="isSaveType === 'isSave'">
						<input maxlength="20" type="text" v-model="form.input15" placeholder="">
					</template>
					<template v-else>
						{{form.input15 || ''}}
					</template>
				</td>
				<td colspan="1" >
					<template v-if="isSaveType === 'isSave'">
						<input maxlength="20" type="text" v-model="form.input16" placeholder="">
					</template>
					<template v-else>
						{{form.input16 || ''}}
					</template>
				</td>
				<td colspan="1" >
					住宿费
				</td>
				<td colspan="1" >
					<template v-if="isSaveType === 'isSave'">
						<input maxlength="20" type="text" v-model="form.input17" placeholder="">
					</template>
					<template v-else>
						{{form.input17 || ''}}
					</template>
				</td>
				<td colspan="1" >
					<template v-if="isSaveType === 'isSave'">
						<input maxlength="20" type="text" v-model="form.input18" placeholder="">
					</template>
					<template v-else>
						{{form.input18 || ''}}
					</template>
				</td>
			</tr>
			<tr class="bordertop" style="border-bottom: 1px solid #000" >
				<td colspan="1" >
					<template v-if="isSaveType === 'isSave'">
						<input maxlength="20" type="text" v-model="form.input19" placeholder="">
					</template>
					<template v-else>
						{{form.input19 || ''}}
					</template>
				</td>
				<td colspan="1" >
					<template v-if="isSaveType === 'isSave'">
						<input maxlength="20" type="text" v-model="form.input20" placeholder="">
					</template>
					<template v-else>
						{{form.input20 || ''}}
					</template>
				</td>
				<td colspan="1" >
					<template v-if="isSaveType === 'isSave'">
						<input maxlength="20" type="text" v-model="form.input21" placeholder="">
					</template>
					<template v-else>
						{{form.input21 || ''}}
					</template>
				</td>
				<td colspan="1" >
					<template v-if="isSaveType === 'isSave'">
						<input maxlength="20" type="text" v-model="form.input22" placeholder="">
					</template>
					<template v-else>
						{{form.input22 || ''}}
					</template>
				</td>
				<td colspan="1" >
					<template v-if="isSaveType === 'isSave'">
						<input maxlength="20" type="text" v-model="form.input23" placeholder="">
					</template>
					<template v-else>
						{{form.input23 || ''}}
					</template>
				</td>
				<td colspan="1" >
					<template v-if="isSaveType === 'isSave'">
						<input maxlength="20" type="text" v-model="form.input24" placeholder="">
					</template>
					<template v-else>
						{{form.input24 || ''}}
					</template>
				</td>
				<td colspan="1" >
					<template v-if="isSaveType === 'isSave'">
						<input maxlength="20" type="text" v-model="form.input25" placeholder="">
					</template>
					<template v-else>
						{{form.input25 || ''}}
					</template>
				</td>
				<td colspan="1" >
					<template v-if="isSaveType === 'isSave'">
						<input maxlength="20" type="text" v-model="form.input26" placeholder="">
					</template>
					<template v-else>
						{{form.input26 || ''}}
					</template>
				</td>
				<td colspan="1" >
					<template v-if="isSaveType === 'isSave'">
						<input maxlength="20" type="text" v-model="form.input27" placeholder="">
					</template>
					<template v-else>
						{{form.input27 || ''}}
					</template>
				</td>
				<td colspan="1" >
					<template v-if="isSaveType === 'isSave'">
						<input maxlength="20" type="text" v-model="form.input28" placeholder="">
					</template>
					<template v-else>
						{{form.input28 || ''}}
					</template>
				</td>
				<td colspan="1" >
					<template v-if="isSaveType === 'isSave'">
						<input maxlength="20" type="text" v-model="form.input29" placeholder="">
					</template>
					<template v-else>
						{{form.input29 || ''}}
					</template>
				</td>
				<td colspan="1" >
					<template v-if="isSaveType === 'isSave'">
						<input maxlength="20" type="text" v-model="form.input30" placeholder="">
					</template>
					<template v-else>
						{{form.input30 || ''}}
					</template>
				</td>
				<td colspan="1" >
					<template v-if="isSaveType === 'isSave'">
						<input maxlength="20" type="text" v-model="form.input31" placeholder="">
					</template>
					<template v-else>
						{{form.input31 || ''}}
					</template>
				</td>
				<td colspan="1" >
					室内车费
				</td>
				<td colspan="1" >
					<template v-if="isSaveType === 'isSave'">
						<input maxlength="20" type="text" v-model="form.input32" placeholder="">
					</template>
					<template v-else>
						{{form.input32 || ''}}
					</template>
				</td>
				<td colspan="1" >
					<template v-if="isSaveType === 'isSave'">
							<input maxlength="20" type="text" v-model="form.input33" placeholder="">
					</template>
					<template v-else>
						{{form.input33 || ''}}
					</template>
				</td>
			</tr>
			<tr class="bordertop" style="border-bottom: 1px solid #000" >
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="2" >
					不买卧铺补贴
				</td>
				<td colspan="1" >
				</td>
			</tr>
			<tr class="bordertop" style="border-bottom: 1px solid #000" >
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="2" >
					其他
				</td>
				<td colspan="1" >
				</td>
			</tr>
			<tr class="bordertop" style="border-bottom: 1px solid #000" >
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="1" >
				</td>
				<td colspan="2" >
				</td>
				<td colspan="1" >
				</td>
			</tr>
			<tr class="bordertop" style="border-bottom: 1px solid #000" >
				<td colspan="13" ><p class="fl">报销总额人民币（大写）</p>
					<p class="fl">
						<template v-if="isSaveType === 'isSave'">
							<input maxlength="20" type="text" v-model="form.input34" placeholder="">
						</template>
						<template v-else>
							{{form.input34 || ''}}
						</template>
					</p>
				</td>
				<td colspan="3" >
					<p class="fl">小写合计¥</p>
						<p class="fl">
						<template v-if="isSaveType === 'isSave'">
							<input maxlength="20" type="text"  style="width:60px; margin-left:10px"  v-model="form.input35" placeholder="">
						</template>
						<template v-else>
							{{form.input35 || ''}}
						</template>
					</p>
				</td>
			</tr>
			<tr class="bordertop" style="border-bottom: 1px solid #000" >
				<td colspan="7" >
					预借差旅费¥
				</td>
				<td colspan="6" >
					不领金额¥
				</td>
				<td colspan="3" >
					退还金额¥
				</td>
			</tr>
		</table>
		<div class="clearfix bill-box3 mt30 noborder">
			<p class="fl noborder">填制：
				<template v-if="isSaveType === 'isSave'">
					<input type="text" style="width:150px" class="noborder" v-model="form.input36" name="" id="">
				</template>
				<template v-else>
					{{form.input36 || ''}}
				</template>
			</p>
			<p class="fl noborder">审核：
				<template v-if="isSaveType === 'isSave'">
					<input type="text" style="width:150px" class="noborder" v-model="form.input37" name="" id="">
				</template>
				<template v-else>
					{{form.input37 || ''}}
				</template>
			</p>
			<p class="fl noborder">出纳：
				<template v-if="isSaveType === 'isSave'">
					<input type="text" style="width:150px" class="noborder" v-model="form.input38" name="" id="">
				</template>
				<template v-else>
					{{form.input38 || ''}}
				</template>
			</p>
			<p class="fl noborder">会计：
				<template v-if="isSaveType === 'isSave'">
							<input type="text" style="width:150px" class="noborder" v-model="form.input39" name="" id="">
						</template>
						<template v-else>
							{{form.input39 || ''}}
						</template>
			</p>
		</div>
		<div class="clearfix bill-box4 mt30 noborder yusuan">
			<p class="fl noborder">预算项目：
				<!-- <input type="text" style="width:150px" class="noborder" v-model="form.input6" name="" id=""> -->
			</p>
		</div>
		<div class="clearfix bill-box4 mt30 noborder daxaingmu">
			<p class="fl noborder">大项目：
				<!-- <input type="text" style="width:150px" class="noborder" v-model="form.input6" name="" id=""> -->
			</p>
		</div>
	</div>
</template>

<script>
import { isObject, getRandom, convertPrice } from '_@/js/utils';
export default {
	name: '',
	data () {
		return {
			form: {
				enterprise: '',
				kuiji: '',
				shenheren: '',
				evectionUser: '',
				buzhuMoney: '',
				convertPrice: convertPrice,
				ccbtMoney: '',
				destinationChargesMoney: '',
				capitalTotalMoney: '',
				totalMoney: '',
				assumeDepartment: '',
				department: '',
				getRandom: getRandom,
				makeTimes: '',
				chunai: '',
				main: [
					{},
					{},
					{}
				]
			},
			OrgList: [],
			evectionArr: [],
			positionArr: [],
			isDisable: true
		};
	},
	props: ['tableData', 'isSave', 'formData', 'typeHandle', 'isSaveType'],
	watch: {
		isSave () {
			if (this.isSave) {
				// this.form.main = this.selectpurCodeContent;
				this.getPointData();
				this.$emit('sendForm', this.form);
			}
		},
		tableData () {
			if (this.tableData) {
			}
		},
		form: {
			handler (val, oldval) {
				if (this.form && this.form.main) {
					let aaa = 0;
					this.form.main.forEach(element => {
						let budgetMoney = parseFloat(element.jtfMoney || 0) + parseFloat(element.wfjtfMoney || 0) || '';
						console.log(budgetMoney);
						aaa += parseFloat(budgetMoney || 0);
					});
					console.log(aaa);
					aaa = aaa + parseFloat(this.form.destinationChargesMoney || 0) + parseFloat(this.form.ccbtMoney || 0) + parseFloat(this.form.buzhuMoney || 0);
					if (aaa <= 0) {
						this.form.totalMoney = '';
						this.form.capitalTotalMoney = '';
					} else {
						this.form.totalMoney = aaa;
						this.form.capitalTotalMoney = convertPrice(aaa);
					}
				}
			},
			deep: true
		},
		formData: {
			handler () {
				console.log(this.formData);
				if (this.formData) {
					if (this.formData === '') {
						// this.$nextTick(() => {
						// 	});
						// Object.assign(this.$data, this.$options.data());
						console.log(this.form);
						this.form = {
							main: [
								{},
								{},
								{},
								{}
							]
						};
						this.form.receiptNumber = this.form.receiptNumber || 'BX' + new Date().getTime();
						return false;
					} else {
						if (isObject(this.formData)) {
							this.form = this.formData;
							this.form.receiptNumber = this.form.receiptNumber || 'BX' + new Date().getTime();
						} else {
							this.form = JSON.parse(this.formData);
							this.form.receiptNumber = this.form.receiptNumber || 'BX' + new Date().getTime();
						}
					}
				} else {
					// Object.assign(this.$data, this.$options.data());
					this.form = {
						main: [
							{},
							{},
							{},
							{}
						]
					};
					this.form.receiptNumber = this.form.receiptNumber || 'BX' + new Date().getTime();
					return false;
				}
			},
			deep: true,
			immediate: true
		}
	},
	created () {
		this.getEnterPostion();
		var time = new Date();
		this.form.makeTimes = time;
	},
	methods: {
		_hasChPositon () {
			let departmentName = this.form.department;
			let array = this.positionArr;
			let json = '';
			for (let index = 0; index < array.length; index++) {
				const element = array[index];
				if (departmentName === element.departmentName) {
					console.log(element);
					json = JSON.parse(element.positionJson);
				}
			}
			console.log(json);
			this.evectionArr = json;
		},
		getEnterPostion () {
			this.$ajax({
				method: 'post',
				url: '/acEnterpriseType/findAcDepPosByEnterpriseByParam',
				params: {
					enterpriseName: '制造企业'
				}
			}).then(res => {
				if (res.success && res.data.length > 0) {
					this.positionArr = res.data;
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		/**
		 * @msg: 查询人员判定，岗位下啦
		 */
		Rules () {
			this.$ajax({
				method: 'post',
				url: '/acUserSectorPost/findFirstSectorListMap',
				params: {}
			}).then(res => {
				if (res.success) {
					this.OrgList = res.data;
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		/**
		 * @name: zhangln
		 * @msg: 点击设置审核点
		 */
		_handlePoint (point, name, span) {
			// this.getPointData();
			this.$emit('sendPoint', {
				'point': point,
				'name': name,
				'span': span
			});
		},
		getPointData () {
			this.form.pointObj = {};
			this.form.pointObj.point2 = this.form.makeTimes || ''; // 单据编号
			this.form.pointObj.point3 = this.form.department || '';
			this.form.pointObj.point4 = this.form.assumeDepartment || '';
			this.form.pointObj.point5 = this.form.evectionUser || '';
			this.form.pointObj.point6 = this.form.totalMoney || '';
			this.form.pointObj.point7 = this.form.destinationChargesMoney || '';
			this.form.pointObj.point8 = this.form.ccbtMoney || '';
			this.form.pointObj.point9 = this.form.buzhuMoney || '';
			this.form.pointObj.point21 = this.form.evectionUser || '';
			this.form.pointObj.point22 = this.form.kuiji || '';
			this.form.pointObj.point23 = this.form.shenheren || '';
			this.form.pointArr = {};
			this.form.pointArr.point10 = [];
			this.form.pointArr.point11 = [];
			this.form.pointArr.point12 = [];
			this.form.pointArr.point13 = [];
			this.form.pointArr.point14 = [];
			this.form.pointArr.point15 = [];
			this.form.pointArr.point16 = [];
			this.form.main.forEach((e, i) => {
				this.form.pointArr.point10.push(e.arriveSite || '');
				this.form.pointArr.point11.push(e.arriveTime || '');
				this.form.pointArr.point12.push(e.departSite || '');
				this.form.pointArr.point13.push(e.departTime || '');
				this.form.pointArr.point14.push(e.vehicle || '');
				this.form.pointArr.point15.push(e.jtfMoney || '');
				this.form.pointArr.point16.push(e.wfjtfMoney || '');
			});
			// console.log(this.form);
		},
		/**
		 * @name: zhangln
		 * @msg: 更新表单
		 */
		upDataForm () {
			console.log(this.tableData);
			this.$ajax({
				method: 'post',
				url: '/accountantPageRecord/userUpdatePageRecord',
				params: {
					recordId: this.tableData.id,
					pageState: 0, // 单据状态
					jsonString: JSON.stringify(this.form),
					deleted: 0
				}
			}).then(res => {
				if (res.success) {
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		/**
		 * @name: zhangln
		 * @msg: 保存单据
		 */
		saveForm () {
			this.$ajax({
				method: 'post',
				url: '/accountantPageRecord/insertAccountantPageRecord',
				params: {
					moldId: this.$route.params.moldId,
					chapterId: this.$route.query.chapterId,
					subtaskId: this.$route.query.subtaskId,
					taskId: this.$route.query.taskId,
					processId: '21',
					nodeId: 50,
					pageState: 0, // 单据状态
					jsonString: JSON.stringify(this.form),
					pageType: 'evectionApply'
				}
			}).then(res => {
				if (res.success) {
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		_onFocus (type) {
			this.$emit('sendInputType', type || 'noType');
		}
		// /**
		//  * @name: zhangln
		//  * @msg: 小写保留两位小数，变成大写
		//  */
		// _buMeny () {
		// 	this.form.aAudit = formatNumber(this.form.aAudit);
		// 	this.form.capMoney = convertPrice(this.form.aAudit);
		// }
	},
	mounted () {
	}
};
</script>

<style lang="scss" scoped>
.text-add{
	display: inline-block;
	padding: 0 10px;
	border: 1px salmon solid;
	color: salmon;
}
.table-form{
	width: 100%;
	position: relative;
}

.bill-box3{
	&>p{
		width: 20%;
		margin-left: 30px;
		font-size: 18px;
		color: #ffffff;
	}
}
.bill-box4{
	&>p{
		margin-left: 30px;
		font-size: 18px;
		color: #ffffff;
	}
}
.noborder{
	border: none;
	input{
		background: transparent;
	}
}
.yusuan{
	position: absolute;
	width: 150px;
	top: 44px;
    right: 110px;
}
.daxaingmu{
	position: absolute;
	width: 150px;
	top: 71px;
    right: 108px;
}
</style>
