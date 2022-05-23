<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr>
				<td colspan="3">碳汇采购申请</td>
			</tr>
			<tr>
				<td colspan="1">
					当前年份:
					{{fromInfo.nowYearsTime || ''}}
				</td>
				<td>
					小组名称
				</td>
				<td>
					{{fromInfo.orgName || ''}}
				</td>
			</tr>
			<tr>
				<td colspan="1">产品名称</td>
				<td>价格( 元/kg )</td>
				<td>一轮采购数量( kg )</td>
			</tr>
			<tr>
				<td colspan="1">
					碳汇
				</td>
				<td>
					{{fromInfo.unitSinkValue}}
				</td>
				<td :class="{'inputClass' : showInputMap.firstBuy}">
					<el-input-number :readonly="!showInputMap.firstBuy" controls-position="right" size="mini" :controls="false" v-model="fromInfo.firstBuy" :precision="0" :step="1" :max="100000000"></el-input-number>
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
