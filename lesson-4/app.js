// For Loop


//console.log("Hello");
//console.log("Hello");
//console.log("Hello");
//console.log("Hello");
//console.log("Hello");


//for(let i = 0; i < 5 ; i++){
    //console.log("Hello", i);


//const names = ["Akniet", "Aiperi", "Sagyn"]
    //index       0        1          2
//console.log(names[0]);  //Akniet
//console.log(names[1]);  //Aiperi//
//console.log(names [3]);  //underfined


//console.log(names); //...
//for(let i = 0; i < names.length; i++){
    //console.log("Hello", names[i]);


//  % 5 Coca
//  % 3 Cola

 //for (let san = 1; san < 101; san++){
    //if(san % 3 === 0 && san % 5 === 0)
   // console.log("Coca Cola")
 //}

 // for index + 
 let name = 'Adahan'


 for(let tamga = 0; tamga< name.length; tamga++){
    if(name[tamga].toLowerCase() === 'a'){
        console.log(name[tamga].toLowerCase());
    }
 }

 // for of  index - 

 for(const t of name){
    if(t.toUpperCase() === 'A'){
        console.log(t.toUpperCase());   
    }
 }






//for in


//console.log(user.name); //Adahan
//console.log(user.age); //25
//console.log(user['gender']); //male

//for(const key in user){
    //console.log( key, ":" , user[key]);

//}


let btn1 = document.querySelectorAll('button')
for(let i = 0; i< btn1.length; i++){
btn1[i].onclick = function(){
    document.body.style.background = btn1[i].innerText
}
}