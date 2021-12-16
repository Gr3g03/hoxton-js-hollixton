const state = {
    store: [],
    users: null,
    pages: ['home', 'Girls', 'Guys', 'Sale'],
    selectedPage: '',
    modal: '',
    selectedProduct: null,
    search: ''
}


function getItemsFromServer() {
    return fetch('http://localhost:3000/store')
        .then(function (response) {
            return response.json()
        })
}

function getUsersFromServer() {
    return fetch('http://localhost:3000/users')
        .then(function (response) {
            return response.json()
        })
}

function getGirlsProducts() {

    return state.store.filter(items => items.type === 'Girls')

}

function getSaleProducts() {
    return state.store.filter(item => item.discountedPrice)

}

function getGuysProducts() {
    return state.store.filter(items => items.type === 'Guys')


}

function renderHeader() {
    const headerEL = document.createElement('header')

    const headerH1El = document.createElement('h1')
    headerH1El.textContent = 'Hollixton'
    headerH1El.addEventListener('click', function data() {
        state.selectedPage = 'home'
        state.selectedProduct = null
        state.search = ''
        render()
    })

    const headerNavEl = document.createElement('nav')
    headerNavEl.setAttribute('class', 'headerNavEL')

    const headerUlEl = document.createElement('ul')
    headerUlEl.setAttribute('class', 'header-ul')

    const girlsHeaderLiEl = document.createElement('li')
    girlsHeaderLiEl.setAttribute('class', 'header-list-item')
    const girlsALiEl = document.createElement('a')
    girlsALiEl.addEventListener('click', function data() {
        state.selectedPage = 'Girls'
        state.selectedProduct = null
        state.search = ''
        render()
    })

    girlsALiEl.setAttribute('href', '#')
    girlsALiEl.textContent = 'Girls'
    girlsHeaderLiEl.append(girlsALiEl)

    const guysHeaderLiEl = document.createElement('li')
    guysHeaderLiEl.setAttribute('class', 'header-list-item')
    const gusyALiEl = document.createElement('a')
    gusyALiEl.addEventListener('click', function data() {
        state.selectedPage = 'Guys'
        state.selectedProduct = null
        state.search = ''
        render()
    })
    gusyALiEl.setAttribute('href', '#')
    gusyALiEl.textContent = 'Guys'
    guysHeaderLiEl.append(gusyALiEl)

    const saleHeaderLiEl = document.createElement('li')
    saleHeaderLiEl.setAttribute('class', 'header-list-item')
    const saleALiEl = document.createElement('a')
    saleALiEl.addEventListener('click', function data() {
        state.selectedPage = 'Sale'
        state.selectedProduct = null
        state.search = ''
        render()
    })

    saleALiEl.setAttribute('href', '#')
    saleALiEl.textContent = 'Sale'
    saleHeaderLiEl.append(saleALiEl)

    headerUlEl.append(headerH1El, girlsHeaderLiEl, guysHeaderLiEl, saleHeaderLiEl)
    headerNavEl.append(headerUlEl)



    const rightHeaderSectionEl = document.createElement('section')
    rightHeaderSectionEl.setAttribute('class', 'right-HeaderNavEL')

    const rightHeaderrUlEl = document.createElement('ul')
    rightHeaderrUlEl.setAttribute('class', 'right-Header-ul')

    const searchLiEL = document.createElement('li')
    searchLiEL.setAttribute('class', 'right-Header-list-item')

    const searbuttonhAEL = document.createElement('button')
    searbuttonhAEL.setAttribute('class', 'header-buttons')
    const searchimgEL = document.createElement('img')
    searchimgEL.setAttribute('src', './assets/search.svg')
    searbuttonhAEL.addEventListener('click', function buttons() {
        state.modal = 'search'
        renderSearchBtn(searbuttonhAEL)
    })
    searbuttonhAEL.append(searchimgEL)
    searchLiEL.append(searbuttonhAEL)

    const loginLiEl = document.createElement('li')
    loginLiEl.setAttribute('class', 'right-Header-list-item')
    const loginButtonEl = document.createElement('button')
    loginButtonEl.setAttribute('class', 'header-buttons')
    const loginimgEL = document.createElement('img')
    loginimgEL.setAttribute('src', './assets/login_person.svg')
    loginLiEl.addEventListener('click', function buttons() {
        state.modal = 'login'
        renderLoginBtn(loginButtonEl)
    })

    loginButtonEl.append(loginimgEL)
    loginLiEl.append(loginButtonEl)

    const cartLiEl = document.createElement('li')
    cartLiEl.setAttribute('class', 'right-Header-list-item')
    const cartButtonEl = document.createElement('button')
    cartButtonEl.setAttribute('class', 'header-buttons')
    const cartimgEL = document.createElement('img')
    cartimgEL.setAttribute('src', './assets/cart.svg')
    cartimgEL.addEventListener('click', function buttons() {
        state.modal = 'cart'
        renderCartBtn(cartButtonEl)
    })
    cartButtonEl.append(cartimgEL)
    cartLiEl.append(cartButtonEl)

    rightHeaderrUlEl.append(searchLiEL, loginLiEl, cartLiEl)
    rightHeaderSectionEl.append(rightHeaderrUlEl)
    headerEL.append(headerNavEl, rightHeaderSectionEl)
    document.body.append(headerEL)

}

function renderSearchBtn() {

    const searchBtnWrapper = document.createElement('div')
    searchBtnWrapper.setAttribute('class', 'modal-wrapper')
    searchBtnWrapper.addEventListener('click', function () {
        state.modal = ''
        render()
    })

    const btnwrapper = document.createElement('div')
    btnwrapper.setAttribute('class', 'btn-wrapper')
    btnwrapper.addEventListener('click', function (event) {
        event.stopPropagation()
    })

    const closeModal = document.createElement('button')
    closeModal.setAttribute('class', 'modal-close-btn')
    closeModal.textContent = 'X'
    closeModal.addEventListener('click', function btn() {
        state.modal = ''
        render()
    })
    const searchBtnForm = document.createElement('form')
    searchBtnForm.setAttribute('class', 'search-btn-form')
    searchBtnForm.addEventListener('submit', function (event) {
        event.preventDefault()
        state.search = searchBtnForm.search.value
        render()
    })

    const searchBtnLabel = document.createElement('label')
    searchBtnLabel.setAttribute('for', 'search-btn-input')

    const buttonInput = document.createElement('input')
    buttonInput.setAttribute('class', 'search-btn-input')
    buttonInput.setAttribute('type', 'text')
    buttonInput.setAttribute('name', 'search')
    // buttonInput.setAttribute('placeholder', 'Search')

    searchBtnLabel.append(buttonInput)

    searchBtnForm.append(searchBtnLabel)

    const titleEL = document.createElement('h2')
    titleEL.textContent = 'search for your favourite items!'

    btnwrapper.append(closeModal, titleEL, searchBtnForm)
    searchBtnWrapper.append(btnwrapper)
    document.body.append(searchBtnWrapper)

}

function renderLoginBtn() {
    const searchBtnWrapper = document.createElement('div')
    searchBtnWrapper.setAttribute('class', 'modal-wrapper')
    searchBtnWrapper.addEventListener('click', function () {
        state.modal = ''
        render()
    })

    const btnwrapper = document.createElement('div')
    btnwrapper.setAttribute('class', 'btn-wrapper')
    btnwrapper.addEventListener('click', function (event) {
        event.stopPropagation()
    })

    const closeModal = document.createElement('button')
    closeModal.setAttribute('class', 'modal-close-btn')
    closeModal.textContent = 'X'
    closeModal.addEventListener('click', function btn() {
        state.modal = ''
        render()
    })

    const signInForm = document.createElement('form')
    signInForm.setAttribute('class', 'signin-form')
    signInForm.addEventListener('submit', function (event) {
        event.preventDefault()

        loginUser()

    })

    const emailLabel = document.createElement('label')
    emailLabel.setAttribute('name', 'emailinput')
    const pel = document.createElement('p')
    pel.textContent = 'Email'

    const emailInput = document.createElement('input')
    emailInput.setAttribute('class', 'email-input')
    emailInput.setAttribute('type', 'email')
    emailInput.setAttribute('name', 'emailinput')

    emailLabel.append(pel, emailInput)

    const passwordLabel = document.createElement('label')
    passwordLabel.setAttribute('name', 'passwbutton')
    const p2el = document.createElement('p')
    p2el.textContent = 'Password'

    const passwordInput = document.createElement('input')
    passwordInput.setAttribute('class', 'password-input')
    passwordInput.setAttribute('type', 'password')
    passwordInput.setAttribute('name', 'passwbutton')

    passwordLabel.append(p2el, passwordInput)

    const signInBtnLabel = document.createElement('label')

    const signInBtn = document.createElement('button')
    signInBtn.textContent = 'SIGN IN'
    signInBtn.setAttribute('class', 'signin-button')

    signInBtnLabel.append(signInBtn)

    const titleEL = document.createElement('h2')
    titleEL.textContent = 'login'


    signInForm.append(emailLabel, passwordLabel, signInBtnLabel)

    btnwrapper.append(closeModal, titleEL, signInForm)
    searchBtnWrapper.append(btnwrapper)
    document.body.append(searchBtnWrapper)
}

function renderCartBtn() {
    const searchBtnWrapper = document.createElement('div')
    searchBtnWrapper.setAttribute('class', 'modal-wrapper')
    searchBtnWrapper.addEventListener('click', function () {
        state.modal = ''
        render()
    })

    const btnwrapper = document.createElement('div')
    btnwrapper.setAttribute('class', 'btn-wrapper')
    btnwrapper.addEventListener('click', function (event) {
        event.stopPropagation()
    })

    const closeModal = document.createElement('button')
    closeModal.setAttribute('class', 'modal-close-btn')
    closeModal.textContent = 'X'
    closeModal.addEventListener('click', function btn() {
        state.modal = ''
        render()
    })

    const titleEL = document.createElement('h2')
    titleEL.textContent = 'cart'

    btnwrapper.append(closeModal, titleEL)
    searchBtnWrapper.append(btnwrapper)
    document.body.append(searchBtnWrapper)
}

function renderButtons() {
    if (state.modal === '') return
    if (state.modal === 'search') renderSearchBtn()
    if (state.modal === 'login') renderLoginBtn()
    if (state.modal === 'cart') renderCartBtn()
}

function newItemTag(items) {
    const daysToConsider = 11
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const msForTenDaysAgo = Date.now() - day * daysToConsider
    const msForProductDate = Date.parse(items.dateEntered)
    return msForProductDate > msForTenDaysAgo
}



function renderMainProducts(items, mainSectionEl) {
    const divContainerEl = document.createElement('div')
    divContainerEl.setAttribute('class', 'products-container')

    divContainerEl.addEventListener('click', function () {
        state.selectedProduct = items
        render()
    })

    const aMainEl = document.createElement('a')
    aMainEl.setAttribute('class', 'main-link')
    aMainEl.setAttribute('href', '#')

    const mainImgEl = document.createElement('img')
    mainImgEl.setAttribute('class', 'product-img')
    mainImgEl.setAttribute('src', items.image)
    mainImgEl.setAttribute('alt', 'product')

    const mainH3El = document.createElement('h3')
    mainH3El.setAttribute('class', 'product-name')
    mainH3El.textContent = items.name


    //              ---- Price ---
    const spanEL = document.createElement('span')
    spanEL.setAttribute('class', 'item-prices')

    const mainH4El = document.createElement('h4')
    mainH4El.setAttribute('class', 'product-price')
    mainH4El.textContent = `$${items.price}`
    mainH4El.style.color = 'gray'
    mainH4El.style.textDecoration = 'line-through'

    spanEL.append(mainH4El)

    if (items.discountedPrice) {
        const discountPrice = document.createElement('h4')
        discountPrice.setAttribute('class', 'product-price')
        discountPrice.textContent = `$${items.discountedPrice}`
        discountPrice.style.color = 'red'
        spanEL.append(discountPrice)
    }

    aMainEl.append(mainImgEl, mainH3El, spanEL)
    divContainerEl.append(aMainEl)

    if (newItemTag(items)) {
        const productTag = document.createElement('span')
        productTag.setAttribute('class', ('product-tag'))
        productTag.textContent = 'NEW'
        divContainerEl.append(productTag)
    }
    mainSectionEl.append(divContainerEl)

}

function getProductItemToDisplay(mainEl) {
    const productContainer = document.createElement('section')
    productContainer.setAttribute('class', ' product-container')

    const productDetails = document.createElement('div')
    productDetails.setAttribute('class', 'product-details')

    const productImg = document.createElement('img')
    productImg.setAttribute('class', 'product__img')
    productImg.setAttribute('src', state.selectedProduct.image)
    productImg.setAttribute('alt', state.selectedProduct.name)

    const productDescription = document.createElement('div')
    productDescription.setAttribute('class', 'product-description')

    const productName = document.createElement('h2')
    productName.setAttribute('class', 'product-name')
    productName.textContent = state.selectedProduct.name

    const addToBagBtn = document.createElement('button')
    addToBagBtn.setAttribute('class', 'add-to-bag-product')
    addToBagBtn.textContent = 'ADD TO BAG'
    addToBagBtn.addEventListener('click', function () {
        state.selectedItem = null
        render()
    })
    productDetails.append(productImg)
    productDescription.append(productName, addToBagBtn)
    productContainer.append(productDetails, productDescription)




    mainEl.append(productContainer)
}


function filterSearchedElements() {
    if (state.search !== '') {
        let productsToDisplay = state.store
        productsToDisplay = productsToDisplay.filter(products => {
            return products.name.toLowerCase().includes(state.search.toLowerCase())
        })
    }
}

// function loginUser() {
//     for (const user of state.users) {

//         let username = user.id
//         let password = user.password

//         if (username === user.id && password === user.password)
//             // {
//             alert('welcome')
//         // } else {
//         //     alert('please try again')
//         // }

//     }
// }


function renderMain() {

    const mainEl = document.createElement('main')

    const mainH2El = document.createElement('h2')
    mainH2El.textContent = 'Home'
    mainH2El.style.color = 'white'

    const mainSectionEl = document.createElement('section')
    mainSectionEl.setAttribute('class', 'product-box')

    if (state.selectedProduct !== null) {
        getProductItemToDisplay(mainEl)
    }
    else {
        if (state.selectedPage === 'Sale') {
            for (const items of getSaleProducts()) {
                filterSearchedElements()
                renderMainProducts(items, mainSectionEl)
            }
        }
        else if (state.selectedPage === 'Girls') {
            for (const items of getGirlsProducts()) {
                renderMainProducts(items, mainSectionEl)
                // filterSearchedElements()
            }
        }
        else if (state.selectedPage === 'Guys') {
            for (const items of getGuysProducts()) {
                renderMainProducts(items, mainSectionEl)
                // filterSearchedElements()
            }
        }

        else {
            for (const items of state.store) {
                renderMainProducts(items, mainSectionEl)
                // filterSearchedElements()
            }
        }
        mainEl.append(mainH2El, mainSectionEl)


    }
    document.body.append(mainEl)

}

function renderFoter() {
    const footerEl = document.createElement('footer')

    const h2FooterEL = document.createElement('h2')
    h2FooterEL.textContent = 'HOLLIXTON'
    const h2LeftFooterEL = document.createElement('h2')
    h2LeftFooterEL.textContent = ' United Kingdom'

    footerEl.append(h2FooterEL, h2LeftFooterEL)
    document.body.append(footerEl)
}

function render() {

    document.body.innerHTML = ''

    renderHeader()
    renderMain()
    renderFoter()
    renderButtons()
    filterSearchedElements()
}

function init() {
    getItemsFromServer().then(function (pushitemsToState) {
        state.store = pushitemsToState
        render()
    })

    getUsersFromServer().then(function (usersFromServer) {
        state.users = usersFromServer
    })

}

init()


