const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// event listeners

// ==== show button
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});
// ======= close button
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});
// ==========  change theme

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");
  //    body.style.color = '#fff';
});

// ========   fill order in table
// orders.forEach(order =>{
//     const tr = document.createElement('tr');
//     const trContent =
//       <>'<td> ${order.productName} </td>
//       <td> ${order.productNumber} </td>
//       <td> ${order.paymentStatus} </td>
//       <td class="${order.shipping === 'Declined' ?'danger': order.shipping === 'pending' ? 'warning' : 'primary'}"> ${order.shipping} </td>
//       <td class="primary"> Details </td>'
//       </>;

//       tr.innerHTML = trContent;
//       document.querySelector('table tbody').appendChild(tr);

// })
