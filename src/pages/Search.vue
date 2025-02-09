<script setup lang="ts">
import {ref} from "vue";

const searchText = ref<string>('')
const activeIds = ref<string[]>([])
const activeIndex = ref<number>(0)
const doClose = (tag: string) => {
  activeIds.value = activeIds.value.filter(item => item !== tag)
}
const onSearch = () => {
  tagList.value = originTagList.map(parentTag => {
    const tempChildren = [...parentTag.children]
    const tempParentTag = {...parentTag}
    tempParentTag.children = tempChildren.filter(item => item.text.includes(searchText.value))
    return tempParentTag
  })
}
const originTagList = [
  {
    text: 'gender',
    children: [
      {text: 'male', id: 'male'},
      {text: 'female', id: 'female'},
    ],
  },
  {
    text: 'grade',
    children: [
      {text: 'freshman', id: 'freshman'},
      {text: 'sophomore', id: 'sophomore'},
      {text: 'freshagreeeeeeeeeeeeeeeeeeeeeeeeeman', id: 'freshagreeeeeeeeeeeeeeeeeeeeeeeeeman'},
      {text: 'sopagreeagrrrrrrrrrrrrrrrrrrrrrrrrhomore', id: 'sopagreeagrrrrrrrrrrrrrrrrrrrrrrrrhomore'},
    ],
  },
]
const tagList = ref(originTagList)
</script>

<template>
  <form action="/">
    <van-search
        v-model="searchText"
        show-action
        action-text="Cancel"
        placeholder="Placeholder"
        @search="onSearch"/>

    <!--        @cancel="onCancel"-->

  </form>
  <van-divider content-position="left">selected tags</van-divider>
  <div v-if="activeIds.length === 0">choose your tags</div>
  <van-row gutter="16" style="padding:0 16px">
    <van-col v-for="tag in activeIds">
      <van-tag closeable size="medium" type="primary" @close="doClose(tag)">
        {{ tag }}
      </van-tag>
    </van-col>
  </van-row>

  <van-divider content-position="left">choose tags</van-divider>
  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagList"
  />

</template>

<style scoped>

</style>