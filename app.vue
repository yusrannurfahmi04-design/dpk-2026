<template>
  <div class="min-h-screen bg-slate-50">
    <nav v-if="user" class="bg-[#004a99] text-white shadow-xl p-4 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex items-center gap-6">
          <div class="font-black text-xl tracking-tighter italic">DPK 2026</div>
          <div class="flex gap-4">
            <NuxtLink to="/dashboard" class="text-sm font-bold hover:text-yellow-400">Dashboard</NuxtLink>
            <NuxtLink to="/input" class="text-sm font-bold hover:text-yellow-400">Input Unit</NuxtLink>
            <NuxtLink to="/rekap" class="text-sm font-bold hover:text-yellow-400">Rekap Admin</NuxtLink>
          </div>
        </div>
        <button @click="handleLogout" class="bg-red-500 px-3 py-1 rounded text-xs font-bold">LOGOUT</button>
      </div>
    </nav>

    <NuxtPage />
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
