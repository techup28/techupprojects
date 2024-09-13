// What if I ask you that the input string should start with codex ? How would the code change the code of assignment1?
const prefix = '00000'
const crypto = require('crypto')

function findHasWith0000(prefix){
    var input = 0
    while(true){
        var inputStr = "codex"+input.toString()
        var hash = crypto.createHash('sha256').update(inputStr).digest('hex')
        if(hash.startsWith(prefix)){
            return {"input":inputStr,"hash":hash}
        }
        input++
    }

}

var inputWhoseHashStartsWith0000 = findHasWith0000(prefix)
console.log(`input ${inputWhoseHashStartsWith0000.input}`)
console.log(`hash ${inputWhoseHashStartsWith0000.hash}`)
