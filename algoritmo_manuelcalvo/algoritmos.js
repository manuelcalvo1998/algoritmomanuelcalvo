let díasFebrero = parseInt(prompt("ingrese un día entre el 1 y 28, ingrese 0 para detener el ciclo"));

while (díasFebrero !=0) {
    if (díasFebrero >=1 || díasFebrero <=28) 
    for (let i=1; i<=díasFebrero; i++) {
        console.log(i + "se repite")
        if (díasFebrero !=0) {
            alert("el día es:" + díasFebrero + "esta dentro del rango de días solicitados, el día se repetira las veces que se le indique");
            alert(i + "se repite")
        }
    }else {
        alert ("día incorrecto, para detener ejecucion del ciclo ingrese 0");
    }
    díasFebrero = parseInt(prompt("intentelo nuevamente, ingrese un día entre el 1 y 28, ingrece 0 para detener el ciclo"));
    
    alert(díasFebrero + "ingreso 0, se detuvo el ciclo")
} 

