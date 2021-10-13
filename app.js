const button = document.querySelector('button')
const input = document.querySelector('input')
const div = document.querySelector('div')

button.addEventListener('click',(req,res)=>{
  localStorage.setItem("inputvalue",input.value)
  div.innerHTML=input
  console.log(localStorage.getItem(inputvalue))

}) 


