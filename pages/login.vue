<template>
  <div class="min-h-screen flex items-center justify-center bg-[#004a99] p-4">
    <UCard class="w-full max-w-md shadow-2xl">
      <template #header>
        <div class="text-center py-4">
          <h2 class="text-2xl font-bold text-blue-900 uppercase">Login Monitoring</h2>
          <p class="text-sm text-gray-500 italic">Sesuai Draft Implementasi DPK 2026</p>
        </div>
      </template>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <UFormGroup label="Email Pegawai" name="email">
          <UInput v-model="email" type="email" placeholder="user@bank.com" icon="i-heroicons-envelope" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="password" type="password" placeholder="••••••••" icon="i-heroicons-lock-closed" />
        </UFormGroup>

        <UButton type="submit" block color="primary" size="lg" :loading="loading">
          MASUK SEKARANG
        </UButton>
      </form>
    </UCard>
  </div>
</template>

<script setup>
const email = ref('')
const password = ref('')
const loading = ref(false)
const client = useSupabaseClient()

async function handleLogin() {
  loading.value = true
  const { error } = await client.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })
  
  if (error) {
    alert("Gagal Masuk: Email atau Password salah!")
  } else {
    navigateTo('/dashboard')
  }
  loading.value = false
}
</script>
