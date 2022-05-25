
<template>
	<div class="stu">
		<div class="bosdd-box">
			<div class="texta">
				绿电证书购买数量
				<p class="mt10">
					<el-input-number controls-position="right" @blur="changeCount()" size="mini" :controls="false" v-model="fromInfo.certificateCount"  :step="1"></el-input-number>
				</p>
			</div>
			<div class="textb">
				<p>
					绿电单价：{{OrgGreenMap.greenElectricityUnitPrice}}元
				</p>
				<p class="mt15">
					绿电数量：
					{{greenElectricityMap.purchaseCount}}度
				</p>
				<p class="mt15">
					绿电花费：
					{{greenElectricityMap.purchaseCost}}元
				</p>
			</div>
			<div class="textc">
				<p>
					煤电单价：
					{{OrgGreenMap.coalUnitPrice}}元
				</p>
				<p class="mt15">
					煤电数量：
					{{coalPowerMap.purchaseCount}}度
				</p>
				<p class="mt15">
					煤电花费：
					{{coalPowerMap.purchaseCost}}元
				</p>
			</div>
			<div class="textd">
				<p>
					总购买电力
				</p>
				<p class="mt10">
					{{totalBuyCount}}度
				</p>
				<p class="mt15">
					总花费
				</p>
				<p class="mt10">
					{{totalCost}}元
				</p>
			</div>
		</div>
		<!-- <pageTable ref="pageTable" :tableType="tableType" :fromInfo="fromInfo" :showInputMap="showInputMap"></pageTable> -->
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
			totalCost: 0,
			sendArr: [],
			showInputMap: {
			},
			totalBuyCount: 0,
			coalPowerMap: {},
			greenElectricityMap: {},
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
						this.changeCount();
					}
				}
			});
		},
		changeCount () {
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

			this.greenElectricityMap = greenElectricity;
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

			this.coalPowerMap = coalPower;
			// -------------------------
			// 总价钱
			let totalCost = greenElectricity.purchaseCost + coalPower.purchaseCost;
			arr[0] = {
				...greenElectricity || {}
			};
			arr[1] = {
				...coalPower || {}
			};

			// ----------------
			this.totalCost = totalCost;
			this.totalBuyCount = coalPower.purchaseCount + greenElectricity.purchaseCount;
			this.sendArr = arr;
		},
		getPageJson () {
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
						totalCost: this.totalCost,
						purchaseElectricityJson: JSON.stringify(this.sendArr)
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
.bosdd-box{
	width: 900px;
	height: 600px;
	background: url('./../common/images/task02-04.png') no-repeat center center;
	background-size: contain;
	margin: 0 auto;
	position: relative;
	color: #fff;
	.texta{
		position: absolute;
		top: 76px;
		left: 348px;
		width: 200px;
		text-align: center;
	}
	.textb{
		position: absolute;
		top: 459px;
		left: 30px;
		width: 200px;
		text-align: center;
	}
	.textc{
		position: absolute;
		top: 459px;
		right: 30px;
		width: 200px;
		text-align: center;
	}
	.textd{
		position: absolute;
		top: 265px;
		left: 348px;
		width: 200px;
		text-align: center;
	}
}
</style>
