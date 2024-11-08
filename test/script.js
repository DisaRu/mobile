// Глобальные переменные
let slides = [];
let currentSlide = 0;
let ingredients = [];
let steps = [];
let recipe = '';
let videos = [];

// Предустановленные ингредиенты
const predefinedIngredients = [
    { name: "Мука пшеничная", weight: 1000, waste: 1 },
    { name: "Яйца куриные", weight: 240, waste: 12 },
    { name: "Масло сливочное", weight: 200, waste: 0 },
    { name: "Сахар песок", weight: 500, waste: 0 },
    { name: "Молоко", weight: 1000, waste: 0 },
    { name: "Дрожжи сухие", weight: 11, waste: 0 },
    { name: "Картофель", weight: 1000, waste: 25 },
    { name: "Морковь", weight: 500, waste: 20 },
    { name: "Лук репчатый", weight: 200, waste: 16 },
    { name: "Мясо говядина", weight: 1000, waste: 15 }
];

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
    initSlider();
    initIngredients();
    initTabs();
    initCookingTab();
    initRecipeTab();
    initVideoTab();
    loadFromLocalStorage();
}

// Функции для слайдера
function initSlider() {
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const addPhotoBtn = document.querySelector('.add-photo');
    const removePhotoBtn = document.querySelector('.remove-photo');

    prevBtn.addEventListener('click', () => changeSlide(-1));
    nextBtn.addEventListener('click', () => changeSlide(1));
    addPhotoBtn.addEventListener('click', addPhoto);
    removePhotoBtn.addEventListener('click', removePhoto);

    updateSlider();
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    if (currentSlide >= slides.length) currentSlide = 0;
    updateSlider();
}

function addPhoto() {
    const input = document.getElementById('photo-input');
    input.click();
    input.onchange = handlePhotoUpload;
}

function handlePhotoUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            slides.push(e.target.result);
            updateSlider();
            saveToLocalStorage();
        };
        reader.readAsDataURL(file);
    }
}

function removePhoto() {
    if (slides.length > 0) {
        slides.splice(currentSlide, 1);
        if (currentSlide >= slides.length) currentSlide = slides.length - 1;
        updateSlider();
        saveToLocalStorage();
    }
}

function updateSlider() {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    if (slides.length === 0) {
        sliderWrapper.innerHTML = '<div class="default-slide">Добавить фото</div>';
    } else {
        sliderWrapper.innerHTML = `<img src="${slides[currentSlide]}" alt="Slide">`;
    }
}

// Функции для ингредиентов
function initIngredients() {
    const addIngredientBtn = document.querySelector('.add-ingredient');
    const closeModalBtn = document.getElementById('close-ingredient-modal');
    
    addIngredientBtn.addEventListener('click', () => {
        populatePredefinedIngredients(); // Заполняем список перед открытием модального окна
        showIngredientModal();
    });
    closeModalBtn.addEventListener('click', () => {
        document.querySelector('.ingredient-modal').style.display = 'none';
    });
    
    updateIngredientsList();
}

function populatePredefinedIngredients() {
    const select = document.getElementById('ingredient-select');
    select.innerHTML = '<option value="">Выберите ингредиент</option>'; // Очищаем список перед заполнением
    predefinedIngredients.forEach(ing => {
        const option = document.createElement('option');
        option.value = ing.name;
        option.textContent = `${ing.name} (${ing.weight}г, ${ing.waste}%)`;
        option.dataset.weight = ing.weight;
        option.dataset.waste = ing.waste;
        select.appendChild(option);
    });
}

function showIngredientModal(ingredient = null) {
    const modal = document.querySelector('.ingredient-modal');
    const nameInput = document.getElementById('ingredient-name');
    const weightInput = document.getElementById('ingredient-weight');
    const wasteInput = document.getElementById('ingredient-waste');
    const select = document.getElementById('ingredient-select');
    const saveBtn = document.getElementById('save-ingredient');
    const deleteBtn = document.getElementById('delete-ingredient');

    // Очищаем предыдущие обработчики
    saveBtn.replaceWith(saveBtn.cloneNode(true));
    const newSaveBtn = document.getElementById('save-ingredient');

    if (ingredient) {
        nameInput.value = ingredient.name;
        weightInput.value = ingredient.weight;
        wasteInput.value = ingredient.waste;
        select.value = '';
    } else {
        nameInput.value = '';
        weightInput.value = '';
        wasteInput.value = '';
        select.value = '';
    }

    modal.style.display = 'block';

    if (ingredient) {
        deleteBtn.style.display = 'block';
        deleteBtn.onclick = () => {
            const index = ingredients.findIndex(i => i.name === ingredient.name);
            if (index !== -1) {
                ingredients.splice(index, 1);
                updateIngredientsList();
                modal.style.display = 'none';
                saveToLocalStorage();
            }
        };
    } else {
        deleteBtn.style.display = 'none';
    }

    // Обработчик выбора предустановленного ингредиента
    select.onchange = () => {
        if (select.value) {
            const selectedOption = select.options[select.selectedIndex];
            nameInput.value = select.value;
            weightInput.value = selectedOption.dataset.weight;
            wasteInput.value = selectedOption.dataset.waste;
        }
    };

    // Обработчик сохранения
    newSaveBtn.addEventListener('click', () => {
        const name = nameInput.value;
        const weight = weightInput.value;
        const waste = wasteInput.value;
        
        if (name && weight && waste) {
            if (ingredient) {
                const index = ingredients.findIndex(i => i.name === ingredient.name);
                ingredients[index] = { name, weight, waste };
            } else {
                ingredients.push({ name, weight, waste });
            }
            updateIngredientsList();
            modal.style.display = 'none';
            saveToLocalStorage();
        } else {
            alert('Пожалуйста, заполните все поля');
        }
    });
}

function updateIngredientsList() {
    const list = document.querySelector('.ingredients-list');
    list.innerHTML = '';
    ingredients.forEach((ingredient, index) => {
        const row = document.createElement('div');
        row.className = 'ingredient-row';
        row.innerHTML = `
            <div class="ingredient-name">${ingredient.name}</div>
            <div class="ingredient-weight">${ingredient.weight}</div>
            <div class="ingredient-waste">${ingredient.waste}</div>
            <button class="edit-ingredient"><i class="fas fa-edit"></i></button>
        `;
        row.querySelector('.edit-ingredient').addEventListener('click', () => showIngredientModal(ingredient));
        list.appendChild(row);
    });
}

// Функции для вкладок
function initTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });
}

function initCookingTab() {
    const addStepBtn = document.querySelector('.add-step');
    addStepBtn.addEventListener('click', () => showStepModal());
    updateStepsList();
}

function showStepModal(step = null) {
    const modal = document.querySelector('.step-modal');
    const textarea = document.getElementById('step-text');
    const saveBtn = document.getElementById('save-step');
    const deleteBtn = document.getElementById('delete-step');
    const closeBtn = document.getElementById('close-step-modal');

    textarea.value = step ? step.text : '';
    modal.style.display = 'block';
    deleteBtn.style.display = step ? 'inline-block' : 'none';

    saveBtn.onclick = () => {
        const text = textarea.value.trim();
        if (text) {
            if (step) {
                const index = steps.findIndex(s => s === step);
                if (index !== -1) steps[index] = { text };
            } else {
                steps.push({ text });
            }
            updateStepsList();
            modal.style.display = 'none';
            saveToLocalStorage();
        }
    };

    deleteBtn.onclick = () => {
        if (step) {
            const index = steps.findIndex(s => s === step);
            if (index !== -1) {
                steps.splice(index, 1);
                updateStepsList();
                modal.style.display = 'none';
                saveToLocalStorage();
            }
        }
    };

    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };
}

function updateStepsList() {
    const list = document.querySelector('.steps-list');
    list.innerHTML = '';
    steps.forEach((step, index) => {
        const li = document.createElement('li');
        li.textContent = step.text;
        li.addEventListener('click', () => showStepModal(step));
        list.appendChild(li);
    });
}

function initRecipeTab() {
    const recipeText = document.querySelector('.recipe-text');
    recipeText.value = recipe;
    recipeText.addEventListener('input', () => {
        recipe = recipeText.value;
        saveToLocalStorage();
    });
}

function initVideoTab() {
    const addVideoBtn = document.querySelector('.add-video');
    addVideoBtn.addEventListener('click', addVideo);
    updateVideoGallery();
}

function addVideo() {
    const input = document.getElementById('video-input');
    input.click();
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                videos.push(e.target.result);
                updateVideoGallery();
                saveToLocalStorage();
            };
            reader.readAsDataURL(file);
        }
    };
}

function updateVideoGallery() {
    const gallery = document.querySelector('.video-list');
    gallery.innerHTML = '';
    videos.forEach((video, index) => {
        const div = document.createElement('div');
        div.className = 'video-item';
        div.innerHTML = `
            <video src="${video}" controls></video>
            <button class="remove-video" data-index="${index}">Удалить</button>
        `;
        div.querySelector('.remove-video').addEventListener('click', () => {
            videos.splice(index, 1);
            updateVideoGallery();
            saveToLocalStorage();
        });
        gallery.appendChild(div);
    });
}

// Функции для сохранения и загрузки данных
function saveToLocalStorage() {
    localStorage.setItem('recipeData', JSON.stringify({
        slides,
        ingredients,
        steps,
        recipe,
        videos
    }));
}

function loadFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('recipeData'));
    if (data) {
        slides = data.slides || [];
        ingredients = data.ingredients || [];
        steps = data.steps || [];
        recipe = data.recipe || '';
        videos = data.videos || [];
        
        updateSlider();
        updateIngredientsList();
        updateStepsList();
        document.querySelector('.recipe-text').value = recipe;
        updateVideoGallery();
    }
}


function loadFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('recipeData'));
    if (data) {
        steps = data.steps || [];
        updateStepsList(); // Добавьте явный вызов обновления списка
    }
}S
initCookingTab()  
console.log('Loaded steps:', steps);