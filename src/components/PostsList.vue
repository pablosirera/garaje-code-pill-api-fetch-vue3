<script setup>
const response = await fetch('https://jsonplaceholder.typicode.com/posts')
const data = await response.json()
</script>

<template>
  <div>
    <h2>Posts</h2>
    <pre>{{ data }}</pre>
  </div>
</template>
