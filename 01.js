const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Product Maintenance',
        productos: [
            {nombre: 'Pera', cantidad: 0},
            {nombre: 'Manzana', cantidad: 20},
            {nombre: 'Limon', cantidad: 30},

        ],
        nombreProducto: '',
        stockProducto: 0,
        totalStock: 0
    },
    methods: {
        addProducto() {
            this.productos.push({
                nombre: this.nombreProducto, cantidad: this.stockProducto
                
            })

            this.nombreProducto = '';
            this.stockProducto = 0;

        }
    },
    computed: { // los métodos listados aquí se ejecutan automáticamente
        sumStockProductos() {
            this.totalStock = 0;
            for(producto of this.productos) {
                this.totalStock = this.totalStock + producto.cantidad;
            }
            return this.totalStock;
        }
    },


})