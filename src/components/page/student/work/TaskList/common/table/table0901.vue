<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr>
				<td>客户订单</td>
				<td>
					{{showInputMap.orgOrderCount}}
				</td>
				<td>当前产能</td>
				<td>
					{{showInputMap.surplusProduceCount}}
				</td>
			</tr>
			<tr>
				<td>库存物料</td>
				<td>
					{{showInputMap.totalMaterials}}
				</td>
				<td>库存电力</td>
				<td>
					{{showInputMap.totalElectricity}}
				</td>
			</tr>
			<tr>
				<td>库存碳汇</td>
				<td>
					{{showInputMap.totalCarbonSink}}
				</td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>生产数量</td>
				<td class="inputClass">
					<el-input-number controls-position="right" size="mini" :controls="false" v-model="showInputMap.produceCount" :precision="0" :step="1" :max="showInputMap.surplusProduceCount"></el-input-number>

					<!-- <input type="text" v-model="showInputMap.produceCount" class="inputA"> -->
				</td>
				<td></td>
				<td></td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	name: '',
	data () {
		return {
			form: {
				value1: '',
				value2: '',
				value3: ''
			}
		};
	},
	props: [
		'showInputMap'
	],
	watch: {
	},
	created () {
	},
	methods: {
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
