<template>
  <div>
    <nav v-if="user" class="bg-blue-600 text-white p-4 flex justify-between shadow-md">
      <div class="flex gap-4 font-bold">
        <span>DPK 2026</span>
        <NuxtLink to="/dashboard" class="hover:text-blue-200">Dashboard</NuxtLink>
        <NuxtLink to="/input" class="hover:text-blue-200">Input</NuxtLink>
        <NuxtLink to="/rekap" class="hover:text-blue-200">Rekap</NuxtLink>
      </div>
      <button @click="logout" class="bg-red-500 px-3 py-1 rounded text-sm">Keluar</button>
    </nav>

    <main class="min-h-screen bg-gray-50">
      <NuxtPage />
    </main>
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
