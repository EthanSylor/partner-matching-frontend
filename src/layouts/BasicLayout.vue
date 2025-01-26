<script setup lang="ts">
import {ref} from 'vue'
import Index from "../pages/Index.vue";
import Team from "../pages/Team.vue";

const active = ref("index");
</script>

<template>
  <van-nav-bar
      title="Title"
      left-arrow
  >
    <template #right>
      <van-icon name="search" size="18"/>
    </template>
  </van-nav-bar>

  <div id="content">
    <template v-if="active === 'index'">
      <Index />
    </template>
    <template v-if="active === 'team'">
      <Team />
    </template>
  </div>

  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" name="index">Home</van-tabbar-item>
    <van-tabbar-item icon="search" name="team">Team</van-tabbar-item>
    <van-tabbar-item icon="friends-o" name="user">Account</van-tabbar-item>
  </van-tabbar>
</template>

<style scoped>

</style>