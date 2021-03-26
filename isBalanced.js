/**
Link soal: https://www.hackerrank.com/challenges/balanced-brackets/
**/

function isBalanced(s) {
  //console.log(s.length)
  let sisiA = []
  let sisiB = []
  let mean

  //untuk yang genap
  mean = s.length / 2
  //console.log(mean)
  for (let i = 0; i < mean; i++) {
    //console.log(s[i])
    sisiA.push(s[i])
  }

  for (let j = mean; j < s.length; j++) {
    //console.log(s[j])
    sisiB.push(s[j])
  }

  console.log(sisiA)
  console.log(sisiB)
}

isBalanced("{(([])[])[]}[]")
