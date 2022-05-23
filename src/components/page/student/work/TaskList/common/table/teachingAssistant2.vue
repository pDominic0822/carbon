<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr>
				<td colspan="9">
					选单公示
				</td>
			</tr>
			<tr>
				<td>次序</td>
				<td colspan="2">碳权合计（采购数量+碳配额）</td>
				<td>小组名称</td>
				<td>订单数量</td>
				<td>订单单价</td>
				<td>违约单价</td>
				<td>订单状态</td>
				<td>交付数量</td>
			</tr>
			<tr v-for="(trItem, trIndex) in trList" :key="trIndex">
				<td>
					{{trIndex + 1}}
				</td>
				<td colspan="2">
					{{trItem.value1}}
				</td>
				<td>
					{{trItem.value2}}
				</td>
				<td>
					{{trItem.value3}}
				</td>
				<td>
					{{trItem.value4}}
				</td>
				<td>
					{{trItem.value5}}
				</td>
				<td>
					{{trItem.value6}}
				</td>
				<td>
					{{trItem.value7}}
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
				{
					value1: '3000',
					value2: '2组',
					value3: '30',
					value4: '36000',
					value5: '72000',
					value6: '已选单',
					value7: '30'

				}
			]
		};
	},
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
	width: 1000px;
	margin: 0 auto;
	color: #FFFFFF;
}
</style>
