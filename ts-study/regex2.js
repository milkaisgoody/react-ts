"use strict";
//1. 휴대폰 번호 검사
const phoneRegex = /^010-\d{3,4}-\d{4}$/;
console.log("1. 휴대폰 번호 검사");
console.log(phoneRegex.test("010-123-4567")); //true
console.log(phoneRegex.test("010-1234-567")); //false
// 2. 아이디 검사 : 영문 소문자 또는 숫자, 4~12
const userIdRegex = /^[a-z0-9]{4,12}$/;
console.log("2. 아이디 검사");
console.log(userIdRegex.test("abc123")); // true
console.log(userIdRegex.test("1234")); // true
console.log(userIdRegex.test("abc")); //false (3글자)
/* 3. 아이디 검사 : 영문 소문자 + 숫자(필수 포함), 4~12
     () - 그룹 기호
      (?=.*[a-z]) - 어딘가에 소문자가 1개 이상 있어야 함
      (?=.*\d) - 어딘가에 숫자가 1개 이상 있어야 함

*/
const userIdRegex2 = /^(?=.*[a-z])(?=.*\d)[a-z0-9]{4,12}$/;
console.log("3. 아이디 검사");
console.log(userIdRegex2.test("abc123")); // true
console.log(userIdRegex2.test("1234")); // false
console.log(userIdRegex2.test("abc")); //false (3글자)
/*4. 이메일 검사
    아이디@도메인.확장자
'.' - '\.'로 표기
    [^\s@] - '^' 검색 활호 안에서는 not(아니다)
*/
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log("4. 이메일 검사");
console.log(emailRegex.test("hong@naver.com")); //true
console.log(emailRegex.test("hong@naver")); //false
console.log(emailRegex.test("park@test.co.kr")); //true
console.log(emailRegex.test("park")); //false
