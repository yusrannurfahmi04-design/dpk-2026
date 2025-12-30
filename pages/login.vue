<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <UCard class="w-full max-w-sm">
      <template #header>
        <h3 class="text-center font-bold text-xl text-primary">LOGIN MONITORING DPK</h3>
      </template>
      <form @submit.prevent="handleLogin" class="space-y-4">
        <UFormGroup label="Email Pegawai">
          <UInput v-model="email" type="email" placeholder="nama@bank.com" icon="i-heroicons-envelope" />
        </UFormGroup>
        <UFormGroup label="Password">
          <UInput v-model="password" type="password" icon="i-heroicons-lock-closed" />
        </UFormGroup>
        <UButton type="submit" block color="primary" :loading="loading">Masuk Sistem</UButton>
      </form>
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
  const { error } = await client.auth.signInWithPassword({ 
    email: email.value, 
    password: password.value 
  })
  if (error) alert("Login Gagal: " + error.message)
  else navigateTo('/dashboard')
  loading.value = false
}
</script>
