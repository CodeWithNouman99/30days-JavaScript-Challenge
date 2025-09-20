const addBtn = document.getElementById("addBtn");
const noteText = document.getElementById("noteText");
const notesList = document.getElementById("notesList");
const themeToggle = document.getElementById("themeToggle");

let notes = JSON.parse(localStorage.getItem("notes")) || [];
let editIndex = null; // for update mode

// Show notes
function renderNotes() {
  notesList.innerHTML = "";
  notes.forEach((note, index) => {
    const noteEl = document.createElement("div");
    noteEl.classList.add("note");
    noteEl.innerHTML = `
      <p>${note.text}</p>
      <small>${note.date}</small>
      <div class="actions">
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;
    // Delete
    noteEl.querySelector(".delete-btn").addEventListener("click", () => {
      notes.splice(index, 1);
      saveNotes();
    });
    // Edit
    noteEl.querySelector(".edit-btn").addEventListener("click", () => {
      noteText.value = note.text;
      editIndex = index;
      addBtn.textContent = "Update";
    });
    notesList.appendChild(noteEl);
  });
}

// Save notes
function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();
}

// Add / Update note
addBtn.addEventListener("click", () => {
  const text = noteText.value.trim();
  if (text === "") {
    alert("Please write something!");
    return;
  }

  if (editIndex !== null) {
    // Update
    notes[editIndex].text = text;
    notes[editIndex].date = new Date().toLocaleString();
    editIndex = null;
    addBtn.textContent = "Add";
  } else {
    // Add new
    const note = {
      text,
      date: new Date().toLocaleString()
    };
    notes.push(note);
  }

  saveNotes();
  noteText.value = "";
});

// Theme toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "☀️ Light Mode";
  } else {
    themeToggle.textContent = "🌙 Dark Mode";
  }
});

// Initial render
renderNotes();



                                                // Program Statements:
//Q 11: Sort an array in ascending order
let arr = [5, 1, 9, 3, 7];
let sorted = arr.sort((a, b) => a - b);
console.log(sorted); // [1, 3, 5, 7, 9]


//Q12:  Find the largest word in a string
function findLargestWord(str) {
  let words = str.split(" ");
  let largest = words[0];
  for (let word of words) {
    if (word.length > largest.length) {
      largest = word;
    }
  }
  return largest;
}

console.log(findLargestWord("I am learning JavaScript everyday")); // JavaScript
