<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox mt30" :class="teacherCode">
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
		<table class="demo-table tables" :class="'bg' + tableindex "
		v-for="(tableItem, tableindex) in parameterList"
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
					<template v-if="item.fieldValue === '-' || teacherCode === 'student'">
						{{item.fieldValue}}
					</template>
					<template v-else>
						<input type="text" v-model="item.fieldValue">
					</template>
				</td>
			</tr>
		</table>
		<div class="mt20 center" v-if="teacherCode === 'teacher' && ParamsVisible">
			<el-button type="success" @click="getPageJson()">保存</el-button>
			<el-button type="success" @click="SaveParams()">提交</el-button>
		</div>
		<div class="mt20">
			&nbsp;
		</div>
	</div>
</template>

<script>
export default {
	name: '',
	data () {
		return {
			ParamsVisible: false,
			yearLeng: 0,
			ruleCodeMap: {
				// 碳配额占比（%）每年可以调，递减
				financial_carbon_rate: 'Diminishing',
				// 碳汇卖出定价（元/Kg）每年，递增
				carbon_sell_pricing: 'Increasing',
				// 超排罚款定价（元/Kg）递增
				super_row_penalty: 'Increasing',
				// 配额买入定价（元/Kg）递增
				quota_buy_penalty: 'Increasing',
				// 物料单价（元/包）每年，递增
				material_unit_price: 'Increasing',
				// 碳排放量（kg/包）每年，递减
				carbon_emissions: 'Diminishing',
				// 绿电占总电的比例（%）老师可以调整，递增
				green_elecrticity_rate: 'Increasing',
				// 绿电单价（元/度）递增
				green_elecrticity_unit_price: 'Increasing',
				// 绿电减排量（kg/度）递增
				green_elecrticity_reduce_emissions: 'Increasing',
				// 煤电单价（元/度）递增
				coal_unit_price: 'Increasing',
				// 煤电碳排放（kg/度）递增
				coal_elecrticity_emissions: 'Increasing',
				// 产品基准单价（元/个递增
				product_unit_price: 'Increasing'
			},
			parameterList: []
		};
	},
	watch: {
	},
	props: ['teacherCode', 'moldId'],
	created () {
		this.init();
		this.getMoldIsDefaultParams();
	},
	methods: {
		getMoldIsDefaultParams () {
			this.$ajax({
				method: 'post',
				url: '/stClazzReadySchedule/getStClazzReadySchedule',
				params: {
					moldId: this.$route.query.moldId || this.moldId || ''
				}
			}).then((res) => {
				if (res.success) {
					if (res.data) {
						if (res.data.parameterSuccess === 0) {
							this.ParamsVisible = true;
						} else {
							this.ParamsVisible = false;
						}
					} else {
						this.ParamsVisible = true;
					}
				} else {
				}
			}).catch((err) => {
				throw new Error(err);
			});
		},
		SaveParams () {
			this.$confirm(
				`是否提交，提交以后，不能修改`,
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
					url: '/stClazzReadySchedule/updateStClazzReadySchedule',
					params: {
						moldId: this.$route.query.moldId || this.moldId || '',
						parameterSuccess: 1
					}
				}).then(res => {
					if (res.success) {
						this.$emit('sendInIt');
						this.getMoldIsDefaultParams();
					} else {
					}
				}).catch(err => {
					throw new Error(err);
				});
				this.getPageJson();
			}).catch(() => {});
		},
		getPageJson () {
			let array = this.parameterList;

			for (let index = 0; index < array.length; index++) {
				const childFieldList = array[index].childFieldList;
				for (let c = 0; c < childFieldList.length; c++) {
					const yearsValuesList = childFieldList[c].yearsValuesList;
					for (let y = 0; y < yearsValuesList.length; y++) {
						// const year = yearsValuesList[y];

						if (this.ruleCodeMap[childFieldList.fieldCode]) { // 进入规则
							if (this.ruleCodeMap[childFieldList.fieldCode] === 'Diminishing') {
								// 递增

							}
						}
					}
				}
			}
			this.$ajax({
				method: 'post',
				url: '/stClazzProjectParameter/saveClazzProjectParameter',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					parameterJson: JSON.stringify(this.parameterList)
				}
			}).then(res => {
				if (res.success) {
					this.$message({
						message: res.message,
						type: 'success'
					});
				} else {
					this.$message({
						message: res.message,
						type: 'error'
					});
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		init () {
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
		}
	},
	mounted () {
	}
};
</script>

<style lang="scss" scoped>
.contentBox{
	width: 1000px;
	margin: 0 auto;
	margin-top: 30px;
	&.student{
		.demo-table{
			td{
				color: #fff;
			}
			input{
				color: #fff;
			}
		}
	}
	.demo-table{
		input{
			color: #373737;
		}
	}
	&.teacher{

		.bg0,.bg3,.bg6{
			.colors{
				background: #F2F7FF;
			}
		}
		.bg1,.bg4,.bg7{
			.colors{
				background: #F2FCFC;
			}
		}
		.bg2,.bg5,.bg8{
			.colors{
				background: #FAFFF5;
			}
		}
	}

}
</style>
