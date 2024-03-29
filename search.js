let keyword = localStorage.getItem("search")
console.log(keyword);


let arr = [
    "avenger","blackwidow","tonny stark","hulk","falcon","captain america","wolvarin","rohan","sohan","sanju"
];


let prr = arr.filter((element)=>{
    return element.includes(keyword)

})
console.log(prr)