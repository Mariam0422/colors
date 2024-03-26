const cols = document.querySelectorAll(".col");

// function generateRandomeColor() {
//   const hexCode = "0123456789ABCDEF";
//   let color = "";
//   for (let i = 0; i < 6; i++) {
//     color += hexCode[Math.floor(Math.random() * hexCode.length)];
//   }
//   return "#" + color;
// }
document.addEventListener("keydown", (event) =>{
    event.preventDefault();
if(event.code.toLowerCase() === "space"){
    setRandomColors()
}
})
document.addEventListener("click", (event) =>{
 const type = event.target.dataset.type;
 if(type === "lock"){
    const node = event.target.tagName.toLowerCase() === "i" 
    ? event.target
    : event.target.children[0];
    node.classList.toggle("fa-lock-open");
    node.classList.toggle("fa-lock");
 }
 else if(type === "copy"){
    copyTo(event.target.textContent);
 }
})
function setRandomColors() {
  cols.forEach((col) => {
    const isLock = col.querySelector("i").classList.contains("fa-lock");
    const color = chroma.random();
    const text = col.querySelector("h2");
    const button = col.querySelector("button");
    if(isLock){
        return
    }
    col.style.backgroundColor = color;
    text.innerText = color;
    setTextColor(text,color);
    setTextColor(button,color);
  });
}
function copyTo(text){
 return navigator.clipboard.writeText(text);
}
function setTextColor(text,color){
const luminance = chroma(color).luminance();
text.style.color = luminance > 0.5 ? "black" : "white";
}
setRandomColors();
