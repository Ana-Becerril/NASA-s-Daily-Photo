import api from "./api";


function home (){

    const homeContainer=document.createElement("div");
    homeContainer.classList.add("home-container");

    const homeBox=document.createElement("div");
    homeBox.classList.add("home-box");

    const boxSearch=document.createElement("div");
    boxSearch.classList.add("box-search")

    const tittleContainer=document.createElement("div");
    tittleContainer.classList.add("tittle-container");
    tittleContainer.innerHTML="Find Art"

    const searchTittle=document.createElement("div")
    searchTittle.classList.add("search-tittle");
    searchTittle.innerHTML="Getting a random artwork from the artist of your choice ..."

    var inputContainer=document.createElement("div");
    inputContainer.classList.add("input-container");

    
    var btn = document.createElement("button");
    btn.innerHTML = "Search";
    btn.classList.add("btn");
    btn.addEventListener("click", function(){
        var inputValAuthor = document.getElementById("author").value;
        console.log(inputValAuthor);
        
        api(inputValAuthor);

    });

    var lblAuthor = document.createElement("Label");
    lblAuthor.classList.add("lbl-author")
    lblAuthor.innerHTML = "Artist";
    lblAuthor.setAttribute("for","author");
    var inputAuthor = document.createElement("input");
    inputAuthor.type = "text";
    inputAuthor.classList.add("iauthor")
    inputAuthor.id="author";
    inputAuthor.oninput = function () {
};
  

    const boxViewContainer=document.createElement("div");
    boxViewContainer.classList.add("box-view-container")

    const boxView=document.createElement("div");
    boxView.classList.add("box-view");

    const data=document.createElement("div");
    data.classList.add("data-paint");
    data.innerHTML="Frutero. Becerril, Ana. 2002"


    boxViewContainer.append(boxView, data);
    lblAuthor.append(inputAuthor);
    inputContainer.append(lblAuthor);
    boxSearch.append(tittleContainer, searchTittle,inputContainer, btn);
    homeBox.append(boxSearch,boxViewContainer);
    homeContainer.append(homeBox);
   
    return homeContainer;

}

export default home; 