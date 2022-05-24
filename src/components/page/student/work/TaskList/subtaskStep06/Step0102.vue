
<template>
	<div class="stu">
		<ul class="per-box clearfix">
			<li v-for="(item, index) in meterialList" :key="index">
				<div class=" imgps" :class="item.retrofitType">
				</div>
				<div class=" sellinfo">
					<p>
						<span class="span1">
							{{mapName[item.retrofitType]}}次数
							<el-input-number controls-position="right" size="mini" :controls="false" @blur="changeCount(index)" v-model="item.retrofitCount" :precision="0" :step="1" :max="4"></el-input-number>
						</span>
					</p>
					<div class="mt20">
						<span class="span1">
							{{mapName[item.retrofitType]}}价格( 元 )
							{{item.retrofitPrice | formatNumber}}
						</span>
					</div>
					<div class="mt20">
						<span class="span1">
							{{mapName[item.retrofitType]}}费用( 元 ):
							{{(item.retrofitCost || (item.retrofitCount * item.retrofitPrice))  | formatNumber}}
						</span>
					</div>
					<div class="mt20">
						<span class="span1">
							技改后生产线能耗降低%：
							{{item.reduceRate}}
						</span>
					</div>
				</div>
			</li>
		</ul>
		<div class="mt40 center">
			<el-button type="success" :disabled="isSaveData" @click="getPageJson()">
				{{!isSaveData ? '提交' : '已经提交'}}
			</el-button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'my-course',
	data () {
		return {
			mapName: {
				energySaving: '节能技改',
				emissionReduction: '减排技改'
			},
			energySavingArr: [],
			emissionReductionArr: [],
			meterialList: [
			],
			tableType: 'pagetable0602',
			isSaveData: false,
			arrList: [],
			showInputMap: {
				retrofitCountA: true,
				retrofitCountB: true
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
				url: '/stOrgRetrofitRecord/findOrgYeRetrofitRecord',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					clazzYearsPushId: this.$route.query.clazzYearsPushId || ''
				}
			}).then(res => {
				if (res.success) {
					if (res.data.length > 0) {
						this.isSaveData = true;
						this.meterialList = res.data;
						// this.fromInfo.energySaving.retrofitCount = res.data[0].retrofitCount;
						// this.fromInfo.emissionReduction.retrofitCount = res.data[1].retrofitCount;
					} else {
						this.meterialList = [
							{
								retrofitType: 'energySaving',
								retrofitCount: '',
								retrofitPrice: '',
								retrofitCost: 0,
								reduceRate: 0
							},
							{
								retrofitType: 'emissionReduction',
								retrofitCount: '',
								retrofitPrice: '',
								retrofitCost: 0,
								reduceRate: 0
							}
						];
						this.isSaveData = false;
					}
					this.ParameterInfoMap();
				}
			});
		},
		ParameterInfoMap () {
			this.$ajax({
				method: 'post',
				url: '/stClazzProjectParameter/findRetrofitClazzParameterInfoMap',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					clazzYearsPushId: this.$route.query.clazzYearsPushId || ''
				}
			}).then(res => {
				if (res.success) {
					if (res.data) {
						let energySavingArr = [
							0,
							parseFloat(res.data.consumptionOne),
							parseFloat(res.data.consumptionTwo),
							parseFloat(res.data.consumptionThree),
							parseFloat(res.data.consumptionFour)
						];
						this.energySavingArr = energySavingArr;
						// /-------
						let emissionReductionArr = [
							0,
							parseFloat(res.data.emissionsOne),
							parseFloat(res.data.emissionsTwo),
							parseFloat(res.data.emissionsThree),
							parseFloat(res.data.emissionsFour)
						];
						this.emissionReductionArr = emissionReductionArr;
						//
						this.meterialList[0].retrofitPrice = res.data.retrofitEnergySaving;
						this.meterialList[1].retrofitPrice = res.data.retrofitEmissionReduction;
					}
				}
			});
		},
		changeCount (index) {
			let allCount = 0;
			for (let index = 0; index < this.meterialList.length; index++) {
				const element = this.meterialList[index];

				allCount += (element.retrofitCount || 0);
			}
			let item = this.meterialList[index];
			if (allCount > 4) {
				this.$message({
					type: 'error',
					message: '技改合计不能大于4个季度'
				});
				item.retrofitCount = 0;
				// return false;
			}
			console.log(index);
			console.log(item);
			console.log(this.energySavingArr);
			console.log(this.emissionReductionArr);
			if (item.retrofitType === 'energySaving') {
				this.$set(item, 'reduceRate', this.energySavingArr[item.retrofitCount || 0]);
				this.$set(item, 'retrofitCost', item.retrofitCount * item.retrofitPrice);
			}

			if (item.retrofitType === 'emissionReduction') {
				item.reduceRate = this.emissionReductionArr[item.retrofitCount || 0];
				item.retrofitCost = item.retrofitCount * item.retrofitPrice;
			}
		},
		getPageJson () {
			let allCount = 0;
			for (let index = 0; index < this.meterialList.length; index++) {
				const element = this.meterialList[index];

				allCount += (element.retrofitCount || 0);
			}
			if (allCount > 4) {
				this.$message({
					type: 'error',
					message: '技改合计不能大于4个季度'
				});
				return false;
			}

			this.$confirm(`是否合计技改${allCount}季度，技改以后，产能减少${allCount * 10}哦`, '再次提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				center: true,
				type: 'warning'
			}).then(() => {
				this.$ajax({
					method: 'post',
					url: '/stOrgRetrofitRecord/saveStOrgRetrofitRecord',
					params: {
						moldId: this.$route.query.moldId || this.moldId || '',
						clazzYearsPushId: this.$route.query.clazzYearsPushId || '',
						subtaskId: this.$route.query.subtaskId || '',
						taskId: this.$route.query.taskId || '',
						industryId: this.$route.query.industryId || '',
						retrofitJson: JSON.stringify(this.meterialList)
					}
				}).then(res => {
					if (res.success) {
						this.$store.commit('getPropertyTypeStatis', 'greenLoansAmount');
						this.$store.commit('getPropertyTypeStatis', 'ownCashAmount');
						this.$message({
							type: 'success',
							message: '技改成功'
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
.per-box{
	width: 100%;
	// height: 600px;
	li{
		border: 1px solid #CCCCCC;
		// height: 140px;
		width: 40%;
		margin: 0 5%;
		// margin-right: 1%;;
		float: left;
		// margin-top: 20px;
		cursor: pointer;
		&:nth-child(1) {
			background: #F1F5FF;
			border: 1px solid #89A1DF;
		}
		&:nth-child(2) {
			background: #F3FBF6;
			border: 1px solid #92BFA5;
		}
		&:nth-child(3) {
			background: #EEF8FF;
			border: 1px solid #77ACCF;
		}
		&:nth-child(4) {
			background: #FAF7EA;
			border: 1px solid #C5B46B;
		}
		&.active{
			border: 1px solid #4657AD;
		}
		.imgps{
			width: 100%;
			height: 180px;
			&.energySaving{
				background: url('./../common/images/financingConfirmingStorage.jpg');
			}
			&.emissionReduction{
				background: url('./../common/images/financingWarehouseReceipt.jpg');
			}
			// background: #F3F3F3;;
		}
		.sellinfo{
			width: calc(100% );
			padding: 30px 20px;
			// color: #fff;
			.span1{
				// font-weight: 600;
				margin-top: 25px;
				font-size: 14px;
			}
			.span2{
				font-size: 16px;
				color: #EC7F00;
			}
			.span3{
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #666666;
			}
			.span4{
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #666666;
				padding: 0 15px;
			}
		}
	}
}
</style>
