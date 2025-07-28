declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Diğer özel modül tanımları
declare module '*.svg' {
  const content: string
  export default content
}