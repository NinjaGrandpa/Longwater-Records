import albumsJson from "./albums.json" assert { type: "json" };
import {
  createCartCard,
  createColumn,
  createRow,
  createAlbumCard,
  createCartAlert,
} from "./elementModels.js";

const shop = document.getElementById("shopDiv");

const initRow = createRow();
shop.appendChild(initRow);

for (const newAlbum of albumsJson) {
  const col = createColumn();
  col.appendChild(createAlbumCard(newAlbum));

  const lastRow = shop.lastChild;

  const colsInRowList = lastRow.childNodes.length;

  if (colsInRowList === 4) {
    const row = createRow();
    shop.appendChild(row);
    row.appendChild(col);
  } else {
    lastRow.appendChild(col);
  }

  const cartButton = document.getElementById(`${newAlbum.albumName}CartButton`);
  cartButton.addEventListener("click", function () {
    addAlbumToCart(newAlbum);
  });

  const albumModal = document.getElementById("albumModal");
  albumModal.addEventListener("show.bs.modal", (event) => {
    // Button that triggered the modal
    const button = event.relatedTarget;
    // Extract info from data-bs-* attributes
    const albumName = button.getAttribute("data-bs-albumName");
    const bandName = button.getAttribute("data-bs-bandName");
    const price = button.getAttribute("data-bs-price");
    const iframeURI = button.getAttribute("data-bs-iframe");
    
    // Update the modal's content.
    const modalTitle = albumModal.querySelector(".modal-title");
    const modalPrice = albumModal.querySelector("#albumModalPrice");
    const modalCartButton = albumModal.querySelector(".modal-cart-button");
    const iframeModal = albumModal.querySelector("iframe");


    modalTitle.textContent = `${albumName} - ${bandName}`;
    modalPrice.textContent = price;
    modalCartButton.id = `${albumName}CartButton`;
    iframeModal.src = iframeURI;

    modalCartEvent(newAlbum)
  });
  
}

function modalCartEvent(album) {
  const modalCartButton = document.querySelector(".modal-cart-button");
  modalCartButton.addEventListener("click", function() {
    addAlbumToCart(album);
  });
}

function addAlbumToCart(album) {
  const cart = document.getElementById("cartContainer");
  const existingAlbum = document.getElementById(`${album.albumName}Id`);

  if (existingAlbum) {
    const amount = document.getElementById(`${album.albumName}InCart`);
    amount.innerHTML = parseInt(amount.innerHTML) + 1;
  } else {
    cart.appendChild(createCartCard(album));
    const removeButton = document.getElementById(`${album.albumName}Remove`);
    removeButton.addEventListener("click", function () {
      removeFromCart(album);
    });
  }

  updateTotalCart(album.price);
  updateCartAlert(1);
}

function updateCartAlert(amount) {
  const alertContainer = document.getElementById("cartAlertContainer");
  const existingAlert = document.getElementById("cartAlert");

  if (!existingAlert) {
    const alert = createCartAlert();
    alertContainer.appendChild(alert);
  }

  const cartAlertAmount = document.getElementById("cartAlertAmount");

  cartAlertAmount.innerText =
    parseInt(cartAlertAmount.innerHTML) + parseInt(amount);
}

function removeFromCart(album) {
  const amount = document.getElementById(`${album.albumName}InCart`);

  if (parseInt(amount.innerHTML) > 1) {
    amount.innerHTML = parseInt(amount.innerHTML) - 1;
  } else {
    document.getElementById(`${album.albumName}Id`).remove();
  }

  updateTotalCart(-1 * album.price);
  updateCartAlert(-1);
}

function updateTotalCart(cost) {
  const total = document.getElementById("cartTotal");

  total.innerHTML = parseInt(total.innerHTML) + parseInt(cost);
}
