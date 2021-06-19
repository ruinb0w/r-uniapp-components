<template>
  <view :class="['submit', {disabled}, {touch}]" @tap="submit">
    {{title || '提交'}}
  </view>
</template>

<script src="./submit.js"></script>
<style lang="scss" scoped src="./submit.scss"></style>
