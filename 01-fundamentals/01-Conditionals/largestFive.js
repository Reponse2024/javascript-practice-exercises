let a= 1, b=2, c=3, d=4, e=5;
if(a>b && a>c && a>d && a>e){
    console.log(a+' '+'is the largest');
}
else if(b>a && b>c && b>d && b>e){
    console.log(b+' '+'is the largest');
}
else if(c>a && c>b && c>d && c>e){
    console.log(c+' '+'is the largest');
}
else if(d>a && d>b && d>c && d>e){
    console.log(d+' '+'is the largest number');
}
else{
    console.log(e+' '+'is the largest number');
}