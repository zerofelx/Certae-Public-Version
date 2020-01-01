var element = document.getElementById('LateralContent')
var cLC = document.getElementById('cLC')

var width = element.offsetWidth;
var space = (width/10);
var contenedor = document.getElementById('SpaceLC')
contenedor.style.setProperty('--espacio', space+"px")

var toggle = {
    AbrirLC() {
        element.style.setProperty('--traslado', '0,0')
        contenedor.style.setProperty('--LCursor', "initial")
        contenedor.style.setProperty('--espacio', element.offsetWidth+"px")
        element.removeEventListener('click', Abrir, false)
    },
    CerrarLC() {
        contenedor.style.setProperty('--LCursor', "pointer")
        contenedor.style.setProperty('--espacio', space+"px")
        element.style.setProperty('--traslado', '-90%,0')
        setTimeout(() => {
            element.addEventListener('click', Abrir, false)
        }, 200);
    }
}

var Abrir = toggle.AbrirLC

element.addEventListener('click', Abrir, false)
toggle.CerrarLC()

cLC.addEventListener('click', function Cerrar() {
    var valorP = element.style.getPropertyValue("--traslado")
    var valorP = String(valorP).trim();

    switch(valorP) {
        case "0,0":
            toggle.CerrarLC()
            break
        case "-90%,0":
            console.log("Error, ya está cerrado wtf?¿?¿")
            break
        default:
            break
    }
})

