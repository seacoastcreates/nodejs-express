const { readFile, writeFileSync, readFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/result-sync.txt',
    `HERE IS THE RESULT : ${first}, ${second}`,
    {flag: 'a'}
)
console.log('done with this task')
console.log('starting the next one')