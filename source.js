let colors=["red", "blue", "green", "black", "white", "pink", "orange", "gray", "yellow","red", "blue", "green", "black", "white", "pink", "orange", "gray", "yellow"    
]

let col = colors
col = embaralhar(colors)
let contador = 9
console.log(col)
let j = []
let colors2 = []
var botao = document.getElementsByClassName('botao0')
let cont=0;
let k=0;
let l=0;
for(let i=0;i<botao.length;i++){
botao[i].addEventListener('click',function(){
    j[k] = i;
    k = k+1
    cont=cont+1;
   console.log(cont)
   if(j[0] == j[1]){
     j.pop();
    }    
  console.log(j)
if (cont<=2){
    //const aleatorio = numero_aleatorio ()
    colors2[l] = col[i]
    console.log(colors2[0])
    console.log(colors2[1])
    l= l+1;
    if(col[i]=="red"){
        this.style.backgroundColor = col[i] 
        this.innerHTML = 'red <br/> vermelho'
        this.style.color = "black"
    }else if(col[i]=="blue"){
        this.style.backgroundColor = col[i]
        this.innerHTML = 'blue <br/> azul'
        this.style.color = "black"
    } else if(col[i]=="green"){
        this.style.backgroundColor = col[i]
        this.innerHTML = 'green <br/> verde'
        this.style.color = "black"
    } else if(col[i]=="black"){
        this.style.backgroundColor = col[i]
        this.innerHTML = 'black <br/> preto';
        this.style.color = "white"
    } else if(col[i]=="white"){
        this.style.backgroundColor = col[i]
        this.innerHTML = 'white <br/> branco'
        this.style.color = "black"
    } else if(col[i]=="pink"){
        this.style.backgroundColor = col[i]
        this.innerHTML = 'pink <br/> rosa'
        this.style.color = "black"
    } else if(col[i]=="orange"){
        this.style.backgroundColor = col[i]
        this.innerHTML = 'orange <br/> laranja'
        this.style.color = "black"
    } else if(col[i]=="gray"){
        this.style.backgroundColor = col[i]
        this.innerHTML = 'gray <br/> cinza'
        this.style.color = "black"
    } else if(col[i]=="yellow"){
        this.style.backgroundColor = col[i]
        this.innerHTML = 'yellow <br/> amarelo'
        this.style.color = "black"
    } 
    if(cont==2){
    if(j[0] != j[1]){
     if(colors2[0]==colors2[1]){
         console.log(`${j}`)

        var elem = document.getElementById(`${botao[j[0]].id}`);
        elem.disabled = true

        var elem1 = document.getElementById(`${botao[j[1]].id}`);
        elem1.disabled = true
        console.log(elem1)
        l=0
        k=0
        cont=0
        contador = contador - 1
        console.log(contador)
        if(contador==0){
            var botoe = document.querySelector(".botoes")
                botoe.innerHTML = "<h1 class='h1_inner'>Parabéns você acertou!!!!!</h1>";
        }
     } else if(cont==3){
        botao[j[0]].style.backgroundColor = null
        botao[j[1]].style.backgroundColor = null
        botao[j[2]].style.backgroundColor = null
        botao[j[0]].textContent = ""
        botao[j[1]].textContent = ""
        botao[j[2]].textContent = ""
     } 
    }
    }  
 }else {
        botao[j[0]].style.backgroundColor = null
        botao[j[1]].style.backgroundColor = null
        botao[j[0]].textContent = ""
        botao[j[1]].textContent = ""
        l=0
        k=0
        cont=0
    }
}
) 
}






function embaralhar(array) {
    var indice_atual = array.length, valor_temporario, indice_aleatorio;
 
    while (0 !== indice_atual) {
 
        indice_aleatorio = Math.floor(Math.random() * indice_atual);
        indice_atual -= 1;
 
        valor_temporario = array[indice_atual];
        array[indice_atual] = array[indice_aleatorio];
        array[indice_aleatorio] = valor_temporario;
    }
 
    return array;
}