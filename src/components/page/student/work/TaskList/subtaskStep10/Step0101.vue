
<template>
	<div class="stu">
		<table class="demo-table">
			<tr>
				<td>订单数量 ( 个 )</td>
				<td>
					{{orderInfo.orderCount}}
				</td>
				<td>订单单价 ( 元 )</td>
				<td>
					{{orderInfo.unitPrice}}
				</td>
				<td>违约单价 ( 元 )</td>
				<td>
					{{orderInfo.unitPrice * 2}}
				</td>
			</tr>
			<tr>
				<td>库存数量 ( 个 )</td>
				<td>
					{{ProductionNum}}
				</td>
				<td></td>
				<td>
				</td>
				<td></td>
				<td>
				</td>
			</tr>
			<tr>
				<td>交付数量 ( 个 )</td>
				<td class="inputClass">
					<el-input-number controls-position="right" size="mini"
					@blur="violationFun()"
					:controls="false" v-model="orderInfo.deliverCount" :precision="0" :step="1" :max="ProductionNum"></el-input-number>
				</td>
				<td></td>
				<td>
				</td>
			</tr>
			<tr>
				<td>违约数量</td>
				<td>
					{{orderInfo.violationCount || 0}}
				</td>
				<td>违约罚款 ( 元 )</td>
				<td>
					{{(orderInfo.violationCount || 0) * orderInfo.unitPrice * 2}}
				</td>
				<td></td>
				<td>
				</td>
			</tr>
		</table>
		<div class="mt20 center">
			<el-button type="success" :disabled="isSaveData" @click="getPageJson()">
				{{!isSaveData ? '交付' : '已经交付'}}
			</el-button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'my-course',
	data () {
		return {
			tableType: 'pagetable1001',
			arrList: [],
			centerDialogVisible: false,
			isSaveData: false,
			orderInfo: {},
			Production: {},
			ProductionNum: 0,
			deliverCount: 0,
			conddds: '',
			// 控制class
			showInputMap: {

			},
			// 控制数据的
			fromInfo: {
			}
		};
	},
	created () {
		this.init();
	},
	methods: {
		// 获取订单数量
		init () {
			this.getOrder();
			this.getProduction();
		},
		getOrder () {
			this.$ajax({
				method: 'post',
				url: '/stClazzOrgYearsOrder/getStOrgDeliverRecord',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					clazzYearsPushId: this.$route.query.clazzYearsPushId || ''
				}
			}).then(res => {
				if (res.success) {
					if (res.data) {
						this.orderInfo = res.data;
						if (res.data.isDelivery === 1) {
							this.isSaveData = true;
						}
					}
				}
			});
		},
		getProduction () {
			this.$ajax({
				method: 'post',
				url: '/stOrgProduceRecord/getOrgProductionInfoMap',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					clazzYearsPushId: this.$route.query.clazzYearsPushId || ''
				}
			}).then(res => {
				if (res.success) {
					if (res.data) {
						this.ProductionNum = res.data;
					}
				}
			});
		},
		violationFun () {
			if (this.orderInfo.deliverCount > this.orderInfo.orderCount) { // 大于了订单数量
				this.$message({
					type: 'error',
					message: '交付数量不能大于订单数量'
				});
				this.orderInfo.deliverCount = 0;
				return;
			}
			this.orderInfo.violationCount = this.orderInfo.orderCount - this.orderInfo.deliverCount;
		},
		// 获取库存数量
		getPageJson () {
			let conddds = this.orderInfo.unitPrice * 2 * (this.orderInfo.orderCount - this.orderInfo.deliverCount);
			console.log(conddds);
			let msg = ``;
			if (conddds === 0) {
				msg = `交付数量为${this.orderInfo.deliverCount}`;
			} else {
				msg = `交付数量为${this.orderInfo.deliverCount},违约罚款为${conddds}元`;
			}
			this.$confirm(msg, '是否提交', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				center: true,
				type: 'warning'
			}).then(() => {
				this.$ajax({
					method: 'post',
					url: '/stClazzOrgYearsOrder/saveStOrgDeliverRecord',
					params: {
						moldId: this.$route.query.moldId || this.moldId || '',
						clazzYearsPushId: this.$route.query.clazzYearsPushId || '',
						subtaskId: this.$route.query.subtaskId || '',
						taskId: this.$route.query.taskId || '',
						industryId: this.$route.query.industryId || '',
						deliverCount: this.orderInfo.deliverCount || 0
					}
				}).then(res => {
					if (res.success) {
						this.$message({
							type: 'success',
							message: '交付成功'
						});
						this.init();
					} else {
						this.$message({
							type: 'error',
							message: res.message
						});
					}
				});
			}).catch(() => {});
		}
	}
};
</script>

<style lang="scss" scoped>
.demo-table tr td{
	color: #fff;
}
</style>
