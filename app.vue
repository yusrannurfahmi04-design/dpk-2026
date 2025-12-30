<template>
  <div>
    <nav v-if="user" class="bg-blue-700 text-white p-4 flex justify-between shadow-lg">
      <div class="flex gap-4 font-bold">
        <span>DPK 2026</span>
        <NuxtLink to="/dashboard" class="ml-4">Dashboard</NuxtLink>
        <NuxtLink to="/input">Input</NuxtLink>
        <NuxtLink to="/rekap">Rekap</NuxtLink>
      </div>
      <button @click="logout" class="text-sm bg-red-500 px-2 py-1 rounded">Keluar</button>
    </nav>

    <UContainer class="py-4">
      <NuxtPage />
    </UContainer>
  </div>
</template>

<script setup>
const user = useSupabaseUser()
const client = useSupabaseClient()

const logout = async () => {
  await client.auth.signOut()
  navigateTo('/login')
}
</script>
