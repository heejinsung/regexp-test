const str = `
010-1234-5678
thesecon@gamil.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
aabbbcccccdd
`

console.log(
  //str.match(/.{1,}(?=@)/g) // ['thesecon']
  str.match(/(?<=@).{1,}/g) // ['gamil.com']
)