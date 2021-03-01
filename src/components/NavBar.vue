<template>
  <div class="nav-bar">
    <div class="nav-list">
      
        <nav-bar-item class="active">
          <van-icon name="wap-home-o"  size="22" slot="nav-icon"/>
          <div slot="nav-name">首页</div>
        </nav-bar-item>
        <nav-bar-item>
          <van-icon name="wap-home-o"  size="22" slot="nav-icon"/>
          <div slot="nav-name">分类</div>
        </nav-bar-item>
        <nav-bar-item>
          <div slot="nav-icon">
            <van-icon name="wap-home-o"  size="22"/>
          </div>
          <div slot="nav-name">购物车</div>
        </nav-bar-item>
        <nav-bar-item>
          <div slot="nav-icon">
            <van-icon name="wap-home-o"  size="22"/>
          </div>
          <div slot="nav-name">我的</div>
        </nav-bar-item>
      
    </div>
      
  </div>
</template>

<script>
import NavBarItem from './NavBarItem.vue'
export default {
  components: { NavBarItem },

}
</script>

<style lang='less'>
.nav-bar{
  width: 100%;
  height: 2.75rem;
  background-color: white;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #eee;
  
}
.nav-list{
  display: flex;
  justify-content: space-around;
  align-items: center;
  // color: white;
  font-size: 10px;
}

</style>