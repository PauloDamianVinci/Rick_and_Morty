const PATHROUTES = {
    ROOT: '/',
    HOME: '/home',
    ABOUT: '/about',
    DETAIL: '/detail/:id',
    FAVORITES: '/favorites',
}

// Paths que no necesitan ser protegidos:
const PATHPROTECTEDROUTES = {
    ERROR: '/error',
}

const PATHVAR = {
    IMGLOGIN: "/src/assets/RM_Main_Logo.png",
}

export { PATHROUTES, PATHPROTECTEDROUTES, PATHVAR };