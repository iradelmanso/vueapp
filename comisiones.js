

const app = new Vue({    
    
    el: '#app',
    data: {
        office: '',
        businessUnit: '',
        startDate: '',
        endDate: '',
        comisiones: [],
    },
    dataInfo () {
        return {
            info: null
        }
    },
    methods: {
        search() {
            axios
                .get('https://fef68b27-b097-4537-8664-8e8e98d398f4.mock.pstmn.io/configuration/search?office=ALC&businessUnit=0&businessUnit=1')
                .then(response => (this.comisiones = response))

            
                
                
        }
    },

})