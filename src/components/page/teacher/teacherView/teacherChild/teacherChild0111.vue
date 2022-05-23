<template>
	<div class="childBox">
		<table class="demo-table">
			<tr>
				<td class="bgBlue" rowspan="2">项目</td>
				<td class="bgBlue" rowspan="2">绿贷金额 ( 元 )</td>
				<td class="bgBlue" rowspan="2">贷款利率 ( % )</td>
				<td class="bgBlue" rowspan="2">绿贷期限 ( 年 )</td>
				<!-- <td class="bgBlue" rowspan="2">还贷金额 ( 元 )</td> -->
				<td class="bgBlue" rowspan="2">剩余绿贷 ( 元 )</td>
				<td class="bgBlue" colspan="5">减排量</td>
				<td class="bgBlue" colspan="3">减排价值</td>
				<td class="bgBlue" colspan="2">产品排放</td>
				<td class="bgBlue" colspan="2">年度还贷</td>
			</tr>
			<tr>
				<td class="bgBlue">已投资姐耗减排 ( 元 )</td>
				<td class="bgBlue">节能项目减少耗电 ( 度 )</td>
				<td class="bgBlue">节能减少排放 ( Kg )</td>
				<td class="bgBlue">减排项目减少排放 ( Kg )</td>
				<td class="bgBlue">合计年度减排量 ( Kg )</td>
				<td class="bgBlue">节约耗电价 ( 元 )</td>
				<td class="bgBlue">减少排量价值 ( 元 )</td>
				<td class="bgBlue">合计减排价值 ( 元 )</td>
				<td class="bgBlue">产品碳标签 ( Kg / 个 )</td>
				<td class="bgBlue">产品碳成本 ( Kg / 个 )</td>
				<td class="bgBlue">还贷年份</td>
				<td class="bgBlue">还贷金额 ( 元 )</td>
			</tr>
			<tr v-for="(item, index) in trList" :key="index">
				<td>
					{{item.orgName}}
				</td>
				<td>
					{{item.applyAmount}}
				</td>
				<td>
					{{item.loansRate}}
				</td>
				<td>
					{{item.loansYears}}
				</td>
				<td>
					{{item.remainLoansAmount}}
				</td>

				<td>
					{{item.retrofitTotalCost}}
				</td>
				<td>
					{{item.energySavingAmount}}
				</td>
				<td>
					{{item.energySavingEmission}}
				</td>
				<td>
					{{item.emissionSavingAmount}}
				</td>
				<td>
					{{item.totalYearSavingAmount}}
				</td>
				<td>
					{{item.energySavingValue}}
				</td>
				<td>
					{{item.emissionSavingValue}}
				</td>
				<td>
					{{item.totalSavingValue}}
				</td>
				<td>
					{{item.productCarbonLabel}}
				</td>
				<td>
					{{item.productCarbonCost}}
				</td>
				<td>
					{{yearsTime[0]}}
				</td>
				<td>
					{{item.loansRepaymentAmount}}
				</td>
			</tr>
		</table>
	</div>
</template>

<script>

export default {
	components: {

	},
	name: 'login',
	data () {
		return {
			trList: [],
			yearsTime: ''
		};
	},
	props: ['moldId', 'clazzYearsPushId'],
	created () {
		this.init();
		this.getYear();
	},
	methods: {
		init () {
			this.$ajax({
				method: 'post',
				url: '/stDecisionLoansRecord/findTeacherDataDisclosureInfo',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '', // 模块id
					clazzYearsPushId: this.clazzYearsPushId || ''
				}
			}).then(res => {
				if (res.success) {
					if (res.data) {
						this.trList = res.data;
					}
				}
			});
		},
		getYear () {
			this.$ajax({
				method: 'post',
				url: '/stClazzYearsPush/findMoldYearsTimeInfoList',
				params: {
					moldId: this.$route.query.moldId || this.moldId || ''
				}
			}).then(res => {
				if (res.success) {
					if (res.data) {
						let yearLat = res.data;
						let dataInfo = [];
						for (let index = 0; index < yearLat.length; index++) {
							const element = yearLat[index];
							console.log(element.yearsTime);
							dataInfo.push(element.yearsTime);
							this.yearsTime = dataInfo;
							console.log(dataInfo);
							// this.yearsTime = dataInfo.yearsTime;
						}
					}
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.childBox{
	// padding: 57px 15px;
	overflow: hidden;
	overflow-x: auto;
	.demo-table{
		width: 3000px;
	}
}
</style>
