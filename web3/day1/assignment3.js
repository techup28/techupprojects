
// What if I ask you to find a nonce for the following input -
// Akash => Raman | Rs 100
// Ram => Ankit | Rs 10 

// see the question in the pdf(slides_blockchain)

const input = 'harkirat => Raman | Rs 100Ram => Ankit | Rs 10'
const crypto = require('crypto')
var hash =''

function findHasWith0000(){

    const prefix = '0000'
    let nounce = 0

    while(true){
        var inputStr = input + nounce.toString()
        hash = crypto.createHash('sha256').update(inputStr).digest('hex')
        if(hash.startsWith(prefix)){
            return nounce
        }
        nounce++
    }

}


console.log("nounce: ",findHasWith0000())


// what is nounce?
// Example of nounce and How Nonce is Used:
// Let's say a miner is trying to find a hash that starts with at least four leading zeros (this represents the difficulty level). The inputs to the hash function include:

// The transactions in the block.
// The timestamp.
// The previous block’s hash.
// The nonce.
// The miner adjusts the nonce and keeps recalculating the hash until the output starts with four zeros. For example, the nonce might be:

// Nonce = 1 → Hash: A7F5...
// Nonce = 2 → Hash: B8C2...
// Nonce = 3 → Hash: 00005ABC... (Valid)
// Once they find a valid hash (like the one with leading zeros), the block is considered mined.