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
        let h2 = document.createElement('h2');
        let email = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let address = document.createElement('p');
        let image = document.createElement('img');

h2.textContent = businesses[i].business_name;
email.textContent = businesses[i].email; 
phone.textContent = businesses[i].phone_number; 
website.textContent = businesses[i].website; 
address.textContent = businesses[i].address; 
image.setAttribute('src', businesses[i].logo);
card.appendChild(h2);
card.appendChild(email);
card.appendChild(phone);
card.appendChild(website);
card.appendChild(address);
card.appendChild(image);
document.querySelector('#cardDisplay').appendChild(card);
    }
      });