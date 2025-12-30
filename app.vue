<template>
  <div class="min-h-screen bg-slate-50 text-slate-900 font-sans">
    <nav v-if="user" class="bg-[#0056b3] text-white shadow-xl px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <div class="flex items-center gap-8">
        <div class="flex flex-col">
          <span class="font-black text-xl tracking-tighter leading-none">DPK 2026</span>
          <span class="text-[10px] tracking-widest uppercase opacity-70">Monitoring System</span>
        </div>
        
        <div class="hidden md:flex gap-1">
          <UButton to="/dashboard" variant="ghost" color="white" icon="i-heroicons-chart-bar">Dashboard</UButton>
          <UButton to="/input" variant="ghost" color="white" icon="i-heroicons-pencil-square">Input Pipeline</UButton>
          <UButton to="/rekap" variant="ghost" color="white" icon="i-heroicons-document-magnifying-glass">Rekap Admin</UButton>
        </div>
      </div>

      <div class="flex items-center gap-4">
        <div class="text-right hidden sm:block">
          <p class="text-xs font-bold leading-none">{{ user.email }}</p>
          <p class="text-[10px] opacity-60">Unit Kerja Aktif</p>
        </div>
        <UButton color="red" variant="soft" size="xs" @click="handleLogout" icon="i-heroicons-power">Keluar</UButton>
      </div>
    </nav>

    <main :class="{ 'p-4 md:p-8': user }">
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

<style>
/* Reset dasar agar tampilan bersih */
body { margin: 0; padding: 0; }
.router-link-active { @apply text-yellow-400 font-bold; }
</style>
