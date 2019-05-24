<template>
  <div class="wrapper">
    <div class="card">
      <div>
        <span class="quota">{{quota}}</span>
        <span>(元)</span>
        <br>
        <p class="innerText">贷款额度</p>
      </div>
    </div>
    <el-button class="button" type="primary" @click="toAdvance">去贷款</el-button>
  </div>
</template>

<script>
export default {
  name: 'CompleteCredit',
  data() {
    return {
      quota: 50000
    };
  },
  created() {
    this.number = localStorage.getItem('advance');
    this.quota = this.number ? this.quota - this.number : this.quota;
  },
  methods: {
    toAdvance() {
      localStorage.setItem('quota', this.quota);
      this.$router.push('/advance');
    }
  }
};
</script>

<style  scoped>
.quota {
  /* padding: 0 40px; */
  font-size: 30px;
  font-weight: 700;
}
.innerText {
  line-height: 1;
  margin-top: -54px;
}
.card {
  width: 84%;
  height: 160px;
  border: 1px solid #000;
  margin-top: 60px;
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 60px;
}
.card {
  line-height: 136px;
}
.button {
  width: 100%;
  margin-top: 40px;
}
</style>