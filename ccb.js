const {readFile, writeFile}= require('fs')
readFile('./content/text.txt','utf8',(err,result)=>{
    if(err)
    {
    console.log(err)
    return
}
const first = result
console.log(first)
readFile('./content/text2.txt','utf8',(err,result)=>{
    if(err)
    {
        console.log(err)
        return
    }
    const second= result
    console.log(second)
    writeFile('./content/arun1.txt',`sorry darling : ${first} my ${second} `,(err,result)=>{
        if(err)
        {
            console.log(err)
            return
        }
        console.log(result)
    })
})
})