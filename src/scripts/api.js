function api(){

const displayDate = document.querySelector('.data-paint');
const displayImageView = document.querySelector('.box-view');
const displayImageHome = document.querySelector('.home-container');
const displayInfo = document.querySelector('.p-details');


fetch('https://api.nasa.gov/planetary/apod?api_key=UUCPtT1EMz3PWHzlytDBsHkKp1390ifdaC4deyO4&concept_tags=True&hd=True')
  .then(response => response.json())
  .then(function(response) {
    response.date.media_type;
    displayDate.innerHTML=response.title;
    displayImageView.style.backgroundImage=`url(${response.hdurl})`
    displayImageHome.style.backgroundImage=`url(${response.hdurl})`
    displayInfo.innerHTML= response.explanation;
    //console.log(response)
}).catch(Error => console.log(Error))

}
export default api; 