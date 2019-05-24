<template>
  <div class="wrapper">
    <Header :hasLeftArow="hasLeftArow" :title="title" class="header"></Header>

    <div class="formItem">
      <label class="label">贷款金额</label>
      <el-input type="number" v-model="number" @blur="inputNumber" class="input"></el-input>
    </div>
    <div class="formItem">
      <label class="label">贷款期限</label>
      <el-select size="small" class="select" v-model="term" @change="select" placeholder="请选择">
        <el-option v-for="item in terms" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </div>
    <div class="formItem">
      <label class="label">收款账号</label>
      <el-input type="number" v-model="account" class="input"></el-input>
    </div>
    <div class="formItem">
      <label class="label">贷款用途</label>
      <el-input v-model="use" class="input"></el-input>
    </div>

    <el-button class="button" type="primary" @click="toRepayPlan">下一步</el-button>
  </div>
</template>

<script>
import Header from '../header/header';
export default {
  name: 'Advance',
  components: {
    Header: Header
  },
  data() {
    return {
      title: '贷款',
      hasLeftArow: true,
      terms: [
        {
          value: '3',
          label: '3个月'
        },
        {
          value: '6',
          label: '6个月'
        },
        {
          value: '12',
          label: '12个月'
        },
        {
          value: '15',
          label: '15个月'
        }
      ],
      term: '12',
      number: '',
      quota: '',
      account: '',
      use: ''
    };
  },
  created() {
    this.getQuota();
  },
  methods: {
    toRepayPlan() {
      localStorage.setItem('advance', this.number);
      this.$router.push('/repayPlan');
    },
    select() {},
    getQuota() {
      this.quota = localStorage.getItem('quota');
    },
    inputNumber() {
      this.number > this.quota ? alert('超出额度') : '';
    }
  },
  watch: {
    account(account) {
      this.accoun = account.length > 19 ? account.slice(0, 19) : account;
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
  width: 22%;
  font-size: 14px;
}
.input {
  width: 78%;
  border: 0;
}
.input input {
  border-bottom: 1px solid #dcdfe6;
}
.select {
  width: 78%;
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