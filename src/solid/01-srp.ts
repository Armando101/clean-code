(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    getProduct(id: number) {
      console.log("Producto: ", { id });
    }

    saveProduct(product: Product) {
      console.log("Guardado en base de datos ", product);
    }
  }

  class Mailer {
    private masterEmail: string = "armando@google.com";
    sendEmail(emailList: string[], template: "to-clientes" | "to-admins") {
      console.log("Enviando correo a los clientes", template);
      console.log(emailList);
    }
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
    constructor(
      private productService: ProductService,
      private mailer: Mailer
    ) {}

    loadProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      console.log("Producto: ", { id, name: "OLED Tv" });
    }

    saveProduct(product: Product) {
      this.productService.saveProduct(product);
    }

    notifyClients() {
      this.mailer.sendEmail([], "to-admins");
    }
  }

  class CartBloc {
    private items: Object[] = [];

    onAddToCart(productId: number) {
      // Agregar al carrito de compras
      console.log("Agregando al carrito ", productId);
    }
  }

  const newCartBloc = new CartBloc();
  const newProductService = new ProductService();
  const newMailer = new Mailer();
  const productBloc = new ProductBloc(newProductService, newMailer);

  productBloc.loadProduct(10);
  newProductService.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  newCartBloc.onAddToCart(10);
})();
