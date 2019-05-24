<template>
  <div class="wrapper">
    <div class="header">
      <i class="el-icon-close"></i>
      <span class="register" @click="toRegister">注册</span>
    </div>
    <div class="form">
      <el-input class="input" type="number" v-model="phone" placeholder="请输入注册手机号"></el-input>
      <el-input class="input" type="password" v-model="password" placeholder="请输入登录密码"></el-input>
      <el-input class="input" v-model="code" placeholder="请输入图片验证码"></el-input>
      <el-button @click="onSubmit" type="primary" class="button">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      phone: '',
      password: '',
      code: ''
    };
  },
  methods: {
    onSubmit() {
      if (!this.phone || this.phone.length !== 11) {
        this.$Message({
          message: '手机号不能为空',
          duration: 2000
        });
        return;
      }
      const phon = localStorage.getItem('phone');
      const pass = localStorage.getItem('password');
      if (this.phone !== phon || this.password !== pass) {
        this.$Message({
          message: '手机号或者密码不正确',
          duration: 2000
        });
        return;
      }
      this.$router.push('/home');
    },
    toRegister() {
      this.$router.push('/register');
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
.el-message.el-message--info {
  min-width: 120px;
}
</style>

<style scoped >
.wrapper {
  padding: 0 18px;
  font-size: 14px;
}
.header {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  font-size: 24px;
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
</style>