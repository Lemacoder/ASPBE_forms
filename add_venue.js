// Получаем элементы
const openModalButton = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeModalButton = modal.querySelector('.close');

// Функция для открытия модального окна
function openModal() {
  modal.style.display = 'block'; // Показываем модальное окно
}

// Функция для закрытия модального окна
function closeModal() {
  modal.style.display = 'none'; // Скрываем модальное окно
}

// Событие на открытие модального окна
openModalButton.addEventListener('click', openModal);

// Событие на закрытие модального окна (по кнопке "крестик")
closeModalButton.addEventListener('click', closeModal);

// Закрытие модального окна при клике вне его содержимого
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
