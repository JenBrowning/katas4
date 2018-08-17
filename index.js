
const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"


function k1() {
    let destination = document.getElementById("k1");
    let newP = document.createElement("p");
    let a = JSON.stringify(gotCitiesCSV.split(","));
    newP.textContent = a;
    destination.appendChild(newP);
} 
k1()



    function k2() {
        let destination = document.getElementById("k2");
        let newP = document.createElement("p");
        let a = JSON.stringify(bestThing.split(","));
        newP.textContent = a;
        destination.appendChild(newP);
    } 
    k2()
  


    function k3() {
        let destination = document.getElementById("k3");
        let newP = document.createElement("p");
        let a = JSON.stringify(gotCitiesCSV.replace(/,/g, "; "));
        newP.textContent = a;
        destination.appendChild(newP);
    } 
    k3()
 


    function k4() {
        let destination = document.getElementById("k4");
        let newP = document.createElement("p");
        let a = JSON.stringify(lotrCitiesArray.join());
        newP.textContent = a;
        destination.appendChild(newP);
    } 
    k4()
  


    function k5() {
        let destination = document.getElementById("k5");
        let newP = document.createElement("p");
        let a = JSON.stringify(lotrCitiesArray.slice(0,5));
        newP.textContent = a;
        destination.appendChild(newP);
    } 
    k5()
  


    function k6() {
        let destination = document.getElementById("k6");
        let newP = document.createElement("p");
        let a = JSON.stringify(lotrCitiesArray.slice(4,8));
        newP.textContent = a;
        destination.appendChild(newP);
    } 
    k6()
  


    function k7() {
        let destination = document.getElementById("k7");
        let newP = document.createElement("p");
        let a = JSON.stringify(lotrCitiesArray.slice(2,5));
        newP.textContent = a;
        destination.appendChild(newP);
    } 
    k7()
 


    function k8() {
        let destination = document.getElementById("k8");
        let newP = document.createElement("p");
        const rohanIndex = lotrCitiesArray.indexOf("Rohan");
        lotrCitiesArray.splice(rohanIndex, 3);
        let a = JSON.stringify(lotrCitiesArray)
        newP.textContent = a;
        destination.appendChild(newP);
    } 
    k8()
  
// help

    function k9() {
        let destination = document.getElementById("k9");
        let newP = document.createElement("p");
        const rhunIndex = lotrCitiesArray.indexOf("Rhun");
        lotrCitiesArray.splice(rhunIndex, 3);
        let a = JSON.stringify(lotrCitiesArray);
        newP.textContent = a;
        destination.appendChild(newP);
    } 
    k9()
 


    function k10() {
        let destination = document.getElementById("k10");
        let newP = document.createElement("p");
        const beleriandIndex = lotrCitiesArray.indexOf("Beleriand")
        lotrCitiesArray.splice(beleriandIndex, 0, "Rohan")
        let a = JSON.stringify(lotrCitiesArray);
        newP.textContent = a;
        destination.appendChild(newP);
    } 
    k10()
  


    function k11() {
        let destination = document.getElementById("k11");
        let newP = document.createElement("p");
        const deadMarshesIndex = lotrCitiesArray.indexOf("Deadmarshes");
        lotrCitiesArray.splice(deadMarshesIndex, 1, "Deadest Marshes");
        let a = JSON.stringify(lotrCitiesArray);
        newP.textContent = a;
        destination.appendChild(newP);
    } 
    k11()
  


    function k12() {
        let destination = document.getElementById("k12");
        let newP = document.createElement("p");
        let a = JSON.stringify(bestThing.slice(0, 14));
        newP.textContent = a;
        destination.appendChild(newP);
    } 
    k12()
 


    function k13() {
        let destination = document.getElementById("k13");
        let newP = document.createElement("p");
        let a = JSON.stringify(bestThing.slice(bestThing.length -12));
        newP.textContent = a;
        destination.appendChild(newP);
    } 
    k13()
 

    function k14() {
        let destination = document.getElementById("k14");
        let newP = document.createElement("p");
        let a = JSON.stringify(bestThing.slice(23, 38));
        newP.textContent = a;
        destination.appendChild(newP);
    } 
    k14()

    function k15() {
        let destination = document.getElementById("k15");
        let newP = document.createElement("p");
        let a = JSON.stringify(bestThing.substring(bestThing.length -12));
        newP.textContent = a;
        destination.appendChild(newP);
    } 
    k15()

    function k16() {
        let destination = document.getElementById("k16");
        let newP = document.createElement("p");
        let a = JSON.stringify(bestThing.substring(23, 38));
        newP.textContent = a;
        destination.appendChild(newP);
    } 
    k16()

    function k17() {
        let destination = document.getElementById("k17");
        let newP = document.createElement("p");
        let a = JSON.stringify(bestThing.indexOf("only"));
        newP.textContent = a;
        destination.appendChild(newP);
    } 
    k17()

    function k18() {
        let destination = document.getElementById("k18");
        let newP = document.createElement("p");
        let a = JSON.stringify(bestThing.indexOf("bit"));
        newP.textContent = a;
        destination.appendChild(newP);
    } 
    k18()

    function k19() {
        let destination = document.getElementById("k19");
        let newP = document.createElement("p");
        let a = gotCitiesCSV.split(",");
        let doubleVowelCity = []
    
        for (let i = 0; i < a.length; i++) {
            city = a[i];
            if (city.includes("aa") == true) {
                doubleVowelCity.push(city);
            } else if (city.includes("ee") == true) {
                doubleVowelCity.push(city);
    
            } else if (city.includes("ii") == true) {
                doubleVowelCity.push(city);
    
            } else if (city.includes("oo") == true) {
                doubleVowelCity.push(city);
    
            } else if (city.includes("uu") == true) {
                doubleVowelCity.push(city);
    
            }
    
        }
        newP.textContent = JSON.stringify(doubleVowelCity);
        destination.appendChild(newP);
    }
    k19()


    function k20() {
        let destination = document.getElementById("k20");
        let newP = document.createElement("p");
        let a = lotrCitiesArray;
        let allORCities = [];
        for (let i = 0; i < a.length; i++) {
            if (a[i].endsWith("or") == true) {
                allORCities.push(a[i])
            }
        }
        newP.textContent =  JSON.stringify(allORCities);
        destination.appendChild(newP);


    } 
    k20()



    function k21() {
        let destination = document.getElementById("k21");
        let newP = document.createElement("p");
        let a = lotrCitiesArray;
        let allORCities = [];
        for (let i = 0; i < a.length; i++) {
            if (a [i].startsWith("B") == true) {
                allORCities.push(a[i])
            }
        }
        newP.textContent = a;
        destination.appendChild(newP);
    } 
    k21()

function k22() {
    let destination = document.getElementById("k22");
    let newP = document.createElement("p");
    let a = lotrCitiesArray;
    for (let i = 0; i < a.length; i++) {
        if (a[i].includes("Mirkwood") == true) {
            newP.textContent = true;
            destination.appendChild(newP);
        }
    }
    
} 
k22()
 


function k23() {
    let destination = document.getElementById("k23");
    let newP = document.createElement("p");
    let a = lotrCitiesArray;
    for (let i = 0; i < a.length; i++) {
        if (a[i].includes("Hollywood") == true) {
            newP.textContent = true;
        } else {
            newP.textContent = false;
        }
        destination.appendChild(newP);
    }

} 
k23()



function k24() {
    let destination = document.getElementById("k24");
    let newP = document.createElement("p");
    const mirkwoodIndex = lotrCitiesArray.indexOf("Mirkwood");
    newP.textContent = mirkwoodIndex;
    destination.appendChild(newP);
} 
k24()
 


function k25() {
    let destination = document.getElementById("k25");
    let newP = document.createElement("p");
    for (let i = 0; i < lotrCitiesArray.length; i++) {
        if (lotrCitiesArray[i].includes(" ")) {
            let word = lotrCitiesArray[i];
            let a = JSON.stringify(word);
            newP.textContent = a;
            destination.appendChild(newP);
            break;
        }
    }
} 
k25()



function k26() {
    let destination = document.getElementById("k26");
    let newP = document.createElement("p");
    let a = JSON.stringify(lotrCitiesArray.reverse());
    newP.textContent = a;
    destination.appendChild(newP);
} 
k26()
 


function k27() {
    let destination = document.getElementById("k27");
    let newP = document.createElement("p");
    let a = JSON.stringify(lotrCitiesArray.sort());
    newP.textContent = a;
    destination.appendChild(newP);
} 
k27()



function k28() {
    let destination = document.getElementById("k28");
    let newP = document.createElement("p");
    for (let i = 0; i < lotrCitiesArray.length; i++) {
    const newArray = JSON.stringify(lotrCitiesArray.rot(function(a,b) {
        return a.length - b.length}))
    newP.textContent = newArray;
    destination.appendChild(newP);
} 
k28()
 


function k29() {
    let destination = document.getElementById("k29");
    let newP = document.createElement("p");
    let v = lotrCitiesArray.pop();
    let a = JSON.stringify(lotrCitiesArray);
    newP.textContent = a;
    destination.appendChild(newP);
} 
k29()




function k30() {
    let destination = document.getElementById("k30");
    let newP = document.createElement("p");
    let v = lotrCitiesArray.push("Rohan");
    let a = JSON.stringify(lotrCitiesArray);
    newP.textContent = a;
    destination.appendChild(newP);
} 
k30()



function k31() {
    let v = lotrCitiesArray.shift();
    let a = JSON.stringify(lotrCitiesArray);
    createKataElement(31, a);
} 
k31()
 



function k32() {
    letCitiesArray.unshift("Beleriand");
    createKataElement(32, JSON.stringify(lotrCitiesArray));
    } 
    k32()
}



