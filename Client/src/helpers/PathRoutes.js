const PATHROUTES = {
    ROOT: '/',
    HOME: '/home',
    ABOUT: '/about',
    DETAIL: '/detail/:id',
    DETAILBASE: '/detail',
    FAVORITES: '/favorites',
    // RMCHARS: 'https://rickandmortyapi.com/api/character',
    RMCHARS: 'http://localhost:3001/rickandmorty/character',
}

// Paths que no necesitan ser protegidos:
const PATHPROTECTEDROUTES = {
    ERROR: '/error',
}

const PATHVAR = {
    IMGLOGIN: "/src/assets/RM_Main_Logo.png",
}

export { PATHROUTES, PATHPROTECTEDROUTES, PATHVAR };