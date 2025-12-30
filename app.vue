<template>
  <div class="min-h-screen bg-slate-50">
    <nav v-if="user" class="bg-[#004a99] text-white shadow-xl p-4 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex items-center gap-8">
          <div class="font-black text-xl tracking-tighter">DPK 2026</div>
          <div class="hidden md:flex gap-4">
            <NuxtLink to="/dashboard" class="px-3 py-2 hover:bg-blue-700 rounded-md transition text-sm font-bold">Dashboard</NuxtLink>
            <NuxtLink to="/input" class="px-3 py-2 hover:bg-blue-700 rounded-md transition text-sm font-bold">Input Unit</NuxtLink>
            <NuxtLink to="/rekap" class="px-3 py-2 hover:bg-blue-700 rounded-md transition text-sm font-bold">Rekap Admin</NuxtLink>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <span class="text-xs opacity-80 hidden sm:block">{{ user.email }}</span>
          <button @click="handleLogout" class="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-xs font-bold transition">Logout</button>
        </div>
      </div>
    </nav>

    <main>
      <NuxtPage />
    </main>
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
