const state = {
    store : [],
    users : [],
}


function getItmesFromServer(){
    return fetch('http://localhost:3000/store')
        .then(function(response){
    return response.json()
    })
    }

function getUsersFromServer(){
    return fetch('http://localhost:3000/users')
        .then(function(response){
    return response.json()
    })
}

function getGrilsProductFromServer(){
   return fetch('http://localhost:3000/store?type=Girls')
    .then(function(resp){
    return resp.json()
})

}

function getGuysProductFromServer(){
    return fetch('http://localhost:3000/store?type=Guys')
    .then(function(resp){
    return resp.json()
})
}

function renderHeader(){
    const headerEL = document.createElement('header')

    const headerH1El = document.createElement('h1')
    headerH1El.textContent = 'Hollixton'

    const headerNavEl =  document.createElement('nav')
    headerNavEl.setAttribute('class', 'headerNavEL')

    const headerUlEl =  document.createElement('ul')
    headerUlEl.setAttribute('class', 'header-ul')

    const girlsHeaderLiEl =  document.createElement('li')
    girlsHeaderLiEl.setAttribute ('class', 'header-list-item')
    const girlsALiEl = document.createElement('a')
    girlsALiEl.setAttribute('href' ,'null')
    girlsALiEl.textContent = 'Girls'
    girlsHeaderLiEl.append(girlsALiEl)

    const guysHeaderLiEl =  document.createElement('li')
    guysHeaderLiEl.setAttribute ('class', 'header-list-item')
    const gusyALiEl = document.createElement('a')
    gusyALiEl.setAttribute('href' ,'null')
    gusyALiEl.textContent = 'Guys'
    guysHeaderLiEl.append(gusyALiEl)

    const saleHeaderLiEl =  document.createElement('li')
    saleHeaderLiEl.setAttribute ('class', 'header-list-item')
    const saleALiEl = document.createElement('a')
    saleALiEl.setAttribute('href' ,'null')
    saleALiEl.textContent = 'Sale'
    saleHeaderLiEl.append(saleALiEl)

    headerUlEl.append(headerH1El, girlsHeaderLiEl, guysHeaderLiEl, saleHeaderLiEl)
    headerNavEl.append( headerUlEl)

    // const leftHaderSectionEl =document.createElement('section')
    // leftHaderSectionEl.textContent = 'sale'
    // const leftHeaderUlEl = document.createElement('ul')
    // const leftHeaderLiEl = document.createElement('li')

    const rightHeaderSectionEl =  document.createElement('section')
    rightHeaderSectionEl.setAttribute('class', 'right-HeaderNavEL')

    const rightHeaderrUlEl =  document.createElement('ul')
    rightHeaderrUlEl.setAttribute('class', 'right-Header-ul')

    const searchLiEL =  document.createElement('li')
    searchLiEL.setAttribute ('class', 'right-Header-list-item')
    const searchAEL = document.createElement('a')
    searchAEL.setAttribute('href' ,'null')
    searchAEL.textContent = 'search'
    searchLiEL.append(searchAEL)

    const loginLiEl =  document.createElement('li')
    loginLiEl.setAttribute ('class', 'right-Header-list-item')
    const loginALiEl = document.createElement('a')
    loginALiEl.setAttribute('href' ,'null')
    loginALiEl.textContent = 'login'
    loginLiEl.append(loginALiEl)

    const cartLiEl =  document.createElement('li')
    cartLiEl.setAttribute ('class', 'right-Header-list-item')
    const cartALiEl = document.createElement('a')
    cartALiEl.setAttribute('href' ,'null')
    cartALiEl.textContent = 'cart'
    cartLiEl.append(cartALiEl)

    rightHeaderrUlEl.append(searchLiEL,loginLiEl,cartLiEl )
    rightHeaderSectionEl.append(rightHeaderrUlEl)
    headerEL.append(headerNavEl,rightHeaderSectionEl )
    document.body.append(headerEL)

    headerEL.innerhtml = ''

    
}

function renderMain(){
   
    const mainEl = document.createElement('main')

    const mainH2El = document.createElement('h2')
    mainH2El.textContent = 'Home'

    const mainSectionEl = document.createElement('section')
    mainSectionEl.setAttribute('class', 'product-box')

    for(const items of state.store){
    const divContainerEl = document.createElement('div')
    divContainerEl.setAttribute('class', 'products-container')
    
    
    const mainImgEl = document.createElement('img')
    mainImgEl.setAttribute('class', 'product-img')
    mainImgEl.setAttribute('src', items.image)
    mainImgEl.setAttribute('alt', 'product')

    const mainH3El = document.createElement('h3')
    mainH3El.setAttribute('class', 'product-name')
    mainH3El.textContent =  items.name

  
    const spanEL = document.createElement('span')
    spanEL.setAttribute('class', 'item-prices')

    if(items.hasOwnProperty('discountedPrice')){
 
    const mainH4El = document.createElement('h4')
    mainH4El.setAttribute('class','product-price')
    mainH4El.textContent =`$${items.price}` 
    mainH4El.style.color = 'gray'
    mainH4El.style.textDecoration = 'line-through'
    
    const discountPrice = document.createElement('h4')
    discountPrice.setAttribute('class','product-price')
    discountPrice.textContent =`$${items.discountedPrice}`
    discountPrice.style.color = 'red'
    

    spanEL.append(mainH4El,discountPrice )
}else {
    const mainH4El = document.createElement('h4')
    mainH4El.setAttribute('class','product-price')
    mainH4El.textContent =`$${items.price}` 

    spanEL.append(mainH4El)
}
    

   
    divContainerEl.append(mainImgEl,mainH3El,spanEL )
    mainSectionEl.append(divContainerEl)
}
    mainEl.append( mainH2El ,mainSectionEl )
    document.body.append(mainEl)

    
}

function renderFoter() {
    const footerEl = document.createElement('footer')

    const h2FooterEL = document.createElement('h2')
    h2FooterEL.textContent = 'HOLLIXTON'
    const h2LeftFooterEL = document.createElement('h2')
    h2LeftFooterEL.textContent = ' United Kingdom'

    footerEl.append(h2FooterEL,h2LeftFooterEL)
    document.body.append(footerEl)
}




function render(){

    document.body.innerhtml = ''
   

     renderHeader ()
     renderMain(state.store)
     renderFoter() 
}

function init(){
    getItmesFromServer().then(function(pushitemsToState){
        state.store = pushitemsToState
        render()
    })

    getUsersFromServer().then(function(usersFromServer){
        state.users = usersFromServer
    })

}

init()


// render()