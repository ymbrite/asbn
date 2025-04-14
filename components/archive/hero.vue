<script setup lang="ts">
import { blogsPage } from '~/data'
</script>

<template>
  <div class="container mx-auto mb-5">
    <div class="py-6">
      <div class="px-6">
        <h1
          class="text-black dark:text-zinc-300 font-semibold leading-tight text-4xl md:text-5xl my-5"
        >
          {{ blogsPage().title }}
        </h1>
        <p class="dark:text-zinc-300">
          {{ blogsPage().description }}
        </p>
      </div>
    </div>
  </div>
</template>
