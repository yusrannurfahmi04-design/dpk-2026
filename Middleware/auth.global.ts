export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()

  // 1. Jika BELUM login dan mencoba buka halaman selain /login, arahkan ke /login
  if (!user.value && to.path !== '/login') {
    return navigateTo('/login')
  }

  // 2. Jika SUDAH login dan mencoba buka /login, arahkan ke dashboard
  if (user.value && to.path === '/login') {
    return navigateTo('/dashboard')
  }
})
