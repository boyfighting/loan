<template>
  <div class="wrapper">
    <Header :title="title" :hasLeftArow="hasLeftArow"></Header>
    <div class="formItem">
      <label class="label">姓名</label>
      <el-input class="input" type="text"></el-input>
    </div>
    <div class="formItem">
      <label class="label">与申请人关系</label>
      <el-select
        size="small"
        class="select"
        v-model="relationship"
        @change="select"
        placeholder="请选择"
      >
        <el-option
          v-for="item in relationships"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="formItem">
      <label class="label">证件号码</label>
      <el-input type="number" class="input"></el-input>
    </div>
    <div class="formItem">
      <label class="label">联系电话</label>
      <el-input type="number" class="input"></el-input>
    </div>

    <el-button class="button" type="primary" @click="addBankCard">下一步</el-button>
  </div>
</template>
<script>
import Header from '../header/header';
export default {
  name: 'AddLink',
  components: {
    Header: Header
  },
  data() {
    return {
      title: '添加联系人',
      hasLeftArow: true,
      residence: 1,
      isMarry: false,
      relationships: [
        {
          value: 'C',
          label: '配偶'
        },
        {
          value: 'F',
          label: '父亲'
        },
        {
          value: 'M',
          label: '母亲'
        },
        {
          value: 'B',
          label: '兄弟'
        },
        {
          value: 'S',
          label: '姐妹'
        },
        {
          value: 'L',
          label: '亲属'
        },
        {
          value: 'W',
          label: '同事'
        },
        {
          value: 'H',
          label: '子女'
        },
        {
          value: 'T',
          label: '同学'
        },
        {
          value: 'Y',
          label: '朋友'
        },
        {
          value: 'O',
          label: '其他'
        }
      ],
      relationship: 'C'
    };
  },
  methods: {
    addBankCard() {
      this.$router.push('/addBankCard');
    },
    select() {}
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
  width: 70%;
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