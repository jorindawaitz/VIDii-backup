// JavaScript Document
console.log("Howdy!");


var stuurWiel = document.getElementById("stuurwiel"); // document.querySelector("main > img");
var mickeyTekst_id = document.getElementById("mickeyTekst");
var mickeyTitel_id = document.getElementById("mickeyTitel");

stuurWiel.addEventListener("click", draaienMaar);

function draaienMaar() {
    stuurWiel.classList.add("draaien");
    // console.log(mickeyNummer);
}

var mickey = document.querySelector("main section img");
var mickeyCollectie = ["Mickey.01.png", "Mickey.02.png", "Mickey.03.png", "Mickey.04.png", "Mickey.05.png", "Mickey.06.png", "Mickey.07.png"];
var mickeyTekst = ["Mickey's first appearance in the short 'plane crazy'. Mortimer mouse had been Walt Disney original name for the character before his wife convinced him to change it.", 
"Redesigned to look cuter and more appealing to the audience. This version of mickey first appeared in 'steamboat willie'. It's release date is celebrated as mickey's birthday.",
"Mickey is now in color! After the short film the band concert. His old pals Donald duck and goofy accompanied him more often, forming the famous comic trio.",
"He is now given white eyes with pupils. A Caucasian skin colored face and more realistic ears that change with perspective. His body becomes thinner and more flexible and in some animated features he appeared without tail.",
"Due to his rising popularity, he became a daily children's tv persona in 'mickey mouse club'. A live -action Disney show that ran from 1955 to 1996. The most noticeable feature of this design are the eyebrows.",
"In fact. It was first shown in 1939 animated short 'the pointer'. But is most famous for appearing in the character's first full-length film 'fantasia' in 1940. It was temporary replaced by the two previous designs but returned in 'mickey's Christmas carol', 1983.",
"Since June 28, 2013, Disney channel has been airing new 3-minute mickey mouse short's. The newest design combines elements of mickey's 30's look with a contemporary twist."];
var mickeyTitel = ["Mickey 1928", "Mickey 1928 (late)", "Mickey 1935", "Mickey 1941", "Mickey 1953", "Mickey 1939-1940 & 1983-2012", "Mickey 2013"];

var mickeyNummer = 0;

function toonMickey() {

setTimeout(function() {
        stuurWiel.classList.remove("draaien");
        mickeyNummer += 1;
        if (mickeyNummer >= mickeyCollectie.length) mickeyNummer=0;
        mickey.src="./images/" + mickeyCollectie[mickeyNummer];
        mickeyTekst_id.textContent = mickeyTekst[mickeyNummer];
        mickeyTitel_id.textContent = mickeyTitel[mickeyNummer];
    }, 2000);
}

stuurWiel.addEventListener("click", toonMickey);

// var mickey_nummer = 1;
// function toonVolgendeMickey() {
//     if (mickey_nummer == 10) {
//         mickey_nummer = 0;
//     }
//     mickey_nummer = mickey_nummer + 1;
//     toonMickey(mickey_nummer);
// }

// function toonMickey( nummer ) {
//    // console.log(nummer);
//    document.getElementById("mickey1").style.display="none";
//    document.getElementById("tekst1").style.display="none";

//    document.getElementById("mickey2").style.display="none";
//    document.getElementById("tekst2").style.display="none";

//    document.getElementById("mickey3").style.display="none";
//    document.getElementById("tekst3").style.display="none";

//    document.getElementById("mickey4").style.display="none";
//    document.getElementById("tekst4").style.display="none";

//    document.getElementById("mickey5").style.display="none";
//    document.getElementById("tekst5").style.display="none";

//    document.getElementById("mickey6").style.display="none";
//    document.getElementById("tekst6").style.display="none";

//    document.getElementById("mickey7").style.display="none";
//    document.getElementById("tekst7").style.display="none";

//    document.getElementById("mickey8").style.display="none";
//    document.getElementById("tekst8").style.display="none";

//    document.getElementById("mickey9").style.display="none";
//    document.getElementById("tekst9").style.display="none";

//    document.getElementById("mickey10").style.display="none";
//    document.getElementById("tekst10").style.display="none";


//    document.getElementById("mickey" + nummer).style.display="block";
//    document.getElementById("tekst" + nummer).style.display="block";
   
// }

// var mickey = document.getElementById("mickey-foto");
