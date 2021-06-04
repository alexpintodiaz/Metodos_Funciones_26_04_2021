let arrange = [];

function Hi(a,b,c){
    console.log(arrange);
    return `Hola ${a} ${b} cómo estas? Tu edad es: ${c}`;
}

console.log(Hi.call(null, "Alexander","Pinto",29));
console.log(Hi.apply(null, ["Alexander","Pinto",29]));

let exec = Hi.bind(null, "Alexander","Pinto",29);

arrange.push("data");
console.log(exec());
