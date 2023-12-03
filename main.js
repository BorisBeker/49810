let pedido = parseInt(prompt("Especifíque su pedido: \n 1 = Página Web \n 2 = Mantenimiento \n 3 = Contratación"));
let precioBase = 500;

function calcularPrecio(parametro){
    if(parametro === 2){
        return precioBase / 5;
    } else if(parametro === 3){
        return precioBase * 3;
    }
}

if(pedido === 1){
    alert("Usted eligió: Página Web.")
    alert("Su pedido vale $" + precioBase + ".")
}else if(pedido === 2){
    alert("Usted eligió: Mantenimiento.")
    alert("Su pedido vale $" + calcularPrecio(pedido) + ".")
}else if(pedido === 3){
    alert("Usted eligió: Contratación.")
    alert("El valor de la contratación es $" + calcularPrecio(pedido) + " al mes.")
    let equipo = parseInt(prompt("Especifíque el número de integrantes de su equipo."));
    for(i = 1; i <= equipo; i++){
        let nombre = prompt("Diga el nombre del integrante " + i)
        alert("Saludos a " + nombre + ".\nSerá un placer trabajar con usted.")
    }
}else {
    alert("No eligió ningún pedido.")
}