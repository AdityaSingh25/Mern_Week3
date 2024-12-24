// function getAnimalData() {
//   fetch("https://fakerapi.it/api/v1/persons").then(function (response) {
//     const json = response.json().then(function (finalData) {
//       console.log(finalData);
//     });
//   });
//   console.log(resopnse);
// }


// much cleaner and use this 
async function getAnimalData() {
  const response = await fetch("https://fakerapi.it/api/v1/persons");
  //console.log(response.json());

  const finalData = await response.json();
  console.log(finalData);
}
