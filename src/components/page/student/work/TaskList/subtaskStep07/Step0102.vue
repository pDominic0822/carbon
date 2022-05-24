
<template>
	<div class="stu">
		<ul class="sell-box">
			<li>
				<div class="fl imgps">
				</div>
				<div class="fl sellinfo">
					<div class="span1 mt15">
						采购物料
						<p class="fr">
							模拟经营公司：{{$storage.get('orgName')}}
						</p>
					</div>
					<div class="mt15">
						<p>
							采购价格      =   采购单价( 包 ) *     采购数量(包 )
						</p>
					</div>
					<div class="mt30">
						<el-row :gutter="20">
							<el-col :span="6">
								采购单价( 包 )：
							</el-col>
							<el-col :span="12">
								{{fromInfo.unitMaterialValue | formatNumber}}
							</el-col>
						</el-row>
					</div>
					<div class="mt20">
						<el-row :gutter="20">
							<el-col :span="6">
								采购数量(包 )
							</el-col>
							<el-col :span="12">
								<el-input-number controls-position="right" size="mini" :controls="false" v-model="fromInfo.countMaterial"  :step="1"></el-input-number>
							</el-col>
						</el-row>
					</div>
					<div class="mt30">
						<el-row :gutter="20">
							<el-col :span="6">
								采购金额( 元 )
							</el-col>
							<el-col :span="12">
								{{((fromInfo.countMaterial || 0) * (fromInfo.unitMaterialValue || 0)) | formatNumber}}
							</el-col>
						</el-row>
					</div>
				</div>
			</li>
		</ul>
		<!-- <pageTable ref="pageTable" :tableType="tableType" :fromInfo="fromInfo" :showInputMap="showInputMap"></pageTable> -->
		<div class="mt20 center">
			<el-button type="success" :disabled="isSaveData" @click="getPageJson()">
				{{!isSaveData ? '保存' : '已经保存'}}
			</el-button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'my-course',
	data () {
		return {
			tableType: 'pagetable0702',
			arrList: [],
			showInputMap: {
				countMaterial: true
			},
			isSaveData: false,
			fromInfo: {
				countMaterial: '',
				unitMaterialValue: '',
				materialValue: '',
				ownCashAmount: '',
				unitMaterialEmission: ''
			}
		};
	},
	created () {
		this.init();
	},
	methods: {
		init () {
			this.$ajax({
				method: 'post',
				url: '/stOrgMaterialRecord/getStOrgMaterialRecord',
				params: {
					moldId: this.$route.query.moldId || this.moldId || '',
					clazzYearsPushId: this.$route.query.clazzYearsPushId || ''
				}
			}).then(res => {
				if (res.success) {
					if (res.data) {
						this.fromInfo = res.data;
					}
					if (res.data.countMaterial > 0) {
						this.isSaveData = true;
					} else {
						this.isSaveData = false;
					}
				}
			});
		},
		getPageJson () {
			let materialValue = this.fromInfo.countMaterial * this.fromInfo.unitMaterialValue;
			let gavematerialEmission = this.fromInfo.countMaterial * this.fromInfo.unitMaterialEmission;
			console.log(this.fromInfo.countMaterial);
			this.$confirm(`采购数量: ${this.fromInfo.countMaterial}(包 ),采购金额：${materialValue}( 元 )`, '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				center: true,
				type: 'warning'
			}).then(res => {
				this.$ajax({
					method: 'post',
					url: '/stOrgMaterialRecord/saveStOrgMaterialRecord',
					params: {
						moldId: this.$route.query.moldId || this.moldId || '',
						clazzYearsPushId: this.$route.query.clazzYearsPushId || '',
						subtaskId: this.$route.query.subtaskId || '',
						taskId: this.$route.query.taskId || '',
						industryId: this.$route.query.industryId || '',
						countMaterial: this.fromInfo.countMaterial || '',
						materialValue: materialValue,
						materialEmission: gavematerialEmission
					}
				}).then(res => {
					if (res.success) {
						this.$store.commit('getPropertyTypeStatis', 'ownCashAmount');
						this.$confirm(`成功购买物料${this.fromInfo.countMaterial}包`, '成功', {
							confirmButtonText: '确定',
							center: true,
							showCancelButton: false,
							type: 'success'
						}).then(() => {

						}).catch(() => {
						});
						this.init();
					} else {
						this.$message({
							type: 'error',
							message: res.message
						});
					}
				});
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.sell-box{
	width: 100%;
	li{
		border: 1px solid #CCCCCC;
		height: 240px;
		margin-top: 20px;
		cursor: pointer;
		color: #ccc;
		&.isSelect {
			border: 1px solid #CCCCCC;
			color: #373737;
			.sellinfo{
				.span1{
					font-weight: 600;
					color: #373737;
				}
				.span2{
					font-size: 18px;
					color: #EC7F00;
				}
				.span3{
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #666666;
				}
			}
		}
		&.active{
			border: 1px solid #4657AD;
		}
		.imgps{
			width: 220px;
			height: 100%;
			background: url('./../common/images/crudeTreasure.jpg');
			background-size: cover;
		}
		.sellinfo{
			width: calc(100% - 220px);
			padding: 10px 20px;
			.span1{
				font-weight: 600;
				color: #ccc;
			}
			.span2{
				font-size: 18px;
				color: #ccc;
			}
			.span3{
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #ccc;
			}
		}
	}
}
</style>
