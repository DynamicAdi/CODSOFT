function getpass() {
    let pass = "schoolWorld";
    let value = prompt("Please enter the Password Master!");
    if (value===pass) {
        window.location = "./../admins/manage.html";
    } 
    else {
    alert("You have entered the wrong Password☠️😑\nPlease Enter the current location to access the System!")    
    }
}

function getcomp() {
    let pass = "schoolWorld";
    let value = prompt("Please Enter the Password Master!");
    if (value===pass) {
        window.location = "./../complaint/complain.html#check";
        document.getElementById("checkcomplaints").style.visibility = "visible";
    } 
    else {
    alert("You have entered the wrong Password☠️😑\nPlease Enter the current location to access the System!")    
    }
}

function complains() {
    let pass = "schoolWorld";
    let check = window.confirm("ARE YOU ADMIN OF SCHOOL WEBSITE?")
    if(check===true) {
        let yourValue = prompt("ONLY AMDINS\nPlease Enter the Password to check List of complaints");
        if(yourValue===pass) {
            document.getElementById("check").style.display = "block";
            window.location = "./complain.html#check";
        }
        else {
            alert("You have entered wrong password please get the correct one!")
        }
    }
    else {
        alert("YOU CAN'T CHECK ANYTHING🙄🙄\nBE ADMIN FIRST!");
    }
}