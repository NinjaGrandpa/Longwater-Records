// Visa listan av produkter/tjänster.

class Album {
    constructor(bandName, albumName, price, coverArt) {
        this.bandName = bandName;
        this.albumName = albumName;
        this.price = price;
        this.coverArt = coverArt;

    }

    getAlbumFromJSON() {
        var album = JSON.parse(fs.readFileSync(filePath));
        return album;
    }
}



const shop = document.getElementById("shopDiv");
const row = '<div class="row"></div>';
const col = '<div class="col-lg-3 col-md-6 mb-3 d-flex align-items-stretch"></div>';
const helaskiten = '<div class="row"><div class="col-lg-3 col-md-6 mb-3 d-flex align-items-stretch"><div class="card bg-cream text-dark"><img src="/Images/Products/Dogrel.jpg"alt=""class="img-fluid card-img-top"/><div class="card-body d-flex flex-column"><div class="card-title mb-3"><h3>Fontaines D.C.</h3><h2 class="mb-3">Dogrel</h2></div><div class="d-flex justify-content-between mt-auto"><h4 class="card-title"><strong>269</strong> Kr</h4><button class="btn btn-primary">Add to Cart</button></div></div></div></div></div></div>';

shop.innerHTML = helaskiten;

// Take the info from the album and create a card from it using variables in the class 'Album'
// Write a method that adds a new row if there are more than 4 cards in a collection

// Card Template
//<div class="row">
//
//<div class="col-lg-3 col-md-6 mb-3 d-flex align-items-stretch">
//  <div class="card bg-cream text-dark">
//    <img
//      src="/Images/Products/Dogrel.jpg"
//      alt=""
//      class="img-fluid card-img-top"
//    />
//    <div class="card-body d-flex flex-column">
//      <div class="card-title mb-3">
//        <h3>Fontaines D.C.</h3>
//        <h2 class="mb-3">Dogrel</h2>
//      </div>
//      <div class="d-flex justify-content-between mt-auto">
//        <h4 class="card-title"><strong>269</strong> Kr</h4>
//        <button class="btn btn-primary">Add to Cart</button>
//      </div>
//    </div>
//  </div>
//</div>
//
//</div>
//
//</div>

// Visa kundvagnen.



// Lägga till och ta bort saker ur kundvagnen.

