class Ruta{
    constructor(chofer,numero,bases){
        this._chofer = chofer;
        this._bases = bases;
        this._numero =numero;
        this._capacidad = 20
        this._baseActual = 0
    }
    get chofer (){
        return this._chofer;
    }
    get numero (){
        return this._numero;
    }
    get bases (){
        return this._bases;
    }
    get capacidad (){
        return this._capacidad
    }

    set chofer (chofer){
        this._chofer = chofer;
    }
    set numero (numero){
        this._numero = numero;
    }
    recorrer(){
        this._baseActual++
    }

    getToString(){
        console.log(`Chofer:${this._chofer}
                     Numero:${this._numero}
                     Bases:${this._bases[0]},${this._bases[1]}.....`)
    }

}



class Base{
    constructor(nombre, latitud, longitud){
        this._nombre = nombre;
        this._latitud = latitud;
        this._longitud = longitud;
        this._hrsSalida = []
    }
    get nombre (){
        return this._nombre;
    }
    get latitud (){
        return this._latitud;
    }
    get longitud (){
        return this._longitud;
    }
    get hrsSalida (){
        return this._hrsSalida;
    }
    
    set nombre(nombre){
        this._nombre = nombre;
    }

    getToString(){
        console.log(`La base:${this._nombre} 
                     Se encuentra en la posicion:(${this._latitud},${this._longitud})`)
    }
}