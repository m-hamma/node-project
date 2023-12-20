var warriors= [
  { name: "Kraken", age: 21, weapon: "arc" },
  { name: "Améria", age: 27, weapon: "fusil" },
  { name: "Narfy", age: 25, weapon: "couteau" },
  { name: "Golïm", age: 17, weapon: "poignard" },
  { name: "Fôrfiot", age: 18, weapon: "lance-flamme" },
  { name: "Joliett", age: 22, weapon: "bazooka" }
];
let listString=["Zein","Amélie","Cristelle"];
listString.sort((a,b)=>{
   if (a<b ){
        return -1;
   }
   if (a<b ){
        return 1;
   }
   return 0;
});
console.log(listString);


function display(i) {
    console.log(i);
    for (i = 0; i < warriors.length; i++) {
        console.log(warriors[i].name + " a " + warriors[i].age + " ans et est équipé d'un " + warriors[i].weapon);
    }
}
function sortAge() {
    warriors.sort(function (a, b) {
        return a.age - b.age;
    });
    //display(intro);
}
function sortName() {
    warriors.sort((a, b) => {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
    //display(intro);
}
sortName();
console.log(warriors);
let isNNan=2;
console.log(NaN === NaN);
console.log(Number.isNaN(NaN));