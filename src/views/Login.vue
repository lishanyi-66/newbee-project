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
    <van-radio-group v-model="radio">
      <van-radio name="1" icon-size="14px">同意 <a href="">《商城隐私政策》</a>
    <a href="">《用户授权须知》</a></van-radio>
      
    </van-radio-group>
    
    <!-- 第三方登录 -->
  </div>
</template>

<script>
import SimpleHeader from "../components/SimpleHeader";
export default {
  components: { SimpleHeader },
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
  a{
    font-size: 12px;
  }
}
</style>