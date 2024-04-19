//document.querySelector("#addBtn").addEventListener("click", add);
load();
let notes = [
    {num: 1, note: "Hi this is my first note"},
    {num: 2, note: "Hi this is my second note"},
    {num: 3, note: "Hi this is my third note"}
]

localStorage.setItem("notes", JSON.stringify(notes))
function load(){
    console.log("loading notes...")
    let notes = JSON.parse(localStorage.getItem("notes"));
    let table = document.querySelector("#noteTable");
    console.log(notes)
    for(let i = 0; i < notes.length; i++){
        if(i % 2 == 0){
            table.innerHTML += `<td><h1>${notes[i].num}</h1><p>${notes[i].note}</p><button> View Detail</button></td>`
            console.log("creating row...")
        }
        else{
            console.log("not creating row...")
            table.innerHTML += `<td><h1>${notes[i].num}</h1><p>${notes[i].note}</p><button> View Detail</button></td>`
        }
    }
    
}

function add(){
    console.log("adding note...")

}