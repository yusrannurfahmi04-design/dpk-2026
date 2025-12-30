<template>
  <UContainer>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      <UCard class="border-t-4 border-blue-500">
        <h4 class="text-gray-500 uppercase text-xs font-bold">Total Giro</h4>
        <p class="text-2xl font-black text-blue-600">Rp {{ format(totalGiro) }}</p>
      </UCard>
      <UCard class="border-t-4 border-green-500">
        <h4 class="text-gray-500 uppercase text-xs font-bold">Total Tabungan</h4>
        <p class="text-2xl font-black text-green-600">Rp {{ format(totalTab) }}</p>
      </UCard>
      <UCard class="border-t-4 border-orange-500">
        <h4 class="text-gray-500 uppercase text-xs font-bold">Total Deposito</h4>
        <p class="text-2xl font-black text-orange-600">Rp {{ format(totalDep) }}</p>
      </UCard>
    </div>
    
    <div class="mt-10 text-center">
      <UButton to="/input" size="xl" color="primary">Mulai Input Data Baru</UButton>
    </div>
  </UContainer>
</template>

<script setup>
const supabase = useSupabaseClient()
const { data: p } = await supabase.from('pipelines').select('realisasi, kd_produk')

const format = (v) => new Intl.NumberFormat('id-ID').format(v)
const totalGiro = computed(() => p?.filter(x => x.kd_produk.startsWith('1')).reduce((a, b) => a + b.realisasi, 0) || 0)
const totalTab = computed(() => p?.filter(x => x.kd_produk.startsWith('2')).reduce((a, b) => a + b.realisasi, 0) || 0)
const totalDep = computed(() => p?.filter(x => x.kd_produk.startsWith('3')).reduce((a, b) => a + b.realisasi, 0) || 0)
</script>
