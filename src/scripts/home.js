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
    searchTittle.innerHTML="Search by:"

    var inputContainer=document.createElement("div");
    inputContainer.classList.add("input-container");

    var inputAuthor = document.createElement("input");
    inputAuthor.type = "text";
    var inputPaint = document.createElement("input");
    inputPaint.type = "text";

    const boxView=document.createElement("div");
    boxView.classList.add("box-view");


    inputContainer.append(inputAuthor,inputPaint);
    boxSearch.append(tittleContainer, searchTittle,inputContainer);
    homeBox.append(boxSearch,boxView);
    homeContainer.append(homeBox);
   
    return homeContainer;

}

export default home; 