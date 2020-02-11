Vue.component('hijo', {
    template: 
    `
    <div class="py-5 bg-success">
        <h4>Componente hijo</h4>
        <h5>{{numero}}</h5>
        <h4>Nombre: {{nombre}}</h4>
    </div>
    `,
    props: ['numero'],
    data() {
        return {
            nombre: 'Pablo'
        }
    },
    mounted() {
        this.$emit('nombreHijo', this.nombre);
    },
})