<template>
  <view :class="['my-picker', theme]" >
    <view class="title" >{{title}}<text class="must" v-if="is_must">*</text></view>
    <view class="content-box">
      <picker class="picker" :mode="mode" :range="range" :style="component_value ? '': 'color:#7a7a7a'" 
        :value="component_value" :disabled="disabled" @change="handlePicker">
        {{component_value? component_value : (placeholder? placeholder: '请选择')}}
      </picker>
      <image class="icon" src="https://api.lcwmkj.cn/imgbed/sjzhxt/icons/arrow-right.svg" />
    </view>
  </view>
</template>

<script src="./mpicker.js"></script>
<style lang="scss" scoped src="./mpicker.scss"></style>
