<template>
  <div class="nav-list-item">
      <slot name='nav-icon'></slot>
      <slot name='nav-name'></slot>
  </div>
</template>

<script>
  export default {
  data() {
    return {

    };
  },
  created() {

  },
  mounted() {

  },
  methods: {

  },
}
</script>

<style lang='less' scoped>
.nav-list-item{
    text-align: center;
    margin-top: 2px;
}

</style>