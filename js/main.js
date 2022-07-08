function crearUsuario(nombre,email,edad,sexo,domicilio,barrio){
    const usuario = new NuevoUsuario (nombre,email,edad,sexo,domicilio,barrio);
    return usuario;
}

function cargarUsuario(usuario){
    usuarios.push(usuario);
}

const usuarios = [{nombre:"Juan Gonzalez",email:"juangonzales@hotmail.com",edad:29,sexo:"Masculino",domicilio: "juramento 2000",barrio: "Belgrano"},
{nombre:"Tomas Aparicio",email:"tomas.aparicio@gmail.com.ar",edad:21,sexo:"Masculino",domicilio: "Fray Luis Beltran 1050",barrio: "San Isidro"},
{nombre:"Lourdes James",email:"ljames@gmail.com",edad:25,sexo:"Femenino",domicilio: "libertador 1456",barrio: "Palermo"},
{nombre:"Manuela Simer",email:"simer-manuela@hotmail.com",edad:27,sexo:"Femenino",domicilio: "Uruguay 123",barrio: "San Isidro"},
{nombre:"Martin Gomez",email:"martagomez@hotmail.com",edad:32,sexo:"Masculino",domicilio: "25 de mayo 1456",barrio: "Microcentro"},
];



class NuevoUsuario{
    constructor(nombre,email,edad,sexo,domicilio,barrio){
        this.nombre = nombre;
        this.email = email;
        this.edad = parseInt(edad);
        this.sexo = sexo;
        this.domicilio = domicilio;
        this.barrio = barrio;
    }
}

let ingreso=prompt("Presione Aceptar si quiere subscribirse o escriba ESC para salir")

if (ingreso != "ESC") {
    let nombre = prompt("Ingrese su nombre y apellido");
    let email = prompt("Ingrese su email");
    let edad = prompt("Ingrese su edad");
    let sexo=prompt("Ingrese Masculino o Femenino segun su sexo");
    let domicilio = prompt("Ingrese su domicilio");
    let barrio = prompt("Ingrese su codigo barrio");

    cargarUsuario(crearUsuario(nombre,email,edad,sexo,domicilio,barrio));
    console.log(usuarios);
}





let precioRemera = 4500;
let precioBuzo = 9500;
let precioPerlas = 16500;

function precioFinal(precio,cuotas){
    let resultado = precio + (precio * (0.05 * cuotas));
    return resultado.toFixed(2);
}

function pagoMensual(precio,cuotas){
    let resultado2 = precio / cuotas;
    return resultado2.toFixed(2);
}

let cuotas = "0";
let compraFinalizada = false;


while (compraFinalizada == false) {
    let seleccion = prompt("Seleccione un producto:\n 1)Remera Activa Studio \n 2)Buzo Activa Studio \n 3)Perlas Activa Studio \n 4)Salir");


    switch (seleccion) {

    case "1":
        alert("El precio de la remera es: $" + precioRemera);
        cuotas = prompt("¿En cuántas cuotas quiere pagarlo? \n 0, 3, 6, 12, 18 o 24 \n Le informamos que cada cuota tiene un interes del 5 por ciento extra sobre el total");
        
        switch (cuotas) {
            case "0":
                alert("El precio final que va a pagar será: " + precioFinal(precioRemera,cuotas));
                alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(precioRemera,cuotas),cuotas));
                compraFinalizada = true;
                break;

            case "3":
                alert("El precio final que va a pagar será: " + precioFinal(precioRemera,cuotas));
                alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(precioRemera,cuotas),cuotas));
                compraFinalizada = true;
                break;

            case "6":
                alert("El precio final que va a pagar será:" + precioFinal(precioRemera,cuotas));
                alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(precioRemera,cuotas),cuotas));
                compraFinalizada = true;
                break;

            case "12":
                alert("El precio final que va a pagar será:" + precioFinal(precioRemera,cuotas));
                alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(precioRemera,cuotas),cuotas));
                compraFinalizada = true;
                break;

            case "18":
                alert("El precio final que va a pagar será: " + precioFinal(precioRemera,cuotas));
                alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(precioRemera,cuotas),cuotas));
                compraFinalizada = true;
                break;

            case "24":   
                alert("El precio final que va a pagar será:" + precioFinal(precioRemera,cuotas));
                alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(precioRemera,cuotas),cuotas));
                compraFinalizada = true;
            break;

            default:
                
                break;
        }

        break;
    case "2":
        alert("El precio del buzo es: $" + precioBuzo);
        cuotas = prompt("¿En cuántas cuotas quiere pagarlo? \n 0, 3, 6, 12, 18 o 24 \n Le informamos que cada cuota tiene un interes del 5 por ciento extra sobre el total");
        
        switch (cuotas) {
            case "0":
                alert("El precio final que va a pagar será: " + precioFinal(precioBuzo,cuotas));
                alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(precioBuzo,cuotas),cuotas));
                
                break;

            case "3":
                alert("El precio final que va a pagar será: " + precioFinal(precioBuzo,cuotas));
                alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(precioBuzo,cuotas),cuotas));
                
                break;

            case "6":
                alert("El precio final que va a pagar será:" + precioFinal(precioBuzo,cuotas));
                alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(precioBuzo,cuotas),cuotas));
                
                break;

            case "12":
                alert("El precio final que va a pagar será:" + precioFinal(precioBuzo,cuotas));
                alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(precioBuzo,cuotas),cuotas));
                
                break;

            case "18":
                alert("El precio final que va a pagar será: " + precioFinal(precioBuzo,cuotas));
                alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(precioBuzo,cuotas),cuotas));
                
                break;

            case "24":   
                alert("El precio final que va a pagar será:" + precioFinal(precioBuzo,cuotas));
                alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(precioBuzo,cuotas),cuotas));
            break;

            default:
                
                break;
        }
        
        break;
    case "3":
        alert("El precio de las perlas es: $" + precioPerlas);
        cuotas = prompt("¿En cuántas cuotas quiere pagarlo? \n 0, 3, 6, 12, 18 o 24 \n Le informamos que cada cuota tiene un interes del 5 por ciento extra sobre el total");
        
        switch (cuotas) {
            case "0":
                alert("El precio final que va a pagar será: " + precioFinal(precioPerlas,cuotas));
                alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(precioPerlas,cuotas),cuotas));
                
                break;

            case "3":
                alert("El precio final que va a pagar será: " + precioFinal(precioPerlas,cuotas));
                alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(precioPerlas,cuotas),cuotas));
                
                break;

            case "6":
                alert("El precio final que va a pagar será:" + precioFinal(precioPerlas,cuotas));
                alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(precioPerlas,cuotas),cuotas));
                
                break;

            case "12":
                alert("El precio final que va a pagar será:" + precioFinal(precioPerlas,cuotas));
                alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(precioPerlas,cuotas),cuotas));
                
                break;

            case "18":
                alert("El precio final que va a pagar será: " + precioFinal(precioPerlas,cuotas));
                alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(precioPerlas,cuotas),cuotas));
                
                break;

            case "24":   
                alert("El precio final que va a pagar será:" + precioFinal(precioPerlas,cuotas));
                alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(precioPerlas,cuotas),cuotas));
            break;

            default:
                
                break;
        }
        break;
    case "4":
        alert("¡Que tenga un buen día!");
        break;

    default:
        alert("Caracter ingresado no es válido. Solamente los caracteres 1, 2, 3 y 4 son aceptados.")
        seleccion = prompt("Seleccione un producto:\n 1)Remera Activa Studio \n 2)Buzo Activa Studio \n 3)Perlas Activa Studio \n 4)Salir");

        break;
}

}















