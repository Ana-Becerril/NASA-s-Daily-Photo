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
    tittleContainer.innerHTML="NASA's daily photo"

    const searchTittle=document.createElement("div")
    searchTittle.classList.add("search-tittle");
    searchTittle.innerHTML="Click on the button to see the Astronomy Picture of the Day."

    var btn = document.createElement("button");
    btn.innerHTML = "Show me";
    btn.classList.add("btn");
    btn.addEventListener("click", function(){
        
        api();
    });

    var infoBox=document.createElement("details");
    var summaryBox=document.createElement("summary")
    summaryBox.innerHTML="Click me to see more details"
    summaryBox.classList.add("summary-box")
    var paragraphDetails=document.createElement("p")
    paragraphDetails.innerHTML="The Triangulum Galaxy, a.k.a., Messier 33, is a spiral galaxy about 3 million light years from Earth. It belongs to the Local Group of galaxies that includes the Milky Way and Andromeda galaxies. Chandra's X-ray data (pink) reveal a diverse range of objects including neutron stars and black holes that are pulling material from a companion star, and supernova remnants. An optical image from the Subaru telescope in Hawaii (red, green, and blue) shows the majestic arms of this spiral galaxy that in many ways is a cousin to our own Milky Way."
    paragraphDetails.classList.add("p-details")


    const boxViewContainer=document.createElement("div");
    boxViewContainer.classList.add("box-view-container")

    const boxView=document.createElement("div");
    boxView.classList.add("box-view");

    const data=document.createElement("div");
    data.classList.add("data-paint");
    data.innerHTML="The Triangulum Galaxy"


    boxViewContainer.append(boxView, data);
    infoBox.append(summaryBox,paragraphDetails)
    boxSearch.append(tittleContainer, searchTittle, btn, infoBox);
    homeBox.append(boxSearch,boxViewContainer);
    homeContainer.append(homeBox);
   
    return homeContainer;

}

export default home; 