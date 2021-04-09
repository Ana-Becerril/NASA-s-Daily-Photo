function api(userValue){

const displayInfo = document.querySelector('.data-paint');
const displayImageView = document.querySelector('.box-view');
const displayImageHome = document.querySelector('.home-container')


fetch(`https://www.rijksmuseum.nl/api/nl/collection?key=2VKRLCml&involvedMaker=${userValue}`)
  .then(response => response.json())
  .then(function(response) {
    var arr= response.artObjects;
    var randomItem = arr[Math.floor(Math.random()*arr.length)];
    displayInfo.innerHTML=response.artObjects[randomItem].longTitle
    displayImageView.style.backgroundImage=`url(${response.artObjects[randomItem].webImage.url})`
    displayImageHome.style.backgroundImage=`url(${response.artObjects[randomItem].webImage.url})`
    console.log(response)
}).catch(Error => console.log(Error))
console.log();

}
export default api; 