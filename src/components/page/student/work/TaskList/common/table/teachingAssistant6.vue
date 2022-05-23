<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr>
				<td colspan="8">
					绿贷市场
				</td>
			</tr>
			<tr>
				<td>序号</td>
				<td>业务名称</td>
				<td>利率</td>
				<td>年限/年</td>
				<td>小组名称</td>
				<td>申请金额</td>
				<td>操作</td>
				<td>数据披露</td>
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
					value1: '绿贷申请',
					value2: '1.5%',
					value3: '5',
					value4: '玉雪组',
					value5: '5000000',
					value6: '已提交',
					value7: '披露'
				},
				{
					value1: '绿贷申请',
					value2: '1.5%',
					value3: '5',
					value4: '玉雪组',
					value5: '5000000',
					value6: '已提交',
					value7: '披露'
				},
				{
					value1: '绿贷申请',
					value2: '1.5%',
					value3: '5',
					value4: '玉雪组',
					value5: '5000000',
					value6: '已提交',
					value7: '披露'
				},
				{
					value1: '绿贷申请',
					value2: '1.5%',
					value3: '5',
					value4: '玉雪组',
					value5: '5000000',
					value6: '已提交',
					value7: '披露'
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
