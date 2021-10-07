const list = document.querySelector('ul')
let arr =['one','two','three','four']
console.log("list")

arr.forEach(chore =>{
  const element=document.createElement('li')
  const textNode=document.createTextNode(chore)
  element.appendChild(textNode)


  element.addEventListener('click',(e)=>{
    const useInput = Window.prompt("are you sure you want to delete "${chore}""`")
  })

  list.appendChild(element)
})