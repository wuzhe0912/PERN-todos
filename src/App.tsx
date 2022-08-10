import { defineComponent } from "vue";

import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  setup() {
    return () => (
      <>
        <HelloWorld msg="Hello Vue3 with TypeScript and Vite" />
      </>
    )
  }
})