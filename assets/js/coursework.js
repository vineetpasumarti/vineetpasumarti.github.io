document.addEventListener('DOMContentLoaded', function () {
    var toggles = document.querySelectorAll('.coursework-toggle');
    toggles.forEach(function (toggle) {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            var list = this.nextElementSibling;
            list.style.display = list.style.display === 'none' ? 'block' : 'none';
        });
    });
});