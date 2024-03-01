const slugify = require('slugify')

const a = slugify('Hey Google') //Hey-Google
const b = slugify('Hey Google', '$') //Hey$Google
const c = slugify('HEY Google',{
    "replacement" : "@",
    "lower": true
})   

console.log(a)
console.log(b)
console.log(c)