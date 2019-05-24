<template>
  <div class="wrapper">
    <el-button class="button" type="primary" @click="toLoan">去授信</el-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    toLoan() {
      this.$router.push('/loan');
    }
  }
};
</script>

<style  scoped>
.wrapper {
  padding: 0 18px;
  height: calc(100vh - 16px);
}
.button {
  width: 100%;
  margin-top: calc((100vh - 16px) / 2);
}
</style>