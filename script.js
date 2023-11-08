//inicio-menu//

//fim-menu//
//inicio-letreiro//
function aberto(span) {
    span.style.display = "block";
}

function fechado(span) {
    span.style.display = "block";
}
const now = new Date();
const abertoSpan = document.getElementById("aberto");
const fechadoSpan = document.getElementById("fechado");

if (now.getDay() >= 2 && now.getDay() <= 5) {
    if (now.getHours() >= 9 && now.getHours() < 18) {
        aberto(abertoSpan);
    } else {
        fechado(fechadoSpan);
    }
} else if (now.getDay() === 6) {
    if (now.getHours() >= 8 && now.getHours() < 17) {
        aberto(abertoSpan);
    } else {
        fechado(fechadoSpan);
    }
} else {
    fechado(fechadoSpan);
}
//fim-letreiro//