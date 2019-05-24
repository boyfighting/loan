<template>
  <div class="wrapper">
    <div class="header">
      <span @click="goLoginPage">已有账号，去登录</span>
    </div>
    <div class="form">
      <el-input class="input" type="number" v-model="phone" placeholder="请输入手机号"></el-input>
      <el-input class="input" v-model="code" placeholder="验证码"></el-input>
      <el-input
        class="input"
        type="password"
        v-model="password"
        placeholder="请设置6~16位字母、数字和符号组合的密码"
      ></el-input>
      <el-input class="input" type="password" v-model="confirmPass" placeholder="请确认密码"></el-input>
      <div class="check">
        <el-checkbox class="checkbox"></el-checkbox>
        <span class="tips">《用户协议》《其他需要用户在注册时同意的协议》</span>
      </div>

      <el-button @click="onSubmit" type="primary" class="button">注册</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      phone: '',
      code: '',
      password: '',
      confirmPass: ''
    };
  },
  methods: {
    onSubmit() {
      this.goLoginPage();
    },
    goLoginPage() {
      this.$router.push('/login');
    }
  },
  watch: {
    phone(phone) {
      this.phone = phone.length > 11 ? phone.slice(0, 11) : phone;
    }
  }
};
</script>

<style>
.input input.el-input__inner {
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
}
</style>

<style  scoped>
.wrapper {
  padding: 0 18px;
}
.header {
  padding: 8px 0;
}
.header span {
  float: right;
}
.form {
  margin-top: 60px;
}
.button {
  width: 100%;
  margin-top: 30px;
}
.el-input {
  margin-bottom: 8px;
}
.register {
  color: #409eff;
  font-size: 18px;
}
.check {
  display: flex;
  justify-content: flex-start;
  line-height: 20px;
}
.el-checkbox {
  margin-right: 6px;
}
.tips {
  font-size: 12px;
  color: #409eff;
}
</style>