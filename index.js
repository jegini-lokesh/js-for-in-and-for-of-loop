var num = [10, 20, 30, 40, 50, 60] //in belong to index here we can acess both index value and value by uisng for in.
for (index in num) {
    numb = num[index] + 1
    console.log(index + ":" + numb); //here singlr line for this property there is no block due to that it take in put ang give output method-1
}
var nu = [100, 200, 300, 400, 500, 600] //here if we see the out put we find difference it print did not proitn index values it print direct values in of loop index is not possible
for (index of nu) {
    numb = num[index] + 1
    console.log(index + ":" + numb); //here singlr line for this property there is no block due to that it take in put ang give output method-1
}
//object in object we cannot able to use for of method because it consist key value pair due to that we get error
// var employe = { name: "lokesh", age: 25, "village": "pathagunta" }
// for (data of employe) { //we get error employe is not itterable
//     console.log(data + "<br>")
// }
var employe = { name: "lokesh", age: 25, "village": "pathagunta" }
for (data in employe) { //we get error employe is not itterable
    console.log(data + ":" + employe[data])
}
a = "lokesh"
for (single in a) {
    console.log(single + ":" + a[single]);
}