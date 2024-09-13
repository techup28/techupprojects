// ssignment #1
// What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?
// A: You will have to brute force until you find a value that starts with 00000

const prefix = '00000'
const crypto = require('crypto')

function findHasWith0000(prefix){
    var input = 0
    while(true){
        var inputStr = input.toString()
        var hash = crypto.createHash('sha256').update(inputStr).digest('hex')
        if(hash.startsWith(prefix)){
            return {"input":input,"hash":hash}
        }
        input++
    }

}

var inputWhoseHashStartsWith0000 = findHasWith0000(prefix)
console.log(`input ${inputWhoseHashStartsWith0000.input}`)
console.log(`hash ${inputWhoseHashStartsWith0000.hash}`)
