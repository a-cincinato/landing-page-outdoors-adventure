//Open the Menu on click
document.querySelector('.open').addEventListener('click', () => {
    document.querySelector('.nav-list').classList.add('active');
});

//Close the Menu on click
document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.nav-list').classList.remove('active');
});
