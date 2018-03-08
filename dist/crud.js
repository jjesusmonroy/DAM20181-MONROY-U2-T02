"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Crud = /** @class */ (function () {
    function Crud() {
    }
    Crud.prototype.addElement = function (arreglo, nocontrol, nombre, apellidos, promedio, genero, fechanacimiento, activo) {
        if (fechanacimiento === void 0) { fechanacimiento = new Date(); }
        var newElement = {
            nocontrol: nocontrol,
            nombre: nombre,
            apellidos: apellidos,
            promedio: promedio,
            genero: genero,
            fechanacimiento: fechanacimiento,
            activo: activo
        };
        arreglo.push(newElement);
        console.log("Elemento agregado");
    };
    ;
    Crud.prototype.consultar = function (arreglo, nocontrol) {
        var cad = "";
        if (!nocontrol) {
            arreglo.forEach(function (element) {
                cad += element.nombre + "\n";
            });
        }
        else {
            arreglo.forEach(function (element) {
                if (element.nocontrol.match(nocontrol))
                    cad = element.nombre;
            });
        }
        return cad;
    };
    Crud.prototype.update = function (arreglo, nocontrol, uname, uapellidos, upromedio, ugenero, udate, uactivo) {
        arreglo.forEach(function (element) {
            if (element.nocontrol.match(nocontrol)) {
                element.nombre = uname,
                    element.apellidos = uapellidos,
                    element.promedio = upromedio,
                    element.genero = ugenero,
                    element.fechanacimiento = udate,
                    element.activo = uactivo;
                console.log("modified guy with nocontrol = " + nocontrol + " ");
            }
        });
    };
    Crud.prototype.delete = function (arreglo, nocontrol) {
        arreglo.forEach(function (element) {
            if (element.nocontrol.match(nocontrol)) {
                delete arreglo[arreglo.indexOf(element, 0)];
            }
        });
    };
    return Crud;
}());
exports.Crud = Crud;
