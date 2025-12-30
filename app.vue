<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-black text-white p-4 shadow-md">
      <UContainer class="flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-bold">MONITORING DPK</NuxtLink>
        <div class="space-x-4">
          <UButton to="/" variant="ghost" color="white">Home</UButton>
          <UButton to="/input" variant="solid" color="primary">Input Pipeline</UButton>
        </div>
      </UContainer>
    </nav>
    
    <NuxtPage />
  </div>
</template>
