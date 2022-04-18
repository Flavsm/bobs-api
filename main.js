document.querySelector("button").addEventListener("click", getFetch);

/******************************************
/* CHARACTER
/*******************************************/

const charContainer = document.querySelector(".charContainer");
const charName = document.querySelector(".charName");
const gender = document.querySelector(".gender");
const hair = document.querySelector(".hairColor");
const job = document.querySelector(".occupation");
const episode = document.querySelector(".firstEpisode");
const voiced = document.querySelector(".voicedBy");
const wiki = document.querySelector(".wikiLink");
const imgChar = document.querySelector(".imgChar");

/******************************************
/* STORE
/*******************************************/

const storeContainer = document.querySelector(".storeContainer");

const storeName = document.querySelector(".storeName");
const seasonStore = document.querySelector(".seasonStore");
const episodeStore = document.querySelector(".episodeStore");
const imgStore = document.querySelector(".imgStore");

/******************************************
/* BURGER
/*******************************************/

const burgerContainer = document.querySelector(".burgerContainer");

const burgerName = document.querySelector(".burgerName");
const price = document.querySelector(".price");
const seasonBurger = document.querySelector(".seasonBurger");
const episodeBurger = document.querySelector(".episodeBurger");

/******************************************
/* FETCH FUNCTION
/*******************************************/

function getFetch() {
  let charNum = Math.floor(Math.random() * 501);
  let storeNum = Math.round(Math.random() * 225);
  let burgerNum = Math.round(Math.random() * 333);

  let url;
  const endpoint = document.querySelector("select").value;

  endpoint == "char"
    ? (url = `https://bobsburgers-api.herokuapp.com/characters/${charNum}`)
    : endpoint == "store"
    ? (url = `https://bobsburgers-api.herokuapp.com/storeNextDoor/${storeNum}`)
    : (url = `https://bobsburgers-api.herokuapp.com/burgerOfTheDay/${burgerNum}`);

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      console.log(data.name);

      endpoint == "char"
        ? (charContainer.classList.remove("displayNone"),
          burgerContainer.classList.add("displayNone"),
          storeContainer.classList.add("displayNone"))
        : endpoint == "store"
        ? (storeContainer.classList.remove("displayNone"),
          burgerContainer.classList.add("displayNone"),
          charContainer.classList.add("displayNone"))
        : (burgerContainer.classList.remove("displayNone"),
          charContainer.classList.add("displayNone"),
          storeContainer.classList.add("displayNone"));

      /******************************************
/* CHARACTER
/*******************************************/
      imgChar.src = data.image;
      setTimeout(() => {
        charName.innerText = `Name: ${data.name}`;
        gender.innerText = `Gender: ${data.gender}`;
        hair.innerText = `Hair Color: ${data.hairColor}`;
        job.innerText = `Occupation: ${data.occupation}`;
        episode.innerText = `First Episode: ${data.firstEpisode}`;
        voiced.innerText = `Voiced By: ${data.voicedBy}`;
        wiki.innerText = `Wiki`;
        wiki.href = data.wikiUrl;
      }, 500);

      /******************************************
/* STORE
/*******************************************/
      imgStore.src = data.image;
      setTimeout(() => {
        storeName.innerText = `Name: ${data.name}`;
        seasonStore.innerText = `Season: ${data.season}`;
        episodeStore.innerText = `Episode: ${data.episode}`;
      }, 700);

      /******************************************
/* BURGER
/*******************************************/

      burgerName.innerText = `Name: ${data.name}`;
      price.innerText = `Price ${data.price}`;
      seasonBurger.innerText = `Season: ${data.season}`;
      episodeBurger.innerText = `Episode: ${data.episode}`;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

//endpoint for character name: https://bobsburgers-api.herokuapp.com/characters?name=  //Zeke or Dottie
//endpoint for character by gender: https://bobsburgers-api.herokuapp.com/characters?gender= //Female or Male
//endpoint for store next door: https://bobsburgers-api.herokuapp.com/storeNextDoor/
//enpoint for burger of the day: https://bobsburgers-api.herokuapp.com/burgerOfTheDay/

//get random char 501 https://bobsburgers-api.herokuapp.com/characters/ + random number
//get random store 225 https://bobsburgers-api.herokuapp.com/storeNextDoor/ + random number
//get random burger 333 https://bobsburgers-api.herokuapp.com/burgerOfTheDay/ + random number
