<template name="three-block">
  <view class="three-block" >
    <navigator :class="['item', 'item'+index]" v-for="(item, index) in block_list" :key="item.title"
      :url="item.url">
      <image class="img" v-if="index == 0" :src="item.img" mode="ascpetFill"/>
      <image class="img" v-else :src="item.img" mode="widthFix"/>
      <view class="title-box" >
        <view class="title" >
          <view class="title-text" >{{item.title}}</view>
        </view>
        <view class="subtitle" >{{item.subtitle}}</view>
      </view>
    </navigator>
  </view>
</template>

<script src="./threeBlock.js"></script>
<style lang="scss" src="./threeBlock.scss" scoped></style>
