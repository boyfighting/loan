<template>
  <div class="wrapper">
    <Header :title="title" :hasLeftArow="hasLeftArow"></Header>
    <div class="item">
      <span>扫码身份证头像面</span>
      <img class="img" src="./u141.png" alt>
      <img class="svg" src="./u146.svg" alt>
    </div>
    <div class="item">
      <span>扫描身份证国徽面</span>
      <img class="img" src="./u141.png" alt>
      <img class="svg" src="./u146.svg" alt>
    </div>
    <p class="text">拍摄过程中，请保证拍摄图像清晰，不要反光</p>
    <el-button class="button" @click="toConfirmCardRes" type="primary">下一步</el-button>
  </div>
</template>

<script>
import Header from '../header/header';
export default {
  name: 'ConfirmCard',
  components: {
    Header: Header
  },
  data() {
    return {
      title: '扫描身份证',
      hasLeftArow: true
    };
  },
  methods: {
    toConfirmCardRes() {
      this.$router.push('/confirmCardRes');
    }
  }
};
</script>

<style  scoped>
.wrapper {
  padding: 16px;
}
.item {
  position: relative;
  height: 170px;
  margin-top: 60px;
}
.item span {
  display: inline-block;
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  margin-left: -68px;
}
.img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}
.svg {
  width: 56px;
  position: absolute;
  top: 20px;
  left: 50%;
  margin-left: -30px;
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