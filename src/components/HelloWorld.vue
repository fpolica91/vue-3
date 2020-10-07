<template>
  <div class="hello">
    <div
      class="bg-gray-300 h-64 w-4/6 mx-auto shadow-md flex flex-col justify-center items-center"
    >
      <h3 class="text-xl font-semibold">Change the counter</h3>
      <button
        class="bg-red-500 text-blue-900 border rounded-lg px-8 m-4 h-10 text-2xl font-bold focus:outline-none"
        @click="handleIncrement"
      >
        +
      </button>

      <button
        class="bg-red-500 text-blue-900 border rounded-lg px-8 m-4 h-10 text-2xl font-bold focus:outline-none"
        @click="handleDecrement"
      >
        -
      </button>
      <h5 class="text-3xl">Counter: {{ state.counter }}</h5>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  // this is the composition api,
  // here you can reference to properties from vuex
  // any property that is needed please be sure to return
  setup() {
    const store = useStore()
    const state = ref(store.state)
    const handleIncrement = () => {
      store.commit('increment')
    }
    const handleDecrement = () => {
      store.commit('decrement')
    }
    // as mentioned the properties needed have to be returned here
    return {
      state,
      handleIncrement,
      handleDecrement,
    }
  },
  name: 'Hello World!',
  props: {
    msg: String,
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
