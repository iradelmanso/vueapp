const app = new Vue({
    el: '#app',
    data: {
        title: 'Nico CAM',
        action: '',
        resp: ''
        
    },
    methods: {
        rotateLeft() {
            this.action = 'Rotating left...';

            /*axios({
                method: 'post',
                url: '/cam',
                baseURL: 'http://localhost:8080/nicocam/api/',
                headers: {'X-Requested-With': 'XMLHttpRequest'},
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST'
                  },
                data: {
                    orientation: 0,
                    angle: 0
                }
              });*/
          
            axios
               .post('http://localhost:8080/nicocam/api/cam', {
                orientation: 0,
                angle: 0
                })
               .then(response => this.resp = response.data)
               .catch(error => console.log(error))
        },

        rotateRight() {
            this.action = 'Rotating right...';
                axios
               .post('http://192.168.1.73:8083/nicocam/api/cam', {
                orientation: 1,
                angle: 0
                })
               .then(response => this.resp = response.data)
               .catch(error => console.log(error))
        }
    }

})