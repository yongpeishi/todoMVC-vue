<script setup lang="ts">
import { nextTick, ref } from 'vue';
import type { TodoListProps } from '@/types';

const { todolist } = defineProps<{
  todolist: TodoListProps
}>()

const activeEditId = ref<number | null>(null)
const itemEditRef = ref<Record<number, HTMLInputElement | null>>({})

const emit = defineEmits(['toggle-complete', 'delete-item', 'update-item'])

const toggleComplete = (itemId: number) => {
  emit('toggle-complete', itemId)
}

const deleteItem = (itemId: number) => {
  emit('delete-item', itemId)
}

const editItem = (itemId: number) => {
  activeEditId.value = itemId
  nextTick(() => {
    itemEditRef.value[itemId]?.focus()
  })
}

const updateItemText = (itemId: number) => {
  const enteredText = itemEditRef.value[itemId]?.value.trim()
  emit('update-item', itemId, enteredText)

  activeEditId.value = null
}

const isEditing = (itemId: number) => activeEditId.value === itemId

</script>

<template>
  <section class="main">
    <ul class="todo-list">
      <li v-for="item in todolist" :key="item.id" :class="{ completed: item.completed, editing: isEditing(item.id) }">
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.completed" @click="toggleComplete(item.id)" />
          <label @dblclick="editItem(item.id)">{{ item.text }}</label>
          <button class="destroy" @click="deleteItem(item.id)"></button>
        </div>
        <input v-show="isEditing(item.id)" type="text" class="new-todo" :value="item.text"
          :ref="i => itemEditRef[item.id] = i as HTMLInputElement" @keyup.enter="updateItemText(item.id)" />
      </li>
    </ul>
  </section>
</template>
