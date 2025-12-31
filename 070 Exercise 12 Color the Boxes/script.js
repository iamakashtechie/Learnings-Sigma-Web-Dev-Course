// trick to generate  random number withing a given range
// if you want to generate between a to b (including both end points)
// let random = Math.ceil(a + Math.random()*b)
// math.ceil(254.9)    // 🔴returns 255 (next integer)

// 🔥⭐🔥⭐🔥

// function to generate a random cumber between 0 to 255
function getRandInt() {
    // return Math.floor(Math.random() * 256)
    return Math.ceil(0 + Math.random()*255)
}

// console.log(getRandInt());  // check

// function get random RGB
function getRandRGB() {
    return `rgb(${getRandInt()}, ${getRandInt()}, ${getRandInt()})`
}

// console.log(getRandRGB());  // check

let a = document.querySelectorAll(".box")
// console.log(a.length);
a.forEach(e => {
    e.style.backgroundColor = getRandRGB()
    e.style.color = getRandRGB()
    e.style.borderColor = getRandRGB()
    document.body.style.backgroundColor = getRandRGB()
    console.log("Hi");
});

let refreshInterval = setInterval(function() {
    location.reload()  
}, 200)

document.addEventListener("click", function() {
    clearInterval(refreshInterval)
    alert("Automatic page reload is stopped. Refresh again to continue")
})

//🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥