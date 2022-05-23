
<template>
	<div class="stu">
		<!-- <pageTable ref="pageTable" :tableType="tableType" :tableJson="tableJson" :showInputMap="showInputMap"></pageTable> -->
		<table class="demo-table">
			<tr>
				<td>客户订单</td>
				<td>
					{{showInputMap.orgOrderCount}}
				</td>
				<td>当前产能</td>
				<td>
					{{showInputMap.surplusProduceCount}}
				</td>
			</tr>
			<tr>
				<td>库存物料</td>
				<td>
					{{showInputMap.totalMaterials}}
				</td>
				<td>库存电力</td>
				<td>
					{{showInputMap.totalElectricity}}
				</td>
			</tr>
			<tr>
				<td>库存碳汇</td>
				<td>
					{{showInputMap.totalCarbonSink}}
				</td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>生产数量</td>
				<td class="inputClass">
					<el-input-number controls-position="right" size="mini" :controls="false" v-model="showInputMap.produceCount" :precision="0" :step="1" :max="showInputMap.surplusProduceCount"></el-input-number>
				</td>
				<td></td>
				<td></td>
			</tr>
		</table>
		<div class="mt20 center">
			<el-button type="success" :disabled="isSaveData" @click="getPageJson()">
				{{!isSaveData ? '生产' : '已生产'}}
			</el-button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'my-course',
	data () {
		return {
			tableType: 'pagetable0901',
			tableJson: {},
			arrList: [],
			isSaveData: false,
			showInputMap: {
			}
		};
	},
	created () {
		this.getMaterials();
	},
	methods: {
		// 物料库存
		getMaterials () {
			this.$ajax({
				method: 'post',
				url: '/stOrgProduceRecord/findOrgProductionMaterialsInfoMap',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					clazzYearsPushId: this.$route.query.clazzYearsPushId || ''
				}
			}).then(res => {
				if (res.success) {
					if (res.data) {
						this.showInputMap = res.data;
						if (this.showInputMap.isProduce) {
							this.isSaveData = true;
						}
					} else {
					}
				}
			});
		},
		getPageJson () {
			if (this.showInputMap.produceCount > this.showInputMap.orgOrderCount) {
				this.$message({
					type: 'error',
					message: '生成数量不能大于订单数量'
				});
				return false;
			}
			// let json = this.$refs.pageTable.getpageTableJson();
			// console.log(json);
			this.$confirm(`是否生产${this.showInputMap.produceCount}`, '再次提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				center: true,
				type: 'warning'
			}).then(() => {
				this.$ajax({
					method: 'post',
					url: '/stOrgProduceRecord/orgMakeProduction',
					params: {
						moldId: this.$route.query.moldId || this.moldId || '',
						clazzYearsPushId: this.$route.query.clazzYearsPushId || '',
						subtaskId: this.$route.query.subtaskId || '',
						taskId: this.$route.query.taskId || '',
						industryId: this.$route.query.industryId || '',
						produceCount: this.showInputMap.produceCount || 0
					}
				}).then(res => {
					if (res.success) {
						this.$message({
							type: 'success',
							message: '生产成功'
						});
						this.getMaterials();
						this.$store.commit('getPropertyAllStatis', '');
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
	color: #FFFFFF;
}
</style>
