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
/* PEST
/*******************************************/

const pestContainer = document.querySelector(".pestContainer");

const pestName = document.querySelector(".pestName");
const seasonPest = document.querySelector(".seasonPest");
const episodePest = document.querySelector(".episodePest");
const imgPest = document.querySelector(".imgPest");

/******************************************
/* CREDIT
/*******************************************/

const creditContainer = document.querySelector(".creditContainer");
const seasonCredit = document.querySelector(".seasonCredit");
const episodeCredit = document.querySelector(".episodeCredit");
const imgCredit = document.querySelector(".imgCredit");

/******************************************
/* FETCH FUNCTION
/*******************************************/

function getFetch() {
  let charNum = Math.floor(Math.random() * 501);
  let storeNum = Math.round(Math.random() * 225);
  let creditNum = Math.round(Math.random() * 228);
  let pestNum = Math.round(Math.random() * 225);

  let url;
  const endpoint = document.querySelector("select").value;

  endpoint == "char"
    ? (url = `https://bobsburgers-api.herokuapp.com/characters/${charNum}`)
    : endpoint == "store"
    ? (url = `https://bobsburgers-api.herokuapp.com/storeNextDoor/${storeNum}`)
    : endpoint == "pest"
    ? (url = `https://bobsburgers-api.herokuapp.com/pestControlTruck/${pestNum}`)
    : (url = `https://bobsburgers-api.herokuapp.com/endCreditsSequence/${creditNum}`);

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      endpoint == "char"
        ? (charContainer.classList.remove("displayNone"),
          creditContainer.classList.add("displayNone"),
          pestContainer.classList.add("displayNone"),
          storeContainer.classList.add("displayNone"))
        : endpoint == "store"
        ? (storeContainer.classList.remove("displayNone"),
          creditContainer.classList.add("displayNone"),
          pestContainer.classList.add("displayNone"),
          charContainer.classList.add("displayNone"))
        : endpoint == "pest"
        ? (pestContainer.classList.remove("displayNone"),
          storeContainer.classList.add("displayNone"),
          creditContainer.classList.add("displayNone"),
          charContainer.classList.add("displayNone"))
        : (creditContainer.classList.remove("displayNone"),
          charContainer.classList.add("displayNone"),
          storeContainer.classList.add("displayNone"),
          pestContainer.classList.add("displayNone"));

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
      }, 200);

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
      /* PEST
      /*******************************************/
      imgPest.src = data.image;
      setTimeout(() => {
        pestName.innerText = `Name: ${data.name}`;
        seasonPest.innerText = `Season: ${data.season}`;
        episodePest.innerText = `Episode: ${data.episode}`;
      }, 300);

      /******************************************
      /* CREDIT
      /*******************************************/
      imgCredit.src = data.image;
      setTimeout(() => {
        seasonCredit.innerText = `Season: ${data.season}`;
        episodeCredit.innerText = `Episode: ${data.episode}`;
      }, 300);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
