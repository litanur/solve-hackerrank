// Link soal: https://www.hackerrank.com/challenges/ctci-making-anagrams/problem

let indices = []

function makeAnagram(a, b) {
  /**
   * Algoritma
   * 1. Dicari dulu string yang sama antara a dengan b
   *    Misal udah ketemu yang sama = c
   * 2. Delete huruf selain c di string a 
   * 3. Hitung berapa huruf yang di delete di string a
   * 4. Lakukan seperti no 2 di string b
   * 5. Hitung berapa huruf yang di delete di string b
   * 6. Jumlahkan hasil no 3 & 5
   */

  const arrayA = a.split('').sort()
  const arrayB = b.split('').sort()
  let banding
  let hasilBanding = []
  let hitung = 0
  let x

  //console.log(arrayA)
  //console.log(arrayB)
  // langkah no 1
  for(let i = 0; i < arrayA.length; i++) {
    banding = arrayB.indexOf(arrayA[i])
    if (banding !== -1) {
      hasilBanding.push(arrayB[banding])
    }
  }

  //console.log(hasilBanding)
  // remove duplikat
  let arrayBanding = [...new Set(hasilBanding)]
  //console.log(arrayBanding)

  for(let j = 0; j < arrayBanding.length; j++) {
    check(arrayA, arrayBanding[j])
  }

  //console.log(indices)

  indices = []

  for(let j = 0; j < arrayBanding.length; j++) {
    check(arrayA, arrayBanding[j])
    let p = indices.length
    //console.log(p)
    indices = []
    check(arrayB, arrayBanding[j])
    let q = indices.length
    //console.log(p)
    indices = []

    if (p !== q) hitung++
  }

  //console.log(indices)
  // langkah no 2 - 6
  for(let j = 0; j < arrayA.length; j++) {
    if ((arrayBanding.indexOf(arrayA[j])) === -1) hitung++
  }

  for(let k = 0; k < arrayB.length; k++) {
    if ((arrayBanding.indexOf(arrayB[k])) === -1) hitung++
  }

  return hitung
}

function check(array, element) {
  let idx = array.indexOf(element);
  while (idx !== -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
  }
}

console.log(makeAnagram("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke"))
