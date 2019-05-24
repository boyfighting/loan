<template>
  <div class="header">
    <i v-if="hasLeftArow" class="el-icon-arrow-left arrow" @click="goBack"></i>
    <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['hasLeftArow', 'title'],
  methods: {
    goBack() {
      this.$router.goBack();
    }
  }
};
</script>

<style  scoped>
.header {
  margin-bottom: 40px;
  font-size: 18px;
}
.arrow {
  /* display: flex; */
  float: left;
  font-size: 24px;
  font-weight: bold;
}
</style>