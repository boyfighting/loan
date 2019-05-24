<template>
  <div class="wrapper">
    <div class="textTips">
      <h2 class="title">授信过程</h2>
      <p class="text">
        <span class="space"></span>为了保证能更好的的为您提供服务，需要进行贷款前必要的授信认证流程。在认证之前，请您准备好以下材料：
        <br>
        <span class="difText">1、二代身份证原件；</span>
        <br>
        <span class="difText">2、常用银行卡；</span>
        <br>
        <span class="difText">在认证过程中，请如实填写您的相关信息。</span>
      </p>
    </div>
    <div class="process">
      <ul>
        <li>
          <span>身份认证</span>
          <img src="./u129.png" alt>
        </li>
        <li>
          <span>人脸识别</span>
          <img src="./u129.png" alt>
        </li>
        <li>
          <span>信息完善</span>
          <img src="./u129.png" alt>
        </li>
        <li>
          <span>绑定银行卡</span>
        </li>
      </ul>
    </div>
    <el-button class="button" @click="toConfirmCard" type="primary">下一步</el-button>
  </div>
</template>

<script>
export default {
  name: 'Loan',
  methods: {
    toConfirmCard() {
      this.$router.push('/confirmCard');
    }
  }
};
</script>

<style  scoped>
.wrapper {
  padding: 16px;
}
h2 {
  font-weight: 400;
  letter-spacing: 4px;
  padding: 10px 0;
  font-size: 18px;
}
.text {
  text-align: left;
  font-size: 14px;
  letter-spacing: 0.1px;
}
.difText {
  margin-left: 28px;
}
.space {
  width: 28px;
  display: inline-block;
}
ul {
  padding-inline-start: 0;
}
.process {
  margin-top: 40px;
}
.process li {
  list-style: none;
  width: 150px;
  padding: 16px 0;
  border: 1px solid #000;
  margin: 0 auto;
  position: relative;
  margin-bottom: 45px;
}
.process img {
  position: absolute;
  bottom: -58px;
  left: 50%;
  margin-left: -15px;
}
.button {
  width: calc(100% - 36px);
  margin-top: 10px;
}
</style>