const coppyButton = document.querySelectorAll(".copy-btn");
for (const copybutton of coppyButton) {
  copybutton.addEventListener("click", function () {
    const getcopy = parseInt(document.getElementById("copy-count").innerText);
    const coppycount = getcopy + 1;
    document.getElementById("copy-count").innerText = coppycount

  });
}
const getHeatrbtn = document.querySelectorAll(".heart-btn");
for (const button of getHeatrbtn) {
  button.addEventListener("click", function () {
    const getHeaderHeart = parseInt(document.getElementById("heart").innerText);
    const totalLoveCount = getHeaderHeart + 1;
    document.getElementById("heart").innerText = totalLoveCount

  });
}
function getEliment(id){
const eliment =document.getElementById(id)
return eliment
}


const cardBtn = document.getElementsByClassName("call-btn")

for(let callcard of cardBtn){
callcard.addEventListener("click",function(){
const perservice = 20;

  let abalableCoin = parseInt(getEliment("point").innerText);
if(abalableCoin<perservice){
return alert("you hoa no point")
}

  let CurentPoint = abalableCoin - perservice;


  if (CurentPoint >= 0) {
    getEliment("point").innerText = CurentPoint;
  } else {
    getEliment("point").innerText = 0;
  }

   const EmergenyNuber =callcard.parentNode.parentNode.children[2].children[0].innerText
   const serviceName =callcard.parentNode.parentNode.children[1].children[0].innerText

   alert(`Number ${EmergenyNuber} , ${serviceName}`)
   const cardContainer = getEliment("histoy-continer");
   const newCard = document.createElement("div");
   newCard.innerHTML =`<div class="flex justify-between items-center my-4 md:my-8 shadow-2xl px-[8px] md:p-[16px]">
    <div>
<h3 class="text-10px md:text-[18px] font-light md:font-semibold">${serviceName}</h3>
<p class="text-[18px] font-normal">${EmergenyNuber}</p>
    </div>
    <div>
<p class="text-18 font-normal">11:36:58 AM</p>
    </div>
</div>`
cardContainer.append(newCard)

})
}
document.getElementById("clear-btn").addEventListener("click",function(){
   const cardContainer = getEliment("histoy-continer");
   cardContainer.innerHTML ="";
})



