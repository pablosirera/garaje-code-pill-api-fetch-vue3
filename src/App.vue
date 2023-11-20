<script setup>
import HelloWorld from './components/HelloWorld.vue'
import PostsList from './components/PostsList.vue'
import { useFetch } from '@vueuse/core'

const loadData = async () => {
  const { isFetching, error, data } = await useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  ).json()

  console.log(data)
}

loadData()
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <Suspense>
    <template #default>
      <main>
        <p>Test</p>
        <PostsList style="height: 400px; overflow: scroll" />
      </main>
    </template>
    <template #fallback> Loading... </template>
  </Suspense>
</template>
