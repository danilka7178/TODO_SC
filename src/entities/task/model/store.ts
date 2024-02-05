import {computed, ref} from 'vue';
import {defineStore} from 'pinia';
import {type Task} from './types';

export const useTasksStore = defineStore('tasks', () => {
    const tasks = ref<Task[]>([]);

    function addTask(task: Task) {
        tasks.value.unshift(task);
    }

    function removeTask(id: string) {
        tasks.value = tasks.value.filter((task: Task) => task.id !== id);
    }

    function changeTaskStatus(id: string, newStatus:  string) {
        tasks.value.forEach((task => {
            if(id === task.id){
                task.status = newStatus;
            }
        }))
    }

    const openTasksCount = computed(() => tasks.value.filter((task) => task.status === 'open').length);
    const inWorkTasksCount = computed(() => tasks.value.filter((task) => task.status === 'inWork').length);
    const closedTasksCount = computed(() => tasks.value.filter((task) => task.status === 'closed').length);

    const openTasks = computed(() => tasks.value.filter((task) => task.status === 'open'));
    const inWorkTasks = computed(() => tasks.value.filter((task) => task.status === 'inWork'));
    const closedTasks = computed(() => tasks.value.filter((task) => task.status === 'closed'));

    return {
        tasks,
        addTask,
        removeTask,
        changeTaskStatus,
        openTasksCount,
        inWorkTasksCount,
        closedTasksCount,
        openTasks,
        inWorkTasks,
        closedTasks
    };
},
    {
        persist: true
    }
);