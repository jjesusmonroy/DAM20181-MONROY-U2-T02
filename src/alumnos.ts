import { Crud } from "./crud";

interface Alumno{
    nocontrol: string,
    nombre: string,
    apellidos:string,
    promedio: number,
    genero: string,
    fechanacimiento: Date,
    activo: boolean
}

var arreglo = Array<Alumno>();

var crud = new Crud();
var date = new Date();
date.setDate(3/28/1995);
crud.addElement(arreglo,'14400968','jesus','monroy',
100,'machoalfa',date,true);
date.setDate(5/26/1996);
crud.addElement(arreglo,'14401007','betsy','sanchez',
100,'mujeralfa',date,false);
console.log(crud.consultar(arreglo,""));


