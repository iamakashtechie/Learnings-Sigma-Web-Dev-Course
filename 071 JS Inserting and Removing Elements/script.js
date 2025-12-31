console.log("Hello");

// document.querySelector(".container").innerHTML;
// output ---> '\n        <div id="element" class="box" hidden="">Hey I am a box</div>\n        <div class="box">Hey I am a box</div>\n    '

// document.querySelector(".container").textContent;
// output ---> '\n        Hey I am a box\n        Hey I am a box\n    '
// it is just same as .innerHTML, but the output is text without tags

// document.querySelector(".container").innerText;
// output ---> 'Hey I am a box\nHey I am a box'

// document.querySelector(".container").outerHTML;
// output '<div class="container">\n        <div class="box">Hey I am a box</div>\n        <div class="box">Hey I am a box</div>\n    </div>'

// document.querySelector(".box").tagName;
// output 'DIV'

// document.querySelector(".box").nodeName;
// output 'DIV'
// 🔥🔥🔥
// {
//     Difference between tagName & nodeName 
//     ---> tagName (only for HTML elements) while 
//     ---> nodeName (for any kind of elements, e.g. texts, comments, or even HTML elements) while 
// }

// document.querySelector(".container").style.backgroundColor = "red"
// element.hidden = true
// // document.querySelector(".container").hidden = true

console.log(document.querySelector(".box").hasAttribute("style"))    //  returns true (🔥Checks the first .box)
console.log(document.querySelector(".box").getAttribute("style"))    //  returns the attribute (🔥Checks the first .box)

document.querySelector(".box").setAttribute("sty1e", "display: inline")  // alters a specific attribute

document.querySelector(".box").attributes   // displays all at attributes
// output ---> NamedNodeMap {0: id, 1: class, 2: style, 3: data-createdby, 4: sty1e, id: id, class: class, style: style, data-createdby: data-createdby, sty1e: sty1e, …}

document.querySelector(".box").removeAttribute("style")     // removes the style attribute from .box

/* 🔥data-anyName (custom attributes)

    We can always create custom attributes but the ones starting 
    with "data-" are resrved for programmers use.
    They are available in a property named dataset

    Example ---> data-createdby: "akash" ---> see the index.html file
*/

document.querySelector(".box").dataset      // output ---> DOMStringMap {createdby: 'akash'}


// ---------------------------------------------------------------------------------------------------------

// 🔥
let div = document.createElement("div")
div.innerHTML = "I have been inserted <b>by Akash</b>"
div.setAttribute("class", "inserted")
document.querySelector(".container").append(div)    // 🔥inserts at the end of the .container node
// document.querySelector(".container").prepend(div)    // 🔥inserts at the beginning of the .container node
// document.body.append(div)    // div outside the .container, and inside the body

// document.querySelector(".container").before(div)    // 🔥new div will be inseted before the .container node
// document.querySelector(".container").after(div)    // 🔥new div will be inseted after the .container node
                                                   // it is similar to document.body.append(div), as both inserts div after .container
// document.querySelector(".container").replaceWith(div)    // 🔥replaces node with the given node
                                                         // ---> replaces .container with the div we created earlier
// ------------------------------------------------------------------------------------------------------------------------------
// 🔥🔥🔥 insert Adjacent HTML/Text/Element

// 🔴 "beforebegin" - Insert HTML immediately before element
// 🔴 "afterbegin" - Insert HTML into the element at the beginning
// 🔴 "beforeend" - Insert HTML into the element at the end
// 🔴 "afterend" - Insert HTML immediately after element

let cont = document.querySelector(".container")
cont.insertAdjacentHTML("beforebegin", "<p>Hello</p>")
cont.insertAdjacentHTML("afterend", "<p>Bye</p>")

// similarly, .insertAdjacentText && .insertAdjacentElement
// cont.insertAdjacentText("beforebegin", "div")
// cont.insertAdjacentElement("beforebegin", div)    // [🔴DOUBT] 

// document.querySelector(".box").remove()    // removes a node

// document.querySelector(".box").classList
// output ---> DOMTokenList(3) ['box', 'red', 'bg-green', value: 'box red bg-green']

// document.querySelector(".box").className
// output ---> 'box red bg-green'

// 🔥🔥🔥
document.querySelector(".box").classList.add("class")    // adds a new class name to the element
document.querySelector(".box").classList.remove("bg-green")    // removes a new class name to the element
document.querySelector(".box").classList.toggle("red")    // adds a class if it doesn't exist, otherwise removes it
document.querySelector(".box").classList.toggle("blue")
document.querySelector(".box").classList.contains("box")    // returns true/false ---> in this case true
