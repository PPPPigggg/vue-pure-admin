/// <reference types="vite/client" />
/// <reference types="vite-svg-loader" />

declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.scss" {
  const scss: Record<string, string>;
  export default scss;
}

declare module "vue-virtual-scroller";
declare module "vuedraggable/src/vuedraggable";
