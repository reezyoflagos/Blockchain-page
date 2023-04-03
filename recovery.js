const space = document.querySelector('.space');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    if (space.value === ''){
        alert('error');
    }
})