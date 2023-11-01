var todos = [
    {
        text: 'Aprender HTML, CSS e Javascript',
        done: true
    },
    {
        text: 'Aprender o básico de Vue JS',
        done: true
    },
    {
        text: 'Completar o desafio de Vue JS com excelência',
        done: false
    }
];

const todosApp = {
    data() {
        return {
            toDos: window.todos
        };
    }
};

Vue.createApp(todosApp).mount('#app');