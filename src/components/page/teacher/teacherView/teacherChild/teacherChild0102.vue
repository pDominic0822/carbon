<template>
	<div class="childBox">
		<table class="demo-table mt20">
			<tr>
				<td class="bgBlue" rowspan="2">项目</td>
				<td class="bgBlue" rowspan="2">绿贷金额 ( 元 )</td>
				<td class="bgBlue" rowspan="2">绿贷利率 ( % )</td>
				<td class="bgBlue" rowspan="2">贷款期限 ( 年 )</td>
				<td class="bgBlue" colspan="3">各年还贷 ( 元 )</td>
			</tr>
			<tr>
				<td class="bgBlue" v-for="(yearItem, index) in yearList" :key="index">
					第{{ index + 1}}年
				</td>
				<td class="bgBlue">
					合计
				</td>
			</tr>
			<tr v-for="(trItem, index) in trList" :key="index">
				<td>
					{{trItem.orgName}}
				</td>
				<td>
					{{trItem.applyAmount | formatNumber}}
				</td>
				<td>
					{{trItem.loansRate}}
				</td>
				<td>
					{{trItem.loansYears}}
				</td>
				<td v-for="(yearItem, yearindex) in yearList" :key="yearindex">
					<template v-if="yearindex === yearList.length - 1">
						{{(trItem.loansRateNum * trItem.applyAmount / 100 + trItem.applyAmount) | formatNumber}}
					</template>
					<template v-else>
						{{(trItem.loansRateNum * trItem.applyAmount / 100) | formatNumber}}
					</template>
				</td>
				<td>
					{{((trItem.loansRateNum * trItem.loansYears * trItem.applyAmount / 100) + trItem.applyAmount) | formatNumber}}
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
			yearList: []
		};
	},
	props: ['moldId', 'subtaskId', 'clazzYearsPushId'],
	created () {
		this.init();
		this.getyearMold();
	},
	methods: {
		init () {
			this.$ajax({
				method: 'post',
				url: '/stDecisionLoansRecord/findTeacherFirstYearGreenLoans',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '', // 模块id
					subtaskId: this.subtaskId || '',
					clazzYearsPushId: this.clazzYearsPushId || ''
				}
			}).then(res => {
				if (res.success) {
					if (res.data) {
						let array = res.data;
						for (let i = 0; i < array.length; i++) {
							const element = array[i];
							let loansRate = parseFloat(element.loansRate);
							element.loansRateNum = loansRate;
						}
						this.trList = array;
					}
				}
			});
		},
		getyearMold () {
			this.$ajax({
				method: 'post',
				url: '/stDefaultMoldYears/findDefaultMoldYearsByParams',
				params: {
					moldId: this.$route.query.moldId || this.moldId || ''
				}
			}).then((res) => {
				if (res.success) {
					this.yearList = res.data;
				} else {
				}
			}).catch((err) => {
				throw new Error(err);
			});
		}
	}
};
</script>

<style lang="scss" scoped>
// .childBox{
// 	padding: 57px 15px;
// }
</style>
