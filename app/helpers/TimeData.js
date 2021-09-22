const TimeData = ()=>{

    const Months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    let dateObj = new Date()
    let Days = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]
    let month = Months[dateObj.getMonth()]
    let day = Days[dateObj.getDay()]
    let dayDate = dateObj.getDate()
    let year = dateObj.getFullYear()
    let horas = dateObj.getHours()
    let minutes = dateObj.getMinutes()
    let segundos = dateObj.getSeconds()
    let Hora = `${horas}:${minutes}:${segundos}`
    let FechaDeRegistro = `${day}, ${dayDate} de ${month} de ${year}` 
    let mesActual = month
    let mesPenultimo = Months[dateObj.getMonth()-1]
    let mesAntePenultimo = Months[dateObj.getMonth()-2]

    return {Hora,FechaDeRegistro,mesActual,mesPenultimo,mesAntePenultimo}
}

export {TimeData}