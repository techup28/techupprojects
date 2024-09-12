// basic code for generating hash 
const crypto = require("crypto")

const input = "codex"

const hash = crypto.createHash("sha256").update(input).digest('hex')

console.log("hash for ",input," is ",hash)



// criteria for the hash to be fulfilled: 
// Hashing is a process that transforms input data (of any size) into a fixed-size string of characters.
 
// Hash functions have several important properties:

// Deterministic: The same input will always produce the same output.

// Fast computation: The hash value can be quickly computed for any given data.

// Pre-image resistance: It should be computationally infeasible to reverse the hash function (i.e., find the original input given its hash output).

// Small changes in input produce large changes in output: Even a tiny change in the input should drastically change the hash output.

// Collision resistance: It should be computationally infeasible to find two different inputs that produce the same hash output.