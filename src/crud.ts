interface Alumno{
    nocontrol: string,
    nombre: string,
    apellidos:string,
    promedio: number,
    genero: string,
    fechanacimiento: Date,
    activo: boolean
}

export class Crud {
    constructor(){

    }

    addElement(arreglo:Array<Alumno>,
        nocontrol:string,
        nombre:string,
        apellidos:string,
        promedio:number,
        genero: string,
        fechanacimiento:Date = new Date(),
        activo: boolean):void
    {
        let newElement ={
            nocontrol:nocontrol,
            nombre:nombre,
            apellidos:apellidos,
            promedio:promedio,
            genero:genero,
            fechanacimiento:fechanacimiento,
            activo:activo
        };
        arreglo.push(newElement);
        console.log("Elemento agregado");
    };
    
    consultar(arreglo:Array<Alumno>, nocontrol:string){
        let cad="";
        if(!nocontrol){
            arreglo.forEach(element => {
                cad+=element.nombre+"\n";
            });
        }
        else {
            arreglo.forEach(element => {
                if(element.nocontrol.match(nocontrol))cad=element.nombre;
            });
        }
        return cad;
    }
    update(arreglo:Array<Alumno>,nocontrol:string,
    uname:string,uapellidos:string,upromedio:number,ugenero:string,
    udate:Date,uactivo:boolean){
        arreglo.forEach(element => {
            if(element.nocontrol.match(nocontrol)){
                element.nombre=uname,
                element.apellidos=uapellidos,
                element.promedio=upromedio,
                element.genero=ugenero,
                element.fechanacimiento=udate,
                element.activo=uactivo
                console.log(`modified guy with nocontrol = ${nocontrol} `)
            }
        });
    }

}