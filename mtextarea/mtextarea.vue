<template>
  <view :class="['default', theme]">
    <view class="title" >{{title}}<text class="must" v-if="is_must">*</text></view>
    <textarea class="textarea" :placeholder="placeholder || '请填写'+title" 
      :maxlength="maxlength || 400" @input="handleInput" 
      @blur="handleInput" :value="value" :disabled="disabled"/>
  </view>
</template>

<script src="./mtextarea.js"></script>
<style lang="scss" scoped src="./mtextarea.scss"></style>
