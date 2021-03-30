// Problem statement: https://www.hackerrank.com/challenges/ctci-bubble-sort/problem

function countSwaps(a) {
  let firstElement
  let lastElement
  let numSwaps = 0
  let x
  let y

  for (let i = 0; i < a.length; i++) {
    if (a[i] > a[i+1]) {
      x = a[i]
      y = a[i+1]
      a[i] = y
      a[i+1] = x
      numSwaps++
    }
  }

  if (a[0] > a[1]) {
    x = a[0]
    y = a[1]
    a[0] = y
    a[1] = x
    numSwaps++
  }

  firstElement = a[0]
  lastElement = a[a.length - 1]

  console.log("Array is sorted in " + numSwaps + " swaps")
  console.log("First element: " + firstElement)
  console.log("Last element: " + lastElement)
}
