<template>
  <div class="min-h-screen bg-gray-50 text-slate-900">
    <nav v-if="user" class="bg-[#004a99] text-white shadow-lg p-4 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex items-center gap-6">
          <div class="font-black text-xl tracking-tight">DPK 2026</div>
          <div class="flex gap-2">
            <UButton to="/dashboard" variant="ghost" color="white" icon="i-heroicons-chart-bar">Dashboard</UButton>
            <UButton to="/input" variant="ghost" color="white" icon="i-heroicons-pencil-square">Input Unit</UButton>
            <UButton to="/rekap" variant="ghost" color="white" icon="i-heroicons-document-text">Rekap Admin</UButton>
          </div>
        </div>
        <UButton color="red" variant="soft" size="xs" @click="handleLogout">Keluar</UButton>
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

async function handleLogout() {
  await client.auth.signOut()
  navigateTo('/login')
}
</script>
