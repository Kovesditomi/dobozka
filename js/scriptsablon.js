let isBlurrede = false;
document.getElementById('element-one').onclick = () => {
    //állapot változás
    isBlurred = !isBlurred
    if (isBlurred) {
        document.getElementById('element-one').classList.add("blur")
    }
    else {
        document.getElementById('element-one').classList.remove("blur")
    }

}

const elementOne = document.getElementById('element-one')
function toggleBlur() {

    console.log(elementOne)
 

}
elementOne.onclick = toggleBlur



//**2. feladat */

let isHoveredOver=false;
const ElementTwo=document.getElementById("element-two")
ElementTwo.onmouseover=()=>{
    isHoveredOver=true
ElementTwo.style.backgroundColor=red
}
ElementTwo.onmouseout=()=>{
    isHoveredOver=false
ElementTwo.style.backgroundColor=red
}

/**3. feladat*/
function getRandomNumber(max,min){
return Math.round(Math.random()*(max-min)+min)


}



function toggleShape(){
const boxes=document.querySelectorAll('.shape')
console.log(boxes)
for (const box of boxes) {
    box.style.borderRadius=isRound?"50%" : "3px"
}
isRound=!isRound
}
document.getElementById("element-five").onclick=toggleShape

//6. input mezok tartalmaval irjuk felul a doboz szamat


const Esix=document.getElementById("element-six")
Esix.onsubmit=(e)=>{
    e.preventDefault()
    Esix.firstElementChild.innerHTML=e.target.elements.boxNumber.value
    Esix.firstElementChild.innerHTML=bVal
}

//7 amit az input mezobe irunk keruljon bele a dobozba
const Eseven=document.getElementById("element-seven")
console.log(Eseven)
Eseven.onkeyup=(event)=>{
    console.log("fuggveny lefut")
    Eseven.firstElementChild.innerHTML=event.key
}
//8doboz eger koveto koordinatak megjelenitese.
document.onmousemove=(e)=>{
    console.log("eger koveto")
    let coordinates="X:" + e.clientX+ ", Y:"+e.clientY
    document.getElementById("element-eight").firstElementChild.innerHTML=coordinates
}
//9 mini szamologep
let state=9
document.getElementById("box-9").onsubmit=(e)=>{
    //megallitjuk a bongeszo alapertelmezett mukodeset.
    e.preventDefault();
    //ki kell olvasnom a beallitott ertekeket.
    //milyen szam kerult az input mezobe
    let operandus= Number(e.target.elements.operand.value)
    console.log(operandus)
    
    let operator= e.target.elements.operator.value
    console.log(operator)
    switch(operator){
case "mult":
state=state*operandus
break;
case "":
state=state/operandus
break;
case "":
state=state+operandus
break;
case "mult":
state=state-operandus
break;

    }
}

const Eten = document.getElementById('element-tenth');
function moveElement() {
    Eten.style.transform = 'translateX(100px, 100px)';
    setTimeout(function () {
        Eten.style.transform = 'translateX(0, 0)';
      }, 2000);
      moveElement();
}

