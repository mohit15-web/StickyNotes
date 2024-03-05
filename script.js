const btn = document.getElementById("button")
const text = document.getElementsByTagName("textarea")[0]

const notes = document.getElementById("notes_container")

const colorArray = [
    'linear-gradient(45deg, #ff9a9e, #fad0c4)',
    'linear-gradient(45deg, #a18cd1, #fbc2eb)',
    'linear-gradient(45deg, #4facfe, #00f2fe)',
    'linear-gradient(45deg, #34e89e, #0f3443)',
    'linear-gradient(45deg, #16a085, #f4d03f)',
    'linear-gradient(45deg, #ff6e7f, #bfe9ff)',
    'linear-gradient(45deg, #667eea, #764ba2)',
    'linear-gradient(45deg, #ff0844, #ffb199)',
    'linear-gradient(45deg, #00cdac, #8ddad5)',
    'linear-gradient(45deg, #4facfe, #00f2fe)',
    'linear-gradient(45deg, #a6ffcb, #12d8fa)',
    'linear-gradient(45deg, #feada6, #f5efef)',
    'linear-gradient(45deg, #e0c3fc, #8ec5fc)',
    'linear-gradient(45deg, #f5f7fa, #c3cfe2)',
    'linear-gradient(45deg, #fceabb, #f8b500)',
    'linear-gradient(45deg, #ffafbd, #ffc3a0)',
    'linear-gradient(45deg, #ff758c, #ff7eb3)',
    'linear-gradient(45deg, #ffe29f, #ffbcb8)',
    'linear-gradient(45deg, #d4fc79, #96e6a1)',
    'linear-gradient(45deg, #00c6fb, #005bea)'
  ];
  

function addNotes(){
    if(text.value === ""){
        alert("Enter Some Text")
    }

    let divRight = document.createElement("div")
    let pRight = document.createElement("p")
    let cross_btn = document.createElement("button")

     // Apply CSS styles to divRight
     divRight.style.position = "relative";
     divRight.style.width = "150px";
     divRight.style.height = "80px";
     divRight.style.padding = "10px";
     divRight.style.margin = "20px";
     divRight.style.fontSize = "20px";
     divRight.style.borderRadius = "10px";
     divRight.style.background = colorArray[random()];; // Example background color
     divRight.style.color = colorArray[random()];; // Example background color
 
     // Apply CSS styles to cross_btn
     cross_btn.style.backgroundColor = "red"; // Example background color
     cross_btn.style.position = "absolute";
     cross_btn.style.top = "10px";
     cross_btn.style.right = "0px";

     cross_btn.style.color = "white"; // Example text color
    //  divRight.style.width = "50px";

     cross_btn.style.border = "none"; // Remove border
     cross_btn.style.padding = "5px 10px"; // Add padding
     cross_btn.style.cursor = "pointer"; // Change cursor to pointer

    divRight.appendChild(pRight)
    divRight.appendChild(cross_btn)

    cross_btn.innerText = 'X'

    pRight.innerText = text.value;
    // div.style.backgroundColor = RandomColor

    notes.appendChild(divRight)
    text.value = ""

    cross_btn.addEventListener("click", function(){
        divRight.style.display = "none"
    })


}

function random(){
    let color = Math.floor(Math.random() * colorArray.length)
    return color
}

btn.addEventListener('click',addNotes)