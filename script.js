// - membuat teks kedalam id/class html tertentu
const judul = document.querySelector('.heading-logo');
judul.innerHTML="Hello, Welcome to Pizza Planet"

const wrapCard = document.querySelector('.wrap-card2');

const btnAll = document.querySelector('.btn-all');

// - membuat element html kedalam id/class html tertentu
btnAll.addEventListener('click', function () {
    wrapCard.classList.toggle('aktif-card')
});

// - membuat element yang dinamis berdasarkan event handler tertentu
const btn = document.querySelector('#input-btn')
btn.onclick = function () {
    const isiKomen = document.querySelector('#komen').value
    const komen = document.createElement('div');
    komen.setAttribute('class', 'komen-user');
    komen.innerHTML = '<div class="left"><img src="img/user.png" alt=""></div><div class="right"><div class="heading-komen">Anonymous</div><div class="isi-komen">' + isiKomen + '</div>';

    const tempatKomen = document.querySelector('section.konsumen div.container')
    tempatKomen.append(komen)
}