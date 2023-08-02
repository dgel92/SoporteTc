const Itrackers =[


    //Itrakers FAN//
    
    
    {
        id:1,
        name: "Servicio Reducido Por Mora sin saldo pendiente",
        Etiqueta: "FAN",
        CBS: false,
        InfoAlCliente: "Informarle al cliente que en el transcurso de 3hrs a 72hrs se va a dar resolucion a su caso.",
        Base:"https://basedeconocimientos.custhelp.com/app/answers/detail/a_id/10701/kw/servicio%20reducido",
        usuario:"u",
        cuenta: "N° de cuenta",
        detalle:"Detalle",
        mail: "Mail",
        telContacto: "Telefono de contacto",
        captura: "Captura de resumen de cuenta y vista 360"
    },
    {
        id:2,
        name: "Instalacion o service con cambio de modem o decos con orden en espera de ejecucion",
        Etiqueta: "FAN",
        CBS: false,
        InfoAlCliente: "Informarle al cliente que por inconvenientes en las herramientas no se pudo cerrar su orden de instalacion, por este motivo no podemos ver sus equipos y no podemos hacer diagnostico tecnico. Que ya esta generado el reclamo y que en el transcurso de 03 a 72hrs va a estar activo su servicio",
        Base:"-",
        usuario:"u",
        cuenta: "N° de cuenta",
        caso: "Caso",
        ot: "orden tecnica",
        domicilio: "direccion (Loc, prov, partido)",
        detalle:"Detalle",
        mail: "Mail",
        telContacto: "Telefono de contacto",
        captura: "Captura del caso en espera de ejecucion"
        
    },
    {
        id:3,
        name: "Error de agenda sin caso Relacionado",
        Etiqueta: "FAN",
        CBS: false,
        InfoAlCliente: "Informarle al cliente que por inconvenientes en las herramientas no se pudo programar su cita. Que ya esta generado el reclamo y que en el transcurso de 12 a 48hrs va a estar contactandolo para coordinar la visita",
        Base:"-",
        usuario:"u",
        cuenta: "N° de cuenta",
        caso: "Caso",
        ot: "orden tecnica",
        domicilio: "direccion (Loc, prov, partido)",
        detalle:"Detalle",
        mail: "Mail",
        telContacto: "Telefono de contacto",
        captura: "Captura del error al citar"
        
    },
    {
        id:4,
        name: "Cambio de Domicilio con error en FAN",
        Etiqueta: "FAN",
        CBS: false,
        InfoAlCliente: "Informarle al cliente que por inconvenientes en las herramientas no se genero el cambio de domicilio en su cuenta. Que ya esta generado el reclamo y en el lapso de 03 a 72hrs va a estar realizado",
        Base:"-",
        usuario:"u",
        cuenta: "N° de cuenta",
        caso: "Caso - orden",
        domicilio: "direccion (Loc, prov, partido)",
        detalle:"Detalle",
        mail: "Mail",
        telContacto: "Telefono de contacto",
        captura: "Captura del caso cambio de domicilio"
        
    },
    {
        id:5,
        name: "Sin reduccion en vista 360° pero tiene reduccion de servicio en asistencia tecnica (codi)",
        Etiqueta: "FAN",
        CBS: false,
        InfoAlCliente: "spech en construccion",
        Base:"-",
        usuario:"u",
        cuenta: "N° de cuenta",
        caso: "Caso o orden",
        domicilio: "direccion (Loc, prov, partido)",
        detalle:"Detalle",
        mail: "Mail",
        telContacto: "Telefono de contacto",
        captura: "Captura de los bucket en codi con la reduccion"
    },


    //Itrakers OPEN//


    {
        id:10,
        name: "Adelanto o aseguramiento",
        Etiqueta: "OPEN",
        CBS: false,
        InfoAlCliente: "Informarle al cliente que en el transcurso de 3hrs a 48hrs se van a comunicar con el para adelantar la visita. No se puede cargar este itraker si la cita es dentro del plazo de 48hrs o si es feriado",
        Base:"-",
        usuario:"u",
        Base: "Base Operativa",
        ciudad: "Ciudad",
        caso: "Caso o orden",
        cliente: "nro cliente",
        domicilio: "direccion (Loc, prov, partido)",
        detalle:"Detalle",
        telContacto: "Telefono de contacto",
        disponibilidad: "AM / PM / Todo el dia",
        captura: "Captura de la agenda"
    },
]

export default Itrackers