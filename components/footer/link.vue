<template>
  <div class="flex flex-col dark:text-zinc-300 my-5 md:my-0 md:justify-self-center">
    <p class="text-black dark:text-zinc-300 text-base font-semibold">{{ $t('QuickLink') }}</p>
    <NuxtLink to="/" class="hover:underline"> {{ $t('Home') }} </NuxtLink>
    <NuxtLink to="/blogs" class="hover:underline"> {{ $t('Blogs') }} </NuxtLink>
    <NuxtLink to="/categories" class="hover:underline"> {{ $t('Categories') }} </NuxtLink>
    <NuxtLink to="/about" class="hover:underline"> {{ $t('AboutMe') }} </NuxtLink>
  </div>
</template>
