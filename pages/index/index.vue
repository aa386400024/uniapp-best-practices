<template>
  <view>
    <text>Count: {{ count }}</text>
    <text>Double Count: {{ doubleCount }}</text>
    <button @tap="increment">Increment</button>
  </view>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useCounterStore } from '@/stores';
import { todos } from '@/api'

export default defineComponent({
  setup() {
    const counterStore = useCounterStore();

    return {
      count: computed(() => counterStore.count),
      doubleCount: computed(() => counterStore.doubleCount),
      increment: counterStore.increment,
    };
  },
  async created() {
      // 使用 fetchTodos 函数
      const todoList = await todos.fetchTodos()
	  // console.log(todoList, 'todoList');
    },
});
</script>
