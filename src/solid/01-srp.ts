(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService {
        getProduct (id : number){
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct (product: Product){
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }
    }

    class MailService {
      private email: string = 'pepe@google.com';

      sendEmail( emailList: string[], template : 'to_clients' | 'to_admins'){
          console.log('Enviando correo a los clientes');
      }
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService : ProductService;
        private mailer : MailService;

        constructor (productService : ProductService, mailer : MailService){
            this.productService = productService;
            this.mailer = mailer;
        }

        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            this.productService.getProduct(id);
        }

        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            this.productService.saveProduct(product);
        }
    
        notifyClients() {
            this.mailer.sendEmail(['pepe@gmail.com'], 'to_clients');
        }
    
    }

    

    class CartBloc {
        private items : Object[] = [];

        addToCart(productId : number){
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }
    

    const productService = new ProductService();
    const mailer = new MailService();

    const productBloc = new ProductBloc( productService, mailer );
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.addToCart(10);
})();