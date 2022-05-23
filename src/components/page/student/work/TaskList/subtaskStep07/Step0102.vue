
<template>
	<div class="stu">
		<pageTable ref="pageTable" :tableType="tableType" :fromInfo="fromInfo" :showInputMap="showInputMap"></pageTable>
		<div class="mt20 center">
			<el-button type="success" :disabled="isSaveData" @click="getPageJson()">
				{{!isSaveData ? '保存' : '已经保存'}}
			</el-button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'my-course',
	data () {
		return {
			tableType: 'pagetable0702',
			arrList: [],
			showInputMap: {
				countMaterial: true
			},
			isSaveData: false,
			fromInfo: {
				countMaterial: '',
				unitMaterialValue: '',
				materialValue: '',
				ownCashAmount: '',
				unitMaterialEmission: ''
			}
		};
	},
	created () {
		this.init();
	},
	methods: {
		init () {
			this.$ajax({
				method: 'post',
				url: '/stOrgMaterialRecord/getStOrgMaterialRecord',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					clazzYearsPushId: this.$route.query.clazzYearsPushId || ''
				}
			}).then(res => {
				if (res.success) {
					if (res.data) {
						this.fromInfo = res.data;
					}
					if (res.data.countMaterial > 0) {
						this.isSaveData = true;
					} else {
						this.isSaveData = false;
					}
				}
			});
		},
		getPageJson () {
			let materialValue = this.fromInfo.countMaterial * this.fromInfo.unitMaterialValue;
			let gavematerialEmission = this.fromInfo.countMaterial * this.fromInfo.unitMaterialEmission;
			console.log(this.fromInfo.countMaterial);
			this.$confirm(`采购数量: ${this.fromInfo.countMaterial}( 个 ),采购金额：${materialValue}( 元 )`, '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				center: true,
				type: 'warning'
			}).then(res => {
				this.$ajax({
					method: 'post',
					url: '/stOrgMaterialRecord/saveStOrgMaterialRecord',
					params: {
						moldId: this.$route.query.moldId || this.moldId || '',
						clazzYearsPushId: this.$route.query.clazzYearsPushId || '',
						subtaskId: this.$route.query.subtaskId || '',
						taskId: this.$route.query.taskId || '',
						industryId: this.$route.query.industryId || '',
						countMaterial: this.fromInfo.countMaterial || '',
						materialValue: materialValue,
						materialEmission: gavematerialEmission
					}
				}).then(res => {
					if (res.success) {
						this.$store.commit('getPropertyTypeStatis', 'ownCashAmount');
						this.$confirm(`成功购买物料${this.fromInfo.countMaterial}包`, '成功', {
							confirmButtonText: '确定',
							center: true,
							showCancelButton: false,
							type: 'success'
						}).then(() => {

						}).catch(() => {
						});
						this.init();
					} else {
						this.$message({
							type: 'error',
							message: res.message
						});
					}
				});
			});
		}
	}
};
</script>

<style lang="scss" scoped>

</style>
