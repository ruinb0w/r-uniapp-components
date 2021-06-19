<template>
  <view class="my-input" >
    <view class="title" >验证码<text class="must" v-if="is_must">*</text></view>
    <input class="input" placeholder="请输入验证码" type="number" @input="handleInput" 
      @blur="handleInput" :value="module_value"/>
    <view class="verify-code" >
      <view class="text" @tap="getVerifyCode">{{time == -1 ? '获取验证码': '已发送'+ time + 's'}}</view>
    </view>
  </view>
</template>

<script src="./mverifyCode.js"></script>
<style lang="scss" scoped src="./mverifyCode.scss"></style>
