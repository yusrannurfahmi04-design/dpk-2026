<template>
  <UContainer class="py-10">
    <UCard>
      <template #header>
        <div class="flex justify-between items-center">
          <h3 class="text-xl font-bold text-primary">Input Pipeline & Deviasi 2026</h3>
          <UBadge color="black">Role: Unit Kerja</UBadge>
        </div>
      </template>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-4">
          <UFormGroup label="1. Pilih Kategori Portofolio">
            <USelect v-model="category" :options="['Giro', 'Tabungan', 'Deposito']" icon="i-heroicons-circle-stack" />
          </UFormGroup>

          <UFormGroup label="2. Rincian Produk">
            <USelectMenu v-model="selectedProduct" :options="filteredProducts" option-attribute="nama_produk" placeholder="Pilih rincian produk..." />
          </UFormGroup>

          <UFormGroup label="3. Nama Nasabah">
            <UInput v-model="formData.nama_nasabah" placeholder="Contoh: PT. Maju Bersama" icon="i-heroicons-user" />
          </UFormGroup>
        </div>

        <div class="space-y-4">
          <UFormGroup label="4. Nominal Potensi (Rp)">
            <UInput v-model="formData.nominal_potensi" type="number" icon="i-heroicons-banknotes" />
          </UFormGroup>

          <UFormGroup label="5. Nomor Rekening (16 Digit)">
            <UInput v-model="formData.no_rekening" maxlength="16" placeholder="0000xxxxxxxxxxxx" icon="i-heroicons-credit-card" />
          </UFormGroup>

          <UFormGroup label="6. Periode">
            <USelect v-model="formData.periode_pipeline" :options="['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']" />
          </UFormGroup>
        </div>
      </div>

      <template #footer>
        <UButton block color="primary" variant="solid" @click="addToPreview" icon="i-heroicons-plus-circle">
          Tambahkan ke Tabel Preview
        </UButton>
      </template>
    </UCard>

    <UCard v-if="previewData.length > 0" class="mt-8 border-2 border-primary-500">
      <template #header>
        <h4 class="font-bold">Tabel Preview & Deviasi</h4>
        <p class="text-xs text-gray-500 italic">Silakan lengkapi Realisasi dan Penjelasan GAP sebelum submit final.</p>
      </template>

      <UTable :rows="previewData" :columns="columns">
        <template #realisasi-data="{ row, index }">
          <UInput v-model="previewData[index].realisasi" type="number" size="xs" color="blue" />
        </template>
        <template #penjelasan_gap-data="{ row, index }">
          <UInput v-model="previewData[index].penjelasan_gap" size="xs" placeholder="Wajib jika realisasi != potensi" :color="row.realisasi != row.nominal_potensi ? 'orange' : 'white'" />
        </template>
        <template #actions-data="{ index }">
          <UButton color="red" variant="ghost" icon="i-heroicons-trash" @click="previewData.splice(index, 1)" />
        </template>
      </UTable>

      <div class="mt-6 flex justify-end">
        <UButton color="green" size="lg" @click="saveToDatabase" icon="i-heroicons-check-circle">
          Submit Final ke Database
        </UButton>
      </div>
    </UCard>
  </UContainer>
</template>

<script setup>
const supabase = useSupabaseClient()
const category = ref('Giro')
const selectedProduct = ref(null)
const previewData = ref([])
const formData = ref({ nama_nasabah: '', nominal_potensi: 0, no_rekening: '', periode_pipeline: 'Januari' })

const { data: allProducts } = await supabase.from('produk').select('*')

const filteredProducts = computed(() => {
  return allProducts?.filter(p => p.jenis_portofolio === category.value) || []
})

const columns = [
  { key: 'nama_nasabah', label: 'Nasabah' },
  { key: 'nominal_potensi', label: 'Potensi' },
  { key: 'realisasi', label: 'Realisasi' },
  { key: 'penjelasan_gap', label: 'Penjelasan GAP' },
  { key: 'actions', label: 'Hapus' }
]

const addToPreview = () => {
  if (!selectedProduct.value || !formData.value.nama_nasabah) return alert("Lengkapi data nasabah dan produk!")
  if (formData.value.no_rekening.length !== 16) return alert("Nomor Rekening harus 16 digit!")

  previewData.value.push({
    ...formData.value,
    kd_produk: selectedProduct.value.kd_produk,
    nama_produk: selectedProduct.value.nama_produk,
    realisasi: formData.value.nominal_potensi,
    penjelasan_gap: ''
  })
}

const saveToDatabase = async () => {
  // Validasi GAP: wajib diisi jika realisasi != potensi [cite: 89]
  const isInvalid = previewData.value.some(d => d.realisasi != d.nominal_potensi && !d.penjelasan_gap)
  if (isInvalid) return alert("Penjelasan GAP wajib diisi jika realisasi tidak sesuai potensi!")
  
  const { error } = await supabase.from('pipelines').insert(previewData.value)
  if (!error) {
    alert("Berhasil! Data pipeline telah tersimpan.")
    previewData.value = []
  } else {
    alert("Terjadi kesalahan: " + error.message)
  }
}
</script>
