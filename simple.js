//

/* for(let i = 1; i < 6; i++){
    console.log(i);
}
 */
function number(i){
    if(i>5){
        return i;
    }
    console.log(i);
    number(i+1);
}
number(1);

