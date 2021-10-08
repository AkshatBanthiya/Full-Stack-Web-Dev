let name = new Promise((resolve,reject) =>{
  setTimeout(() => {
    resolve('Akshat')
  }, 3000)
})
console.log(name)
setTimeout(() => {
  console.log(name)
}, 4000);