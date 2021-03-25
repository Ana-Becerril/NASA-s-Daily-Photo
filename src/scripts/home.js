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

    var lblAuthor = document.createElement("Label");
    lblAuthor.classList.add("lbl-author")
    lblAuthor.innerHTML = "Author";
    lblAuthor.setAttribute("for","author");
    var inputAuthor = document.createElement("input");
    inputAuthor.type = "text";
    inputAuthor.classList.add("iauthor")
    inputAuthor.id="author"

    var lblPaint = document.createElement("Label");
    lblPaint.classList.add("lbl-paint")
    lblPaint.innerHTML = "Painting Art";
    lblPaint.setAttribute("for","paint");
    var inputPaint = document.createElement("input");
    inputPaint.type = "text";
    inputPaint.classList.add("ipaint")
    inputPaint.id="paint"

    var btn = document.createElement("button");
    btn.innerHTML = "Search";
    btn.classList.add("btn");
    btn.addEventListener("click", function(){
        var inputValAuthor = document.getElementById("author").value;
        var inputValPaint = document.getElementById("paint").value;

        console.log(inputValAuthor, inputValPaint);

    })

    const boxView=document.createElement("div");
    boxView.classList.add("box-view");


    lblPaint.append(inputPaint);
    lblAuthor.append(inputAuthor);
    inputContainer.append(lblAuthor, lblPaint);
    boxSearch.append(tittleContainer, searchTittle,inputContainer, btn);
    homeBox.append(boxSearch,boxView);
    homeContainer.append(homeBox);
   
    return homeContainer;

}

export default home; 