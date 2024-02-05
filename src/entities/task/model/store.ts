import {computed, ref} from 'vue';
import {defineStore} from 'pinia';
import {type Task} from './types';

export const useTasksStore = defineStore('tasks', () => {
    const tasks = ref<Task[]>([
        {
            id: '0',
            text: 'Сварить пельмени',
            status: 'open',
        },
        {
            id: '1',
            text: 'Поднять инфрастуктуру проекта',
            status: 'open',
        },
        {
            id: '2',
            text: 'Проснуться, улыбнуться, сделать отжимания, слетать на Марс и прочитать книгу',
            status: 'inWork',
        },
        {
            id: '3',
            text: 'Поругаться с девопсом',
            status: 'inWork',
        },
        {
            id: '4',
            text: 'Спеть - Знаешь ли ты, вдоль ночных дорог',
            status: 'closed',
        }
    ]);

    function addTask(task: Task) {
        if(task.status){
            tasks.value.unshift(task);
            return
        }

        task.status = 'open';
        tasks.value.unshift(task);
    }

    function removeTask(id: string) {
        tasks.value = tasks.value.filter((task: Task) => task.id !== id);
    }

    const openTasksCount = computed(() => tasks.value.filter((task) => task.status === 'open').length);
    const inWorkTasksCount = computed(() => tasks.value.filter((task) => task.status === 'inWork').length);
    const closedTasksCount = computed(() => tasks.value.filter((task) => task.status === 'closed').length);

    return {
        tasks,
        addTask,
        removeTask,
        openTasksCount,
        inWorkTasksCount,
        closedTasksCount
    };
},
    {
        persist: true
    }
);