<template>
  <div class="min-h-screen bg-gray-50">
    <nav v-if="user" class="bg-primary-600 text-white p-4 shadow-md flex justify-between items-center">
      <div class="flex gap-6 items-center">
        <span class="font-bold text-lg">DPK 2026</span>
        <NuxtLink to="/dashboard" class="hover:underline">Dashboard</NuxtLink>
        <NuxtLink to="/input" class="hover:underline">Input Pipeline</NuxtLink>
        <NuxtLink to="/rekap" class="hover:underline">Rekap Admin</NuxtLink>
      </div>
      <div class="flex items-center gap-4">
        <span class="text-sm italic">{{ user.email }}</span>
        <UButton color="red" variant="ghost" @click="handleLogout">Logout</UButton>
      </div>
    </nav>

    <UContainer class="py-6">
      <NuxtPage />
    </UContainer>
  </div>
</template>

<script setup>
const user = useSupabaseUser()
const client = useSupabaseClient()

const handleLogout = async () => {
  await client.auth.signOut()
  navigateTo('/login')
}

// Redirect otomatis jika belum login
watchEffect(() => {
  if (!user.value) {
    navigateTo('/login')
  }
})
</script>
