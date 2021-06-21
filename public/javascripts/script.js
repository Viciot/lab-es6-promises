// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
/*for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
}
*/

// Iteration 1 using `.then()`
addFood(steak[0], '#steak')
.then(() =>addFood(steak[1], '#steak'))
.then(() =>addFood(steak[2], '#steak'))
.then(() =>addFood(steak[3], '#steak'))
.then(() =>addFood(steak[4], '#steak'))
.then(() =>addFood(steak[5], '#steak'))
.then(() =>addFood(steak[6], '#steak'))
.then(() =>addFood(steak[7], '#steak'))
 
 


// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes')
.then(() =>addFood(mashPotatoes[1], '#mashPotatoes'))
.then(() =>addFood(mashPotatoes[2], '#mashPotatoes'))
.then(() =>addFood(mashPotatoes[3], '#mashPotatoes'))
.then(() =>addFood(mashPotatoes[4], '#mashPotatoes'))



// itereation 3 const 
addFood(brusselSprouts[0], '#brusselSprouts')
.then(() =>addFood(brusselSprouts[1], '#brusselSprouts'))
.then(() =>addFood(brusselSprouts[2], '#brusselSprouts'))
.then(() =>addFood(brusselSprouts[3], '#brusselSprouts'))
.then(() =>addFood(brusselSprouts[4], '#brusselSprouts'))
.then(() =>addFood(brusselSprouts[5], '#brusselSprouts'))
.then(() =>addFood(brusselSprouts[6], '#brusselSprouts'))
.then(() =>addFood(brusselSprouts[7], '#brusselSprouts'))
.then(() =>addFood(brusselSprouts[8], '#brusselSprouts'))


// bonus 1

/*
function addPicture(){
  const myTable = document.getElementById("table")
  myTable.innerHTML = `
  <myTable id="table">
   <tr>
    <td><img src="${mashPotatoes.jpg} alt=""></td>
  </tr>
  <img src="${mashPotatoes.jpg} alt="">
  `;
}
*/

/*
document.getElementById("body").innerHTML = `
<tr>
      <td>Body 1</td>
      <td>Body 2</td>
</tr>
`;
*/

addImage(table[0], '#table')
.then(() =>addImage(brusselSprouts[1], '#brusselSprouts'))