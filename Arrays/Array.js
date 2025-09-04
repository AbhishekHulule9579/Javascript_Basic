// creation fo Array
var arr=[1,2,3,4,5]
console.log(arr)

var arr1=[]
arr1[0]="A"
arr1[1]="B"
arr1[2]="C"
arr1[3]="D"
arr1[4]="E"
console.log(arr1)

var arr2=new Array(1,2,3,4,5)
console.log(arr2)

var arr3=[1,2,3,4,5,6]
console.log(arr3)    

//Add element in array end
arr3.push(7)
console.log(arr3)

//Add element in array start
arr3.unshift(11)
console.log(arr3)

//Add element in array middle
//But it does not shift further
arr3[3]=33
console.log(arr3)

//Remove element from array end
arr3.pop()
console.log(arr3)

//Remove element from array start
arr3.shift()
console.log(arr3)

//delete element from array middle
//It does not shift further
//It leaves undefined hole in place of deleted element
delete arr3[2]
console.log(arr3)

//Remove element from array middle and shift further
arr3.splice(2,1)
console.log(arr3)

//length of array
console.log(arr3.length)

//sorting of array
arr3.unshift(9)
console.log(arr3)
arr3.sort()
console.log(arr3)

//reverse of array
arr3.reverse()
console.log(arr3)

//slice of array
ar4=arr3.slice(2,4)
console.log(ar4)