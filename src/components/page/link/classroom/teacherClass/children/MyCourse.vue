<template>
	<div class="my-course">
		<ul class="Tlis">
			<li v-for="(item,index) in classValue" :key="index" class="Tli">
				<div class="Timg"><img src="../../images/Timg1.png"/></div>
				<i class="Tback"></i>
				<div class="Tcontent">
					<h1 class="Ttitle">{{item.name}}</h1>
					<span class="Tspan"></span>
					<p class="Tcon">{{item.info}}</p>
					<span class="Tbtn" :class="item.isOpen ? '1' : '2'" @click="_classN(item.id)">创建</span>
				</div>
			</li>
		</ul>
		<el-dialog
			title="创建班级"
			center
			:visible.sync="dialogVisible"
			width="640px"
			>
			<el-form label-position="right" label-width="80px">
				<el-form-item label="课程体系">
					<el-select v-model="courseId" @change="_getItem()" placeholder="课程体系">
						<el-option v-for="(item,index) in classValue" :key="index" :label="item.name" :value="item.id"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="课程名称">
					<el-select v-model="cassId" placeholder="课程名称">
						<el-option v-for="(item,index) in cassArr" :key="index" :label="item.systemName" :value="item.systemId"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="班级名称">
					<el-input v-model="className" placeholder="请输入班级名称"></el-input>
				</el-form-item>
				<el-form-item label="班级描述">
					<textarea v-model="classInfo" cols="30" rows="10" class="el-textarea" placeholder="请输入班级描述"></textarea>
				</el-form-item>
				<el-form-item label="是否审核">
					<el-radio v-model="radio" label="1">是</el-radio>
					<el-radio v-model="radio" label="0">否</el-radio>
				</el-form-item>
			</el-form>
			<button class="bullet-btn" @click="_createdClass()">创建</button>
		</el-dialog>
	</div>
</template>

<script>
export default {
	name: 'my-course',
	data () {
		return {
			courseId: '',
			className: '',
			classInfo: '',
			cassArr: [],
			cassId: '',
			classValue: [],
			radio: '0',	// 是否审核
			dialogVisible: false
		};
	},
	created () {
		this.initByTeacher();
	},
	methods: {
		// 获取可以创建的课程列表
		initByTeacher () {
			this.$ajax({
				method: 'post',
				url: '/course/findAllCourse'
			}).then(res => {
				this.classValue = res.data;
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
					systemId: this.cassId,
					courseId: this.courseId,
					userId: this.$storage.get('userId'),
					clazzState: this.radio
				}
			}).then(res => {
				if (res.success) {
					this.$message({
						message: '创建班级成功',
						type: 'success'
					});
					this.dialogVisible = false;
					this.$router.push({name: 'teacher-creator'});
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
		_classN (id) {
			this.dialogVisible = !this.dialogVisible;
		}
	}
};
</script>

<style lang="scss" scoped>
.top-text{
	height: 46px;
	line-height: 46px;
	background: #fff;
}
.my-course{
	width: 100%;
	height: 100%;
}
.Tlis{
	width: 100%;
	li{
		width: 280px;
		height: 255px;
		position: relative;
		float: left;
		margin-left:45px;
		margin-top: 20px;
	}
}
.Tli{
	width: 280px;
	height: 255px;
	position: relative;
	float: left;
}
.Timg{
	width: 280px;
	height: 255px;
	position: absolute;
	top:0;
	left:0;
	padding:0;
	margin: 0;
	line-height: 0px;
	img{
		width: 100%;
		height:100%;
		vertical-align: bottom;
	}
}
.Tback{
	opacity: 0.6;
	background: #0D1B2C;
	width: 280px;
	height: 255px;
	position: absolute;
	top:0;
	left:0;
}
.Tlis .Tli:hover{
	.Tback{
		opacity: 0.95;
		background: #00BA88 ;
	}
	.Tcontent{
		.Tbtn{
			color: #00BA88 ;
			background: #fff;
			border:1px solid #FFF;
			cursor: pointer;
		}
	}
}
.Tcontent{
	width: 100%;
	height:100%;
	position: absolute;
	top:0;
	left:0;
	text-align: center;
	.Ttitle{
		color:#fff;
		font-size: 22px;
		font-weight: 600;
		text-align: center;
		margin-top:46px;
		padding-bottom: 3px;
	}
	.Tspan{
		border-bottom: 2px solid #fff;
		display: inline-block;
		width:72px;
		height:2px;
	}
	.Tcon{
		width: 252px;
		height:52px;
		margin: 10px auto;
		color:#fff;
		line-height: 25px;
		font-size: 14px;
	}
	.Tbtn{
		width: 108px;
		height: 32px;
		border: 1px solid #00BA88 ;
		border-radius: 2px;
		background: rgba(15,22,55,.5);
		font-size: 14px;
		color: #00BA88 ;
		margin-top: 54px;
		line-height:32px;
		display: inline-block;
	}
}
.Tli-No{
	width: 280px;
	height: 255px;
	position: relative;
	float: left;
	margin-left:45px;
	.Tback{
		opacity: 0;
	}
	.Tbtn-No{
		width: 108px;
		height: 32px;
		font-size: 14px;
		color: #fff;
		margin-top: 50px;
		display: inline-block;
	}
}
.bigbox{
	width: 100%;
	height: 100%;
	position: fixed;
	top:0;
	left:0;
	.mask-Box{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.5);
	}
	.bullet-Box{
		width: 625px;
		padding: 0 30px;
		height: 410px;
		background: #Fff;
		position: fixed;
		top:0;
		left:0;
		right:0;
		bottom:0;
		margin: auto;
		.bullet-title{
			text-align:center;
			margin: 30px 0;
			font-size: 18px;
			color: #000000;
			letter-spacing: 0;
		}
	}
}
.el-select,.el-input{
	width: 467px;
	height: 40px;
	.el-input__inner{
		width: 100%;
		height: 100%;
	}
}
.el-textarea{
	width: 467px;
	height: 123px;
	background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
	box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: 14px;
    line-height: 30px;
    outline: 0;
    padding:10px 15px;
	resize:none
}
.el-textarea::-webkit-input-placeholder{
	color:#c7cad3;
}
.bullet-btn{
	width: 180px;
	height: 39px;
	background: #00BA88 ;
	border-radius: 2px;
	border:0;
	outline: 0;
	color:#fff;
	margin-left: 208px;
}
.icon-close1{
	position: absolute;
	top:10px;
	right:10px;
	font-size: 18px;
}
// .top-text{
// 	height: 46px;
// 	line-height: 46px;
// 	background: #fff;
// }
// .my-course{
// 	width: 100%;
// 	height: 100%;
// }
// .Tlis{
// 	width: 100%;
// 	li{
// 		width: 280px;
// 		height: 255px;
// 		position: relative;
// 		float: left;
// 		margin-left:45px;
// 		margin-top: 20px;
// 	}
// }
// .Tli{
// 	width: 280px;
// 	height: 255px;
// 	position: relative;
// 	float: left;
// }
// .Timg{
// 	width: 280px;
// 	height: 255px;
// 	position: absolute;
// 	top:0;
// 	left:0;
// 	padding:0;
// 	margin: 0;
// 	line-height: 0px;
// 	img{
// 		width: 100%;
// 		height:100%;
// 		vertical-align: bottom;
// 	}
// }
// .Tback{
// 	opacity: 0.6;
// 	background: #0D1B2C;
// 	width: 280px;
// 	height: 255px;
// 	position: absolute;
// 	top:0;
// 	left:0;
// }
// .Tlis .Tli:hover{
// 	.Tback{
// 		opacity: 0.95;
// 		background: #00BA88 ;
// 	}
// 	.Tcontent{
// 		.Tbtn{
// 			color: #00BA88 ;
// 			background: #fff;
// 			border:1px solid #FFF;
// 			cursor: pointer;
// 		}
// 	}
// }
// .Tcontent{
// 	width: 100%;
// 	height:100%;
// 	position: absolute;
// 	top:0;
// 	left:0;
// 	text-align: center;
// 	.Ttitle{
// 		color:#fff;
// 		font-size: 22px;
// 		font-weight: 600;
// 		text-align: center;
// 		margin-top:46px;
// 		padding-bottom: 3px;
// 	}
// 	.Tspan{
// 		border-bottom: 2px solid #fff;
// 		display: inline-block;
// 		width:72px;
// 		height:2px;
// 	}
// 	.Tcon{
// 		width: 252px;
// 		height:52px;
// 		margin: 10px auto;
// 		color:#fff;
// 		line-height: 25px;
// 		font-size: 14px;
// 	}
// 	.Tbtn{
// 		width: 108px;
// 		height: 32px;
// 		border: 1px solid #00BA88 ;
// 		border-radius: 2px;
// 		background: rgba(15,22,55,.5);
// 		font-size: 14px;
// 		color: #00BA88 ;
// 		margin-top: 54px;
// 		line-height:32px;
// 		display: inline-block;
// 	}
// }
// .Tli-No{
// 	width: 280px;
// 	height: 255px;
// 	position: relative;
// 	float: left;
// 	margin-left:45px;
// 	.Tback{
// 		opacity: 0;
// 	}
// 	.Tbtn-No{
// 		width: 108px;
// 		height: 32px;
// 		font-size: 14px;
// 		color: #fff;
// 		margin-top: 50px;
// 		display: inline-block;
// 	}
// }
// .bigbox{
// 	width: 100%;
// 	height: 100%;
// 	position: fixed;
// 	top:0;
// 	left:0;
// 	.mask-Box{
// 		width: 100%;
// 		height: 100%;
// 		background: rgba(0,0,0,.5);
// 	}
// 	.bullet-Box{
// 		width: 625px;
// 		padding: 0 30px;
// 		height: 410px;
// 		background: #Fff;
// 		position: fixed;
// 		top:0;
// 		left:0;
// 		right:0;
// 		bottom:0;
// 		margin: auto;
// 		.bullet-title{
// 			text-align:center;
// 			margin: 30px 0;
// 			font-size: 18px;
// 			color: #000000;
// 			letter-spacing: 0;
// 		}
// 	}
// }
// .el-select,.el-input{
// 	width: 467px;
// 	height: 40px;
// 	.el-input__inner{
// 		width: 100%;
// 		height: 100%;
// 	}
// }
// .el-textarea{
// 	width: 467px;
// 	height: 123px;
// 	background-color: #fff;
//     background-image: none;
//     border-radius: 4px;
//     border: 1px solid #dcdfe6;
// 	box-sizing: border-box;
//     color: #606266;
//     display: inline-block;
//     font-size: 14px;
//     line-height: 30px;
//     outline: 0;
//     padding:10px 15px;
// 	resize:none
// }
// .el-textarea::-webkit-input-placeholder{
// 	color:#c7cad3;
// }
// .bullet-btn{
// 	width: 180px;
// 	height: 39px;
// 	background: #00BA88 ;
// 	border-radius: 2px;
// 	border:0;
// 	outline: 0;
// 	color:#fff;
// 	margin-left: 208px;
// }
// .icon-close1{
// 	position: absolute;
// 	top:10px;
// 	right:10px;
// 	font-size: 18px;
// }
</style>
