import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import type { Todo } from './types';

export const useTodoStore = defineStore('todo', () => {
    const todos = ref<Todo[]>([
        {
            id: 0,
            text: 'Сварить пельмени',
            status: 'open',
        },
        {
            id: 1,
            text: 'Поднять инфрастуктуру проекта',
            status: 'open',
        },
        {
            id: 2,
            text: 'Проснуться, улыбнуться, сделать отжимания, слетать на Марс и прочитать книгу',
            status: 'inWork',
        },
        {
            id: 3,
            text: 'Поругаться с девопсом',
            status: 'inWork',
        },
        {
            id: 4,
            text: 'Спеть - Знаешь ли ты, вдоль ночных дорог',
            status: 'closed',
        }
    ]);

    function addTodo(todo: Todo) {
        if(todo.status){
            todos.value.unshift(todo);
            return
        }

        todo.status = 'open';
        todos.value.unshift(todo);
    }

    function removeTodo(id: number) {
        todos.value = todos.value.filter((todo: Todo) => todo.id !== id);
    }

    const openTodosCount = computed(() => todos.value.filter((todo) => todo.status === 'open').length);
    const inWorkTodosCount = computed(() => todos.value.filter((todo) => todo.status === 'inWork').length);
    const closedTodosCount = computed(() => todos.value.filter((todo) => todo.status === 'closed').length);

    return {
        addTodo,
        removeTodo,
        openTodosCount,
        inWorkTodosCount,
        closedTodosCount,
        todos
    };
});