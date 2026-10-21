// Полностью исправленный скрипт галереи для сайта BUDAPEST* 2010
// Поддерживает динамическое появление файлов от cadr1.png до cadr50.png

document.addEventListener("DOMContentLoaded", () => {
    const galleryGrid = document.getElementById('galleryGrid');
    
    if (galleryGrid) {
        // Очищаем сетку от любых старых элементов
        galleryGrid.innerHTML = '';

        // Цикл строго от 1 до 50
        for (let i = 1; i <= 50; i++) {
            const wrapper = document.createElement('div');
            wrapper.className = 'gallery-img-wrapper';

            const img = document.createElement('img');
            img.alt = `BUDAPEST Gallery Image ${i}`;
            img.className = 'gallery-photo';
            
            // Если картинки с таким номером нет на GitHub, полностью удаляем блок из сетки
            img.onerror = function() {
                wrapper.remove();
            };

            // Сначала вставляем картинку в обертку, а обертку в сетку
            wrapper.appendChild(img);
            galleryGrid.appendChild(wrapper);

            // И только после добавления в DOM запускаем скачивание картинки
            img.src = `images/cadr${i}.png`;
        }
    }
});
