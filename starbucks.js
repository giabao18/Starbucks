const $=document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)

const drinks =$$('.thumb__img')
const drinksImg = $$('.content__imageBox__starbucks')

drinks.forEach((drink, index) => {
    const drinkImg = drinksImg[index]
    const Circle = $('.circle__logo')
    drink.onclick = function() {
        $('.content__imageBox__starbucks.active').classList.remove('active')
        drinkImg.classList.add('active')
        switch(index)
        {
            case 0:
                Circle.style.backgroundColor = '#017143'
                break;
            case 1:
                Circle.style.backgroundColor = 'rgb(227,153,157)'
                break;
            case 2:
                Circle.style.backgroundColor = 'rgb(231,190,115)'
                break;
        }
    }
})