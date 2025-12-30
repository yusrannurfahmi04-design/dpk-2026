<template>
  <UContainer class="py-10">
    <div class="mb-8">
      <h2 class="text-2xl font-bold text-gray-800">Dashboard Monitoring DPK 2026</h2>
      <p class="text-gray-500">Visualisasi data pipeline vs realisasi kantor pusat [cite: 14-25]</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <UCard shadow="md">
        <template #header> <h3 class="font-bold">Pencapaian per Kategori (Rp) [cite: 118-123]</h3> </template>
        <div class="space-y-6">
          <div v-for="item in stats" :key="item.label">
            <div class="flex justify-between mb-1 text-sm font-medium">
              <span>{{ item.label }}</span>
              <span>{{ formatCurrency(item.value) }}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-4">
              <div class="bg-primary-600 h-4 rounded-full" :style="{ width: item.percent + '%' }"></div>
            </div>
          </div>
        </div>
      </UCard>

      <UCard>
        <template #header> <h3 class="font-bold">Status Pipeline Bulan Ini [cite: 16-17]</h3> </template>
        <div class="flex items-center justify-center h-48 italic text-gray-400 text-center">
          [Grafik Lingkaran Komposisi Produk: Giro, Tabungan, Deposito]
        </div>
      </UCard>
    </div>
  </UContainer>
</template>

<script setup>
const supabase = useSupabaseClient()
const { data: pipelines } = await supabase.from('pipelines').select('nominal_potensi, realisasi, kd_produk')

// Hitung statistik sederhana untuk visualisasi [cite: 118-123]
const stats = computed(() => {
  const total = pipelines?.reduce((a, b) => a + b.nominal_potensi, 0) || 1
  const giro = pipelines?.filter(p => p.kd_produk.startsWith('1')).reduce((a, b) => a + b.nominal_potensi, 0) || 0
  const tab = pipelines?.filter(p => p.kd_produk.startsWith('2')).reduce((a, b) => a + b.nominal_potensi, 0) || 0
  const dep = pipelines?.filter(p => p.kd_produk.startsWith('3')).reduce((a, b) => a + b.nominal_potensi, 0) || 0

  return [
    { label: 'Giro', value: giro, percent: (giro/total)*100 },
    { label: 'Tabungan', value: tab, percent: (tab/total)*100 },
    { label: 'Deposito', value: dep, percent: (dep/total)*100 }
  ]
})

const formatCurrency = (val) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(val)
</script>
