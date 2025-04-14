<script setup lang="ts">
import { homePage } from '~/data'
</script>

<template>
  <div class="container mx-auto">
    <div class="py-6">
      <div class="px-6">
        <h1
          class="text-black dark:text-zinc-300 font-semibold leading-tight text-4xl md:text-5xl my-5"
        >
          {{ homePage().title }}
        </h1>
        <p class="dark:text-zinc-300">
          {{ homePage().description }}
        </p>
      </div>
    </div>
  </div>
</template>
