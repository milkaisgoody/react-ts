"use strict";
/*interface User{
    id: number,
    name: string,
    age?: number
}*/
//객체 생성 (user1)
const user1 = { id: 1, name: "우영우", role: "admin" };
//객체 생성 (user2)
const user2 = { id: 2, name: "조정원", age: 24, role: "user" };
//출력
console.log(`회원1 - ID: ${user1.id}, 이름: ${user1.name}, 권한: ${user1.role}`);
console.log(`회원2 - ID: ${user2.id}, 이름: ${user2.name}, 나이: ${user2.age}, 권한: ${user2.role}`);
