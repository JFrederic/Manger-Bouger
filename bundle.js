/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Consommateur_1 = __webpack_require__(1);
	var Menu_1 = __webpack_require__(2);
	var Main = (function () {
	    function Main() {
	    }
	    Main.prototype.submit = function () {
	        var data = {};
	        var taille = parseFloat(document.getElementById('taille').value);
	        var poids = parseInt(document.getElementById('poids').value);
	        var age = parseInt(document.getElementById('age').value);
	        var homme = document.getElementById('homme');
	        var sexe;
	        homme.checked ? sexe = 'homme' : sexe = 'femme';
	        return data = { taille: taille, poids: poids, age: age, sexe: sexe };
	    };
	    Main.prototype.submitMenu = function () {
	        var plat_choice = document.getElementById("plats");
	        var boisson_choice = document.getElementById("boisson");
	        var user_boisson = boisson_choice.options[boisson_choice.selectedIndex].value;
	        var user_plat = plat_choice.options[plat_choice.selectedIndex].value;
	        var menu = new Menu_1.Menu();
	        var total = menu.getCalorieNumber(user_plat, user_boisson, menu.data);
	        return document.getElementById('calorierepas').innerHTML = total + 'kcal';
	    };
	    Main.prototype.showCalories = function (data) {
	        var consommateur = new Consommateur_1.Consommateur(data.taille, data.poids, data.age, data.sexe);
	        var result = consommateur.CountNbCalorie();
	        document.getElementById('resultConsommateur').innerHTML = result.toString() + ' kcal';
	    };
	    Main.prototype.showMenuForm = function () {
	        var menu = new Menu_1.Menu();
	        var data = menu.data;
	        menu.createMenu(data);
	    };
	    Main.prototype.showIMC = function (poids, taille) {
	        return poids / Math.pow(taille, 2);
	    };
	    return Main;
	}());
	var app = new Main();
	var submit = document.getElementById('submitConsommateur');
	submit.onsubmit = function (e) {
	    e.preventDefault();
	    var form_values = app.submit();
	    console.log(form_values);
	    app.showCalories(form_values);
	};
	var submitMenu = document.getElementById('submit_menu');
	submitMenu.onsubmit = function (e) {
	    e.preventDefault();
	    app.submitMenu();
	};
	app.showMenuForm();
	var submitIMC = document.getElementById('submitIMC');
	submitIMC.onclick = function (e) {
	    e.preventDefault();
	    app.showMenuForm();
	    var imc = app.showIMC(app.submit().poids, app.submit().taille);
	    document.getElementById('imc').innerHTML = 'Votre IMC est de ' + imc.toString();
	    console.log(app.showIMC);
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	var Consommateur = (function () {
	    function Consommateur(taille, poids, age, sexe) {
	        this.taille = taille;
	        this.poids = poids;
	        this.age = age;
	        this.sexe = sexe;
	    }
	    Consommateur.prototype.CountNbCalorie = function () {
	        var nbCalorie;
	        if (this.sexe == "femme") {
	            nbCalorie = 9.740 * this.poids + 172.9 * this.taille - 4.737 * this.age + 667.051;
	        }
	        else if (this.sexe == "homme") {
	            nbCalorie = 13.707 * this.poids + 492.3 * this.taille - 6.673 * this.age + 77.607;
	        }
	        return nbCalorie;
	    };
	    return Consommateur;
	}());
	exports.Consommateur = Consommateur;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var data = __webpack_require__(3);
	var Menu = (function () {
	    function Menu() {
	        this._data = data;
	    }
	    Menu.prototype.createMenu = function (values) {
	        var props_plats = "";
	        var props_boissons = "";
	        for (var props in values.plats) {
	            var plat = document.getElementById('plats').innerHTML += "<option value=\"" + props + "\">" + props + "</option>";
	        }
	        for (var props in values.boissons) {
	            var boissons = document.getElementById('boisson').innerHTML += "<option value=\"" + props + "\">" + props + "</option>";
	        }
	    };
	    Menu.prototype.getCalorieNumber = function (plat_selected, boisson_selected, values) {
	        var plat_kcal;
	        var boisson_kcal;
	        for (var plat in values.plats) {
	            if (plat == plat_selected) {
	                plat_kcal = values.plats[plat].valeur;
	            }
	        }
	        for (var boisson in values.boissons) {
	            if (boisson == boisson_selected) {
	                boisson_kcal = values.boissons[boisson].valeur;
	            }
	        }
	        return plat_kcal + boisson_kcal;
	    };
	    Object.defineProperty(Menu.prototype, "data", {
	        get: function () {
	            return this._data;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Menu;
	}());
	exports.Menu = Menu;


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
		"plats": {
			"carry poulet": {
				"valeur": 160
			},
			"rougail saucisse": {
				"valeur": 327
			},
			"pates": {
				"valeur": 250
			},
			"pain bouchon": {
				"valeur": 1200
			},
			"riz cantonnais": {
				"valeur": 300
			}
		},
		"boissons": {
			"coca": {
				"valeur": 90
			},
			"eau": {
				"valeur": 0
			},
			"café": {
				"valeur": 0
			},
			"thé glacé": {
				"valeur": 35
			}
		}
	};

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map