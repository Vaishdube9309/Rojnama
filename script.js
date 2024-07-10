
document.getElementById('application-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const police_station = document.getElementById('police_station').value;
  const case_number = document.getElementById('case_number').value;
  const photo = document.getElementById('photo').value;
  const section = document.getElementById('section').value;
  const fn_number = document.getElementById('fn_number').value;
  const date1 = document.getElementById('date1').value;
  const presenter = document.getElementById('presenter').value;
  const last_date = document.getElementById('last_date').value;
  const months = document.getElementById('months').value;
  const next_date = document.getElementById('next_date').value;
  const amount = document.getElementById('amount').value;
  const recipient = document.getElementById('recipient').value;
  const address = document.getElementById('address').value;
  const complainant = document.getElementById('complainant1').value;
  const court_number = document.getElementById('court_number').value;
  

  
  localStorage.setItem('police_station', police_station);

  localStorage.setItem('case_number', case_number);
  localStorage.setItem('photo', photo);
  localStorage.setItem('section', section);
  localStorage.setItem('date1', date1);
  localStorage.setItem('presenter', presenter);
  localStorage.setItem('last_date', last_date);
  localStorage.setItem('months', months);
  localStorage.setItem('next_date', next_date);
  localStorage.setItem('amount', amount);
  localStorage.setItem('recipient', recipient);
  localStorage.setItem('address', address);
  localStorage.setItem('complainant1', complainant);
  localStorage.setItem('court_number', court_number);
  localStorage.setItem('fn_number', fn_number);


  
  window.location.href = 'second-page.html';
});
