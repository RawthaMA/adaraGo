let checkout_btn = document.getElementById('checkout__btn')
let main_div = document.querySelector('.main-div')
let checkin_div = document.querySelector('.checkin__div')
let btn2 = document.querySelector('.btn2')

let checkin_btn = document.getElementById('checkin__btn')

let checkout_div = document.querySelector('.checkout__div')
let back = document.getElementById('back')


checkout_btn.addEventListener("click", function () {
    main_div.style.display = 'none'

    checkin_div.style.display = 'block'

})

btn2.addEventListener("click", function () {
    main_div.style.display = 'flex'

    checkin_div.style.display = 'none'
})


checkin_btn.addEventListener("click", function () {
    main_div.style.display = 'none'
    checkout_div.style.display = 'block'

})

back.addEventListener("click", function () {
    main_div.style.display = 'flex'

    checkout_div.style.display = 'none'
})
let a =window.innerWidth
let b =window.innerHeight
let hw=document.querySelector('.size')
let size = document.createElement('p')
size.textContent = a
hw.append(size)

let size2 = document.createElement('p')
size2.textContent = b
hw.append(size2)

