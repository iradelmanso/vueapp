
const app = new Vue({        
    el: '#app',
    data: {
        id : '',
        office: '',
        businessUnit: '',
        startDate: '',
        endDate: '',
        comisiones: [],
    },    
    methods: {
        caca() {
            // console.log('caca');
            axios
               .get('https://fef68b27-b097-4537-8664-8e8e98d398f4.mock.pstmn.io/configuration/search?office=ALC&businessUnit=0&businessUnit=1')
               .then(response => this.comisiones = response.data)
               .catch(error => console.log(error))
                    
                    //(this.comisiones = response))

            
                
                
        }
    },

})