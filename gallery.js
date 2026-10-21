// Скрипт для динамического заполнения галереи на сайте BUDAPEST* 2010
// Поддерживает автоматическое добавление картинок от cadr1.png до cadr50.png

document.addEventListener("DOMContentLoaded", () => {
    const galleryGrid = document.getElementById('galleryGrid');
    
    if (galleryGrid) {
        // Очищаем сетку от старых заглушек
        galleryGrid.innerHTML = '';

        // Запускаем цикл до 50 для автоматического поиска новых фото на GitHub
        for (let i = 1; i <= 50; i++) {
            const wrapper = document.createElement('div');
            wrapper.className = 'gallery-img-wrapper';

            const img = document.createElement('img');
            img.src = `images/cadr${i}.png`;
            img.alt = `BUDAPEST Gallery Image ${i}`;
            img.className = 'gallery-photo';
            
            // Если картинка успешно загрузилась, добавляем её на сайт
            img.onload = function() {
                galleryGrid.appendChild(wrapper);
            };

            // Если файла в папке images еще нет, просто игнорируем его
            img.onerror = function() {
                wrapper.remove();
            };

            wrapper.appendChild(img);
        }
    }
});
