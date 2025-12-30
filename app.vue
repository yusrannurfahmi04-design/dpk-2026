<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-primary-700 text-white p-4 shadow-lg">
      <UContainer class="flex justify-between items-center">
        <div class="flex items-center gap-4">
          <span class="font-bold text-xl tracking-tight">DPK 2026</span>
          <div class="h-6 w-px bg-primary-500 mx-2"></div>
          <NuxtLink to="/dashboard" class="hover:text-primary-200 px-2">Dashboard</NuxtLink>
          <NuxtLink to="/input" class="hover:text-primary-200 px-2">Input Unit</NuxtLink>
          <NuxtLink to="/rekap" class="hover:text-primary-200 px-2">Rekap Admin</NuxtLink>
        </div>
        <UAvatar src="https://avatars.githubusercontent.com/u/1?v=4" alt="User" />
      </UContainer>
    </nav>
    <NuxtPage />
  </div>
</template>
