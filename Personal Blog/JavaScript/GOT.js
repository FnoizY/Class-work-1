    // Name: Fares Bahamdan 
    // ID: 201943050
    
async function gameOfThronesQuotes(quoteElement, characterNameElement, characterSlugElement,houseNameElement,houseSlugElement) {
    const res = await fetch("https://api.gameofthronesquotes.xyz/v1/random");
        const data = await res.json();
        quoteElement.textContent = data.sentence;
        characterNameElement.textContent = data.character.name;
        characterSlugElement.textContent = data.character.slug;
        houseNameElement.textContent = data.character.house.name;
        houseSlugElement.textContent = data.character.house.slug;
        console.log(data)
}

const quote1 = document.getElementById("Sentence");
const quote2 = document.getElementById("CName");
const quote3 = document.getElementById("CSlug")
const quote4 = document.getElementById("HName")
const quote5 = document.getElementById("HSlug")

console.log(quote1);
console.log(quote2);

gameOfThronesQuotes(quote1, quote2,quote3,quote4,quote5);