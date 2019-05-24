<template>
  <div class="wrapper">
    <Header :title="title" :hasLeftArow="hasLeftArow"></Header>
    <div class="formItem">
      <label class="label">工作单位名称</label>
      <el-input class="input"></el-input>
    </div>
    <div class="formItem">
      <label class="label">单位性质</label>
      <el-input class="input"></el-input>
    </div>
    <div class="formItem">
      <label class="label">职称</label>
      <el-input class="input"></el-input>
    </div>
    <div class="formItem">
      <label class="label">月收入</label>
      <el-input class="input"></el-input>
    </div>
    <div class="formItem">
      <label class="label">单位地址</label>
      <el-input class="input"></el-input>
    </div>
    <div class="formItem">
      <label class="label">单位电话</label>
      <el-input class="input"></el-input>
    </div>
    <el-button class="button" type="primary" @click="toAddLink">下一步</el-button>
  </div>
</template>

<script>
import Header from '../header/header';
export default {
  name: 'WorkInfo',
  data() {
    return {
      title: '添加工作信息',
      hasLeftArow: true
    };
  },
  components: {
    Header: Header
  },
  methods: {
    toAddLink() {
      this.$router.push('/addLink');
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
  width: 28%;
}
.input {
  width: 72%;
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