
let taulell=[];

function iniciarPartida() {
    crearTaulell();
    
}

function crearTaulell() {
    
    for(let a=1; a<10;a++){
        let nums=[1,2,3,4,5,6,7,8,9];
        let taula = "<table>";
        let bloc=[];
        for (let n = 0; n < 3; n++) {
            taula += "<tr>";
            for (let i = 0; i < 3; i++) {
                let numIndex
                let num;
                numIndex = Math.floor(Math.random() * nums.length );
                num=nums.at(numIndex);
                revisaFila(n, i, a);
                taula += `<td id="${n}-${i}-${a}" data-fila='${n}' data-columna='${i}' data-bloc='${a}' data-num='${num}'><input type="number" min="1" max="9">${num}</td>`; 
                nums.splice(numIndex,1)[0];
            }
            taula += "</tr>";
        }
        taula += "</table>";
        document.getElementById(`${a}`).innerHTML = taula;
    }

}

function revisaFila(fila, columna, bloc){
    let td1 = document.getElementById(`${fila}-${columna}-${bloc}`);
    for(let n=1; n<=3; n++){
        for(let i=0; i<3;i++){
            let tdAux=document.getElementById(`${fila}-${i}-${n}`);
        console.log(`${fila}-${i}-${n}`);
        try{
            console.log(td1.dataset.num + "-"+ tdAux.dataset.num);
            if(td1.dataset.columna == tdAux.dataset.columna){
                console.log("salto");
                continue;
            }else{
                if(td1.dataset.num == tdAux.dataset.num){
                    console.log("cuidado");
                    return false;
                }
            }

        }catch (e){

        }
        }
            
    }
    console.log("cambio");
    return true;
}


/*
let numIndex
                do{
                    numIndex = Math.floor(Math.random() * nums.length );
                    //let num=nums.splice(numIndex,1)[0];
                    let num=nums.at(numIndex);
                }while(revisaFila(n, i));
                taula += `<td id="${n}-${i}" data-fila='${n}' data-columna='${i}' data-bloc='${a}' data-num='${num}'><input type="number" min="1" max="9">${num}</td>`; 
                nums.splice(numIndex,1)[0];
                */



/*
let numIndex = Math.floor(Math.random() * nums.length );
                let num=nums.splice(numIndex,1)[0];

                taula += `<td id="${n}-${i}" data-fila='${n}' data-columna='${i}' data-bloc='${a}' data-num='${num}'><input type="number" min="1" max="9">${num}</td>`; 
                revisaFila(n, i);
*/