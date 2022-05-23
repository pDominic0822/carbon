<!--
 * @Author: zhangln
 * @Date: 2019-07-24 15:37:31
 * @Description: 3
 -->
<template>
	<div class="my-course">
		<div>
			<form class="fl">
				<el-button @click="centerDialogVisible = true, importConsequence = '', errorList = [], clazzErrorList = []" class="fl" size="mini" round>导入学生</el-button>
				<span class="fl" style='line-height:28px;margin-left:10px;color:red;'>导入学生的账号密码， 默认为学号的后6位</span>
			</form>
			<el-button type="danger" @click="handleEdit()" class="fr" size="mini" round>下载模板</el-button>
		</div>
		<div class="mt20 clearfix">
			<template>
				<el-table
					:data="tableData"
					stripe
					style="width: 100%">
					<el-table-column
					prop="userPhone"
					label="用户账号"
					>
					</el-table-column>
					<el-table-column
					prop="realName"
					label="姓名"
					>
					</el-table-column>
					<el-table-column label="操作" align='center'>
						<template slot-scope="scope">
							<!-- <el-button
							size="mini"
							@click="handleEdit(scope.row)">修改</el-button> -->
							<el-button
							size="mini"
							type="danger"
							@click="handleDelete(scope.row)">删除</el-button>
							<el-button
							size="mini"
							type="danger"
							@click="resetPassword(scope.row)">重置密码</el-button>
						</template>
					</el-table-column>
				</el-table>
			</template>
		</div>
		<el-dialog title="导入学生" append-to-body :visible.sync="centerDialogVisible" center>
			<div class="clearfix">
				<el-select size="mini" class="fl" v-model="classId" placeholder="请选择班级">
					<el-option v-for="item in classList" :key="item.id" :label="item.name" :value="item.id"></el-option>
				</el-select>
				<form style="margin-left: 20px;" id="myForm" class="fl">
					<input type="file" @change="uploadFile" id="file-btn">
				</form>
				<ul class='errorUl'>
					<li v-for='(item, index) in clazzErrorList' :key='index'>
						{{item}}
					</li>
					<li v-for='(item, index) in errorList' :key='index'>
						{{item}}
					</li>
					<li>
						{{importConsequence}}
					</li>
				</ul>
			</div>
		</el-dialog>
	</div>
</template>

<script>
// import { baseUrl } from '@/config';
export default {
	name: 'my-course',
	data () {
		return {
			centerDialogVisible: false,
			classList: [],
			tableData: [],
			classId: null,
			selectUser: [],
			importConsequence: '',
			clazzErrorList: [],
			errorList: []
		};
	},
	created () {
		this.getTeacherExcel();
		this.init();
	},
	methods: {
		/**
		 * @name: zhangln
		 * @msg: 修改
		 */
		handleEdit () {
			// window.location.href = `${window.location.origin}/${baseUrl}/static/css/swiper.min.css?&t_=${new Date().getTime()}`;
			// window.location.href = `${window.location.origin}/${baseUrl}/static/file/export.xlsx?t_=${new Date().getTime()}`;
			window.location.href = this.$storage.get('baseUrl') + '/uploadResources/downLoadFile?fileId=SBPUYC_HS-0CDNENQOMM83';
			// window.location.href = 'http://net-res.educhainx.com/newres/uploadResources/downLoadFile?fileId=SBPUYC_HS-0CDNENQOMM83';
		},
		resetPassword (item) {
			this.$ajax({
				method: 'post',
				url: '/user/updateResetPassword',
				params: {
					stuUserId: item.id
				}
			}).then(res => {
				if (res.success) {
					this.$message({
						type: 'success',
						message: '重置密码成功，密码为学号后6位'
					});
				} else {
					this.$message({
						type: 'error',
						message: res.message
					});
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		/**
		 * @name: zhangln
		 * @msg: 删除
		 */
		handleDelete (row) {
			this.$ajax({
				method: 'post',
				url: '/excelUser/deletedExcelUser',
				params: {
					id: row.excelId
				}
			}).then(res => {
				if (res.success) {
					this.getTeacherExcel();
					this.$message({
						type: 'success',
						message: res.message
					});
				} else {
					this.$message({
						type: 'error',
						message: res.message
					});
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		getTeacherExcel () {
			this.$ajax({
				method: 'post',
				url: '/excelUser/findExcelUserList'
			}).then(res => {
				if (res.success) {
					this.tableData = res.data;
				} else {
					this.tableData = [];
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		uploadFile () {
			if (!this.classId) {
				this.$message.error('请选择班级');
				document.getElementById('myForm').reset();
				return 0;
			};
			let fileInput = document.getElementById('file-btn');
			let file = fileInput.files[0];
			let a = false;
			if (a) {
			} else {
				this.$ajax({
					method: 'post',
					url: '/excelUser/importExcel',
					params: {
						file: file,
						clazzId: this.classId
					}
				}).then(res => {
					this.importConsequence = res.data.importConsequence;
					this.errorList = res.data.errorList;
					this.clazzErrorList = res.data.clazzErrorList;
					this.getTeacherExcel();
					document.getElementById('myForm').reset();
					this.classId = null;
				}).catch(err => {
					throw new Error(err);
				});
			}
		},
		init () {
			this.classList = [];
			this.$ajax({
				method: 'post',
				url: '/clazz/findUserJoinClazz',
				params: {
				}
			}).then(res => {
				if (res.success) {
					this.classList = res.data || [];
				}
			}).catch(err => {
				throw new Error(err);
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.my-course{
	width: 100%;
	li{
		cursor: pointer;
		float: left;
		overflow: hidden;
		width: 275px;
		height: 328px;
		background: #FFFFFF;
		box-shadow: 0 0 5px 0 rgba(0,0,0,0.20);
		border-radius: 2px;
		margin-top: 28px;
		margin:28px 15px 0px;
		&:nth-child(10n+1){
		.list-item-top  > div{
				width: 100%;
				height: 167px;
				background: url('./../../images/class1.png');
			}
		}
		&:nth-child(10n+2){
			.list-item-top  > div{
				width: 100%;
				height: 167px;
				background: url('./../../images/class2.png');
			}
		}
		&:nth-child(10n+3){
			.list-item-top > div{
				width: 100%;
				height: 167px;
				background: url('./../../images/class3.png');
			}
		}
		&:nth-child(10n+4){
			.list-item-top > div{
				width: 100%;
				height: 167px;
				background: url('./../../images/class4.png');
			}
		}
		&:nth-child(10n+5){
			.list-item-top > div{
				width: 100%;
				height: 167px;
				background: url('./../../images/class5.png');
			}
		}
		&:nth-child(10n+6){
			.list-item-top > div{
				width: 100%;
				height: 167px;
				background: url('./../../images/class6.png');
			}
		}
		&:nth-child(10n+7){
			.list-item-top > div{
				width: 100%;
				height: 167px;
				background: url('./../../images/class7.png');
			}
		}
		&:nth-child(10n+8){
			.list-item-top > div{
				width: 100%;
				height: 167px;
				background: url('./../../images/class8.png');
			}
		}
		&:nth-child(10n+9){
			.list-item-top > div{
				width: 100%;
				height: 167px;
				background: url('./../../images/class9.png');
			}
		}
		&:nth-child(10n+10){
			.list-item-top > div{
				width: 100%;
				height: 167px;
				background: url('./../../images/class10.png');
			}
		}
		.list-item-name{
			padding: 0 15px;
			font-size: 18px;
			color: #222;
			height: 40px;
			line-height: 40px;
		}
		.list-item-info{
			padding: 0 15px;
			font-size: 12px;
			color: #888888;
			line-height: 20px;
			height: 40px;
		}
		.list-item-top{
			width: 100%;
			height: 167px;
			overflow: hidden;
			> div {
				transition: all 0.6s;
			}
			&:hover  > div{
				transform: scale(1.1);
			}
		}
		.list-item-bottom{
			padding: 0 15px;
			border-top: 1px solid #DDDDDD;
			height: 45px;
			line-height: 45px;
			color: #AAAAAA;
			font-size: 12px;
		}
		.list-item-creator{
			margin: 7px 15px;
			font-size: 12px;
			color: #666666;
			height: 24px;
			line-height: 24px;
			img{
				width: 24px;
				height: 24px;
				border-radius: 50%;
				vertical-align: bottom;
				margin-right: 8px;
			}
		}
	}
}
.dl{
	width: 280px;
	margin-right: 36px;
	display: inline-block;
}
dt{
	width: 280px;
	height: 168px;
	img{
		width: 100%;
		height:100%;
	}
}
.dd{
	width: 280px;
	height: 180px;
	background: #FFFFFF;
	box-shadow: 0 0 5px 0 rgba(0,0,0,0.20);
	border-radius: 2px;
	margin: 0;
	position: relative;
	.classTop{
		margin-left: 13px;
		h1{
			font-size: 18px;
			padding-top: 8px;
			color: #222222;
		}
		h2{
			margin-top: 4px;
			margin-bottom: 7px;
			font-size: 14px;
			color: #444444;
			font-weight: 400;
		}
		.classContent{
			width: 240px;
			height: 34px;
			font-size: 12px;
			color: #888888;
			line-height: 17px;
		}
		.information{
			margin:11px 0;
			img{
				width: 20px;
				height: 20px;
				float: left;
			}
			.teacherName{
				font-size: 12px;
				color: #888888;
				float: left;
				margin-top: 3px;
				margin-left: 6px;
			}
		}
	}
}
.classBottom{
	position: absolute;
	bottom: 0;
	width: 100%;
	height:50px;
	line-height: 50px;
	border-top:1px solid #ddd;
	.classleft{
		float: left;
		margin-left: 14px;
		p{
			display: inline-block;
		}
	}
	.classright{
		float: left;
		margin-left: 19px;
	}
}
.errorUl{
	margin-top: 20px;
	clear: both;
	li{
		line-height:30px;
		color: red;
	}
}
</style>
