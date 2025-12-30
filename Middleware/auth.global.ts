export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()

  // Jika belum login dan mencoba buka halaman selain /login, arahkan ke /login
  if (!user.value && to.path !== '/login') {
    return navigateTo('/login')
  }

  // Jika sudah login dan mencoba buka halaman /login, arahkan ke dashboard
  if (user.value && to.path === '/login') {
    return navigateTo('/dashboard')
  }
})
