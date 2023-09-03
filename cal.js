const os=require('os')
console.log(os.homedir())
const col={
    name:os.type(),
    date:os.release(),
    color:os.networkInterfaces(),
}
console.log(col)