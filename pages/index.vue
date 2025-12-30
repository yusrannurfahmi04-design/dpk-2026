<template>
  <div>Menuju Dashboard...</div>
</template>

<script setup>
// Otomatis pindah ke dashboard (nanti akan dicek oleh satpam middleware)
definePageMeta({ middleware: 'auth' })
navigateTo('/dashboard')
</script>
