

let plus1 = document.getElementById("home")
let count = 0

function add1(){
  count += 1
  plus1.innerText = count
}

function add2(){
  count += 2
  plus1.innerText = count
}

function add3(){
  count += 3
  plus1.innerText = count
}

function minus1(){
  count -= 1
  plus1.innerText = count 
}




let plus2 = document.getElementById("guest")
let count1 = 0

function adda(){
  count1 += 1
  plus2.innerText = count1
}

function addb(){
  count1 += 2
  plus2.innerText = count1
}

function addc(){
  count1 += 3
  plus2.innerText = count1
}

function minusd(){
  count1 -= 1
  plus2.innerText = count1 
}


let first = document.getElementById("firstScore")

function firstQuater(){
  let result = count + ":" + count1
 
first.innerText = result
}

let second = document.getElementById("secondScore")

function secondQuater(){
  let result2 = count + ":" + count1

second.innerText = result2
}

let third = document.getElementById("thirdScore")

function thirdQuater(){
  let result3 = count + ":" + count1
  third.innerText = result3
}


function reset(){
  plus1.innerText = 0
  plus2.innerText = 0
  

}


