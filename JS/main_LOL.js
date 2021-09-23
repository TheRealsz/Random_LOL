import axios from "axios"

// let url = `http://ddragon.leagueoflegends.com/cdn/11.18.1/data/pt_BR/champion/${championName}.json`;
let urlListChamp;
let urlChampion;
let urlChampionReturn;
let urlBackgroundChamp;
let urlBackgroundChampReturn;
let urlIconChampion;
let urlIconChampionReturn;
let retorno;
let teste;
let championsTest;
let champNameFormat;
let urlCompletChampInfo;

// Window.onload = function (){
//     getChampionList()
// }

async function getChampionList(){
    urlListChamp = "https://ddragon.leagueoflegends.com/cdn/11.18.1/data/pt_BR/champion.json"
    retorno = await axios.get(urlListChamp)
    teste = retorno.data
    championsTest = Object.keys(teste.data) 
    randomChampion(championsTest)
}


async function randomChampion(championsTest) {
    const random = Math.floor(generateRandomNumber(0, championsTest.length));
    const championName = championsTest[random]

    urlChampion = `https://ddragon.leagueoflegends.com/cdn/11.18.1/data/pt_BR/champion/${championName}.json`
    urlChampionReturn = await axios.get(urlChampion)
    const champData = urlChampionReturn.data.data
    const champReturnData = Object.keys(champData)[0]

    const champNameSpecific = champData[champReturnData].name
    const champTitle = champData[champReturnData].title
    document.getElementById("nameChamp").innerHTML = `${champNameSpecific} - ${champTitle}`

    const champTags = champData[champReturnData].tags
    const firstChampTag = champTags[0]
    document.getElementById("firstTag").innerHTML = firstChampTag

    if (champTags[1]) {
        const secondChampTag = champTags[1]
        document.getElementById("secondTag").innerHTML = secondChampTag
        document.getElementById("secondTag").style.display = "inline"
    }

    if (champTags[1] == "" || champTags[1] == undefined){
        document.getElementById("secondTag").innerHTML = ""
        document.getElementById("secondTag").style.display = "none"
        document.getElementById("firstTag").style.paddingRight = "0px"
    }

    const champStory = champData[champReturnData].lore
    document.getElementById("champStory").innerHTML = champStory

    const champSpells = champData[champReturnData].spells

    const champImgQ = champSpells[0].id
    const champImgQReturn = `https://ddragon.leagueoflegends.com/cdn/11.18.1/img/spell/${champImgQ}.png`
    document.getElementById('champQ').src = champImgQReturn
    const champQTitle = champSpells[0].name
    document.getElementById('champQTitle').innerHTML = champQTitle

    const champImgW = champSpells[1].id
    const champImgWReturn = `https://ddragon.leagueoflegends.com/cdn/11.18.1/img/spell/${champImgW}.png`
    document.getElementById('champW').src = champImgWReturn
    const champWTitle = champSpells[1].name
    document.getElementById('champWTitle').innerHTML = champWTitle

    const champImgE = champSpells[2].id
    const champImgEReturn = `https://ddragon.leagueoflegends.com/cdn/11.18.1/img/spell/${champImgE}.png`
    document.getElementById('champE').src = champImgEReturn
    const champETitle = champSpells[2].name
    document.getElementById('champETitle').innerHTML = champETitle

    const champImgR = champSpells[3].id
    const champImgRReturn = `https://ddragon.leagueoflegends.com/cdn/11.18.1/img/spell/${champImgR}.png`
    document.getElementById('champR').src = champImgRReturn
    const champRTitle = champSpells[3].name
    document.getElementById('champRTitle').innerHTML = champRTitle

    urlBackgroundChamp = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_0.jpg`
    document.getElementsByClassName('backgroundImg')[0].style.backgroundImage = `url(${urlBackgroundChamp})`; 

    urlIconChampion = `https://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/${championName}.png`
    document.getElementById('iconChampion').src = urlIconChampion

    champNameFormat = champNameSpecific.toLowerCase();
    
}
getChampionList()

function infoChamp() {
    if(champNameFormat == "nunu e willump") {
        urlCompletChampInfo = "https://www.leagueoflegends.com/pt-br/champions/nunu/"
        window.open(urlCompletChampInfo)
    } else{
        let champFormatNameURL = champNameFormat.replace(". ", "-").replace("'", "-").replace(" ", "-")
        urlCompletChampInfo = `https://www.leagueoflegends.com/pt-br/champions/${champFormatNameURL}/`
        window.open(urlCompletChampInfo)
    }    

}

function generateRandomNumber(mn, mx) { 
    return Math.random() * (mx - mn) + mn; 
} 
