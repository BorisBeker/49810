/* let pedido = parseInt(prompt("Especifíque su pedido: \n 1 = Página Web \n 2 = Mantenimiento \n 3 = Contratación"));
let precioBase = 500;

function calcularPrecio(parametro) {
    if (parametro === 2) {
        return precioBase / 5;
    } else if (parametro === 3) {
        return precioBase * 3;
    }
}

if (pedido === 1) {
    alert("Usted eligió: Página Web.")
    alert("Su pedido vale $" + precioBase + ".")
} else if (pedido === 2) {
    alert("Usted eligió: Mantenimiento.")
    alert("Su pedido vale $" + calcularPrecio(pedido) + ".")
} else if (pedido === 3) {
    alert("Usted eligió: Contratación.")
    alert("El valor de la contratación es $" + calcularPrecio(pedido) + " al mes.")
    let equipo = parseInt(prompt("Especifíque el número de integrantes de su equipo."));
    for (i = 1; i <= equipo; i++) {
        let nombre = prompt("Diga el nombre del integrante " + i)
        alert("Saludos a " + nombre + ".\nSerá un placer trabajar con usted.")
    }
} else {
    alert("No eligió ningún pedido.")
}
*/

const cliente = {
    nombre: "",
    empresa: "",
    ciudad: "",
    requisitos: [],
    presupuesto: 0
};

function obtenerInformacionCliente() {
    cliente.nombre = prompt("Ingrese su nombre:");
    cliente.empresa = prompt("Ingrese el nombre de su empresa:");
    cliente.ciudad = prompt("Ingrese su ciudad:");
    const requisitos = prompt("Ingrese los requisitos para el proyecto separados por comas (ej. Desarrollo web, Backend, Base de datos):");
    cliente.requisitos = requisitos.split(",").map(req => req.trim());
    const presupuesto = prompt("Ingrese su presupuesto para el proyecto:");
    cliente.presupuesto = parseFloat(presupuesto);
    alert("Gracias, " + cliente.nombre + ". Su información ha sido registrada.");
}

obtenerInformacionCliente();

alert("Información del cliente:\nNombre: " + cliente.nombre + "\nEmpresa: " + cliente.empresa + "\nCiudad: " + cliente.ciudad + "\nRequisitos: " + cliente.requisitos.join(", ") + "\nPresupuesto: $" + cliente.presupuesto.toFixed(2));