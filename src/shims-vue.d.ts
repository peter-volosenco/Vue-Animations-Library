declare module 'vue' {
  import { CompatVue } from '@vue/runtime-dom'
  const Vue: CompatVue
  export default Vue
  export * from '@vue/runtime-dom'
}
declare module '*.vue' {
  import { Component } from 'vue'
  const component: Component
  export default component
}