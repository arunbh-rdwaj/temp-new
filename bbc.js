const {readFileSync,writeFileSync}=require('fs')
const first=readFileSync('./content/text.txt','utf8')
const second=readFileSync('./content/text2.txt','utf8')

writeFileSync('./content/arun.txt',`teri lat lg jayegi tarpaya na kre ${first} : ${second} \n`,{flag : 'a'})
const third=readFileSync('./content/arun.txt','utf8')
//console.log(first,second)
console.log(third)