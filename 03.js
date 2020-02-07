const app = new Vue({
    el: '#app',
    data: {
        mensaje: 'hola'

    },
    computed: {
        invertido() {
            return this.mensaje.split('').reverse().join('');
        }
    }
})