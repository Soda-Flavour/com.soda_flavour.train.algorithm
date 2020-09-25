function solution(phone_number) {
  var answer = '';
  let str = phone_number.slice(-4);

  return '*'.repeat(phone_number.slice(0, phone_number.length - 4).length) + str;
}