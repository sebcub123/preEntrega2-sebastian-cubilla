let nombreUsuario = prompt("¿Cuál es tu nombre?").toLowerCase();

alert("Hola " + nombreUsuario + " Bienvenido");
alert(`${nombreUsuario}, en el siguiente listado  vas a ver los productos que tenemos disponibles. 
Por favor ingresa el numero del producto que queres adquirir`);
  
// creamos catalogo de productos
let catalogo = [
  {
    nombre: "Protector Yilho",
    precio: 1156,
  },
  {
    nombre: "Acondicionador keratina",
    precio: 595,
  },
  {
    nombre: "Guantes nitrilo",
    precio: 50,
  },
  {
    nombre: "Crema Mav",
    precio: 986,
  },
  {
    nombre: "Ionizado nov",
    precio: 663,
  },
  {
    nombre: "Crema multi",
    precio: 765,
  },
  {
    nombre: "Crema peinar argan",
    precio: 833,
  },
  {
    nombre: "serum bekim",
    precio: 1411,
  },
  {
    nombre: "Crema peinar rbx",
    precio: 544,
  }, 
];


// carrito vacio
let carrito = [];


// recorrido y vista de catalogo
const verCatalogo = () => {
  let productos = "";
  for (let i = 0; i < catalogo.length; i++) {
    productos += `${i} - ${catalogo[i].nombre} - $${catalogo[i].precio} \n`;
  }
  return productos;
};
let productoElegido = prompt(verCatalogo());


//añadir productos al carrito 
carrito.push(catalogo[productoElegido]);
console.log(carrito);

alert(`${nombreUsuario}, agregaste ${catalogo[productoElegido].nombre} por un valor de: $${catalogo[productoElegido].precio}`);

let compraOtroProducto = prompt("¿Queres comprar otro producto? Escribi si o no");


//volver a mostrar el catalogo para elegir otro producto, si no, se muestran los productos y valor total 
const comprarOtroProducto = () => {
  if (compraOtroProducto == "si") {
    productoElegido = prompt(verCatalogo());
    carrito.push(catalogo[productoElegido]);
    console.log(carrito);
    alert(`${nombreUsuario}, agregaste ${catalogo[productoElegido].nombre} por un valor de: $${catalogo[productoElegido].precio}`);
    compraOtroProducto = prompt("¿Deseas comprar otro producto? Responda si o no");
    comprarOtroProducto();
  } else { 
    const mostrarCarrito = () => { 
      let subTotal = `${nombreUsuario}, compraste satisfactoriamente: \n`;
      carrito.forEach((producto) => {
        subTotal += `${producto.nombre} - $${producto.precio} \n`;
      });
      const total = carrito.reduce((acc, item) => acc + item.precio, 0);
      ""
      subTotal += `EL TOTAL A PAGAR ES: $${total}`;
      return subTotal;
    };
    alert(mostrarCarrito());
  }
};
comprarOtroProducto();