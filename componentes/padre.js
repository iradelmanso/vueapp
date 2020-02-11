Vue.component('padre', {
    template:
    `
    <div class="p-5 bg-dark text-white">
        <h2>Componente Padre: {{numeroPadre}}</h2>
        {{nombrePadre}}
        <hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event"></hijo>
    </div>
    `,
    data() {
        return {
            numeroPadre: 3,
            nombrePadre: ''
        }
    }
})