
const todosApp = {
    data() {
        return {
            toDos: [],
            newTodo: {
                done: false
            }
        };
    },
    methods: {
        addTodo: function() {
            if(this.newTodo.text) {
                this.toDos.push(this.newTodo);
                this.newTodo = { done: false };
            } else {
                window.alert('Você precisa fornecer uma descrição para sua nova tarefa!');
            }
        },
        clearTodo: function() {
            this.toDos = []
        }
    },
};

Vue.createApp(todosApp).mount('#app');