function home (){

    const homeContainer=document.createElement("div");
    homeContainer.classList.add("home-container");

    const homeBox=document.createElement("div");
    homeBox.classList.add("home-box");

    const boxSearch=document.createElement("div");
    boxSearch.classList.add("box-search")
    const boxView=document.createElement("div");
    boxView.classList.add("box-view");
   
    homeBox.append(boxSearch,boxView);
    homeContainer.append(homeBox);
   
    return homeContainer;

}

export default home; 