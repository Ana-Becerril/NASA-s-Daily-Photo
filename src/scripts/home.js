function home (){

    const homeContainer=document.createElement("div");
    homeContainer.classList.add("home-container");

    const homeBox=document.createElement("div");
    homeBox.classList.add("home-box");
   
    homeContainer.appendChild(homeBox);
   
    return homeContainer;



}

export default home; 