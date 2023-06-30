<template>
  <view>
    <text>Count: {{ count }}</text>
    <text>Double Count: {{ doubleCount }}</text>
    <button @tap="increment">Increment</button>
  </view>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import { useCounterStore } from '@/stores';
import { todos } from '@/api';

const counterStore = useCounterStore();

const count = computed(() => counterStore.count);
const doubleCount = computed(() => counterStore.doubleCount);
const increment = counterStore.increment;

onMounted(async () => {
  const todoList = await todos.fetchTodos();
});
</script>
