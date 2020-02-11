Vue.component('saludo', {
    // IMPORTANTE: CUANDO USAMOS TEMPLATES TODO DEBE ESTAR ENVUELTO EN UN CONTENEDOR <div>
    template: `
    <div>
        <h1>{{saludo}}</h1>
        <h3>ASSFGAFGAFG</h3>
    </div>
    `,
    data() {
        return {
            saludo: 'Holas'
        }
    }
})    
