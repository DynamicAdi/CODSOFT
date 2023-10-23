// Data updating Management system!

// News Updating 
function update() {
    let val = prompt("Please  Enter the Latest News of GOVT. HSSR");
    localStorage.setItem("news", val).value;
    let get = localStorage.getItem("news");
    item = document.getElementById("readme");
    item.innerHTML = get;
}

function red() {
    let value = localStorage.getItem("news");
    if(value===null) {
        alert("No Currently Data\nPlease wait for teachers to update the news")
    }
    else {
        alert(value);
    }
}

// Events Updating 
function events() {
    let val = prompt("Please  Enter the Latest Events of GOVT. HSSR");
    localStorage.setItem("events", val).value;
    let get = localStorage.getItem("events");
    item = document.getElementById("ebent");
    item.innerHTML = get;
}

function yellow() {
    let value = localStorage.getItem("events");
    if(value===null || "") {
        alert("No Currently Data\nPlease wait for teachers to update the latest Event happenning")
    }
    else {
        alert(value);
    }
}

function active() {
    let val = prompt("Please Enter the Latest Activities related to GOVT. HSSR");
    localStorage.setItem("activities", val).value;
    let get = localStorage.getItem("activities");
    item = document.getElementById("active");
    item.innerHTML = get;
}

function orange() {
    let value = localStorage.getItem("activities");
    if(value===null) {
        alert("No Currently Data\nPlease wait for teachers to update the Activities which is happenning")
    }
    else {
        alert(value);
    }
}

function acd() {
    let val = prompt("Please Enter the Latest Acadmic Exellence related to GOVT. HSSR");
    localStorage.setItem("acdmic", val).value;
    let get = localStorage.getItem("acdmic");
    item = document.getElementById("acd");
    item.innerHTML = get;
}

function blue() {
    let value = localStorage.getItem("acdmic");
    if(value===null) {
        alert("No Currently Data\nPlease wait for teachers to update the Acdmic Exellence happenning")
    }
    else {
        alert(value);
    }
}

function TopNav() {
    let click = document.getElementById("nav");
    let bars = document.getElementById("MyLink");
    let cross = document.getElementById("closebtn");
    bars.style.display = "none";
    cross.style.display = "block";
    bars.style.left = "100%";
    cross.style.left = "85%";
    if(click.style.display = "none") {
        click.style.display = "block";
    }
  }

function closeme() {
    let click = document.getElementById("nav");
    let bars = document.getElementById("MyLink");
    let cross = document.getElementById("closebtn");
    bars.style.display = "flex";
    bars.style.left = "85%";
    cross.style.display = "none";

    if(click.style.display = "block") {
        click.style.display = "none";
    }
}