<!--
 * @Author: ljt
 * @Date: 2022-01-26 15:37:32
 * @Description: 22
 -->

<template>
	<div class="login">
		<!-- 顶部logo,和标题 -->
		<div>
			<img src="./img/logo.png" height="100px" alt="">
			<!-- <p class="fr tesdfds">
				新技术·赋能教育
			</p> -->
		</div>
		<!--内容区 -->
		<div class="mask-contents">
			<div class="tests">
				知链碳模拟经营决策实践教学平台
			</div>
			<div class="mt30 inter-btn clearfix" v-if="isLogin === 'loginPage' || isLogin === 'loginMessage' || isLogin === 'registerPage' || isLogin === 'forgetPassword'">
				<span v-show="accountNumber" class="fl login-span" :class="{'active': isLogin === 'loginPage'}" @click="_handleLogin('loginPage')">
					账户登陆
				</span>
			</div>
			<!-- 用户密码登陆 -->
			<template v-if="isLogin === 'loginPage'">
				<el-form class="mt20" :model="ruleForm" :rules="rules" ref="ruleForm"  size="small">
					<el-form-item label="" prop="name">
						<el-input v-model="ruleForm.name" :placeholder="noteNumber?'请输入账号或手机号':'请输入账号'"></el-input>
					</el-form-item>
					<el-row :gutter="20" class="mt20">
						<el-col :span="16">
							<el-form-item label="" prop="grapCode">
								<el-input v-model="ruleForm.grapCode" placeholder="请输入图形验证码"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="8">
							<div class="sub-button" @click="_getGrapCode()" style="background:#fff;">
								<img style="width:100%;height:100%;" :src="grapImgCode" alt="">
							</div>
						</el-col>
					</el-row>
					<el-form-item label="" prop="password">
						<el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
					</el-form-item>
				</el-form>
			</template>
			<!-- 短信登陆 -->
			<template v-if="isLogin === 'loginMessage'">
				<el-form class="mt20" :model="ruleForm" :rules="rules" ref="ruleForm"  size="small">
					<el-form-item label="" prop="cellPhone">
						<el-input v-model="ruleForm.cellPhone" placeholder="请输入手机号"></el-input>
					</el-form-item>
					<el-row :gutter="20" class="">
						<el-col :span="16">
							<el-form-item label="" prop="grapCode">
								<el-input v-model="ruleForm.grapCode" placeholder="请输入图形验证码"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="8">
							<div class="sub-button" @click="_getGrapCode()" style="background:#fff;">
								<img style="width:100%;height:100%;" :src="grapImgCode" alt="">
							</div>
						</el-col>
					</el-row>
					<el-row :gutter="20" class="">
						<el-col :span="16">
							<el-form-item label="" prop="phoneCode">
								<el-input v-model="ruleForm.phoneCode" placeholder="请输入手机验证码"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="8">
							<div class="sub-button"  @click="ruleForm.cellPhone && !isCode && _handleVeriCode()" :class="{'sub-active': !isCode}">{{text}}</div>
						</el-col>
					</el-row>
				</el-form>
			</template>
			<!-- 注册 -->
			<template v-if="isLogin === 'registerPage'">
				<el-form class="mt20" :model="ruleForm" :rules="rules" ref="ruleForm"  size="small">
					<el-form-item label="" prop="cellPhone">
						<el-input v-model="ruleForm.cellPhone" placeholder="请输入手机号"></el-input>
					</el-form-item>
					<el-form-item label="" prop="password">
						<el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
					</el-form-item>
					<el-form-item label="" prop="password2">
						<el-input type="password" v-model="ruleForm.password2" placeholder="请再次输入密码"></el-input>
					</el-form-item>
					<el-row :gutter="20" class="">
						<el-col :span="16">
							<el-form-item label="" prop="grapCode">
								<el-input v-model="ruleForm.grapCode" placeholder="请输入图形验证码"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="8">
							<div class="sub-button" @click="_getGrapCode()" style="background:#fff;">
								<img style="width:100%;height:100%;" :src="grapImgCode" alt="">
							</div>
						</el-col>
					</el-row>
					<el-row :gutter="20" v-if='noteNumber'>
						<el-col :span="16">
							<el-form-item label="" prop="phoneCode">
								<el-input v-model="ruleForm.phoneCode" placeholder="请输入手机验证码"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="8">
							<div class="sub-button"  @click="ruleForm.cellPhone && !isCode && _handleVeriCode()" :class="{'sub-active': !isCode}">{{text}}</div>
						</el-col>
					</el-row>
					<el-form-item label="" prop="statementState">
						<el-checkbox v-model="ruleForm.statementState">
						</el-checkbox>&nbsp;我已阅读并接受<span @click="shouText('one')">《用户协议》</span>和<span @click="shouText('two')">《隐私保护》</span>
					</el-form-item>
				</el-form>
			</template>
			<!-- 忘记密码 -->
			<template v-if="isLogin === 'forgetPassword'">
				<template v-if="isForgetPass">
					<el-form class="mt20" :model="ruleForm" :rules="rules" ref="ruleForm"  size="small">
						<el-form-item label="" prop="cellPhone">
							<el-input v-model="ruleForm.cellPhone" placeholder="请输入手机号"></el-input>
						</el-form-item>
					</el-form>
				</template>
				<template v-else>
					<el-form class="mt20" :model="ruleForm" :rules="rules" ref="ruleForm"  size="small">
						<el-form-item label="" prop="cellPhone">
							<el-input v-model="ruleForm.cellPhone" placeholder="请输入手机号"></el-input>
						</el-form-item>
						<el-form-item label="" prop="password">
							<el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
						</el-form-item>
						<el-form-item label="" prop="password2">
							<el-input type="password" v-model="ruleForm.password2" placeholder="请再次输入密码"></el-input>
						</el-form-item>
						<el-row :gutter="20" class="">
							<el-col :span="16">
								<el-form-item label="" prop="grapCode">
									<el-input v-model="ruleForm.grapCode" placeholder="请输入图形验证码"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<div class="sub-button" @click="_getGrapCode()" style="background:#fff;">
									<img style="width:100%;height:100%;" :src="grapImgCode" alt="">
								</div>
							</el-col>
						</el-row>
						<el-row :gutter="20" class="">
							<el-col :span="16">
								<el-form-item label="" prop="phoneCode">
									<el-input v-model="ruleForm.phoneCode" placeholder="请输入手机验证码"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<div class="sub-button"  @click="ruleForm.cellPhone && !isCode && _handleVeriCode()" :class="{'sub-active': !isCode}">{{text}}</div>
							</el-col>
						</el-row>
						<el-form-item label="" prop="password2">
							<el-checkbox v-model="ruleForm.statementState">用户协议</el-checkbox>
						</el-form-item>
					</el-form>
				</template>
			</template>
			<!-- 微信登陆 -->
			<template  v-if="isLogin === 'wechatLogin'">
				<div v-if="!wechatTel" id="for_weixin_login" style="width:180px;height:180px;margin: 20px auto;">
					<img width="100%" height="100%" :src="wechatSrc" alt="">
				</div>
				<div v-if="wechatTel">
					<template v-if="selectTel">
						<el-button style="width:100%;margin:30px 0 0 0;" type="primary" @click="_handleNew(false)">关联新账号</el-button>
						<el-button style="width:100%;margin:30px 0 0 0;" type="primary" @click="_handleNew(true)">关联已有账号</el-button>
					</template>
					<el-form v-else class="mt20" :model="ruleForm" :rules="rules" ref="ruleForm"  size="small">
						<el-form-item label="" prop="cellPhone">
							<el-input v-model="ruleForm.cellPhone" placeholder="请输入账号"></el-input>
						</el-form-item>
						<el-form-item label="" prop="password">
							<el-input type="password"  v-model="ruleForm.password" placeholder="请输入密码"></el-input>
						</el-form-item>
						<el-form-item label="" prop="password2">
							<el-input type="password" v-model="ruleForm.password2" placeholder="请再次输入密码"></el-input>
						</el-form-item>
						<el-row :gutter="20" class="">
							<el-col :span="16">
								<el-form-item label="" prop="grapCode">
									<el-input v-model="ruleForm.grapCode" placeholder="请输入图形验证码"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<div class="sub-button" @click="_getGrapCode()" style="background:#fff;">
									<img style="width:100%;height:100%;" :src="grapImgCode" alt="">
								</div>
							</el-col>
						</el-row>
						<el-row :gutter="20" class="" v-show="noteNumber">
							<el-col :span="16">
								<el-form-item label="" prop="phoneCode">
									<el-input v-model="ruleForm.phoneCode" placeholder="请输入手机验证码"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<div class="sub-button"  @click="ruleForm.cellPhone && !isCode && _handleVeriCode()" :class="{'sub-active': !isCode}">{{text}}</div>
							</el-col>
						</el-row>
						<el-form-item label="" prop="password2">
							<el-checkbox v-model="ruleForm.statementState">用户协议</el-checkbox>
						</el-form-item>
					</el-form>
				</div>
			</template>
			<div class="clearfix" v-if="isLogin === 'loginPage' || isLogin === 'loginMessage'">
				<span class="fl login-span" :class="{'active': isLogin === 'registerPage'}" @click="_handleLogin('registerPage')">
					账户注册
				</span>
				<span class="fr login-span" v-if="forgetPasswordState" :class="{'active': isLogin === 'forgetPassword'}" @click="_handleLogin('forgetPassword')">
					忘记密码
				</span>
			</div>
			<div class="mt20">
				<el-button v-if="isLogin === 'loginPage'" :disabled="(!isdata || !isdata2 || !ruleForm.grapCode)" style="width:100%" type="primary" @click="_pageLogin()">账户登陆</el-button>
				<el-button v-if="isLogin === 'loginMessage'" :disabled="(!isdata || !ruleForm.grapCode || !ruleForm.phoneCode)" style="width:100%" type="primary" @click="_messageLogin()">短信登陆</el-button>
				<el-button v-if="isLogin === 'registerPage'" :disabled="(!isdata || !isdata2 || !isdata3 || !ruleForm.grapCode || !ruleForm.statementState || !ruleForm.phoneCode)" style="width:100%" type="primary" @click="_pageRegister()">注册</el-button>
				<template v-if="isLogin === 'forgetPassword'">
					<el-button v-if="isForgetPass" style="width:100%" type="primary" :disabled="(!isdata)"  @click="_formTel()">下一步</el-button>
					<el-button v-else style="width:100%" type="primary" :disabled="(!isdata || !isdata2 || !isdata3 || !ruleForm.grapCode || !ruleForm.statementState || !ruleForm.phoneCode)" @click="_savePassword()">保存密码</el-button>
				</template>
				<template v-if="(isLogin === 'wechatLogin' && wechatTel && !selectTel)">
					<el-button style="width:100%" type="primary" v-if="!hasNewTel" @click="_handleWechatTel()">绑定新账号</el-button>
					<el-button style="width:100%" type="primary" v-else @click="_handleWechatHasTel()">绑定已存在的账号</el-button>
				</template>
			</div>
			<!-- <div class="mt20 center" v-show="weChatNumber">
				<div class="wachat" @click="_getWechat('wechatLogin')">
				</div>
			</div> -->
		</div>
		<!-- 协议，网址 -->
		<div  class="footer center">
			<a class="center" href="http://www.educhainx.com" target="_blank">www.educhainx.com</a>
		</div>
		<el-dialog
			:title="dialogTitle"
			center
			:visible.sync="dialogVisible"
			width="1200px"
			>
			<div class="dia-text" v-if="dialogTitle === '《用户协议》'">
				<p class="text1">
					北京知链科技有限公司（以下简称“本公司”）按照下列条款与条件提供信息和产品，您在本协议中亦可被称为“用户”，以下所述条款和条件将构成您与本公司，就您使用提供的内容所达成的全部协议（以下称“本协议”）。
				</p>
				<p class="text2">说明</p>
				<p>
					本公司在此提示用户，请您在使用本服务前详细阅读本协议的所有内容，尤其是免除、限制本公司责任或者限制用户权利的条款（特别是粗体下划线标注的内容），如您对本协议有任何疑问，请向本公司（010-62681383）进行咨询。一旦您使用本服务，即表示您已阅读并完全同意接受本协议项下所述条款和条件的约束。如果您不同意本协议的任何条款，请您不要使用本服务。未成年人应经其监护人陪同阅读本服务协议并表示同意，方可接受本服务协议。监护人应加强对未成年人的监督和保护，因其未谨慎履行监护责任而损害未成年人利益或者本公司利益的，应由监护人承担责任。
				</p>
				<p>
					<strong>
					权利声明
					</strong>
				</p>
				<p>
					1、本公司及其关联公司（关联企业指与本公司存在直接或间接，股权或以协议安排等其他形式的控制与被控制关系，以及对公司运营具有重大影响关系的公司法人）享有并保留以下各项内容完整的、不可分割的所有权及/或知识产权：
				</p>
				<p>
					（1）知链平台相关的软件、技术、程序、代码、用户界面等；
				</p>
				<p>
					（2）本服务相关的商标、图形标记。
				</p>
				<p>
					2、本公司提供的服务内容中所涉及的文档，文字、软件、声音、图片、动画、录像、图表等，均受相关知识产权法以及其他相关法律的保护。未经本公司或者其他相关权利人授权，用户不得复制、使用、修改、摘编、翻译、发行,第三方未经本公司及/或其相关权利人的书面许可，不得以任何方式擅自进行使用。
				</p>
				<p>
					<strong>
					责任限制
					</strong>
				</p>
				<p>
					1、本公司向用户提供的服务均是在依"现状"提供，本公司在此明确声明对本服务不作任何明示或暗示的保证，包括但不限于对服务的可适用性、准确性、及时性、可持续性等。
				</p>
				<p>
					2、用户理解并同意自行承担使用本服务的风险，且用户在使用本服务时，应遵循中国法律的相关规定，由于用户行为所造成的任何损害和后果，本公司均不承担除法律有明确规定外的责任。
				</p>
				<p>
					3、不论在何种情况下，本公司均不对由于网络连接故障、通讯线路、第三方网站、电脑硬件等任何原因给用户造成的任何损失承担除法律有明确规定外的责任。
				</p>
				<p>
					<strong>
					用户行为规范
					</strong>
				</p>
				<p>
					1、用户在本网站注册时，不得使用虚假身份信息。用户应当妥善保存其账户信息和密码，由于用户泄密所导致的损失需由用户自行承担。如用户发现他人冒用或盗用其账户或密码，或其账户存在其他未经合法授权使用之情形，应立即以有效方式通知本公司。用户理解并同意本公司有权根据用户的通知、请求或依据判断，采取相应的行动或措施，包括但不限于冻结账户、限制账户功能等，本公司对采取上述行动所导致的损失不承担除法律有明确规定外的责任。
				</p>
				<p>
					2、用户在使用本服务时须遵守法律法规，不得利用本服务从事违法违规行为，包括但不限于：
				</p>
				<p>
					（1）发布、传送、传播、储存危害国家安全统一、破坏社会稳定、违反公序良俗、侮辱、诽谤、淫秽、暴力以及任何违反国家法律法规的内容；
				</p>
				<p>
					（2）发布、传送、传播、储存侵害他人知识产权、商业秘密等合法权利的内容；
				</p>
				<p>
					（3）恶意虚构事实、隐瞒真相以误导、欺骗他人；
				</p>
				<p>
					（4）发布、传送、传播广告信息及垃圾信息；
				</p>
				<p>
					（5）其他法律法规禁止的行为。
				</p>
				<p>
					3、用户不得利用本服务进行任何有损本公司及其关联企业之权利、利益及商誉，或其他用户合法权利之行为。
				</p>
				<p>
					4、用户知悉并确认，本公司通过公告、邮件、短信、账户通知以及用户在账户中登记的即时通讯工具等方式，向用户发出关于本服务的通知、规则、提示等信息，均为有效通知。该等信息一经公布或发布，即视为已送达至用户。
				</p>
			</div>
			<div class="dia-text" v-else>
				<p class="text1">
					北京知链科技有限公司（以下简称“本公司”）按照下列条款与条件提供信息和产品，您在本协议中亦可被称为“用户”，以下所述条款和条件将构成您与本公司，就您使用提供的内容所达成的全部协议（以下称“本协议”）。
				</p>
				<p class="text2">引言</p>
				<p>
					我们重视用户的隐私。您在使用我们的服务时，我们可能会收集和使用您的相关信息。我们希望通过本《隐私政策》向您说明，在使用我们的服务时，我们如何收集、使用、储存和分享这些信息，以及我们为您提供的访问、更新、控制和保护这些信息的方式。本《隐私政策》与您所使用的服务息息相关，希望您仔细阅读，在需要时，按照本《隐私政策》的指引，作出您认为适当的选择。本《隐私政策》中涉及的相关技术词汇，我们尽量以简明扼要的表述，并提供进一步说明的链接，以便您的理解。
				</p>
				<p>
					您使用或继续使用我们的服务，即意味着同意我们按照本《隐私政策》收集、使用、储存和分享您的相关信息。
				</p>
				<p>
					如对本《隐私政策》或相关事宜有任何问题，请通过zhilian@educhainx.com与我们联系。
				</p>
				<p>
					为了让您有更好的体验、改善我们的服务或您同意的其他用途，在符合相关法律法规的前提下，我们可能将通过某一项服务所收集的信息，以汇集信息或者个性化的方式，用于我们的其他服务。例如，在您使用我们的一项服务时所收集的信息，可能在另一服务中用于向您提供特定内容，或向您展示与您相关的、非普遍推送的信息。如果我们在相关服务中提供了相应选项，您也可以授权我们将该服务所提供和储存的信息用于我们的其他服务。
				</p>
			</div>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="_handleEnter()">同 意</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
import { baseUrl } from '@/config';
import { storage } from '_@/js/utils';
import { Cookie } from '_@/js/one';

export default {
	name: 'login',
	data () {
		var validatePassName = (rule, value, callback) => {
			this.isdata = false;
			if (value === '') {
				callback(new Error('请输入账号'));
				this.isdata = false;
			} else {
				let pattern = /^\d{6,15}$/;
				if (pattern.test(value)) {
					callback();
					this.isdata = true;
				} else {
					callback(new Error('请输入正确的账号'));
					this.isdata = false;
				}
			}
		};
		var validatePassPhone = (rule, value, callback) => {
			this.isdata = false;
			if (value === '') {
				callback(new Error('请输入正确的手机号'));
				this.isdata = false;
			} else {
				let pattern = /^1[3-9]\d{9}$/;
				if (pattern.test(value)) {
					callback();
					this.isdata = true;
				} else {
					callback(new Error('请输入正确的手机号'));
					this.isdata = false;
				}
			}
		};
		var validatePassWord = (rule, value, callback) => {
			this.isdata2 = false;
			if (value === '') {
				callback(new Error('请输入密码'));
				this.isdata2 = false;
			} else {
				if (this.isLogin === 'loginPage') {
					callback();
					this.isdata2 = true;
				} else {
					const parnt = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
					if (parnt.exec(value) === null) {
						callback(new Error('请输入8-16位字母和数字的组合'));
					} else {
						if (this.ruleForm.password2) {
							if (value === this.ruleForm.password2) {
								callback();
								this.isdata2 = true;
							} else {
								callback(new Error('请输入相同的密码'));
								this.isdata2 = false;
							}
						} else {
							callback();
							this.isdata2 = true;
						}
					}
				}
			}
		};
		var validatePassWord2 = (rule, value, callback) => {
			this.isdata3 = false;
			if (value === '') {
				callback(new Error('请再次输入密码'));
				this.isdata3 = false;
			} else {
				const parnt = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
				if (parnt.exec(value) === null) {
					callback(new Error('请输入8-16位字母和数字的组合'));
				} else {
					if (value === this.ruleForm.password) {
						callback();
						this.isdata3 = true;
					} else {
						callback(new Error('请输入相同的密码'));
						this.isdata3 = false;
					}
				}
			}
		};

		return {
			isWeChat: 'firstWe',
			dialogTitle: '',
			isLogin: 'loginPage',
			isWeOrTel: false,
			userId: null,
			wechatTel: false,
			isForgetPass: true,
			selectTel: false,
			hasNewTel: false,
			isCode: false,
			isdata: false,
			isdata2: false,
			isdata3: false,
			dialogVisible: false,
			openId: '',
			wechatSrc: '',
			loginTitle: '账号登陆',
			ruleForm: {
				name: '', // 用户账户
				cellPhone: '', // 账号
				grapCode: '', // 图形验证码
				phoneCode: '', // 手机验证码
				password: '', // 密码1
				password2: '', // 确认密码
				statementState: false // 是否已经阅读协议
			},
			socketIP: '',
			times: 60,
			text: '获取验证码',
			timer: null,
			showError: false,
			accountNumber: true,
			weChatNumber: true,
			noteNumber: true,
			forgetPasswordState: true,
			theme: '',
			timerTen: null,
			grapImgCode: '',
			rules: {
				name: [
					{
						validator: validatePassName,
						required: true,
						trigger: 'blur'
					}
				],
				cellPhone: [
					{
						validator: validatePassPhone,
						required: true,
						trigger: 'blur'
					}
				],
				grapCode: [
					{
						required: true,
						message: '请输入图形验证码',
						trigger: 'blur'
					}
				],
				phoneCode: [
					{
						required: true,
						message: '请输入手机验证码',
						trigger: 'blur'
					}
				],
				password: [
					{
						validator: validatePassWord,
						required: true,
						trigger: 'blur'
					}
				],
				password2: [
					{
						validator: validatePassWord2,
						required: true,
						trigger: 'blur'
					}
				]
			}
		};
	},
	watch: {
		'isWeChat' () {
			let type = this.isWeChat;
			if (type === 'tel') {
				this.isWeOrTel = true;
				this.loginTitle = '绑定账号登陆';
			} else if (type === 'firstWe') {
				this.isWeOrTel = false;
				this.loginTitle = '微信二维码登陆';
			} else if (type === 'telLogin') {
				this.isWeOrTel = false;
				this.loginTitle = '短信验证码登陆';
			}
		}
	},
	beforeDestroy () {
	},
	mounted () {
	},
	created () {
		// 退出登录清除缓存
		// this.handleClearCookie();
		// 判断展示哪些登录的方式
		// this.getLoginFor();
	},
	methods: {
		// 退出登录清除缓存
		handleClearCookie () {
			this.$ajax({
				method: 'post',
				url: '/user/outLogin'
			}).then(res => {
				if (res.success) {
					Cookie.erase('sessionId');
					storage.clear();
					this.getPoint();
				} else {
					Cookie.erase('sessionId');
					storage.clear();
					this.getPoint();
				}
			}).catch(err => {
				throw new Error(err);
			});
		},
		// 微信登录——关联账号
		_handleNew (type) {
			this.selectTel = false;
			this.hasNewTel = type;
		},
		/**
		 * @name: zhangln
		 * @msg: 同意用户协议
		 */
		_handleEnter () {
			this.ruleForm.statementState = true;
			this.dialogVisible = false;
		},
		/**
		 * @name: zhangln
		 * @msg: 用户协议
		 */
		shouText (type) {
			this.dialogTitle = type === 'one' ? '《用户协议》' : '《隐私保护》';
			this.dialogVisible = true;
		},
		/**
		 * @name: zhangln
		 * @msg: 判断展示哪些登录的方式
		 */
		getLoginFor () {
			this.$ajax({
				method: 'post',
				url: '/loginSwitch/findLoginSwitch',
				params: {
				}
			}).then(res => {
				if (res.success) {
					let array = res.data;
					for (let index = 0; index < array.length; index++) {
						const element = array[index];
						if (element.switchType === 'accountNumber') {
							if (element.switchState === 1) {
								this.accountNumber = true;
							} else {
								this.accountNumber = false;
							}
						}
						if (element.switchType === 'weChat') {
							if (element.switchState === 1) {
								this.weChatNumber = true;
							} else {
								this.weChatNumber = false;
							}
						}
						if (element.switchType === 'note') {
							if (element.switchState === 1) {
								this.noteNumber = true;
								// this.rules.cellPhone[0].validator = this.validatePassPhone;
							} else {
								this.noteNumber = false;
								// this.rules.cellPhone[0].validator = this.validatePassPhone2;
							}
						}
						if (element.switchType === 'forgetPassword') {
							if (element.switchState === 1) {
								this.forgetPasswordState = true;
							} else {
								this.forgetPasswordState = false;
							}
						}
					}
				} else {
				}
			});
		},
		/**
		 * @name: zhangln
		 * @msg: 用户修改密码
		 */
		_savePassword () {
			this.$ajax({
				method: 'post',
				url: '/user/retrievePassword',
				params: {
					userPhone: this.ruleForm.cellPhone,
					noteVerifyCode: this.ruleForm.phoneCode || 123456,
					imageVerifyCode: this.ruleForm.grapCode,
					pwdOne: this.ruleForm.password,
					pwdTwo: this.ruleForm.password,
					statementState: this.ruleForm.statementState
				}
			}).then(res => {
				if (res.success) {
					this.$message({
						type: 'success',
						message: res.message
					});
					this.isLogin = 'loginPage';
					// let data = res.data;
					// this.$storage.set('resUrl', data.resUrl + '/pages/view/documentView?resourceID='); // 用户ID
					// this.$storage.set('baseUrl', data.resUrl); // 用户ID
					// this.saveSession(data.user, data.syUserInfo);
				} else {
					this.$message({
						type: 'error',
						message: res.message
					});
				}
			});
		},
		/**
		 * @name: zhangln
		 * @msg: 查看当前账号是否存在
		 */
		_formTel () {
			this.$ajax({
				method: 'post',
				url: '/user/findUserByUserPhone',
				params: {
					userPhone: this.ruleForm.cellPhone
				}
			}).then(res => {
				if (res.success) {
					this.isForgetPass = false;
				} else {
					this.$message({
						type: 'error',
						message: res.message
					});
				}
			});
		},
		/**
		 * @name: zhangln
		 * @msg: 获取ip地址
		 */
		getPoint () {
			this.$ajax({
				method: 'post',
				url: '/user/getUserSocketIoIp'
			}).then(res => {
				if (res.success) {
					let socketIP = res.socketIoIp + ':' + res.socketIoPort;
					this.socketIP = socketIP;
					this.$storage.set('socketIP', socketIP);
				}
				this._initLogin();
			});
		},
		/**
		 * @name: zhangln
		 * @msg: 拉取二维码
		 */
		_getWechat (type) {
			this._handleLogin(type);
			this.wechatTel = false;
			this.$ajax({
				method: 'post',
				url: '/wechatLoginController/qrcode'
			}).then(res => {
				let sceneId = res.data.sceneId || '';
				this.wechatSrc = res.data.url;
				this.userId = res.data.userId;
				this.hand_Socket(sceneId);
			}).catch(err => {
				throw new Error(err);
			});
		},
		/**
		 * @name: zhangln
		 * @msg: 获取微信scoket链接
		 */
		hand_Socket (sceneId) {
			let userId = this.$storage.get('userId') || '';
			let SocketUrl = `${this.socketIP}?userId=${userId}&sceneId=${sceneId}`; // aili
			this.socketIo = window.io.connect(SocketUrl);
			this.socketIo.on('connect', () => {
				// console.log('socketIo连接成功');
			});
			this.socketIo.on('disconnect', () => {
				// console.log('socketIo连接断开');
			});
			this.socketIo.on('wechat', (data) => {
				// console.log('socketIo接受消息!:');
				if (data.loninType === 'notbound') { // 请进行绑定账号
					this.openId = data.openId;
					this.wechatTel = true;
					this.selectTel = true;
					// this._setPhoneWithChat();
					// if (this.userId === null || this.userId === undefined) {
					// 	this.isWeChat = 'telRe';
					// } else {
					// 	this.wechatTel = true;
					// 	this._setPhoneWithChat();
					// }
				} else if (data.loninType === 'success') { // 扫描登陆 - 登陆成功
					this.$message({
						type: 'success',
						message: '登录成功'
					});
					this.$storage.set('resUrl', data.resUrl + '/pages/view/documentView?resourceID='); // 用户ID
					this.$storage.set('baseUrl', data.resUrl); // 用户ID
					this.saveSession(data.user, data.syUserInfo);
				}
			});
		},
		/**
		 * @name: zhangln
		 * @msg: 短信验证码登陆
		 */
		_messageLogin () {
			this.$ajax({
				method: 'post',
				url: '/user/login',
				params: {
					userPhone: this.ruleForm.cellPhone,
					noteVerifyCode: this.ruleForm.phoneCode,
					imageVerifyCode: this.ruleForm.grapCode
				}
			}).then(res => {
				if (res.success) {
					this.$message({
						type: 'success',
						message: res.message
					});
					this.$storage.set('resUrl', res.data.resUrl + '/pages/view/documentView?resourceID='); // 用户ID
					this.$storage.set('baseUrl', res.data.resUrl); // 用户ID
					this.saveSession(res.data.user, res.data.syUserInfo);
				} else {
					this.$message({
						type: 'error',
						message: res.message
					});
				}
			});
		},
		/**
		 * @name: zhangln
		 * @msg: 绑定已存在的账号 ， 绑定成功之后，进入班级页面
		 */
		_handleWechatHasTel () {
			this.$ajax({
				method: 'post',
				url: '/wechatLoginController/oldUserPhoneBinding',
				params: {
					openId: this.openId || '123',
					userPhone: this.ruleForm.cellPhone,
					noteVerifyCode: this.ruleForm.phoneCode || 123456,
					imageVerifyCode: this.ruleForm.grapCode,
					pwdOne: this.ruleForm.password,
					pwdTwo: this.ruleForm.password,
					statementState: this.ruleForm.statementState
				}
			}).then(res => {
				if (res.success) {
					this.$message({
						type: 'success',
						message: res.message
					});
					let data = res.data;
					this.$storage.set('resUrl', data.resUrl + '/pages/view/documentView?resourceID='); // 用户ID
					this.$storage.set('baseUrl', data.resUrl); // 用户ID
					this.saveSession(data.user, data.syUserInfo);
				} else {
					this.$message({
						type: 'error',
						message: res.message
					});
				}
			});
		},
		/**
		 * @name: zhangln
		 * @msg: 绑定新账号， 绑定成功之后，进入班级页面
		 */
		_handleWechatTel () {
			this.$ajax({
				method: 'post',
				url: '/wechatLoginController/userPhoneBinding',
				params: {
					openId: this.openId || '123',
					userPhone: this.ruleForm.cellPhone,
					noteVerifyCode: this.ruleForm.phoneCode || 123456,
					imageVerifyCode: this.ruleForm.grapCode,
					pwdOne: this.ruleForm.password,
					pwdTwo: this.ruleForm.password,
					statementState: this.ruleForm.statementState
				}
			}).then(res => {
				if (res.success) {
					this.$message({
						type: 'success',
						message: res.message
					});
					let data = res.data;
					this.$storage.set('resUrl', data.resUrl + '/pages/view/documentView?resourceID='); // 用户ID
					this.$storage.set('baseUrl', data.resUrl); // 用户ID
					this.saveSession(data.user, data.syUserInfo);
				} else {
					this.$message({
						type: 'error',
						message: res.message
					});
				}
			});
		},
		/**
		* @name: zhangln
		* @msg: 用户账号注册
		*/
		_pageRegister () {
			this.$ajax({
				method: 'post',
				url: '/user/userRegister',
				params: {
					userPhone: this.ruleForm.cellPhone,
					noteVerifyCode: this.ruleForm.phoneCode,
					imageVerifyCode: this.ruleForm.grapCode,
					password: this.ruleForm.password,
					pwdOne: this.ruleForm.password,
					pwdTwo: this.ruleForm.password,
					statementState: this.ruleForm.statementState
				}
			}).then(res => {
				if (res.success) {
					this._handleLogin('loginPage');
					this.$message({
						type: 'success',
						message: res.message
					});
				} else {
					let status = res.status;
					this._getGrapCode();
					if (status === 412) {
						this.$message({
							type: 'error',
							message: '账号错误'
						});
					} else if (status === 413) {
						this.$message({
							type: 'error',
							message: '图形验证码错误'
						});
					} else if (status === 414) {
						this.$message({
							type: 'error',
							message: '账号已注册'
						});
					} else if (status === 416) {
						this.$message({
							type: 'error',
							message: '账号不存在'
						});
					} else if (status === 415) {
						this.$message({
							type: 'error',
							message: '短信验证码错误'
						});
					} else if (status === 417) {
						this.$message({
							type: 'error',
							message: '账户权限不足（加入黑名单）'
						});
					} else if (status === 410) {
						this.$message({
							type: 'error',
							message: '密码错误'
						});
					}
				}
			});
		},
		/**
		 * @name: zhangln
		 * @msg: 发送邀请码
		 */
		_noteAisle () {
			this.$ajax({
				method: 'post',
				url: '/user/noteAisle',
				params: {
					userPhone: this.ruleForm.cellPhone
				}
			}).then(res => {
				if (res.success) {
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
		/**
		 * @name: zhangln
		 * @msg: 点击获取邀请码
		 */
		_handleVeriCode () {
			let parnt = /^1[3-9]\d{9}$/;
			if (parnt.exec(this.ruleForm.cellPhone) == null) {
				this.$message.warning('手机号格式不正确');
				return false;
			}
			this.isCode = true;
			clearInterval(this.timer);
			// 发送邀请码
			this._noteAisle();
			this.timer = setInterval(() => {
				if (this.times <= 0) {
					this.times = 60;
					this.text = '重新发送';
					this.isCode = false;
					clearInterval(this.timer);
					return;
				}
				this.text = this.times + 'S';
				this.times--;
			}, 1000);
		},
		/**
		 * @name: zhangln
		 * @msg: 用户密码登陆
		 */
		_pageLogin () {
			this.$ajax({
				method: 'post',
				url: '/user/passwordLogin',
				params: {
					userPhone: this.ruleForm.name,
					imageVerifyCode: this.ruleForm.grapCode,
					password: this.ruleForm.password
				}
			}).then(res => {
				if (res.success) {
					this.$storage.set('resUrl', res.data.resUrl + '/pages/view/documentView?resourceID='); // 用户ID
					this.$storage.set('baseUrl', res.data.resUrl); // 用户ID
					this.$storage.set('updatePwd', res.data.updatePwd); // 密码是否过于简单
					this.saveSession(res.data.user, res.data.syUserInfo);
					this.$message.success(res.message);
				} else {
					let status = parseFloat(res.status);
					this._getGrapCode();
					if (status === 412) {
						this.$message({
							type: 'error',
							message: '账号错误'
						});
					} else if (status === 413) {
						this.$message({
							type: 'error',
							message: '图形验证码错误'
						});
					} else if (status === 414) {
						this.$message({
							type: 'error',
							message: '账号已注册'
						});
					} else if (status === 416) {
						this.$message({
							type: 'error',
							message: '账号不存在'
						});
					} else if (status === 415) {
						this.$message({
							type: 'error',
							message: '账号已注册'
						});
					} else if (status === 417) {
						this.$message({
							type: 'error',
							message: '账户权限不足（加入黑名单）'
						});
					} else if (status === 410) {
						this.$message({
							type: 'error',
							message: '密码错误'
						});
					} else if (status === 418) {
						this.$message({
							type: 'error',
							message: '授权码错误'
						});
					} else if (status === 419) {
						this.$message({
							type: 'error',
							message: '账户使用时间到期'
						});
					} else {
						this.$message({
							type: 'error',
							message: res.message
						});
					}
				}
			});
		},
		/**
		 * @name: zhangln
		 * @msg: 设置缓存并登陆， 跳转页面
		 */
		saveSession (user, syUserInfo) {
			if (user.userType === 1) { // 老师
				this.$router.push({name: 'teacher-class'});
				this.$storage.set('userId', user.id); // 用户ID
				this.$storage.set('User', JSON.stringify(user));
				this.$storage.set('userType', user.userType);
				if (syUserInfo) {
					this.$storage.set('UserImage', syUserInfo.userImage || 'http://thirdwx.qlogo.cn/mmopen/nKRDZpwiakwhE4pfgQJAch885Wa6X49o43V3p1tT2iamPjUrtZbpEnr1JF3rTiccqCNQ7aVpWG1oclDKhrLtINx7bYE20gGPFpy/132'); // 存储用户头像
					this.$storage.set('UserName', syUserInfo.realName);
					this.$storage.set('userSchoolName', syUserInfo.userSchoolName);
				} else {
					this.$storage.set('UserImage', 'http://thirdwx.qlogo.cn/mmopen/nKRDZpwiakwhE4pfgQJAch885Wa6X49o43V3p1tT2iamPjUrtZbpEnr1JF3rTiccqCNQ7aVpWG1oclDKhrLtINx7bYE20gGPFpy/132'); // 存储用户头像
					this.$storage.set('UserName', user.userPhone);
				}
			} else if (user.userType === 2) { // 学生
				this.$router.push({name: 'student-class'});
				this.$storage.set('User', JSON.stringify(user));
				this.$storage.set('userType', user.userType);
				this.$storage.set('userId', user.id); // 用户ID
				if (syUserInfo) {
					this.$storage.set('UserImage', syUserInfo.userImage || 'http://thirdwx.qlogo.cn/mmopen/nKRDZpwiakwhE4pfgQJAch885Wa6X49o43V3p1tT2iamPjUrtZbpEnr1JF3rTiccqCNQ7aVpWG1oclDKhrLtINx7bYE20gGPFpy/132'); // 存储用户头像
					this.$storage.set('UserName', syUserInfo.realName);
					this.$storage.set('userSchoolName', syUserInfo.userSchoolName);
				} else {
					this.$storage.set('UserImage', 'http://thirdwx.qlogo.cn/mmopen/nKRDZpwiakwhE4pfgQJAch885Wa6X49o43V3p1tT2iamPjUrtZbpEnr1JF3rTiccqCNQ7aVpWG1oclDKhrLtINx7bYE20gGPFpy/132'); // 存储用户头像
					this.$storage.set('UserName', user.userPhone);
				}
			} else if (user.userType === 3) {
				this.$router.push({name: 'admin'});
				this.$storage.set('User', JSON.stringify(user));
				this.$storage.set('userId', user.id); // 用户ID
				if (syUserInfo) {
					this.$storage.set('UserImage', syUserInfo.userImage || 'http://thirdwx.qlogo.cn/mmopen/nKRDZpwiakwhE4pfgQJAch885Wa6X49o43V3p1tT2iamPjUrtZbpEnr1JF3rTiccqCNQ7aVpWG1oclDKhrLtINx7bYE20gGPFpy/132'); // 存储用户头像
					this.$storage.set('UserName', syUserInfo.realName);
					this.$storage.set('userSchoolName', syUserInfo.userSchoolName);
				} else {
					this.$storage.set('UserImage', 'http://thirdwx.qlogo.cn/mmopen/nKRDZpwiakwhE4pfgQJAch885Wa6X49o43V3p1tT2iamPjUrtZbpEnr1JF3rTiccqCNQ7aVpWG1oclDKhrLtINx7bYE20gGPFpy/132'); // 存储用户头像
					this.$storage.set('UserName', user.userPhone);
				}
			}
			// this.$ajax({
			// 	method: 'post',
			// 	url: '/wechatLoginController/saveSession',
			// 	params: {
			// 		userType: user.userType,
			// 		userId: user.id,
			// 		userPhone: user.userPhone
			// 	}
			// }).then(res => {
			// 	if (res.success) {
			// 		/**
			// 		 * TODU 2022年3月23号 因数字货币培训课引流而删除该逻辑，
			// 		 * @name: liujiatian
			// 		 * @msg: 获取微信scoket链接
			// 		 */
			// 		// 线上环境、没有绑定手机号的提示
			// 		// if (this.noteNumber && user.userPhone === '~') {
			// 		// 	this.$confirm('为了您的账号安全，请前往个人中心—>账号设置，绑定手机号?', '提示', {
			// 		// 		confirmButtonText: '关闭',
			// 		// 		showCancelButton: false,
			// 		// 		type: 'warning'
			// 		// 	}).then(() => {
			// 		// 	}).catch(() => {
			// 		// 	});
			// 		// }
			// 		if (user.userType === 1) { // 老师
			// 			this.$router.push({name: 'teacher-class'});
			// 			this.$storage.set('userId', user.id); // 用户ID
			// 			this.$storage.set('User', JSON.stringify(user));
			// 			this.$storage.set('userType', user.userType);
			// 			if (syUserInfo) {
			// 				this.$storage.set('UserImage', syUserInfo.userImage || 'http://thirdwx.qlogo.cn/mmopen/nKRDZpwiakwhE4pfgQJAch885Wa6X49o43V3p1tT2iamPjUrtZbpEnr1JF3rTiccqCNQ7aVpWG1oclDKhrLtINx7bYE20gGPFpy/132'); // 存储用户头像
			// 				this.$storage.set('UserName', syUserInfo.realName);
			// 				this.$storage.set('userSchoolName', syUserInfo.userSchoolName);
			// 			} else {
			// 				this.$storage.set('UserImage', 'http://thirdwx.qlogo.cn/mmopen/nKRDZpwiakwhE4pfgQJAch885Wa6X49o43V3p1tT2iamPjUrtZbpEnr1JF3rTiccqCNQ7aVpWG1oclDKhrLtINx7bYE20gGPFpy/132'); // 存储用户头像
			// 				this.$storage.set('UserName', user.userPhone);
			// 			}
			// 		} else if (user.userType === 2) { // 学生
			// 			this.$router.push({name: 'student-class'});
			// 			this.$storage.set('User', JSON.stringify(user));
			// 			this.$storage.set('userType', user.userType);
			// 			this.$storage.set('userId', user.id); // 用户ID
			// 			if (syUserInfo) {
			// 				this.$storage.set('UserImage', syUserInfo.userImage || 'http://thirdwx.qlogo.cn/mmopen/nKRDZpwiakwhE4pfgQJAch885Wa6X49o43V3p1tT2iamPjUrtZbpEnr1JF3rTiccqCNQ7aVpWG1oclDKhrLtINx7bYE20gGPFpy/132'); // 存储用户头像
			// 				this.$storage.set('UserName', syUserInfo.realName);
			// 				this.$storage.set('userSchoolName', syUserInfo.userSchoolName);
			// 			} else {
			// 				this.$storage.set('UserImage', 'http://thirdwx.qlogo.cn/mmopen/nKRDZpwiakwhE4pfgQJAch885Wa6X49o43V3p1tT2iamPjUrtZbpEnr1JF3rTiccqCNQ7aVpWG1oclDKhrLtINx7bYE20gGPFpy/132'); // 存储用户头像
			// 				this.$storage.set('UserName', user.userPhone);
			// 			}
			// 		} else if (user.userType === 3) {
			// 			this.$router.push({name: 'admin'});
			// 			this.$storage.set('User', JSON.stringify(user));
			// 			this.$storage.set('userId', user.id); // 用户ID
			// 			if (syUserInfo) {
			// 				this.$storage.set('UserImage', syUserInfo.userImage || 'http://thirdwx.qlogo.cn/mmopen/nKRDZpwiakwhE4pfgQJAch885Wa6X49o43V3p1tT2iamPjUrtZbpEnr1JF3rTiccqCNQ7aVpWG1oclDKhrLtINx7bYE20gGPFpy/132'); // 存储用户头像
			// 				this.$storage.set('UserName', syUserInfo.realName);
			// 				this.$storage.set('userSchoolName', syUserInfo.userSchoolName);
			// 			} else {
			// 				this.$storage.set('UserImage', 'http://thirdwx.qlogo.cn/mmopen/nKRDZpwiakwhE4pfgQJAch885Wa6X49o43V3p1tT2iamPjUrtZbpEnr1JF3rTiccqCNQ7aVpWG1oclDKhrLtINx7bYE20gGPFpy/132'); // 存储用户头像
			// 				this.$storage.set('UserName', user.userPhone);
			// 			}
			// 		}
			// 	}
			// });
		},
		/**
		 * @name: zhangln
		 * @msg: 初始化登陆状态-用户密码登录
		 */
		_initLogin () {
			// if (this.$route.query && this.$route.query.type === 'register') {
			// 	this._handleLogin('registerPage');
			// } else {
			// }
			// this._getGrapCode();
			// this._handleLogin('loginPage');
			// this._handleLogin('registerPage');
			this._handleLogin('loginPage');
		},
		/**
		 * @name: zhangln
		 * @msg: 获取图形验证码
		 */
		_getGrapCode () {
			this.grapImgCode = `${window.location.origin}/${baseUrl}/user/imageIdentifyingCode?width=113&height=36&t_=${new Date().getTime()}`;
		},
		/**
		* @name: zhangln
		* @msg: 切换登录，清空表单数据
		*/
		_handleLogin (type) {
			this.isLogin = type;
			this.ruleForm = {
				name: '', // 用户账户
				cellPhone: '', // 账号
				grapCode: '', // 图形验证码
				phoneCode: '', // 手机验证码
				password: '', // 密码1
				password2: '',
				statementState: false
			};
			this.isdata = false;
			this.isdata2 = false;
			this.isdata3 = false;
			// this.$nextTick(() => {
			// 	this._getGrapCode();
			// });
			this._getGrapCode();
		}
	}
};
</script>

<style lang="scss" scoped>
.dia-text{
	p{
		font-size: 16px;
		font-weight: 400;
		line-height: 24px;
		margin-top: 10px;
	}
	.text1{
		font-size: 16px;
		font-weight: 400;
		line-height: 24px;
		margin-top: 10px;
	}
	.text2{
		font-size: 16px;
		font-weight: 400;
		color: #2f2f2f;
		margin-top: 10px;
	}
}
.login-span{
	color: #cacaca;
	cursor: pointer;
	&:hover,&.active{
		color: #76b9f7;
	}
}
.login-inter{
	position: absolute;
	height: 70px;
	width: 100%;
	top: -70px;
	width: 100%;
    top: -33px;
    left: 0px;
}
.wachat{
	background: url('./images/wechat.png') no-repeat;
	&:hover{
		background: url('./images/wechat-hover.png') no-repeat;
	}
	cursor: pointer;
	width: 44px;
	height: 44px;
	margin: 0 auto;
}
.tests{
	color: #3498e9;
    font-size: 24px;
    font-weight: 600;
    font-family: cursive;
}
.inter-btn{
	padding: 0 45px;
	padding-top: 10px;
	margin-top: 10px;
	}
	.inter-logo{
		width: 220px;
		border-radius: 20px;
		height: 100%;
		margin: 0 auto;
		background: url('./images/logo.png') center center no-repeat #3498e9;
		background-size: auto;
	}
.footer{
	text-align: center;
	font-family: PingFangSC-Regular;
	font-size: 14px;
	color: #FFFFFF;
	width: 100%;
	z-index: 20;
	// margin-top: 200px;
	position: absolute;
    bottom: 50px;
	a{
		color: #fff;
	}
}
.text{
	width: 50%;
	p{
		margin-top: 20px;
		&:nth-child(1){
			font-family: PingFangSC-Medium;
			font-size: 52px;
			color: #FFFFFF;
		}
		&:nth-child(2){
			font-family: PingFangSC-Regular;
			font-size: 36px;
			color: #FFFFFF;
		}
		&:nth-child(3){
			font-family: PingFangSC-Regular;
			font-size: 17px;
			color: #FFFFFF;
			line-height: 27px;
		}
	}
}
.header{
	height: 60px;
	position: relative;
	z-index: 20;
	span{
		font-family: PingFangSC-Regular;
		font-size: 18px;
		color: #FFFFFF;
		letter-spacing: 1px;
		height: 36px;
		line-height: 36px;
	}
}
.bg-img{
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    z-index: 1;
}
.tel-login-teturn{
	font-size: 12px;
	color: #888888;
}
.return-wechat{
	.center{
		font-size: 14px;
		color: #888888;
	}
	.auto{
		width: 44px;
		height: 44px;
		cursor: pointer;
		background: url('./images/wechat.png') no-repeat center;
		&:hover{
			background: url('./images/wechat-hover.png') no-repeat center;
		}
	}
}
.sub-button{
	// color: #656CDC;
	&.iscode{
		background-color: #656CDC;
	}
}
.sub-active{
	background-color: #656CDC;
}
.wechat-outer{
	.auto{
		width: 180px;
		margin-top: 20px;
		.center{
			font-size: 12px;
			color: #888888;
		}
	}
}
.login{
	height: 100vh;
    width: 100%;
    background-size: auto 100vh;
	box-sizing: border-box;
	background: url('./images/tan.png') no-repeat center;
	background-size: 100% 100%;
	// padding-top: 100px;
}
.tesdfds{
	font-size: 30px;
	font-family: PingFang-SC-Medium, PingFang-SC;
	font-weight: 500;
	color: #3598E8;
	line-height: 25px;
	padding-top: 30px;
	padding-right: 30px;
	letter-spacing: 5px;
}
.tel-login{
	font-size: 14px;
	color: #888888;
	cursor: pointer;
}

.title{
	font-size: 14px;
	color: #222222;
	line-height: 60px;
	border-bottom: 1px solid #eeeeee;
	.tel{
		position: relative;
		top: -5px;
		cursor: pointer;
		right: -16px;
		width: 44px;
		height: 52px;
		&.itel{
			background: url('./images/tel.png');
		}
		&.iwe{
			background: url('./images/iwe.png');
		}
	}
}
.mask-contents{
	width: 460px;
	min-height: 230px;
	z-index: 3;
	border-radius: 5px;
	// margin: 0 auto;
	margin-left: 200px;
	position: relative;
	padding-bottom: 50px;
	// box-shadow: 0 0 30px rgba(0,0,0,.1);
	border-radius: 5px;
	background: #fff;
	padding: 20px 50px 40px 50px;
	margin-top: 270px;
	background: url('./images/inter.png') no-repeat 100% 100%;
	background-size: cover;
}

.mask-content{
	background: #fff;
	border-radius: 5px;
	top: 33%;
	box-shadow: 0 0 30px rgba(0,0,0,.1);
	padding:0px 50px;
}

.icon-Group{
	font-size: 30px;
	color: #ffeeff;
}
</style>
