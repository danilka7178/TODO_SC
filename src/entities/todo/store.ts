import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import type { Todo } from './types';

export const useTodoStore = defineStore('todo', () => {
    const todos = ref<Todo[]>([
        {
            id: 0,
            text: 'Поднять инфрастуктуру проекта',
            status: 'open',
        },
        {
            id: 1,
            text: 'Проснуться, улыбнуться, сделать отжимания, слетать на Марс и прочитать книгу',
            status: 'inWork',
        },
        {
            id: 2,
            text: 'Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог',
            status: 'closed',
        },
        {
            id: 3,
            text: 'Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог',
            status: 'open',
        },
        {
            id: 4,
            text: 'Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог',
            status: 'open',
        },
        {
            id: 5,
            text: 'Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог',
            status: 'open',
        },
        {
            id: 6,
            text: 'Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог',
            status: 'closed',
        },
        {
            id: 7,
            text: 'Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог',
            status: 'inWork',
        },
        {
            id: 8,
            text: 'Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог Спеть - Знаешь ли ты, вдоль ночных дорог',
            status: 'inWork',
        }
    ]);

    function addTodo(todo: Todo) {
        if(todo.status){
            todos.value.push(todo);
            return
        }

        todo.status = 'open';
        todos.value.push(todo);
    }

    function removeTodo(id: number) {
        todos.value = todos.value.filter((todo: Todo) => todo.id !== id);
    }

    function changeStatus(id: number, status: 'string'){
        todos.value = todos.value.map((todo) => {
            if(id === todo.id){
                todo.status = status;
            }
        });
    }

    const openTodosCount = computed(() => todos.value.filter((todo) => todo.status === 'open').length);
    const inWorkTodosCount = computed(() => todos.value.filter((todo) => todo.status === 'inWork').length);
    const closedTodosCount = computed(() => todos.value.filter((todo) => todo.status === 'closed').length);

    return {
        addTodo,
        removeTodo,
        changeStatus,
        openTodosCount,
        inWorkTodosCount,
        closedTodosCount,
        todos
    };
});