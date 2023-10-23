function comeON() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let clasees = document.getElementById("class").value;
    let complain = document.getElementById("complain").value;
    // Storing Data!
    localStorage.setItem("name", name);
    localStorage.setItem("phone", phone);
    localStorage.setItem("class", clasees);
    localStorage.setItem("complaint", complain);
    // Getting Data
    let get_name = localStorage.getItem("name");
    let get_phone = localStorage.getItem("phone");
    let get_class = localStorage.getItem("class");
    let get_complaint = localStorage.getItem("complaint");

    // Store of data for new Elements to print in differ file!
    let data_name = document.createTextNode(get_name);
    let data_phone = document.createTextNode(get_phone);
    let data_class = document.createTextNode(get_class);
    let data_complaint = document.createTextNode(get_complaint);

    let newElement = document.createElement("div");
    newElement.classList.add("box");
    let newh3 = document.createElement("h3");
    let button = document.createElement("button");
    button.classList.add('checked');

    
    data = `NAME: ${get_name} <br><br> CLASS: ${get_class} <br><br> NUMBER: ${get_phone} <br> <br>COMPLAINT: <br> ${get_complaint}`;
    newElement.appendChild(newh3);
    newElement.appendChild(button)
    button.innerHTML = "Checked!"
    newh3.innerHTML = data;

    let mainbox = document.getElementById("mainbox");
    mainbox.appendChild(newElement);
}