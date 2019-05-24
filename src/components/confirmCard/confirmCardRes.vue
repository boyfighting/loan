<template>
  <div class="wrapper">
    <Header :title="title" :hasLeftArow="hasLeftArow"></Header>
    <div class="formItem">
      <label class="label">姓名</label>
      <el-input class="input"></el-input>
    </div>
    <div class="formItem">
      <label class="label">性别</label>
      <el-input class="input"></el-input>
    </div>
    <div class="formItem">
      <label class="label">民族</label>
      <el-input class="input"></el-input>
    </div>
    <div class="formItem">
      <label class="label">出生日期</label>
      <el-input class="input"></el-input>
    </div>
    <div class="formItem">
      <label class="label">身份证号码</label>
      <el-input class="input"></el-input>
    </div>
    <div class="formItem">
      <label class="label">住址</label>
      <el-input class="input"></el-input>
    </div>
    <div class="formItem">
      <label class="label">签发机关</label>
      <el-input class="input"></el-input>
    </div>
    <div class="formItem">
      <label class="label">有效期限</label>
      <el-input class="input"></el-input>
    </div>
    <el-button class="button" type="primary" @click="toDetection">下一步</el-button>
  </div>
</template>

<script>
import Header from '../header/header';
export default {
  name: 'ConfirmCardRes',
  data() {
    return {
      title: '身份证扫描结果',
      hasLeftArow: true
    };
  },
  components: {
    Header: Header
  },
  methods: {
    toDetection() {
      this.$router.push('/detection');
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
.formItem {
  display: flex;
  line-height: 40px;
  margin-top: 10px;
  font-size: 14px;
  text-align: right;
}
.label {
  padding-right: 12px;
  width: 26%;
}
.input {
  width: 74%;
  border: 0;
}
.input input {
  border-bottom: 1px solid #dcdfe6;
}

.button {
  width: 100%;
  margin-top: 60px;
}
</style>