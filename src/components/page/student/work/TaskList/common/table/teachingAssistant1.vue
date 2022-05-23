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
					碳汇市场排名
				</td>
			</tr>
			<tr>
				<td>排名</td>
				<td>产品名称</td>
				<td>价格（元/Kg）</td>
				<td>小组名称</td>
				<td>一轮采购数量</td>
				<td>二轮采购数量</td>
				<td>采购小计</td>
				<td>碳配额</td>
				<td>碳权合计</td>
			</tr>
			<tr v-for="(trItem, trIndex) in trList" :key="trIndex">
				<td>
					{{trIndex + 1}}
				</td>
				<td>
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
				<td>
					{{trItem.value8}}
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
					value1: '碳汇',
					value2: '50',
					value3: '玉雪组',
					value4: '1000',
					value5: '1000',
					value6: '2000',
					value7: '800',
					value8: '3000'
				},
				{
					value1: '碳汇',
					value2: '50',
					value3: '玉雪组',
					value4: '1000',
					value5: '1000',
					value6: '2000',
					value7: '800',
					value8: '3000'
				},
				{
					value1: '碳汇',
					value2: '50',
					value3: '玉雪组',
					value4: '1000',
					value5: '1000',
					value6: '2000',
					value7: '800',
					value8: '3000'
				},
				{
					value1: '碳汇',
					value2: '50',
					value3: '玉雪组',
					value4: '1000',
					value5: '1000',
					value6: '2000',
					value7: '800',
					value8: '3000'
				},
				{
					value1: '碳汇',
					value2: '50',
					value3: '玉雪组',
					value4: '1000',
					value5: '1000',
					value6: '2000',
					value7: '800',
					value8: '3000'
				},
				{
					value1: '碳汇',
					value2: '50',
					value3: '玉雪组',
					value4: '1000',
					value5: '1000',
					value6: '2000',
					value7: '800',
					value8: '3000'
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
