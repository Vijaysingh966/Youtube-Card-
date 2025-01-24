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
        // document.getElementById("cardForm").reset();  // Reset form after submission
      } else {
        alert("Please fill in all fields!");
      } 

})
function formatNumber(number) {
  if (number >= 1e9) {
    return (number / 1e9).toFixed(1) + 'B';  // Billion
  }
  if (number >= 1e6) {
    return (number / 1e6).toFixed(1) + 'M';  // Million
  }
  if (number >= 1e3) {
    return (number / 1e3).toFixed(1) + 'K';  // Thousand
  }
  return number;  // For numbers less than 1000
}

function createCard(Thumbnai,Title,views,Channel,Month,Duration){
    const div = document.createElement("div");
    div.classList.add ("div");
    div.style.width = "100%";
    div.style.height = "50%"; 
    div.style.display="flex"

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

     div.appendChild(imgUrl)
    div.appendChild(cardTitle);
    div.appendChild(cardviews);
    div.appendChild(cardCHannel);
    div.appendChild(cardMonth);
    div.appendChild(cardDuration);
  maincontainer.appendChild(div);
}



