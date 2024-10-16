String.prototype.toJandenCase=function()    {

    return this.split(" ").map((ele)=> `${ele[0].toUpperCase()}${ele.slice(1)}`).join(" ");

}

console.log("ahmed elbadry".toJandenCase())
