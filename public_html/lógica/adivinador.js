/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
export const MAX_INTENTOS_FACIL= 20;
export const MAX_INTENTOS_DIFICIL= 10;
export const NUM_MAXIMO_FACIL= 100;
export const NUM_MAXIMO_DIFICIL= 1000;
export const EstadoJuego={
    JUGANDO: "Jugando",
    GANO: "Gano",
    PERDIO:"Perdio"
};

export const ModoJuego={
    ADIVINADOR: "Adivinador",
    PENSADOR: "Pensador"
};
export const DificultadJuego={
    FACIL="Facil",
    DIFICIL="Pensador"
};

export class Adivinador{
    #numeroSecreto;
    #intentoActual;
    #maxIntentos;
    #estado;
    #modo;
    
    constructor(dificultad, modo){
        this.#dificultad=dificultad;
        this.#modo=modo;
        this.#intentoActual=0;
        this.#estado= EstadoJuego.JUGANDO;
        
        //Linda Mishell
    }
    
}
