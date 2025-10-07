const provinsiSelect = document.getElementById('provinsi');
const kotaSection = document.getElementById('kota-section');
const cityCards = document.querySelectorAll('.city-card');
const wilayahInput = document.getElementById('wilayah-value');

provinsiSelect.addEventListener('change', () => {
  if (provinsiSelect.value === 'jakarta') {
    kotaSection.style.display = 'block';
  } else {
    kotaSection.style.display = 'none';
    wilayahInput.value = '';
    cityCards.forEach(c => c.classList.remove('selected'));
  }
});

cityCards.forEach(card => {
  card.addEventListener('click', () => {
    cityCards.forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    wilayahInput.value = card.dataset.value;
  });
});

function simpanAlamat() {
  const wilayah = document.getElementById('wilayah-value').value;
  const alamat = document.getElementById('alamat').value.trim();

  if (!wilayah || !alamat) {
    alert('Silakan pilih wilayah dan isi alamat lengkap Anda.');
    return;
  }

  localStorage.setItem('wilayahJakarta', wilayah);
  localStorage.setItem('alamatPengiriman', alamat);
  window.location.href = 'AbangNoneFood.html';
}