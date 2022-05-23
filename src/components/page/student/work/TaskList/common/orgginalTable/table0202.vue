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
      <tr
        v-for="(childField, childFieldIndex) in item.childFieldList"
        :key="childFieldIndex"
      >
        <td :rowspan="item.childFieldList.length" v-if="childFieldIndex === 0">
          {{ item.fieldName }}
        </td>
        <td>
          {{ childField.fieldName }}
        </td>
        <td :class="{ inputClass: childField.countValueReadonly }">
          <template >
            <el-input-number
              :readonly="!childField.countValueReadonly"
              controls-position="right"
              size="mini"
              :controls="false"
              v-model="childField.countValue"
              :precision="0"
              :step="1"
              :max="100000000"
            ></el-input-number>
          </template>
        </td>
        <td :class="{ inputClass: childField.worthValueReadonly }">
          <template >
            <el-input-number
              :readonly="!childField.worthValueReadonly"
              controls-position="right"
              size="mini"
              :controls="false"
              v-model="childField.worthValue"
              :precision="2"
              :step="0.1"
              :max="100000000"
            ></el-input-number>
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
			fromInfo: [{'fieldSort': 100, 'fieldName': '期初', 'childFieldList': [{'fieldSort': 95, 'fieldName': '期初碳汇库存', 'childFieldList': [], 'fieldCode': 'initial_stock', 'tableKeyId': 55, 'workFieldValue': null}], 'fieldCode': 'initial_classify', 'tableKeyId': 54, 'workFieldValue': null}, {'fieldSort': 90, 'fieldName': '采购', 'childFieldList': [{'fieldSort': 85, 'fieldName': '期中碳汇采购', 'childFieldList': [], 'fieldCode': 'midterm_purchase_count', 'tableKeyId': 57, 'workFieldValue': null}], 'fieldCode': 'purchase_classify', 'tableKeyId': 56, 'workFieldValue': null}, {'fieldSort': 80, 'fieldName': '消耗', 'childFieldList': [{'fieldSort': 75, 'fieldName': '消耗合计数量', 'childFieldList': [], 'fieldCode': 'consume_total', 'tableKeyId': 59, 'workFieldValue': null}, {'fieldSort': 70, 'fieldName': '期初库存碳汇', 'childFieldList': [], 'fieldCode': 'initial_consume', 'tableKeyId': 60, 'workFieldValue': null}, {'fieldSort': 65, 'fieldName': '期中采购碳汇', 'childFieldList': [], 'fieldCode': 'midterm_consume', 'tableKeyId': 61, 'workFieldValue': null}], 'fieldCode': 'consume_classify', 'tableKeyId': 58, 'workFieldValue': null}, {'fieldSort': 65, 'fieldName': '期末', 'childFieldList': [{'fieldSort': 65, 'fieldName': '期末碳汇库存', 'childFieldList': [], 'fieldCode': 'end_period_stock', 'tableKeyId': 63, 'workFieldValue': null}], 'fieldCode': 'end_period', 'tableKeyId': 62, 'workFieldValue': null}],
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
	props: ['showInputMap'],
	watch: {},
	created () {},
	methods: {},
	mounted () {}
};
</script>

<style lang="scss" scoped>
.contentBox {
  // width: 1200px;
  margin: 0 auto;
  color: #ffffff;
}
</style>
