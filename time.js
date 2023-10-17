function datum(){
  let datum = new Date()
  let den = datum.getDate()
  let mesic = datum.getMonth()+1
  let rok = datum.getFullYear()
  let x = datum.getDay()
  let dny = ["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"]
  let time ="Dnes je " + dny[x]+" " +den+". "+mesic  +". "+rok
  //document.write(den+". "+mesic  +". "+rok)
  document.getElementById("datum").innerText=time
}
datum()

function hodiny(){
   let cas = new Date()
   let hodina = cas.getHours()
   let minuta = cas.getMinutes()
   let sekunda = cas.getSeconds()
   if (minuta<10)
       minuta = "0"+minuta
   if (sekunda<10)
       sekunda = "0"+sekunda   
   let time2 = "Je právě "+ hodina+":"+minuta+":"+sekunda
   document.getElementById("cas").innerText=time2
   setTimeout(hodiny) 
    }
hodiny()  

let date = new Date()
let dnes = date.getTime()
let vanoce = new Date(2023,11,24)
let x = vanoce.getTime()
let zbyva= Math.floor((vanoce - dnes)/86400000)
document.getElementById("vanoce").innerText="Do Štědrého dne zbývá "+ zbyva+" dní" 
