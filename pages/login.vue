<template>
  <div class="min-h-screen flex items-center justify-center bg-[#004a99] p-4">
    <UCard class="w-full max-w-md shadow-2xl">
      <template #header>
        <div class="text-center py-2">
          <h2 class="text-2xl font-bold text-blue-900">LOGIN PEGAWAI</h2>
          <p class="text-sm text-gray-500 italic">Monitoring Pipeline DPK 2026</p>
        </div>
      </template>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <UFormGroup label="Email Pegawai">
          <UInput v-model="email" type="email" placeholder="contoh@bank.com" icon="i-heroicons-envelope" size="lg" />
        </UFormGroup>

        <UFormGroup label="Password">
          <UInput v-model="password" type="password" placeholder="••••••••" icon="i-heroicons-lock-closed" size="lg" />
        </UFormGroup>

        <UButton type="submit" block color="primary" size="xl" :loading="loading" class="font-bold">
          MASUK KE SISTEM
        </UButton>
      </form>
      
      <div class="mt-6 text-[10px] text-center text-gray-400">
        © 2025 Divisi Dana & Jasa - Sesuai Draft Implementasi
      </div>
    </UCard>
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
  if (error) alert("Login Gagal: Periksa Email/Password!")
  else navigateTo('/dashboard')
  loading.value = false
}
</script>
