/**
Link soal: https://www.hackerrank.com/challenges/balanced-brackets/

{(([])[])[]}[]

bandingkan sama sebelahnya
kurung siku dibandingkan sehingga hasilnya menjadi
{(())}

bandingkan sama sebelahnya
{()}

bandingkan sama sebelahnya
{}

// pseudocode
{[()]} 
0, 1, 2, 3, 4, 5
for (i = 0; i < length; i ++)
i === i+1
0, 1
1, 2
2, 3
3, 4
4, 5

kalau ketemu
di pop (i , i+1)

kalau ga ketemu, pasti jawabannya NO

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
