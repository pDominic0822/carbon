<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr>
				<td>序号</td>
				<td>组名</td>
				<td>绿电数量（度）</td>
				<td>煤电数量（度）</td>
				<td>绿电采购金额（元）</td>
				<td>煤电采购金额（元）</td>
				<td>电力采购合计（元）</td>
			</tr>
			<tr v-for="(trItem, trIndex) in trList" :key="trIndex">
				<td>
					{{trIndex + 1}}
				</td>
				<td>
					{{trItem.groupName}}
				</td>
				<td>
					{{trItem.greenpowerquantity}}
				</td>
				<td>
					{{trItem.coalpowerquantity}}
				</td>
				<td>
					{{trItem.greenpowermoney}}
				</td>
				<td>
					{{trItem.coalpowermoney}}
				</td>
				<td>
					{{trItem.powertotal}}
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
					groupName: 'xxx	',
					greenpowerquantity: '学生购买绿电证书数量*1000',
					coalpowerquantity: '煤电数量=(绿电数量/绿电占总电的比例)*1-绿电占总电的比例',
					greenpowermoney: '绿电价值=绿电数量*绿电当年单价',
					coalpowermoney: '煤电数量*当年价格',
					powertotal: '绿电采购金额+煤电采购金额'
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
	width: 100%;
	margin: 0 auto;
	color: #FFFFFF;
}
</style>
