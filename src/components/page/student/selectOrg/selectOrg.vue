<!--
 * @Description: 自主上岗
 * @Date: 2019-02-14 11:11:06
 -->
<template>
	<!-- 会计版上岗 -->
	<div class="teacher-mold">
		<div class='clearfix containter map-box content' v-if="orgArr.length > 0">
			<div class="fl-left">
				<ul class="clearfix">
					<li v-for="(item,index) in orgArr" @click="_handleOrg(index)" :class="{'active': activeIndex === index }" :key="index">
						小组{{index + 1}}
					</li>
				</ul>
			</div>
			<div class="fr">
				<!-- 没有组长 -->
				<template v-if="notLeader">
					<div class="title clearfix">
						<p  class="fl">
							邀请码：{{clazzOrg.invitationCode}}
						</p>
					</div>
					<div class="mt30 sdfsdf" style="margin-left:30px;">
						<el-row :gutter="20">
							<el-col :span="9">
								小组名称：
								<el-input style="width:250px" placeholder="小组名称" size="mini" maxlength="30" v-model="clazzOrg.orgName"></el-input>
							</el-col>
							<el-col :span="9">
								小组人数：
								<el-input-number v-model="clazzOrg.recruitNumber" size="mini" :min="1" :max="6"  label="小组人数"></el-input-number>
							</el-col>
							<el-col :span="6">
								<el-button size="small" :disabled="!clazzOrg.recruitNumber || !clazzOrg.orgName" @click="codeState = true" type="primary" round>成为组长</el-button>
							</el-col>
						</el-row>
					</div>
				</template>
				<!-- 有组长 -->
				<template v-if="!notLeader">
					<div class="sdfsdf" style="margin-left:30px;">
						<el-row :gutter="20">
							<el-col :span="8">
								小组名称：
								{{clazzOrg.orgName}}
							</el-col>
							<el-col :span="8">
								小组人数：
								{{clazzOrg.recruitNumber}}
							</el-col>
							<el-col :span="8">
								小组组长:
								{{clazzLeader}}
							</el-col>
						</el-row>
					</div>
					<ul class="clearfix org-item">
						<li @click="_handleLIst(index)" v-for="(item,index) in personlist" :class="{active : accIndex === index}" :key="index">
							<img class="round" src="./images/head.png" alt="">
							<h1>
								组员{{index + 1}}
								{{item.userInfo && (item.userInfo.leader ? "（组长）" : '')}}
							</h1>
							<div class="mt15">
								<el-button class="mt10" size="mini" v-if="item.userInfo" plain type="primary" round>已加入</el-button>
								<el-button  v-else class="mt10" size="mini" @click="_handleEnter(item.industryId)" type="primary" round>加 入</el-button>
							</div>
							<p>
								{{item.userInfo ? item.userInfo.realName : '学生未加入'}}
							</p>
						</li>
					</ul>
				</template>
			</div>
		</div>
		<!-- 暂无岗位 缺少图片 -->
		<div v-else class="center">
			<img src="./images/No.png" width="500px" alt="">
			<p class="sdfsdf f18">
				请等待老师推送团队
			</p>
		</div>
		<el-dialog title="请输入邀请码" :visible.sync="codeState" center append-to-body>

			<el-form ref="form" label-width="120px">
				<el-form-item label="小组名称:">
					<el-input style="width:250px" placeholder="小组名称" size="mini" maxlength="30" v-model="clazzOrg.orgName"></el-input>
				</el-form-item>
				<el-form-item label="小组人数:">
					<el-input-number v-model="clazzOrg.recruitNumber" size="mini" :min="1" :max="6"  label="小组人数"></el-input-number>
				</el-form-item>
				<el-form-item label="邀请码:">
					{{clazzOrg.invitationCode}}
				</el-form-item>
				<el-form-item label="请输入邀请码">
					<el-input style="width:250px" size="mini" placeholder="请输入邀请码" v-model="yqmCode"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button :disabled="yqmCode === ''" size="mini" type="primary" @click="updatayqmCode()">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
export default {
	name: 'login',
	data () {
		return {
			codeState: false,
			yqmCode: '',
			accArr: [
			],
			orgArr: [
			],
			orgObj: {
			},
			personlist: [],
			notLeader: false,
			centerDialogVisible: false,
			orgNameText: 'nihao',
			isLeader: true,
			tableData: [],
			clazzLeader: '',
			personData: [],
			accIndex: 0,
			seeVisible: false,
			activeIndex: 0,
			clazzOrg: {
				orgName: '',
				recruitNumber: 7
			},
			boxstart: 'left'
		};
	},
	created () {
		this.getOrginit();
	},
	methods: {
		/**
		 * @msg: 获取组织名称
		 */
		selectOrgData () {
			this.$ajax({
				method: 'post',
				url: '/clazzOrg/findClazzOrgById',
				params: {}
			}).then(res => {
				if (res.success) {
					this.$storage.set('orgName', res.data.orgName);
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		// 验证邀请码
		updatayqmCode () {
			this.$confirm(`小组名称为:${this.clazzOrg.orgName},小组人数为:${this.clazzOrg.recruitNumber}人`, '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				this.$ajax({
					method: 'post',
					url: '/clazzOrg/auditOrgInvitationCode',
					params: {
						orgId: this.orgObj.id,
						invitationCode: this.yqmCode
					}
				}).then(res => {
					if (res.success) {
						// 邀请码通过，再去成为组长
						this._handleLoder();
						this.codeState = false;
					} else {
						this.$message.error(res.message);
					}
				}).catch(err => {
					throw new Error(err);
				});
			}).catch(() => {
			});
		},
		/**
		 * @msg: 组长点击开始任务
		 */
		_beginTask () {
			if (!this.isLeader) {
				this.$message({
					type: 'success',
					message: '开启成功'
				});
				this.$emit('close');
				return 0;
			};
			this.$ajax({
				method: 'post',
				url: '/clazzOrg/updateClazzOrg',
				params: {
				}
			}).then(res => {
				if (res.success) {
					this.$message({
						type: 'success',
						message: res.message
					});
					this.$router.push({name: 'subtask-index'});
					this.$emit('close', false);
				} else {
					this.$message.error(res.message);
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		/**
		 * @msg: 获取班级下所有组织
		 */
		getOrginit () {
			this.$ajax({
				method: 'post',
				url: '/clazzOrg/findClazzOrgByParam',
				params: {
					isOpen: 1
				}
			}).then(res => {
				if (res.success && res.data.length > 0) {
					this.orgArr = res.data;
					this._handleOrg(0);
				} else {
					this.$message.error(res.message);
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		/**
		 * @msg: 左侧切换组织
		 */
		_handleOrg (index) {
			this.boxstart = 'right';
			this.activeIndex = index;
			this.orgObj = this.orgArr[index];
			this.orgNameText = this.orgArr[index].orgName;
			this.accArr = this.orgArr[index].list;
			this.getOrg();
		},
		/**
		 * @msg: 获取当前组织是否有人上岗
		 */
		getOrg () {
			this.$ajax({
				method: 'post',
				url: '/clazzOrg/findClazzOrgLeaderUserIdInfo',
				params: {
					orgId: this.orgObj.id
				}
			}).then(res => {
				if (res.success) {
					if (res.data.notLeader) { // 没有组长
						this.notLeader = true;
						this.clazzOrg = res.data.clazzOrg;
						this._getPersonOrg();
					} else { // 有组长
						this.notLeader = false;
						this.clazzLeader = res.data.userInfo.realName || '知链';
						this.clazzOrg = res.data.clazzOrg;
						if (res.data.isLeader) { // 本人是Leader
							this.isLeader = true;
							this.$storage.set('isOrgLoader', 1);
						} else { // 本人不是Leader
							this.isLeader = false;
							this.$storage.set('isOrgLoader', 0);
						}
						this._getPersonOrg();
					}
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		/**
		 * @msg: 当前组织下，人员上岗信息
		 */
		_getPersonOrg () {
			this.$ajax({
				method: 'post',
				url: '/clazzOrg/findOrgIndustryByParam',
				params: {
					orgId: this.orgObj.id,
					orgTypeCode: this.orgObj.orgTypeCode
				}
			}).then(res => {
				if (res.success) {
					this.personlist = res.data;
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		_delOrgPersion (id) {
			this.$confirm(`是否剔除该学生，该学生需要重新选择小组`, '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				this.$ajax({
					method: 'post',
					url: '/clazzUserIndustry/kickOutUser',
					params: {
						cuiId: id
					}
				}).then(res => {
					if (res.success) {
						this.getOrg();
						this.$message.success(res.message);
					} else {
						this.$message.error(res.message);
					}
				}).catch(err => {
					throw new Error(err);
				});
			}).catch(() => {
			});
		},
		/**
		 * @msg: 成为组长
		 */
		_handleLoder () {
			this.$ajax({
				method: 'post',
				url: '/orgRecruitRecord/becomeLeader',
				params: {
					orgId: this.orgObj.id,
					orgTypeCode: this.orgObj.orgTypeCode,
					orgName: this.clazzOrg.orgName,
					recruitNumber: this.clazzOrg.recruitNumber
				}
			}).then(res => {
				if (res.success) {
					this.getOrg();
					this.$confirm('成为组长成功', '提示', {
						confirmButtonText: '确定',
						center: true,
						showCancelButton: false,
						type: 'success'
					}).then(() => {
						this.$emit('selectOrgSuccess', 0);
					}).catch(() => {
					});
					// this.$message.success(res.message);
					this.centerDialogVisible = false;
					this.selectOrgData();
				} else {
					this.$message.error(res.message);
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		/**
		 * @msg: 上岗
		 */
		_handleEnter (id) {
			console.log(this.orgObj);
			this.$ajax({
				method: 'post',
				url: '/clazzIndustry/addClazzIndustryNumber',
				params: {
					industryId: id,
					orgId: this.orgObj.id
				}
			}).then(res => {
				if (res.success) {
					this.getOrg();
					let roleName = this.personlist[this.activeIndex].name;
					this.$storage.set('selectRoleName', roleName); // 角色名称
					let role = this.personlist[this.activeIndex].code; // 角色code
					this.$storage.set('selectRole', role);
					this.$storage.set('orgName', this.orgObj.orgName);
					this.$storage.set('industryId', id); // 角色ID
					// this.$message.success('选择角色成功');
					this.$confirm('加入小组', '提示', {
						confirmButtonText: '确定',
						center: true,
						showCancelButton: false,
						type: 'success'
					}).then(() => {
						this.$emit('selectOrgSuccess', 0);
					}).catch(() => {
					});
					this.selectOrgData();
					// this.reload();
				} else {
					this.$message.error(res.message);
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		_handleLIst (index) {
			this.accIndex = index;
		}
	}
};
</script>

<style lang="scss" scoped>
.map-box{
	width: 100%;
	// min-height: 816px;
	// background: #FFFFFF;
	border-radius: 8px;
	// border: 6px solid #EBEFFC;
	margin: 0 auto;
	// margin-top: -75px;
	// padding: 10px;
	// position: relative;
	// top: -70px;
	// padding-top: 20px;
	// li{
	// 	float: left;
	// 	width: 265px;
	// 	border: 1px solid #dddd;
	// 	margin: 10px;
	// 	padding-bottom: 20px;
	// }
}
// .teacher-mold{
// 	background: #FFFFFF;
// }
.content{
	min-height: 300px;
	>.fl-left{
		width: 140px;
		border-right:1px solid rgba(226,243,255,0.60);
		// border-radius: 8px;
		// border-radius: 8px;
		padding: 0  15px 0 0 ;
		float: left;
		// padding-top: 20px;
		li{
			height: 40px;
			line-height: 33px;
			font-size: 14px;
			cursor: pointer;
			color: #4C6C88;
			text-align: center;
			color: #ffffff;
			&.active{
				color: #ffffff;
				background: url('./images/ccc.png') no-repeat 100% 100%;
				background-size: cover;
			}
		}
	}
	>.fr{
		// border-left: 1px solid #D8D8D8;
		width: calc(100% - 140px);
		min-height: 300px;
		float: right;
		.org-item{
			padding-left: 110px;
			li{
				float: left;
				width: 200px;
				height: 180px;
				// border: 1px solid #DDDDDD;
				border-radius: 2px;
				margin-left: 30px;
				margin-right: 30px;
				margin-top: 20px;
				margin-bottom: 20px;
				text-align: center;
				padding: 0 10px;
				background: rgba(0, 0, 0, 0);
				box-shadow: inset 0px 0px 20px 0px rgba(0, 147, 228, 0.7);
				border-radius: 4px;
				border: 1px solid #0093E4;
				&.active{
					// background: #F7FFFD;
					// border: 1px solid #00BA88;
					background: linear-gradient(143deg, #00CBCB 0%, #007BE4 100%);
					box-shadow: inset 0px 0px 20px 0px rgba(0, 147, 228, 0.7);
					border-radius: 4px;
					// opacity: 0.89;
					// border: 1px solid;
					border-image: linear-gradient(143deg, rgba(0, 127, 223, 1), rgba(49, 237, 255, 1)) 1 1;
				}
				img{
					width: 50px;
					height: 50px;
					margin: 15px auto 10px;
				}
				h1{
					font-size: 14px;
					color: #fff;
				}
				p{
					font-size: 12px;
					color: #fff;
					margin-top: 15px;
				}
			}
		}
		.title{
			// height: 50px;
			// line-height: 50px;
			// text-indent: 30px;
			// font-size: 20px;
			// color: #5FC18E;
			// background: #F6FFFA;
			// border: 1px solid #5FC18E;
			// border-radius: 5px;
			// border-top-width: 3px;
			// border-left-width: 3px;
			padding-left: 30px;
			// margin-top: 20px;
			font-size: 16px;
			color: #fff;
			letter-spacing: 0;
		}
	}
}
.sdfsdf{
	color: #fff;
}
// .fl-top{
// 	background: url('./images/top.png') no-repeat center center;
// 	background-size: 100%;
// 	height: 80px;
// }
.btn-position{
	position: absolute;
	left: 50%;
	bottom: 20px;
	transform: translateX(-50%);
}
</style>
