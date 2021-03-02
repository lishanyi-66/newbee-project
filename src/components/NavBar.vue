<template>
  <div class="nav-bar">
    <div class="nav-list" >
            <nav-bar-item  path='/home'>
               <icon-svg icon-class="shouye" slot="nav-icon"></icon-svg>
               <icon-svg icon-class='shouyefill' slot="nav-icon-active"></icon-svg>
              <div slot="nav-name">首页</div>
            </nav-bar-item>
        
        <nav-bar-item path='/category'>
          <icon-svg icon-class="qiapianxingshi" slot="nav-icon"></icon-svg>
          <icon-svg icon-class="qiapianxingshi" slot="nav-icon-active"></icon-svg>

          <div slot="nav-name">分类</div>
        </nav-bar-item>
        <nav-bar-item  path='/cart'>
          <icon-svg icon-class="31gouwuche" slot="nav-icon"></icon-svg>
          <icon-svg icon-class='31gouwuchexuanzhong' slot="nav-icon-active"/>
          <div slot="nav-name">购物车</div>
        </nav-bar-item>
        <nav-bar-item path='/user'>
         <icon-svg icon-class="31wode" slot="nav-icon"></icon-svg>
        <icon-svg icon-class='31wodexuanzhong' slot="nav-icon-active"></icon-svg>
          <div slot="nav-name">我的</div>
        </nav-bar-item>
      
    </div>
      
  </div>
</template>

<script>
import NavBarItem from './NavBarItem.vue'
import IconSvg from './icon/IconSvg.vue'
export default {
  components: { NavBarItem,IconSvg,},

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
  margin-top: 2px;
 .active{
    color: tomato;
 }
}

</style>