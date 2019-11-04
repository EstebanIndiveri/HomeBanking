//Declaración de variables
var nombreUsuario = "Esteban Indiveri";
var saldoCuenta = 500;
var limiteExtraccion = 8000;
var deposito;
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;
var transferencia ="";
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;
var codigo = "";
var codigoSeguridad = 1234;
var cheque= " ";
var nuevaclave= "";

//funciones

var ingresaDinero = function(nro){
    return nro + saldoCuenta;
}

var retiraDinero = function(dinero){
    return saldoCuenta - dinero;
}

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar


//cambiamos el limite de extracción mediante un pedido al usuario, el nuevo limite es actualizado en la página.
function cambiarLimiteDeExtraccion() {
    var nuevoLimite = prompt("Ingresar nuevo limite de extracción");
    if(parseInt(nuevoLimite)<0 || nuevoLimite=="" || nuevoLimite==null){
        alert("Error, ingrese numeros positivos")
    }else if (isNaN(nuevoLimite)) {
        alert("Por favor, ingrese numeros solamente");
        return 'Not a Number!';
    } else{
        parseInt(nuevoLimite);
    limiteExtraccion=nuevoLimite
    alert("Su nuevo limite de extracción es: "+ nuevoLimite);
    actualizarLimiteEnPantalla();
    }
}

//Se deposita un monto en la saldoCuenta y el mismo se refleja en la pantalla.
function DepositarCheque(cheque) {
    cheque=prompt("Ingrese La entidad bancaria del cheque: \n1- Banco Santander Rio \n2- Banco Galicia \n3- Banco de Córdoba \n4- Banco Macro");
    if(parseInt(cheque)<=0 || cheque=="" || cheque==null){
        alert("Error solo numeros positivos")   
}else{
       var $cheque=prompt("Ingrese el monto del cheque");
        } if(parseInt($cheque)<=0 || $cheque=="" || $cheque==null){
            alert("Error solo numeros positivos")
        }else{
            var nroCheque=prompt("Ingrese el numero del cheque");
        }if(parseInt(nroCheque)<=0 || nroCheque=="" || nroCheque==null){
            alert("Error solo numeros positivos")
        }else{
            switch (parseInt(cheque)) {
                case 1:
                    var nuevoSaldo = saldoCuenta + parseInt($cheque);
            saldoCuenta = nuevoSaldo
            alert("Su cheque ha sido depositado por el monto de: $" + $cheque + "\nEntidad Bancaria: "+ "Banco Santander Rio"+ "\nNumero de cheque: "+ nroCheque+"\nSu saldo actual es: $" + nuevoSaldo);
            break;
                case 2:
                        var nuevoSaldo = saldoCuenta + parseInt($cheque);
                        saldoCuenta = nuevoSaldo
                        alert("Su cheque ha sido depositado por el monto de: $" + $cheque + "\nEntidad Bancaria: "+ "Banco Galicia"+ "\nNumero de cheque: "+ nroCheque+"\nSu saldo actual es: $" + nuevoSaldo);
                    break;
                case 3:
                        var nuevoSaldo = saldoCuenta + parseInt($cheque);
            saldoCuenta = nuevoSaldo
            alert("Su cheque ha sido depositado por el monto de: $" + $cheque + "\nEntidad Bancaria: "+ "Banco de Córdoba"+ "\nNumero de cheque: "+ nroCheque+"\nSu saldo actual es: $" + nuevoSaldo);
                    break;
                case 4:
                        var nuevoSaldo = saldoCuenta + parseInt($cheque);
                        saldoCuenta = nuevoSaldo
                        alert("Su cheque ha sido depositado por el monto de: $" + $cheque + "\nEntidad Bancaria: "+ "Banco Macro"+ "\nNumero de cheque: "+ nroCheque+"\nSu saldo actual es: $" + nuevoSaldo);
                default:
                        alert("no existe el servicio que se ha seleccionado");
                    }
        actualizarSaldoEnPantalla();
            };
                    
            };
        /*parseInt(cheque);
    var entidad = prompt("ingrese la entidad Bancaria");
    var numeroCheque = prompt("Ingrese el numero de cheque");
    
    var nuevoSaldo = saldoCuenta + parseInt(cheque);
    saldoCuenta = nuevoSaldo
    alert("Su cheque ha sido depositado por el monto de: $" + cheque + "\nEntidad Bancaria: "+ entidad+ "\nNumero de cheque: "+ numeroCheque+"\nSu saldo actual es: $" + nuevoSaldo);
    }
actualizarSaldoEnPantalla();
}*/

//Pedimos una nueva clave, pide nuevamente login, de ser incorrecta la clave se vuelve a 0 saldoCuenta.
function cambioClave(nuevaclave){
    nuevaclave=prompt("Ingrese su nueva clave");

    if(parseInt(nuevaclave)<=0 || nuevaclave=="" || nuevaclave==null){
        alert("Error solo numeros positivos");
    }else if(isNaN(nuevaclave)){
        alert("Por favor, ingrese numeros solamente");
        return 'Not a Number!';
    }else{
        parseInt(nuevaclave);
        codigoSeguridad = nuevaclave;
alert("Cambio de contraseña exitoso, su nueva clave es: " + nuevaclave);
iniciarSesion(nuevaclave);
}
    
    actualizarSaldoEnPantalla();
}


/*Extraemos dinero del cajero, en caso de que la suma supere el saldo disponible larga una alerta, al igual que si la extracción supera 
limite permitido */
function extraerDinero() {
        var extraccion = prompt("¿Cuánto dinero desea extraer?");
        var saldoAnterior=saldoCuenta
        var saldoResta = saldoCuenta - extraccion;
        if(parseInt(extraccion)<=0 || extraccion=="" || extraccion == null){
            alert("Error ingrese numeros positivos");
        }
        else if (isNaN(extraccion)) {
            alert("Por favor, ingrese numeros solamente");
            return 'Not a Number!';
        } 
        else if (extraccion > saldoCuenta) {
          alert(
            "No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.");
        }else if (extraccion > limiteExtraccion) {
          alert("La cantidad a extraer supera el limite de extraccion permitida.");
        } else if (extraccion % 100 != 0) {
          alert("Solo es posible extraer billetes de $100.");
        } else {
            saldoCuenta = saldoResta
            alert("Has retirado: $" + extraccion +"\nSaldo Anterior: $" + saldoAnterior + "\nSaldoActual: $" + saldoResta);
            actualizarSaldoEnPantalla();
            retiraDinero(extraccion);
            
        }
}

//deposita dinero y otorga el Saldo anterior, el monto a depositar y el Nuevo saldo
function depositarDinero(deposito) {

    deposito = prompt("ingrese la cantidad de dinero que desea depositar.");
    
    if(parseInt(deposito)<=0 || deposito=="" || deposito == null){
        alert("Error ingrese numeros positivos");
    }
    else if (isNaN(deposito)) {
        alert("Por favor, ingrese numeros solamente");
        return 'Not a Number!';
    }
    
    else{
    var saldoAnterior = saldoCuenta
    parseInt(saldoCuenta);
    var saldoSuma = saldoCuenta + parseInt(deposito);
    saldoCuenta = saldoSuma
    alert("Has depositado: $" + parseInt(deposito) +  "\nSaldo Anterior: $" + saldoAnterior  + "\nSaldo Actual: $" + saldoSuma);
    actualizarSaldoEnPantalla();
    ingresaDinero(deposito);
    }
}

/* Funcion que paga servicios, enumerados en un switch (4). Si el Pago es mayor al saldo presenta alerta "No hay saldo suficiente" 
caso contrario descuenta el servicio de saldoCuenta, detallando saldo anterior, precio del servicio y saldo actual.
*/
function pagarServicio() {
var pago = prompt("Ingrese el número que corresponda con el servicio que quiere pagar: \n1- Agua \n2- Luz \n3- Internet \n4- Teléfono");
if (isNaN(pago)) {
    alert("Por favor, ingrese numeros solamente");
    return 'Not a Number!';
}else{
    
    switch((parseInt(pago))){
    case 1:
        if(pago>saldoCuenta|| saldoCuenta<210){
            alert("No hay saldo suficiente en tu cuenta paga pagar este servicio");
            return
        }else if (pago<saldoCuenta){
        saldoAnterior = saldoCuenta
        saldoCuenta = saldoCuenta - agua;
        alert("Has pagado el servicio de: Agua." + "\nSaldo anterior: $" + saldoAnterior+ "\nDinero descontado: $" + agua + "\nSaldo actual: $" + saldoCuenta);
     break; 
    }case 2:
            if(pago>saldoCuenta || saldoCuenta<210){
                alert("No hay saldo suficiente en tu cuenta paga pagar este servicio");
                return
            }else if (pago<saldoCuenta){
            saldoAnterior = saldoCuenta
            saldoCuenta = saldoCuenta - luz;
            alert("Has pagado el servicio de: Luz." + "\nSaldo anterior: $" + saldoAnterior+ "\nDinero descontado: $" + luz + "\nSaldo actual: $" + saldoCuenta);
        break;
    }case 3:
            if(pago>saldoCuenta || saldoCuenta<210){
                alert("No hay saldo suficiente en tu cuenta paga pagar este servicio");
                return
            }else if (pago<saldoCuenta){
            saldoAnterior = saldoCuenta
            saldoCuenta = saldoCuenta - internet;
            alert("Has pagado el servicio de: Internet." + "\nSaldo anterior: $" + saldoAnterior+ "\nDinero descontado: $" + internet + "\nSaldo actual: $" + saldoCuenta);
        break;
    }case 4:
            if(pago>saldoCuenta || saldoCuenta<210){
                alert("No hay saldo suficiente en tu cuenta paga pagar este servicio");
                return
            }else if (pago<saldoCuenta){
            saldoAnterior = saldoCuenta
            saldoCuenta = saldoCuenta - telefono;
            alert("Has pagado el servicio de Teléfono." + "\nSaldo anterior: $" + saldoAnterior+ "\nDinero descontado: $" + telefono + "\nSaldo actual: $" + saldoCuenta);
        break;
    }default:
        alert("no existe el servicio que se ha seleccionado");
            }
actualizarSaldoEnPantalla();
    }
}

//Tranfiere dinero desde saldoCuenta a otra cuenta bancaria.
function transferirDinero(transferencia) {
    transferencia = prompt("Ingrese el monto a transferir");
    if (isNaN(transferencia)) {
        alert("Por favor, ingrese numeros solamente");
        return 'Not a Number!';
    } 
    if(parseInt(transferencia)<=0){
        alert("Error ingrese numeros positivos");
    }
    else{
    if(parseInt(transferencia)>saldoCuenta){
        alert("No puede transferirse esa cantidad de dinero");
        }else if(parseInt(transferencia)<saldoCuenta){
        var cuentaDestino = parseInt(prompt("ingrese el numero de la cuenta a la que desea transferir dinero"));
        }if (cuentaDestino==cuentaAmiga1 || cuentaDestino==cuentaAmiga2){
            saldoCuenta = saldoCuenta - transferencia;
            alert("Se han transferido: $" + transferencia + "\nCuenta destino: " + cuentaDestino);
        }else{
            alert("Solo puede transferirse dinero a una cuenta amiga.")
        }

    }
   actualizarSaldoEnPantalla();
}

function iniciarSesion(codigo) {
    codigo = (prompt("Ingrese su codigo de seguridad"));
    if(codigo == codigoSeguridad){
        alert("Bienvenido/a " + nombreUsuario + " ya puedes comenzar a realizar operaciones");
        return codigo;
    }else{
        saldoCuenta = 0
        alert("Codigo incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad.")
    }
}
iniciarSesion();

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}