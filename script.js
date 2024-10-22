/*Ciao,
esercizio di oggi: Primi passi con la OOP
repo: js-oop
In questo esercizio, dovrai creare una classe in JavaScript chiamata "Veicolo" con alcune proprietà e metodi.
La classe "Veicolo" dovrebbe avere le seguenti caratteristiche:
marca
anno
colore
porte
carburante
Successivamente:
Creiamo una nuova istanza di veicolo che rappresenti una Fiat 2019 blu.
Otteniamo le informazioni della vettura utilizzando il metodo informazioni()
Calcoliamo l'età della vettura utilizzando il metodo calcolaEta()
BONUS
In questo bonus, dovrai estendere la classe "Veicolo" con una nuova classe chiamata "Automobile". La classe "Automobile"
eredita tutte le proprietà e i metodi della classe "Veicolo" e ne aggiunge alcuni specifici per le automobili.
Successivamente:
Istanziamo una nuova Automobile (Opel, 2020, nera, con 4 porte, a benzina)
Stampiamo il numero di porte e il tipo di carburante.
IDEE PER PRATICA RIPASSO:
crea un array di veicoli
cicla nell'array usando un forEach
cicla nell'array usando un for
crea una nuova array che contenga solo il nome dei veicoli
crea una nuova array con solo i veicoli elettriche*/

class Veicolo {
    constructor(marca, anno, colore, porte, carburante) {
      this.marca = marca;
      this.anno = anno;
      this.colore = colore;
      this.porte = porte;
      this.carburante = carburante;
    }

    calcolaEta() {
        const annoCorrente = 2024;
        return annoCorrente - this.anno;
      }   
      
}
class Automobile extends Veicolo {
    constructor(marca, anno, colore, porte, carburante) {
    // this.marca = marca;
    // this.anno = anno;
    // this.colore = colore;
    // this.porte = porte;
    // this.carburante = carburante;
    super(marca, anno, colore, porte, carburante);
    }
}

    const autoUno = new Veicolo("fiat" , 2019 , "blu");
    console.log(`Età del veicolo: ${autoUno.calcolaEta()} anni`);

    const autoDue = new Automobile('Opel', 2020, 'Nera', 4, 'Benzina');
    console.log(`Numero di porte: ${autoDue.porte}
Tipologia di carburante: ${autoDue.carburante}`);
    