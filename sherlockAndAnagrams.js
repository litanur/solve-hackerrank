/**
Link soal: https://www.hackerrank.com/challenges/sherlock-and-anagrams
**/

function sherlockAndAnagrams(s) {
  // buat pola
  let pola = []
  let unik
  
  for (let i = 0; i < s.length; i++) {
    //pola.push(s[i])
    for(let j = i; j < s.length; j++) {
      unik = (s.substr(i , j - i))
      if (unik.length !== 0) {
        pola.push(unik)
        console.log(unik)
      }
    }
  }

  /** for (let k = 0; k < pola.length; k++) {
    console.log(pola[k])
  } **/
}

sherlockAndAnagrams("ifailuhkqq")
