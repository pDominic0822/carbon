<template>
	<div class="childBox">
		<table class="demo-table">
			<tr>
				<td class="bgBlue" colspan="2">项目</td>
				<td class="bgBlue" colspan="2">年初库存碳汇 ( Kg )</td>
				<td class="bgBlue" colspan="2">年初库存碳配额 ( Kg )</td>
				<td class="bgBlue" colspan="2">合计 ( Kg )</td>
				<td class="bgBlue" colspan="2">一轮采购数量 ( Kg )</td>
				<td class="bgBlue" colspan="2">二轮采购数量 ( Kg )</td>
				<td class="bgBlue" colspan="2">合计采购数量 ( Kg )</td>
				<td class="bgBlue" colspan="2">采购单价 ( 元/Kg )</td>
				<td class="bgBlue" colspan="2">金额 ( 元 )</td>
				<td class="bgBlue" colspan="2">生产排放 ( Kg )</td>
				<td class="bgBlue" colspan="2">物料排放 ( 元/Kg )</td>
				<td class="bgBlue" colspan="2">100% 煤电排放 ( 元 )</td>
				<td class="bgBlue" colspan="2">排放合计 ( 元 )</td>
				<td class="bgBlue" colspan="2">库存现金 ( 元 )</td>
				<td class="bgBlue" colspan="2">最多可购</td>
			</tr>
			<tr v-for="(trItem, trIndex) in trList" :key="trIndex">
				<td colspan="2">
					{{trItem.orgName}}
				</td>
				<td colspan="2">
					{{trItem.beginSinkStock | formatNumber}}
				</td>
				<td colspan="2">
					{{trItem.beginQuotaStock | formatNumber}}
				</td>
				<td colspan="2">
					{{(trItem.beginQuotaStock) + (trItem.beginSinkStock) | formatNumber}}
				</td>
				<td colspan="2">
					{{(trItem.firstBuy) | formatNumber}}
				</td>
				<td colspan="2">
					{{(trItem.secondBuy) | formatNumber}}
				</td>
				<td colspan="2">
					{{( (trItem.firstBuy || 0) + (trItem.secondBuy || 0)) | formatNumber}}
				</td>
				<td colspan="2">
					{{trItem.unitSinkValue | formatNumber}}
				</td>
				<td colspan="2">
					{{trItem.valueOfBuyCarbonSink  | formatNumber}}
				</td>
				<td colspan="2">
					{{(trItem.emissionReductionAmount * 4)  | formatNumber}}
				</td>
				<td colspan="2">
					{{trItem.materialEmission  | formatNumber}}
				</td>
				<td colspan="2">
					{{(trItem.coalElectricityEmission * 4)  | formatNumber}}
				</td>
				<td colspan="2">
					{{(trItem.emissionReductionAmount * 4) + (trItem.materialEmission) + (trItem.coalElectricityEmission * 4 )  | formatNumber}}
				</td>
				<td colspan="2">
					{{trItem.orgOwnCash  | formatNumber}}
				</td>
				<td colspan="2">
					{{(trItem.orgOwnCash / trItem.unitSinkValue) | formatNumber}}
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
				url: '/stOrgCarbonSinkRecord/findOrgYearsCarbonSinkInfoMapList',
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
		}
	}
};
</script>

<style lang="scss" scoped>
.childBox{
	overflow: hidden;
	overflow-x: auto;
	.demo-table{
		width: 2300px;
	}
}
</style>
