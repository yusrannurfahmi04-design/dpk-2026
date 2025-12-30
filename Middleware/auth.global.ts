export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()

  // Jika belum login, paksa ke halaman login
  if (!user.value && to.path !== '/login') {
    return navigateTo('/login')
  }

  // Jika sudah login tapi mau ke halaman login lagi, arahkan ke dashboard
  if (user.value && to.path === '/login') {
    return navigateTo('/dashboard')
  }
})
