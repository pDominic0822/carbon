<!--
 * @Author: zhangln
 * @Date: 2019-07-24 15:37:31
 * @Description: 22
 -->
<template>
	<div class="tea-class">
		<classHeader></classHeader>
		<div class="banner clearfix">
			<div class="containter clearfix">
				<div class="titles">
					知链碳模拟经营决策实践教学平台
				</div>
				<div class="search clearfix">
					<input @keyup.enter="_joinClass()" class="fl"  v-model="inviteCode" type="text" placeholder="请输入邀请码">
					<span :class="{'active' : inviteCode}" @click="_joinClass()" class="fl">搜索</span>
				</div>
			</div>
		</div>
		<div class="tea-class-content clearfix containter">
			<div class="class-list">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
import classHeader from './../common/header.vue';
export default {
	name: 'login',
	data () {
		return {
			inviteCode: '',
			userPhone: '',
			password: '',
			centerDialogVisible: false,
			classList: [],
			routerList: [
				{
					name: '我的课程',
					icon: 'icon-bg_date1',
					routerName: 'student-course'
				}
			]
		};
	},
	components: {
		classHeader
	},
	inject: ['reload'],
	created () {
	},
	methods: {
		_formTel () {
			this.centerDialogVisible = true;
		},
		_savePenson () {
			this.$ajax({
				method: 'post',
				url: '/user/updateUserPassword',
				params: {
					userPhone: this.userPhone,
					password: this.password
				}
			}).then(res => {
				if (res.success) {
					this.centerDialogVisible = false;
					this.$message({
						message: '密码修改成功',
						type: 'success'
					});
				} else {
					this.$message({
						message: res.message,
						type: 'warning'
					});
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		// 获取班级列表
		init () {
			this.classList = [];
			this.$ajax({
				method: 'post',
				url: '/clazz/findUserJoinClazz'
			}).then(res => {
				if (res.success) {
					this.classList = res.data || [];
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		// 通过邀请码 加入班级
		_joinClass () {
			if (!this.inviteCode) {
				this.$message.error('请输入班级邀请码');
				return false;
			};
			this.$ajax({
				method: 'post',
				url: '/clazz/joinClazz',
				params: {
					inviteCode: this.inviteCode
				}
			}).then(res => {
				if (res.success) {
					this.inviteCode = '';
					this.$message({
						message: '加入班级成功',
						type: 'success'
					});
					setTimeout(() => {
						this.reload();
					}, 300);
				} else {
					this.$message({
						message: res.message,
						type: 'warning'
					});
				}
			}).catch(err => {
				throw new Error(err);
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.tea-class{
	height: 640px;
	background: url('./../images/ccc.png') no-repeat top center;
	background-size: cover;
	// background: #2091D8;
}

.titles{
	color: #FFFFFF;
	font-size: 30px;
	margin-top: 100px;
}
.tea-class-content{
	border: 1px solid transparent;
	.class-tabs{
		width: 180px;
		li{
			height: 50px;
			cursor: pointer;
			line-height: 50px;
			border-bottom: 1px solid #979797;
			position: relative;
			margin-bottom: 20px;
			color: #333333;
			text-align: center;
			&.active,&:hover{
				border-bottom: 1px solid #2091D8 ;
				color: #2091D8 ;
				&::after{
					border-left: 5px solid #2091D8 ;
				}
			}
			// &::after{
			// 	content: '';
			// 	position: absolute;
			// 	top: 0px;
			// 	right: 0px;
			// 	display: inline-block;
			// 	width: 0;
			// 	height: 0;
			// 	border-top: 5px solid transparent;
			// 	border-bottom: 5px solid transparent;
			// 	border-left: 5px solid #888888;
			// 	line-height: 1px;
			// 	display: inline-block;
			// 	top: 21px;
			// 	right: 8px;
			// }
		}
	}
	// .class-list{
	// 	// width: calc(100% - 200px);
	// }
}
.search{
	// margin-left: 85px;
	width: 740px;
	// margin: 0 auto;
	margin-top: 100px;
	input{
		background: rgba(0,0,0,0.20);
		border: 1px solid #FFFFFF;
		width: 300px;
		height: 50px;
		line-height: 50px;
		padding: 0 15px;
		color: #FFFFFF;
		text-align: center;
		border-radius: 14px 0 0 14px;
		&:active{
			border: 1px solid #FFFFFF;
		}
		&:focus-visible{
			outline: 0;
			border: 1px solid #FFFFFF;
		}
	}
	input::placeholder {
       color: #FFFFFF;
    }
	span{
		display: inline-block;
		background: #2091D8 ;
		text-align: center;
		height: 50px;
		line-height: 50px;
		width: 110px;
		font-family: PingFangSC-Regular;
		cursor: pointer;
		font-size: 16px;
		color: #FFFFFF;
		border: 1px solid #2091D8;
		background: #0BC3E4;
		border-radius:0 14px 14px 0;
	}
}
.banner{
	// height: 230px;
	// background: url('./../images/m2.jpg') no-repeat center center;
	.info{
		margin-top: 85px;
		font-family: PingFangSC-Regular;
		font-size: 18px;
		color: #FFFFFF;
		font-weight: normal;
		margin-left: 30px;
	}
	.round{
		width: 80px;
		height: 80px;
		margin-top: 50px;
		overflow: hidden;
		img{
			width: 100%;
			height: 100%;
		}
	}
}
</style>
