const str = `
010-1234-5678
thesecon@gmail
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

//const regexp = new RegExp('the','g') 
//const regexp = /the/gi
//g옵션: 해당 단어를 찾아서 배열 데이터로.
//i옵션: 대소문자 구분 X

const regexp = /fox/gi
console.log(regexp.test(str)) // true
console.log(str.replace(regexp, 'AAA')) // 원본데이터 변경은 안됨.
console.log(str)
console.log(str.match(regexp))

/* 플래그 */
console.log(str.match(/the/g))
console.log(str.match(/the/gi))
console.log(str.match(/\./gi))   // escape 문자 활용하여 마침표 확인
console.log(str.match(/\.$/gi))  // false. 가장 끝 부분에 마침표가 있는지
console.log(str.match(/\.$/gim)) // true. 모든 줄의 끝 부분 확인.(줄바꿈 확인)

/* 패턴(표현) */
console.log(
  str.match(/d$/gm)
)  // 끝
console.log(str.match(/^t/gim)) // 시작

console.log(str.match(/http/g))
console.log(str.match(/h..p/g))
console.log(str.match(/fox|dog/))
console.log(str.match(/https/g))
console.log(str.match(/https?/g)) // 물음표 앞이 있을 수도 없을 수도. 즉, HTTPs와 http 둘 다 찾음.

console.log(str.match(/d{2,}/g)) //dddd
console.log(str.match(/\w{2,3}/g))  // \w = 숫자를 포함한 영어.
console.log(str.match(/\b\w{2,3|\b/g))