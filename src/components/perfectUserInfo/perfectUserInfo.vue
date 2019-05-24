<template>
  <div class="wrapper">
    <Header :title="title" :hasLeftArow="hasLeftArow"></Header>
    <p class="title special">基本信息</p>
    <div class="formItem">
      <label class="label">姓名</label>
      <el-input class="input"></el-input>
    </div>
    <div class="formItem">
      <label class="label">证件类型</label>
      <el-input class="input"></el-input>
    </div>
    <div class="formItem">
      <label class="label">证件号</label>
      <el-input class="input"></el-input>
    </div>
    <div class="formItem">
      <label class="label">年龄</label>
      <el-input class="input"></el-input>
    </div>
    <p class="title">户口性质</p>
    <div class="formItem special">
      <label class="label">是否为农村户口</label>
      <el-radio-group v-model="residence">
        <el-radio :label="1">是</el-radio>
        <el-radio :label="2">否</el-radio>
      </el-radio-group>
    </div>
    <div class="formItem">
      <label class="label">常用手机号</label>
      <el-input class="input"></el-input>
    </div>
    <div class="formItem">
      <label class="label">常驻地址</label>
      <el-input class="input"></el-input>
    </div>
    <p class="title">教育程度</p>
    <div class="formItem">
      <label class="label">教育水平</label>
      <el-select size="small" class="select" v-model="educate" placeholder="请选择">
        <el-option
          v-for="item in educates"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="formItem">
      <label class="label">学历</label>
      <el-select size="small" class="select" v-model="education" placeholder="请选择">
        <el-option
          v-for="item in educations"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <el-button class="button" type="primary" @click="addFamilyInfo">下一步</el-button>
  </div>
</template>

<script>
import Header from '../header/header';
export default {
  name: 'DerfectUserInfo',
  components: {
    Header: Header
  },
  data() {
    return {
      residence: 1,
      title: '完善用户信息',
      hasLeftArow: true,
      educates: [
        {
          value: 'C',
          label: '本科'
        },
        {
          value: 'D',
          label: '大学专科'
        },
        {
          value: 'E',
          label: '高中/中专/技校'
        },
        {
          value: 'F',
          label: '初中'
        },
        {
          value: 'G',
          label: '初中以下'
        },
        {
          value: 'A',
          label: '博士及以上'
        },
        {
          value: 'B',
          label: '硕士研究生'
        },
        {
          value: 'H',
          label: '第二学士学位'
        },
        {
          value: 'I',
          label: '专升本'
        },
        {
          value: 'J',
          label: '夜大电大函大普通班'
        },
        {
          value: 'O',
          label: '其他'
        }
      ],
      educations: [
        {
          value: '1',
          label: '小学'
        },
        {
          value: '2',
          label: '初中'
        },
        {
          value: '3',
          label: '中专'
        },
        {
          value: '4',
          label: '高中'
        },
        {
          value: '5',
          label: '大专'
        },
        {
          value: '6',
          label: '本科'
        },
        {
          value: '7',
          label: '硕士研究生'
        },
        {
          value: '8',
          label: '博士研究生'
        }
      ],
      educate: '',
      education: ''
    };
  },
  methods: {
    addFamilyInfo() {
      this.$router.push('/familyInfo');
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
  width: 24%;
}
.title {
  width: 100%;
  text-align: left;
  font-size: 12px;
  padding: 10px 0 0 0;
}
.input {
  width: 76%;
  border: 0;
}
.input input {
  border-bottom: 1px solid #dcdfe6;
}
.select {
  width: 76%;
}

.button {
  width: 100%;
  margin-top: 60px;
}
</style>