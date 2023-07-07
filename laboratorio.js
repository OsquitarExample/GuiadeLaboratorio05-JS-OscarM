/* Definiar una clase */
class Equipo {

    /* Declarar atributos */
    nombre = "Default";
    estadio = "Default";
    ciudad = "Default";
    entrenador = "Default";
    presidente = "Default";
    correo = "mail@mail.dot";
    torneo = "Default";


    /* Declarar Metodos */
    costeInscripción(){
        let inscripción;
            switch (this.torneo) {
            case "Champions League":
                inscripción = 100;
                break;
            case "Europa League":
                inscripción = 70;
                break;
            case "Copa Libertadores":
                inscripción = 90;
                break;
            case "Copa Sudamericana":
                inscripción = 60;
                break;
            case "Torneo de la Amistad":
                inscripción = 120;
                break;
            case "default":
                inscripción = 0;
                break;
        }
        return inscripción}

        posiblePremio(){
            let premio;
                switch (this.torneo) {
                case "Champions League":
                    premio = 1000000;
                    break;
                case "Europa League":
                    premio = 700000;
                    break;
                case "Copa Libertadores":
                    premio = 900000;
                    break;
                case "Copa Sudamericana":
                    premio = 600000;
                    break;
                case "Torneo de la Amistad":
                    premio = 2000000;
                    break;
                case "default":
                    premio = 0;
                    break;
            }
            return premio}
        
};
       

    /**Añadir la funcion al boton Enviar */
    $("document").ready(function (){
        $("#btnEnviar").click(function () {
            let equipo = new Equipo();
            equipo.nombre = $("#txtEquipo")[0].value;
            equipo.estadio = $("#txtEstadio")[0].value;
            equipo.ciudad = $("#txtSede")[0].value;
            equipo.entrenador = $("#txtEntrenador")[0].value;
            equipo.presidente = $("#txtPresidente")[0].value;
            equipo.correo = $("#txtCorreo")[0].value;
            equipo.torneo = $("#txtTorneo")[0].value;
            alert("El "+ equipo.nombre + " tendrá que pagar un coste de inscripción de " + equipo.costeInscripción() + " dolares. ¡Pudiendo ganar hasta " + equipo.posiblePremio() + " dolares!")
            console.log(equipo);
        })
    })





