import albumsJson from "./albums.json" assert { type: "json" };

// Create template and initial divs
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
        <button class="btn btn-primary">Add to Cart</button>
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
