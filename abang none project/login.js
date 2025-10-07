function login() {
  const nama = document.getElementById('nama').value.trim();
  const email = document.getElementById('email').value.trim();
  const telepon = document.getElementById('telepon').value.trim();

  if (!nama || !email || !telepon) {
    alert("Harap isi semua data!");
    return;
  }

  localStorage.setItem('namaUser', nama);
  alert(`Selamat datang, ${nama}!`);
  window.location.href = 'alamat.html';
}