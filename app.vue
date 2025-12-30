<template>
  <div class="min-h-screen bg-slate-50">
    <nav v-if="user" class="bg-[#004a99] text-white shadow-xl p-4 sticky top-0 z-50">
      <UContainer class="flex justify-between items-center">
        <div class="flex items-center gap-8">
          <div class="leading-none">
            <h1 class="font-black text-xl tracking-tighter">DPK 2026</h1>
            <span class="text-[10px] uppercase opacity-70">Monitoring System</span>
          </div>
          <div class="hidden md:flex gap-2">
            <UButton to="/dashboard" variant="ghost" color="white" icon="i-heroicons-chart-bar">Dashboard</UButton>
            <UButton to="/input" variant="ghost" color="white" icon="i-heroicons-pencil-square">Input Pipeline</UButton>
            <UButton to="/rekap" variant="ghost" color="white" icon="i-heroicons-document-text">Rekap Admin</UButton>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <div class="text-right hidden sm:block">
            <p class="text-xs font-bold">{{ user.email }}</p>
          </div>
          <UButton color="red" size="xs" icon="i-heroicons-power" @click="handleLogout">Keluar</UButton>
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
