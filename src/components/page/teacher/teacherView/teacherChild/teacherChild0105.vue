<template>
	<div class="childBox">
		<table class="demo-table">
			<tr>
				<td class="bgBlue">项目</td>
				<td class="bgBlue">产品基准单价 (元 / 个)</td>
				<td class="bgBlue">库存碳资产数量 ( Kg )</td>
				<td class="bgBlue">订单数量 ( 个 )</td>
				<td class="bgBlue">订单单价 ( 元/个 )</td>
				<td class="bgBlue">订单金额 ( 元 )</td>
				<td  class="bgBlue">选单状态</td>
			</tr>
			<tr v-for="(item, index) in trList" :key="index">
				<td>
					{{item.orgName}}
				</td>
				<td>
					{{item.productUnitPrice}}
				</td>
				<td>
					{{item.carbonRightsTotal}}
				</td>
				<td>
					{{item.orderCount}}
				</td>
				<td>
					{{item.unitPrice | formatNumber}}
				</td>
				<td>
					{{item.totalOrderAmount | formatNumber}}
				</td>
				<td>
					{{item.isChoose ? "已经选单" : '未选单'}}
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
				url: '/stClazzOrgYearsOrder/findClazzYearsOrgChooseOrderInfoList',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '', // 模块id
					clazzYearsPushId: this.clazzYearsPushId || '',
					isOrder: 0
				}
			}).then(res => {
				if (res.success) {
					if (res.data) {
						this.trList = res.data;
						this.trList.sort((a, b) => {
							return b.carbonRightsTotal - a.carbonRightsTotal;
						});
					}
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
// .childBox{
// 	padding: 95px 15px;
// }
</style>
