
 var list = document.querySelector('ul')
 // function greet(name = 'John', age = 99) {
 //     // console.log('Hello')
 //     console.log(name, age)
 //     // console.log('Hey ' + name + " Your age is " + age)/
 // }

 // greet()

 var arr = ['Go the GYM ', 'cook oatmeal', 'Eat']

 arr.push('Complete the assignment')

 for (var i = 0; i < arr.length; i++) {
     var element = document.createElement('li')
     var textNode = document.createTextNode(arr[i])
     element.appendChild(textNode)
     list.appendChild(element)
 // function add(a = 0, b = 0) {
 //     var sum = a + b
 //     return sum
 // }

 } 
 var add = (a = 0, b = 0) => {
     var sum = a + b
     return sum
 }



 console.log(add(10, 20))