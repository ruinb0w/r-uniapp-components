<template>
  <view class="sort">
    <radio-group bind:change="setValue" class="sortContent" data-type="class">
      <view class="item" v-for="item in sort_list" :key="item.title">
        <view class="sort-title">{{item.title}}</view>
        <radio class="radio" color="#1e9fff" v-for="item1 in item.list" :key="item1.id"
          :value="item1.id">{{item1.title}}</radio>
      </view>
    </radio-group>
  </view>
</template>

<script src="./sort.js"></script>
<style lang="scss" src="./sort.scss"></style>
