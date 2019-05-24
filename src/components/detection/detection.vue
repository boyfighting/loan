<template>
  <div class="wrapper">
    <Header :title="title" :hasLeftArow="hasLeftArow"></Header>
    <div class="item">
      <span>沿用OCR厂商提供的UI页面</span>
      <img class="img" src="./u141.png" alt>
    </div>
    <el-button class="button" @click="toPerfectInfo" type="primary">下一步</el-button>
  </div>
</template>

<script>
import Header from '../header/header';
export default {
  name: 'Detection',
  components: {
    Header: Header
  },
  data() {
    return {
      title: '活体检测',
      hasLeftArow: true
    };
  },
  methods: {
    toPerfectInfo() {
      this.$router.push('/perfectUserInfo');
    }
  }
};
</script>

<style scoped>
.wrapper {
  padding: 16px;
}
.item {
  position: relative;
  height: 160px;
  margin-top: 60px;
}
.item span {
  display: inline-block;
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  margin-left: -100px;
  margin-top: -10px;
}
.img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}
.text {
  font-size: 14px;
  text-align: left;
  margin-top: 20px;
}
.button {
  width: calc(100% - 36px);
  position: fixed;
  left: 18px;
  bottom: 16px;
}
</style>