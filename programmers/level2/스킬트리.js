function solution(skill, skill_trees) {
  var answer = 0;
  let _skill = skill.split('');

  skill_trees.forEach((v) => {
    let sTree = v.split('').filter((v) => _skill.indexOf(v) !== -1).join('');
    if (sTree === skill.substring(0, sTree.length)) answer++;
  });

  return answer;
}