//document.querySelector("#addBtn").addEventListener("click", add);
load();
let notes = [
    {num: 1, note: "Hi this is my first note"}
]

//localStorage.setItem("notes", JSON.stringify(notes))
function load(){
    console.log("loading notes...")
    let notes = JSON.parse(localStorage.getItem("notes"));
    console.log(notes)
    
}

function add(){
    console.log("adding note...")

}