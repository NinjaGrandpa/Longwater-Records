const createCartCard = function (album) {
  const card = document.createElement("div");
  card.setAttribute(`id`, `${album.albumName}Id`);
  card.innerHTML = `
    <div id="" class="card mb-3 bg-cream text-dark">
                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                      <div>
                        <img
                          src="${album.coverArtUrl}"
                          class="img-fluid rounded-3 cart-img" 
                          alt="${album.albumName} Cover Art" 
                          >
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
};

const createColumn = function () {
  const column = document.createElement("div");
  column.setAttribute(
    "class",
    "col-lg-3 col-md-6 mb-3 d-flex align-items-stretch"
  );
  return column;
};

const createRow = function () {
  const row = document.createElement("div");
  row.setAttribute("class", "row");
  const shop = document.getElementById("shopDiv");
  shop.appendChild(row);
  return row;
};

const createAlbumCard = function (album) {
  const card = document.createElement("div");

  const modalId = album.albumName.replace(/\s+/g, '_').replace(/'/g, '');

  card.innerHTML = `
    <div class="card bg-cream text-dark">
   
    <img
    src="${album.coverArtUrl}"
    alt="${album.albumName} Cover Art"
    class="img-fluid card-img-top btn stretched-link p-0"
    data-bs-toggle="modal" 
    data-bs-toggle="tooltip"
    title="Click For More Album Information" 
    data-bs-target="#${modalId}AlbumModal"
    />
    <div class="card-body d-flex flex-column">
    <div class="card-title mb-3">
    <h3>${album.bandName}</h3>
    <h2 class="mb-3">${album.albumName}</h2>
          </div>
          <div class="d-flex justify-content-between mt-auto">
          <h4 class="card-title"><strong>${album.price}</strong> Kr</h4>
          <button id="${album.albumName}CartButton" class="btn btn-primary">Add To Cart</button>
          </div>
          </div>
          </div>

          `;

  return card;
};

function createAlbumModal(album) {
  const modal = document.createElement("div");
  const modalId = album.albumName.replace(/\s+/g, '_').replace(/'/g, '');

  modal.innerHTML = `
  <div
            class="modal fade"
            id="${modalId}AlbumModal"
            tabindex="-1"
            aria-labelledby="albumModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header text-bg-dark">
                  <h1 class="modal-title fs-5" id="albumModalLabel">
                    ${album.albumName} - ${album.bandName}
                  </h1>
                  <button
                    type="button"
                    class="bi bi-x-lg bg-dark text-white border-0"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body text-bg-dark">
                  <iframe
                    style="border-radius: 12px"
                    src="${album.spotifyURL}"
                    width="100%"
                    height="352"
                    frameborder="0"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    consectetur facere illum aperiam explicabo nulla, impedit
                    cum necessitatibus sint! Quod magni dolorum consequuntur hic
                    doloremque perferendis enim at cumque earum.
                  </p>
                </div>
                <div class="modal-footer text-bg-dark">
                  <h1 class="me-auto"><span id="albumModalPrice">${album.price}</span> kr</h1>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    id="${album.albumName}CartButton"
                    type="button"
                    class="btn btn-primary modal-cart-button"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
  `;
  return modal;
}

function createCartAlert() {
  const alert = document.createElement("div");
  alert.setAttribute("id", "cartAlert");
  alert.setAttribute("class", "alert alert-success alert-dismissible fade show")
  alert.innerHTML = `
          <div
            class="flex-column d-flex justify-content-center align-items-center"
          >
            <div class="container-fluid alert-heading flex-row px-4">
              <button
              type="button"
              class="btn-close"
                data-bs-dismiss="alert"
              ></button>
              <strong>Product added to cart!</strong> 
              </div>
              <div
              class="d-flex row align-items-center mt-1 mx-0 px-0"
              >
              <div
              class="col-6 d-flex justify-content-center align-items-center border-dark"
              >
                <i class="bi bi-circle"></i>
                <h5 id="cartAlertAmount" class="m-0">0</h5>
                </div>
                <div class="col-6">
                <button
                  type="button"
                  class="btn"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasId"
                >
                  <span id="basketIcon" class="bi bi-basket"></span>
                  </button>
                  </div>
                  </div>
                  </div>
  `;
  return alert;
}

export {
  createCartCard,
  createColumn,
  createRow,
  createAlbumCard,
  createAlbumModal,
  createCartAlert
};
