function  armstrongNumbers(){
    for(let j=1; j<=10; j++){
        for(let k=0; k<=10; k++){
            for(let l=0; l<=10; l++){
let degree= Math.pow(j, 3)+Math.pow(k, 3)+Math.pow(l, 3);
            let add= j*100 + k*10 +l;
            if(degree===add){
                console.log(degree);
            }
            }

        }
    }
}
armstrongNumbers()