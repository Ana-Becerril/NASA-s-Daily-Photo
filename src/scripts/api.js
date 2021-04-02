function api(){

const displayInfo = document.querySelector('.data-paint');

fetch('https://www.rijksmuseum.nl/api/nl/collection?key=2VKRLCml&involvedMaker=Rembrandt+van+Rijn')
  .then(response => response.json())
  .then(function(response) {
   displayInfo.innerHTML=response.artObjects[0].longTitle
}).catch(Error => console.log(Error))
console.log();

const displayImageView = document.querySelector('.box-view');
const displayImageHome = document.querySelector('.home-container')
fetch('https://www.rijksmuseum.nl/api/nl/collection?key=2VKRLCml&involvedMaker=Rembrandt+van+Rijn')
  .then(response => response.json())
  .then(function(response) {
    displayImageView.style.backgroundImage=`url(${response.artObjects[1].webImage.url})`
    displayImageHome.style.backgroundImage=`url(${response.artObjects[1].webImage.url})`
}).catch(Error => console.log(Error))
console.log();

}
export default api; 