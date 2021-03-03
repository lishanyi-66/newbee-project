<template>
  <div class="login">
    <simple-header name="登录"></simple-header>
    <!-- logo -->
    <img src="../assets/logo1.png" />

    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>

    <!-- 同意协议 -->
    <div class="agree-protocol">
      <van-radio-group v-model="radio" class="">
        <van-radio name="1" icon-size="14px"
          >同意 <a href="">《商城隐私政策》</a>
          <a href="">《用户授权须知》</a></van-radio
        >
      </van-radio-group>
    </div>

    <!-- 第三方登录 -->
    <div class="third-party-login">
      <div class="line-name">
        <span></span>
        <span>其他方式登录</span>
        <span></span>
      </div>
      <div class="line-logo">
        <!-- 微信登录 -->
        <div class="line-weixin">
          <icon-svg icon-class="weixin"></icon-svg>
          <span>微信登录</span>
        </div>
        <!-- QQ登录 -->
        <div class="line-qq">
          <icon-svg icon-class="QQ"></icon-svg>
          <span>QQ登录</span>
        </div>
        <!-- 微博登录 -->
        <div class="line-weibo">
          <icon-svg icon-class="weibo"></icon-svg>
          <span>微博登录</span>
        </div>
        <!-- 支付宝登录 -->
        <div class="line-zhifubao">
          <icon-svg icon-class=zhifubao></icon-svg>
          <span>支付宝登录</span>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import IconSvg from '../components/icon/IconSvg.vue';
import SimpleHeader from "../components/SimpleHeader";
export default {
  components: { SimpleHeader,IconSvg },
};
</script>

<style lang='less' scope>
.login {
  text-align: center;
  font-size: 12px;
  img {
    width: 120px;
    height: 80px;
    // margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  a {
    font-size: 12px;
  }
  .line-logo{
    padding: 10px 40px;
    font-size: 24px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    span{
      display: block;
      font-size: 10px;
    }
    
  }
  .agree-protocol{
    padding-left: 20px;
  }
  .third-party-login{
    margin-top:180px;
  }
}
</style>