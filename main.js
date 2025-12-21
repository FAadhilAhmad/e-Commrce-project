// penambahan alert  telah di masukan ke keranjang 
const tombolBeli = document.querySelectorAll('.card-item button');

tombolBeli.forEach((beli)=> {
    beli.addEventListener('click', ()=>{
       const namaBarang = beli.parentElement.querySelector('div').innerText

        alert(namaBarang + ' udah masuk nih kekeranjang kamu!');
    });
});
