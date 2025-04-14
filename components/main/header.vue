<script setup lang="ts">
import { navbarData } from '../../data'

const lacalPath = useLocalePath()
const { locales, setLocale, locale } = useI18n()

const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value)
  },
})

const colorMode = useColorMode()
function onClick(val: string) {
  colorMode.preference = val
}

const route = useRoute()
function isActive(path: string) {
  return route.path.startsWith(path)
}
</script>

<template>
  <div class="py-5 border-b dark:border-gray-800 font-semibold">
    <div class="flex px-6 container max-w-5xl justify-between mx-auto items-baseline">
      <ul class="flex items-baseline space-x-5">
        <li class="text-base sm:text-2xl font-bold">
          <NuxtLink :to="lacalPath('/')" :class="{ underline: $route.path === lacalPath('/') }">
            {{ navbarData().homeTitle }}
          </NuxtLink>
        </li>
      </ul>
      <ul class="flex items-center space-x-3 sm:space-x-6 text-sm sm:text-lg">
        <li>
          <NuxtLink :to="lacalPath('/blogs')" :class="{ underline: isActive(lacalPath('/blogs')) }">
            {{ $t('Blogs') }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            :to="lacalPath('/categories')"
            :class="{ underline: isActive(lacalPath('/categories')) }"
          >
            {{ $t('Categories') }}
          </NuxtLink>
        </li>
        <li title="About Me">
          <NuxtLink
            :to="lacalPath('/about')"
            aria-label="About me"
            :class="{ underline: $route.path === lacalPath('/about') }"
          >
            {{ $t('About') }}
          </NuxtLink>
        </li>
        <li>
          <ClientOnly>
            <button
              v-if="colorMode.value === 'light'"
              name="light-mode"
              title="Light"
              class="hover:scale-110 transition-all ease-out hover:cursor-pointer"
              @click="onClick('dark')"
            >
              <Icon name="icon-park:moon" size="20" />
            </button>
            <button
              v-if="colorMode.value === 'dark'"
              name="dark-mode"
              title="Dark"
              class="hover:scale-110 transition-all ease-out hover:cursor-pointer"
              @click="onClick('light')"
            >
              <Icon name="noto:sun" size="20" />
            </button>
            <template #fallback>
              <Icon name="svg-spinners:180-ring" size="20" />
            </template>
          </ClientOnly>
        </li>
        <li>
          <select v-model="language" class="rounded-lg !bg-transparent border-none !outline-none">
            <option
              v-for="item in locales"
              :key="typeof item === 'object' ? item.code : item"
              :value="typeof item === 'object' ? item.code : item"
            >
              {{ typeof item === 'object' ? item.name : item }}
            </option>
          </select>
        </li>
      </ul>
    </div>
  </div>
</template>
