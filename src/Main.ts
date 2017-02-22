import { Consommateur } from './Consommateur'
import { Menu } from './Menu'

class Main {

    constructor() { }

    public submit(): any {

        let data = {}
        let taille = parseFloat((<HTMLInputElement>document.getElementById('taille')).value);
        let poids = parseInt((<HTMLInputElement>document.getElementById('poids')).value);
        let age = parseInt((<HTMLInputElement>document.getElementById('age')).value);
        let homme = (<HTMLInputElement>document.getElementById('homme'));

        let sexe: string;
        homme.checked ? sexe = 'homme' : sexe = 'femme';

        return data = { taille, poids, age, sexe }
    }

    public submitMenu() {

        let plat_choice = document.getElementById("plats") as HTMLSelectElement;
        let boisson_choice = document.getElementById("boisson") as HTMLSelectElement;

        let user_boisson = boisson_choice.options[boisson_choice.selectedIndex].value;
        let user_plat = plat_choice.options[plat_choice.selectedIndex].value;


        const menu = new Menu()
        let total = menu.getCalorieNumber(user_plat, user_boisson, menu.data)


        return document.getElementById('calorierepas').innerHTML = total + 'kcal'

    }
    public showCalories(data: any) {
        let consommateur = new Consommateur(data.taille, data.poids, data.age, data.sexe)
        let result = consommateur.CountNbCalorie()
        document.getElementById('resultConsommateur').innerHTML = result.toString() + ' kcal';
    }

    public showMenuForm() {
        const menu = new Menu()
        let data = menu.data
        menu.createMenu(data);
    }

    public showIMC(poids: number, taille: number) {

        return poids / taille ** 2
    }

}

const app = new Main()

var submit = document.getElementById('submitConsommateur');
submit.onsubmit = e => {
    e.preventDefault()
    let form_values = app.submit()
    console.log(form_values)
    app.showCalories(form_values)
}

var submitMenu = document.getElementById('submit_menu');
submitMenu.onsubmit = e => {
    e.preventDefault()
    app.submitMenu()

}

app.showMenuForm();

var submitIMC = document.getElementById('submitIMC');
submitIMC.onclick = e => {
    e.preventDefault()
    app.showMenuForm()
    let imc = app.showIMC(app.submit().poids, app.submit().taille)
    document.getElementById('imc').innerHTML = 'Votre IMC est de ' + imc.toString()
    console.log(app.showIMC);
}

