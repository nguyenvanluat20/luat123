const view = {}
view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case 'registerPage':
            document.getElementById('app').innerHTML = components.registerPage
            document.getElementById('redirect-login').addEventListener('click', () => {
                view.setActiveScreen('loginPage')
            })
            break;
        case 'loginPage':
            document.getElementById('app').innerHTML = components.loginPage
            document.getElementById('redirect-register').addEventListener('click', () => {
                view.setActiveScreen('registerPage')
            })
            break;
    }
}