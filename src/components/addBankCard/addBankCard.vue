<template>
  <div class="wrapper">
    <Header :title="title" :hasLeftArow="hasLeftArow"></Header>

    <div class="formItem">
      <label class="label">银行卡号</label>
      <el-input type="number" class="input"></el-input>
    </div>
    <div class="formItem">
      <label class="label">预留手机号</label>
      <el-input type="number" class="input"></el-input>
    </div>
    <p class="text">* 为保障资金安全，请添加本人持有银行卡</p>

    <el-button class="button" type="primary" @click="complete">确认</el-button>
  </div>
</template>

<script>
import Header from '../header/header';
export default {
  name: 'AddBankCard',
  components: {
    Header: Header
  },
  data() {
    return {
      title: '添加银行卡',
      hasLeftArow: true
    };
  },
  methods: {
    complete() {
      this.$router.push('/completeCredit');
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
.header {
  padding: 10px 0;
  font-size: 20px;
}
.formItem {
  display: flex;
  line-height: 40px;
  margin-top: 10px;
  font-size: 14px;
  text-align: right;
}
.formItem.special {
  line-height: 1;
  padding: 10px 0;
}
.formItem.special .label {
  width: 40%;
}
.label {
  padding-right: 12px;
  width: 30%;
  font-size: 14px;
}
.input {
  width: 76%;
  border: 0;
}
.input input {
  border-bottom: 1px solid #dcdfe6;
}

.button {
  width: 100%;
  margin-top: 60px;
}
.text {
  font-size: 12px;
  text-align: left;
  margin-top: 20px;
}
</style>