function submitForm(e){
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  // Simulated submission
  document.getElementById('formResult').textContent = 'Köszönjük! Üzenetedet megkaptuk (szimulált).';
  form.reset();
}
