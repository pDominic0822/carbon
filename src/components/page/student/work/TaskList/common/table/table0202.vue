<!--
 * @Author: zhangln
 * @Description: 差旅费报销单
 * @Date: 2019-02-12 16:59:25
 -->
<template>
	<div class="contentBox">
		<table class="demo-table">
			<tr>
				<td colspan="4">库存碳汇</td>
			</tr>
			<tr>
				<td>分类</td>
				<td>项目</td>
				<td>数量（Kg）</td>
				<td>价值（元）</td>
			</tr>
		</table>
		<table class="demo-table" v-for="(item, index) in fromInfo" :key="index">
			<tr v-for="(childField, childFieldIndex) in item.childFieldList" :key="childFieldIndex">
				<td :rowspan="item.childFieldList.length" v-if="childFieldIndex === 0">
					{{item.fieldName}}
				</td>
				<td>
					{{childField.fieldName}}
				</td>
				<td :class="{'inputClass' : childField.countValueReadonly}">
					<template v-if="childField.countValueReadonly">
						<el-input-number :readonly="!childField.countValueReadonly" controls-position="right" size="mini" :controls="false" v-model="childField.countValue" :precision="0" :step="1" :max="100000000"></el-input-number>
					</template>
					<template v-else>
						{{childField.countValue}}
					</template>
				</td>
				<td  :class="{'inputClass' : childField.worthValueReadonly}">
					<template v-if="childField.worthValueReadonly">
						<el-input-number :readonly="!childField.worthValueReadonly" controls-position="right" size="mini" :controls="false" v-model="childField.worthValue" :precision="2" :step="0.1" :max="100000000"></el-input-number>
					</template>
					<template v-else>
						{{childField.worthValue}}
					</template>
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
			from: {
				numberOf: '',
				valof: '',
				value3: '',
				value4: '',
				value5: '',
				value6: '',
				value7: '',
				value8: '',
				value9: '',
				value10: '',
				value11: '',
				value12: ''
			}
		};
	},
	props: [
		'fromInfo',
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
	// width: 1200px;
	margin: 0 auto;
	color: #FFFFFF;
}
</style>
