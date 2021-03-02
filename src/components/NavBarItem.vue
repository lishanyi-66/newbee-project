<template>
  <div class="nav-list-item " @click="itemClick" :class="{active:isActive}">
    <div v-if='!isActive' class="nav-list-icon">
        <slot name='nav-icon'></slot>
    </div>
    <div v-else class="nav-list-icon">
      <slot name="nav-icon-active"></slot>
    </div>
    <div>
        <slot name='nav-name'></slot>
    </div>  
      
  </div>
</template>

<script>
  export default {
    props:{
      path:String
    },
  data() {
    return {
      // isActive:true
    };
  },
  
  mounted() {
    
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path)
      
    }
  },
}
</script>

<style lang='less' scoped>
.nav-list-item{
    text-align: center;
  .nav-list-icon{
    font-size: 20px;
  }  
}


</style>