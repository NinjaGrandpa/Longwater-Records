import albumsJson from "./albums.json" assert { type: "json" };
import {
  createCartCard,
  createColumn,
  createRow,
  createAlbumCard,
  createModal,
} from "./elementModels.js";

const shop = document.getElementById("shopDiv");

const initRow = createRow();
shop.appendChild(initRow);

for (const newAlbum of albumsJson) {
  const col = createColumn();
  col.appendChild(createAlbumCard(newAlbum));
  col.appendChild(createModal(newAlbum));

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
}

function updateTotalCart(cost) {
  const total = document.getElementById("cartTotal");

  total.innerHTML = parseInt(total.innerHTML) + parseInt(cost);
}

function removeFromCart(album) {
  const amount = document.getElementById(`${album.albumName}InCart`);

  if (parseInt(amount.innerHTML) > 1) {
    amount.innerHTML = parseInt(amount.innerHTML) - 1;
  } else {
    document.getElementById(`${album.albumName}Id`).remove();
  }

  updateTotalCart(-1 * album.price);
}

// Visa kundvagnen.

// Lägga till och ta bort saker ur kundvagnen.
