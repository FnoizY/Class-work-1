    // Name: Fares Bahamdan 
    // ID: 201943050
  
    
// async function gameOfThronesQuotes(quoteElement, characterNameElement, characterSlugElement,houseNameElement,houseSlugElement) {
//     const res = await fetch("https://api.gameofthronesquotes.xyz/v1/random");
//         const data = await res.json();
//         quoteElement.textContent = data.sentence;
//         characterNameElement.textContent = data.character.name;
//         characterSlugElement.textContent = data.character.slug;
//         houseNameElement.textContent = data.character.house.name;
//         houseSlugElement.textContent = data.character.house.slug;
//         console.log(data)
// }

// const quote1 = document.getElementById("Sentence");
// const quote2 = document.getElementById("CName");
// const quote3 = document.getElementById("CSlug")
// const quote4 = document.getElementById("HName")
// const quote5 = document.getElementById("HSlug")

// console.log(quote1);
// console.log(quote2);

// gameOfThronesQuotes(quote1, quote2,quote3,quote4,quote5);

class GameOfThronesQuote {
    constructor(jsonData) {
        this.quoteElement = jsonData.sentence;
        this.characterNameElement = jsonData.character.name;
        this.characterSlugElement = jsonData.character.slug;
        this.houseNameElement = jsonData.character.house.name;
        this.houseSlugElement = jsonData.character.house.slug;
    }
}

(async () => {
    const res = await fetch("https://api.gameofthronesquotes.xyz/v1/random");
    const data = await res.json();
    const gotQuote = new GameOfThronesQuote(data);
    populateEvents(gotQuote);
})();


function populateEvents(gotQuote) {
    const eventsElement = document.querySelector(".events");
    const eventElement = createEvent(gotQuote);
    eventsElement.appendChild(eventElement);
}

function createEvent(gotQuote) {
    const eventString = 
        `<div>
            <table>
                <tr>
                    <th>Sentence: </th>
                    <td>${gotQuote.quoteElement}</td>
                </tr>
                <tr>
                    <th>Character Name: </th>
                    <td>${gotQuote.characterNameElement}</td>
                </tr>
                <tr>
                    <th>Character Slug: </th>
                    <td>${gotQuote.characterSlugElement}</td>
                </tr>
                <tr>
                    <th>House Name: </th>
                    <td>${gotQuote.houseNameElement}</td>
                </tr>
                <tr>
                    <th>House Slug: </th>
                    <td>${gotQuote.houseSlugElement}</td>
                </tr>
            </table>
        </div>`;

    const div = document.createElement("div");
    div.classList.add("event");
    div.innerHTML = eventString;
    return div;
}