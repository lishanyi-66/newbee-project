<template>
  <div class="login">
    <simple-header name="登录"></simple-header>
    <!-- logo -->
    <img src="../assets/logo1.png" />

    <!-- 表单 -->
    <div class="login-input">
      <van-form>
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
    </div>

    <!-- 同意协议 -->
    <div class="agree-protocol">
      <van-radio-group v-model="radio" class="">
        <van-radio name="1" icon-size="14px" @click="clickradio"
          >同意 <a href="">《商城隐私政策》</a>
          <a href="">《用户授权须知》</a></van-radio
        >
      </van-radio-group>
    </div>

    <!-- 第三方登录 -->
    <div class="third-party-login">
      <div class="line-name">
        <!-- <span></span> -->
        <span>其他方式登录</span>
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
          <icon-svg icon-class="zhifubao"></icon-svg>
          <span>支付宝登录</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconSvg from "../components/icon/IconSvg.vue";
import SimpleHeader from "../components/SimpleHeader";
export default {
  components: { SimpleHeader, IconSvg },
  data() {
    return {
      username: "",
      password: "",
      radio: "0",
    };
  },
  methods: {
    clickradio() {
      this.name = "";
      console.log("点击了");
    },
  },
};
</script>

<style lang='less' scope>
.login {
  text-align: center;
  font-size: 12px;
  position: relative;
  height: 100%;
  padding: 0.625rem;
  img {
    width: 120px;
    height: 80px;
    // margin: auto;
    margin-top: 20px;
    // margin-bottom: 20px;
  }
  a {
    font-size: 12px;
  }
  // 背景色实现文字居中线
  .line-name {
    height: 1px;
    border-top: 1px solid #eee;
    text-align: center;
    width: 100%;

    span {
      position: relative;
      top: -8px;
      background-color: #fff;
      padding: 0 20px;
    }
  }
  .line-logo {
    margin-top: 10px;
    padding: 10px 50px;
    font-size: 24px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    span {
      display: block;
      font-size: 8px;
    }
  }
  .agree-protocol {
    padding-left: 20px;
  }
  .third-party-login {
    width: 100%;
    margin-top: 5.5rem;
  }
  .login-input {
    margin-top: 20px;
  }
}
</style>