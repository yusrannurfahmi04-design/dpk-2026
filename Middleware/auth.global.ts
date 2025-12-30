export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()

  // Mencegah looping: Jika belum login dan tidak di halaman login, baru lempar ke login
  if (!user.value && to.path !== '/login') {
    return navigateTo('/login')
  }

  // Jika sudah login tapi malah mau ke halaman login, lempar ke dashboard
  if (user.value && to.path === '/login') {
    return navigateTo('/dashboard')
  }
})
