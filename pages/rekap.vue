<template>
  <UContainer class="py-10">
    <UCard>
      <template #header>
        <div class="flex justify-between items-center">
          <h3 class="text-xl font-bold">Rekapitulasi Pipeline Seluruh Cabang</h3>
          <UButton icon="i-heroicons-document-arrow-down" color="green" @click="downloadExcel">Download Excel</UButton>
        </div>
      </template>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <UCard class="bg-blue-50">
          <div class="text-sm font-medium text-blue-600">Total Giro</div>
          <div class="text-2xl font-bold">Rp {{ formatNumber(totalGiro) }}</div>
        </UCard>
        <UCard class="bg-green-50">
          <div class="text-sm font-medium text-green-600">Total Tabungan</div>
          <div class="text-2xl font-bold">Rp {{ formatNumber(totalTabungan) }}</div>
        </UCard>
        <UCard class="bg-orange-50">
          <div class="text-sm font-medium text-orange-600">Total Deposito</div>
          <div class="text-2xl font-bold">Rp {{ formatNumber(totalDeposito) }}</div>
        </UCard>
      </div>

      <UTable :rows="allPipelines" :columns="columns" />
    </UCard>
  </UContainer>
</template>

<script setup>
const supabase = useSupabaseClient()
const { data: allPipelines } = await supabase.from('pipelines').select('*')

const columns = [
  { key: 'nama_nasabah', label: 'Nasabah' },
  { key: 'kd_produk', label: 'Produk' },
  { key: 'nominal_potensi', label: 'Potensi' },
  { key: 'realisasi', label: 'Realisasi' },
  { key: 'penjelasan_gap', label: 'Keterangan' }
]

const totalGiro = computed(() => allPipelines?.filter(p => p.kd_produk.startsWith('1')).reduce((a, b) => a + b.realisasi, 0) || 0)
const totalTabungan = computed(() => allPipelines?.filter(p => p.kd_produk.startsWith('2')).reduce((a, b) => a + b.realisasi, 0) || 0)
const totalDeposito = computed(() => allPipelines?.filter(p => p.kd_produk.startsWith('3')).reduce((a, b) => a + b.realisasi, 0) || 0)

const formatNumber = (num) => new Intl.NumberFormat('id-ID').format(num)
</script>
