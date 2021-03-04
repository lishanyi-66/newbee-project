<template>
  <div class="simple-header" @click="goback()">
    <icon-svg icon-class="close"></icon-svg>
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
    goback() {
      this.$router.push("/home");
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
  // background-color: #eee;
  border-bottom: 1px solid #eee;
  // .simple-header-name {
  //   text-align: center;
  // }
}
</style>