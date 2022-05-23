<!--
 * @Author: zhangln
 * @Description: 老师端组织管理
 * @Date: 2019-03-20 10:07:18
 -->
<template>
	<!-- 会计版上岗 -->
	<div class="teacher-mold">
		<div class='clearfix mt30 containter map-box content' v-if="orgArr.length > 0">
			<div class="fl">
				<!-- <div class="fl-top"></div> -->
				<ul>
					<li @click="_handleOrg(index)" v-for="(item,index) in orgArr" :class="{active : activeIndex === index}" :key="index">
						<i class="iconfont icon-gongsi" style="font-size:30px"></i>&nbsp;&nbsp;
						<span class="inlineBlock">
							{{item.orgName}}
						</span>
						<i class="iconfont icon-sanjiao"></i>
					</li>
				</ul>
			</div>
			<div class="fr">
				<template>
					<div class="title">
						{{orgNameText}}
					</div>
					<ul class="clearfix org-item">
						<li v-for="(item,index) in personlist" :class="{active : accIndex === index}" :key="index">
							<img class="round" src="./img/actimg.png" alt="">
							<h1>
								组员{{index + 1}}
								{{item.userInfo && (item.userInfo.leader ? "（组长）" : '')}}
							</h1>
							<div class="mt15">
								<template v-if="item.userInfo && !item.userInfo.leader">
									<el-button class="mt20" size="mini"   @click="_delOrgPersion(item.userInfo)" plain type="danger" round>剔除人员</el-button>
								</template>
								<template v-if="item.userInfo && item.userInfo.leader">
									<el-button class="mt20" size="mini"  plain type="success" round>
										组长
									</el-button>
								</template>
								<el-button class="mt20" v-if="!item.userInfo" size="mini" @click="_handleEnter(index)" type="primary" round>设置学生加入</el-button>
							</div>
							<p>
								{{item.userInfo ? item.userInfo.realName : '暂未加入'}}
							</p>
						</li>
					</ul>
					<div class="mt30">
					</div>
				</template>
			</div>
		</div>
		<!-- 暂无岗位 缺少图片 -->
		<div v-else></div>
		<el-dialog
			title="选择人员加入"
			:visible.sync="isddd"
			width="1200px"
			center
			show-close>
			<div style="min-height:520px">
				<ul class="person-list">
					<li v-for="(item,index) in unPersonInd" :class="{active: index === IndIndex}" @click="_handleUnPerson(index)" :key="index">
						<img class="round" :src="$storage.get('UserImage')" alt="">
						<p>
							{{item.realName}}
						</p>
					</li>
				</ul>
				<div class="center mt40">
					<el-button class="mt20" :disabled="!unPersonId" @click="_clickIndusty()" type="primary" round>设置学生加入</el-button>
				</div>
			</div>
		</el-dialog>
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
			clazzOrg: {
				orgName: '',
				recruitNumber: 4
			}
		};
	},
	created () {
		this.getOrginit();
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
		/**
		 * @name: zhangln
		 * @msg: 获取当前已经推送的组织
		 */
		getOrginit () {
			this.$ajax({
				method: 'post',
				url: '/clazzOrg/findClazzOrgByParam',
				params: {
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
		_delOrgPersion (userInfo) {
			if (userInfo.leader) {
				this.$message({
					type: 'error',
					message: '该学生是组长，不能剔除'
				});
				return;
			}

			this.$confirm('剔除团队人员, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				this.$ajax({
					method: 'post',
					url: '/clazzUserIndustry/teacherKickOutUser',
					params: {
						cuiId: userInfo.id
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
			}).catch(() => {

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
.inlineBlock{
	overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.person-list{
	text-align: center;
	li{
		display: inline-block;
		width: 150px;
		height: 200px;
		border: #00BA88 1px solid;
		text-align: center;
		&.active{
			border: red 1px solid;
		}
		p{
			margin-top: 30px;
		}
		img{
			width: 80px;
			height: 80px;
			margin-top: 20px;
		}
	}
}

.map-box{
	// width: 1200px;
	width: 925px;
	min-height: 816px;
	background: #FFFFFF;
	border-radius: 8px;
	border: 1px solid #EBEFFC;
	margin: 0 auto;
	padding: 20px;
	// margin-top: -75px;
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
.teacher-mold{
	background: #FFFFFF;
}
.content{
	min-height: 600px;
	>.fl{
		width: 250px;
		ul{
			border: 1px solid #EEEEEE;
		}
		li{
			height: 58px;
			line-height: 58px;
			border-top: 1px solid #EEEEEE;
			position: relative;
			text-indent: 10px;
			cursor: pointer;
			font-size: 16px;
			overflow:hidden;
			text-overflow:ellipsis;
			white-space:nowrap;
			&.active{
				background: #3f51b533;
				color: #4162c4;
			}
			.icon-sanjiao{
				position: absolute;
				right: 30px;
				top: 0px;
				font-size: 12px;
			}
		}
	}
	>.fr{
		border: 1px solid #D8D8D8;
		width: calc(100% - 280px);
		min-height: 600px;
		.org-item{
			li{
				float: left;
				width: 170px;
				height: 220px;
				border: 1px solid #DDDDDD;
				border-radius: 2px;
				margin-left: 23px;
				margin-top: 20px;
				margin-bottom: 20px;
				text-align: center;
				padding: 0 20px;
				&.active{
					background: #F7FFFD;
					border: 1px solid #00BA88;
				}
				img{
					width: 60px;
					height: 60px;
					margin: 20px auto;
				}
				h1{
					font-size: 14px;
					color: #404040;
				}
				p{
					font-size: 12px;
					color: #888888;
					margin-top: 15px;
				}
			}
		}
		.title{
			height: 50px;
			line-height: 50px;
			text-indent: 30px;
			font-size: 20px;
			color: #4162c4;
			background: #3f51b533;
			border: 1px solid #4162c4;
			border-radius: 5px;
			border-top-width: 3px;
			border-left-width: 3px;
		}
	}
}
.User-info-Banner{
	// width: 1366px;
	margin: 0 auto;
	background: url('../img/banner.png') no-repeat;
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
// .fl-top{
// 	// background: url('./images/top.png') no-repeat center center;
// 	background-size: 100%;
// 	height: 80px;
// }
</style>
