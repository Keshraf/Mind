const private = document.querySelector("#private");
const daily = document.querySelector("#daily");
const community = document.querySelector("#community");
const privateBtn = document.querySelector('#private-btn');
const dailyBtn = document.querySelector('#daily-btn');
const communityBtn = document.querySelector('#community-btn');


privateBtn.addEventListener('click' ,() =>{
    privateBtn.classList.remove("disabled");
    dailyBtn.classList.add("disabled");
    communityBtn.classList.add("disabled");
    private.style.display = "block";
    daily.style.display = "none";
    community.style.display = "none";
})


dailyBtn.addEventListener('click' ,() =>{
    privateBtn.classList.add("disabled");
    dailyBtn.classList.remove("disabled");
    communityBtn.classList.add("disabled");
    private.style.display = "none";
    daily.style.display = "block";
    community.style.display = "none";
})

communityBtn.addEventListener('click' ,() =>{
    privateBtn.classList.add("disabled");
    dailyBtn.classList.add("disabled");
    communityBtn.classList.remove("disabled");
    private.style.display = "none";
    daily.style.display = "none";
    community.style.display = "block";
})

