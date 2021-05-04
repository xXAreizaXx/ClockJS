const Horario = document.querySelector('.horario');
const Minutero = document.querySelector('.minutero');
const Segundero = document.querySelector('.segundero');

function setDate() {
    const Fecha = new Date();

    const Horas = Fecha.getHours();
    const hGrados = ((Horas /12) * 360) + 90;
    Horario.style.transform = `rotate(${hGrados}deg)`;

    const Minutos = Fecha.getMinutes();
    const mGrados = ((Minutos /60) * 360) + 90;
    Minutero.style.transform = `rotate(${mGrados}deg)`;
    
    const Segundos = Fecha.getSeconds();
    const sGrados = ((Segundos /60) * 360) + 90;
    Segundero.style.transform = `rotate(${sGrados}deg)`;    
}

setInterval(() => {
   setDate() 
}, 1000);