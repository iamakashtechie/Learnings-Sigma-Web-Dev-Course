console.log("Hello World");
// do in browser console
    // document.body 
    // document.body.childNodes
    // document.body.childNodes[0]
    // document.body.childNodes[1]
    // document.body.childNodes[1].childNodes
// output of last && explanation
/*
>NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
  >0 : text
  >1 : div.box
  >2 : text
  >3 : div.box
  >4 : text
  >5 : div.box
  >6 : text
  >7 : div.box
  >8 : text
  >9 : div.box
  >10 : text
   length : 11
  >[[Prototype]] : NodeList


<body>
    <div class="container"><---text-
node---><div class="box">Box 1</div><---text-----
node---><div class="box">Box 2</div><---text-----
node---><div class="box">Box 3</div><---text-----
node---><div class="box">Box 4</div><---text-----
node---><div class="box">Box 5</div><---text-node
---></div>
    <script src="script.js"></script>
</body>
*/

// do in browser console
    //let cont = document.body.childNodes[1]
    // cont
    // cont.firstChild --- returns

    // cont.firstElementChild --- <div class="box">Box 1</div>

// do in browser
    // document.body.firstElementChild.children
    /* Output
    >HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]
      >0: div.box
      >1: div.box
      >2: div.box
      >3: div.box
      >4: div.box
      length: 5
      >[[Prototype]]: HTMLCollection
    */

    // .children[3].previousElementSibling <---> .children[3] <---> .children[3].nextElementSibling

    // document.body.firstElementChild.children[3]
    // output --- <div class="box">Box 4</div>
    
    // document.body.firstElementChild.children[3].previousElementSibling
    // output --- <div class="box">Box 3</div>
    
    // document.body.firstElementChild.children[3].nextElementSibling
    // output --- <div class="box">Box 5</div>

    // documrnt.body.firstElementChild.children[3].parentElement
    // potput --- <div class="container">...</div>
