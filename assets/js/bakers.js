const carts = document.querySelectorAll('.cart-add');
const cartNav = document.querySelector('.cart-nav');

const cartul = document.querySelector('.cartul');


const input = document.querySelector('input');
console.log(input);

input.addEventListener('keyup', (e) => {
    const searchText = e.target.value;

    const prada = document.querySelectorAll('.card-body p');

    // console.log(prada[0].parentElement.parentElement);

    Array.from(prada)
    .filter((pra)=> {
        return !pra.innerText.includes(searchText)
    }).forEach((ra) => {
        ra.parentElement.parentElement.classList.add('hidden')
    })


    Array.from(prada)
    .filter((pra)=> {
        return pra.innerText.includes(searchText)
    }).forEach((ra) => {
        ra.parentElement.parentElement.classList.remove('hidden')
    })

});


// Array.from(prada)
// .filter((pra)=> {
//     return !
// })


let cartNum = parseInt(cartNav.innerText);

let carter = 1;

carts.forEach(cart=> {
    cart.addEventListener('click', ()=> {
        cartNav.innerText = carter++;
    
        console.log(cart.parentElement.parentElement.lastElementChild.innerText);
    
        cartul.innerHTML += `
        <li class="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 class="my-0">${cart.parentElement.parentElement.previousElementSibling.previousElementSibling.innerText}</h6>
          <small class="text-muted">${cart.parentElement.parentElement.previousElementSibling.innerText}</small>
        </div>
        <span class="text-muted">${cart.parentElement.parentElement.lastElementChild.innerText}</span>
      </li>
        `
    })
})

const handleFetch = async () => {
    let response = await fetch('./assets/json/bread.json');

    const data = await response.json();
}



// document.querySelector('search').addEventListener('input', filterproduct);

// function filterproduct(){
//     const searchinput= document.querySelector
//     ('searchinput');
//     const filter = searchinput.value.tolowercase();
//     const product = document.querySelectorAll('product-group-items');

//     productitems.forEach((item) =>{
//         let text = item.textContent;
//         if(text.tolowercase().include(filter.tolowercase())){
//             item.style.display = '';
//         }
//         else {
//             item.style.display = 'none';
//         }
//     });  
// }
const allProducts = document.querySelector('.allProducts');

// handleFetch = async () => {
//     let response = await fetch('https://sweet-liger-657e30.netlify.app/cakes');

//     const data =  await response.json();

//     data.forEach((dat) => {
//       allProducts.innerHTML += `
//       <div class="col searchItem" >
//       <div class="card shadow-sm">
//         <img src="${dat.imageUrl}">
//         <div class="card-body">
//           <p class="card-text product-name">${dat.name}</p>
//           <p class="card-text">${dat.description}</p>
//           <div class="d-flex justify-content-between align-items-center">
//             <div class="btn-group">
//               <button type="button" class="btn btn-sm btn-outline-danger"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shopping-cart" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//                 <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//               </svg></button>
//               <button type="button" class="btn btn-sm btn-outline-danger price-holder"> ${dat.id} </button>
//             </div>
//             <small class="text-muted"> <small></small> <strong>${dat.price}</strong> </small>
//           </div>
//         </div>
//       </div>
//     </div>
//       `
//     })
// }

const ticker = document.querySelector('.ticker');
const dateTimeLocCover = document.querySelector('.dateTimeLocCover');
const currentDate = document.querySelector('.date');
const currentTime = document.querySelector('.time');
const currentLocation = document.querySelector('.location');

// toggling the dropdown button//

ticker.addEventListener('click', (e) => {
    dateTimeLocCover.classList.toggle('displayToggle');
});

const tick = () => {
    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = 
    `
        <span>${h}</span>
        <span>${m}</span>
        <span>${s}</span>
        
    `;
    currentTime.innerHTML = html;
};
setInterval(tick, 1000);

// Showing the user's location on the page//
const findMyState = () => {
  
    const success = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;  
      const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage*en`;
  
  
      fetch(geoApiUrl)
      .then(res => res.json())
      .then(data => {
        currentLocation.textContent = " " + data.principalSubdivision + ", " + data.countryName;
      })
      .catch(err => {
        console.log(err);
      });
    }

    const error = () => {
        currentLocation.textContent = "Unable to find your location";
      }
    
      
      navigator.geolocation.getCurrentPosition(success, error);
    }

    const items = document.querySelectorAll('.nav-link')
  
    window.onload = () => {
      findMyState();
      items[0].classList.add("active");
    }
  




