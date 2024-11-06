<script setup>
useHead({
  htmlAttrs: {
    class: `dark`,
  },
  bodyAttrs: {
    class: `size-full min-h-100dvh max-w-screen bg-dark-950 text-light`
  }
})
</script>

<template>
  <NuxtLoadingIndicator color="#33ff33" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
