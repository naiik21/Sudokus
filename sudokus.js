
let taulell=[];

function iniciarPartida() {
    crearTaulell();
    
}

function crearTaulell() {
    
    for (let a = 1; a < 10; a++) {
        let taula = "<table>";
        let nums=[1,2,3,4,5,6,7,8,9];
        for (let n = 0; n < 3; n++) {
            taula += "<tr>";
            for (let i = 0; i < 3; i++) {
                let numIndex = Math.floor(Math.random() * nums.length);
                let num = nums.splice(numIndex, 1)[0];
                taula += `<td id="${n}-${i}-${a}" data-fila='${n}' data-columna='${i}' data-bloc='${a}' data-num='${num}'><input type="number" min="1" max="9">${num}</td>`;
            }
            taula += "</tr>";
        }
        taula += "</table>";
        document.getElementById(`${a}`).innerHTML = taula;
    }

    revisarColumnas();
    revisarBloques();
    

}

function revisaFila(fila, columna, bloc, nums){
    let td1 = document.getElementById(`${fila}-${columna}-${bloc}`);
    for(let n=1; n<=3; n++){
        for(let i=0; i<3;i++){
            let tdAux=document.getElementById(`${fila}-${i}-${n}`);
            console.log(`${fila}-${i}-${n}`);
            console.log(td1.dataset.num + '-' + tdAux.dataset.num);
            try{
                if((td1.dataset.columna == tdAux.dataset.columna)  && (td1.dataset.fila == tdAux.dataset.fila) && (td1.dataset.bloc == tdAux.dataset.bloc)){
                console.log("salto");
                continue;
            }else{
                while(td1.dataset.num == tdAux.dataset.num){
                    console.log(td1.dataset.num +'-'+ tdAux.dataset.num);
                    let numIndex
                    let num;
                    numIndex = Math.floor(Math.random() * nums.length );
                    num=nums.at(numIndex);
                    console.log(num);
                    tdAux.setAttribute("data-num", num);
                    //document.getElementById(`${fila}-${i}-${n}`).innerHTML = `<td id="${fila}-${i}-${n}" data-fila='${fila}' data-columna='${i}' data-bloc='${n}' data-num='${num}'><input type="number" min="1" max="9">${num}</td>`;
                    tdAux=document.getElementById(`${fila}-${columna}-${bloc}`);
                    console.log(tdAux.dataset.num);
                }
            }

        }catch (e){
            console.log("error");
            console.log(e);
        }
        }
            
    }
    console.log("cambio");
    return true;
}


/*
function revisarColumnas() {
    for (let n = 0; n < 3; n++) {
        for (let i = 0; i < 3; i++) {
            revisaFila(n, i);
        }
    }
}

function revisarBloques() {
    for (let a = 1; a < 10; a++) {
        let nums = [];
        for (let i = 1; i <= 9; i++) {
            nums.push(i);
        }

        for (let n = 0; n < 3; n++) {
            for (let i = 0; i < 3; i++) {
                revisaFila(n, i, a, nums);
            }
        }
    }
}

function revisaFila(fila, columna, bloc, nums) {
    let td1 = document.getElementById(`${fila}-${columna}-${bloc}`);
    
    for (let n = 1; n <= 3; n++) {
        for (let i = 0; i < 3; i++) {
            let tdAux = document.getElementById(`${fila}-${i}-${n}`);
            if (td1.dataset.columna == tdAux.dataset.columna && td1.dataset.fila == tdAux.dataset.fila && td1.dataset.bloc == tdAux.dataset.bloc) {
                continue;
            } else {
                while (td1.dataset.num == tdAux.dataset.num) {
                    let numIndex = Math.floor(Math.random() * nums.length);
                    let num = nums.splice(numIndex, 1)[0];
                    tdAux.setAttribute("data-num", num);
                    tdAux.innerHTML = `<input type="number" min="1" max="9">${num}`;
                }
            }
        }
    }
}
*/