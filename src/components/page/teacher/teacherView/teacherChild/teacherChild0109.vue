<template>
	<div class="childBox">
		<table class="demo-table">
			<tr>
				<td class="bgBlue" rowspan="2">项目</td>
				<td class="bgBlue" rowspan="2">产品生产个数 ( 个 )</td>
				<td class="bgBlue" rowspan="2">制造碳排放 ( Kg )</td>
				<td class="bgBlue" colspan="5">耗料碳排放</td>
				<td class="bgBlue" colspan="10">耗电碳排放</td>
				<td class="bgBlue" rowspan="2">生产产品核算合计 ( Kg )</td>
				<td class="bgBlue" rowspan="2">生产制造碳排放 %</td>
				<td class="bgBlue" rowspan="2">电力碳排放 %</td>
				<td class="bgBlue" rowspan="2">物料采购碳排放 %</td>
				<!-- <td rowspan="2">
					项目
				</td>
				<td rowspan="2">
					产品生产个数 ( 个 )
				</td>
				<td rowspan="2">
					制造碳排放 ( Kg )
				</td> -->
			</tr>
			<tr>
				<td class="bgBlue">年初无聊耗料 ( 包 )</td>
				<td class="bgBlue">年初物料消耗碳排放 (Kg)</td>
				<td class="bgBlue">采购物料耗量 ( 包 )</td>
				<td class="bgBlue">采购物料消耗碳排放 ( Kg )</td>
				<td class="bgBlue">小计 ( Kg )</td>
				<td class="bgBlue">制造总耗电 ( 度 )</td>
				<td class="bgBlue">年初绿电消耗 ( 度 )</td>
				<td class="bgBlue">采购绿电消耗 ( 度 )</td>
				<td class="bgBlue">年初煤电消耗 ( 度 )</td>
				<td class="bgBlue">采购煤电消耗 ( 度 )</td>
				<td class="bgBlue">年初煤电消耗碳排放 ( Kg )</td>
				<td class="bgBlue">采购煤电消耗碳排放 ( Kg )</td>
				<td class="bgBlue">年初绿电消耗碳排放</td>
				<td class="bgBlue">采购绿电消耗碳排放 ( Kg )</td>
				<td class="bgBlue">小计 ( Kg )</td>
			</tr>
			<tr v-for="(item,index) in trList" :key="index">
				<td>
					{{item.orgName}}
				</td>
				<td>
					{{item.produceCount}}
				</td>
				<td>
					{{item.manufactureEmission}}
				</td>
				<td>
					{{item.materialsBeginCount}}
				</td>
				<td>
					{{item.materialsBeginEmission}}
				</td>
				<td>
					{{item.materialsPurchaseCount}}
				</td>
				<td>
					{{item.materialsPurchaseEmission}}
				</td>
				<td>
					{{item.materialsEmissionTotal}}
				</td>
				<td>
					{{item.powerCountTotal}}
				</td>
				<td>
					{{item.greenPowerBeginCount}}
				</td>
				<td>
					{{item.beginGreenPowerVacancy}}
				</td>
				<td>
					{{item.greenPowerPurchaseCount}}
				</td>
				<td>
					{{item.purchaseGreenPowerVacancy}}
				</td>
				<td>
					{{item.coalPowerBeginCount}}
				</td>
				<td>
					{{item.beginCoalPowerVacancy}}
				</td>
				<td>
					{{item.coalPowerPurchaseCount}}
				</td>

				<td>
					{{item.coalPowerBeginEmission}}
				</td>
				<td>
					{{item.coalPowerPurchaseEmission}}
				</td>
				<td>
					{{item.greenPowerBeginEmission}}
				</td>
				<td>
					{{item.greenPowerPurchaseEmission}}
				</td>
				<td>
					{{item.powerEmissionTotal}}
				</td>
				<td>
					{{item.productionEmissionTotal}}
				</td>
				<td>
					{{item.produceEmissionRate}}
				</td>
				<td>
					{{item.powerEmissionRate}}
				</td>
				<td>
					{{item.materialEmissionRate}}
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
				url: '/stOrgProduceRecord/findClazzOrgOrderProduceInfoList',
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
	// padding: 57px 15px;
	overflow: hidden;
	overflow-x: auto;
	.demo-table{
		width: 4000px;
	}
}
</style>
