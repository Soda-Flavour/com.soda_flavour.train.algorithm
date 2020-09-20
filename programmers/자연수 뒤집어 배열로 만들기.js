function solution(n) {
    var answer = [];

    return (n+'').split('').reverse().map((v)=>parseInt(v));
}