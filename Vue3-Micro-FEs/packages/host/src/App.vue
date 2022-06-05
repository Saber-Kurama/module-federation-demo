<script setup>
import Header from 'remote/Header'
import { computed, getCurrentInstance } from 'vue';
import { useStore } from 'vuex'

const store = useStore()
// const xx = getCurrentInstance()
const count = computed(() => {
  console.log('state---', store)
  return store?.state.count
})
const addOne = () => {
  store.commit('addOne')
}
</script>

<template>
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <div class="m-5"> count: {{count}}</div>
    <div>
      <button @click="addOne" class=" bg-blue-500 rounded py-2 px-4 font-light text-white">
        addOne
      </button>
    </div>
    <div class="mt-10">
      <router-view></router-view>
    </div>
  </div>
</template>