<!--
 * @Author: zhangln
 * @Date: 2019-07-24 15:37:31
 * @Description: 33
 -->
<template>
	<header class="tea-class">
		<classHeader></classHeader>
		<div class="tea-class-content clearfix containter">
			<div class="class-tabs">
				<ul>
					<!-- <router-link tag="li" active-class="active" v-for="(item,index) in routerList" :key="index" :to="{ name: item.routerName }" >
						<i :class="item.icon" class="iconfont"></i>&nbsp;{{item.name}}
					</router-link> -->
					<li @click="_classN()">
						<i class="iconfont icon-pm-add2">
						</i>
						<p>
							创建班级
						</p>
					</li>
					<li class="fr" style="float:right;" @click="stuvis = true">
						<i class="iconfont icon-pm-add2">
						</i>
						<p>
							导入学生
						</p>
					</li>
				</ul>
			</div>
			<div class="fr class-list">
				<router-view></router-view>
			</div>
		</div>
		<el-dialog
			title="创建班级"
			center
			:visible.sync="dialogVisible"
			width="640px"
			>
			<el-form label-position="right" label-width="80px">
				<el-form-item label="课程体系">
					<el-select  style="width:510px;" v-model="courseId" @change="_getItem()" placeholder="课程体系">
						<el-option v-for="(item,index) in allCourse" :key="index" :label="item.name" :value="item.id"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="课程名称">
					<el-select  style="width:510px;" v-model="systemId" placeholder="课程名称">
						<el-option v-for="(item,index) in cassArr" :key="index" :label="item.systemName" :value="item.systemId"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="班级名称">
					<el-input v-model="className" placeholder="请输入班级名称"></el-input>
				</el-form-item>
				<el-form-item label="班级描述">
					<el-input
						type="textarea"
						:rows="5"
						placeholder="请输入内容"
						v-model="classInfo">
					</el-input>
					<!-- <textarea v-model="classInfo" cols="30" rows="10" class="el-textarea" placeholder="请输入班级描述"></textarea> -->
				</el-form-item>
				<!-- <el-form-item label="是否审核">
					<el-radio v-model="radio" label="1">是</el-radio>
					<el-radio v-model="radio" label="0">否</el-radio>
				</el-form-item> -->
				<el-form-item label="">
					<el-button type="primary" @click="_createdClass()" plain>创建班级</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
		<el-dialog
			title="导入学生"
			center
			:visible.sync="stuvis"
			width="1240px"
			>
			<teacherExport v-if="stuvis"></teacherExport>
		</el-dialog>
	</header>
</template>

<script>
import teacherExport from './children/teacherExport';
import classHeader from './../common/header.vue';
export default {
	name: 'login',
	data () {
		return {
			calssCode: '',
			courseId: '',
			className: '',
			classInfo: '',
			userPhone: '',
			password: '',
			routerList: [
				{
					name: '我创建的班级',
					icon: 'icon-book',
					routerName: 'teacher-creator'
				},
				{
					name: '我的课程',
					icon: 'icon-bg_date1',
					routerName: 'teacher-course'
				},
				{
					name: '导入账号',
					icon: 'icon-bg_date1',
					routerName: 'teacher-export'
				}
			],
			cassArr: [],
			systemId: '',
			allCourse: [],
			radio: '0',	// 是否审核
			dialogVisible: false,
			centerDialogVisible: false,
			stuvis: false,
			classList: []
		};
	},
	inject: ['reload'],
	components: {
		teacherExport,
		classHeader
	},
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
						message: res.message,
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
		// 获取可以创建的课程列表
		_getAllCourse () {
			this.$ajax({
				method: 'post',
				url: '/course/findAllCourse'
			}).then(res => {
				this.allCourse = res.data;
			}).catch(err => {
				throw new Error(err);
			});
		},
		// 创建班级
		_createdClass () {
			if (!this.courseId) {
				this.$message({
					message: '请选择课程',
					type: 'warning'
				});
				return;
			}
			this.$ajax({
				method: 'post',
				url: '/clazz/addClazz',
				params: {
					name: this.className,
					info: this.classInfo,
					image: '',
					systemId: this.systemId,
					courseId: this.courseId,
					userId: this.$storage.get('userId'),
					clazzState: '0'
				}
			}).then(res => {
				if (res.success) {
					this.$message({
						message: '创建班级成功',
						type: 'success'
					});
					this.dialogVisible = false;
					setTimeout(() => {
						this.reload();
					}, 300);
				} else {
					this.dialogVisible = false;
					this.$message({
						message: '创建班级失败',
						type: 'error'
					});
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		// 获取区块链体系下的课程
		_getItem () {
			this.$ajax({
				method: 'post',
				url: '/teacherPermission/findUserPermission',
				params: {
					courseId: this.courseId
				}
			}).then(res => {
				if (res.success) {
					this.cassArr = res.data;
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		_classN (id) {
			this._getAllCourse();
			this.dialogVisible = !this.dialogVisible;
		}
	}
};
</script>

<style lang="scss" scoped>
.tea-class{
	height: 640px;
	background: url('./../images/ccc.png') repeat-x top center;
	// background-size: inherit;
	// background: #2091D8;
}
.tea-class-content{
	border: 1px solid transparent;
	.class-tabs{
		width: 100%;
		background: #fff;
		ul{
			width: 100%;
		}
		li{
			height: 70px;
			cursor: pointer;
			width: 150px;
			height: 150px;;
			// line-height: 180px;;
			// line-height: 70px;
			border: 1px dashed #979797;
			position: relative;
			// text-indent: 30px;
			text-align: center;
			// margin-bottom: 20px;
			float: left;
			color: #fff;
			font-size: 24px;
			padding-top: 36px;
			margin-top: 68px;
			background: rgba(0,0,0,0.20);
			i{
				font-size: 30px;
			}
			p{
				margin-top: 20px;
				font-size: 20px;
			}
			&.active,&:hover{
				// border-bottom: 1px solid #00BA88 ;
				color: #00BA88 ;
				// &::after{
				// 	// border-left: 8px solid #00BA88 ;
				// }
			}
			// &::after{
			// 	content: '';
			// 	position: absolute;
			// 	top: 0px;
			// 	right: 0px;
			// 	display: inline-block;
			// 	width: 0;
			// 	height: 0;
			// 	border-top: 8px solid transparent;
			// 	border-bottom: 8px solid transparent;
			// 	border-left: 8px solid #888888;
			// 	line-height: 1px;
			// 	display: inline-block;
			// 	top: 30px;
			// 	right: 20px;
			// }
		}
	}
	.class-list{
		width: 100%;
		margin-top: 30px;
		// width: calc(100% - 270px);
	}
}
.search{
	margin-top: 70px;
	input{
		background: rgba(0,0,0,0.60);
		border: 1px solid #FFFFFF;
		width: 340px;
		height: 44px;
		padding: 0 15px;
		color: #FFFFFF;
	}
	span{
		display: inline-block;
		background: #00BA88 ;
		text-align: center;
		height: 44px;
		line-height: 44px;
		width: 80px;
		font-family: PingFangSC-Regular;
		cursor: pointer;
		font-size: 16px;
		color: #FFFFFF;
	}
}
.banner{
	// height: 80px;
	// background: url('./../images/banner.jpg') no-repeat center center;
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
