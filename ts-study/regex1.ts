/* match(정규표현식) 함수 사용 - 표현식 테스트
    문자열이 처음부터 패턴이 맞는지 검사
    [a-z] : 소문자 검색, '+' : 1개 이상 검색(반복)    
*/ 
const m = "korea".match(/^[a-z]+/)
console.log(m?.[0]);

/*  문자열이 어디든 패턴이 있으면 반환 
    \d와 [0~9]같음
    ^이 없음
*/
const s = "abc123def".match(/\d+/);
console.log(s?.[0]); //123

const s2 = "abc123def".match(/^\d+/);
console.log(s2?.[0]); //undefined

//test("문자열")의 결과는 true/false 반환
const a = /^[a-z]+/ //소문자로 시작하기만 하면 됨
const b = /^[a-z]+$/ //처음부터 끝까지 소문자여야함(입력값 검증)

console.log(a.test("abc")); //true
console.log(a.test("abc123")); //true
console.log(a.test("4abc")); //false


