<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr>
				<td colspan="5">碳汇采购申请</td>
			</tr>
			<tr>
				<td colspan="2">
					当前年份:
					{{fromInfo.nowYearsTime || ''}}
				</td>
				<td colspan="3">
					小组名称:
					{{showInputMap.orgName}}
				</td>
			</tr>
			<tr>
				<td colspan="1">产品名称</td>
				<td>价格( 元/kg )</td>
				<td>一轮采购数量( kg )</td>
				<td>二轮采购数量( kg )</td>
				<td>采购小计( kg )</td>
			</tr>
			<tr>
				<td colspan="1">
					碳汇
				</td>
				<td>
					{{fromInfo.unitSinkValue}}
				</td>
				<td>
					{{(fromInfo.firstBuy)}}
				</td>
				<td :class="{'inputClass' : showInputMap.secondBuy}">
					<el-input-number :readonly="!showInputMap.secondBuy" controls-position="right" size="mini" :controls="false" v-model="fromInfo.secondBuy" :precision="0" :step="1" :max="100000000"></el-input-number>
				</td>
				<td>
					{{((fromInfo.firstBuy || 0) + (fromInfo.secondBuy || 0)) | formatNumber}}
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
		};
	},
	props: [
		'showInputMap',
		'fromInfo'
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
