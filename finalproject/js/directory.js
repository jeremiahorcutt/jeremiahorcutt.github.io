
//getting information from JSON file to populate cards
const newURL = 'businesses.JSON';
console.log(newURL);
fetch(newURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['business'];
    for (let i = 0; i < businesses.length; i++ ) {
        let card = document.createElement('section');
        card.setAttribute("id","card" + i);
        card.setAttribute("class","card");
        let h2 = document.createElement('h2');
        let email = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let address = document.createElement('p');
        let image = document.createElement('img');

h2.textContent = businesses[i].business_name;
email.textContent = businesses[i].email; 
phone.textContent = businesses[i].phone_number; 
website.textContent = "Website"; 
address.textContent = businesses[i].address; 
website.setAttribute('href', businesses[i].website);
image.setAttribute('src', businesses[i].logo);
image.setAttribute('alt', businesses[i].business_name + " logo");
card.appendChild(image);
card.appendChild(h2);
card.appendChild(email);
card.appendChild(phone);
card.appendChild(website);
card.appendChild(address);
document.querySelector('#cardDisplay').appendChild(card);
    }
      });

//function for switching to grid view
function gridView(){
const div = document.getElementById('cardDisplay');
div.style.display = "grid";
}

//function for switching to list view
function listView(){
  const div = document.getElementById('cardDisplay');
  div.style.display = "block";  
}