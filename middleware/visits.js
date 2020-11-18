export default function ({ store, route, redirect }) {
  console.log('[middleware] visits')
  console.log('[middleware] route.path:', route.path)
  store.commit('ADD_VISIT', route.path)
}
