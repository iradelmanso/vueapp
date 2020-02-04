const app = new Vue({
    el: '#app',
    data: {
        titulo: 'GYM con vue',
        tareas: [],
        nuevaTarea: ''
    },
    methods: {
        addTarea() {
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });

            this.nuevaTarea = '';            
        },

        editTarea(index) {
            this.tareas[index].estado = true;

        }

        
        
    },
});