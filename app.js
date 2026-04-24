document.addEventListener('DOMContentLoaded', () => {
    const subtitle = document.getElementById('subtitle');
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) greeting = 'Good morning!';
    else if (hour < 18) greeting = 'Good afternoon!';
    else greeting = 'Good evening!';

    subtitle.textContent = greeting;
});
