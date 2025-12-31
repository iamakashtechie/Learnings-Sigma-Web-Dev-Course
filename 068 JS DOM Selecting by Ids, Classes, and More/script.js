console.log("Hello");

// let boxes = document.getElementsByClassName("box")
// console.log(boxes);
// boxes[2].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green"  // 🎯Targets the 1st .box element

console.log(document.querySelectorAll(".box"))  // ---> this will return collection of HTML elements (NodeList)
                                                // ---> like array of HTML Elements, but not actually an array
// 🔥🔥🔥🔥🔥
document.querySelectorAll(".box").forEach((e) => {
    e.style.backgroundColor = "yellow"
})

let e = document.getElementsByTagName("div")   // output ---> returns HTMLCollection of all div(s), including the parent div(if)
console.log(e);
console.log(e[3].matches("#redbox"))  // 🔥returns True

console.log(e[3].closest(".container"));  // 🔥looks for the nearest ancestor that matches the given CSS - selector
                                            // the element itself is also checked and returns it
                                            // output <div class="container">...</div>
                                            // checks the parent

console.log(document.querySelector(".container").contains(e[2]));   // 🔥returns true
                                                                    // elemA.contains(elemB) ---> returns true if elemB is inside elemA (a descendant of elemA)
                                                                    // or when elemA == elemB