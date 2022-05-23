<template>
	<div class="childBox">
		<table class="demo-table">
			<tr>
				<td class="bgBlue" rowspan="2">项目</td>
				<td class="bgBlue" colspan="3">年度配额</td>
				<td class="bgBlue" colspan="6">场外碳配额交易</td>
				<td class="bgBlue" colspan="3">场内碳配额交易记录</td>
				<td class="bgBlue">交易结果</td>
			</tr>
			<tr>
				<td class="bgBlue">年度核定碳配额 ( Kg )</td>
				<td class="bgBlue">年初碳配额库存 ( Kg )</td>
				<td class="bgBlue">市场买入配额定价 ( Kg )</td>
				<td class="bgBlue">年度实际碳排放 ( Kg )</td>
				<td class="bgBlue">碳配额差额 ( Kg )</td>
				<td class="bgBlue">场外交易卖出碳配额 ( Kg )</td>
				<td class="bgBlue">场外交易卖出碳配额金额 ( 元 )</td>
				<td class="bgBlue">场外交易买入碳配额 ( Kg )</td>
				<td class="bgBlue">场外交易买入碳配额金额 ( 元 )</td>
				<td class="bgBlue">场内交易卖出碳配额</td>
				<td class="bgBlue">卖出金额</td>
				<td class="bgBlue">场内交易卖出碳配额金额</td>
				<td class="bgBlue">交易后碳配额库存</td>
			</tr>
			<tr v-for="(item, index) in trList" :key="index">
				<td>
					{{item.orgName}}
				</td>
				<td>
					{{item.approvedQuota}}
				</td>
				<td>
					{{item.beginningQuotaStock}}
				</td>
				<td>
					{{item.quotaBuyPenalty}}
				</td>
				<td>
					{{item.actualEmission}}
				</td>
				<td>
					{{item.quotaImbalance}}
				</td>

				<td>
					{{item.otcTradingSellCount}}
				</td>
				<td>
					{{item.otcTradingSellPrice}}
				</td>
				<td>
					{{item.otcTradingBuyCount}}
				</td>
				<td>
					{{item.otcTradingBuyPrice}}
				</td>
				<td>
					{{item.floorTradingSellCount}}
				</td>
				<td>
					{{item.floorTradingSellUnitPrice}}
				</td>
				<td>
					{{item.floorTradingSellPrice}}
				</td>
				<td>
					{{item.afterTradingQuota}}
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
			trList: []
		};
	},
	props: ['moldId', 'clazzYearsPushId'],
	created () {
		this.init();
	},
	methods: {
		init () {
			this.$ajax({
				method: 'post',
				url: '/stOrgQuotaTransactionRecord/findTeacherQuotaTransactionInfoList',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '', // 模块id
					clazzYearsPushId: this.clazzYearsPushId || ''
				}
			}).then(res => {
				if (res.success && res.data) {
					this.trList = res.data;
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
