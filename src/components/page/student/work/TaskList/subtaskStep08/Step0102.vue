
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
			tableType: 'pagetableCertificate',
			arrList: [],
			showInputMap: {
			},
			isSaveData: false,
			echoInfo: {
				coalElectricityEmissions: '',
				coalUnitPrice: '',
				greenElectricityRate: '',
				greenElectricityReduceEmissions: '',
				greenElectricityUnitPrice: ''
			},
			OrgGreenMap: {},
			fromInfo: {
				certificateCount: '',
				greenElectricityRate: '',
				greenElectricityUnitPrice: '',
				greenElectricityReduceEmissions: '',
				coalUnitPrice: '',
				coalElectricityEmissions: '',
				greenElectricity: {
					electricityType: 'greenElectricity',
					purchaseCount: '',
					purchaseCost: '',
					carbonEmission: ''
				},
				coalPower: {
					electricityType: 'coalPower',
					purchaseCount: '',
					purchaseCost: '',
					carbonEmission: ''
				}
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
				url: '/stOrgElectricityPurchaseRecord/getStOrgGreenCertificateRecord',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					clazzYearsPushId: this.$route.query.clazzYearsPushId || ''
				}
			}).then(res => {
				if (res.success) {
					// 回显接受的数据
					this.fromInfo = res.data;
					// 处理提交的时候
					this.OrgGreenMap = res.data;
					if (this.fromInfo.certificateCount > 0) {
						this.isSaveData = true;
					}
				}
			});
		},
		getPageJson () {
			let arr = [];
			// 煤电
			let greenElectricity = {
				electricityType: 'greenElectricity',
				purchaseCount: 0,
				purchaseCost: 0,
				carbonEmission: 0
			};

			// 数量
			greenElectricity.purchaseCount = this.fromInfo.certificateCount * 1000;
			// 金融
			greenElectricity.purchaseCost = greenElectricity.purchaseCount * this.OrgGreenMap.greenElectricityUnitPrice;
			// 减排量
			greenElectricity.carbonEmission = 0 - (greenElectricity.purchaseCount * this.OrgGreenMap.greenElectricityReduceEmissions);
			// ======================================================================================
			let coalPower = {
				electricityType: 'coalPower',
				purchaseCount: 0,
				purchaseCost: 0,
				carbonEmission: 0
			};
			// 数量
			let totalNumber = greenElectricity.purchaseCount / this.fromInfo.greenElectricityRate * 100;
			coalPower.purchaseCount = totalNumber - greenElectricity.purchaseCount;
			// 金融
			coalPower.purchaseCost = coalPower.purchaseCount * this.OrgGreenMap.coalUnitPrice;
			// 减排量
			coalPower.carbonEmission = coalPower.purchaseCount * this.OrgGreenMap.coalElectricityEmissions;
			// 总价钱
			let totalCost = greenElectricity.purchaseCost + coalPower.purchaseCost;
			arr[0] = {
				...greenElectricity || {}
			};
			arr[1] = {
				...coalPower || {}
			};
			this.$confirm(`是否购买${this.fromInfo.certificateCount}个证书`, '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				center: true,
				type: 'warning'
			}).then(() => {
				this.$ajax({
					method: 'post',
					url: '/stOrgElectricityPurchaseRecord/saveStOrgElectricityPurchaseRecord',
					params: {
						moldId: this.$route.query.moldId || this.moldId || '',
						clazzYearsPushId: this.$route.query.clazzYearsPushId || '',
						subtaskId: this.$route.query.subtaskId || '',
						taskId: this.$route.query.taskId || '',
						industryId: this.$route.query.industryId || '',
						certificateCount: this.fromInfo.certificateCount,
						totalCost: totalCost,
						purchaseElectricityJson: JSON.stringify(arr)
					}
				}).then(res => {
					if (res.success) {
						this.$store.commit('getPropertyTypeStatis', 'ownCashAmount');
						this.$message({
							type: 'success',
							message: '提交成功'
						});
						this.isSaveData = true;
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

</style>
