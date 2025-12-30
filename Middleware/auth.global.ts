export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()

  // Jika belum login dan bukan di halaman login, lempar ke /login
  if (!user.value && to.path !== '/login') {
    return navigateTo('/login')
  }
})
