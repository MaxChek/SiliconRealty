const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');

dropdownTriggers.forEach(trigger => {
trigger.addEventListener('click', () => {
    const targetId = trigger.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target.classList.contains('show')) {
      target.classList.remove('show');
    } else {
      target.classList.add('show');
    }
    });
});