/**
 * функция валидауции данных, приходящих с сервера 
 * @param {object} pet  данные питомца
 * @throws {TypeError} в случае невалидных данных
 * @returns {boolean} в случае успеха
 */
function validatePet(pet) {
    Object.keys(pet).forEach((key) => {
        if((typeof (pet[key]) === "string" && pet[key] === "") && Array.isArray(pet[key]) === false) {
            throw TypeError(`Pet error. Field ${key} is invalid.`) // конкретное поле невалидно
        }
    });

    return true;
}

export { validatePet }