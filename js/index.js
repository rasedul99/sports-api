const allPlayers = () => {
  document.getElementById("player-container").innerHTML = "";
  document.getElementById("spinner").style.display = "block";
  const searchValue = document.getElementById("search-box").value;

  const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) =>  showPlayerDetails(data.player));
};

const showPlayerDetails = (players) => {
  if (players) {
    document.getElementById("spinner").style.display = "none";
    for (const player of players) {
      const parent = document.getElementById("player-container");
      const div = document.createElement("div");
      div.innerHTML = `
    <div class="card border p-5">
    <div class="pro-pic ">
      <img class="w-50" src="${player.strThumb}" alt="" />
    </div>
    <h2>Name:${player.strPlayer}</h2>
    <h5>Country:${player.strNationality}</h5>
    <p></p>
    <div class="allbutton">
      <button  class="btn btn-danger">Delete</button>
      <button onclick="details('${player.idPlayer}')" class="btn btn-success">Details</button>
    </div>
  </div>
    
    `;
      parent.appendChild(div);
    }
  } else {
    document.getElementById("spinner").style.display = "block";
  }
};

const details = (id) => {
  const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => setDetails(data.players[0]));
};

const setDetails = (details) => {
  console.log(details);

  // if (details.strGender == "Male") {
  //   console.log("male");
  //   document.getElementById("male").style.display = "block";
  //   document.getElementById("female").style.display = "none";
  // } else {
  //   console.log("female");
  //   document.getElementById("male").style.display = "none";
  //   document.getElementById("female").style.display = "block";
  // }
  const detailsContainer = document.getElementById("details-container");
  detailsContainer.innerHTML = ` <h2>Name:${details.strPlayer}</h2>
  
  
  `;
};
