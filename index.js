/*
let notes = [
    {num: 1, note: "Hi this is my first note"},
    {num: 2, note: "Hi this is my second note"},
    {num: 3, note: "Hi this is my third note"},
    {num: 4, note: "Hi this is my fourth note"},
    {num: 5, note: "Hi this is my fifth note"}
]

localStorage.setItem("notes", JSON.stringify(notes))
*/

//localStorage.removeItem("notes");


if(localStorage.getItem("notes") != null){
    load();
}

function load(){
    console.log("loading notes...")
    let notes = JSON.parse(localStorage.getItem("notes"));
    let table = document.querySelector("#noteTable");
    console.log(notes)
    let row;
    for(let i = 0; i < notes.length; i++){
        //If i is even, create a new row and a new data cell appended to the row
        if(i % 2 == 0){
            console.log("creating row...")
            row = document.createElement("tr");
            let td = document.createElement("td");
            td.classList.add(`${notes[i].num}`);
            td.innerHTML= `<h1>Note ${notes[i].num}</h1><p class="noteText">${notes[i].note}</p><button class = 'modalBtn' onClick = 'modal()'> View Detail</button>`
            row.appendChild(td);
        }
        //If i is odd, dont create a row. Only append new data cell to existing row
        else{
            let td = document.createElement("td");
            td.classList.add(`${notes[i].num}`);
            td.innerHTML= `<h1>Note ${notes[i].num}</h1><p class="noteText">${notes[i].note}</p><button class = 'modalBtn' onClick = 'modal()'> View Detail</button>`
            row.appendChild(td);
            table.appendChild(row);
        }
        //If the length of all notes is odd, create append a row with only that data cell to the main table
        if(notes.length % 2 != 0){
            table.appendChild(row);
        }
    }
    
}

function add(){
    console.log("adding note...")
    if(localStorage.getItem("notes") == null){
        let note = document.querySelector("#textboxid").value;
        let notes = [{num: 1, note:note}]
        localStorage.setItem("notes", JSON.stringify(notes));
    }
    else{
        let notes = JSON.parse(localStorage.getItem("notes"));
        let note = document.querySelector("#textboxid").value;
    
        console.log(note)
        let num = notes.length + 1;
        let newNote = {num: num, note: note}
        notes.push(newNote)
        localStorage.setItem("notes", JSON.stringify(notes))
        console.log(num)
    }
    location.reload();
}

function modal(){
    console.log("modal popup...")
}