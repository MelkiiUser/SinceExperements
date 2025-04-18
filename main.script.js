// Функция для переключения видимости деталей эксперимента
function toggleDetails(id) {
    const details = document.getElementById(id);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

// Функция для инициализации страницы
function init() {
    // Скрываем все детали при загрузке страницы
    const detailElements = document.querySelectorAll('.details');
    detailElements.forEach(detail => {
        detail.style.display = 'none';
    });
}

// Запускаем инициализацию при загрузке страницы
window.onload = init;