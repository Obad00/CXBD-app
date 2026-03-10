<template>
  <div>
    <AppNav />
    <main>
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AppNav    from '@/components/AppNav.vue'
import AppFooter from '@/components/AppFooter.vue'
import { useThemeStore } from '@/stores/theme.js'

const themeStore = useThemeStore()
onMounted(() => { themeStore.init() })
</script>
