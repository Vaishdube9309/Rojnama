
document.addEventListener('DOMContentLoaded', function() {
    const police_station = localStorage.getItem('police_station');
  
    const photo = localStorage.getItem('photo');
    const case_number = localStorage.getItem('case_number');
    const section = localStorage.getItem('section');
    const date1 = localStorage.getItem('date1');
    const fn_number = localStorage.getItem('fn_number');
    const presenter = localStorage.getItem('presenter');
    const last_date = localStorage.getItem('last_date');
    const months = localStorage.getItem('months');
    const next_date = localStorage.getItem('next_date');
    const amount = localStorage.getItem('amount');
    const recipient = localStorage.getItem('recipient');
    const address = localStorage.getItem('address');
    const complainant = localStorage.getItem('complainant1');
    const court_number = localStorage.getItem('court_number');
    const cr_pc = localStorage.getItem('cr_pc');
    
    document.getElementById('police_station').innerText = police_station;
    document.getElementById('police_station1').innerText = police_station;
    document.getElementById('police_station2').innerText = police_station;
    document.getElementById('police_station3').innerText = police_station;
    document.getElementById('police_station4').innerText = police_station;
    document.getElementById('police_station5').innerText = police_station;
    document.getElementById('photo').innerText = photo;

    document.getElementById('case_number').innerText = case_number;
    document.getElementById('case_number1').innerText = case_number;
    document.getElementById('case_number2').innerText = case_number;
    document.getElementById('case_number3').innerText = case_number;
    document.getElementById('case_number4').innerText = case_number;
    document.getElementById('case_number5').innerText = case_number;
    document.getElementById('case_number6').innerText = case_number;
    document.getElementById('section').innerText = section;
    document.getElementById('section1').innerText = section;
    document.getElementById('section2').innerText = section;
    document.getElementById('section3').innerText = section;
    document.getElementById('section4').innerText = section;
    document.getElementById('section5').innerText = section;
    document.getElementById('section6').innerText = section;
    document.getElementById('fn_number').innerText = fn_number;
    document.getElementById('fn_number1').innerText = fn_number;
    document.getElementById('fn_number2').innerText = fn_number;
    document.getElementById('fn_number3').innerText = fn_number;
    document.getElementById('date1').innerText = date1;
    document.getElementById('presenter').innerText = presenter;
    document.getElementById('presenter1').innerText = presenter;
    document.getElementById('presenter2').innerText = presenter;
    document.getElementById('presenter3').innerText = presenter;
    document.getElementById('presenter4').innerText = presenter;
    document.getElementById('presenter5').innerText = presenter;
    document.getElementById('presenter6').innerText = presenter;

    document.getElementById('last_date').innerText = last_date;
    document.getElementById('months').innerText = months;
    document.getElementById('months1').innerText = months;
    document.getElementById('months2').innerText = months;
    document.getElementById('months3').innerText = months;
    document.getElementById('months4').innerText = months;
    document.getElementById('months5').innerText = months;
    document.getElementById('next_date').innerText = next_date;
  
    document.getElementById('amount').innerText = amount;
    document.getElementById('amount1').innerText = amount;
    document.getElementById('amount2').innerText = amount;
    document.getElementById('amount3').innerText = amount;
    document.getElementById('amount4').innerText = amount;
    document.getElementById('amount5').innerText = amount;
    document.getElementById('recipient').innerText = recipient;
    document.getElementById('address').innerText = address;
   
    document.getElementById('complainant1').innerText = complainant;
    document.getElementById('court_number').innerText = court_number;
    document.getElementById('court_number1').innerText = court_number;
    document.getElementById('cr_pc').innerText =cr_pc;
    
});
