const prompt = require ('prompt-sync')()
let usecheck =(prompt ( 'username:'))
correctuse = "admin"
var useresult
if ( usecheck != correctuse ){
   useresult = ("username ไม่ถูกต้อง")
}else{
    useresult = ("username ถูกต้อง")
}
console.log (useresult)     