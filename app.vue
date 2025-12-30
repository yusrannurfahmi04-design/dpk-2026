<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-primary-600 text-white shadow-lg p-4">
      <UContainer class="flex justify-between items-center">
        <h1 class="font-bold text-lg">DPK MONITORING 2026</h1>
        <div class="flex gap-4">
          <UButton to="/" variant="ghost" color="white">Home</UButton>
          <UButton to="/dashboard" variant="ghost" color="white">Dashboard</UButton>
          <UButton to="/input" variant="ghost" color="white">Input Unit</UButton>
          <UButton to="/rekap" variant="ghost" color="white">Rekap Admin</UButton>
        </div>
      </UContainer>
    </nav>

    <main class="py-6">
      <NuxtPage />
    </main>
  </div>
</template>

<style>
/* Memastikan tema warna utama bank Anda muncul */
.bg-primary-600 { background-color: #0056b3; } 
</style>
