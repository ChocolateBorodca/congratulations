// Скрипт для динамического заполнения галереи на сайте BUDAPEST* 2010
// Этот файл нужно загрузить в репозиторий и подключить в index.html

document.addEventListener("DOMContentLoaded", () => {
    const galleryGrid = document.getElementById('galleryGrid');
    
    if (galleryGrid) {
        // Очищаем сетку перед заполнением
        galleryGrid.innerHTML = '';

        // На основе скриншотов репозитория генерируем карточки для cadr1.png - cadr12.png
        for (let i = 1; i <= 12; i++) {
            const wrapper = document.createElement('div');
            wrapper.className = 'gallery-img-wrapper';

            const img = document.createElement('img');
            img.src = `images/cadr${i}.png`;
            img.alt = `BUDAPEST Gallery Image ${i}`;
            img.className = 'gallery-photo';
            
            // Если какая-то картинка удалена или отсутствует, скрываем пустой блок
            img.onerror = function() {
                this.parentElement.style.display = 'none';
            };

            wrapper.appendChild(img);
            galleryGrid.appendChild(wrapper);
        }
    }
});
