const searchBtn = document.getElementById('search');
const form = document.getElementById('form');
const input = document.getElementById('input');

const dateInput = document.querySelector('.date-input');
const dateInputOut = document.querySelector('.date-input-out');
const spanCheckIn = document.getElementById('span-checkIn');
const spanCheckOut = document.getElementById('span-checkOut');

const select = document.querySelector('.select');
const spanCity = document.getElementById('span-city');
const formTime = document.getElementById('form-time');

const calendarResult = document.getElementById('calendar-result');
const deleteCalendar = document.getElementById('delete-calendar');
const infoCalendar = document.getElementById('info-calendar');
searchBtn.addEventListener('click', function () {
    form.classList.toggle('form');
    if (!form.classList.contains('form')) {
        form.classList.add('visible');
    } else {
        form.classList.remove('visible');
    }
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData();
    let val = input.value;

    formData.append('hotel', val);
    console.log(formData.get('hotel'));
    if (formData.get('hotel')) {
        setTimeout(() => {
            input.value = '';
        }, 800);
    }
});

dateInput.addEventListener('change', function () {
    let val = dateInput.value;
    spanCheckIn.textContent = `${val}`;
});
dateInputOut.addEventListener('change', function () {
    let val = dateInputOut.value;
    spanCheckOut.textContent = `${val}`;
});
select.addEventListener('change', () => {
    let a = document.querySelector('.select').value;
    spanCity.textContent = `${a}`;
});

formTime.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData();
    let city = document.querySelector('.select').value;
    let dateIntTime = dateInput.value;
    let dateOutTime = dateInputOut.value;
    formData.append('city', city);
    formData.append('date', dateIntTime);
    formData.append('date-out', dateOutTime);
    const context = `<p class='text-calendar'>Город: ${formData.has('city') ? formData.get('city') : null}</p>
    <p class='text-calendar'>Дата заезда: ${formData.has('date') ? formData.get('date') : null}</p>
    <p class='text-calendar'>Дата выезда: ${formData.has('date-out') ? formData.get('date-out') : null}</p>
   
    `;
    if (calendarResult.classList.contains('hidden-calendar')) {
        calendarResult.classList.remove('hidden-calendar');
        calendarResult.classList.add('calendar-position');
        calendarResult.style.zIndex = 99;
    }

    infoCalendar.innerHTML = context;
});

deleteCalendar.addEventListener('click', () => {
    calendarResult.classList.add('hidden-calendar');
    calendarResult.classList.remove('calendar-position');
    calendarResult.style.zIndex = 0;
});
