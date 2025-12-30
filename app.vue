<template>
  <div class="min-h-screen bg-gray-50">
    <nav v-if="user" class="bg-blue-800 text-white shadow-lg p-4 mb-6">
      <UContainer class="flex justify-between items-center">
        <div class="flex items-center gap-6">
          <h1 class="font-bold text-xl tracking-tight">DPK 2026</h1>
          <div class="flex gap-4">
            <UButton to="/dashboard" variant="ghost" color="white">Dashboard</UButton>
            <UButton to="/input" variant="ghost" color="white">Input Pipeline</UButton>
            <UButton to="/rekap" variant="ghost" color="white">Rekap Admin</UButton>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <span class="text-xs opacity-80">{{ user.email }}</span>
          <UButton color="red" size="xs" @click="handleLogout">Keluar</UButton>
        </div>
      </UContainer>
    </nav>

    <main>
      <NuxtPage />
    </main>

    <UNotifications />
  </div>
</template>

<script setup>
const user = useSupabaseUser()
const client = useSupabaseClient()

const handleLogout = async () => {
  await client.auth.signOut()
  navigateTo('/login')
}
</script>
