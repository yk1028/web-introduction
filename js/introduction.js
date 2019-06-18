let name = document.getElementById("name");
let story = document.getElementById("story");
let movies = document.getElementsByName("checkbox");
let button = document.getElementById("summit");
let cards = document.getElementById("cards");

let cardId = 1;

function getCardForm(cardName, cardStroy) {
    var card = document.createElement('div');
    card.id = "card" + cardId
    
    var cardLabel = document.createElement('label');
    card.appendChild(cardLabel);
    cardLabel.for = "card-name" + cardId;
    cardLabel.innerHTML = cardName;

    var cardStoryInput = document.createElement('input');
    card.appendChild(cardStoryInput);
    cardStoryInput.type = "text";
    cardStoryInput.className = "form-control"
    cardStoryInput.id = "card-story" + cardId;
    cardStoryInput.placeholder = "Enter name";
    cardStoryInput.disabled = true;
    cardStoryInput.value = cardStroy;

    var editButton = document.createElement('button');
    card.appendChild(editButton);
    editButton.type = "button";
    editButton.className = "btn btn-warning";
    editButton.id = "card-edit" + cardId;
    editButton.innerHTML = "수정";
    editButton.addEventListener("click", () => {
        if (cardStoryInput.disabled) {
            cardStoryInput.disabled = false;
        } else {
            cardStoryInput.disabled = true;
        }
    })

    var deleteButton = document.createElement('button');
    card.appendChild(deleteButton);
    deleteButton.type = "reset";
    deleteButton.className = "btn btn-danger";
    deleteButton.id = "card-delete" + cardId;
    deleteButton.innerHTML= "삭제";
    deleteButton.addEventListener("click", () => {
        deleteButton.parentNode.remove();
    })

    cardId += 1;
    return card;
}

button.addEventListener("click", () => {
    let count = 0;
    movies.forEach(element => {
        if(element.checked) count++;
    });
    let message = name.value + "님, 저와 " + count + "개의 취향이 같으시네요!";
    alert(message);
    cards.appendChild(getCardForm(name.value, story.value));
})
