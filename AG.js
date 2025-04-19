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
let size = document.getElementById('size')
size.addEventListener("click", function(){
    let width = document.createElement('p')
    width.textContent = a
    document.body.append(width)

    let height = document.createElement('p')
    height.textContent = b
    document.body.append(height)

    
})

