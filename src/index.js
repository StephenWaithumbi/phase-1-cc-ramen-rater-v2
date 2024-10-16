function displayRamens() {
  const ramenMenu = document.getElementById('ramen-menu');
  ramenMenu.innerHTML = ''; 

  
  fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(ramenData => {
      ramenData.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener('click', () => handleClick(ramen));
        ramenMenu.appendChild(img);
      });
    })
    .catch(error => console.error('Error fetching ramen data:', error));
}


function handleClick(ramen) {
  const detailImage = document.querySelector('.detail-image');
  const nameElement = document.querySelector('.name');
  const restaurantElement = document.querySelector('.restaurant');
  const ratingDisplay = document.getElementById('rating-display');
  const commentDisplay = document.getElementById('comment-display');

  detailImage.src = ramen.image;
  nameElement.textContent = ramen.name;
  restaurantElement.textContent = ramen.restaurant;
  ratingDisplay.textContent = ramen.rating;
  commentDisplay.textContent = ramen.comment;
}


function addSubmitListener() {
  const form = document.getElementById('new-ramen');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const newRamen = {
      name: document.getElementById('new-name').value,
      restaurant: document.getElementById('new-restaurant').value,
      image: document.getElementById('new-image').value,
      rating: document.getElementById('new-rating').value,
      comment: document.getElementById('new-comment').value,
    };

    
    const img = document.createElement('img');
    img.src = newRamen.image;
    img.alt = newRamen.name;
    img.addEventListener('click', () => handleClick(newRamen));
    
    const ramenMenu = document.getElementById('ramen-menu');
    ramenMenu.appendChild(img);
    
    form.reset();
  });
}

function main() {
  displayRamens(); 
  addSubmitListener(); 
}

document.addEventListener('DOMContentLoaded', main);
