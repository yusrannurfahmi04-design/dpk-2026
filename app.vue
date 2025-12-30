<template>
  <div class="min-h-screen bg-gray-50 text-slate-900">
    <nav v-if="user" class="bg-primary-700 text-white shadow-xl px-6 py-4 flex justify-between items-center">
      <div class="flex items-center gap-8">
        <h1 class="font-black text-xl tracking-tighter">DPK 2026</h1>
        <div class="hidden md:flex gap-6 font-medium">
          <NuxtLink to="/dashboard" class="hover:text-primary-200">Dashboard</NuxtLink>
          <NuxtLink to="/input" class="hover:text-primary-200">Input Pipeline</NuxtLink>
          <NuxtLink to="/rekap" class="hover:text-primary-200">Rekap Admin</NuxtLink>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <span class="text-xs opacity-75 hidden sm:block">{{ user.email }}</span>
        <UButton color="white" variant="ghost" icon="i-heroicons-arrow-left-on-rectangle" @click="logout">Keluar</UButton>
      </div>
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

const logout = async () => {
  await client.auth.signOut()
  navigateTo('/login')
}
</script>
