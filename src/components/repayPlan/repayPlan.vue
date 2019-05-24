<template>
  <div class="wrapper">
    <Header :hasLeftArow="hasLeftArow" :title="title" class="header"></Header>

    <div class="formItem">
      <label class="label">还款方式</label>
      <el-input v-model="payWay" class="input" value="AI" clearable></el-input>
    </div>
    <div class="formItem">
      <label class="label">还款账号</label>
      <el-input type="number" class="input"></el-input>
    </div>
    <div class="formItem">
      <label class="label">还款计划</label>
      <el-input v-model="plan" class="input" clearable></el-input>
    </div>

    <el-button class="button" type="primary" @click="complete">确认</el-button>
  </div>
</template>

<script>
import Header from '../header/header';
export default {
  name: 'RepayPlan',
  components: {
    Header: Header
  },
  data() {
    return {
      title: '还款计划',
      hasLeftArow: true,
      payWay: '等额本息',
      plan: '每个月还款666.66元'
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
/* .input input.el-input__inner {
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
} */
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
  width: 22%;
  font-size: 14px;
}
.input {
  width: 78%;
  border: 0;
  font-size: 12px;
}
.input input.el-input__inne {
  border: 1px solid #dcdfe6;
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