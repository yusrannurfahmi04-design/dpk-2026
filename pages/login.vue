<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700 p-4">
    <UCard class="w-full max-w-md shadow-2xl border-none">
      <template #header>
        <div class="text-center py-4">
          <h2 class="text-2xl font-black text-blue-900 tracking-tight">LOGIN MONITORING</h2>
          <p class="text-sm text-slate-500 font-medium italic">Silakan masuk untuk akses data DPK 2026</p>
        </div>
      </template>

      <form @submit.prevent="handleLogin" class="space-y-5">
        <UFormGroup label="Email Pegawai" name="email">
          <UInput v-model="email" type="email" placeholder="name@bank.com" icon="i-heroicons-envelope" size="lg" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="password" type="password" placeholder="••••••••" icon="i-heroicons-lock-closed" size="lg" />
        </UFormGroup>

        <UButton type="submit" block color="blue" size="xl" :loading="loading" class="font-bold shadow-lg">
          MASUK KE SISTEM
        </UButton>
      </form>

      <template #footer>
        <p class="text-[10px] text-center text-slate-400">
          © 2025 Divisi Dana & Jasa - Monitoring Pipeline DPK 2026
        </p>
      </template>
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
  if (error) {
    alert("Login Gagal: Periksa Email/Password Anda!")
  } else {
    navigateTo('/dashboard')
  }
  loading.value = false
}
</script>
