function api(){

const displayInfo = document.querySelector('.data-paint');

fetch('https://www.rijksmuseum.nl/api/nl/collection?key=2VKRLCml&involvedMaker=Rembrandt+van+Rijn')
  .then(response => response.json())
  .then(function(response) {
   displayInfo.innerHTML=response.artObjects[0].longTitle
}).catch(Error => console.log(Error))
console.log();

}
export default api; 