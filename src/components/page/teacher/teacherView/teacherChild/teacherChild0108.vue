<template>
	<div class="childBox">
		<table class="demo-table">
			<tr>
				<td class="bgBlue">项目</td>
				<td class="bgBlue">煤电单价 ( 元/度 )</td>
				<td class="bgBlue">煤电碳排放 ( 元/度 )</td>

				<td class="bgBlue">绿电单价 ( 元/度 )</td>
				<td class="bgBlue">绿电占总电的比例 ( % )</td>
				<td class="bgBlue">绿电减排量 ( Kg/度 )</td>
				<td class="bgBlue">采购绿电证书 ( 千度 )</td>
				<td class="bgBlue">采购绿电数量 ( 度 )</td>
				<td class="bgBlue">采购绿电金额 ( 元 )</td>
				<td class="bgBlue">采购绿电减排量 ( Kg )</td>
				<td class="bgBlue">煤电采购数量 ( 度 )</td>
				<td class="bgBlue">煤电采购金额 ( 元 )</td>
				<td class="bgBlue">煤电采购碳排放 ( Kg )</td>
				<td class="bgBlue">合计采购电力 ( 度 )</td>
				<td class="bgBlue">合计采购金额 ( 元 )</td>
				<td class="bgBlue">合计采购碳排放 ( Kg )</td>
				<td class="bgBlue">生产电力缺额</td>
			</tr>
			<tr v-for="(item, index) in trList" :key="index">
				<td>
					{{item.orgName}}
				</td>
				<td>
					{{item.unitCoalUnitPrice}}
				</td>
				<td>
					{{item.unitCoalElectricityEmissions}}
				</td>
				<td>
					{{item.greenElectricityUnitPrice}}
				</td>
				<td>
					{{item.greenElectricityRate}}
				</td>
				<td>
					{{item.greenElectricityReduceEmissions}}
				</td>
				<td>
					{{item.certificateCount}}
				</td>
				<td>
					{{item.greenElectricityCount}}
				</td>
				<td>
					{{item.greenElectricityCost}}
				</td>
				<td>
					{{item.greenElectricityEmission}}
				</td>
				<td>
					{{item.coalElectricityCount}}
				</td>
				<td>
					{{item.coalElectricityCost}}
				</td>
				<td>
					{{item.coalElectricityEmission}}
				</td>
				<td>
					{{item.totalElectricityCount}}
				</td>
				<td>
					{{item.totalElectricityCost}}
				</td>
				<td>
					{{item.totalElectricityEmission}}
				</td>
				<td>
					{{item.productionElectricityShortage}}
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
				url: '/stOrgElectricityPurchaseRecord/findTeacherElectricityRecordInfoList',
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
		width: 3000px;
	}
}
</style>
