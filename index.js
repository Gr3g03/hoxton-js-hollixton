const state = {
    store : []
}


function renderHeader(){
    const headerEL = document.createElement('header')

    const headerH1El = document.createElement('h1')
    headerH1El.textContent = 'Hollixton'

    const headerNavEl =  document.createElement('nav')
    const headerUlEl =  document.createElement('ul')
    const headerLiEl =  document.createElement('li')
    headerUlEl.append(headerLiEl)
    headerNavEl.append(headerUlEl)

    const leftHaderNavEl =document.createElement('nav')
    const leftHeaderUlEl = document.createElement('ul')
    const leftHeaderLiEl = document.createElement('li')
    leftHaderNavEl.append(leftHeaderUlEl)
    leftHeaderUlEl.append(leftHeaderLiEl)


    headerEL.append(headerH1El,headerNavEl,leftHaderNavEl )
    document.body.append(headerEL)
}

function renderMain(){
    const mainEl = document.createElement('main')

    const mainH2El = document.createElement('h2')
    mainH2El.textContent = 'Home'

    const mainSectionEl = document.createElement('section')
    const mainUlEl = document.createElement('ul')
    const mainLiEl = document.createElement('li')
    const mainImgEl = document.createElement('img')
    const mainH3El = document.createElement('h3')
    const mainSeconH3El = document.createElement('h3')
    mainSectionEl.append(mainUlEl)
    mainUlEl.append(mainLiEl)
    mainLiEl.append(mainImgEl,mainH3El,mainSeconH3El )


    mainEl.append(mainH2El, mainSectionEl)
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
     renderMain()
     renderFoter() 
}



render()