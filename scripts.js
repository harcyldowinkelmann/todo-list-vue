
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
                localStorage.setItem("ToDo's", JSON.stringify(this.toDos));
            } else {
                window.alert('Você precisa fornecer uma descrição para sua nova tarefa!');
            }
        },
        clearTodo: function() {
            this.toDos = []
        },
        storeTodos: function() {
            localStorage.setItem("ToDo's", JSON.stringify(this.toDos));
        }
    },
    created() {
        this.toDos = localStorage.getItem("ToDo's") ? JSON.parse(localStorage.getItem("ToDo's")) : this.toDos;
    }
};

Vue.createApp(todosApp).mount('#app');