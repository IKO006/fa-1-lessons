// DOM

const form = document.getElementById("form")

const userData = {
    name: "USer",
    email: "test@example.com",
    nikName:"vemom_",
    password:"123456",
}
form.onsubmit = (e) => {
    e.preventDefault ()
    const formData = e.target
    const formEmail = formData.email.value
    const formPassword = formData.password.value
    if(userData.email === formEmail && userData.password === formPassword){
        alert( 'Welcome' + userData.name)
        window.location.href = "https://www.google.com/?client=safari&channel=iphone_bm"
    }else{
        alert("Error email or password")
    }
}

// DOM Elementy

const btnMinus = document.getElementById("minus")
const btnPlus = document.getElementById("plus")
const pText = document.getElementById("text-count")
const price = document.getElementById("price")

//onclick
btnPlus.onclick = () => {
    pText.innerText = parseInt(pText.innerText )+ 1
   //                        500          *           2,3,4
    price.innerText = 500 * parseInt(pText.innerText) + "$"
    const allTotal = parseInt(pText.innerText)
    price.innerText = allTotal - 500 + "$"
}
btnMinus.onclick = () => {
   if(parseInt(pText.innerText) > 0) {
    pText.innerText = parseInt(pText.innerText ) - 1 
   
}}




