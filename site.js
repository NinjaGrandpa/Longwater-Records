import albumsJson from "./albums.json" assert { type: "json" };

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
  // If card already exists in cart increase amount by 1
  // else create new card and append

  if (existingAlbum) {
    const amount = document.getElementById(`${album.albumName}InCart`);
    amount.innerHTML = parseInt(amount.innerHTML) + 1;
  } else {
    cart.appendChild(createCartCard(album));
    const removeButton = document.getElementById(`${album.albumName}Remove`);
    removeButton.addEventListener("click", function() {
      removeFromCart(album);
    });
  }
}

function removeFromCart(album) {
  const amount = document.getElementById(`${album.albumName}InCart`);

  if (parseInt(amount.innerHTML) > 1) {
    amount.innerHTML = parseInt(amount.innerHTML) - 1;  
  } 
  else {
    document.getElementById(`${album.albumName}Id`).remove();
  }
}

function createCartCard(album) {
  const card = document.createElement("div");
  card.setAttribute(`id`,`${album.albumName}Id`)
  card.innerHTML = `
  <div id="" class="card mb-3 bg-cream text-dark">
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <div class="d-flex flex-row align-items-center">
                    <div>
                      <img
                        src="${album.coverArtUrl}"
                        class="img-fluid rounded-3" 
                        alt="Shopping item" style="width: 65px;">
                    </div>
                    <div class="ms-3">
                      <h5>${album.albumName}</h5>
                      <p class="small mb-0">${album.bandName}</p>
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center">
                    <div style="width: 50px;">
                      <h5 id="${album.albumName}InCart" class="fw-normal mb-0">1</h5>
                    </div>
                    <div style="width: 80px;">
                      <h5 class="mb-0">${album.price} kr</h5>
                    </div>
                    <a id="${album.albumName}Remove" href="#"><i class="bi bi-trash"></i></a>
                  </div>
                </div>
              </div>
            </div>
  `;
  return card;
}

function createColumn() {
  const column = document.createElement("div");
  column.setAttribute(
    "class",
    "col-lg-3 col-md-6 mb-3 d-flex align-items-stretch"
  );
  return column;
}

function createRow() {
  const row = document.createElement("div");
  row.setAttribute("class", "row");
  shop.appendChild(row);
  return row;
}

function createAlbumCard(album) {
  const card = document.createElement("div");

  card.innerHTML = `
  <div class="card bg-cream text-dark">
  <img
  src="${album.coverArtUrl}"
  alt="${album.albumName} Cover Art"
  class="img-fluid card-img-top"
  />
  <div class="card-body d-flex flex-column">
  <div class="card-title mb-3">
          <h3>${album.bandName}</h3>
          <h2 class="mb-3">${album.albumName}</h2>
        </div>
        <div class="d-flex justify-content-between mt-auto">
        <h4 class="card-title"><strong>${album.price}</strong> Kr</h4>
        <button id="${album.albumName}CartButton" class="btn btn-primary">Add to Cart</button>
        </div>
        </div>
        </div>`;

  return card;
}

function createModal(album) {
  const modal = document.createElement("div");

  modal.innerHTML = `
  <div class="modal" id="${album.albumName}Modal">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        Modal body..
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
  `;

  return modal;
}

// Visa kundvagnen.

// Lägga till och ta bort saker ur kundvagnen.
