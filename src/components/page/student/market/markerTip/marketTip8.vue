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
				<td>卖出方</td>
				<td>卖出数量（Kg）</td>
				<td>单价（元/Kg）</td>
				<td>买入方</td>
				<td>交易状态</td>
			</tr>
			<tr v-for="(trItem, trIndex) in trList" :key="trIndex">
				<td>
					{{trIndex + 1}}
				</td>
				<td>
					{{trItem.sellOrgName}}
				</td>
				<td>
					{{trItem.sellCount}}
				</td>
				<td>
					{{trItem.sellUnitPrice}}
				</td>
				<td>
					{{trItem.buyOrgName || '空'}}
				</td>
				<td>
					交易完成
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
			trList: [
			]
		};
	},
	watch: {
	},
	created () {
		this.init();
	},
	methods: {
		init () {
			this.$ajax({
				method: 'post',
				url: '/stOrgQuotaTransactionRecord/findMarketQuotaTransactionInfoList',
				params: {
					moldId: this.$route.query.moldId || this.moldId,
					clazzYearsPushId: this.$route.query.clazzYearsPushId || this.clazzYearsPushId
				}
			}).then(res => {
				if (res.success && res.data) {
					this.trList = res.data;
				}
			}).catch(err => {
				throw new Error(err);
			});
		}
	},
	mounted () {
	}
};
</script>

<style lang="scss" scoped>
.contentBox{
	padding: 0 15px;
	margin: 0 auto;
}
</style>
