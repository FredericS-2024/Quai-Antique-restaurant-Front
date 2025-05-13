import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "La Galerie", "/pages/galerie.html"),
    new Route("/Signin", "Connexion", "/pages/Auth/Signin.html"),
    new Route("/Signup", "Inscription", "/pages/Auth/Signup.html"),
    new Route("/Account", "Mon Compte", "/pages/Auth/Account.html"),
    new Route("/Editpassword", "Changement de mot de passe", "/pages/Auth/Editpassword.html"),
]

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";