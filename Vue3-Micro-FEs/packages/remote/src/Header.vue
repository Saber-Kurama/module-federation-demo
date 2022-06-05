<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue';

const store = useStore()
// const xx = getCurrentInstance()
const count = computed(() => {
  console.log('state---', store)
  // return 1;
  return store?.state.count
})

</script>
<template>
  <div class="bg-blue-400 flex text-white p-5 text-3xl">
    <div class="font-bold mr-5">header</div>
    <div class="mr-5">|</div>
    <div class="flex gap-3 flex-grow">
      <router-link to="/" class="mr-3">Home</router-link>
      <router-link to="/about" class="mr-3">About</router-link>
    </div>
    <div>{{ count }}</div>
  </div>
</template>
