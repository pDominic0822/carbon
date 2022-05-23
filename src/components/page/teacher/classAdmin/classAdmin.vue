<!--
 * @Author: zhangln
 * @Description: 老师端组织管理
 * @Date: 2019-03-20 10:07:18
 -->
<template>
	<!-- 会计版上岗 -->
	<div class="teacher-mold">
		<div class="User-info-Banner">
			<div class="info-title">
				<p>
					学生管理
				</p>
				<p>
					展示当前班级内所有学生的账号和密码，教师可以通过此功能管理学生的密码，帮助丢失密码的学生进行密码的重置
				</p>
			</div>
		</div>
		<div class="containter map-box">
			<table class="demo-table ">
				<tr class="color1">
					<td colspan="2">序号</td>
					<td colspan="2">姓名</td>
					<td colspan="2">操作</td>
				</tr>
				<tr v-for="(item, index) in tableData" :key="index">
					<td colspan="2">
						{{index + 1}}
					</td>
					<td colspan="2">
						{{item.realName}}
					</td>
					<td colspan="2">
						<el-button type="primary" @click="resetPassword(item)">重置密码</el-button>
					</td>
				</tr>
			</table>
			<div class="mt20 center paginationDiv">
				<el-pagination background @current-change="handleCurrentChange2"
				layout="total, prev, pager, next, jumper" :total="total2"
				:page-size="pageSize2"
				:current-page='pageNum2'></el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'login',
	data () {
		return {
			accArr: [
			],
			orgArr: [
			],
			orgObj: {
			},
			indObj: {},
			isddd: false,
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
			IndIndex: -1,
			unPersonInd: [],
			unPersonId: '',
			typeIndex: 0,
			sectionIndex: 0,
			pageSize: 10,
			total: 0,
			resourceAll: [],
			// pageNum: 1, // 页码
			chapterId: '',
			modelArr: [],
			// 成绩详情分页
			pageSize2: 20,
			total2: 0,
			pageNum2: 1,
			tableView: [],
			clazzOrg: {
				orgName: '',
				recruitNumber: 4
			}
		};
	},
	created () {
		this.getStuInit();
	},
	methods: {
		/**
		 * @name: zhangln
		 * @msg: 点击
		 */
		_clickIndusty () {
			console.log(this.unPersonId);
			console.log(this.orgObj);
			console.log(this.indObj);
			this.$ajax({
				method: 'post',
				url: '/clazzIndustry/addClazzIndustryNumber',
				params: {
					moldId: this.$route.params.moldId,
					industryId: this.indObj.industryId,
					orgId: this.orgObj.id,
					selectUserId: this.unPersonId
				}
			}).then(res => {
				if (res.success) {
					this._getPersonOrg();
					this.$message({
						type: 'success',
						message: res.message
					});
					this.isddd = false;
				} else {
					this.$message({
						type: 'success',
						message: res.message
					});
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		/**
		 * @name: zhangln
		 * @msg: 点击人员列表
		 */
		_handleUnPerson (index) {
			this.IndIndex = index;
			let item = this.unPersonInd[index];
			this.unPersonId = item.userId;
		},
		resetPassword (item) {
			this.$ajax({
				method: 'post',
				url: '/user/updateUserPassword',
				params: {
					stuUserId: item.userId,
					password: '123456'
				}
			}).then(res => {
				if (res.success) {
					this.getStuInit();
					this.$message({
						type: 'success',
						message: '成功设置学生密码为：123456'
					});
				} else {
					this.$message({
						type: 'success',
						message: res.message
					});
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		getStuInit () {
			this.$ajax({
				method: 'post',
				url: '/clazzUser/findClazzUserInfoListByClazzId',
				params: {
				}
			}).then(res => {
				if (res.success) {
					this.tableView = res.data || [];
					this.total2 = this.tableView.length;
					this.handleCurrentChange2(this.pageNum2 || 1);
				} else {
					this.$message({
						type: 'success',
						message: res.message
					});
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		// 成绩详情分页
		handleCurrentChange2 (val) {
			this.pageNum2 = val;
			this.tableData = this.tableView.slice((val - 1) * this.pageSize2, val * this.pageSize2);
		},
		/**
		 * @name: zhangln
		 * @msg: 获取当前已经推送的组织
		 */
		getOrginit () {
			this.$ajax({
				method: 'post',
				url: '/clazzOrg/findClazzOrgByParam',
				params: {
					// moldId: this.$route.params.moldId,
					isOpen: 1
				}
			}).then(res => {
				if (res.success) {
					this.orgArr = res.data;
					this._handleOrg(0);
				} else {
					this.$message({
						type: 'success',
						message: res.message
					});
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		/**
		 * @name: zhangln
		 * @msg: 点击切换组织
		 */
		_handleOrg (index) {
			this.activeIndex = index;
			this.orgObj = this.orgArr[index];
			this.orgNameText = this.orgArr[index].orgName;
			this.accArr = this.orgArr[index].list;
			this._getPersonOrg();
		},
		// 获取当前组织信息是否上岗
		getOrg () {
			this.$ajax({
				method: 'post',
				url: '/clazzOrg/findClazzOrgLeaderUserIdInfo',
				params: {
					moldId: this.$route.params.moldId,
					orgId: this.orgObj.id
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
						} else { // 本人不是Leader
							this.isLeader = false;
						}
						this._getPersonOrg();
					}
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		/**
		 * @name: zhangln
		 * @msg: 获取当前小组上岗情况
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
			this.$ajax({
				method: 'post',
				url: '/clazzUserIndustry/teacherKickOutUser',
				params: {
					cuiId: id
				}
			}).then(res => {
				if (res.success) {
					this.getOrg();
					this.$message({
						type: 'success',
						message: res.message
					});
				} else {
					this.$message({
						type: 'success',
						message: res.message
					});
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		/**
		 * @name: zhangln
		 * @msg: 老师设置学生上岗
		 */
		_handleEnter (index) {
			this.accIndex = index;
			this.indObj = this.personlist[index];
			this.$ajax({
				method: 'post',
				url: '/clazzUserIndustry/findNotMountGuard'
			}).then(res => {
				if (res.success) {
					this.unPersonInd = res.data;
					this.isddd = true;
				} else {
				}
			}).catch(err => {
				throw new Error(err);
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.User-info-Banner{
	// width: 1366px;
	margin: 0 auto;
	background: url('../img/banner2.png') no-repeat top center;
	background-size: cover;
	height: 364px;
	padding-top: 50px;
	.info-title{
		width: 1200px;
		height: 100%;
		margin: 0 auto;
		&>p:nth-of-type(1){
			font-family: PingFangSC-Medium;
			font-size: 30px;
			color: #FFFFFF;
			letter-spacing: 2.25px;
			padding-top: 30px;
		}
		&>p:nth-of-type(2){
			font-family: PingFangSC-Regular;
			width: 960px;
			font-size: 18px;
			color: #FFFFFF;
			line-height: 33px;
			padding-top: 28px;
		}
	}
}
.map-box{
	width: 1200px;
	min-height: 816px;
	background: #FFFFFF;
	border-radius: 8px;
	border: 6px solid #EBEFFC;
	margin: 0 auto;
	margin-top: -75px;
	padding: 20px;
	position: relative;
	top: -70px;
	li{
		float: left;
		width: 265px;
		border: 1px solid #dddd;
		margin: 10px;
		padding-bottom: 20px;
	}
}

</style>
