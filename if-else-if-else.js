const prompt = require ('prompt-sync')()
let size = parseFloat (prompt ('ขนาดของไฟล์ (ไบค์) >>'))
var unit 
if (size>=1099511627776){//ขนาด 1,099,511,627,776 ขึ้นไป ได้แปลงเป็นหน่วย TB
size /= 109951116277776
unit = "TB"
}else if (size >= 1073741824){ //ขนนาด107,3741,824 ขึ้นไป ให้แปลงเป็นหน่วย GB 
size /= 1073741824
unit = "GB"
}else if (size >= 1048576){ // ขนาด1,048,576 ขึ้นไป  ให้แปลงเป็นหน่วย MB
size /= 1048576
unit = "HB"
}else if (size >= 1024) {//ขนาด 1,024 ขึ้นไป ให้แฟลงเป็หน่วย KB
size /= 1024
unit = "KB"
}else{ //ขนาดน้อยกว่า 1,014 ให้ใช้หน่วย Byte
    unit = "byte"
} 
console.log (`ของไฟล์ที่เหมาสมคือ:)
${size.toFixed(2)} ${unit}`)