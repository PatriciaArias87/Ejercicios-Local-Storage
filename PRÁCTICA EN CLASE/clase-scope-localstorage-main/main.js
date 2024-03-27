// // var a = 1;
// // let b = 2;
// // const c = 3;

// // function test() {
// //   var a = 4;
// //   let b = 5;
// //   const c = 6;
// //   console.log("Function Scope: ", a, b, c);
// // }
// // test();

// // if (true) {
// //   var a = 4;
// //   let b = 5;
// //   const c = 6;
// //   console.log("If Scope: ", a, b, c);
// // }
// // console.log("Global Scope: ", a, b, c);

// // var a = 1;
// // let b = 2;
// // const c = 3;

// // for(let b = 0; b<10; b++){
// //     console.log('Loop: ',b)//0-9 || 10 veces-2
// // }

// // console.log("Global Scope: ", a, b, c);//1,2,3

// // var a = 1;
// // let b = 2;
// // const c = 3;

// // for(var a = 0; a<10; a++){
// //     console.log('Loop: ',a)//0-9
// // }
// // console.log("Global Scope: ", a, b, c);//9,2,3 || 1,2,3

// localStorage.setItem('name', 'Sofía')
// // localStorage.name = "Sofía"
// localStorage.surname = 'La Profe'


// // localStorage.removeItem('name')

// localStorage.clear()
// let name= localStorage.getItem("name")
// console.log(name);

// let user = {
//     username: 'Ivan',
//     password: 'contraseñajaja'
// }
// localStorage.setItem('user', JSON.stringify({
//     username: 'Ivan',
//     password: 'contraseñajaja'
// }));


// localStorage.setItem("user2",user)

// // localStorage.setItem("user",JSON.stringify(user))

// let userSaved = JSON.parse(localStorage.getItem("user"))
// console.log(userSaved.username);

// let personajesAnime = ['Levi', 'Mikasa', 'Zoro', 'Luffy', 'Tanjiro', 'Nezuko'];

// localStorage.setItem("anime", JSON.stringify(personajesAnime));

// let data = JSON.parse(localStorage.getItem("anime"));

// console.log("Mi array", data);


// FORMULARIO

const btn = document.querySelector("button")
const inputName = document.querySelector("#name")
const p = document.querySelector("p")

// const inputName = document.getElementById("name")
// console.log(inputName);

function printName() {
    let nameSaved = localStorage.getItem("name")
    p.innerText = nameSaved
}

function saveName(e) {
    e.preventDefault()
    // console.log(inputName.value);
    localStorage.setItem("name",inputName.value)
    printName()
}
printName()

btn.addEventListener("click",saveName)
btn.addEventListener("click",function saveName() {

})


