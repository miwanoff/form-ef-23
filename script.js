// let labels = document.querySelectorAll("label");

// for (let i = 0; i < labels.length; i++) {
//   let time = 0;
//   console.log(labels[i].innerHTML);
//   let letters = labels[i].innerHTML.split("");
//   console.log(letters);
//   let newInnerHTML = "";
//   for (let j = 0; j < letters.length; j++) {
//     let elm = `<span style="transition-delay: ${time}ms">${letters[j]}</span>`;
//     console.log(elm);
//     newInnerHTML += elm;
//     //
//   }
//   console.log("newInnerHTML:" + newInnerHTML);
//   labels[i].innerHTML = newInnerHTML;
// }

// 2
let labels = document.querySelectorAll("label");
labels.forEach(myFunction);

function myFunction(label) {
    label.innerHTML = label.innerHTML.split("").map(mapF).join(""); 
  }

  function mapF(item, index) {
    return `<span style="transition-delay: ${index}ms">${item}</span>`;
  }

  console.log(labels);