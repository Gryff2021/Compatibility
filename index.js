let name_1;
let name_2;
let combinaison;
let me_12;
let me_22;
let dict = {
    "test": 90
}
console.log(dict["test"]);

const check = document.getElementById("check");
const results = document.getElementById("results");

check.addEventListener("click", function() {
    name_1 = document.getElementById("name_1").value;
    name_2 = document.getElementById("name_2").value;
    me_12 = name_1.toLowerCase();
    me_22 = name_2.toLowerCase();
    combinaison = me_12 + me_22;
    combinaison = combinaison.replaceAll(" ", "");


    if (Object.keys(dict).includes(combinaison)) {
        results.textContent = dict[combinaison];
    }
    else {
        results.textContent = Math.floor(Math.random() * 100);
        dict[combinaison] = results.textContent;
        console.log(combinaison);
        console.log(dict);
    }
})