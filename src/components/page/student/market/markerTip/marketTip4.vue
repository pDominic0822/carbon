<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr>
				<td>小组名称</td>
				<td>已投入技改资金(万)</td>
				<td>剩余绿贷(万)</td>
				<td>节能项目减少耗电(万)</td>
				<td>节能减少排放(Kg)</td>
				<td>减排项目减少排放(Kg)</td>
				<td>合计年度减排量(Kg)</td>
				<td>年度产品碳标签(kg/个)</td>
				<td>年度产品碳成本(元/个)</td>
				<td>年度还贷金额 ( 元 )</td>
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
				<td>
					{{trItem.value9}}
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
					value1: '',
					value2: '',
					value3: '',
					value4: '',
					value5: '',
					value6: '',
					value7: '',
					value8: '',
					value9: ''
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
	padding: 0 15px;
	margin: 0 auto;
	overflow: hidden;
	overflow-x: auto;
	.demo-table{
		width: 2000px;
	}
}
</style>
