// capturar emails
const emails = "emo@demo.com, demo_demo@demo.com.ar, demo-demo12312@sub.dom.com.ar, demo@novalido, novalido>@demo.com, demo@novalido-.com, demo@-novalido.com"
const emailReg = /(\w)+(\-)*(\w)+@(\w+(\.\w{2,4})+)/gm;

let res = emails.match(emailReg)
console.log('email validos',res);
/*
Capturar DNI y NIE

DNI:
Válidos: 12345678-A, 11223344A,
No válidos: A11223344, 1234567K
NIE:
Válidos: X-1234567-A, X1234567A, Z1234567M
No válidos: X-1233456, 1234567
*/

const dnis = "12345678-A, 11223344A, A11223344, 1234567K";
const nies = "X-1234567-A, X1234567A, Z1234567M, X-1233456, 1234567";

const dniReg = new RegExp("([0-9]{8})(\-)?([A-Z])","g");
const nieReg = new RegExp("([A-Z]{1})(\-)?([0-9]{7})(\-)?([A-Z])","g");

console.log('DNI validos',dnis.match(dniReg));
console.log('NIE validos',nies.match(nieReg));


/*
Comprobar la seguridad de una contraseña
- Contraseñas que contengan al menos una letra mayúscula.
- Contraseñas que contengan al menos una letra minúscula.
- Contraseñas que contengan al menos un número
- Contraseñas que contengan al menos un caracter especial @#$%.
- Contraseñas cuya longitud sea como mínimo 6 caracteres.
- Contraseñas cuya longitud máxima sea 20 caracteres.
*/

const strongPassReg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%]).{6,20}$","g");
