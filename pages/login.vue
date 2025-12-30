<template>
  <div class="min-h-screen flex items-center justify-center bg-[#004a99] p-4">
    <div class="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden p-8">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-black text-blue-900 leading-none">MONITORING DPK</h2>
        <p class="text-xs text-gray-500 mt-2 font-medium uppercase tracking-widest italic">Sesuai Draft Implementasi 2026</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block text-xs font-bold text-gray-700 mb-1 uppercase">Email Pegawai</label>
          <input v-model="email" type="email" class="w-full border-gray-300 rounded-lg shadow-sm p-3 border" placeholder="user@bank.com" required />
        </div>
        <div>
          <label class="block text-xs font-bold text-gray-700 mb-1 uppercase">Password</label>
          <input v-model="password" type="password" class="w-full border-gray-300 rounded-lg shadow-sm p-3 border" placeholder="••••••••" required />
        </div>
        <button type="submit" :disabled="loading" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-lg shadow-lg transition">
          {{ loading ? 'MENGECEK DATA...' : 'MASUK KE SISTEM' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const email = ref('')
const password = ref('')
const loading = ref(false)
const client = useSupabaseClient()

const handleLogin = async () => {
  loading.value = true
  const { error } = await client.auth.signInWithPassword({ email: email.value, password: password.value })
  if (error) alert("Email atau Password salah!")
  else navigateTo('/dashboard')
  loading.value = false
}
</script>
