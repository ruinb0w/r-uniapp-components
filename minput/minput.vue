<template>
  <view :class="['default', theme]">
    <view class="title" >{{title}}<text class="must" v-if="is_must">*</text></view>
    <input :class="['input', disabled? 'disabled': '']" :placeholder="placeholder || '请填写'+title" 
      :maxlength="maxlength || 140" :type="type || 'input'" @input="handleInput" 
      @blur="handleInput" :disabled="disabled" :value="component_value"/>
  </view>
</template>

<script src="./minput.js"></script>
<style lang="scss" scoped src="./minput.scss"></style>
