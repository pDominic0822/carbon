<template>
<div>
	<div class="distribu33te clearfix">
		<div class="actor" v-for="(actoritem, actorIndex) in actorIndustryArr" :key="actorIndex">
			<div class="actorimg"></div>
			<p class="names">{{actoritem.name}}</p>
			<div class="mt20 sdfsdf center">
				<el-dropdown @command="handlePersion">
					<span class="el-dropdown-link">
						{{actoritem.realName || '请选择组员'}}
						<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item
						v-for="(item, personIndex) in personlist"
						:key="item.userId"
						:command="{
							actorIndex: actorIndex,
							personIndex: personIndex,
						}">
						{{item.realName}}
						</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
		</div>
	</div>
	<div class="mt40 center clearfix">
		<el-button class="mt10" size="mini" plain @click="_saveUserOrgInd()" type="primary" round>组长提交</el-button>
	</div>
</div>
</template>

<script>
export default {
	name: 'login',
	components: {
	},
	data () {
		return {
			personlist: [],
			actorIndustryArr: [],
			checkList: [],
			boxstart: 'left'
		};
	},
	created () {
		this.getorgUserIndustry();
		this.getRole();
	},
	methods: {
		handlePersion (command) {
			console.log(command);
			let actorIndex = command.actorIndex;
			let personIndex = command.personIndex;
			let item = this.personlist[personIndex];
			let actoritem = this.actorIndustryArr[actorIndex];
			actoritem.userId = item.userId;
			actoritem.realName = item.realName;
			// console.log(actorIndex);
		},
		// 获取当前人是否分配角色了
		getorgUserIndustry () {
			this.$ajax({
				method: 'post',
				url: '/stOrgUserIndustry/findOrgIndustryUserInfoMap',
				params: {
				}
			}).then(res => {
				if (res.success) {
					this.actorIndustryArr = res.data;
					// this.isUserIndustryVisible = true;
					// this.moldVisible = false;
				} else {
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		_saveUserOrgInd () {
			// let json = [
			// 	{
			// 		'userId': '100188',
			// 		'industryId': '79'
			// 	},
			// 	{
			// 		'userId': '100188',
			// 		'industryId': '80'
			// 	}
			// ];
			if (this.$storage.get('isOrgLoader') + '' !== '1') {
				this.$confirm('请让小组组长提交', '提示', {
					confirmButtonText: '确定',
					center: true,
					showCancelButton: false,
					type: 'warning'
				}).then(() => {

				}).catch(() => {
				});
				return false;
			}
			let json = [];
			let obj = {};
			let array = this.actorIndustryArr;
			for (let index = 0; index < array.length; index++) {
				const element = array[index];
				if (!element.userId) {
					this.$message({
						type: 'error',
						message: `${element.name}请分配小组人员`
					});
					return;
				}
				json.push({
					userId: element.userId,
					industryId: element.industryId
				});
				obj[element.userId] = true;
			}
			console.log(obj);
			let i = 0;
			for (const key in obj) {
				console.log(key);
				i++;
			}
			if (i !== this.personlist.length) {
				this.$message({
					type: 'error',
					message: `请合理分配小组人员角色，不能有人不分配角色`
				});
				return false;
			}

			this.$ajax({
				method: 'post',
				url: '/stOrgUserIndustry/saveStOrgUserIndustryBatch',
				params: {
					orgUserIndustryJson: JSON.stringify(json)
				}
			}).then(res => {
				if (res.success) {
					this.$confirm('分配角色成功', '提示', {
						confirmButtonText: '确定',
						center: true,
						showCancelButton: false,
						type: 'success'
					}).then(() => {
						this.$emit('sendIndOrg');
					}).catch(() => {
					});
				} else {
					this.$message({
						type: 'error',
						message: `分配角色失败`
					});
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		// 获取角色信息
		getOrgInd () {
			this.$ajax({
				method: 'post',
				url: '/organizationIndustry/findOrgIndustryInfoList',
				params: {
				}
			}).then(res => {
				if (res.success && res.data) {
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		_handChart (data) {
			console.log(data);
		},
		getRole () {
			this.$ajax({
				method: 'post',
				url: '/clazzIndustry/findUserIndustry',
				params: {
				}
			}).then(res => {
				if (res.success && res.data) {
					if (!res.data.isIndustry) {
						// this.$confirm('您未加入团队，请加入团队?', '提示', {
						// 	confirmButtonText: '确定',
						// 	cancelButtonText: '取消',
						// 	type: 'warning'
						// }).then(() => {
						// 	this.$router.push({name: 'select-org'});
						// }).catch(() => {
						// });
						// this.centerDialogVisible = true;
					} else {
						this.$storage.set('orgName', res.data.clazzOrg.orgName);
						this.$storage.set('indName', res.data.industry.name);
						this.$storage.set('clazzOrg', res.data.clazzOrg);
						this.$storage.set('industry', res.data.industry);
						this._getPersonOrg(res.data.clazzOrg);
						this.getOrg(res.data.clazzOrg);
					}
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		selectOrgData () {
			this.$ajax({
				method: 'post',
				url: '/clazzOrg/getOrgGroupLeader',
				params: {}
			}).then(res => {
				if (res.success && res.data) {
					if (res.data.notLeader) { // 是组长
						this.$storage.set('isOrgLoader', 1);
					} else {
						this.$storage.set('isOrgLoader', 0);
					}
				}
			}).catch(err => {
				throw new Error(err);
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
					// moldId: this.$storage.get('moldId')
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
					this.$myMessage.error(res.message);
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		/**
		 * @msg: 获取当前组织是否有人上岗
		 */
		getOrg (orgObj) {
			this.$ajax({
				method: 'post',
				url: '/clazzOrg/findClazzOrgLeaderUserIdInfo',
				params: {
					orgId: orgObj.id
				}
			}).then(res => {
				if (res.success) {
					if (res.data.notLeader) { // 没有组长
						this.notLeader = true;
						this.clazzOrg = res.data.clazzOrg;
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
					}
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		/**
		 * @msg: 当前组织下，人员上岗信息
		 */
		_getPersonOrg (orgObj) {
			this.$ajax({
				method: 'post',
				url: '/clazzOrg/findOrgIndustryByParam',
				params: {
					orgId: orgObj.id,
					orgTypeCode: orgObj.orgTypeCode
				}
			}).then(res => {
				if (res.success) {
					let array = res.data;
					let arr = [];
					for (let index = 0; index < array.length; index++) {
						const element = array[index];
						if (element.userInfo) {
							arr.push({
								realName: element.userInfo.realName,
								userId: element.userInfo.userId
							});
						}
					}
					this.personlist = arr;
				}
			}).catch(err => {
				throw new Error(err);
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
					// moldId: this.$storage.get('moldId'),
					orgId: this.orgObj.id,
					orgTypeCode: this.orgObj.orgTypeCode,
					orgName: this.clazzOrg.orgName,
					recruitNumber: this.clazzOrg.recruitNumber
				}
			}).then(res => {
				if (res.success) {
					this.getOrg();
					this.$myMessage.success(res.message);
					this.centerDialogVisible = false;
					this.selectOrgData();
				} else {
					this.$myMessage.error(res.message);
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
					// moldId: this.$storage.get('moldId')
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
					this.$myMessage.success('选择角色成功');
					this.selectOrgData();
					// this.reload();
				} else {
					this.$myMessage.error(res.message);
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

.sdfsdf{
	color: #FFFFFF;
}
.distribu33te {
	margin: 0 auto;
	margin-top: 20px;
	width: 780px;
	// height: 250px;
	background: #2C325E;

	.descrble {
		float: left;
		width: 450px;
		line-height: 20px;
		height: 20px;
		font-size: 14px;
		color: #FFCA14;
		margin-right: 50px;
	}

	.fontco {
		width: 140px;
		color: #FFFFFF;
		// margin-left: 10px;
		margin-right: 0px;
	}

	.actor {
		float: left;
		margin-top: 15px;
		margin: 10px 40px;
		width: 180px;
		height: 200px;
		background: rgba(0, 0, 0, 0);
		box-shadow: inset 0px 0px 20px 0px rgba(0, 147, 228, 0.7);
		border-radius: 4px;
		border: 1px solid #0093E4;

		.actorimg {
			width: 48px;
			height: 48px;
			margin: 0 auto;
			margin-top: 28px;
			background: url('./images/head.png') no-repeat center center;
			background-size: contain;
		}

		.names {
			color: #FFFFFF;
			line-height: 22px;
			height: 22px;
			font-size: 16px;
			margin: 0 auto;
			margin-top: 15px;
			text-align: center;
		}

		.actortag {
			margin: 0 auto;
			margin-top: 5px;
			width: 88px;
			// height: 50px;
			// background: #0093E4;
			border-radius: 2px;

			.tagsname {
				margin-top: 5px;
				width: 88px;
				height: 28px;
				background: #0093E4;
				border-radius: 2px;
			}

			.el-tag {
				margin-top: 5px;
				width: 88px;
				border-radius: 2px;
			}
		}
	}
}
</style>
