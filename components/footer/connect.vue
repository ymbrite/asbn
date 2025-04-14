<script setup lang="ts">
import { footerData, seoData } from '~/data'
</script>

<template>
  <div>
    <p class="text-black dark:text-zinc-300 text-base font-semibold">{{ $t('ConnectWithMe') }}</p>
    <p class="dark:text-zinc-300">
      {{ footerData().authorInterest }}
    </p>
  </div>
</template>
