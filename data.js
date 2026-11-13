// Contenido editable. Para agregar temas, módulos o preguntas, modifique este archivo.
const DATA = {
  comercial: {
    titulo: "Desarrollo Comercial",
    descripcion: "Técnicas y criterios para fortalecer la gestión de ventas y la relación con el cliente.",
    modulos: [
      { id: "tecnica-ventas", titulo: "Técnica de ventas", resumen: "Pasos de una visita efectiva, de la preparación al seguimiento.",
        items: [
          { q: "¿Cómo preparo una visita de ventas?", a: "Revise el historial del cliente, defina el objetivo de la visita y lleve la información de producto y precios que necesitará." },
          { q: "¿Cómo detecto las necesidades del cliente?", a: "Haga preguntas abiertas, escuche con atención y confirme lo entendido antes de proponer una solución." },
          { q: "¿Cómo presento una propuesta de valor?", a: "Conecte cada característica del producto con un beneficio concreto para el negocio del cliente." }
        ] },
      { id: "cierres", titulo: "Cierres comerciales", resumen: "Cómo concretar acuerdos de forma natural y profesional.",
        items: [
          { q: "¿Cuándo es el momento de cerrar?", a: "Cuando el cliente muestra señales de compra: pregunta por condiciones, plazos o cantidades." },
          { q: "¿Qué tipos de cierre existen?", a: "Cierre directo, por alternativas, por resumen de beneficios y por siguiente paso acordado." },
          { q: "¿Qué hago si el cliente no decide hoy?", a: "Acuerde una fecha concreta de seguimiento y deje por escrito los puntos pendientes." }
        ] },
      { id: "objeciones", titulo: "Manejo de objeciones", resumen: "Respuestas para dudas frecuentes sobre precio, tiempo y competencia.",
        items: [
          { q: "¿Cómo respondo a «está muy caro»?", a: "Pregunte con qué lo compara, muestre el valor total y ofrezca opciones de presentación o volumen." },
          { q: "¿Y si el cliente dice «ya tengo proveedor»?", a: "Reconozca la relación existente y proponga complementar, no reemplazar, con un beneficio claro." },
          { q: "¿Cómo manejo «no tengo espacio»?", a: "Muestre la rotación del producto y proponga una ubicación o formato que ocupe menos espacio." }
        ] },
      { id: "actitud", titulo: "Actitud comercial", resumen: "Hábitos y comportamientos que construyen confianza.",
        items: [
          { q: "¿Qué actitudes generan confianza?", a: "Puntualidad, honestidad, cumplimiento de lo prometido y trato respetuoso en cada visita." },
          { q: "¿Cómo mantengo la motivación?", a: "Defina metas semanales pequeñas, celebre avances y aprenda de cada visita sin cierre." },
          { q: "¿Cómo manejo un cliente difícil?", a: "Mantenga la calma, escuche sin interrumpir y enfóquese en soluciones, no en culpables." }
        ] }
    ]
  },
  trade: {
    titulo: "Trade Marketing",
    descripcion: "Guías para la ejecución en punto de venta: exhibición, documentación y relacionamiento.",
    faq: true,
    modulos: [
      { id: "abc", titulo: "ABC del mercaderista", resumen: "Funciones básicas y rutina de trabajo en el punto de venta.",
        items: [
          { q: "¿Cuál es la rutina básica de una visita?", a: "Saludar, revisar inventario y precios, ordenar la exhibición, retirar producto vencido y registrar la visita." },
          { q: "¿Qué debo verificar al llegar?", a: "Disponibilidad de producto, fechas de vencimiento, estado de la góndola y presencia de material publicitario." },
          { q: "¿Cómo reporto novedades?", a: "Registre la novedad con foto y descripción breve, y avise a su supervisor el mismo día." }
        ] },
      { id: "documentos", titulo: "Documentos infaltables", resumen: "Formatos y soportes que debe llevar y diligenciar.",
        items: [
          { q: "¿Qué documentos debo llevar siempre?", a: "Carné vigente, formato de visita, planograma de la cadena y listado de precios actualizado." },
          { q: "¿Cómo se diligencia el formato de visita?", a: "Con fecha, hora de entrada y salida, evidencia fotográfica y firma o sello del punto de venta." },
          { q: "¿Cuánto tiempo guardo los soportes?", a: "Conserve los soportes durante el periodo que defina la compañía y entréguelos en el cierre acordado." }
        ] },
      { id: "planogramas", titulo: "Planogramas", resumen: "Cómo leer e implementar la distribución de producto en góndola.",
        items: [
          { q: "¿Qué es un planograma?", a: "Es el esquema que indica la ubicación, el orden y la cantidad de frentes de cada producto en el estante." },
          { q: "¿Cómo lo implemento correctamente?", a: "Siga los niveles, respete los frentes asignados y verifique con foto antes y después." },
          { q: "¿Qué hago si el espacio no coincide?", a: "Adapte lo más cercano al planograma y reporte la diferencia con evidencia." }
        ] },
      { id: "relacionamiento", titulo: "Relacionamiento", resumen: "Cómo construir una buena relación con el personal del punto de venta.",
        items: [
          { q: "¿Con quién debo relacionarme en la tienda?", a: "Con el administrador, jefes de categoría, surtidores y personal de bodega." },
          { q: "¿Cómo logro apoyo para mi exhibición?", a: "Sea cordial, cumpla acuerdos, ayude a mantener el orden y comunique los beneficios para la tienda." },
          { q: "¿Cómo manejo un desacuerdo?", a: "Escuche, explique con calma el acuerdo comercial vigente y escale a su supervisor si es necesario." }
        ] },
      { id: "exhibiciones", titulo: "Exhibiciones adicionales", resumen: "Puntos extra de exhibición: tipos, ubicación y negociación.",
        items: [
          { q: "¿Qué tipos de exhibición adicional hay?", a: "Cabeceras de góndola, islas, puntas, exhibidores de caja y material colgante." },
          { q: "¿Dónde se ubican mejor?", a: "En zonas de alto tráfico: entradas, pasillos centrales, cercanía a cajas y categorías complementarias." },
          { q: "¿Cómo las negocio?", a: "Presente el potencial de ventas, el acuerdo comercial y el tiempo de permanencia propuesto." }
        ] },
      { id: "participacion", titulo: "Porcentajes de participación", resumen: "Cómo medir y mejorar la participación en el anaquel.",
        items: [
          { q: "¿Qué es la participación en góndola?", a: "Es el porcentaje de espacio o frentes de nuestra marca frente al total de la categoría." },
          { q: "¿Cómo se calcula?", a: "Frentes de nuestros productos dividido entre el total de frentes de la categoría, por cien." },
          { q: "¿Cómo la mejoro?", a: "Negociando más frentes, corrigiendo la ubicación y evitando agotados en los productos clave." }
        ] }
    ]
  }
};
