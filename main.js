let PHOTO_URL = 'https://jsonplaceholder.typicode.com/photos'

fetch(PHOTO_URL)
.then(response => response.json())
.then(data => photoTake(data))

function photoTake(photosVeri) {
    console.log('photos', photosVeri)

    let temp = '';
    let urunlerDiv = document.getElementById('photosVeri')
   let sayac = 0;


    photosVeri.forEach((veri) => {
       sayac++
        temp += `
        <div class="col-lg-4 col-md-6 col-xs-12">
            <div class="card">
            <h7 style="font-weight: bold; font-size: 30px;" class="display-3 text-success-emphasis">Albümler ${sayac}</h7>

                    <img src="https://picsum.photos/200/300?grayscale" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h2>Photos</h2>
                    <h5 class="card-title">${veri.title}</h5>
                    <p class="card-text"> </p>
                    <h6 class="card-title">${veri.title}</h6>
                    <a href="#" class="btn btn-primary">Detaylar</a>

            </div>
            </div>
            </div>
          `
    });

    urunlerDiv.innerHTML = temp
}
