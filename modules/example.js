export default function exampleModule(moduleOptions) {
  console.log('[modules]', moduleOptions.token) // '123'
  console.log('[modules]', this.options.exampleMsg) // 'hello'

  this.nuxt.hook('ready', async nuxt => {
    console.log('[modules] Nuxt is ready')
  })
}