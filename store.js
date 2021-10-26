const data ='[{"name":"Red T Shirt","category":"Clothing","price":"&#8377 599","imgSrc":"images/RedTee.jpg"},{"name":"Black Shoes" , "category":"Accesories", "price":"&#8377 999", "imgSrc":"images/Blackshoes.jpg"},{"name":"Wireless Headphones", "category":"Headphones", "price":"&#8377 2599", "imgSrc":"images/WirelessHeadphones.jpg"}, {"name":"Blue Jeans", "category":"Clothing", "price":"&#8377 899", "imgSrc":"images/jeans.jpg"}, { "name":"Sunglasses", "category":"Accesories", "price":" &#8377 2370", "imgSrc":"images/Sunglasses.jpg"} , { "name":"Faux Leather Handbag","category":"Accessories", "price":"&#8377 1999", "imgSrc":"images/handbag.jpg"}, { "name":"Cricket Bat","category":"Sports Equipment", "price":"&#8377 5099", "imgSrc":"images/cricket bat.jpg"}, { "name":"Mobile Phone", "category":"Electronics", "price":"&#8377 7999",  "imgSrc":"images/MobilePhone.jpg"}]'; 
const input = JSON.parse(data);

const container = document.querySelector('.container');

const template = (item) => `
    <div class = 'item'>
    <img src="${item.imgSrc}" height=350 width=350 >
    <h2> ${item.name} </h2>
    <p class = price>${item.price}</p>
    <button class="button-primary" type="button">ADD TO CART</button>
    </div>
    </div>
`;

const populate = (arr) => {
    let content = "";
    arr.forEach((item) => {
      content += template(item);
    });
    container.innerHTML += content;
  };

  document.addEventListener('DOMContentLoaded', () => {
    populate(input);
  });






