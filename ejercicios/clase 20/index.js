const text = "demo@demo.com, demo_demo@demo.com.ar, demo-demo12312@sub.dom.com.ar, demo@novalido, novalido>@demo.com, demo@novalido-.com, demo@-novalido.com"
const regExp = /[\w-]+@\w+\.[\w]+[.\w]*/g
const text2 = "12345678-A, 11223344A, A11223344, 1234567K"
const regExp2 = /\d{8}-?\w/g
const text3 = 'X-1234567-A, X1234567A, Z1234567M, X-1233456, 1234567'
const regExp3 = /\b[\w]-?\d{7}-?\w/g


console.log(text.match(regExp))
console.log(text2.match(regExp2))
console.log(text3.match(regExp3))