# Shelter
Двухстраничный адаптивняый сайт 

    
 🔥 [Макет в Figma](https://www.figma.com/file/Yk6EnbY63FyG2PJTFkJDMh/shelter?node-id=94-43&t=67Bqur835cMeZtLf-0)  
 ✅ [Деплой сайта](https://vishnevetskayasasha.github.io/Shelter/shelter/pages/main/index.html)

Финальный код проекта находится в ветке gh-pages

## Реализованная интерактивность: 
1. **Бургер меню**
    + при ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню;
    + при нажатии на бургер-иконку, справа плавно появляется адаптивное меню шириной 320px, бургер-иконка плавно поворачивается на 90 градусов;
    + при повторном нажатии на бургер-иконку или на свободное от бургер-меню пространство адаптивное меню плавно скрывается уезжая за правую часть экрана, бургер-иконка плавно поворачивается на 90 градусов обратно;
    + при клике по любой ссылке (интерактивной или неинтерактивной) в меню адаптивное меню плавно скрывается вправо, бургер-иконка поворачивается на 90 градусов обратно;
    + область, свободная от бургер-меню, затемняется;
    + страница под бургер-меню не прокручивается.

2. **Слайдер карусель на главной странице**
    + при нажатии на стрелки происходит переход к новому блоку элементов;
    + смена блоков происходит с соответствующей анимацией карусели (способ выполнения анимации не проверяется);
    + слайдер бесконечен, т.е. можно бесконечно много нажимать влево или вправо, и каждый раз будет прокрутка в эту сторону с новым набором карточек;
    + каждый новый слайд содержит псевдослучайный набор карточек животных, т.е. формируется из исходных объектов в случайном порядке со следующими условиями:
        - в текущем блоке слайда карточки с питомцами не повторяются;
        - в следующем блоке нет дублирования карточек с текущим блоком. Например в слайдере из 3 элементов, следующий выезжающий слайд будет содержать 3 (из 8 доступных) новых карточки питомца, таких, каких не было среди 3х карточек на предыдущем уехавшем слайде;
        - сохраняется только одно предыдущее состояние. Т.е. при последовательном переходе два раза влево, а потом два раза вправо, мы получим набор карточек, отличный от исходного.
        
3. **Реализация пагинации на странице Pets** 
    + при перезагрузке страницы всегда открывается первая страница пагинации;
    + при нажатии кнопок > или < открывается следующая или предыдущая страница пагинации соответственно;
    + при нажатии кнопок >> или << открывается последняя или первая страница пагинации соответственно;
    + при открытии первой страницы кнопки << и < неактивны;
    + при открытии последней страницы кнопки > и >> неактивны;
    + в кружке по центру указан номер текущей страницы. При переключении страниц номер меняется на актуальный.
    
4. **Реализация попап на обеих страницах**
    + попап появляется при нажатии на любое место карточки с описанием конкретного животного;
    + часть страницы вне попапа затемняется;
    + при открытии попапа вертикальный скролл страницы становится неактивным, при закрытии - снова активным;
    + при нажатии на область вокруг попапа или на кнопку с крестиком попап закрывается, при этом при нажатии на сам попап ничего не происходит;
    + кнопка с крестиком интерактивная.
