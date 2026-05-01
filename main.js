const searchBtn = document.getElementById('search');
const form = document.getElementById('form');
const input = document.getElementById('input');
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
