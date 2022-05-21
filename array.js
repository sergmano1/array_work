let myArr = [1, 2, 3, 4, 5]
let res = myArr.forEach((Element, indexedDB) => {
    console.log(Element) // 1, 2, 3, 4, 5
    console.log(indexedDB) // 0, 1, 2, 3, 4
})