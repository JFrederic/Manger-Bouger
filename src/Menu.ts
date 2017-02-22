
declare var require: any;
const data = require('../aliments.json')

export class Menu {

    private _data: any

    constructor() {
        this._data = data
    }


    public createMenu(values: any) {

        let props_plats = ""
        let props_boissons = ""

        for (let props in values.plats) {
            let plat = document.getElementById('plats').innerHTML += `<option value="${props}">${props}</option>`
        }
        for (let props in values.boissons) {
            let boissons = document.getElementById('boisson').innerHTML += `<option value="${props}">${props}</option>`
        }
    }

    public getCalorieNumber(plat_selected: any, boisson_selected: any, values: any) {

        let plat_kcal: number
        let boisson_kcal: number


        for (let plat in values.plats) {
            if (plat == plat_selected) {
                plat_kcal = values.plats[plat].valeur
            }
        }

        for (let boisson in values.boissons) {
            if (boisson == boisson_selected) {
                boisson_kcal = values.boissons[boisson].valeur
            }
        }

        return plat_kcal + boisson_kcal
    }

    public get data(): any {
        return this._data
    }

}



