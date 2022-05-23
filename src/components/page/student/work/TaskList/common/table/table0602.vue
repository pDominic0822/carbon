<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr>
				<td></td>
				<td>技术改造</td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>节能技改次数</td>
				<td :class="{'inputClass' :showInputMap.retrofitCountA}" >
					<el-input-number :readonly="!showInputMap.retrofitCountA" controls-position="right" @blur="changeA()" size="mini" :controls="false" v-model="energySaving.retrofitCount" :precision="0" :step="1" :max="4"></el-input-number>
					<!-- <input :readonly="!showInputMap.retrofitCountA" type="text" @blur="changeA()" v-model="energySaving.retrofitCount"> -->
				</td>
				<td>减排技改次数</td>
				<td :class="{'inputClass' : showInputMap.retrofitCountB}">
					<el-input-number :readonly="!showInputMap.retrofitCountB" controls-position="right" @blur="changeB()" size="mini" :controls="false" v-model="emissionReduction.retrofitCount" :precision="0" :step="1" :max="4"></el-input-number>
					<!-- <input :readonly="!showInputMap.retrofitCountB" type="text" @blur="changeB()" v-model="emissionReduction.retrofitCount"> -->
				</td>
			</tr>
			<tr>
				<td>节能技改价格( 元 )</td>
				<td>
					{{energySaving.retrofitPrice  | formatNumber}}
				</td>
				<td>减排技改价格( 元 )</td>
				<td>
					{{emissionReduction.retrofitPrice | formatNumber}}
				</td>
			</tr>
			<tr>
				<td>节能技改费用( 元 )</td>
				<td>
					{{(energySaving.retrofitCost || (this.energySaving.retrofitCount * this.energySaving.retrofitPrice))  | formatNumber}}
				</td>
				<td>减排技改费用( 元 )</td>
				<td>
					{{(emissionReduction.retrofitCost || (this.emissionReduction.retrofitCount * this.emissionReduction.retrofitPrice))  | formatNumber}}
				</td>
			</tr>
			<tr>
				<td>技改后生产线能耗降低%</td>
				<td>
					{{energySaving.reduceRate}}
				</td>
				<td>减排后生产线能耗降低</td>
				<td>
					{{emissionReduction.reduceRate}}
				</td>
			</tr>
			<tr>
				<td>支出总计</td>
				<td colspan="3">
					{{ ((energySaving.retrofitCount * energySaving.retrofitPrice) + (emissionReduction.retrofitCount * emissionReduction.retrofitPrice))  | formatNumber }}
				</td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	name: '',
	data () {
		return {
			energySavingArr: [],
			emissionReductionArr: [],
			energySaving: {
				retrofitCount: '',
				retrofitPrice: 0,
				retrofitCost: 0,
				reduceRate: 0
			},
			emissionReduction: {
				retrofitCount: '',
				retrofitPrice: 0,
				retrofitCost: 0,
				reduceRate: 0
			}
		};
	},
	props: [
		'showInputMap',
		'fromInfo'
	],
	watch: {
	},
	created () {
		this.init();
	},
	methods: {
		changeA () {
			if (((this.energySaving.retrofitCount || 0) + (this.emissionReduction.retrofitCount || 0)) > 4) {
				this.$message({
					type: 'error',
					message: '技改合计不能大于4个季度'
				});
				this.energySaving.retrofitCount = 0;
				// return false;
			}
			this.energySaving.reduceRate = this.energySavingArr[this.energySaving.retrofitCount || 0];
			this.energySaving.retrofitCost = this.energySaving.retrofitCount * this.energySaving.retrofitPrice;
		},
		changeB () {
			if (((this.energySaving.retrofitCount || 0) + (this.emissionReduction.retrofitCount || 0)) > 4) {
				this.$message({
					type: 'error',
					message: '技改合计不能大于4个季度'
				});
				this.emissionReduction.retrofitCount = 0;
				// return false;
			}
			this.emissionReduction.reduceRate = this.emissionReductionArr[this.emissionReduction.retrofitCount || 0];
			this.emissionReduction.retrofitCost = this.emissionReduction.retrofitCount * this.emissionReduction.retrofitPrice;
		},
		setNumMax (code) {
			if (((this.energySaving.retrofitCount || 0) + (this.emissionReduction.retrofitCount || 0)) > 4) {
				this.$message({
					type: 'error',
					message: '技改合计不能大于4个季度'
				});
				if (code === 'A') {
					this.energySaving.retrofitCount = 0;
				}
				if (code === 'B') {
					this.emissionReduction.retrofitCount = 0;
				}
				return false;
			}
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
							parseFloat(res.data.consumptionTwo),
							parseFloat(res.data.emissionsThree),
							parseFloat(res.data.emissionsFour)
						];
						this.emissionReductionArr = emissionReductionArr;
						this.energySaving.retrofitPrice = res.data.retrofitEnergySaving;
						this.emissionReduction.retrofitPrice = res.data.retrofitEmissionReduction;
						this.changeA();
						this.changeB();
					}
				}
			});
		},
		init () {
			if (this.fromInfo) {
				this.energySaving = this.fromInfo.energySaving || {};
				this.emissionReduction = this.fromInfo.emissionReduction || {};
				console.log(this.energySaving);
				console.log(this.emissionReduction);
				this.ParameterInfoMap();
			} else {

			}
		}
	},
	mounted () {
	}
};
</script>

<style lang="scss" scoped>
.contentBox{
	width: 100%;
	margin: 0 auto;
	color: #FFFFFF;
}
</style>
