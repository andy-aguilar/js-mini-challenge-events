/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/


/***** Deliverable 1 *****/
const topHeader = document.getElementById("header")

function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}

topHeader.addEventListener("click", function(e){
  toggleColor(e.target)
})


/***** Deliverable 2 *****/
const playerForm = document.getElementById("new-player-form")

playerForm.addEventListener("submit", function(e){
  e.preventDefault()
  // console.dir(e)
  let player = {};
  player.name = e.target.name.value;
  player.nickname = e.target.nickname.value;
  player.number = parseInt(e.target.number.value, 10);
  player.photo = e.target.photo.value;
  player.likes = 0;
  renderPlayer(player)
  e.target.reset()
})

/***** Deliverable 3 *****/

playerContainer.addEventListener("click", function(e){
  console.dir(e.target)
  if (e.target.className === "like-button"){
    let likes = e.target.parentElement.querySelector(".likes").innerText.replace(" likes", "")
    let newLikes = (parseInt(likes, 10) + 1)
    e.target.parentElement.querySelector(".likes").innerText = `${newLikes} likes`
  }
})