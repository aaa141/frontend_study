import getType from './getType'
// ./ 안해주면 node_modules에서 찾게 됨.

console.log(typeof 'Hello world!');
console.log(typeof true)
console.log(typeof null) // object
console.log(typeof {})




console.log(getType(123))
// slice o: Number, slice x: [object Number]
console.log(getType(false)) // [object Boolean]

console.log(11 / 2)

function isEqual(x, y) {
  return x === y
}
const c = 1 === 1
const b = 'AB' === 'AB'


const a = 1 < 2
console.log(a ? '참' : '거짓')

/** */
const ulEl = document.querySelector('ul')

for (let i = 0; i < 10; i += 1) {
  const li = document.createElement('li');
  li.textContent = `list=${i + 1}`
  if (i % 2 === 0) {
    li.addEventListener('click', function () {
      console.log(li.textContent)
    })
  }
  ulEl.appendChild(li)
}

/* 함수 표현*/
const sum = function(x, y){
  return x + y
}

// arguments

/*화살표*/
const double = function(x){
  return x * 2
}

// const doubleArrow = (x) =>{
//   return x * 2
// }
const doubleArrow = (x) => x * 2 
// 매개변수 하나인 경우 괄호까지 생략 가능.

// 객체데이터 반환시에는 소괄호로 한 번 감싸서
const doubleArrow2 = x => ({
  name: 'Heropy'
})

console.log('doubleArrow', doubleArrow(7))
console.log('doubleArrow', doubleArrow2(0))


/* IIFE: 즉시 실행 함수 */
const x = 7
function double1(){
  console.log(x * 2)
}
double1();

(function(){
  console.log(x * 2)
})();

(function(){
  console.log(x * 2)
}());
