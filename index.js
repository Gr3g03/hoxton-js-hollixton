const state = {
    store: [],
    users: [],
    pages: ['home', 'Girls', 'Guys', 'Sale'],
    selectedPage: '',
    modal: ''
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
    const searchimgEL = document.createElement('img')
    searchimgEL.setAttribute('src', './assets/search.svg')
    searbuttonhAEL.append(searchimgEL)
    searchLiEL.append(searbuttonhAEL)

    const loginLiEl = document.createElement('li')
    loginLiEl.setAttribute('class', 'right-Header-list-item')
    const loginButtonEl = document.createElement('button')
    const loginimgEL = document.createElement('img')
    loginimgEL.setAttribute('src', './assets/login_person.svg')

    loginButtonEl.append(loginimgEL)
    loginLiEl.append(loginButtonEl)

    const cartLiEl = document.createElement('li')
    cartLiEl.setAttribute('class', 'right-Header-list-item')
    const cartButtonEl = document.createElement('button')
    const cartimgEL = document.createElement('img')
    cartimgEL.setAttribute('src', './assets/cart.svg')
    cartButtonEl.append(cartimgEL)
    cartLiEl.append(cartButtonEl)

    rightHeaderrUlEl.append(searchLiEL, loginLiEl, cartLiEl)
    rightHeaderSectionEl.append(rightHeaderrUlEl)
    headerEL.append(headerNavEl, rightHeaderSectionEl)
    document.body.append(headerEL)

    headerEL.innerhtml = ''


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

function renderMain() {


    const mainEl = document.createElement('main')

    const mainH2El = document.createElement('h2')
    mainH2El.textContent = 'Home'
    mainH2El.style.color = 'white'

    const mainSectionEl = document.createElement('section')
    mainSectionEl.setAttribute('class', 'product-box')
    mainEl.append(mainH2El, mainSectionEl)

    if (state.selectedPage === 'Sale') {
        for (const items of getSaleProducts()) {
            renderMainProducts(items, mainSectionEl)
        }
    }
    else if (state.selectedPage === 'Girls') {
        for (const items of getGirlsProducts()) {
            renderMainProducts(items, mainSectionEl)
        }
    }
    else if (state.selectedPage === 'Guys') {
        for (const items of getGuysProducts()) {
            renderMainProducts(items, mainSectionEl)
        }
    }

    else {
        for (const items of state.store) {
            renderMainProducts(items, mainSectionEl)
        }
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


