const form = document.getElementById("form");   
const submit = document.getElementById("submit");  
const maincontainer = document.getElementById("main-container");

submit.addEventListener("click", (event) => {
    event.preventDefault(); 
    const Thumbnai = document.getElementById("Thumbnai").value;  
    const Title = document.getElementById("Title").value; 
    const views = document.getElementById("views").value;  
    const Channel = document.getElementById("Channel").value;  
    const Month = document.getElementById("Month").value; 
    const Duration = document.getElementById("Duration").value; 
    if (Thumbnai && Title && Channel && views && Month && Duration) {
        createCard(Thumbnai,Title, Channel, views,Month,Duration);
        alert("Your card is now created")
         
      } else {
        alert("Please fill in all fields!");
      } 

})
function formatNumber(number) {
  if (number >= 1e9) {
    return (number / 1e9).toFixed(1) + 'B';  
  }
  if (number >= 1e6) {
    return (number / 1e6).toFixed(1) + 'M';  
  }
  if (number >= 1e3) {
    return (number / 1e3).toFixed(1) + 'K';  
  }
  return number;  
}

function createCard(Thumbnai,Title,views,Channel,Month,Duration){
    const div = document.createElement("div");
    div.classList.add ("div");
    div.style.width = "100%";
    div.style.height = "50%"; 
    div.style.display="flex";
    div.style.position = "relative"

    const imgUrl = document.createElement("img");
    imgUrl.src = Thumbnai;
    imgUrl.style.width = "23%";   
    imgUrl.style.height = "auto";

    const cardTitle = document.createElement("h2");
     cardTitle.textContent = Title;

     const cardviews = document.createElement("p");
     cardviews.textContent = formatNumber(views);

     const cardCHannel = document.createElement("p");
     cardCHannel.textContent = Channel;
     
     const cardMonth = document.createElement("p");
     cardMonth.textContent = Month;

     const cardDuration = document.createElement("p");
     cardDuration.textContent = Duration;

     cardDuration.style.position = "absolute";
     cardDuration.style.top = "97px";
     cardDuration.style.left = "181px";
     cardDuration.style.backgroundColor = "#000000b8";
     cardDuration.style.color = "white";
     cardDuration.style.borderRadius ="5px";
     cardDuration.style.padding = "4px";
     cardDuration.style.fontSize= "12px";
     cardDuration.style.fontWeight= "bold";

     div.appendChild(imgUrl)
    div.appendChild(cardTitle);
    div.appendChild(cardviews);
    div.appendChild(cardCHannel);
    div.appendChild(cardMonth);
    div.appendChild(cardDuration);
    +maincontainer.appendChild(div);
}



