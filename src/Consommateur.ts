
export class Consommateur {

     private taille: number 
     private poids:  number
     private age: number
     private sexe: string

     constructor(taille: number, poids:number, age:number,sexe:string){
         this.taille = taille
         this.poids = poids
         this.age = age
         this.sexe = sexe
     }


     CountNbCalorie() {

        let nbCalorie: number;
        if(this.sexe == "femme") {
             nbCalorie =  9.740 * this.poids + 172.9 * this.taille - 4.737 * this.age + 667.051;
        }
        else if (this.sexe == "homme"){
             nbCalorie =  13.707 * this.poids + 492.3 * this.taille - 6.673 * this.age + 77.607;
        }
        return nbCalorie;
    }
}






