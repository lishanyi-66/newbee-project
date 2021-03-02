<template>
  <div class="simple-header">
    <icon-svg icon-class="close" @click="goBack"></icon-svg>
    <!-- <div class="simple-header-name">{{ name }}</div> -->
    <!-- <div>11</div> -->
  </div>
</template>

<script>
import IconSvg from "../components/icon/IconSvg.vue";
export default {
  components: { IconSvg },
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang='less'>
.simple-header {
  display: flex;
  //   justify-content: space-between;
  justify-content: space-between;
  align-items: center;
  //   flex: 1;
  padding: 10px;
  font-size: 20px;
  height: 22px;
  background-color: #eee;
  .simple-header-name {
    // text-align: center;
    // margin: auto;
    // flex: 1;
  }
}
</style>