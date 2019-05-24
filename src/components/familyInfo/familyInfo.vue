<template>
  <div class="wrapper">
    <Header :title="title" :hasLeftArow="hasLeftArow"></Header>
    <div class="formItem">
      <label class="label">婚姻状况</label>
      <el-select size="small" class="select" v-model="matrimony" @change="select" placeholder="请选择">
        <el-option
          v-for="item in matrimonys"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="isMarry" v-if="isMarry">
      <div class="formItem">
        <label class="label">配偶姓名</label>
        <el-input class="input"></el-input>
      </div>
      <div class="formItem">
        <label class="label">配偶证件号</label>
        <el-input class="input"></el-input>
      </div>
      <div class="formItem">
        <label class="label">配偶证件类型</label>
        <el-input class="input"></el-input>
      </div>
      <div class="formItem">
        <label class="label">配偶联系方式</label>
        <el-input class="input"></el-input>
      </div>
    </div>
    <div class="formItem">
      <label class="label">家庭联系电话</label>
      <el-input type="number" class="input"></el-input>
    </div>
    <div class="formItem">
      <label class="label">家庭月收入</label>
      <el-input @change="change" v-model="income" class="input"></el-input>
    </div>

    <el-button class="button" type="primary" @click="addWorkInfo">下一步</el-button>
  </div>
</template>

<script>
import Header from '../header/header';
export default {
  name: 'FamilyInfo',
  components: {
    Header: Header
  },
  data() {
    return {
      title: '家庭信息',
      hasLeftArow: true,
      residence: 1,
      isMarry: false,
      matrimonys: [
        {
          value: '1',
          label: '未婚'
        },
        {
          value: '2',
          label: '已婚'
        },
        {
          value: '3',
          label: '离异'
        }
      ],
      matrimony: '1',
      income: ''
    };
  },
  methods: {
    addWorkInfo() {
      this.$router.push('/workInfo');
    },
    select() {
      this.matrimony === '2' ? (this.isMarry = true) : (this.isMarry = false);
    },
    change() {
      this.income = this.income + '(元/月)';
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
.select {
  width: 70%;
}

.button {
  width: 100%;
  margin-top: 60px;
}
</style>