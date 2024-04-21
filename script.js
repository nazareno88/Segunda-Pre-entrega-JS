let zapatillas = [
    {id:18, nombre:"Dunk Low Panda", marcas:"Nike", stock:20, precio:209000},
    {id:23, nombre:"Suade XL", marcas:"Puma", stock:17, precio:160000},
    {id:45, nombre:"Campus", marcas:"Adidas", stock:32, precio:172000},
    {id:98, nombre:"Jordan Air 4 Retro", marcas:"Nike", stock:12, precio:360000},
    {id:71, nombre:"Adi 200", marcas:"Adidas", stock:18, precio:190000},
];

const listar = (lista, propiedad1, propiedad2) => lista.map(zapatilla=>zapatilla[propiedad1]+ " - " +zapatilla[propiedad2]).join("\n");



let carrito=[];
let escojaOpcion 
do { 
    escojaOpcion = Number(prompt("Ingrese 1 si quiere filtrar por marca, 2 si quiere buscar algun modelo especifico, 0 para salir"));

   if(escojaOpcion===1){
     filtrarMarca(zapatillas)
   }
   else if(escojaOpcion===2){
    agregarCarrito(zapatillas,carrito)
   }
   }
 while  (escojaOpcion!==0);

function filtrarMarca(zapatillas){
  let filtrarMarcas = prompt("Ingrese su marca favorita").toLowerCase()
  let filtrado= zapatillas.filter(zapatilla=>zapatilla.marcas.toLowerCase()===filtrarMarcas)
  let salida = filtrado.map(zapatilla => zapatilla.nombre).join ("\n")
  alert(salida)
}
    

let ordenar = Number(prompt("Ingrese 1 si quiere ordenar de menor a mayor, de lo contrario, ingrese 2. Para dejar todo igual, ingrese 0"))

function ordenarPrecio (lista, categoria, sentido){
   lista.sort((a,b)=>{
    if(sentido===1){
      if(a[categoria]>b[categoria]){
        return 1;
      }
     else if(a[categoria]<b[categoria]){
      return -1
     }
     else{
      return 0
     }
    }
    //-------------
    else if(sentido===2){
      if(a[categoria]<b[categoria]){
        return 1;
      }
      else if(a[categoria]>b[categoria]){
        return -1;
      }
      else{
        return 0
      }
    }
    //-------------
    else{
      return 0
    }
   })
   return zapatillas
}
      
ordenarPrecio(zapatillas,"precio", ordenar)

function metodoSalida(propiedad1,propiedad2){
  let salida = ""
  for (let i = 0; i< zapatillas.length; i++) {
  salida = salida+zapatillas[i][propiedad1]+ " - " +zapatillas[i][propiedad2] + "\n"
      }
      return salida
}

let propiedadDeSalida = metodoSalida("nombre","precio")

alert(propiedadDeSalida)


function agregarCarrito(zapatillas, carrito){
 let opcion
 do {
   opcion = Number(prompt("seleccione producto por id (0 para salir : \n" + listar(zapatillas,"id","nombre")));
   let zapatillaFiltrada = zapatillas.find(zapatilla=>zapatilla.id===opcion);
  let productoEnCarrito = carrito.findIndex(zapatilla=>zapatilla.id===opcion)

  if(zapatillaFiltrada){
    if(productoEnCarrito!==-1){
  carrito[productoEnCarrito].unidades++
  carrito[productoEnCarrito].subtotal = carrito[productoEnCarrito].precio*carrito[productoEnCarrito].unidades
} else{carrito.push({
  id:zapatillaFiltrada.id,
  nombre:zapatillaFiltrada.nombre,
  precio:zapatillaFiltrada.precio,
  unidades:1,
  subtotal:zapatillaFiltrada.precio})
  
  }
}
else{
  alert("Operacion Finalizada")
}
 } while (opcion!==0);
 
 let mensaje = "Carrito de compras:\n";
 carrito.forEach(zapatillaFiltrada => {
  mensaje += `ID: ${zapatillaFiltrada.id}, Nombre: ${zapatillaFiltrada.nombre}, Precio: ${zapatillaFiltrada.precio}, Unidades: ${zapatillaFiltrada.unidades}, Subtotal: ${zapatillaFiltrada.subtotal}\n`;
});
alert (mensaje)
}
