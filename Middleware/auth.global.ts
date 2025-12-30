export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()

  // Jika belum login dan buka selain /login, paksa ke /login
  if (!user.value && to.path !== '/login') {
    return navigateTo('/login')
  }
})
