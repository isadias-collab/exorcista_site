function abrirArquivo(){

document.getElementById("acesso").style.display="none"
document.getElementById("conteudo").style.display="block"

iniciarDiario()
iniciarTransformacao()

}

function iniciarDiario(){

const texto=`

Dia 1 - A mãe insiste que é possessão.
Dia 3 - Rezei durante horas. Nada.
Dia 5 - Ela mencionou pecados que nunca confessei.
Dia 7 - Se Deus está aqui, por que não responde?
Dia 9 - Talvez o mal fale mais alto que a fé.

`

let i=0

function digitar(){

if(i<texto.length){

document.getElementById("diario").innerHTML+=texto.charAt(i)

i++

setTimeout(digitar,40)

}

}

digitar()

}

function iniciarTransformacao(){

// 60s - transformação
setTimeout(()=>{

document.getElementById("misterio").innerText="Não é doença."

document.body.classList.add("possuido")

// corromper salmo
setTimeout(()=>{

document.getElementById("salmo").innerText="mal algum."

},15000)

},10000)


// 75s - imagem piscando
setTimeout(()=>{

const img = document.createElement("img")

img.src = "face.png"

img.style.position = "fixed"
img.style.top = "0"
img.style.left = "0"
img.style.width = "100%"
img.style.height = "100%"
img.style.objectFit = "cover"
img.style.zIndex = "9999"
img.style.opacity = "0"
img.style.pointerEvents = "none"

document.body.appendChild(img)

setTimeout(()=>{

img.style.opacity = "1"

setTimeout(()=>{

img.style.opacity = "0"

},200)

},100)

},10000)

// 80s - som macabro
setTimeout(()=>{

let audio=new Audio("sussurro.mp3")

audio.volume=0.3

audio.play()

},80000)


// 90s - mensagem final
setTimeout(()=>{

const aviso=document.createElement("p")

aviso.innerText="Ele ainda está aqui."

aviso.style.color="darkred"
aviso.style.marginTop="40px"
aviso.style.fontSize="20px"

document.body.appendChild(aviso)

},90000)

}


// palavra secreta
document.addEventListener("keydown",function(e){

window.digitado=(window.digitado||"")+e.key

if(window.digitado.includes("amen")){

window.location.href="ritual.html"

}

})


// palavra escondida clicável
document.addEventListener("DOMContentLoaded",()=>{

let segredo=document.querySelector(".segredo")

if(segredo){

segredo.addEventListener("click",function(){

window.location.href="ritual.html"

})

}

})


// pistas no console
console.log("Você realmente deveria estar lendo isso?")
console.log("Procure a palavra da fé.")
console.log("Nem todos os arquivos foram catalogados.")