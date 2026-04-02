/* ===========================
   LIMASAM 2025 — Study App
   Data: Topics Content & Questions
   =========================== */

const TOPICS = [
  {
    id: 1,
    number: "01",
    title: "Barrido Manual Individual",
    description: "Operación realizada por un solo operario/a que barre un sector o recorrido fijado previamente usando útiles y herramientas.",
    tools: ["Escoba", "Cubo o espuerta", "Tablillas", "Chapulina", "Llave de papelera", "Bolsas", "Recogedor", "Escobillo (opcional)", "Carrito portabolsas"],
    phases: [
      {
        title: "Fase 1 — Traslado a la zona de trabajo y selección del tramo",
        items: [
          "Controlar y acomodar las herramientas en el carrito portabolsas antes de salir.",
          "Asegurarse de llevar todas las herramientas en buen estado.",
          "Empujar el carrito hasta el punto de inicio de la tarea.",
          "Seleccionar un primer tramo de longitud que permita crear varias pilas de residuos y mantener contacto visual con el carrito en todo momento."
        ]
      },
      {
        title: "Fase 2 — Desbroce, retirada de voluminosos y limpieza de zona de contenedores",
        items: [
          "Recorrer la distancia entre el carrito y el final del tramo realizando el desbroce.",
          "Desbroza con la chapulina las hierbas o matas de altura mayor a dos dedos, levantándolas desde la raíz. No levantar la chapulina por encima del hombro.",
          "Retirar piedras cercanas a las matas antes de dar el golpe para evitar proyecciones.",
          "Llevar los residuos voluminosos junto a los contenedores más cercanos. Al agacharse, flexionar rodillas y mantener la espalda recta.",
          "Si el voluminoso es demasiado grande, comunicarlo al Coordinador/a.",
          "Ordenar enseres en zona de contenedores para no entorpecer a ciudadanos ni tráfico.",
          "Depositar residuos en el contenedor selectivo correspondiente siempre que sea posible.",
          "Animales muertos pequeños (caben en el recogedor): bolsa y contenedor orgánico. Animales grandes: comunicar al Coordinador/a."
        ]
      },
      {
        title: "Fase 3 — Barrido manual de residuos",
        items: [
          "Volver hacia el carrito efectuando el barrido con la escoba.",
          "Empujar residuos vegetales, tierra, basura y envases creando pequeños montones contra bordillos o muros.",
          "La distancia entre pilas no debe ser excesiva para evitar que el viento se las lleve.",
          "Crear el montón junto a lugares que sean parada obligatoria (por ejemplo, junto a una papelera).",
          "Barrer debajo de los bancos públicos.",
          "Evitar barrer sobre bocas de alcantarillado.",
          "En tramos con pendiente, barrer a favor de la misma.",
          "Si hay viento, barrer a favor de él.",
          "Evitar proyectar polvo barriendo con excesiva energía.",
          "El escobillo es solo herramienta de recogida, NUNCA de barrido."
        ]
      },
      {
        title: "Fase 4 — Recogida de pilas y vaciado de papeleras",
        items: [
          "Usar tablillas y espuerta para recoger las pilas de residuos.",
          "El escobillo puede usarse de forma opcional junto al recogedor para recoger pilas.",
          "En pavimentos con hendiduras: recoger el mayor volumen con tablillas y apurar con escoba y recogedor.",
          "Almacenar residuos siempre en el cubo con bolsa del carrito (puede retirarse el cubo manualmente).",
          "No olvidar recoger las matas desbrozadas.",
          "Abrir la papelera ÚNICAMENTE con la llave correspondiente — terminantemente prohibido otro sistema.",
          "La pérdida o rotura de la llave es responsabilidad del operario/a.",
          "Volcar el contenido de la papelera en la bolsa del carrito o cubo.",
          "Devolver el recipiente a su sitio asegurándose de que esté bien encajado."
        ]
      },
      {
        title: "Fase 5 — Depósito de residuos recogidos",
        items: [
          "Anudar correctamente las bolsas de residuos llenas.",
          "Introducirlas en el interior de los contenedores.",
          "Colocar una nueva bolsa en el aro del carrito portabolsas.",
          "Si la bolsa es mayor que el aro, anudarla para que quede firmemente sujeta."
        ]
      },
      {
        title: "Fase 6 — Comunicación al finalizar la jornada/tarea",
        items: [
          "Al alcanzar el horario de fin de jornada o al terminar la tarea (lo primero que ocurra), contactar con el Coordinador/a.",
          "Informar sobre el desarrollo de la actividad haciendo hincapié en las incidencias.",
          "Si todo está correcto, seleccionar un nuevo tramo o acometer una nueva tarea."
        ]
      }
    ],
    objectives: [
      "Que no existan basura ni residuos a granel en la acera ni debajo de los bancos.",
      "Que el contorno de los contenedores de residuos, orgánicos y selectivos, estén libres de residuos y ordenados.",
      "Que estén las papeleras vacías y limpios sus alrededores.",
      "Que no se encuentren residuos o enseres obstaculizando la vía pública.",
      "Que se hayan eliminado de la vía pública los residuos vegetales como hojas, semillas, frutos caídos, tierra y excrementos.",
      "Que la zona de bordillo libre haya sido barrida y los residuos recogidos.",
      "Que aquellas matas de altura superior a dos dedos estén desbrozadas y quitadas de la vía pública."
    ],
    questions: [
      {
        question: "¿En qué fase del barrido manual individual se controlan y acomodan las herramientas en el carrito portabolsas?",
        options: ["Fase 1 — Traslado a la zona de trabajo", "Fase 2 — Desbroce y retirada de voluminosos", "Fase 3 — Barrido manual de residuos", "Antes de la Fase 1, al salir del centro de trabajo"],
        correct: 0,
        explanation: "En la Fase 1 se indica: controlar y acomodar las herramientas en el carrito portabolsas antes de salir."
      },
      {
        question: "¿Qué criterio determina la longitud del primer tramo en el barrido manual individual?",
        options: ["La distancia máxima que se puede recorrer en 30 minutos", "Que permita crear varias pilas de residuos y mantener contacto visual con el carrito", "El tamaño del cubo del carrito", "La cantidad de bolsas disponibles"],
        correct: 1,
        explanation: "Se debe seleccionar un tramo de longitud que permita crear varias pilas de residuos y mantener contacto visual con el carrito en todo momento."
      },
      {
        question: "¿Con qué herramienta se realiza el desbroce de hierbas y matas?",
        options: ["Escoba", "Escobillo", "Chapulina", "Tablillas"],
        correct: 2,
        explanation: "Se desbroza con la chapulina las hierbas o matas de altura mayor a dos dedos."
      },
      {
        question: "¿Desde dónde se deben levantar las matas al desbrozar con la chapulina?",
        options: ["Desde la base del tallo", "Desde la raíz", "Desde la mitad del tallo", "Desde la superficie del suelo"],
        correct: 1,
        explanation: "Se deben levantar las matas desde la raíz con la chapulina."
      },
      {
        question: "¿Hasta qué altura máxima se puede levantar la chapulina al desbrozar?",
        options: ["Por encima de la cabeza", "Por encima del hombro", "A la altura del pecho", "No se debe levantar por encima del hombro"],
        correct: 3,
        explanation: "No se debe levantar la chapulina por encima del hombro."
      },
      {
        question: "¿Qué se debe hacer ANTES de golpear con la chapulina las matas?",
        options: ["Señalizar la zona", "Regar las matas para ablandar la tierra", "Retirar piedras cercanas para evitar proyecciones", "Avisar al Coordinador/a"],
        correct: 2,
        explanation: "Se deben retirar piedras cercanas a las matas antes de dar el golpe para evitar proyecciones peligrosas."
      },
      {
        question: "¿A qué altura se considera que una mata debe ser desbrozada?",
        options: ["Mayor a un dedo", "Mayor a dos dedos", "Mayor a tres dedos", "Mayor a cinco centímetros"],
        correct: 1,
        explanation: "Se desbrozan las hierbas o matas de altura mayor a dos dedos."
      },
      {
        question: "¿Dónde se deben llevar los residuos voluminosos recogidos durante el desbroce?",
        options: ["Al carrito portabolsas", "Al contenedor selectivo más cercano", "Junto a los contenedores más cercanos", "Al centro de trabajo"],
        correct: 2,
        explanation: "Se llevan los residuos voluminosos junto a los contenedores más cercanos."
      },
      {
        question: "¿Cuál es la postura correcta al agacharse para recoger residuos voluminosos?",
        options: ["Doblar la espalda y mantener las piernas rectas", "Flexionar rodillas y mantener la espalda recta", "Ponerse de cuclillas sin importar la espalda", "Agacharse de lado"],
        correct: 1,
        explanation: "Al agacharse, se deben flexionar rodillas y mantener la espalda recta."
      },
      {
        question: "¿Qué se debe hacer si un residuo voluminoso es demasiado grande para ser retirado por un solo operario?",
        options: ["Intentarlo con dos viajes", "Dejarlo junto al contenedor", "Comunicarlo al Coordinador/a", "Dividirlo en trozos más pequeños"],
        correct: 2,
        explanation: "Si el voluminoso es demasiado grande, se debe comunicar al Coordinador/a."
      },
      {
        question: "¿En qué contenedor se deben depositar los residuos siempre que sea posible?",
        options: ["En el contenedor orgánico", "En el contenedor gris", "En el contenedor selectivo correspondiente", "En el contenedor más cercano sin importar el tipo"],
        correct: 2,
        explanation: "Se deben depositar residuos en el contenedor selectivo correspondiente siempre que sea posible."
      },
      {
        question: "¿Qué se hace con un animal muerto pequeño que cabe en el recogedor?",
        options: ["Comunicar al Coordinador/a", "Bolsa y contenedor orgánico", "Dejarlo junto al contenedor", "Enterrarlo en zona cercana"],
        correct: 1,
        explanation: "Animales muertos pequeños (caben en el recogedor): bolsa y contenedor orgánico."
      },
      {
        question: "¿En qué dirección se barre durante la Fase 3 del barrido manual individual?",
        options: ["Del carrito hacia el final del tramo", "De vuelta hacia el carrito", "En zigzag por toda la acera", "En círculos alrededor del carrito"],
        correct: 1,
        explanation: "En la Fase 3 se vuelve hacia el carrito efectuando el barrido con la escoba."
      },
      {
        question: "¿Contra qué se deben crear los montones de residuos durante el barrido?",
        options: ["Contra las papeleras únicamente", "Contra bordillos o muros", "En el centro de la acera", "Junto a los bancos públicos"],
        correct: 1,
        explanation: "Se empujan residuos creando pequeños montones contra bordillos o muros."
      },
      {
        question: "¿Por qué la distancia entre pilas de residuos no debe ser excesiva?",
        options: ["Para no cansar al operario", "Para evitar que el viento se las lleve", "Para que quepan en el cubo", "Para mantener el orden visual"],
        correct: 1,
        explanation: "La distancia entre pilas no debe ser excesiva para evitar que el viento se las lleve."
      },
      {
        question: "¿Junto a qué lugares es preferible crear los montones de residuos?",
        options: ["Junto a bocas de alcantarillado", "Junto a bancos públicos", "Junto a paradas obligatorias como papeleras", "Junto a contenedores"],
        correct: 2,
        explanation: "Se debe crear el montón junto a lugares que sean parada obligatoria (por ejemplo, junto a una papelera)."
      },
      {
        question: "¿Qué se debe evitar específicamente al barrer?",
        options: ["Barrer sobre zonas de césped", "Barrer sobre bocas de alcantarillado", "Barrer en horas punta", "Barrer con viento"],
        correct: 1,
        explanation: "Se debe evitar barrer sobre bocas de alcantarillado."
      },
      {
        question: "¿En qué sentido se debe barrer en tramos con pendiente?",
        options: ["En contra de la pendiente", "A favor de la pendiente", "En diagonal", "Depende del tipo de residuo"],
        correct: 1,
        explanation: "En tramos con pendiente, barrer a favor de la misma."
      },
      {
        question: "¿Cómo se debe barrer si hay viento?",
        options: ["En contra del viento", "A favor del viento", "En zigzag", "No se debe barrer con viento"],
        correct: 1,
        explanation: "Si hay viento, barrer a favor de él."
      },
      {
        question: "¿Por qué se debe evitar barrer con excesiva energía?",
        options: ["Para no dañar la escoba", "Para no dañar el pavimento", "Para evitar proyectar polvo", "Para no cansarse demasiado"],
        correct: 2,
        explanation: "Se debe evitar proyectar polvo barriendo con excesiva energía."
      },
      {
        question: "¿Cuál es la función del escobillo?",
        options: ["Barrer residuos pequeños", "Barrer debajo de los bancos", "Solo herramienta de recogida, NUNCA de barrido", "Apoyar el barrido en esquinas"],
        correct: 2,
        explanation: "El escobillo es solo herramienta de recogida, NUNCA de barrido."
      },
      {
        question: "¿Con qué herramientas se recogen las pilas de residuos?",
        options: ["Escoba y recogedor", "Tablillas y espuerta", "Escobillo y cubo", "Manos y bolsa"],
        correct: 1,
        explanation: "Se usan tablillas y espuerta para recoger las pilas de residuos."
      },
      {
        question: "¿Cómo se recogen las pilas en pavimentos con hendiduras?",
        options: ["Solo con escobillo", "Solo con escoba y recogedor", "Mayor volumen con tablillas y apurar con escoba y recogedor", "Solo con las manos con guantes"],
        correct: 2,
        explanation: "En pavimentos con hendiduras: recoger el mayor volumen con tablillas y apurar con escoba y recogedor."
      },
      {
        question: "¿Dónde se almacenan los residuos recogidos durante el barrido manual individual?",
        options: ["En bolsas sueltas en la acera", "En el cubo con bolsa del carrito", "Directamente en los contenedores", "En la espuerta"],
        correct: 1,
        explanation: "Se almacenan residuos siempre en el cubo con bolsa del carrito (puede retirarse el cubo manualmente)."
      },
      {
        question: "¿Qué no se debe olvidar recoger al terminar la recogida de pilas?",
        options: ["Las piedras retiradas", "Las matas desbrozadas", "Las herramientas del suelo", "Las tablillas"],
        correct: 1,
        explanation: "No olvidar recoger las matas desbrozadas."
      },
      {
        question: "¿Con qué se debe abrir la papelera?",
        options: ["Con cualquier herramienta metálica", "Con la llave correspondiente", "Con las manos si no hay llave", "Con las tablillas"],
        correct: 1,
        explanation: "Abrir la papelera ÚNICAMENTE con la llave correspondiente."
      },
      {
        question: "¿De quién es responsabilidad la pérdida o rotura de la llave de papelera?",
        options: ["Del Coordinador/a", "Del equipo de mantenimiento", "Del operario/a", "Del Ayuntamiento"],
        correct: 2,
        explanation: "La pérdida o rotura de la llave es responsabilidad del operario/a."
      },
      {
        question: "¿Dónde se debe volcar el contenido de la papelera?",
        options: ["Directamente al contenedor", "En la bolsa del carrito o cubo", "En el suelo junto al carrito", "En una bolsa aparte"],
        correct: 1,
        explanation: "Volcar el contenido de la papelera en la bolsa del carrito o cubo."
      },
      {
        question: "¿Qué se debe hacer después de vaciar una papelera?",
        options: ["Dejarla abierta para que se ventile", "Devolverla a su sitio asegurándose de que esté bien encajada", "Limpiarla con agua", "Cubrir la abertura con una bolsa"],
        correct: 1,
        explanation: "Devolver el recipiente a su sitio asegurándose de que esté bien encajado."
      },
      {
        question: "¿Qué se debe hacer con las bolsas de residuos llenas antes de depositarlas?",
        options: ["Atarlas con un nudo corredizo", "Anudarlas correctamente", "Cerrarlas con una grapa", "Doblar el borde"],
        correct: 1,
        explanation: "Se deben anudar correctamente las bolsas de residuos llenas."
      },
      {
        question: "¿Dónde se deben introducir las bolsas de residuos llenas?",
        options: ["En la caja del vehículo auxiliar", "En el interior de los contenedores", "En el cubo del carrito", "En la zona de transferencia"],
        correct: 1,
        explanation: "Se deben introducir las bolsas en el interior de los contenedores."
      },
      {
        question: "¿Qué se hace si la bolsa de residuos es mayor que el aro del carrito portabolsas?",
        options: ["Se cambia por una más pequeña", "Se coloca dentro del cubo", "Se anuda para que quede firmemente sujeta", "Se sujeta con las manos"],
        correct: 2,
        explanation: "Si la bolsa es mayor que el aro, se debe anudar para que quede firmemente sujeta."
      },
      {
        question: "¿Cuándo se debe contactar con el Coordinador/a al finalizar?",
        options: ["Solo al terminar la tarea asignada", "Solo al alcanzar el horario de fin de jornada", "Lo primero que ocurra: fin de jornada o fin de tarea", "Al final de la semana"],
        correct: 2,
        explanation: "Al alcanzar el horario de fin de jornada o al terminar la tarea, lo primero que ocurra."
      },
      {
        question: "¿En qué se debe hacer hincapié al informar al Coordinador/a?",
        options: ["En el tiempo empleado", "En las incidencias", "En la cantidad de residuos recogidos", "En el estado de las herramientas"],
        correct: 1,
        explanation: "Informar sobre el desarrollo de la actividad haciendo hincapié en las incidencias."
      },
      {
        question: "¿Qué se debe hacer si al contactar con el Coordinador/a todo está correcto?",
        options: ["Esperar instrucciones en el puesto", "Seleccionar un nuevo tramo o acometer una nueva tarea", "Volver al centro de trabajo", "Finalizar la jornada"],
        correct: 2,
        explanation: "Si todo está correcto, seleccionar un nuevo tramo o acometer una nueva tarea."
      },
      {
        question: "¿Cuál de estas herramientas es OPCIONAL en el barrido manual individual?",
        options: ["Escoba", "Chapulina", "Escobillo", "Tablillas"],
        correct: 2,
        explanation: "El escobillo es opcional en el barrido manual individual."
      },
      {
        question: "¿Cuál de estas NO es una herramienta del barrido manual individual?",
        options: ["Chapulina", "Sopladora", "Tablillas", "Llave de papelera"],
        correct: 1,
        explanation: "La sopladora se usa en el barrido mixto, no en el barrido manual individual."
      },
      {
        question: "¿Qué se debe hacer con los enseres en la zona de contenedores?",
        options: ["Apilarlos junto a la acera", "Ordenarlos para no entorpecer a ciudadanos ni tráfico", "Llevarlos al centro de trabajo", "Dejarlos donde están"],
        correct: 1,
        explanation: "Ordenar enseres en zona de contenedores para no entorpecer a ciudadanos ni tráfico."
      },
      {
        question: "¿Qué se debe hacer debajo de los bancos públicos durante el barrido?",
        options: ["Barrer con la escoba", "Usar el escobillo para barrer", "No se limpia esa zona", "Solo recoger con las tablillas"],
        correct: 0,
        explanation: "Se debe barrer debajo de los bancos públicos."
      },
      {
        question: "¿Cuántas fases tiene el método de trabajo del barrido manual individual?",
        options: ["4", "5", "6", "7"],
        correct: 2,
        explanation: "El método de trabajo del barrido manual individual tiene 6 fases."
      },
      {
        question: "¿Cuántos objetivos tiene el puesto de trabajo de barrido manual individual?",
        options: ["5", "6", "7", "9"],
        correct: 2,
        explanation: "El puesto de trabajo de barrido manual individual tiene 7 objetivos."
      },
      {
        question: "¿Qué tipo de residuos se deben eliminar de la vía pública según los objetivos?",
        options: ["Solo basura y envases", "Solo residuos vegetales", "Residuos vegetales como hojas, semillas, frutos caídos, tierra y excrementos", "Solo excrementos"],
        correct: 2,
        explanation: "Se deben eliminar residuos vegetales como hojas, semillas, frutos caídos, tierra y excrementos."
      },
      {
        question: "¿Cómo se almacenan los residuos en el carrito portabolsas?",
        options: ["En bolsas sueltas sobre la acera", "En el cubo con bolsa del carrito, que puede retirarse manualmente", "Directamente en los contenedores", "En la espuerta hasta llenarla"],
        correct: 1,
        explanation: "Se almacenan residuos siempre en el cubo con bolsa del carrito (puede retirarse el cubo manualmente)."
      },
      {
        question: "¿Qué se debe hacer con la bolsa nueva después de depositar los residuos en el contenedor?",
        options: ["Guardarla en el cubo", "Colocarla en el aro del carrito portabolsas", "Llevarla al centro de trabajo", "Guardarla en una bolsa aparte"],
        correct: 1,
        explanation: "Se debe colocar una nueva bolsa en el aro del carrito portabolsas."
      },
      {
        question: "¿Qué sentido de recorrido se sigue en la Fase 2 (desbroce) respecto al carrito?",
        options: ["Se vuelve hacia el carrito", "Se recorre la distancia entre el carrito y el final del tramo", "Se trabaja alrededor del carrito", "Se va al centro de trabajo"],
        correct: 1,
        explanation: "En la Fase 2 se recorre la distancia entre el carrito y el final del tramo realizando el desbroce."
      }
    ]
  },
  {
    id: 2,
    number: "02",
    title: "Barrido Manual con Vehículo Auxiliar",
    description: "Prácticamente idéntico al barrido manual individual, pero usando un vehículo para el desplazamiento. Se desarrolla en zonas alejadas del centro de trabajo.",
    tools: ["Vehículo auxiliar", "Teléfono móvil", "Tarjeta de combustible", "Documentación del vehículo", "Herramientas de barrido básico"],
    phases: [
      {
        title: "Fase 1 — Traslado y selección del tramo",
        items: [
          "Recoger en la oficina del Coordinador/a: llaves del vehículo, teléfono móvil asignado y tarjeta de combustible si se indica.",
          "Comprobar la documentación del vehículo indicada por el Coordinador/a.",
          "Verificar niveles de combustible, agua, aceite y refrigerante.",
          "Comprobar luces, espejos retrovisores y dispositivos de seguridad (intermitentes/luces giratorias).",
          "Inspección interior y exterior del vehículo. Comunicar cualquier deficiencia al mando.",
          "Conducir por la vía de servicio siempre que exista para no entorpecer el tráfico.",
          "Mantener el motor en temperatura óptima: 85°C a 95°C. El 75% del deterioro del motor ocurre fuera de esta temperatura.",
          "Conducir en zona eficiente del motor: 1.200–1.700 rpm aproximadamente.",
          "En descensos, usar la retención del motor para reducir consumo y desgaste de frenos.",
          "Respetar límites de velocidad y adecuar la velocidad al estado de la vía, vehículo y condiciones meteorológicas.",
          "Al aparcar: freno de mano + marcha puesta. En cuesta, además rueda trabada contra bordillo.",
          "TERMINANTEMENTE PROHIBIDO dejar el vehículo sin frenos al bajarse.",
          "Cerrar con pestillos y conectar intermitentes si no hay zona de estacionamiento adecuada."
        ]
      },
      {
        title: "Fase 2 — Desbroce, voluminosos y zona de contenedores",
        items: [
          "Igual que en barrido manual individual (Fase 2).",
          "Posibilidad de que el Coordinador/a indique retirar voluminosos con el vehículo auxiliar.",
          "Si el servicio de recogida no pudo vaciar un contenedor (por calle estrecha, etc.), el Coordinador/a puede ordenar trasvasar residuos al vehículo.",
          "Los residuos almacenados en la caja DEBEN cubrirse siempre con la lona o toldo.",
          "Si la caja se llena, proceder según la fase 5."
        ]
      },
      {
        title: "Fase 3 — Barrido manual de residuos",
        items: [
          "Igual que en barrido manual individual (Fase 3).",
          "Comenzar a limpiar el tramo en el sentido del tráfico.",
          "Dejar el vehículo con los intermitentes conectados como señalización y protección del operario."
        ]
      },
      {
        title: "Fase 4 — Recogida de pilas y vaciado de papeleras",
        items: [
          "Seguir las instrucciones de las fases 4 y 5 del barrido manual individual.",
          "A medida que se llenan bolsas, depositarlas en el cubo; cuando el cubo esté lleno, volcarlo en la caja del vehículo auxiliar."
        ]
      },
      {
        title: "Fase 5 — Depósito de residuos y vaciado de la caja",
        items: [
          "Las bolsas deben anudarse firmemente.",
          "Almacenar en la caja del vehículo auxiliar (facilita el trabajo en zonas sin contenedores cercanos).",
          "Tapar la carga con lona/toldo siempre.",
          "Con la caja llena, dirigirse al vehículo o caja de transferencia.",
          "CAJAS DE TRANSFERENCIA: Ubicar el vehículo en lateral de la caja. Trasvasar bolsas manualmente. No lanzar con fuerza. No subir al cajón.",
          "VEHÍCULO NODRIZA (recolector compactador carga trasera): Esperar turno en cabina. Alinearse con el nodriza. Verificar estriberas replegadas. Si hay placa: desplegarlas antes de elevar la placa, luego recoger estriberas. Bascular la caja desde mandos del vehículo auxiliar. Avisar al conductor del nodriza para prensar. PROHIBIDO circular con el cajón en posición de basculación."
        ]
      },
      {
        title: "Fase 6 — Comunicación al finalizar la jornada/tarea",
        items: [
          "Si terminó la actividad asignada o alcanzó el horario de fin (lo primero), contactar con el Coordinador/a.",
          "Informar sobre el desarrollo y las incidencias."
        ]
      }
    ],
    objectives: [
      "Que no existan basura ni residuos a granel en la acera ni debajo de los bancos.",
      "Que el contorno de los contenedores de residuos, orgánicos y selectivos, estén libres de residuos y ordenados.",
      "Que estén las papeleras vacías y limpios sus alrededores.",
      "Que no se encuentren residuos o enseres obstaculizando la vía pública.",
      "Que se hayan eliminado de la vía pública los residuos vegetales como hojas, semillas, frutos caídos, tierra y excrementos.",
      "Que la zona de bordillo libre haya sido barrida y los residuos recogidos.",
      "Que aquellas matas de altura superior a dos dedos estén desbrozadas y quitadas de la vía pública."
    ],
    differences: [
      "Empleo de vehículo para el desplazamiento desde las dependencias.",
      "Suele prescindir de carrito portabolsas, escobillo y recogedor (no es norma general).",
      "Requiere carnet de conducir tipo B en vigor — sin él, prohibido conducir el vehículo.",
      "En la fase 5, los residuos se depositan en la CAJA DEL VEHÍCULO en vez de en contenedores."
    ],
    questions: [
      {
        question: "¿Qué tres elementos se recogen en la oficina del Coordinador/a antes de salir con el vehículo auxiliar?",
        options: ["Llaves del vehículo, teléfono móvil y tarjeta de combustible", "Llaves del vehículo, documentación y extintor", "Teléfono móvil, tarjeta de combustible y chaleco reflectante", "Llaves, extintor y documentación"],
        correct: 0,
        explanation: "Se recogen: llaves del vehículo, teléfono móvil asignado y tarjeta de combustible si se indica."
      },
      {
        question: "¿Quién indica la documentación del vehículo que hay que comprobar?",
        options: ["El propio operario según el manual", "El Coordinador/a", "El departamento de tráfico", "El jefe de flota"],
        correct: 1,
        explanation: "Se comprueba la documentación del vehículo indicada por el Coordinador/a."
      },
      {
        question: "¿Qué cuatro niveles se deben verificar antes de conducir el vehículo auxiliar?",
        options: ["Combustible, aceite, líquido de frenos y limpiaparabrisas", "Combustible, agua, aceite y refrigerante", "Aceite, refrigerante, dirección y frenos", "Combustible, agua, aceite y líquido de dirección"],
        correct: 1,
        explanation: "Se verifican niveles de combustible, agua, aceite y refrigerante."
      },
      {
        question: "¿Qué dispositivos de seguridad se deben comprobar además de luces y espejos?",
        options: ["Frenos y cinturón de seguridad", "Intermitentes y luces giratorias", "Bocina y sirena", "Airbags y ABS"],
        correct: 1,
        explanation: "Se comprueban luces, espejos retrovisores y dispositivos de seguridad (intermitentes/luces giratorias)."
      },
      {
        question: "¿Qué se debe hacer si se detecta alguna deficiencia en la inspección del vehículo?",
        options: ["Repararla antes de salir", "Anotarla en el parte diario", "Comunicarla al mando", "Continuar si no es grave"],
        correct: 2,
        explanation: "Inspección interior y exterior del vehículo. Comunicar cualquier deficiencia al mando."
      },
      {
        question: "¿Por dónde se debe conducir siempre que exista para no entorpecer el tráfico?",
        options: ["Por el arcén", "Por la vía de servicio", "Por el carril derecho", "Por la acera si es ancho"],
        correct: 1,
        explanation: "Conducir por la vía de servicio siempre que exista para no entorpecer el tráfico."
      },
      {
        question: "¿Cuál es la temperatura óptima del motor del vehículo auxiliar?",
        options: ["75°C a 85°C", "80°C a 90°C", "85°C a 95°C", "90°C a 100°C"],
        correct: 2,
        explanation: "Mantener el motor en temperatura óptima: 85°C a 95°C."
      },
      {
        question: "¿Qué porcentaje del deterioro del motor ocurre fuera de la temperatura óptima?",
        options: ["50%", "65%", "75%", "85%"],
        correct: 2,
        explanation: "El 75% del deterioro del motor ocurre fuera de la temperatura óptima."
      },
      {
        question: "¿En qué rango de revoluciones se debe conducir de forma eficiente?",
        options: ["1.000–1.500 rpm", "1.200–1.700 rpm", "1.500–2.000 rpm", "1.800–2.200 rpm"],
        correct: 1,
        explanation: "Conducir en zona eficiente del motor: 1.200–1.700 rpm aproximadamente."
      },
      {
        question: "¿Qué se debe usar en descensos para reducir consumo y desgaste de frenos?",
        options: ["Frenar continuamente con el pedal", "La retención del motor", "Poner punto muerto", "El freno de mano progresivamente"],
        correct: 1,
        explanation: "En descensos, usar la retención del motor para reducir consumo y desgaste de frenos."
      },
      {
        question: "¿A qué se debe adecuar la velocidad además de respetar los límites?",
        options: ["Solo al estado del vehículo", "Solo a las condiciones meteorológicas", "Al estado de la vía, vehículo y condiciones meteorológicas", "Al tráfico únicamente"],
        correct: 2,
        explanation: "Adecuar la velocidad al estado de la vía, vehículo y condiciones meteorológicas."
      },
      {
        question: "¿Qué tres acciones se deben realizar al aparcar el vehículo?",
        options: ["Freno de mano, marcha puesta y luces apagadas", "Freno de mano, marcha puesta y en cuesta rueda trabada contra bordillo", "Freno de mano, punto muerto y pestillos", "Marcha puesta, intermitentes y freno de mano"],
        correct: 1,
        explanation: "Al aparcar: freno de mano + marcha puesta. En cuesta, además rueda trabada contra bordillo."
      },
      {
        question: "¿Qué está TERMINANTEMENTE PROHIBIDO al bajarse del vehículo?",
        options: ["Dejar las puertas abiertas", "Dejar el vehículo sin frenos", "Dejar el motor encendido", "Dejar las herramientas dentro"],
        correct: 1,
        explanation: "TERMINANTEMENTE PROHIBIDO dejar el vehículo sin frenos al bajarse."
      },
      {
        question: "¿Qué se debe hacer si no hay zona de estacionamiento adecuada?",
        options: ["Aparcar en doble fila con intermitentes", "Cerrar con pestillos y conectar intermitentes", "Buscar otro tramo para trabajar", "Avisar al Coordinador/a antes de aparcar"],
        correct: 1,
        explanation: "Cerrar con pestillos y conectar intermitentes si no hay zona de estacionamiento adecuada."
      },
      {
        question: "¿Qué tipo de carnet se requiere para conducir el vehículo auxiliar?",
        options: ["Carnet A", "Carnet B en vigor", "Carnet C", "Carnet B o superior"],
        correct: 1,
        explanation: "Se requiere carnet de conducir tipo B en vigor. Sin él, prohibido conducir el vehículo."
      },
      {
        question: "¿Qué ocurre si no se tiene carnet de conducir tipo B en vigor?",
        options: ["Se puede conducir con supervisión", "Se puede conducir solo por vías de servicio", "Está prohibido conducir el vehículo", "Se puede conducir si el Coordinador/a lo autoriza"],
        correct: 2,
        explanation: "Sin carnet tipo B en vigor, está prohibido conducir el vehículo."
      },
      {
        question: "¿En qué se diferencia la Fase 2 del barrido con vehículo auxiliar respecto al individual?",
        options: ["No se hace desbroce", "Se prescinde de la chapulina", "El Coordinador/a puede indicar retirar voluminosos con el vehículo", "No se limpia la zona de contenedores"],
        correct: 2,
        explanation: "Posibilidad de que el Coordinador/a indique retirar voluminosos con el vehículo auxiliar."
      },
      {
        question: "¿Qué se debe hacer si el servicio de recogida no pudo vaciar un contenedor?",
        options: ["Dejarlo para el turno siguiente", "Trasvasar residuos al vehículo si el Coordinador/a lo ordena", "Mover el contenedor a otra ubicación", "Comunicarlo y no hacer nada más"],
        correct: 1,
        explanation: "El Coordinador/a puede ordenar trasvasar residuos al vehículo."
      },
      {
        question: "¿Cómo se deben cubrir los residuos almacenados en la caja del vehículo?",
        options: ["Con una malla de protección", "Con la lona o toldo siempre", "Solo si hay viento", "No es obligatorio cubrirlos"],
        correct: 1,
        explanation: "Los residuos almacenados en la caja DEBEN cubrirse siempre con la lona o toldo."
      },
      {
        question: "¿En qué sentido se comienza a limpiar el tramo en la Fase 3?",
        options: ["En contra del tráfico", "En el sentido del tráfico", "Desde el centro hacia los extremos", "Desde los extremos hacia el centro"],
        correct: 1,
        explanation: "Comenzar a limpiar el tramo en el sentido del tráfico."
      },
      {
        question: "¿Cómo se debe dejar el vehículo durante el barrido para señalización?",
        options: ["Apagado y alejado de la zona de trabajo", "Con las luces largas encendidas", "Con los intermitentes conectados", "Con el motor en marcha y freno de mano"],
        correct: 2,
        explanation: "Dejar el vehículo con los intermitentes conectados como señalización y protección del operario."
      },
      {
        question: "¿Dónde se depositan las bolsas a medida que se llenan en la Fase 4?",
        options: ["Directamente en la caja del vehículo", "En el cubo; cuando el cubo esté lleno, volcarlo en la caja", "En los contenedores más cercanos", "En el carrito portabolsas"],
        correct: 1,
        explanation: "A medida que se llenan bolsas, depositarlas en el cubo; cuando el cubo esté lleno, volcarlo en la caja del vehículo auxiliar."
      },
      {
        question: "¿Dónde se almacenan las bolsas anudadas firmemente en la Fase 5?",
        options: ["En los contenedores selectivos", "En la caja del vehículo auxiliar", "En cajas de transferencia directamente", "En el cubo del carrito"],
        correct: 1,
        explanation: "Almacenar en la caja del vehículo auxiliar (facilita el trabajo en zonas sin contenedores cercanos)."
      },
      {
        question: "¿Dónde se debe ubicar el vehículo respecto a la caja de transferencia?",
        options: ["Detrás de la caja", "Delante de la caja", "En lateral de la caja", "A 5 metros de distancia"],
        correct: 2,
        explanation: "CAJAS DE TRANSFERENCIA: Ubicar el vehículo en lateral de la caja."
      },
      {
        question: "¿Cómo se trasvasan las bolsas a las cajas de transferencia?",
        options: ["Lanzándolas con cuidado", "Manualmente, sin lanzar con fuerza y sin subir al cajón", "Con la prensa del nodriza", "Con un brazo hidráulico"],
        correct: 1,
        explanation: "Trasvasar bolsas manualmente. No lanzar con fuerza. No subir al cajón."
      },
      {
        question: "¿Qué se debe hacer antes de elevar la placa del vehículo nodriza?",
        options: ["Recoger las estriberas", "Desplegar las estriberas", "Apagar el motor", "Avisar al Coordinador/a"],
        correct: 1,
        explanation: "Si hay placa: desplegar las estriberas antes de elevar la placa, luego recoger estriberas."
      },
      {
        question: "¿Qué se hace después de desplegar la placa del nodriza?",
        options: ["Se eleva la placa inmediatamente", "Se recogen las estriberas", "Se bascula la caja", "Se avisa al conductor para prensar"],
        correct: 1,
        explanation: "Desplegar estriberas antes de elevar la placa, luego recoger estriberas."
      },
      {
        question: "¿Desde dónde se bascula la caja del vehículo auxiliar en el nodriza?",
        options: ["Desde los mandos del nodriza", "Desde los mandos del vehículo auxiliar", "Desde la cabina del nodriza", "Manualmente con palanca"],
        correct: 1,
        explanation: "Bascular la caja desde mandos del vehículo auxiliar."
      },
      {
        question: "¿A quién se avisa para prensar los residuos en el nodriza?",
        options: ["Al Coordinador/a", "Al conductor del nodriza", "Al operario auxiliar", "No es necesario avisar a nadie"],
        correct: 1,
        explanation: "Avisar al conductor del nodriza para prensar."
      },
      {
        question: "¿Qué está PROHIBIDO al circular con el vehículo auxiliar tras la descarga?",
        options: ["Circular a más de 40 km/h", "Circular con el cajón en posición de basculación", "Circular sin lona", "Circular con acompañante"],
        correct: 1,
        explanation: "PROHIBIDO circular con el cajón en posición de basculación."
      },
      {
        question: "¿Dónde se espera el turno para vaciar en el vehículo nodriza?",
        options: ["De pie junto al vehículo", "En la cabina", "En la estribera trasera", "A pie junto al nodriza"],
        correct: 1,
        explanation: "Esperar turno en cabina."
      },
      {
        question: "¿Qué se debe verificar al alinearse con el nodriza?",
        options: ["Que la caja esté vacía", "Que las estriberas estén replegadas", "Que el motor esté encendido", "Que la lona esté puesta"],
        correct: 1,
        explanation: "Verificar estriberas replegadas."
      },
      {
        question: "¿De qué herramientas suele prescindir el barrido con vehículo auxiliar?",
        options: ["Escoba y chapulina", "Carrito portabolsas, escobillo y recogedor", "Tablillas y bolsas", "Llave de papelera y cubo"],
        correct: 1,
        explanation: "Suele prescindir de carrito portabolsas, escobillo y recogedor (no es norma general)."
      },
      {
        question: "¿Qué requisito de conducción es obligatorio para el barrido con vehículo auxiliar?",
        options: ["Carnet de conducir tipo A", "Carnet de conducir tipo B en vigor", "Carnet de conducir tipo C", "No se requiere carnet"],
        correct: 1,
        explanation: "Requiere carnet de conducir tipo B en vigor — sin él, prohibido conducir el vehículo."
      },
      {
        question: "¿En qué zona se desarrolla normalmente el barrido con vehículo auxiliar?",
        options: ["Centro de la ciudad", "Zonas alejadas del centro de trabajo", "Zonas peatonales", "Mercados municipales"],
        correct: 1,
        explanation: "Se desarrolla en zonas alejadas del centro de trabajo."
      },
      {
        question: "¿Cuántas fases tiene el método de trabajo del barrido con vehículo auxiliar?",
        options: ["4", "5", "6", "7"],
        correct: 2,
        explanation: "El método tiene 6 fases."
      },
      {
        question: "¿Cuántos objetivos tiene el puesto de trabajo de barrido con vehículo auxiliar?",
        options: ["5", "6", "7", "9"],
        correct: 2,
        explanation: "Tiene 7 objetivos (iguales que el barrido manual individual)."
      },
      {
        question: "¿Qué se debe hacer con la caja del vehículo cuando se llena durante el trabajo?",
        options: ["Seguir trabajando hasta fin de jornada", "Proceder según la fase 5 (depósito y vaciado)", "Comunicar al Coordinador/a inmediatamente", "Volver al centro de trabajo"],
        correct: 1,
        explanation: "Si la caja se llena, proceder según la fase 5."
      },
      {
        question: "¿Qué se hace al alcanzar el horario de fin o terminar la actividad asignada?",
        options: ["Volver directamente al centro de trabajo", "Contactar con el Coordinador/a (lo primero que ocurra)", "Esperar nuevas instrucciones en el vehículo", "Recoger herramientas y marcharse"],
        correct: 1,
        explanation: "Si terminó la actividad asignada o alcanzó el horario de fin (lo primero), contactar con el Coordinador/a."
      },
      {
        question: "¿Qué fases del barrido manual individual se siguen en la Fase 4 del barrido con vehículo auxiliar?",
        options: ["Fases 1 y 2", "Fases 2 y 3", "Fases 4 y 5", "Fases 5 y 6"],
        correct: 2,
        explanation: "Seguir las instrucciones de las fases 4 y 5 del barrido manual individual."
      },
      {
        question: "¿Qué se debe hacer con los residuos almacenados en la caja del vehículo auxiliar?",
        options: ["Dejarlos al descubierto para facilitar el acceso", "Cubrirlos siempre con la lona o toldo", "Regarlos con agua para compactarlos", "Comunicar al Coordinador/a antes de cubrirlos"],
        correct: 1,
        explanation: "Los residuos almacenados en la caja DEBEN cubrirse siempre con la lona o toldo."
      },
      {
        question: "¿Qué se debe hacer al aparcar el vehículo auxiliar en una cuesta?",
        options: ["Solo poner el freno de mano", "Freno de mano + marcha puesta + rueda trabada contra el bordillo", "Solo poner una marcha", "Freno de mano + punto muerto"],
        correct: 1,
        explanation: "Al aparcar: freno de mano + marcha puesta. En cuesta, además rueda trabada contra bordillo."
      },
      {
        question: "¿Qué se debe verificar en la inspección exterior del vehículo?",
        options: ["Solo el estado de los neumáticos", "Luces, espejos retrovisores y dispositivos de seguridad", "Solo el nivel de combustible", "Solo la documentación"],
        correct: 1,
        explanation: "Comprobar luces, espejos retrovisores y dispositivos de seguridad (intermitentes/luces giratorias)."
      },
      {
        question: "¿En qué se diferencia la Fase 5 del barrido con vehículo auxiliar respecto al individual?",
        options: ["No hay Fase 5", "Los residuos se depositan en la caja del vehículo en vez de en contenedores", "Se usan contenedores selectivos", "Se depositan en cajas de transferencia siempre"],
        correct: 1,
        explanation: "En la fase 5, los residuos se depositan en la CAJA DEL VEHÍCULO en vez de en contenedores."
      }
    ]
  },
  {
    id: 3,
    number: "03",
    title: "Barrido Mediante Brigada",
    description: "Operación realizada en equipo: mínimo 3 operarios/as de limpieza + 1 conductor/a con vehículo recolector compactador de cabina ampliada. Fundamental la coordinación, orden y organización.",
    tools: ["Vehículo recolector compactador con cabina ampliada", "Escobas", "Tablillas", "Cubos", "Bolsas", "Llave de papeleras", "Chapulina"],
    teamComposition: [
      { unit: "Unidad mínima", description: "3 operarios/as + 1 conductor/a" },
      { unit: "Unidades mayores", description: "6 o 9 operarios/as (siempre múltiplos de 3)" },
      { unit: "Vehículo", description: "Recolector compactador carga trasera con cabina ampliada" },
      { unit: "Extra en eventos", description: "Se puede añadir 1 operario/a extra solo para vaciado de papeleras" }
    ],
    roles: [
      { role: "Operario A (amarillo)", task: "Barre todo el ancho de la acera, del exterior hacia el bordillo. Genera pilas junto a papeleras." },
      { role: "Operario B (verde)", task: "Limpia el bordillo de la acera y la zona de estacionamiento. Al llegar a contenedores, los limpia y ordena." },
      { role: "Operario C (rojo)", task: "Recoge las pilas formadas por A y B con tablillas y cubo. Vacía las papeleras. Vuelca en la tolva del vehículo." }
    ],
    phases: [
      {
        title: "Fase 1 — Traslado a la zona de trabajo",
        items: [
          "El Coordinador/a indica la distribución inicial de funciones y el sistema de rotación (nadie realiza la misma tarea toda la jornada).",
          "Los operarios/as cargan las herramientas en el vehículo desde el cuarto de almacenaje.",
          "Viajan en la cabina ampliada hasta el punto de inicio.",
          "La responsabilidad de recepción y preparación del vehículo es del conductor/a.",
          "El equipo acude directamente al punto de inicio; no selecciona tramos individuales como en el barrido individual.",
          "Se interrumpe únicamente al acabar la sección asignada, momento en que los operarios suben al vehículo para ir a la siguiente zona."
        ]
      },
      {
        title: "Fase 2 — Barrido y limpieza",
        items: [
          "Operario A y B barren residuos dejando las pilas accesibles para el Operario C.",
          "Los voluminosos abarcables por un solo operario se dejan junto a las pilas.",
          "Voluminosos de gran tamaño: entre dos operarios directamente a la caja del vehículo.",
          "Las pilas suelen quedar en zig-zag: una en la acera y otra en el bordillo entre vehículos."
        ]
      },
      {
        title: "Fase 3 — Recogida de pilas, voluminosos y vaciado de papeleras",
        items: [
          "Operario C recoge pilas con tablillas y cubo.",
          "También retira los voluminosos que A y B dejaron junto a las pilas.",
          "Vacía papeleras en el cubo; cuando el cubo está lleno, lo vuelca en la tolva del vehículo (que circula unos metros por delante).",
          "Si hay exceso de residuos, uno de los operarios de barrido apoya en la recogida."
        ]
      },
      {
        title: "Fase 4 — Manipulación de la tolva de carga",
        items: [
          "El vehículo avanza siempre UNOS METROS POR DELANTE del operario que recoge.",
          "Cuando la tolva esté llena, avisar al conductor/a para que detenga el vehículo.",
          "Activar el peine hidráulico desde el mando del lateral trasero para empujar residuos al fondo.",
          "SIEMPRE con brazos extendidos y manteniendo contacto visual con el equipo durante la maniobra.",
          "Cuando la tolva esté llena y no se puedan empujar más residuos, el conductor irá a descarga acompañado del Operario C.",
          "Mientras se descarga, los operarios A y B continúan avanzando el trabajo de barrido."
        ]
      },
      {
        title: "Fase 5 — Vaciado de la tolva",
        items: [
          "Responsabilidad del conductor/a, aunque puede ir acompañado de un operario.",
          "El operario activa el peine hidráulico hasta la posición de apertura máxima.",
          "Solo se van TODOS los operarios a descargar a última hora si no hay tiempo de volver a recoger antes de fin de jornada.",
          "Los operarios que no ayudan en la descarga tienen PROHIBIDO descender del vehículo durante la maniobra."
        ]
      },
      {
        title: "Fase 6 — Comunicación al finalizar la jornada/tarea",
        items: [
          "Este servicio normalmente trabaja en varias zonas a lo largo del día.",
          "El conductor/a dispone de teléfono móvil — el equipo está en comunicación permanente con el Coordinador/a.",
          "Comunicar incidencias y solicitar nueva tarea al finalizar la asignada."
        ]
      }
    ],
    objectives: [
      "Vía pública libre de envases, basura, residuos vegetales, tierra y excrementos.",
      "Zona debajo de los bancos limpia.",
      "Contorno de todos los contenedores ordenados y limpios.",
      "Bordillo libre de aparcamiento sin residuos ni envases.",
      "Matas de más de dos dedos de altura eliminadas convenientemente.",
      "Papeleras vacías y correctamente colocadas."
    ],
    questions: [
      {
        question: "¿Cuál es la composición mínima de una brigada de barrido?",
        options: ["2 operarios + 1 conductor", "3 operarios + 1 conductor", "4 operarios + 1 conductor", "3 operarios sin conductor"],
        correct: 1,
        explanation: "La unidad mínima es 3 operarios/as de limpieza + 1 conductor/a con vehículo recolector compactador."
      },
      {
        question: "¿Cuántos operarios debe haber en unidades mayores de brigada?",
        options: ["4 o 5", "5 o 7", "6 o 9 (siempre múltiplos de 3)", "Cualquier número par"],
        correct: 2,
        explanation: "Las unidades mayores tienen 6 o 9 operarios/as, siempre en múltiplos de 3."
      },
      {
        question: "¿Qué operario barre todo el ancho de la acera del exterior hacia el bordillo?",
        options: ["Operario A (amarillo)", "Operario B (verde)", "Operario C (rojo)", "El conductor/a"],
        correct: 0,
        explanation: "El Operario A (amarillo) barre todo el ancho de la acera, del exterior hacia el bordillo, y genera pilas junto a papeleras."
      },
      {
        question: "¿Qué operario limpia el bordillo de la acera y la zona de estacionamiento?",
        options: ["Operario A (amarillo)", "Operario B (verde)", "Operario C (rojo)", "El conductor/a"],
        correct: 1,
        explanation: "El Operario B (verde) limpia el bordillo de la acera y la zona de estacionamiento. Al llegar a contenedores, los limpia y ordena."
      },
      {
        question: "¿Qué operario recoge las pilas formadas por A y B con tablillas y cubo?",
        options: ["Operario A (amarillo)", "Operario B (verde)", "Operario C (rojo)", "El conductor/a"],
        correct: 2,
        explanation: "El Operario C (rojo) recoge las pilas formadas por A y B con tablillas y cubo, vacía las papeleras y vuelca en la tolva del vehículo."
      },
      {
        question: "¿Qué operario genera las pilas junto a las papeleras durante el barrido?",
        options: ["Operario A (amarillo)", "Operario B (verde)", "Operario C (rojo)", "Todos los operarios indistintamente"],
        correct: 0,
        explanation: "El Operario A (amarillo) barre del exterior hacia el bordillo y genera pilas junto a papeleras."
      },
      {
        question: "¿Qué operario limpia y ordena los contenedores al llegar a ellos?",
        options: ["Operario A (amarillo)", "Operario B (verde)", "Operario C (rojo)", "El conductor/a"],
        correct: 1,
        explanation: "El Operario B (verde), al llegar a contenedores, los limpia y ordena."
      },
      {
        question: "¿Qué operario vacía las papeleras durante la recogida de pilas?",
        options: ["Operario A (amarillo)", "Operario B (verde)", "Operario C (rojo)", "El operario que tenga menos carga de trabajo"],
        correct: 2,
        explanation: "El Operario C (rojo) vacía las papeleras como parte de su función de recogida."
      },
      {
        question: "¿Qué operario vuelca los residuos en la tolva del vehículo?",
        options: ["Operario A (amarillo)", "Operario B (verde)", "Operario C (rojo)", "El conductor/a"],
        correct: 2,
        explanation: "El Operario C (rojo) vuelca en la tolva del vehículo los residuos recogidos."
      },
      {
        question: "¿Qué operario acompaña al conductor/a cuando va a descarga?",
        options: ["Operario A (amarillo)", "Operario B (verde)", "Operario C (rojo)", "Cualquiera de los tres"],
        correct: 2,
        explanation: "Cuando la tolva está llena y no se pueden empujar más residuos, el conductor irá a descarga acompañado del Operario C."
      },
      {
        question: "¿Qué operario continúa barriendo mientras el conductor y el Operario C van a descargar?",
        options: ["Solo el Operario A", "Solo el Operario B", "Los operarios A y B", "Solo el conductor"],
        correct: 2,
        explanation: "Mientras se descarga, los operarios A y B continúan avanzando el trabajo de barrido."
      },
      {
        question: "¿Qué secuencia de colores identifica a los operarios A, B y C respectivamente?",
        options: ["Rojo-Verde-Amarillo", "Amarillo-Verde-Rojo", "Verde-Amarillo-Rojo", "Amarillo-Rojo-Verde"],
        correct: 1,
        explanation: "El Operario A = amarillo, Operario B = verde, Operario C = rojo."
      },
      {
        question: "¿Quién indica la distribución inicial de funciones y el sistema de rotación?",
        options: ["El conductor/a", "El Operario A", "El Coordinador/a", "El operario con más antigüedad"],
        correct: 2,
        explanation: "El Coordinador/a indica la distribución inicial de funciones y el sistema de rotación."
      },
      {
        question: "¿Desde dónde cargan los operarios las herramientas en el vehículo?",
        options: ["Desde la calle", "Desde el cuarto de almacenaje", "Desde la cabina del vehículo", "Desde el punto de inicio"],
        correct: 1,
        explanation: "Los operarios/as cargan las herramientas en el vehículo desde el cuarto de almacenaje."
      },
      {
        question: "¿Dónde viajan los operarios hasta el punto de inicio?",
        options: ["A pie", "En la cabina ampliada del vehículo", "En transporte público", "En vehículos individuales"],
        correct: 1,
        explanation: "Los operarios viajan en la cabina ampliada hasta el punto de inicio."
      },
      {
        question: "¿De quién es la responsabilidad de recepción y preparación del vehículo?",
        options: ["Del Operario A", "Del Operario C", "Del Coordinador/a", "Del conductor/a"],
        correct: 3,
        explanation: "La responsabilidad de recepción y preparación del vehículo es del conductor/a."
      },
      {
        question: "¿Cómo acude el equipo al punto de inicio en el barrido por brigada?",
        options: ["Selecciona tramos individuales", "Directamente al punto de inicio sin seleccionar tramos individuales", "Espera instrucciones en el centro de trabajo", "Cada operario va por su cuenta"],
        correct: 1,
        explanation: "El equipo acude directamente al punto de inicio; no selecciona tramos individuales como en el barrido individual."
      },
      {
        question: "¿Cuándo se interrumpe el barrido de brigada para cambiar de zona?",
        options: ["Cada 30 minutos", "Al acabar la sección asignada", "Cuando el conductor lo decide", "Cuando llueve"],
        correct: 1,
        explanation: "Se interrumpe únicamente al acabar la sección asignada, momento en que los operarios suben al vehículo para ir a la siguiente zona."
      },
      {
        question: "¿Qué hacen los operarios al acabar la sección asignada?",
        options: ["Esperan al Coordinador/a", "Suben al vehículo para ir a la siguiente zona", "Vuelven al centro de trabajo", "Se quedan a descansar"],
        correct: 1,
        explanation: "Al acabar la sección asignada, los operarios suben al vehículo para ir a la siguiente zona."
      },
      {
        question: "¿Cómo se colocan las pilas de residuos durante el barrido de brigada?",
        options: ["En línea recta", "En zig-zag: una en la acera y otra en el bordillo entre vehículos", "Todas en el bordillo", "Todas en la calzada"],
        correct: 1,
        explanation: "Las pilas suelen quedar en zig-zag: una en la acera y otra en el bordillo entre vehículos."
      },
      {
        question: "¿Qué operarios barren dejando las pilas accesibles para el Operario C?",
        options: ["Solo el Operario A", "Solo el Operario B", "Los operarios A y B", "Solo el Operario C"],
        correct: 2,
        explanation: "Los operarios A y B barren residuos dejando las pilas accesibles para el Operario C."
      },
      {
        question: "¿Qué se hace con los voluminosos abarcables por un solo operario?",
        options: ["Se llevan directamente a la caja del vehículo", "Se dejan junto a las pilas", "Se comunican al Coordinador/a", "Se dejan en la calzada"],
        correct: 1,
        explanation: "Los voluminosos abarcables por un solo operario se dejan junto a las pilas."
      },
      {
        question: "¿Qué se hace con los voluminosos de gran tamaño?",
        options: ["Se dejan junto a las pilas", "Se comunican al Coordinador/a", "Entre dos operarios directamente a la caja del vehículo", "Se recogen al final de la jornada"],
        correct: 2,
        explanation: "Los voluminosos de gran tamaño se llevan entre dos operarios directamente a la caja del vehículo."
      },
      {
        question: "¿Con qué herramientas recoge las pilas el Operario C?",
        options: ["Escoba y espuerta", "Tablillas y cubo", "Sopladora y bolsas", "Pala y escoba"],
        correct: 1,
        explanation: "El Operario C recoge las pilas con tablillas y cubo."
      },
      {
        question: "¿Dónde vuelca el Operario C los residuos del cubo?",
        options: ["En un contenedor", "En la tolva del vehículo", "En una bolsa", "En la calzada"],
        correct: 1,
        explanation: "El Operario C vuelca los residuos del cubo en la tolva del vehículo."
      },
      {
        question: "¿A qué distancia circula el vehículo del operario que recoge?",
        options: ["A 50 metros por delante", "Unos metros por delante", "Unos metros por detrás", "A la misma altura"],
        correct: 1,
        explanation: "El vehículo avanza siempre unos metros por delante del operario que recoge."
      },
      {
        question: "¿Qué ocurre si hay exceso de residuos durante la Fase 3?",
        options: ["Se comunica al Coordinador/a", "Se deja para la siguiente jornada", "Uno de los operarios de barrido apoya en la recogida", "El conductor ayuda a recoger"],
        correct: 2,
        explanation: "Si hay exceso de residuos, uno de los operarios de barrido apoya en la recogida."
      },
      {
        question: "¿Qué se hace cuando la tolva está llena y hay que empujar los residuos al fondo?",
        options: ["El conductor activa el peine desde la cabina", "Se avisa al conductor y se activa el peine hidráulico desde el mando del lateral trasero", "Se espera al Coordinador/a", "Se va directamente a descarga"],
        correct: 1,
        explanation: "Cuando la tolva está llena, se avisa al conductor para que detenga el vehículo y se activa el peine hidráulico desde el mando del lateral trasero."
      },
      {
        question: "¿Desde dónde se activa el peine hidráulico?",
        options: ["Desde la cabina del conductor", "Desde el mando del lateral trasero", "Desde el mando del lateral delantero", "Desde el suelo con un mando a distancia"],
        correct: 1,
        explanation: "El peine hidráulico se activa desde el mando del lateral trasero."
      },
      {
        question: "¿Cómo deben estar los brazos durante la maniobra del peine hidráulico?",
        options: ["Flexionados", "SIEMPRE extendidos", "Cruzados", "A los lados del cuerpo"],
        correct: 1,
        explanation: "SIEMPRE con brazos extendidos y manteniendo contacto visual con el equipo durante la maniobra."
      },
      {
        question: "¿Qué se debe mantener durante la maniobra del peine hidráulico?",
        options: ["Silencio absoluto", "Contacto visual con el equipo", "Los brazos flexionados", "Distancia de 10 metros"],
        correct: 1,
        explanation: "Se debe mantener contacto visual con el equipo durante la maniobra del peine hidráulico."
      },
      {
        question: "¿Qué se debe hacer cuando la tolva del vehículo está llena durante el barrido?",
        options: ["Seguir empujando residuos hasta el final", "Avisar al conductor/a para que detenga el vehículo y proceda a la descarga", "Llamar al Coordinador/a para que envíe otro vehículo", "Esperar a que se vacíe sola"],
        correct: 1,
        explanation: "Cuando la tolva esté llena, se avisa al conductor/a para que detenga el vehículo."
      },
      {
        question: "¿Qué hace el conductor cuando la tolva está llena y no se pueden empujar más residuos?",
        options: ["Sigue barriendo", "Va a descarga acompañado del Operario C", "Va a descarga solo", "Espera instrucciones del Coordinador/a"],
        correct: 1,
        explanation: "Cuando la tolva está llena y no se pueden empujar más residuos, el conductor irá a descarga acompañado del Operario C."
      },
      {
        question: "¿De quién es la responsabilidad del vaciado de la tolva?",
        options: ["Del Operario C", "Del Operario A", "Del Coordinador/a", "Del conductor/a"],
        correct: 3,
        explanation: "El vaciado de la tolva es responsabilidad del conductor/a, aunque puede ir acompañado de un operario."
      },
      {
        question: "¿Hasta qué posición activa el operario el peine hidráulico durante el vaciado?",
        options: ["Hasta la posición media", "Hasta la posición de apertura máxima", "Hasta que se vacíe la mitad", "No se activa el peine durante el vaciado"],
        correct: 1,
        explanation: "El operario activa el peine hidráulico hasta la posición de apertura máxima."
      },
      {
        question: "¿Qué tienen PROHIBIDO hacer los operarios que no ayudan en la descarga?",
        options: ["Hablar por teléfono", "Descender del vehículo durante la maniobra", "Mirar por la ventana", "Comer o beber"],
        correct: 1,
        explanation: "Los operarios que no ayudan en la descarga tienen PROHIBIDO descender del vehículo durante la maniobra."
      },
      {
        question: "¿Cuándo se van TODOS los operarios a descargar?",
        options: ["Cada vez que se llena la tolva", "Solo a última hora si no hay tiempo de volver a recoger antes de fin de jornada", "Cuando el conductor lo decide", "Nunca"],
        correct: 1,
        explanation: "Solo se van TODOS los operarios a descargar a última hora si no hay tiempo de volver a recoger antes de fin de jornada."
      },
      {
        question: "¿Qué medio de comunicación utiliza el conductor de la brigada?",
        options: ["Radio fija", "Teléfono móvil", "Megáfono", "Solo comunicación verbal"],
        correct: 1,
        explanation: "El conductor/a dispone de teléfono móvil — el equipo está en comunicación permanente con el Coordinador/a."
      },
      {
        question: "¿Con quién mantiene comunicación permanente el equipo de brigada?",
        options: ["Entre los operarios solamente", "Con el Coordinador/a", "Con otros equipos de brigada", "Con el Ayuntamiento"],
        correct: 1,
        explanation: "El equipo está en comunicación permanente con el Coordinador/a."
      },
      {
        question: "¿En cuántas zonas suele trabajar el servicio de brigada a lo largo del día?",
        options: ["En una sola zona", "En varias zonas", "Siempre en la misma zona", "Depende del clima"],
        correct: 1,
        explanation: "Este servicio normalmente trabaja en varias zonas a lo largo del día."
      },
      {
        question: "¿Cuántos objetivos tiene el puesto de trabajo de barrido mediante brigada?",
        options: ["4", "5", "6", "9"],
        correct: 2,
        explanation: "El puesto de trabajo de barrido mediante brigada tiene 6 objetivos definidos."
      },
      {
        question: "¿Qué operario extra se puede añadir en eventos y para qué función?",
        options: ["Un operario extra para barrer", "Un operario extra solo para vaciado de papeleras", "Un operario extra para conducir", "Un operario extra para limpiar contenedores"],
        correct: 1,
        explanation: "En eventos se puede añadir 1 operario/a extra solo para vaciado de papeleras."
      },
      {
        question: "¿Qué tipo de vehículo utiliza la brigada de barrido?",
        options: ["Vehículo auxiliar", "Barredora mecánica", "Recolector compactador carga trasera con cabina ampliada", "Furgoneta de reparto"],
        correct: 2,
        explanation: "La brigada utiliza un vehículo recolector compactador carga trasera con cabina ampliada."
      }
    ]
  },
  {
    id: 4,
    number: "04",
    title: "Barrido Mixto",
    description: "Combina barrido mecánico (barredora) con barrido manual (escoba o sopladora). Requiere coordinación constante entre el operario/a y el conductor/a de la barredora.",
    tools: ["Escoba", "Sopladora", "Barredora mecánica", "Espuerta", "Bolsas", "Llave papeleras", "Tablillas", "Vehículo auxiliar (con sopladora)", "Gasolina y aceite (sopladora)", "Llave bujías", "Destornillador", "Cubo"],
    phases: [
      {
        title: "Fase 1 — Traslado a la zona de trabajo",
        items: [
          "Con escoba: preparar herramientas (escoba, espuerta, bolsas, llave papeleras, tablillas) e ir a pie al punto de inicio.",
          "Con sopladora: ir en vehículo auxiliar con sopladora, gasolina, aceite, llave bujías, destornillador, cubo, bolsas y llave papeleras.",
          "Con sopladora: seguir las directrices de conducción del Barrido Manual con Vehículo Auxiliar.",
          "Llegar al punto de inicio ANTES que la barredora para tener la zona lista cuando llegue."
        ]
      },
      {
        title: "Fase 2 — Vaciado de papeleras y retirada de voluminosos",
        items: [
          "Vaciar papeleras y retirar residuos siguiendo las fases 2 y 4 del barrido manual individual.",
          "Bolsas llenas: en la caja del vehículo auxiliar (si se lleva) o en el contenedor más próximo.",
          "Si hay más de un operario, repartir estas tareas equitativamente.",
          "Continuar hasta que llegue la barredora mecánica."
        ]
      },
      {
        title: "Fase 3A — Barrido mixto con escoba",
        items: [
          "El operario se desplaza hacia la zona exterior (límite acera-viviendas) y barre empujando residuos hacia el bordillo y la calzada.",
          "La barredora se sitúa siempre UNOS METROS POR DETRÁS de la línea de barrido.",
          "Si hay dos operarios: uno barre la franja exterior (posición más adelantada) y otro la franja interior (bordillo), este último acerca los residuos a la zona de la barredora.",
          "En calles estrechas sin vehículos: los operarios trabajan desde los dos laterales a la misma altura; la barredora va un poco retrasada."
        ]
      },
      {
        title: "Fase 3B — Barrido mixto con sopladora",
        items: [
          "Requiere curso formativo previo en funcionamiento, mantenimiento y PRL de la sopladora.",
          "Dirigir el chorro de aire hacia la calzada / zona de influencia de la barredora (mismo esquema que con escoba).",
          "Limpiar también debajo de los coches.",
          "Prestar especial atención a soplar bajo vehículos y zonas de contenedores.",
          "Evitar dirigir el aire hacia zonas polvorientas; controlar la potencia en alcorques y zonas con peatones.",
          "Cuando la barredora va a vaciar su tolva (~45 min antes que el operario): continuar con vaciado de papeleras / voluminosos / limpieza de contenedores."
        ]
      },
      {
        title: "Fase 4 — Comunicación al finalizar la jornada/tarea",
        items: [
          "De vuelta en el centro de trabajo, informar al Coordinador/a de las incidencias.",
          "Si algún objetivo no se cumple, la actividad no se considera correctamente realizada."
        ]
      }
    ],
    objectives: [
      "Que no existan basura ni residuos a granel en la acera ni debajo de los bancos.",
      "Que el contorno de los contenedores de residuos estén libres de residuos y ordenados.",
      "Que estén las papeleras vacías y limpios sus alrededores.",
      "Que no se encuentren residuos o enseres obstaculizando la vía pública.",
      "Que se hayan eliminado residuos vegetales, tierra y excrementos.",
      "Que la zona de bordillo libre haya sido barrida y los residuos recogida.",
      "Que las matas de altura superior a dos dedos estén desbrozadas.",
      "Que se hayan retirado todos los enseres de tamaño abarcable en contorno de contenedores o en la vía pública.",
      "Si se usó escoba: limpiar el bordillo libre. Si se usó sopladora: limpiar también bajo los coches."
    ],
    questions: [
      {
        question: "¿Cuál es la combinación que define el barrido mixto?",
        options: ["Barrido manual con baldeo", "Barrido mecánico (barredora) con barrido manual (escoba o sopladora)", "Dos barredoras trabajando en paralelo", "Barrido manual con vehículo recolector"],
        correct: 1,
        explanation: "El barrido mixto combina barrido mecánico (barredora) con barrido manual (escoba o sopladora)."
      },
      {
        question: "¿Cuál es el equipo mínimo necesario para realizar un barrido mixto?",
        options: ["2 operarios de barrido sin barredora", "Barredora mecánica con conductor/a + 1 operario/a de barrido", "1 operario con escoba y 1 con sopladora", "Barredora autónoma sin conductor"],
        correct: 1,
        explanation: "El equipo mínimo es: barredora mecánica con conductor/a + 1 operario/a de barrido (con escoba o sopladora)."
      },
      {
        question: "¿Qué herramientas se llevan cuando el operario va con escoba en el barrido mixto?",
        options: ["Escoba, sopladora, bolsas y llave papeleras", "Escoba, espuerta, bolsas, llave papeleras y tablillas", "Escoba, cubo, gasolina y aceite", "Escoba, destornillador, llave bujías y tablillas"],
        correct: 1,
        explanation: "Con escoba se llevan: escoba, espuerta, bolsas, llave papeleras y tablillas."
      },
      {
        question: "¿Qué herramientas se llevan cuando el operario va con sopladora en el barrido mixto?",
        options: ["Escoba, espuerta, bolsas y llave papeleras", "Sopladora, gasolina, aceite, llave bujías, destornillador, cubo, bolsas y llave papeleras", "Solo sopladora y gasolina", "Sopladora, manguera, cepillo y detergente"],
        correct: 1,
        explanation: "Con sopladora se lleva: vehículo auxiliar con sopladora, gasolina, aceite, llave bujías, destornillador, cubo, bolsas y llave papeleras."
      },
      {
        question: "¿Cómo se desplaza el operario al punto de inicio cuando trabaja con escoba?",
        options: ["En vehículo auxiliar", "En la barredora mecánica", "A pie", "En bicicleta"],
        correct: 2,
        explanation: "Con escoba, el operario va a pie al punto de inicio."
      },
      {
        question: "¿Cómo se desplaza el operario al punto de inicio cuando trabaja con sopladora?",
        options: ["A pie con la sopladora al hombro", "En la barredora mecánica", "En vehículo auxiliar siguiendo directrices del Barrido Manual con Vehículo Auxiliar", "En transporte público"],
        correct: 2,
        explanation: "Con sopladora, el operario va en vehículo auxiliar siguiendo las directrices de conducción del Barrido Manual con Vehículo Auxiliar."
      },
      {
        question: "¿Quién debe llegar primero al punto de inicio en el barrido mixto?",
        options: ["La barredora mecánica", "El operario de barrido manual, antes que la barredora", "Ambos deben llegar al mismo tiempo", "Da igual el orden de llegada"],
        correct: 1,
        explanation: "El operario debe llegar ANTES que la barredora para tener la zona lista cuando llegue."
      },
      {
        question: "¿Qué fases del barrido manual individual se siguen para el vaciado de papeleras en el barrido mixto?",
        options: ["Fases 1 y 3", "Fases 2 y 4", "Fases 1 y 2", "Fases 3 y 4"],
        correct: 1,
        explanation: "Se vacían papeleras y se retiran residuos siguiendo las fases 2 y 4 del barrido manual individual."
      },
      {
        question: "¿Dónde se depositan las bolsas llenas durante la Fase 2 del barrido mixto?",
        options: ["En la acera junto al bordillo", "En la caja del vehículo auxiliar o en el contenedor más próximo", "Dentro de la tolva de la barredora", "En el centro de trabajo"],
        correct: 1,
        explanation: "Las bolsas llenas se depositan en la caja del vehículo auxiliar (si se lleva) o en el contenedor más próximo."
      },
      {
        question: "Cuando hay más de un operario en la Fase 2, ¿cómo se reparten las tareas de vaciado de papeleras?",
        options: ["El operario más antiguo hace todo el vaciado", "Se reparten equitativamente", "Solo lo hace el que lleva escoba", "Lo hace el conductor de la barredora"],
        correct: 1,
        explanation: "Si hay más de un operario, se reparten estas tareas equitativamente."
      },
      {
        question: "¿Hasta cuándo se continúa con la Fase 2 (vaciado de papeleras) en el barrido mixto?",
        options: ["Hasta que se llenen 10 bolsas", "Hasta que llegue la barredora mecánica", "Hasta que el Coordinador/a dé la orden", "Hasta que termine la jornada"],
        correct: 1,
        explanation: "Se continúa con el vaciado de papeleras hasta que llegue la barredora mecánica."
      },
      {
        question: "En la Fase 3A (escoba), ¿hacia dónde se desplaza el operario para empezar a barrer?",
        options: ["Hacia la calzada", "Hacia la zona exterior (límite acera-viviendas)", "Hacia el contenedor más cercano", "Hacia la barredora"],
        correct: 1,
        explanation: "El operario se desplaza hacia la zona exterior (límite acera-viviendas) y barre empujando residuos hacia el bordillo y la calzada."
      },
      {
        question: "En la Fase 3A (escoba), ¿en qué dirección empuja el operario los residuos?",
        options: ["Desde la calzada hacia la acera", "Desde el bordillo hacia las viviendas", "Desde la zona exterior hacia el bordillo y la calzada", "En círculos alrededor de las papeleras"],
        correct: 2,
        explanation: "El operario barre empujando residuos desde la zona exterior hacia el bordillo y la calzada."
      },
      {
        question: "¿Cuál es la regla clave del barrido mixto respecto a la gestión de residuos durante el barrido?",
        options: ["Se crean pilas cada 10 metros para facilitar la recogida", "No se crean pilas de residuos, solo se desplazan hacia la zona de la barredora", "Se acumulan en el bordillo hasta que pase la barredora", "Se meten directamente en bolsas sin desplazarlos"],
        correct: 1,
        explanation: "En el barrido mixto NO SE CREAN PILAS de residuos. Solo se desplazan hacia la zona de la barredora."
      },
      {
        question: "¿Dónde se sitúa la barredora respecto a la línea de barrido del operario en la Fase 3A?",
        options: ["Delante del operario para abrir paso", "A la misma altura que el operario", "Unos metros por detrás de la línea de barrido", "A 100 metros de distancia por seguridad"],
        correct: 2,
        explanation: "La barredora se sitúa siempre UNOS METROS POR DETRÁS de la línea de barrido."
      },
      {
        question: "Cuando hay dos operarios en la Fase 3A con escoba, ¿qué franja barre el operario en posición más adelantada?",
        options: ["La franja interior junto al bordillo", "La franja exterior (límite acera-viviendas)", "La calzada completa", "Solo las papeleras"],
        correct: 1,
        explanation: "Si hay dos operarios: uno barre la franja exterior (posición más adelantada) y otro la franja interior (bordillo)."
      },
      {
        question: "Cuando hay dos operarios en la Fase 3A con escoba, ¿qué función tiene el operario de la franja interior/bordillo?",
        options: ["Vaciar papeleras exclusivamente", "Acerca los residuos a la zona de la barredora", "Conducir la barredora mecánica", "Señalizar la zona de trabajo"],
        correct: 1,
        explanation: "El operario de la franja interior/bordillo acerca los residuos a la zona de la barredora."
      },
      {
        question: "¿Cómo trabajan los operarios en calles estrechas sin vehículos durante el barrido mixto con escoba?",
        options: ["Solo trabaja uno de los operarios", "Desde los dos laterales a la misma altura, con la barredora un poco retrasada", "En zigzag alternando lados", "Uno barre la acera y otro la calzada por separado"],
        correct: 1,
        explanation: "En calles estrechas sin vehículos: los operarios trabajan desde los dos laterales a la misma altura; la barredora va un poco retrasada."
      },
      {
        question: "¿Qué requisito formativo es imprescindible para operar la sopladora en el barrido mixto?",
        options: ["Solo tener experiencia práctica previa", "Curso formativo previo en funcionamiento, mantenimiento y PRL de la sopladora", "Carnet de conducir tipo B", "Autorización verbal del supervisor"],
        correct: 1,
        explanation: "El uso de la sopladora requiere curso formativo previo en funcionamiento, mantenimiento y PRL de la sopladora."
      },
      {
        question: "En la Fase 3B (sopladora), ¿hacia dónde se debe dirigir el chorro de aire?",
        options: ["Hacia las fachadas de los edificios", "Hacia la calzada / zona de influencia de la barredora", "Hacia las zonas polvorientas", "Hacia los peatones para que se aparten"],
        correct: 1,
        explanation: "Se debe dirigir el chorro de aire hacia la calzada / zona de influencia de la barredora."
      },
      {
        question: "¿Qué zona específica se debe limpiar con la sopladora que no se puede alcanzar con escoba?",
        options: ["Las papeleras", "Debajo de los coches", "Los contenedores por fuera", "El bordillo"],
        correct: 1,
        explanation: "Con la sopladora se debe limpiar también debajo de los coches, prestando especial atención a soplar bajo vehículos."
      },
      {
        question: "¿Qué dos zonas requieren especial atención al soplar con la sopladora?",
        options: ["Papeleras y bancos", "Bajo vehículos y zonas de contenedores", "Farolas y señales de tráfico", "Buzones y portales"],
        correct: 1,
        explanation: "Se debe prestar especial atención a soplar bajo vehículos y zonas de contenedores."
      },
      {
        question: "¿Qué se debe evitar al dirigir el chorro de aire de la sopladora?",
        options: ["Zonas de contenedores", "Dirigir el aire hacia zonas polvorientas", "Debajo de los coches", "La calzada"],
        correct: 1,
        explanation: "Se debe evitar dirigir el aire hacia zonas polvorientas."
      },
      {
        question: "¿En qué dos situaciones se debe controlar especialmente la potencia de la sopladora?",
        options: ["En calles estrechas y en glorietas", "En alcorques y zonas con peatones", "En cuestas y en bajadas", "En zonas de contenedores y papeleras"],
        correct: 1,
        explanation: "Se debe controlar la potencia en alcorques y zonas con peatones."
      },
      {
        question: "¿Cuánto tiempo antes que el operario va la barredora a vaciar su tolva en el barrido mixto con sopladora?",
        options: ["Unos 15 minutos", "Unos 30 minutos", "Unos 45 minutos", "Unos 60 minutos"],
        correct: 2,
        explanation: "La barredora va a vaciar su tolva aproximadamente 45 minutos antes que el operario."
      },
      {
        question: "¿Qué debe hacer el operario con sopladora mientras la barredora va a vaciar la tolva?",
        options: ["Esperar a que vuelva la barredora", "Continuar con vaciado de papeleras, voluminosos y limpieza de contenedores", "Volver al centro de trabajo", "Parar la sopladora y descansar"],
        correct: 1,
        explanation: "Cuando la barredora va a vaciar su tolva, el operario debe continuar con vaciado de papeleras, voluminosos y limpieza de contenedores."
      },
      {
        question: "¿Qué tipo de vehículo se utiliza para el desplazamiento con sopladora en el barrido mixto?",
        options: ["La propia barredora mecánica", "Un vehículo auxiliar con sopladora", "Una bicicleta con remolque", "No se utiliza vehículo"],
        correct: 1,
        explanation: "Con sopladora se utiliza un vehículo auxiliar con sopladora."
      },
      {
        question: "¿Qué combustible y lubricante se deben llevar cuando se trabaja con sopladora?",
        options: ["Solo gasóleo", "Gasolina y aceite", "Solo aceite", "Gas natural y agua"],
        correct: 1,
        explanation: "Con sopladora se llevan gasolina y aceite, además de otras herramientas."
      },
      {
        question: "¿Qué herramienta específica para bujías se incluye en el equipo de sopladora?",
        options: ["Llave de pipa", "Llave bujías", "Llave inglesa", "Llave Allen"],
        correct: 1,
        explanation: "En el equipo de sopladora se incluye una llave bujías."
      },
      {
        question: "¿Qué herramienta de fijación se lleva en el equipo de sopladora además de la llave bujías?",
        options: ["Martillo", "Destornillador", "Sierra", "Alicates"],
        correct: 1,
        explanation: "En el equipo de sopladora se incluye un destornillador."
      },
      {
        question: "¿Qué recipiente se lleva en el equipo de sopladora para contener residuos?",
        options: ["Solo bolsas", "Cubo y bolsas", "Solo cubo", "Contenedor portátil"],
        correct: 1,
        explanation: "Con sopladora se llevan cubo y bolsas."
      },
      {
        question: "¿Qué directrices de conducción debe seguir el operario que va en vehículo auxiliar con sopladora?",
        options: ["Las del Barrido Mixto con Escoba", "Las del Barrido Manual con Vehículo Auxiliar", "Las de la barredora mecánica", "No hay directrices específicas"],
        correct: 1,
        explanation: "Con sopladora se siguen las directrices de conducción del Barrido Manual con Vehículo Auxiliar."
      },
      {
        question: "¿Qué herramienta de apertura se lleva tanto con escoba como con sopladora en el barrido mixto?",
        options: ["Llave de arqueta", "Llave papeleras", "Llave bujías", "Llave inglesa"],
        correct: 1,
        explanation: "La llave papeleras se lleva tanto con escoba como con sopladora."
      },
      {
        question: "¿Qué herramienta es exclusiva del equipo con escoba y NO se lleva con sopladora?",
        options: ["Bolsas", "Llave papeleras", "Espuerta", "Tablillas"],
        correct: 2,
        explanation: "La espuerta se lleva con escoba (escoba, espuerta, bolsas, llave papeleras, tablillas) pero no en el equipo de sopladora."
      },
      {
        question: "¿Qué herramienta es exclusiva del equipo con sopladora y NO se lleva con escoba?",
        options: ["Bolsas", "Llave papeleras", "Destornillador", "Tablillas"],
        correct: 2,
        explanation: "El destornillador se lleva con sopladora pero no con escoba."
      },
      {
        question: "¿En qué fase del barrido mixto se realiza el vaciado de papeleras y retirada de voluminosos?",
        options: ["Fase 1", "Fase 2", "Fase 3A", "Fase 4"],
        correct: 1,
        explanation: "El vaciado de papeleras y retirada de voluminosos se realiza en la Fase 2."
      },
      {
        question: "¿En qué fase del barrido mixto se realiza el barrido propiamente dicho con escoba?",
        options: ["Fase 1", "Fase 2", "Fase 3A", "Fase 4"],
        correct: 2,
        explanation: "El barrido con escoba se realiza en la Fase 3A."
      },
      {
        question: "¿En qué fase del barrido mixto se realiza el barrido con sopladora?",
        options: ["Fase 1", "Fase 2", "Fase 3B", "Fase 4"],
        correct: 2,
        explanation: "El barrido con sopladora se realiza en la Fase 3B."
      },
      {
        question: "¿En qué fase del barrido mixto se informa al Coordinador/a de las incidencias?",
        options: ["Fase 1", "Fase 2", "Fase 3B", "Fase 4"],
        correct: 3,
        explanation: "En la Fase 4, de vuelta en el centro de trabajo, se informa al Coordinador/a de las incidencias."
      },
      {
        question: "¿Cuál es uno de los 9 objetivos del barrido mixto respecto a las papeleras?",
        options: ["Que estén llenas al 50%", "Que estén vacías y limpios sus alrededores", "Que estén pintadas de nuevo", "Que se retiren de la vía pública"],
        correct: 1,
        explanation: "Uno de los objetivos es que estén las papeleras vacías y limpios sus alrededores."
      },
      {
        question: "¿Cuál es uno de los 9 objetivos del barrido mixto respecto a los contenedores?",
        options: ["Que estén vacíos de residuos", "Que el contorno esté libre de residuos y ordenados", "Que se retiren de la vía", "Que se laven con agua a presión"],
        correct: 1,
        explanation: "Uno de los objetivos es que el contorno de los contenedores de residuos esté libre de residuos y ordenados."
      },
      {
        question: "¿Cuál es uno de los 9 objetivos del barrido mixto respecto a la vegetación?",
        options: ["Que no haya ningún árbol", "Que las matas de altura superior a dos dedos estén desbrozadas", "Que se planten nuevas matas", "Que se riegue la vegetación"],
        correct: 1,
        explanation: "Uno de los objetivos es que las matas de altura superior a dos dedos estén desbrozadas."
      },
      {
        question: "¿Cuál es la diferencia en el objetivo específico entre usar escoba y sopladora en el barrido mixto?",
        options: ["Con escoba: limpiar bajo los coches; con sopladora: limpiar el bordillo libre", "Con escoba: limpiar el bordillo libre; con sopladora: limpiar también bajo los coches", "No hay diferencia en los objetivos", "Con escoba: limpiar contenedores; con sopladora: limpiar papeleras"],
        correct: 1,
        explanation: "Si se usó escoba: limpiar el bordillo libre. Si se usó sopladora: limpiar también bajo los coches."
      },
      {
        question: "¿Qué ocurre si algún objetivo del barrido mixto no se cumple?",
        options: ["Se considera parcialmente realizada", "La actividad no se considera correctamente realizada", "Se repite solo la fase afectada", "Se anota en el parte pero se da por válida"],
        correct: 1,
        explanation: "Si algún objetivo no se cumple, la actividad no se considera correctamente realizada."
      },
      {
        question: "¿Cuál es la diferencia principal de desplazamiento entre el operario con escoba y con sopladora en la Fase 1?",
        options: ["Ambos van a pie", "Ambos van en vehículo auxiliar", "Con escoba va a pie; con sopladora va en vehículo auxiliar", "Con escoba va en barredora; con sopladora va a pie"],
        correct: 2,
        explanation: "Con escoba el operario va a pie al punto de inicio; con sopladora va en vehículo auxiliar."
      }
    ]
  },
  {
    id: 5,
    number: "05",
    title: "Baldeo Manual con Carrito Porta-manguera",
    description: "Usa agua de una red de riego (alta o baja presión). Alta presión: el carrito solo porta la manguera. Baja presión: el carrito lleva también un grupo de presión. Normalmente un solo operario/a.",
    tools: ["Carrito portamanguera", "Manguera", "Kit de reparación de pinchazos", "Llave de arqueta de red de riego", "Tablillas", "Bolsas", "Cepillo", "Detergente en polvo", "Rasqueta (para chicles)", "Elementos de señalización"],
    phases: [
      {
        title: "Fase 1 — Traslado y selección del tramo",
        items: [
          "Recoger herramientas en el centro de trabajo.",
          "Si lleva grupo de presión: comprobar combustible lleno y probar el arranque antes de desplazarse.",
          "Observar pendientes del terreno para trabajar a favor de ellas.",
          "La zona de trabajo no debe ser extremadamente grande (evita entorpecer el tráfico peatonal).",
          "OBLIGATORIO: señalizar el perímetro de la zona de trabajo con los elementos del Coordinador/a."
        ]
      },
      {
        title: "Fase 2 — Revisión del equipo de trabajo",
        items: [
          "Extender la manguera e inspeccionar visualmente el estado de manguera y abrazaderas.",
          "REPARACIÓN DE PINCHAZOS: (1) Cortar con navaja el trozo a reparar (lo más pequeño posible). (2) Pasar una abrazadera por cada extremo. (3) Insertar un empalme en ambos extremos. (4) Posicionar abrazaderas y cerrarlas con la llave hasta que estén firmes sin excesiva fuerza (el exceso pasa la rosca).",
          "Conectar la manguera a la red de riego para verificar que no quede ningún pinchazo.",
          "Si el carro lleva grupo de presión: conectar el extremo de la manguera a la toma de admisión de la bomba y otro rollo a la salida. Arrancar según instrucciones del equipo."
        ]
      },
      {
        title: "Fase 3 — Baldeo manual",
        items: [
          "Abrir la llave de paso de agua en la boquilla con cuidado de la presión.",
          "Dirigir el chorro hacia el pavimento con movimientos de abanico suaves y controlados.",
          "NUNCA atacar la mancha de forma perpendicular — en condiciones normales, ángulo de 60°. Manchas incrustadas: aumentar el ángulo.",
          "Extender la operación a todo el ancho de la acera y bordillos, con especial atención a esquinas, bajo bancos y bajo coches.",
          "Eliminar restos de orín y manchas superficiales.",
          "Si las manchas no salen con agua: aplicar detergente en polvo SOBRE PAVIMENTO YA MOJADO y frotar con cepillo. El detergente NO funciona en seco.",
          "Para chicles: cortar el agua, usar la rasqueta sin aplicar presión excesiva (riesgo de dañar el pavimento).",
          "Si se acumula mucha suciedad que impide avanzar: cortar el agua, recoger los residuos con tablillas y depositarlos en bolsas.",
          "Bolsas llenas: en el contenedor gris más próximo.",
          "Tener cuidado de no atascar rejillas de alcantarillado con residuos arrastrados.",
          "La manguera debe quedar siempre fuera del radio de influencia del tráfico rodado.",
          "Al terminar el tramo: cerrar el paso de agua, desconectar la manguera con el enganche rápido y cerrar con llave la arqueta.",
          "Recoger señalización empezando por la colocada primero (zona más seca).",
          "Con grupo de presión: descargar la presión de las mangueras ANTES de desconectarlas."
        ]
      },
      {
        title: "Fase 4 — Comunicación al finalizar la jornada/tarea",
        items: [
          "Comunicar al Coordinador/a el desarrollo de la actividad y las incidencias.",
          "Si se termina antes del horario de fin: comunicarlo y quedar a disposición del mando."
        ]
      }
    ],
    objectives: [
      "Se han eliminado de la vía pública los excrementos, la tierra, manchas superficiales y restos de orín.",
      "Se ha limpiado la suciedad acumulada debajo de los coches en zona de aparcamiento.",
      "Las esquinas y los bajo bancos han sido baldeadas correctamente.",
      "Se han retirado los residuos arrastrados durante el baldeo.",
      "Se han dejado libres de residuos las rejillas y desagües pluviales.",
      "No han quedado chicles pegados en la zona peatonal del tramo.",
      "No se observan rastros de agua sucia o charcos en el tramo baldeado.",
      "Las papeleras están vacías.",
      "No se observan manchas superficiales en el pavimento."
    ],
    questions: [
      {
        question: "¿Qué tipo de agua utiliza el baldeo manual con carrito porta-manguera?",
        options: ["Agua de cisterna propia", "Agua de red de riego", "Agua de pozo", "Agua reciclada del ayuntamiento"],
        correct: 1,
        explanation: "Usa agua de una red de riego (alta o baja presión)."
      },
      {
        question: "En baldeo con carrito, cuando la red es de ALTA presión, ¿qué lleva el carrito?",
        options: ["Solo porta la manguera", "Lleva también grupo de presión", "Lleva depósito de agua propio", "Lleva detergente industrial"],
        correct: 0,
        explanation: "Alta presión: el carrito solo porta la manguera. Baja presión: el carrito lleva también un grupo de presión."
      },
      {
        question: "En baldeo con carrito, cuando la red es de BAJA presión, ¿qué lleva el carrito?",
        options: ["Solo porta la manguera", "Lleva también un grupo de presión", "Lleva un depósito de 500 litros", "Lleva motor eléctrico"],
        correct: 1,
        explanation: "Baja presión: el carrito lleva también un grupo de presión."
      },
      {
        question: "¿Cuántos operarios trabajan normalmente en el baldeo manual con carrito porta-manguera?",
        options: ["Dos operarios", "Tres operarios", "Normalmente un solo operario/a", "Un equipo de cuatro personas"],
        correct: 2,
        explanation: "Normalmente un solo operario/a realiza el baldeo manual con carrito porta-manguera."
      },
      {
        question: "¿Cuál de estas herramientas NO forma parte del equipo del baldeo con carrito?",
        options: ["Rasqueta para chicles", "Cepillo", "Sopladora", "Tablillas"],
        correct: 2,
        explanation: "Las herramientas son: carrito portamanguera, manguera, kit de reparación de pinchazos, llave de arqueta, tablillas, bolsas, cepillo, detergente en polvo, rasqueta y elementos de señalización. La sopladora no está en este puesto."
      },
      {
        question: "¿Qué se debe observar en el terreno durante la Fase 1 para planificar el trabajo?",
        options: ["El tipo de pavimento", "Las pendientes del terreno para trabajar a favor de ellas", "La ubicación de las papeleras", "La hora del día"],
        correct: 1,
        explanation: "Observar pendientes del terreno para trabajar a favor de ellas."
      },
      {
        question: "¿Por qué la zona de trabajo no debe ser extremadamente grande?",
        options: ["Porque se acaba el agua", "Para evitar entorpecer el tráfico peatonal", "Porque el operario se cansa", "Por normativa municipal"],
        correct: 1,
        explanation: "La zona de trabajo no debe ser extremadamente grande para evitar entorpecer el tráfico peatonal."
      },
      {
        question: "¿Quién proporciona los elementos de señalización del perímetro?",
        options: ["El operario los lleva del centro", "El Coordinador/a", "El ayuntamiento los deja en la zona", "Se compran en el momento"],
        correct: 1,
        explanation: "OBLIGATORIO: señalizar el perímetro de la zona de trabajo con los elementos del Coordinador/a."
      },
      {
        question: "¿Qué se debe comprobar del grupo de presión ANTES de desplazarse a la zona?",
        options: ["Que la manguera esté conectada", "Combustible lleno y probar el arranque", "Que las luces funcionen", "Que el aceite esté limpio"],
        correct: 1,
        explanation: "Si lleva grupo de presión: comprobar combustible lleno y probar el arranque antes de desplazarse."
      },
      {
        question: "¿Cuál es el primer paso de la Fase 2 (revisión del equipo)?",
        options: ["Conectar la manguera a la red", "Extender la manguera e inspeccionar visualmente manguera y abrazaderas", "Arrancar el grupo de presión", "Abrir la llave de paso"],
        correct: 1,
        explanation: "Extender la manguera e inspeccionar visualmente el estado de manguera y abrazaderas."
      },
      {
        question: "En la reparación de pinchazos, ¿cuál es el PASO 1?",
        options: ["Pasar abrazaderas por cada extremo", "Insertar un empalme en ambos extremos", "Cortar con navaja el trozo a reparar (lo más pequeño posible)", "Cerrar las abrazaderas con la llave"],
        correct: 2,
        explanation: "Paso 1: Cortar con navaja el trozo a reparar (lo más pequeño posible)."
      },
      {
        question: "En la reparación de pinchazos, ¿cuál es el PASO 2?",
        options: ["Cortar con navaja el trozo dañado", "Pasar una abrazadera por cada extremo", "Insertar un empalme en ambos extremos", "Probar con agua la reparación"],
        correct: 1,
        explanation: "Paso 2: Pasar una abrazadera por cada extremo."
      },
      {
        question: "En la reparación de pinchazos, ¿cuál es el PASO 3?",
        options: ["Cortar el trozo dañado con navaja", "Pasar abrazaderas por los extremos", "Insertar un empalme en ambos extremos", "Cerrar las abrazaderas con la llave"],
        correct: 2,
        explanation: "Paso 3: Insertar un empalme en ambos extremos."
      },
      {
        question: "En la reparación de pinchazos, ¿cuál es el PASO 4?",
        options: ["Cortar con navaja el trozo dañado", "Pasar abrazaderas por cada extremo", "Insertar el empalme", "Posicionar abrazaderas y cerrarlas con la llave hasta firmes sin excesiva fuerza"],
        correct: 3,
        explanation: "Paso 4: Posicionar abrazaderas y cerrarlas con la llave hasta que estén firmes sin excesiva fuerza (el exceso pasa la rosca)."
      },
      {
        question: "¿Por qué no se debe aplicar excesiva fuerza al cerrar las abrazaderas?",
        options: ["Porque se rompe la manguera", "Porque se pasa la rosca", "Porque se deforma el empalme", "Porque se sale el agua"],
        correct: 1,
        explanation: "Cerrar las abrazaderas con la llave hasta que estén firmes sin excesiva fuerza — el exceso pasa la rosca."
      },
      {
        question: "Después de reparar un pinchazo, ¿qué se debe hacer para verificar la reparación?",
        options: ["Secar la zona y observar", "Conectar la manguera a la red de riego para verificar que no quede ningún pinchazo", "Llamar al Coordinador/a", "Aplicar jabón para buscar burbujas"],
        correct: 1,
        explanation: "Conectar la manguera a la red de riego para verificar que no quede ningún pinchazo."
      },
      {
        question: "Si el carrito lleva grupo de presión, ¿dónde se conecta un extremo de la manguera?",
        options: ["A la red de riego directamente", "A la toma de admisión de la bomba", "Al escape del motor", "Al depósito de combustible"],
        correct: 1,
        explanation: "Si el carro lleva grupo de presión: conectar el extremo de la manguera a la toma de admisión de la bomba y otro rollo a la salida."
      },
      {
        question: "Si el carrito lleva grupo de presión, ¿dónde se conecta el otro rollo de manguera?",
        options: ["A la toma de admisión", "A la salida de la bomba", "Directamente a la arqueta", "Al depósito de agua"],
        correct: 1,
        explanation: "Conectar el extremo de la manguera a la toma de admisión de la bomba y otro rollo a la salida."
      },
      {
        question: "¿Con qué movimientos se debe dirigir el chorro de agua hacia el pavimento?",
        options: ["Movimientos circulares rápidos", "Movimientos de abanico suaves y controlados", "Movimientos lineales directos", "Movimientos verticales intensos"],
        correct: 1,
        explanation: "Dirigir el chorro hacia el pavimento con movimientos de abanico suaves y controlados."
      },
      {
        question: "¿Cuál es el ángulo normal de ataque del chorro de agua sobre la mancha?",
        options: ["90° (perpendicular)", "30°", "60°", "45°"],
        correct: 2,
        explanation: "NUNCA atacar la mancha de forma perpendicular — en condiciones normales, ángulo de 60°."
      },
      {
        question: "¿Qué se debe hacer con manchas incrustadas respecto al ángulo del chorro?",
        options: ["Disminuir el ángulo", "Mantener 60°", "Aumentar el ángulo", "Atacar perpendicularmente"],
        correct: 2,
        explanation: "Manchas incrustadas: aumentar el ángulo."
      },
      {
        question: "¿Qué NUNCA se debe hacer al atacar una mancha con el chorro de agua?",
        options: ["Usar movimientos de abanico", "Atacar la mancha de forma perpendicular", "Trabajar a favor de la pendiente", "Prestar atención a las esquinas"],
        correct: 1,
        explanation: "NUNCA atacar la mancha de forma perpendicular — en condiciones normales, ángulo de 60°."
      },
      {
        question: "¿En qué zonas se debe prestar especial atención durante el baldeo?",
        options: ["Solo en el centro de la acera", "Esquinas, bajo bancos y bajo coches", "Solo en los bordillos", "Solo en las zonas llanas"],
        correct: 1,
        explanation: "Especial atención a esquinas, bajo bancos y bajo coches."
      },
      {
        question: "¿Qué tipo de restos se deben eliminar además de la suciedad general?",
        options: ["Hojas secas exclusivamente", "Restos de orín y manchas superficiales", "Solo papeles y plásticos", "Solo excrementos"],
        correct: 1,
        explanation: "Eliminar restos de orín y manchas superficiales."
      },
      {
        question: "¿Cuándo se aplica detergente en polvo durante el baldeo?",
        options: ["Siempre al inicio del baldeo", "Cuando las manchas no salen solo con agua", "Solo en zonas de chicles", "Antes de mojar el pavimento"],
        correct: 1,
        explanation: "Si las manchas no salen con agua: aplicar detergente en polvo SOBRE PAVIMENTO YA MOJADO y frotar con cepillo."
      },
      {
        question: "¿Qué ocurre si se aplica detergente en polvo sobre pavimento seco?",
        options: ["Mancha el pavimento permanentemente", "No tiene efecto limpiador", "Daña la manguera", "Hace resbalar al operario"],
        correct: 1,
        explanation: "El detergente NO funciona en seco. Se aplica sobre pavimento ya mojado."
      },
      {
        question: "¿Qué herramienta se usa para frotar el detergente sobre el pavimento?",
        options: ["La rasqueta", "Las tablillas", "El cepillo", "La manguera"],
        correct: 2,
        explanation: "Aplicar detergente en polvo sobre pavimento ya mojado y frotar con cepillo."
      },
      {
        question: "Para eliminar chicles, ¿qué se debe hacer PRIMERO?",
        options: ["Aplicar detergente", "Cortar el agua", "Usar la rasqueta directamente", "Aumentar la presión del agua"],
        correct: 1,
        explanation: "Para chicles: cortar el agua, usar la rasqueta sin aplicar presión excesiva."
      },
      {
        question: "¿Qué herramienta se usa para eliminar chicles?",
        options: ["El cepillo", "Las tablillas", "La rasqueta", "El detergente"],
        correct: 2,
        explanation: "Para chicles: cortar el agua, usar la rasqueta sin aplicar presión excesiva."
      },
      {
        question: "¿Por qué no se debe aplicar presión excesiva con la rasqueta al quitar chicles?",
        options: ["Porque se rompe la rasqueta", "Porque se daña el pavimento", "Porque salpica agua", "Porque se cansa el operario"],
        correct: 1,
        explanation: "Usar la rasqueta sin aplicar presión excesiva (riesgo de dañar el pavimento)."
      },
      {
        question: "¿Qué se hace cuando se acumula mucha suciedad que impide avanzar?",
        options: ["Seguir baldeando para arrastrarla", "Cortar el agua, recoger residuos con tablillas y depositar en bolsas", "Llamar al Coordinador/a para que envíe ayuda", "Aumentar la presión del agua"],
        correct: 1,
        explanation: "Si se acumula mucha suciedad que impide avanzar: cortar el agua, recoger los residuos con tablillas y depositarlos en bolsas."
      },
      {
        question: "¿Qué se debe evitar al arrastrar residuos con el agua del baldeo?",
        options: ["Que lleguen a las esquinas", "Atascar las rejillas de alcantarillado", "Que se mojen los bancos", "Que se acumulen bajo los coches"],
        correct: 1,
        explanation: "Tener cuidado de no atascar rejillas de alcantarillado con residuos arrastrados."
      },
      {
        question: "¿Dónde se deben depositar las bolsas llenas de residuos del baldeo?",
        options: ["En el contenedor amarillo", "En el contenedor azul", "En el contenedor gris más próximo", "En el centro de trabajo"],
        correct: 2,
        explanation: "Bolsas llenas: en el contenedor gris más próximo."
      },
      {
        question: "Al terminar el tramo, ¿cuál es el orden correcto de acciones?",
        options: ["Recoger señalización → cerrar agua → desconectar manguera", "Cerrar paso de agua → desconectar manguera con enganche rápido → cerrar arqueta con llave", "Desconectar manguera → cerrar arqueta → cerrar agua", "Cerrar arqueta → cerrar agua → recoger señalización"],
        correct: 1,
        explanation: "Al terminar el tramo: cerrar el paso de agua, desconectar la manguera con el enganche rápido y cerrar con llave la arqueta."
      },
      {
        question: "¿Cómo se desconecta la manguera al terminar el tramo?",
        options: ["Tirando con fuerza", "Con el enganche rápido", "Cortando con navaja", "Girando en sentido antihorario"],
        correct: 1,
        explanation: "Desconectar la manguera con el enganche rápido."
      },
      {
        question: "¿En qué orden se recoge la señalización al finalizar?",
        options: ["Empezando por la última colocada (zona más húmeda)", "Empezando por la colocada primero (zona más seca)", "Todas a la vez", "Primero las del centro de la calzada"],
        correct: 1,
        explanation: "Recoger señalización empezando por la colocada primero (zona más seca)."
      },
      {
        question: "¿Por qué se empieza a recoger la señalización por la zona más seca?",
        options: ["Porque es más visible", "Porque fue la primera en colocarse y es la zona más seca", "Porque así lo indica el Coordinador/a", "Porque es más fácil de ver"],
        correct: 1,
        explanation: "Recoger señalización empezando por la colocada primero (zona más seca)."
      },
      {
        question: "Con grupo de presión, ¿qué se debe hacer ANTES de desconectar las mangueras?",
        options: ["Cerrar la arqueta", "Descargar la presión de las mangueras", "Recoger la señalización", "Apagar el motor"],
        correct: 1,
        explanation: "Con grupo de presión: descargar la presión de las mangueras ANTES de desconectarlas."
      },
      {
        question: "¿Qué se comunica al Coordinador/a en la Fase 4?",
        options: ["Solo las incidencias graves", "El desarrollo de la actividad y las incidencias", "Solo la hora de finalización", "El consumo de combustible"],
        correct: 1,
        explanation: "Comunicar al Coordinador/a el desarrollo de la actividad y las incidencias."
      },
      {
        question: "Si se termina antes del horario de fin, ¿qué debe hacer el operario/a?",
        options: ["Irse a casa", "Comunicarlo y quedar a disposición del mando", "Buscar otro tramo por su cuenta", "Recoger todo y esperar en el centro"],
        correct: 1,
        explanation: "Si se termina antes del horario de fin: comunicarlo y quedar a disposición del mando."
      },
      {
        question: "¿Cuál de estos es un objetivo del puesto de baldeo con carrito?",
        options: ["Las papeleras están vacías", "Se han barrido las aceras", "Se han podado los árboles", "Se han pintado los bordillos"],
        correct: 0,
        explanation: "Uno de los 9 objetivos es: 'Las papeleras están vacías'."
      },
      {
        question: "¿Cuál de estos NO es un objetivo del puesto de baldeo con carrito?",
        options: ["No se observan manchas superficiales en el pavimento", "Se han eliminado los chicles de la zona peatonal", "Se han pintado las señales viales", "Se han dejado libres de residuos las rejillas y desagües pluviales"],
        correct: 2,
        explanation: "Pintar señales viales no es un objetivo del baldeo. Los 9 objetivos se centran en limpieza del pavimento, retirada de residuos y eliminación de manchas."
      },
      {
        question: "¿Qué se debe hacer con la llave de la arqueta al terminar el tramo?",
        options: ["Dejarla abierta para el siguiente operario", "Cerrarla con llave", "Entregarla al Coordinador/a", "Guardarla en el carrito"],
        correct: 1,
        explanation: "Al terminar el tramo: cerrar con llave la arqueta."
      },
      {
        question: "¿Qué se debe abrir en la boquilla al iniciar el baldeo (Fase 3)?",
        options: ["La válvula de seguridad", "La llave de paso de agua con cuidado de la presión", "El grifo del grupo de presión", "La toma de admisión"],
        correct: 1,
        explanation: "Abrir la llave de paso de agua en la boquilla con cuidado de la presión."
      },
      {
        question: "¿A qué se debe extender la operación de baldeo?",
        options: ["Solo al centro de la acera", "A todo el ancho de la acera y bordillos", "Solo a las zonas con manchas visibles", "Solo a la zona señalizada"],
        correct: 1,
        explanation: "Extender la operación a todo el ancho de la acera y bordillos, con especial atención a esquinas, bajo bancos y bajo coches."
      }
    ]
  },
  {
    id: 6,
    number: "06",
    title: "Baldeo Manual con Vehículo Auxiliar",
    description: "Dos tipos de vehículo: bomba de BAJA PRESIÓN (funciona con red de riego, motor auxiliar en caja trasera insonorizada) o bomba de ALTA PRESIÓN — 'minihidro' (funciona con depósito propio de ~500 litros, no necesita red).",
    tools: ["Vehículo auxiliar", "Equipo de reparación de pinchazos", "Tablillas", "Cubo/espuerta", "Bolsas", "Llave de papeleras", "Llave de arqueta", "Luces de seguridad", "Teléfono móvil"],
    phases: [
      {
        title: "Fase 1 — Traslado y selección del tramo",
        items: [
          "Seguir las instrucciones de conducción del Barrido Manual con Vehículo Auxiliar (Fase 1): recepción, revisión de niveles, conducción, etc.",
          "Cargar en el vehículo: equipo de reparación de pinchazos, tablillas, cubo/espuerta, bolsas, llave de papeleras y llave de arqueta.",
          "Al llegar a la zona: aparcar y estudiar la selección del primer tramo (contemplar pendientes, tamaño del tramo, etc.)."
        ]
      },
      {
        title: "Fase 2 — Vaciado de papeleras, voluminosos y zona de contenedores",
        items: [
          "Antes de baldear: vaciar papeleras, retirar voluminosos y limpiar la zona de contenedores.",
          "Seguir los procedimientos del barrido manual individual."
        ]
      },
      {
        title: "Fase 3 — Revisión del equipo y conexión a la red o toma de carga",
        items: [
          "Conectar luces de seguridad y señalizar el perímetro del tramo.",
          "BAJA PRESIÓN: Extender mangueras traseras (entrada de agua y de baldeo). Reparar desperfectos según el método del baldeo con carrito.",
          "BAJA PRESIÓN: Conectar primero la de baldeo y luego la de entrada de agua al motor auxiliar, luego a la red de riego.",
          "BAJA PRESIÓN: Encender el motor auxiliar y dar paso al agua.",
          "BAJA PRESIÓN: Control del motor desde el cuadro de mandos del lateral derecho de la caja del vehículo.",
          "BAJA PRESIÓN: Verificar que los testigos de presión de trabajo, aceite y temperatura NO estén encendidos. Si alguno lo está: comunicar inmediatamente al mando.",
          "ALTA PRESIÓN: Conectar la manguera a la toma de carga y al depósito y proceder al llenado del tanque."
        ]
      },
      {
        title: "Fase 4 — Baldeo manual",
        items: [
          "Las instrucciones son las mismas que para el baldeo manual con carrito (ángulo 60°, detergente sobre pavimento mojado, rasqueta para chicles, etc.)."
        ]
      },
      {
        title: "Fase 5 — Comunicación al finalizar la jornada/tarea",
        items: [
          "El operario/a dispone de teléfono móvil para comunicarse con el mando.",
          "Notificar las incidencias que hayan tenido lugar.",
          "Si termina antes del horario de fin: comunicarlo y quedar a disposición del Coordinador/a."
        ]
      }
    ],
    objectives: [
      "Se han eliminado de la vía pública los excrementos, la tierra, manchas superficiales y restos de orín.",
      "Se ha limpiado la suciedad acumulada debajo de los coches en zona de aparcamiento.",
      "Las esquinas y los bajo bancos han sido baldeadas correctamente.",
      "Se han retirado los residuos arrastrados durante el baldeo.",
      "Se han dejado libres de residuos las rejillas y desagües pluviales.",
      "No han quedado chicles pegados en la zona peatonal del tramo.",
      "No se observan rastros de agua sucia o charcos en el tramo baldeado.",
      "Las papeleras están vacías.",
      "No se observan manchas superficiales en el pavimento."
    ],
    questions: [
      {
        question: "¿Qué tipo de bomba de baldeo con vehículo auxiliar funciona conectada a la red de riego?",
        options: ["Bomba de alta presión ('minihidro')", "Bomba de baja presión", "Bomba de presión media", "Bomba hidráulica autónoma"],
        correct: 1,
        explanation: "La bomba de BAJA PRESIÓN funciona con red de riego, mientras que la de alta presión ('minihidro') funciona con depósito propio."
      },
      {
        question: "¿Cuántos litros tiene aproximadamente el depósito del sistema 'minihidro' de alta presión?",
        options: ["~300 litros", "~400 litros", "~500 litros", "~750 litros"],
        correct: 2,
        explanation: "El sistema de alta presión 'minihidro' funciona con un depósito propio de aproximadamente 500 litros."
      },
      {
        question: "¿Cuál de los dos sistemas de baldeo con vehículo auxiliar NO necesita conexión a la red de riego?",
        options: ["Baja presión", "Alta presión ('minihidro')", "Ambos necesitan red de riego", "Ninguno necesita red de riego"],
        correct: 1,
        explanation: "La bomba de ALTA PRESIÓN ('minihidro') funciona con depósito propio de ~500 litros y no necesita red de riego."
      },
      {
        question: "¿Dónde se ubica el motor auxiliar en el sistema de baja presión?",
        options: ["En el compartimento delantero del vehículo", "En la caja trasera insonorizada", "Debajo del chasis del vehículo", "En un remolque acoplado"],
        correct: 1,
        explanation: "El motor auxiliar del sistema de baja presión se encuentra en la caja trasera insonorizada del vehículo."
      },
      {
        question: "¿Qué se debe hacer en el sistema de alta presión ('minihidro') durante la Fase 3?",
        options: ["Encender el motor auxiliar y dar paso al agua", "Conectar la manguera a la toma de carga y al depósito y proceder al llenado del tanque", "Señalizar el perímetro con conos", "Extender las mangueras traseras de entrada de agua y baldeo"],
        correct: 1,
        explanation: "ALTA PRESIÓN: Conectar la manguera a la toma de carga y al depósito y proceder al llenado del tanque."
      },
      {
        question: "¿Qué se debe verificar en el cuadro de mandos del motor auxiliar durante la Fase 3?",
        options: ["Que los testigos de presión de trabajo, aceite y temperatura NO estén encendidos", "Que el depósito de combustible esté lleno", "Que las luces de seguridad funcionen correctamente", "Que la presión del agua sea suficiente"],
        correct: 0,
        explanation: "Se deben verificar que los testigos de presión de trabajo, aceite y temperatura NO estén encendidos. Si alguno lo está, comunicar inmediatamente al mando."
      },
      {
        question: "¿Qué herramienta NO forma parte del equipamiento del vehículo auxiliar para el baldeo?",
        options: ["Equipo de reparación de pinchazos", "Llave de arqueta", "Sopladora térmica", "Llave de papeleras"],
        correct: 2,
        explanation: "Las herramientas son: equipo de reparación de pinchazos, tablillas, cubo/espuerta, bolsas, llave de papeleras, llave de arqueta, luces de seguridad y teléfono móvil. La sopladora térmica no está incluida."
      },
      {
        question: "¿Cuál de estas herramientas SÍ se carga en el vehículo auxiliar para el baldeo?",
        options: ["Manguera de incendios", "Cubo/espuerta", "Aspiradora industrial", "Hidrolimpiadora portátil"],
        correct: 1,
        explanation: "El cubo/espuerta es una de las herramientas que se cargan en el vehículo auxiliar, junto con tablillas, bolsas, llaves de papeleras y arqueta, y equipo de reparación de pinchazos."
      },
      {
        question: "¿Qué fase del baldeo con vehículo auxiliar incluye la recepción del vehículo y la revisión de niveles?",
        options: ["Fase 1", "Fase 2", "Fase 3", "Fase 4"],
        correct: 0,
        explanation: "La Fase 1 incluye seguir las instrucciones de conducción del Barrido Manual con Vehículo Auxiliar: recepción, revisión de niveles, conducción, etc."
      },
      {
        question: "¿Qué se debe cargar en el vehículo auxiliar durante la Fase 1?",
        options: ["Solo mangueras y detergente", "Equipo de reparación de pinchazos, tablillas, cubo/espuerta, bolsas, llave de papeleras y llave de arqueta", "Conos, vallas y cinta de señalización", "Escoba, cepillo y chapulina"],
        correct: 1,
        explanation: "En la Fase 1 se cargan: equipo de reparación de pinchazos, tablillas, cubo/espuerta, bolsas, llave de papeleras y llave de arqueta."
      },
      {
        question: "Al llegar a la zona de trabajo, ¿qué debe hacer el operario/a en la Fase 1?",
        options: ["Conectar inmediatamente el motor auxiliar", "Aparcar y estudiar la selección del primer tramo contemplando pendientes y tamaño", "Empezar a vaciar las papeleras", "Señalizar todo el recorrido"],
        correct: 1,
        explanation: "Al llegar a la zona: aparcar y estudiar la selección del primer tramo, contemplando pendientes, tamaño del tramo, etc."
      },
      {
        question: "¿Qué factores debe contemplar el operario/a al seleccionar el primer tramo?",
        options: ["Solo la presencia de contenedores", "Pendientes y tamaño del tramo", "Solo el tipo de pavimento", "La hora del día y la temperatura"],
        correct: 1,
        explanation: "Al seleccionar el primer tramo se deben contemplar las pendientes y el tamaño del tramo, entre otros factores."
      },
      {
        question: "¿Qué tareas se realizan en la Fase 2 antes de baldear?",
        options: ["Conectar las mangueras y encender el motor", "Vaciar papeleras, retirar voluminosos y limpiar la zona de contenedores", "Señalizar el perímetro con conos", "Llenar el depósito del minihidro"],
        correct: 1,
        explanation: "En la Fase 2, antes de baldear: vaciar papeleras, retirar voluminosos y limpiar la zona de contenedores. Seguir los procedimientos del barrido manual individual."
      },
      {
        question: "La Fase 2 del baldeo con vehículo auxiliar sigue los procedimientos de:",
        options: ["Baldeo con manguera de alta presión", "Barrido manual individual", "Barrido mecanizado con tractor", "Limpieza de zonas industriales"],
        correct: 1,
        explanation: "En la Fase 2 se siguen los procedimientos del barrido manual individual para vaciar papeleras, retirar voluminosos y limpiar la zona de contenedores."
      },
      {
        question: "¿Qué se debe hacer en la Fase 3 antes de conectar las mangueras?",
        options: ["Llenar el depósito de combustible", "Conectar luces de seguridad y señalizar el perímetro del tramo", "Llamar al Coordinador/a para informar del inicio", "Revisar los niveles de aceite del motor"],
        correct: 1,
        explanation: "En la Fase 3: conectar luces de seguridad y señalizar el perímetro del tramo antes de proceder con las conexiones."
      },
      {
        question: "En el sistema de baja presión, ¿cuáles son las mangueras traseras que se deben extender?",
        options: ["Solo la manguera de baldeo", "Manguera de entrada de agua y manguera de baldeo", "Manguera de alta presión y manguera de retorno", "Manguera de aspiración y manguera de impulsión"],
        correct: 1,
        explanation: "BAJA PRESIÓN: Se extienden las mangueras traseras de entrada de agua y de baldeo."
      },
      {
        question: "¿Cuál es el orden CORRECTO de conexión de mangueras en el sistema de baja presión?",
        options: ["Primero la de entrada de agua al motor, luego la de baldeo, luego a la red de riego", "Primero la de baldeo, luego la de entrada de agua al motor auxiliar, luego a la red de riego", "Primero a la red de riego, luego al motor, luego la de baldeo", "Simultáneamente las tres conexiones"],
        correct: 1,
        explanation: "BAJA PRESIÓN: Conectar primero la de baldeo, luego la de entrada de agua al motor auxiliar, y luego a la red de riego."
      },
      {
        question: "En el sistema de baja presión, ¿a qué se conecta la manguera de entrada de agua?",
        options: ["Directamente a la red de riego sin pasar por el motor", "Al motor auxiliar y luego a la red de riego", "Al depósito del minihidro", "A la toma de carga del vehículo"],
        correct: 1,
        explanation: "BAJA PRESIÓN: La manguera de entrada de agua se conecta al motor auxiliar y luego a la red de riego."
      },
      {
        question: "¿Qué se debe hacer después de conectar las mangueras en el sistema de baja presión?",
        options: ["Señalizar el perímetro", "Encender el motor auxiliar y dar paso al agua", "Llamar al mando para confirmar", "Verificar los niveles de combustible"],
        correct: 1,
        explanation: "Después de conectar las mangueras en baja presión: encender el motor auxiliar y dar paso al agua."
      },
      {
        question: "¿Desde dónde se controla el motor auxiliar en el sistema de baja presión?",
        options: ["Desde la cabina del conductor", "Desde el cuadro de mandos del lateral izquierdo de la caja", "Desde el cuadro de mandos del lateral derecho de la caja del vehículo", "Desde un mando a distancia inalámbrico"],
        correct: 2,
        explanation: "El control del motor se realiza desde el cuadro de mandos del lateral derecho de la caja del vehículo."
      },
      {
        question: "¿Qué testigos se deben verificar en el cuadro de mandos del motor auxiliar?",
        options: ["Testigos de combustible, batería y frenos", "Testigos de presión de trabajo, aceite y temperatura", "Testigos de velocidad, revoluciones y nivel de agua", "Testigos de carga, descarga y presión hidráulica"],
        correct: 1,
        explanation: "Se deben verificar que los testigos de presión de trabajo, aceite y temperatura NO estén encendidos."
      },
      {
        question: "¿Cuál debe ser el estado de los testigos de presión de trabajo, aceite y temperatura durante el funcionamiento?",
        options: ["Deben estar encendidos en verde", "NO deben estar encendidos", "Deben parpadear intermitentemente", "Solo el de temperatura debe estar encendido"],
        correct: 1,
        explanation: "Los testigos de presión de trabajo, aceite y temperatura NO deben estar encendidos durante el funcionamiento normal."
      },
      {
        question: "¿Qué debe hacer el operario/a si algún testigo del motor auxiliar se enciende?",
        options: ["Apagar el motor y continuar trabajando sin agua", "Intentar reparar la avería inmediatamente", "Comunicar inmediatamente al mando", "Continuar trabajando vigilando el testigo"],
        correct: 2,
        explanation: "Si algún testigo (presión de trabajo, aceite o temperatura) se enciende, se debe comunicar inmediatamente al mando."
      },
      {
        question: "¿Cuál de estos NO es un testigo que se verifique en el cuadro de mandos del motor auxiliar?",
        options: ["Presión de trabajo", "Aceite", "Temperatura", "Nivel de combustible"],
        correct: 3,
        explanation: "Los testigos a verificar son: presión de trabajo, aceite y temperatura. El nivel de combustible no es uno de los testigos especificados."
      },
      {
        question: "En el sistema de alta presión ('minihidro'), ¿cómo se realiza el llenado del tanque?",
        options: ["Conectando directamente a la red de riego", "Conectando la manguera a la toma de carga y al depósito", "Mediante una bomba manual", "Con una manguera de incendios"],
        correct: 1,
        explanation: "ALTA PRESIÓN: Conectar la manguera a la toma de carga y al depósito y proceder al llenado del tanque."
      },
      {
        question: "¿Qué diferencia fundamental existe entre la conexión del sistema de alta presión y el de baja presión?",
        options: ["Alta presión a red de riego; baja presión a depósito", "Alta presión: toma de carga y depósito; baja presión: mangueras al motor y red de riego", "Ambos se conectan de la misma forma", "Alta presión no necesita mangueras"],
        correct: 1,
        explanation: "ALTA PRESIÓN: conectar manguera a toma de carga y al depósito. BAJA PRESIÓN: conectar mangueras de baldeo y entrada de agua al motor auxiliar y luego a la red de riego."
      },
      {
        question: "¿Qué sistema de baldeo con vehículo auxiliar utiliza un motor auxiliar en caja trasera insonorizada?",
        options: ["Alta presión ('minihidro')", "Baja presión", "Ambos sistemas", "Ninguno de los dos"],
        correct: 1,
        explanation: "El sistema de BAJA PRESIÓN utiliza un motor auxiliar ubicado en la caja trasera insonorizada del vehículo."
      },
      {
        question: "¿Qué sistema de baldeo con vehículo auxiliar funciona con un depósito propio de ~500 litros?",
        options: ["Baja presión", "Alta presión ('minihidro')", "Ambos sistemas", "El sistema mixto"],
        correct: 1,
        explanation: "El sistema de ALTA PRESIÓN ('minihidro') funciona con depósito propio de ~500 litros, sin necesidad de red de riego."
      },
      {
        question: "¿Qué instrucciones de conducción debe seguir el operario/a en la Fase 1 del baldeo con vehículo auxiliar?",
        options: ["Las del barrido manual individual", "Las del Barrido Manual con Vehículo Auxiliar (Fase 1)", "Las del baldeo con carrito", "Las del barrido mecanizado"],
        correct: 1,
        explanation: "Fase 1: Seguir las instrucciones de conducción del Barrido Manual con Vehículo Auxiliar (Fase 1): recepción, revisión de niveles, conducción, etc."
      },
      {
        question: "¿Qué se debe reparar según el método del baldeo con carrito durante la Fase 3?",
        options: ["Averías del motor auxiliar", "Desperfectos en las mangueras", "Pinchazos del vehículo", "Fugas en la red de riego"],
        correct: 1,
        explanation: "En la Fase 3 se reparan los desperfectos según el método del baldeo con carrito, lo cual incluye la revisión y reparación de las mangueras."
      },
      {
        question: "Las instrucciones de la Fase 4 del baldeo con vehículo auxiliar son las mismas que para:",
        options: ["El barrido manual individual", "El baldeo manual con carrito", "El barrido mecanizado con tractor", "La limpieza de contenedores"],
        correct: 1,
        explanation: "Fase 4: Las instrucciones son las mismas que para el baldeo manual con carrito (ángulo 60°, detergente sobre pavimento mojado, rasqueta para chicles, etc.)."
      },
      {
        question: "¿Qué ángulo de aplicación del agua se utiliza en la Fase 4 del baldeo con vehículo auxiliar?",
        options: ["30°", "45°", "60°", "90°"],
        correct: 2,
        explanation: "Fase 4: Se siguen las mismas instrucciones que para el baldeo manual con carrito, incluyendo el ángulo de 60°."
      },
      {
        question: "En la Fase 4, ¿sobre qué tipo de pavimento se aplica el detergente?",
        options: ["Sobre pavimento seco", "Sobre pavimento mojado", "Sobre pavimento con grasa", "Sobre pavimento de tierra"],
        correct: 1,
        explanation: "Fase 4: Se aplica detergente sobre pavimento mojado, siguiendo las instrucciones del baldeo manual con carrito."
      },
      {
        question: "¿Qué herramienta se utiliza para eliminar chicles en la Fase 4?",
        options: ["Cepillo de cerdas duras", "Espátula metálica", "Rasqueta para chicles", "Cuchillo de obra"],
        correct: 2,
        explanation: "Fase 4: Se utiliza la rasqueta para chicles, siguiendo las mismas instrucciones que para el baldeo manual con carrito."
      },
      {
        question: "¿Qué medio de comunicación utiliza el operario/a durante el baldeo con vehículo auxiliar?",
        options: ["Radio de mano", "Teléfono móvil", "Silbato de señalización", "Interfono del vehículo"],
        correct: 1,
        explanation: "Fase 5: El operario/a dispone de teléfono móvil para comunicarse con el mando."
      },
      {
        question: "¿Qué debe notificar el operario/a al mando durante la Fase 5?",
        options: ["Solo las averías del vehículo", "Las incidencias que hayan tenido lugar", "El consumo de agua del tramo", "El número de papeleras vaciadas"],
        correct: 1,
        explanation: "Fase 5: Notificar las incidencias que hayan tenido lugar al mando a través del teléfono móvil."
      },
      {
        question: "Si el operario/a termina antes del horario de fin durante el baldeo con vehículo auxiliar, ¿qué debe hacer?",
        options: ["Marcharse a casa directamente", "Comunicarlo y quedar a disposición del Coordinador/a", "Buscar otro tramo por su cuenta", "Esperar en el vehículo sin avisar"],
        correct: 1,
        explanation: "Fase 5: Si termina antes del horario de fin, debe comunicarlo y quedar a disposición del Coordinador/a."
      },
      {
        question: "¿Cuántos objetivos tiene el puesto de trabajo de baldeo manual con vehículo auxiliar?",
        options: ["7", "8", "9", "10"],
        correct: 2,
        explanation: "El puesto de trabajo de baldeo manual con vehículo auxiliar tiene 9 objetivos definidos."
      },
      {
        question: "¿Cuál de estas herramientas SÍ está incluida en el equipamiento del vehículo auxiliar?",
        options: ["Desbrozadora", "Llave de arqueta", "Moto sierra", "Compresor de aire"],
        correct: 1,
        explanation: "La llave de arqueta es una de las herramientas incluidas en el equipamiento del vehículo auxiliar."
      },
      {
        question: "¿Cuál de estas herramientas NO está incluida en el equipamiento del vehículo auxiliar?",
        options: ["Tablillas", "Bolsas", "Llave de papeleras", "Carretilla de mano"],
        correct: 3,
        explanation: "Las herramientas incluidas son: equipo de reparación de pinchazos, tablillas, cubo/espuerta, bolsas, llave de papeleras, llave de arqueta, luces de seguridad y teléfono móvil. La carretilla de mano no está incluida."
      },
      {
        question: "En el sistema de baja presión, ¿qué se debe verificar ANTES de encender el motor auxiliar?",
        options: ["Que el depósito esté lleno de combustible", "Que las mangueras de baldeo y entrada de agua estén correctamente conectadas", "Que las luces de seguridad estén apagadas", "Que el teléfono móvil tenga batería"],
        correct: 1,
        explanation: "Antes de encender el motor auxiliar en baja presión, se deben haber conectado primero la manguera de baldeo y luego la de entrada de agua al motor auxiliar, y después a la red de riego."
      },
      {
        question: "¿Qué tipo de caja alberga el motor auxiliar en el sistema de baja presión?",
        options: ["Caja abierta para ventilación", "Caja trasera insonorizada", "Caja lateral refrigerada", "Caja inferior estanca"],
        correct: 1,
        explanation: "El motor auxiliar del sistema de baja presión se ubica en la caja trasera insonorizada del vehículo."
      },
      {
        question: "¿Qué procedimiento de la Fase 2 se realiza siguiendo las instrucciones del barrido manual individual?",
        options: ["La conexión de mangueras", "El vaciado de papeleras, retirada de voluminosos y limpieza de la zona de contenedores", "La señalización del perímetro", "La revisión de niveles del vehículo"],
        correct: 1,
        explanation: "Fase 2: Antes de baldear se vacían papeleras, se retiran voluminosos y se limpia la zona de contenedores, siguiendo los procedimientos del barrido manual individual."
      },
      {
        question: "¿Qué se debe señalizar en la Fase 3 del baldeo con vehículo auxiliar?",
        options: ["Solo la zona de contenedores", "El perímetro del tramo", "Toda la calle", "Solo el acceso al vehículo"],
        correct: 1,
        explanation: "Fase 3: Conectar luces de seguridad y señalizar el perímetro del tramo."
      },
      {
        question: "¿Qué luces específicas se deben conectar en la Fase 3 del baldeo con vehículo auxiliar?",
        options: ["Luces de emergencia del vehículo", "Luces de seguridad", "Luces de posición", "Luces intermitentes de la cabina"],
        correct: 1,
        explanation: "Fase 3: Se deben conectar las luces de seguridad y señalizar el perímetro del tramo."
      }
    ]
  },
  {
    id: 7,
    number: "07",
    title: "Baldeo Manual Mecanizado Mixto",
    description: "Se usa en zonas SIN red de riego. Equipo: 2 operarios/as (baldeador + auxiliar) + conductor/a de vehículo cisterna con motor auxiliar de baja presión.",
    tools: ["Escoba", "Cepillo", "Chapulina", "Espuerta", "Bolsas", "Tablillas", "Llave de papeleras", "Detergente en polvo", "Manguera", "Cisterna con motor auxiliar", "Elementos de señalización", "Espátula (para chicles)"],
    teamComposition: [
      { unit: "Operario/a baldeador", description: "Maneja la manguera y dirige el chorro de agua." },
      { unit: "Operario/a auxiliar", description: "Aplica detergente, cepilla, recoge residuos, extiende/recoge manguera." },
      { unit: "Conductor/a", description: "Conduce la cisterna y controla el motor auxiliar." },
      { unit: "Vehículo", description: "Cisterna con motor auxiliar de baja presión." }
    ],
    phases: [
      {
        title: "Fase 1 — Traslado y selección del tramo",
        items: [
          "Desplazamiento a pie o en cabina del vehículo. Al subir/bajar de la cabina: siempre de cara a ella, usando las agarraderas.",
          "Herramientas si van a pie: escoba, cepillo, chapulina, espuerta, bolsas, tablillas y llave de papeleras.",
          "Herramientas adicionales si van en vehículo: detergente en polvo.",
          "Selección del tramo siguiendo las pautas del baldeo con carrito."
        ]
      },
      {
        title: "Fase 2 — Desbroce, voluminosos, contenedores y papeleras",
        items: [
          "Un operario/a recorre el tramo realizando: desbroce con chapulina, retirada de voluminosos y limpieza de zona de contenedores.",
          "El otro va detrás vaciando las papeleras.",
          "Ver instrucciones detalladas en el método de trabajo del barrido manual individual."
        ]
      },
      {
        title: "Fase 3 — Barrido manual y recogida de pilas",
        items: [
          "El operario que desbrozó regresa hacia el vehículo barriendo las zonas que lo necesiten.",
          "El que vació papeleras va recogiendo las pilas que el otro forma (con espuerta y tablillas).",
          "Ambos siguen las indicaciones del barrido manual individual."
        ]
      },
      {
        title: "Fase 4 — Revisión del equipo y señalización",
        items: [
          "Operario/a baldeador: revisar el estado de la manguera (método del baldeo con carrito).",
          "Operario/a auxiliar: señalizar el perímetro con conos / elementos del Coordinador/a.",
          "Al terminar la señalización, comunicárselo al baldeador, quien coordina con el conductor/a el paso del agua."
        ]
      },
      {
        title: "Fase 5 — Baldeo manual mecanizado mixto",
        items: [
          "El conductor/a conecta la toma de fuerza/motor auxiliar y, cuando el baldeador lo indique, abre la llave de paso del agua.",
          "ORDEN DE TRABAJO: (1) Baldeador aplica una capa de agua sobre una zona no muy extensa. (2) Auxiliar aplica detergente en polvo sobre las manchas y cepilla con intensidad. (3) Baldeador aplica el agua a presión detrás del auxiliar.",
          "El auxiliar también: extiende y recoge la manguera, elimina chicles con espátula, recoge residuos acumulados con tablillas y espuerta.",
          "Espuerta llena: volcar en bolsa. Bolsa llena: anudarla y depositarla en el contenedor más cercano.",
          "Al terminar el tramo: el baldeador avisa al conductor/a, que apaga el motor y cierra la llave.",
          "Recoger primero todo el material de trabajo y por último la señalización.",
          "PROHIBIDO mover el vehículo cisterna con la manguera sin recoger (salvo pequeños desplazamientos vigilados).",
          "Recomendable establecer turnos para intercambiar funciones a lo largo de la jornada."
        ]
      },
      {
        title: "Fase 6 — Limpieza de repaso de zonas aledañas",
        items: [
          "Si los operarios no se marchan con el vehículo, realizan tareas de repaso hasta completar el horario. Las tareas las indica el Coordinador/a."
        ]
      },
      {
        title: "Fase 7 — Comunicación al finalizar la jornada/tarea",
        items: [
          "Informar al mando inmediato sobre el desarrollo de la tarea y las incidencias."
        ]
      }
    ],
    objectives: [
      "No deben quedar matas de altura mayor a dos dedos.",
      "Se deben retirar todos los envases y residuos a granel de la vía pública.",
      "La vía pública debe quedar libre de excrementos, tierra y residuos vegetales.",
      "El contorno de los contenedores debe estar limpio y ordenado.",
      "Las papeleras deben estar vacías.",
      "No se tienen que ver manchas superficiales.",
      "Se deben eliminar los rastros o charcos de agua sucia.",
      "Se debe limpiar debajo de los bancos públicos y de los coches aparcados.",
      "No se deben dejar zonas con residuos acumulados."
    ],
    questions: [
      {
        question: "¿En qué tipo de zonas se utiliza el baldeo manual mecanizado mixto?",
        options: ["Zonas con red de riego interna", "Zonas sin red de riego", "Zonas con red de riego externa", "Zonas con red de riego mixta"],
        correct: 1,
        explanation: "Se usa en zonas SIN red de riego."
      },
      {
        question: "¿Cuántas personas componen el equipo de baldeo manual mecanizado mixto?",
        options: ["2 operarios/as", "2 operarios/as + 1 conductor/a", "3 operarios/as", "1 operario/a + 1 conductor/a"],
        correct: 1,
        explanation: "Equipo: 2 operarios/as (baldeador + auxiliar) + conductor/a de vehículo cisterna con motor auxiliar de baja presión."
      },
      {
        question: "¿Qué tipo de motor auxiliar lleva el vehículo cisterna?",
        options: ["Motor auxiliar de alta presión", "Motor auxiliar de media presión", "Motor auxiliar de baja presión", "Motor auxiliar de presión variable"],
        correct: 2,
        explanation: "Vehículo cisterna con motor auxiliar de baja presión."
      },
      {
        question: "¿Cuál es la función principal del operario/a baldeador?",
        options: ["Aplica detergente y cepilla las manchas", "Maneja la manguera y dirige el chorro de agua", "Conduce la cisterna y controla el motor auxiliar", "Recoge residuos con tablillas y espuerta"],
        correct: 1,
        explanation: "Operario/a baldeador = maneja manguera y dirige chorro de agua."
      },
      {
        question: "¿Cuál es la función principal del operario/a auxiliar?",
        options: ["Maneja la manguera y dirige el chorro de agua", "Conduce la cisterna y controla el motor auxiliar", "Aplica detergente, cepilla, recoge residuos, extiende/recoge manguera", "Señaliza el perímetro y controla el paso del agua"],
        correct: 2,
        explanation: "Operario/a auxiliar = aplica detergente, cepilla, recoge residuos, extiende/recoge manguera."
      },
      {
        question: "¿Cuál es la función del conductor/a del vehículo cisterna?",
        options: ["Maneja la manguera y aplica agua a presión", "Conduce la cisterna y controla el motor auxiliar", "Aplica detergente en polvo sobre las manchas", "Señaliza el perímetro con conos"],
        correct: 1,
        explanation: "Conductor/a = conduce cisterna y controla motor auxiliar."
      },
      {
        question: "¿Cómo se debe subir o bajar de la cabina del vehículo?",
        options: ["De espaldas a la cabina, usando los estribos", "Siempre de cara a ella, usando las agarraderas", "De lateral, apoyándose en la puerta", "De cara a ella, usando los pedales como apoyo"],
        correct: 1,
        explanation: "Al subir/bajar de la cabina: siempre de cara a ella, usando las agarraderas."
      },
      {
        question: "¿Qué herramientas lleva el equipo si se desplaza a pie en la Fase 1?",
        options: ["Escoba, cepillo, chapulina, espuerta, bolsas, tablillas, llave de papeleras y detergente", "Escoba, cepillo, chapulina, espuerta, bolsas, tablillas y llave de papeleras", "Manguera, detergente, conos, espátula y bolsas", "Escoba, cepillo, manguera, espuerta, bolsas y tablillas"],
        correct: 1,
        explanation: "Herramientas si van a pie: escoba, cepillo, chapulina, espuerta, bolsas, tablillas y llave de papeleras."
      },
      {
        question: "¿Qué herramienta adicional se lleva si el equipo se desplaza en vehículo en la Fase 1?",
        options: ["Espátula para chicles", "Manguera adicional", "Detergente en polvo", "Conos de señalización extra"],
        correct: 2,
        explanation: "Herramientas adicionales si van en vehículo: detergente en polvo."
      },
      {
        question: "¿Qué se debe hacer en la Fase 5 al terminar el tramo?",
        options: ["Apagar el motor y cerrar la llave del agua", "Recoger primero la señalización y después el material", "Dejar la manguera conectada para el siguiente tramo", "Mover el vehículo inmediatamente"],
        correct: 0,
        explanation: "Al terminar el tramo: el baldeador avisa al conductor/a, que apaga el motor y cierra la llave."
      },
      {
        question: "En la Fase 2, ¿qué tareas realiza el operario que va en primer lugar?",
        options: ["Vaciado de papeleras", "Desbroce con chapulina, retirada de voluminosos y limpieza de zona de contenedores", "Barrido de las zonas que lo necesiten", "Recogida de pilas con espuerta y tablillas"],
        correct: 1,
        explanation: "Un operario/a recorre el tramo realizando: desbroce con chapulina, retirada de voluminosos y limpieza de zona de contenedores."
      },
      {
        question: "En la Fase 2, ¿qué tareas realiza el operario que va en segundo lugar?",
        options: ["Desbroce con chapulina", "Limpieza de zona de contenedores", "Vaciado de las papeleras", "Barrido de las zonas que lo necesiten"],
        correct: 2,
        explanation: "El otro va detrás vaciando las papeleras."
      },
      {
        question: "En la Fase 3, ¿qué hace el operario que realizó el desbroce en la Fase 2?",
        options: ["Recoge las pilas con espuerta y tablillas", "Regresa hacia el vehículo barriendo las zonas que lo necesiten", "Vacía las papeleras del tramo", "Señaliza el perímetro con conos"],
        correct: 1,
        explanation: "El operario que desbrozó regresa hacia el vehículo barriendo las zonas que lo necesiten."
      },
      {
        question: "En la Fase 3, ¿qué hace el operario que vació las papeleras en la Fase 2?",
        options: ["Barre las zonas que lo necesiten", "Regresa al vehículo sin realizar tareas", "Va recogiendo las pilas que el otro forma con espuerta y tablillas", "Revisa el estado de la manguera"],
        correct: 2,
        explanation: "El que vació papeleras va recogiendo las pilas que el otro forma (con espuerta y tablillas)."
      },
      {
        question: "¿Con qué herramientas se recogen las pilas en la Fase 3?",
        options: ["Escoba y cepillo", "Chapulina y bolsas", "Espuerta y tablillas", "Espátula y espuerta"],
        correct: 2,
        explanation: "El que vació papeleras va recogiendo las pilas que el otro forma (con espuerta y tablillas)."
      },
      {
        question: "En la Fase 4, ¿quién revisa el estado de la manguera?",
        options: ["El operario/a auxiliar", "El conductor/a", "El operario/a baldeador", "El Coordinador/a"],
        correct: 2,
        explanation: "Operario/a baldeador: revisar el estado de la manguera (método del baldeo con carrito)."
      },
      {
        question: "En la Fase 4, ¿quién señaliza el perímetro con conos?",
        options: ["El operario/a baldeador", "El operario/a auxiliar", "El conductor/a", "Ambos operarios a la vez"],
        correct: 1,
        explanation: "Operario/a auxiliar: señalizar el perímetro con conos / elementos del Coordinador/a."
      },
      {
        question: "En la Fase 4, ¿a quién comunica el auxiliar que ha terminado la señalización?",
        options: ["Al conductor/a directamente", "Al Coordinador/a", "Al baldeador", "Al mando inmediato"],
        correct: 2,
        explanation: "Al terminar la señalización, comunicárselo al baldeador, quien coordina con el conductor/a el paso del agua."
      },
      {
        question: "En la Fase 4, ¿quién coordina con el conductor/a el paso del agua?",
        options: ["El auxiliar tras señalizar", "El baldeador, tras recibir el aviso del auxiliar", "El conductor/a por iniciativa propia", "El Coordinador/a"],
        correct: 1,
        explanation: "Al terminar la señalización, comunicárselo al baldeador, quien coordina con el conductor/a el paso del agua."
      },
      {
        question: "En la Fase 5, ¿quién conecta la toma de fuerza/motor auxiliar?",
        options: ["El baldeador", "El auxiliar", "El conductor/a", "Cualquier operario del equipo"],
        correct: 2,
        explanation: "El conductor/a conecta la toma de fuerza/motor auxiliar y, cuando el baldeador lo indique, abre la llave de paso del agua."
      },
      {
        question: "En la Fase 5, ¿quién abre la llave de paso del agua?",
        options: ["El baldeador", "El auxiliar", "El conductor/a, cuando el baldeador lo indique", "El conductor/a, cuando el auxiliar lo indique"],
        correct: 2,
        explanation: "El conductor/a conecta la toma de fuerza/motor auxiliar y, cuando el baldeador lo indique, abre la llave de paso del agua."
      },
      {
        question: "¿Cuál es el primer paso del orden de trabajo numerado en la Fase 5 (una vez conectada la toma de fuerza)?",
        options: ["El auxiliar aplica detergente en polvo sobre las manchas", "El baldeador aplica el agua a presión detrás del auxiliar", "El baldeador aplica una capa de agua sobre una zona no muy extensa", "El conductor/a apaga el motor auxiliar"],
        correct: 2,
        explanation: "ORDEN DE TRABAJO: (1) Baldeador aplica una capa de agua sobre una zona no muy extensa."
      },
      {
        question: "¿Cuál es el segundo paso del orden de trabajo en la Fase 5?",
        options: ["El baldeador aplica agua a presión detrás del auxiliar", "El auxiliar aplica detergente en polvo sobre las manchas y cepilla con intensidad", "El conductor/a abre la llave de paso del agua", "El auxiliar extiende la manguera por el tramo"],
        correct: 1,
        explanation: "ORDEN DE TRABAJO: (2) Auxiliar aplica detergente en polvo sobre las manchas y cepilla con intensidad."
      },
      {
        question: "¿Cuál es el tercer paso del orden de trabajo en la Fase 5?",
        options: ["El auxiliar aplica detergente en polvo", "El baldeador aplica una capa de agua sobre la zona", "El baldeador aplica el agua a presión detrás del auxiliar", "El conductor/a apaga el motor auxiliar"],
        correct: 2,
        explanation: "ORDEN DE TRABAJO: (3) Baldeador aplica el agua a presión detrás del auxiliar."
      },
      {
        question: "¿Con qué herramienta elimina el auxiliar los chicles durante la Fase 5?",
        options: ["Con el cepillo", "Con la chapulina", "Con la espátula", "Con las tablillas"],
        correct: 2,
        explanation: "El auxiliar también: elimina chicles con espátula."
      },
      {
        question: "¿Qué hace el auxiliar con la espuerta cuando está llena?",
        options: ["La vacía directamente en el contenedor más cercano", "La lleva al vehículo cisterna", "La vuelca en una bolsa", "La deja en el suelo hasta terminar el tramo"],
        correct: 2,
        explanation: "Espuerta llena: volcar en bolsa."
      },
      {
        question: "¿Qué se hace con la bolsa cuando está llena?",
        options: ["Se vuelca en la espuerta", "Se deja junto al vehículo cisterna", "Se anuda y se deposita en el contenedor más cercano", "Se entrega al Coordinador/a"],
        correct: 2,
        explanation: "Bolsa llena: anudarla y depositarla en el contenedor más cercano."
      },
      {
        question: "Al terminar el tramo en la Fase 5, ¿quién avisa al conductor/a?",
        options: ["El auxiliar", "El baldeador", "Cualquiera de los dos operarios", "El Coordinador/a"],
        correct: 1,
        explanation: "Al terminar el tramo: el baldeador avisa al conductor/a, que apaga el motor y cierra la llave."
      },
      {
        question: "Al terminar el tramo en la Fase 5, ¿qué hace el conductor/a al recibir el aviso?",
        options: ["Apaga el motor y retira la señalización", "Apaga el motor y cierra la llave", "Cierra la llave y recoge la manguera", "Apaga el motor y deposita las bolsas"],
        correct: 1,
        explanation: "Al terminar el tramo: el baldeador avisa al conductor/a, que apaga el motor y cierra la llave."
      },
      {
        question: "¿En qué orden se recogen los elementos al finalizar el tramo?",
        options: ["Primero la señalización y después el material de trabajo", "Primero el material de trabajo y por último la señalización", "Todo se recoge simultáneamente", "Primero la manguera y después el resto del material"],
        correct: 1,
        explanation: "Recoger primero todo el material de trabajo y por último la señalización."
      },
      {
        question: "¿Qué acción está PROHIBIDA con el vehículo cisterna?",
        options: ["Aparcar en zona de trabajo con motor encendido", "Mover el vehículo cisterna con la manguera sin recoger", "Conectar el motor auxiliar sin señalización", "Trabajar sin el auxiliar presente"],
        correct: 1,
        explanation: "PROHIBIDO mover el vehículo cisterna con la manguera sin recoger (salvo pequeños desplazamientos vigilados)."
      },
      {
        question: "¿Cuál es la excepción a la prohibición de mover el vehículo con la manguera sin recoger?",
        options: ["Desplazamientos largos con el auxiliar vigilando", "Pequeños desplazamientos vigilados", "Desplazamientos en zonas sin peatones", "No existe ninguna excepción"],
        correct: 1,
        explanation: "PROHIBIDO mover el vehículo cisterna con la manguera sin recoger (salvo pequeños desplazamientos vigilados)."
      },
      {
        question: "¿Qué se recomienda respecto a las funciones de los operarios a lo largo de la jornada?",
        options: ["Mantener las mismas funciones durante toda la jornada", "Establecer turnos para intercambiar funciones a lo largo de la jornada", "Cambiar funciones solo al inicio de cada tramo", "Intercambiar funciones solo si lo indica el Coordinador/a"],
        correct: 1,
        explanation: "Recomendable establecer turnos para intercambiar funciones a lo largo de la jornada."
      },
      {
        question: "En la Fase 6, ¿quién indica las tareas de repaso a los operarios?",
        options: ["El conductor/a", "El baldeador", "El auxiliar", "El Coordinador/a"],
        correct: 3,
        explanation: "Si los operarios no se marchan con el vehículo, realizan tareas de repaso hasta completar el horario. Las tareas las indica el Coordinador/a."
      },
      {
        question: "En la Fase 6, ¿qué hacen los operarios si no se marchan con el vehículo?",
        options: ["Finalizan la jornada inmediatamente", "Realizan tareas de repaso hasta completar el horario", "Preparan el equipo para el día siguiente", "Esperan instrucciones del conductor/a"],
        correct: 1,
        explanation: "Si los operarios no se marchan con el vehículo, realizan tareas de repaso hasta completar el horario."
      },
      {
        question: "En la Fase 7, ¿a quién se informa sobre el desarrollo de la tarea?",
        options: ["Al Coordinador/a", "Al mando inmediato", "Al conductor/a", "Al auxiliar"],
        correct: 1,
        explanation: "Informar al mando inmediato sobre el desarrollo de la tarea y las incidencias."
      },
      {
        question: "¿Cuántos objetivos tiene el puesto de trabajo de baldeo manual mecanizado mixto?",
        options: ["7", "8", "9", "10"],
        correct: 2,
        explanation: "El puesto de trabajo de baldeo manual mecanizado mixto tiene 9 objetivos definidos."
      },
      {
        question: "¿Qué herramienta utiliza el operario para el desbroce en la Fase 2?",
        options: ["Escoba", "Cepillo", "Chapulina", "Espátula"],
        correct: 2,
        explanation: "Un operario/a recorre el tramo realizando: desbroce con chapulina."
      },
      {
        question: "¿Qué método se sigue para seleccionar el tramo en la Fase 1?",
        options: ["Las pautas del barrido manual individual", "Las pautas del baldeo con carrito", "Las indicaciones del conductor/a", "Las instrucciones del Coordinador/a"],
        correct: 1,
        explanation: "Selección del tramo siguiendo pautas del baldeo con carrito."
      },
      {
        question: "¿Qué operario extiende y recoge la manguera durante la Fase 5?",
        options: ["El baldeador", "El conductor/a", "El auxiliar", "Ambos operarios"],
        correct: 2,
        explanation: "El auxiliar también: extiende y recoge la manguera."
      },
      {
        question: "¿Qué operario recoge los residuos acumulados con tablillas y espuerta durante la Fase 5?",
        options: ["El baldeador", "El auxiliar", "El conductor/a", "El que desbrozó en la Fase 2"],
        correct: 1,
        explanation: "El auxiliar también: recoge residuos acumulados con tablillas y espuerta."
      },
      {
        question: "¿Qué indicaciones siguen ambos operarios en las Fases 2 y 3?",
        options: ["Las del baldeo con carrito", "Las del barrido manual individual", "Las del Coordinador/a", "Las del mando inmediato"],
        correct: 1,
        explanation: "Fase 2: Ver instrucciones detalladas en método de trabajo del barrido manual individual. Fase 3: Ambos siguen indicaciones del barrido manual individual."
      },
      {
        question: "¿Qué tipo de detergente se utiliza en el baldeo manual mecanizado mixto?",
        options: ["Detergente líquido", "Detergente en pasta", "Detergente en polvo", "Detergente en spray"],
        correct: 2,
        explanation: "Se utiliza detergente en polvo. Es una de las herramientas adicionales si van en vehículo."
      },
      {
        question: "¿En la Fase 5, sobre qué aplica el auxiliar el detergente en polvo?",
        options: ["Sobre toda la zona baldeada", "Sobre las manchas", "Sobre los chicles", "Sobre los residuos acumulados"],
        correct: 1,
        explanation: "Auxiliar aplica detergente en polvo sobre las manchas y cepilla con intensidad."
      },
      {
        question: "¿Qué debe revisar el baldeador en la Fase 4 y con qué método?",
        options: ["El estado de la manguera, con el método del barrido manual individual", "El estado de la manguera, con el método del baldeo con carrito", "El estado de los conos, con el método del baldeo con carrito", "El estado del motor, con el método del baldeo con carrito"],
        correct: 1,
        explanation: "Operario/a baldeador: revisar el estado de la manguera (método del baldeo con carrito)."
      },
      {
        question: "¿Cuál de las siguientes NO es una herramienta del baldeo manual mecanizado mixto?",
        options: ["Espátula para chicles", "Llave de papeleras", "Carretilla", "Chapulina"],
        correct: 2,
        explanation: "Las herramientas son: Escoba, Cepillo, Chapulina, Espuerta, Bolsas, Tablillas, Llave de papeleras, Detergente en polvo, Manguera, Cisterna con motor auxiliar, Elementos de señalización, Espátula (para chicles). La carretilla no está incluida."
      }
    ]
  },
  {
    id: 8,
    number: "08",
    title: "Limpieza de Mercados",
    description: "Horario adaptado a las necesidades de cada mercado (mañana y tarde). El método es genérico; el Coordinador/a indica las instrucciones concretas para cada caso.",
    tools: ["Escoba", "Carretilla", "Cubo", "Bolsas", "Tablillas", "Llave de papeleras", "Fregadora mecánica", "Depósito de agua limpia", "Depósito de agua sucia", "Producto de limpieza", "Cepillos/platos fregadora", "Vehículo recolector compactador"],
    phases: [
      {
        title: "Fase 1 — Traslado al mercado",
        items: [
          "Ir al cuarto de herramientas, recoger las herramientas adecuadas para cada etapa y proceder según el método.",
          "El centro de trabajo ES el propio mercado municipal (vestuario, baño y cuarto de almacenaje).",
          "No se transporta material al llegar — todo está guardado bajo llave en el cuarto de herramientas."
        ]
      },
      {
        title: "Fase 2 — Después de la llegada de los proveedores",
        items: [
          "Partir de la base de que el mercado se dejó limpio el día anterior.",
          "Tareas: barrido exterior del perímetro del mercado + vaciado de papeleras si fuera necesario + barrido de repaso de calles interiores.",
          "Seguir las pautas de las fases 3 y 4 del barrido manual individual."
        ]
      },
      {
        title: "Fase 3 — Durante la actividad comercial",
        items: [
          "Recorrer las calles interiores con carretilla o cubo recogiendo las cajas vacías que los trabajadores de los puestos vayan entregando.",
          "Cuando la carretilla esté llena: depositar las cajas en el cuarto de basura apilándolas correctamente.",
          "En algunos mercados hay vehículo recolector compactador para retirar cajas directamente a la tolva.",
          "También recoger los residuos orgánicos que los trabajadores dejan junto a cada puesto.",
          "Con más de un operario: repartir ambas tareas (cajas y residuos orgánicos).",
          "PROHIBIDO entrar al interior de los puestos para recoger nada — solo retirar lo que depositen en las calles interiores."
        ]
      },
      {
        title: "Fase 4.1 — Retirada de cajas en vehículo recolector compactador",
        items: [
          "Abrir el cuarto de basura y junto a los operarios de recogida depositar todos los embalajes en la tolva.",
          "Desplazar el contenedor orgánico hacia el camión para vaciado y devolverlo a su sitio.",
          "Al mover contenedores: (a) quitar frenos de seguridad antes de moverlos; (b) desplazarlos con la tapa cerrada; (c) empujarlos, NUNCA tirar."
        ]
      },
      {
        title: "Fase 4.2 — Baldeo o fregado de calles interiores",
        items: [
          "A) Baldeo con red interna: seguir pautas del baldeo con carrito. No es necesario señalizar (mercado cerrado). Tramos: de esquina a esquina. Evitar atascar rejillas.",
          "B) Fregadora mecánica: asegurarse de no haber residuos grandes antes de fregar. Llenar depósito con agua + producto en las proporciones del fabricante.",
          "Recorrer calles interiores; si deja rastro de agua, reducir velocidad. Evitar pasar dos veces por el mismo sitio.",
          "El segundo operario friega manualmente las zonas de recorte.",
          "Al terminar: vaciar el depósito de agua sucia, limpiar la boquilla de aspiración, revisar cepillos y platos, poner baterías a cargar.",
          "INCIDENCIAS FREGADORA: Si no arranca → revisar carga de baterías. Si no seca → revisar gomas, tapas de depósito, tubos de aspiración y regulación de la boquilla."
        ]
      },
      {
        title: "Fase 4.3 — Baldeo del perímetro exterior",
        items: [
          "Solo en mercados con red de riego interna.",
          "Coordinar con la operativa del baldeo manual mecanizado mixto."
        ]
      },
      {
        title: "Fase 5 — Comunicación al finalizar la jornada",
        items: [
          "Informar al Coordinador/a del desarrollo de la actividad.",
          "La actividad es satisfactoria solo si se siguen las instrucciones y se alcanzan todos los objetivos."
        ]
      }
    ],
    objectives: [
      "Dejar el suelo de las calles interiores y el perímetro exterior libre de envases y residuos a granel.",
      "Retirar del contorno de los contenedores de los alrededores restos de basura y dejarlos ordenados.",
      "Vaciar las papeleras y limpiar su contorno.",
      "Mantener limpio y ordenado el cuarto de herramientas.",
      "Retirar cajas, cartones y restos de embalajes del interior y el perímetro.",
      "Baldear o fregar, según se indique, las calles interiores del mercado.",
      "No dejar rastros de agua sucia o charcos en la vía.",
      "Eliminar las manchas superficiales y chicles del pavimento de las calles interiores.",
      "Mantener la máquina fregadora en condiciones higiénicas correctas.",
      "Dejar las baterías de la fregadora en carga."
    ],
    questions: [
      {
        question: "¿Quién indica las instrucciones concretas de limpieza para cada mercado?",
        options: ["El operario/a más antiguo", "El Coordinador/a", "El encargado del mercado", "Las normas generales del servicio"],
        correct: 1,
        explanation: "El método es genérico; el Coordinador/a indica las instrucciones concretas para cada caso."
      },
      {
        question: "¿Cuántas fases tiene el método de trabajo de limpieza de mercados?",
        options: ["3", "4", "5", "6"],
        correct: 2,
        explanation: "El método de trabajo de limpieza de mercados tiene 5 fases: Traslado al mercado, Después de la llegada de proveedores, Durante la actividad comercial, Retirada de cajas/fregado/baldeo, y Comunicación al finalizar."
      },
      {
        question: "¿Cuál de las siguientes NO es una herramienta propia de la limpieza de mercados?",
        options: ["Escoba", "Chapulina", "Fregadora mecánica", "Llave de papeleras"],
        correct: 1,
        explanation: "La chapulina es herramienta de barrido/desbroce, no de limpieza de mercados. Las herramientas de mercados incluyen escoba, carretilla, cubo, fregadora mecánica, llave de papeleras, etc."
      },
      {
        question: "¿Dónde se encuentra el centro de trabajo del operario/a de limpieza de mercados?",
        options: ["En la base central del servicio", "En el propio mercado municipal (vestuario, baño y cuarto de almacenaje)", "En el cuarto de herramientas del distrito", "En las instalaciones municipales centrales"],
        correct: 1,
        explanation: "El centro de trabajo ES el propio mercado municipal (vestuario, baño y cuarto de almacenaje)."
      },
      {
        question: "¿Qué se hace en la Fase 1 de la limpieza de mercados?",
        options: ["Barrer el perímetro exterior del mercado", "Ir al cuarto de herramientas y recoger las herramientas adecuadas", "Recoger cajas vacías de los puestos", "Baldear las calles interiores"],
        correct: 1,
        explanation: "Fase 1: Ir al cuarto de herramientas, recoger las herramientas adecuadas para cada etapa y proceder según el método."
      },
      {
        question: "¿Se transporta material de limpieza desde la base al mercado?",
        options: ["Sí, en el vehículo auxiliar", "Solo las bolsas de basura", "No, todo está guardado bajo llave en el cuarto de herramientas del mercado", "Solo el producto de limpieza"],
        correct: 2,
        explanation: "No se transporta material al llegar — todo está guardado bajo llave en el cuarto de herramientas."
      },
      {
        question: "¿Cuándo se realiza la Fase 2 de la limpieza de mercados?",
        options: ["Antes de la llegada de los proveedores", "Después de la llegada de los proveedores", "Durante la actividad comercial", "Al cierre del mercado"],
        correct: 1,
        explanation: "Fase 2: Después de la llegada de los proveedores."
      },
      {
        question: "¿De qué se parte como base al iniciar la Fase 2?",
        options: ["De que el mercado está muy sucio del día anterior", "De que el mercado se dejó limpio el día anterior", "De que no hay residuos en el perímetro", "De que las papeleras están vacías"],
        correct: 1,
        explanation: "Partir de la base de que el mercado se dejó limpio el día anterior."
      },
      {
        question: "¿Qué tareas se realizan en la Fase 2?",
        options: ["Baldeo de calles interiores + fregado de puestos", "Barrido exterior del perímetro + vaciado de papeleras si fuera necesario + barrido de repaso de calles interiores", "Recogida de cajas + recogida de residuos orgánicos", "Fregado mecánico + baldeo del perímetro"],
        correct: 1,
        explanation: "Fase 2: barrido exterior del perímetro del mercado + vaciado de papeleras si fuera necesario + barrido de repaso de calles interiores."
      },
      {
        question: "Las pautas de barrido de la Fase 2 siguen las fases del barrido manual individual. ¿Cuáles?",
        options: ["Fases 1 y 2", "Fases 2 y 3", "Fases 3 y 4", "Fases 4 y 5"],
        correct: 2,
        explanation: "Seguir las pautas de las fases 3 y 4 del barrido manual individual."
      },
      {
        question: "¿En qué fase se recogen las cajas vacías que los trabajadores de los puestos van entregando?",
        options: ["Fase 1", "Fase 2", "Fase 3", "Fase 4"],
        correct: 2,
        explanation: "Fase 3 — Durante la actividad comercial: recorrer las calles interiores con carretilla o cubo recogiendo las cajas vacías."
      },
      {
        question: "¿Con qué se recorren las calles interiores para recoger cajas vacías en la Fase 3?",
        options: ["Con fregadora mecánica", "Con carretilla o cubo", "Con vehículo recolector compactador", "Con el salabar"],
        correct: 1,
        explanation: "Recorrer las calles interiores con carretilla o cubo recogiendo las cajas vacías que los trabajadores de los puestos vayan entregando."
      },
      {
        question: "¿Qué se hace cuando la carretilla está llena de cajas vacías?",
        options: ["Se vacía en la tolva del vehículo compactador directamente", "Se depositan las cajas en el cuarto de basura apilándolas correctamente", "Se dejan en la entrada del mercado", "Se queman en el exterior"],
        correct: 1,
        explanation: "Cuando la carretilla esté llena: depositar las cajas en el cuarto de basura apilándolas correctamente."
      },
      {
        question: "¿Qué está PROHIBIDO hacer durante la Fase 3?",
        options: ["Recorrer las calles con carretilla", "Recoger residuos orgánicos junto a los puestos", "Entrar al interior de los puestos para recoger nada", "Repartir tareas entre operarios"],
        correct: 2,
        explanation: "PROHIBIDO entrar al interior de los puestos para recoger nada — solo retirar lo que depositen en las calles interiores."
      },
      {
        question: "¿Qué tipo de residuos recogen los operarios junto a cada puesto durante la Fase 3?",
        options: ["Cajas de cartón exclusivamente", "Residuos orgánicos que los trabajadores dejan junto a cada puesto", "Residuos voluminosos del perímetro", "Solo envases de plástico"],
        correct: 1,
        explanation: "También recoger los residuos orgánicos que los trabajadores dejan junto a cada puesto."
      },
      {
        question: "Si hay más de un operario durante la Fase 3, ¿cómo se organizan?",
        options: ["Ambos recogen cajas", "Ambos recogen residuos orgánicos", "Se reparten ambas tareas: cajas y residuos orgánicos", "Uno barre y otro recoge"],
        correct: 2,
        explanation: "Con más de un operario: repartir ambas tareas (cajas y residuos orgánicos)."
      },
      {
        question: "¿Qué se retira solo de las calles interiores y NUNCA del interior de los puestos?",
        options: ["Los residuos orgánicos depositados por los trabajadores", "Todo lo que haya dentro del puesto", "Las herramientas del puesto", "El mobiliario del puesto"],
        correct: 0,
        explanation: "Solo retirar lo que depositen en las calles interiores. PROHIBIDO entrar al interior de los puestos."
      },
      {
        question: "En la Fase 4.1, ¿con quién se colabora para depositar los embalajes en la tolva?",
        options: ["Con el Coordinador/a", "Con los operarios de recogida", "Con los trabajadores de los puestos", "Solo el operario de limpieza"],
        correct: 1,
        explanation: "Abrir el cuarto de basura y junto a los operarios de recogida depositar todos los embalajes en la tolva."
      },
      {
        question: "¿Qué se hace con el contenedor orgánico en la Fase 4.1?",
        options: ["Se deja en el cuarto de basura", "Se desplaza hacia el camión para vaciado y se devuelve a su sitio", "Se vacía manualmente en bolsas", "Se sustituye por uno nuevo"],
        correct: 1,
        explanation: "Desplazar el contenedor orgánico hacia el camión para vaciado y devolverlo a su sitio."
      },
      {
        question: "Antes de mover un contenedor, ¿qué hay que hacer primero?",
        options: ["Cerrar la tapa", "Quitar los frenos de seguridad", "Empujarlo con fuerza", "Tirar de él hacia atrás"],
        correct: 1,
        explanation: "Al mover contenedores: (a) quitar frenos de seguridad antes de moverlos."
      },
      {
        question: "¿Cómo se deben desplazar los contenedores?",
        options: ["Con la tapa abierta para ver el contenido", "Con la tapa cerrada", "Sin importar la posición de la tapa", "Solo si están vacíos"],
        correct: 1,
        explanation: "Al mover contenedores: (b) desplazarlos con la tapa cerrada."
      },
      {
        question: "¿Cómo se deben mover los contenedores: empujando o tirando?",
        options: ["Tirando de ellos", "Empujándolos, NUNCA tirar", "Indistintamente, según la situación", "Arrastrándolos por el suelo"],
        correct: 1,
        explanation: "Al mover contenedores: (c) empujarlos, NUNCA tirar."
      },
      {
        question: "¿En qué mercados se realiza el baldeo con red interna de las calles interiores?",
        options: ["En todos los mercados", "Solo en mercados con red de riego interna", "Solo en mercados grandes", "Solo en mercados con fregadora"],
        correct: 1,
        explanation: "Baldeo con red interna: se realiza en mercados que disponen de esta instalación."
      },
      {
        question: "¿Por qué NO es necesario señalizar durante el baldeo de calles interiores del mercado?",
        options: ["Porque hay pocos peatones", "Porque el mercado está cerrado", "Porque se usa fregadora en lugar de agua", "Porque es zona privada"],
        correct: 1,
        explanation: "No es necesario señalizar (mercado cerrado)."
      },
      {
        question: "¿Cómo se definen los tramos durante el baldeo con red interna?",
        options: ["De puesto a puesto", "De esquina a esquina", "De entrada a salida", "De contenedor a contenedor"],
        correct: 1,
        explanation: "Tramos: de esquina a esquina."
      },
      {
        question: "¿Qué se debe evitar especialmente al baldear con red interna?",
        options: ["Mojar los puestos", "Atascar las rejillas", "Pasar por las esquinas", "Usar producto de limpieza"],
        correct: 1,
        explanation: "Evitar atascar rejillas."
      },
      {
        question: "Antes de usar la fregadora mecánica, ¿qué hay que asegurarse?",
        options: ["De que el depósito esté lleno de agua sucia", "De no haber residuos grandes antes de fregar", "De que las baterías estén al 50%", "De que haya señalización en el mercado"],
        correct: 1,
        explanation: "Fregadora mecánica: asegurarse de no haber residuos grandes antes de fregar."
      },
      {
        question: "¿Con qué se llena el depósito de la fregadora mecánica?",
        options: ["Solo con agua", "Con agua + producto en las proporciones del fabricante", "Con agua sucia del depósito", "Con producto de limpieza puro"],
        correct: 1,
        explanation: "Llenar depósito con agua + producto en las proporciones del fabricante."
      },
      {
        question: "Si la fregadora deja rastro de agua al pasar, ¿qué se debe hacer?",
        options: ["Aumentar la velocidad", "Reducir la velocidad", "Pasar dos veces por el mismo sitio", "Añadir más producto al depósito"],
        correct: 1,
        explanation: "Si deja rastro de agua, reducir velocidad."
      },
      {
        question: "¿Se puede pasar dos veces por el mismo sitio con la fregadora?",
        options: ["Sí, para asegurar la limpieza", "No, se debe evitar pasar dos veces por el mismo sitio", "Solo en zonas muy sucias", "Solo si lo indica el Coordinador/a"],
        correct: 1,
        explanation: "Evitar pasar dos veces por el mismo sitio."
      },
      {
        question: "¿Quién friega las zonas de recorte durante el uso de la fregadora mecánica?",
        options: ["El operario que conduce la fregadora", "El segundo operario, manualmente", "No se friegan las zonas de recorte", "El Coordinador/a"],
        correct: 1,
        explanation: "El segundo operario friega manualmente las zonas de recorte."
      },
      {
        question: "¿Cuál es la PRIMERA acción al terminar el uso de la fregadora?",
        options: ["Poner baterías a cargar", "Vaciar el depósito de agua sucia", "Limpiar la boquilla de aspiración", "Revisar cepillos y platos"],
        correct: 1,
        explanation: "Al terminar: vaciar el depósito de agua sucia, limpiar la boquilla de aspiración, revisar cepillos y platos, poner baterías a cargar."
      },
      {
        question: "¿Cuál es la ÚLTIMA acción al terminar el uso de la fregadora?",
        options: ["Vaciar el depósito de agua sucia", "Limpiar la boquilla de aspiración", "Revisar cepillos y platos", "Poner baterías a cargar"],
        correct: 3,
        explanation: "Al terminar: vaciar el depósito de agua sucia, limpiar la boquilla de aspiración, revisar cepillos y platos, poner baterías a cargar."
      },
      {
        question: "Si la fregadora NO ARRANCA, ¿qué se debe revisar?",
        options: ["Los cepillos", "La carga de baterías", "Las gomas de aspiración", "El depósito de agua limpia"],
        correct: 1,
        explanation: "INCIDENCIAS FREGADORA: Si no arranca → revisar carga de baterías."
      },
      {
        question: "Si la fregadora NO SECA, ¿qué elementos se deben revisar?",
        options: ["Solo las baterías", "Gomas, tapas de depósito, tubos de aspiración y regulación de la boquilla", "Solo los cepillos", "Solo el depósito de agua limpia"],
        correct: 1,
        explanation: "Si no seca → revisar gomas, tapas de depósito, tubos de aspiración y regulación de la boquilla."
      },
      {
        question: "¿Cuál de las siguientes NO es una causa a revisar si la fregadora no seca?",
        options: ["Gomas", "Carga de baterías", "Tubos de aspiración", "Regulación de la boquilla"],
        correct: 1,
        explanation: "La carga de baterías se revisa si la fregadora no arranca. Si no seca se revisan: gomas, tapas de depósito, tubos de aspiración y regulación de la boquilla."
      },
      {
        question: "¿Qué se debe limpiar de la fregadora al terminar el trabajo?",
        options: ["El depósito de agua limpia", "La boquilla de aspiración", "Las ruedas", "El asiento del operario"],
        correct: 1,
        explanation: "Al terminar: limpiar la boquilla de aspiración."
      },
      {
        question: "¿Qué se debe revisar de la fregadora al terminar el trabajo, además de la boquilla?",
        options: ["Las ruedas y el asiento", "Cepillos y platos", "El cable de alimentación", "El sistema de frenado"],
        correct: 1,
        explanation: "Al terminar: revisar cepillos y platos."
      },
      {
        question: "¿En qué fase se realiza el baldeo del perímetro exterior?",
        options: ["Fase 2", "Fase 3", "Fase 4.3", "Fase 5"],
        correct: 2,
        explanation: "Fase 4.3 — Baldeo del perímetro exterior."
      },
      {
        question: "¿Con qué operativa se coordina el baldeo del perímetro exterior?",
        options: ["Con la operativa de la fregadora mecánica", "Con la operativa del baldeo manual mecanizado mixto", "Con la operativa de recogida de cajas", "Con la operativa de vaciado de papeleras"],
        correct: 1,
        explanation: "Coordinar con la operativa del baldeo manual mecanizado mixto."
      },
      {
        question: "¿A quién se informa del desarrollo de la actividad al finalizar?",
        options: ["Al encargado del mercado", "Al Coordinador/a", "A los trabajadores de los puestos", "Al supervisor de distrito"],
        correct: 1,
        explanation: "Fase 5: Informar al Coordinador/a del desarrollo de la actividad."
      },
      {
        question: "¿Cuándo se considera que la actividad de limpieza es satisfactoria?",
        options: ["Cuando se termina antes de la hora prevista", "Solo si se siguen las instrucciones y se alcanzan todos los objetivos", "Cuando el mercado queda visualmente limpio", "Cuando el Coordinador/a lo decide"],
        correct: 1,
        explanation: "La actividad es satisfactoria solo si se siguen las instrucciones y se alcanzan todos los objetivos."
      },
      {
        question: "¿Cuántos objetivos tiene el puesto de limpieza de mercados?",
        options: ["8", "9", "10", "11"],
        correct: 2,
        explanation: "El puesto de trabajo de limpieza de mercados tiene 10 objetivos definidos."
      },
      {
        question: "¿Cuál de los siguientes es un objetivo de la limpieza de mercados?",
        options: ["Limpiar los cristales de los puestos", "Eliminar las manchas superficiales y chicles del pavimento de las calles interiores", "Lavar las fachadas del mercado", "Limpiar los vehículos de los proveedores"],
        correct: 1,
        explanation: "Uno de los 10 objetivos: eliminar las manchas superficiales y chicles del pavimento de las calles interiores."
      },
      {
        question: "¿Qué vehículo se usa en algunos mercados para retirar cajas directamente a la tolva?",
        options: ["La carretilla manual", "El vehículo recolector compactador", "La fregadora mecánica", "El vehículo auxiliar del operario"],
        correct: 1,
        explanation: "En algunos mercados hay vehículo recolector compactador para retirar cajas directamente a la tolva."
      }
    ]
  },
  {
    id: 9,
    number: "09",
    title: "Limpieza Manual de Playas",
    description: "Un operario/a recorre la zona de playas asignada a pie. La playa se divide en 3 franjas paralelas al mar: zona baja (rebalaje), zona media y zona alta.",
    tools: ["Salabar", "Chapulína", "Bolsas de basura", "Guantes"],
    phases: [
      {
        title: "Fase 1 — Traslado y selección del tramo",
        items: [
          "Equiparse con herramientas en el centro de trabajo.",
          "El Coordinador/a indica la zona de trabajo.",
          "Desplazamiento a pie (si la distancia es corta) o en vehículo auxiliar.",
          "NO se seleccionan tramos — la playa se divide en 3 bandas paralelas al mar (baja, media, alta) y se recorren de inicio a fin."
        ]
      },
      {
        title: "Fase 2 — Vaciado de papeleras",
        items: [
          "Normalmente lo realiza el operario/a de vaciado de papeleras de playa, pero en determinadas playas y épocas los operarios de limpieza manual apoyan al inicio de la jornada.",
          "Solo se hace si lo indica el Coordinador/a.",
          "Las bolsas llenas se depositan junto al pie de la papelera (anudadas) y se coloca una bolsa limpia.",
          "Limpiar la papelera y sus alrededores.",
          "Ordenar residuos voluminosos presentes en la zona: los abarcables llevarlos a la papelera más cercana. Si no se pueden retirar: comunicar al Coordinador/a."
        ]
      },
      {
        title: "Fase 3 — Limpieza manual de la zona de rebalaje (zona baja)",
        items: [
          "Recorrer la zona baja de la playa de inicio a fin.",
          "Residuos de tamaño medio/grande: llevarlos hacia la papelera más cercana.",
          "Residuos pequeños (cribado con salabar): 1) Identificar el residuo. 2) Coger el salabar con la mano hábil y hundirlo en la arena hasta MENOS DE LA MITAD (si se hunde más, el peso de la arena daña el material). 3) Al levantar, la arena cae por la malla y el residuo queda atrapado. 4) Sacudir suavemente para separar arena de los pliegues del residuo. 5) Depositar el residuo en la bolsa que se lleva en la otra mano.",
          "En zonas de rocas al nivel del rebalaje: el límite playa-rocas también es responsabilidad del operario/a."
        ]
      },
      {
        title: "Fase 4 — Limpieza de la zona media y contorno de papeleras",
        items: [
          "Terminar la zona baja y cambiar el sentido de marcha.",
          "Retirar residuos de tamaño medio/grande y pequeños (mismo método que la fase 3) en la zona media.",
          "Especial atención al contorno de las papeleras."
        ]
      },
      {
        title: "Fase 5 — Limpieza de la zona alta",
        items: [
          "Cambiar de nuevo el sentido del recorrido.",
          "Subir a la zona alta: límite de la arena con el muro del paseo marítimo o zonas duras.",
          "Si hay áreas de juegos infantiles en la zona alta: también limpiarlas manualmente.",
          "Usar la chapulina (del bolsillo lateral) para eliminar matas de más de dos dedos que aparezcan en la linde de la playa con zonas duras."
        ]
      },
      {
        title: "Fase 6 — Comunicación al finalizar la jornada",
        items: [
          "Dar parte al Coordinador/a del desarrollo de la jornada.",
          "Informar de todas las incidencias."
        ]
      }
    ],
    objectives: [
      "Retirar envases y basura a granel de la arena, alrededores del muro, zonas de juego, papeleras y zonas de roqueo.",
      "Depositar junto a la zona de papeleras los residuos de tamaño medio y grande.",
      "Retirar de las papeleras las bolsas de residuos y depositarlas junto a los soportes, debidamente anudadas.",
      "Reponer las bolsas de las papeleras.",
      "Retirar las matas de más de dos dedos de altura."
    ],
    questions: [
      {
        question: "¿Cómo se divide la playa para la limpieza manual?",
        options: ["En 3 franjas paralelas al mar: zona baja, zona media y zona alta", "En tramos numerados de 50 metros cada uno", "En zonas según la afluencia de bañistas", "En 4 cuadrantes desde el centro de la playa"],
        correct: 0,
        explanation: "La playa se divide en 3 franjas paralelas al mar: zona baja (rebalaje), zona media y zona alta, que se recorren de inicio a fin."
      },
      {
        question: "¿Cuál es la profundidad máxima a la que se debe hundir el salabar en la arena?",
        options: ["Hasta menos de la mitad", "Hasta la mitad exactamente", "Hasta tres cuartas partes", "Hasta el fondo para asegurar la recogida"],
        correct: 0,
        explanation: "El salabar se hunde hasta MENOS DE LA MITAD. Si se hunde más, el peso de la arena daña el material."
      },
      {
        question: "¿Qué ocurre si se hunde el salabar más de la mitad en la arena?",
        options: ["El peso de la arena daña el material", "Se recoge más residuo pero se cansa antes", "La malla se obstruye permanentemente", "No ocurre nada, es la forma correcta"],
        correct: 0,
        explanation: "Si se hunde más de la mitad, el peso de la arena daña el material del salabar."
      },
      {
        question: "¿Cuál es el primer paso del cribado con salabar?",
        options: ["Identificar el residuo", "Coger el salabar con la mano hábil", "Hundir el salabar en la arena", "Sacudir suavemente"],
        correct: 0,
        explanation: "El primer paso es identificar el residuo. Luego: coger el salabar, hundirlo menos de la mitad, levantar, sacudir y depositar."
      },
      {
        question: "¿En qué mano se lleva la bolsa de residuos durante el cribado con salabar?",
        options: ["En la otra mano", "En la misma mano que el salabar", "Colgada del hombro", "En el suelo junto al operario"],
        correct: 0,
        explanation: "El residuo se deposita en la bolsa que se lleva en la otra mano, mientras el salabar se coge con la mano hábil."
      },
      {
        question: "¿Qué se hace inmediatamente después de levantar el salabar de la arena?",
        options: ["La arena cae por la malla y el residuo queda atrapado", "Se sacude suavemente para separar la arena", "Se deposita directamente en la bolsa", "Se vuelve a hundir en la arena"],
        correct: 0,
        explanation: "Al levantar el salabar, la arena cae por la malla y el residuo queda atrapado. Luego se sacude suavemente."
      },
      {
        question: "¿Para qué se sacude suavemente el salabar tras levantar el residuo?",
        options: ["Para separar la arena de los pliegues del residuo", "Para limpiar la malla del salabar", "Para compactar el residuo en la bolsa", "Para verificar que no hay más residuos"],
        correct: 0,
        explanation: "Se sacude suavemente para separar la arena de los pliegues del residuo antes de depositarlo en la bolsa."
      },
      {
        question: "¿Cuál es el último paso del cribado con salabar?",
        options: ["Depositar el residuo en la bolsa de la otra mano", "Sacudir suavemente el salabar", "Volver a hundir el salabar en la arena", "Limpiar la malla del salabar"],
        correct: 0,
        explanation: "El último paso es depositar el residuo en la bolsa que se lleva en la otra mano."
      },
      {
        question: "¿Con qué mano se coge el salabar?",
        options: ["Con la mano hábil", "Con la mano no hábil", "Con ambas manos", "Da igual, depende del operario"],
        correct: 0,
        explanation: "El salabar se coge con la mano hábil del operario/a para mayor control y eficacia."
      },
      {
        question: "¿En qué fase se realiza la limpieza de la zona de rebalaje?",
        options: ["Fase 3", "Fase 2", "Fase 4", "Fase 5"],
        correct: 0,
        explanation: "La limpieza manual de la zona de rebalaje (zona baja) se realiza en la Fase 3."
      },
      {
        question: "¿Qué zona de la playa se limpia en la Fase 4?",
        options: ["La zona media y contorno de papeleras", "La zona baja de rebalaje", "La zona alta y áreas de juegos", "Solo el contorno de papeleras"],
        correct: 0,
        explanation: "En la Fase 4 se limpia la zona media con especial atención al contorno de las papeleras."
      },
      {
        question: "¿Qué zona de la playa se limpia en la Fase 5?",
        options: ["La zona alta", "La zona media", "La zona baja de rebalaje", "Las áreas de juegos exclusivamente"],
        correct: 0,
        explanation: "En la Fase 5 se sube a la zona alta: límite de la arena con el muro del paseo marítimo o zonas duras."
      },
      {
        question: "¿Qué se hace en la Fase 2 de la limpieza manual de playas?",
        options: ["Vaciado de papeleras (si lo indica el Coordinador/a)", "Limpieza de la zona baja", "Limpieza de la zona media", "Comunicación al Coordinador/a"],
        correct: 0,
        explanation: "La Fase 2 es el vaciado de papeleras, que solo se realiza si lo indica el Coordinador/a."
      },
      {
        question: "¿Qué se hace en la Fase 6?",
        options: ["Dar parte al Coordinador/a del desarrollo de la jornada e informar de incidencias", "Limpieza de la zona alta", "Vaciado de papeleras", "Limpieza de la zona media"],
        correct: 0,
        explanation: "La Fase 6 consiste en dar parte al Coordinador/a del desarrollo de la jornada e informar de todas las incidencias."
      },
      {
        question: "¿Qué se hace en la Fase 1?",
        options: ["Equiparse con herramientas, recibir indicaciones del Coordinador/a y desplazarse a la zona", "Limpieza de la zona baja", "Vaciado de papeleras", "Limpieza de la zona alta"],
        correct: 0,
        explanation: "En la Fase 1 el operario/a se equipa con herramientas, el Coordinador/a indica la zona y se desplaza a pie o en vehículo auxiliar."
      },
      {
        question: "¿Cuál es el orden correcto de limpieza de las zonas de la playa?",
        options: ["Zona baja, zona media, zona alta", "Zona alta, zona media, zona baja", "Zona media, zona baja, zona alta", "Zona baja, zona alta, zona media"],
        correct: 0,
        explanation: "Se limpia primero la zona baja (Fase 3), luego la zona media (Fase 4) y finalmente la zona alta (Fase 5)."
      },
      {
        question: "¿Cuántas veces se cambia el sentido de marcha durante la limpieza completa?",
        options: ["Dos veces", "Una vez", "Tres veces", "Ninguna"],
        correct: 0,
        explanation: "Se cambia el sentido de marcha dos veces: al terminar la zona baja (para ir a la media) y al terminar la zona media (para ir a la alta)."
      },
      {
        question: "¿Cuándo se cambia el sentido de marcha por primera vez?",
        options: ["Al terminar la zona baja, antes de pasar a la zona media", "Al terminar la zona media, antes de pasar a la zona alta", "Al terminar la zona alta", "Al inicio de la jornada"],
        correct: 0,
        explanation: "El primer cambio de sentido se produce al terminar la zona baja para comenzar la limpieza de la zona media."
      },
      {
        question: "¿Cuándo se cambia el sentido de marcha por segunda vez?",
        options: ["Al terminar la zona media, antes de subir a la zona alta", "Al terminar la zona baja", "Al terminar la zona alta", "Al llegar al contorno de papeleras"],
        correct: 0,
        explanation: "El segundo cambio de sentido se produce al terminar la zona media para subir a la zona alta."
      },
      {
        question: "¿Qué herramienta se usa para eliminar matas de más de dos dedos?",
        options: ["La chapulina", "El salabar", "Las manos con guantes", "Una pala"],
        correct: 0,
        explanation: "La chapulina se usa para eliminar matas de más de dos dedos que aparezcan en la linde de la playa con zonas duras."
      },
      {
        question: "¿De dónde se saca la chapulina durante el trabajo?",
        options: ["Del bolsillo lateral", "Del centro de trabajo", "Del vehículo auxiliar", "De la bolsa de residuos"],
        correct: 0,
        explanation: "La chapulina se lleva en el bolsillo lateral."
      },
      {
        question: "¿En qué zona se utilizan las chapulinas para eliminar matas?",
        options: ["En la zona alta, en la linde de la playa con zonas duras", "En la zona baja de rebalaje", "En la zona media", "En cualquier zona indistintamente"],
        correct: 0,
        explanation: "Las chapulinas se usan en la zona alta, en la linde de la playa con el muro del paseo marítimo o zonas duras."
      },
      {
        question: "¿Qué tamaño de matas se deben eliminar con la chapulina?",
        options: ["Más de dos dedos de altura", "Más de un dedo de altura", "Más de tres dedos de altura", "Cualquier mata visible"],
        correct: 0,
        explanation: "Se eliminan matas de más de dos dedos de altura que aparezcan en la linde de la playa con zonas duras."
      },
      {
        question: "¿Qué herramientas se utilizan en la limpieza manual de playas?",
        options: ["Salabar, chapulina, bolsas de basura y guantes", "Pala, rastrillo, escoba y guantes", "Salabar, pala, cubo y guantes", "Chapulína, rastrillo, bolsas y casco"],
        correct: 0,
        explanation: "Las herramientas son: Salabar, Chapulína, Bolsas de basura y Guantes."
      },
      {
        question: "¿Cómo se desplaza el operario/a a la zona de trabajo?",
        options: ["A pie si la distancia es corta o en vehículo auxiliar", "Siempre en vehículo auxiliar", "Siempre a pie", "En el camión recolector"],
        correct: 0,
        explanation: "El desplazamiento es a pie si la distancia es corta o en vehículo auxiliar si es mayor."
      },
      {
        question: "¿Quién indica al operario/a la zona de trabajo?",
        options: ["El Coordinador/a", "El operario/a decide libremente", "El conductor del vehículo auxiliar", "El jefe de equipo"],
        correct: 0,
        explanation: "El Coordinador/a indica la zona de trabajo al operario/a al inicio de la jornada."
      },
      {
        question: "¿Normalmente quién realiza el vaciado de papeleras de playa?",
        options: ["El operario/a de vaciado de papeleras de playa", "El operario/a de limpieza manual", "El Coordinador/a", "El conductor del vehículo auxiliar"],
        correct: 0,
        explanation: "Normalmente lo realiza el operario/a de vaciado de papeleras de playa, aunque los de limpieza manual pueden apoyar si lo indica el Coordinador/a."
      },
      {
        question: "¿Cuándo apoyan los operarios de limpieza manual en el vaciado de papeleras?",
        options: ["Solo si lo indica el Coordinador/a, en determinadas playas y épocas", "Siempre al inicio de la jornada", "Nunca, es tarea exclusiva de otro equipo", "Cuando terminan la zona baja"],
        correct: 0,
        explanation: "Solo apoyan si lo indica el Coordinador/a, en determinadas playas y épocas, al inicio de la jornada."
      },
      {
        question: "¿Qué se hace con las bolsas llenas tras vaciar una papelera?",
        options: ["Se depositan junto al pie de la papelera anudadas y se coloca una bolsa limpia", "Se llevan directamente al centro de trabajo", "Se dejan dentro de la papelera vacía", "Se depositan en el vehículo auxiliar"],
        correct: 0,
        explanation: "Las bolsas llenas se depositan junto al pie de la papelera (anudadas) y se coloca una bolsa limpia."
      },
      {
        question: "¿Qué se hace con la papelera tras vaciarla?",
        options: ["Se limpia la papelera y sus alrededores", "Solo se coloca la bolsa nueva", "Se deja tal cual", "Se retira la papelera al centro de trabajo"],
        correct: 0,
        explanation: "Tras vaciarla se limpia la papelera y sus alrededores."
      },
      {
        question: "¿Qué se hace con los residuos voluminosos abarcables encontrados en la zona?",
        options: ["Llevarlos a la papelera más cercana", "Dejarlos donde están y comunicar al Coordinador/a", "Enterrarlos en la arena", "Cortarlos en trozos más pequeños"],
        correct: 0,
        explanation: "Los residuos voluminosos abarcables se llevan a la papelera más cercana. Si no se pueden retirar, se comunica al Coordinador/a."
      },
      {
        question: "¿Qué se hace con los residuos voluminosos que NO se pueden retirar?",
        options: ["Comunicarlo al Coordinador/a", "Intentar enterrarlos", "Dejarlos y continuar sin más", "Llamar al equipo de mantenimiento"],
        correct: 0,
        explanation: "Si los residuos voluminosos no se pueden retirar, se debe comunicar al Coordinador/a."
      },
      {
        question: "¿Qué tipo de residuos se llevan a la papelera más cercana en la zona de rebalaje?",
        options: ["Residuos de tamaño medio/grande", "Solo residuos pequeños", "Solo residuos orgánicos", "Todos los residuos indistintamente"],
        correct: 0,
        explanation: "Los residuos de tamaño medio/grande se llevan hacia la papelera más cercana. Los pequeños se recogen con salabar."
      },
      {
        question: "¿Cómo se recogen los residuos pequeños en la zona de rebalaje?",
        options: ["Mediante cribado con salabar", "Con las manos enguantadas", "Con la chapulina", "Con una escoba"],
        correct: 0,
        explanation: "Los residuos pequeños se recogen mediante cribado con salabar, siguiendo los 5 pasos del procedimiento."
      },
      {
        question: "¿Quién es responsable de la limpieza del límite playa-rocas en zonas de roqueo al nivel del rebalaje?",
        options: ["El operario/a de limpieza manual de playas", "El operario/a de limpieza de rocas", "El Coordinador/a", "El equipo de mantenimiento"],
        correct: 0,
        explanation: "En zonas de rocas al nivel del rebalaje, el límite playa-rocas también es responsabilidad del operario/a de limpieza manual de playas."
      },
      {
        question: "¿En qué zona se presta especial atención al contorno de las papeleras?",
        options: ["En la zona media (Fase 4)", "En la zona baja (Fase 3)", "En la zona alta (Fase 5)", "En todas las zonas por igual"],
        correct: 0,
        explanation: "En la Fase 4 (zona media) se presta especial atención al contorno de las papeleras."
      },
      {
        question: "¿Qué se limpia en la zona alta además de la arena?",
        options: ["Las áreas de juegos infantiles si las hay", "Solo el muro del paseo marítimo", "Las papeleras exclusivamente", "Las zonas de rocas"],
        correct: 0,
        explanation: "Si hay áreas de juegos infantiles en la zona alta, también se limpian manualmente."
      },
      {
        question: "¿Dónde se sitúa el límite de la zona alta?",
        options: ["En el límite de la arena con el muro del paseo marítimo o zonas duras", "A 10 metros del mar", "Donde termina la arena seca", "En la primera papelera"],
        correct: 0,
        explanation: "La zona alta es el límite de la arena con el muro del paseo marítimo o zonas duras."
      },
      {
        question: "¿Qué se debe informar al Coordinador/a al finalizar la jornada?",
        options: ["El desarrollo de la jornada y todas las incidencias", "Solo las incidencias graves", "El número de bolsas recogidas", "Solo si se han completado las 3 zonas"],
        correct: 0,
        explanation: "Se debe dar parte al Coordinador/a del desarrollo de la jornada e informar de todas las incidencias."
      },
      {
        question: "¿Cuántos objetivos tiene el servicio de limpieza manual de playas?",
        options: ["5", "3", "4", "6"],
        correct: 0,
        explanation: "El servicio tiene 5 objetivos: retirar envases y basura, depositar residuos junto a papeleras, retirar bolsas de papeleras, reponer bolsas y retirar matas de más de dos dedos."
      },
      {
        question: "¿Cuál de estos NO es un objetivo del servicio de limpieza manual de playas?",
        options: ["Recoger residuos de la calzada del paseo marítimo", "Retirar envases y basura a granel de la arena", "Retirar las matas de más de dos dedos de altura", "Reponer las bolsas de las papeleras"],
        correct: 0,
        explanation: "Recoger residuos de la calzada no es un objetivo. Los 5 objetivos son: retirar envases y basura de la arena, depositar residuos junto a papeleras, retirar bolsas de papeleras, reponer bolsas y retirar matas."
      },
      {
        question: "¿Qué se hace con los residuos de tamaño medio/grande en la zona media?",
        options: ["Se retiran igual que en la zona baja, y los pequeños con salabar", "Solo se recogen con las manos", "Se dejan junto a las papeleras", "Se comunican al Coordinador/a"],
        correct: 0,
        explanation: "En la zona media se retiran residuos de tamaño medio/grande y pequeños con el mismo método que en la Fase 3."
      },
      {
        question: "¿La playa se divide en tramos para la limpieza manual?",
        options: ["No, se divide en 3 bandas paralelas al mar que se recorren de inicio a fin", "Sí, en tramos de 50 metros", "Sí, en tramos según el número de papeleras", "Sí, en tramos asignados por el Coordinador/a"],
        correct: 0,
        explanation: "NO se seleccionan tramos — la playa se divide en 3 bandas paralelas al mar (baja, media, alta) y se recorren de inicio a fin."
      },
      {
        question: "¿Qué se hace con la bolsa de la papelera tras retirarla?",
        options: ["Se anuda y se deposita junto al pie de la papelera", "Se deposita sin anudar", "Se lleva directamente al centro de trabajo", "Se deja en la zona de rebalaje"],
        correct: 0,
        explanation: "Las bolsas llenas se depositan junto al pie de la papelera debidamente anudadas y se coloca una bolsa limpia."
      },
      {
        question: "¿En qué fase se equipa el operario/a con las herramientas?",
        options: ["Fase 1", "Fase 2", "Fase 3", "Antes de llegar al centro de trabajo"],
        correct: 0,
        explanation: "En la Fase 1 el operario/a se equipa con herramientas en el centro de trabajo."
      }
    ]
  },
  {
    id: 10,
    number: "10",
    title: "Recogida de Papeleras en Playas",
    description: "Vehículo recolector de tracción integral con tolva de mediana capacidad + 1 conductor/a + 1 operario/a de limpieza. Retira y repone bolsas de papeleras y recoge residuos del contorno.",
    tools: ["Vehículo recolector con tolva", "Bolsas nuevas", "Casco de protección", "Cuadro de mandos de compactación"],
    phases: [
      {
        title: "Fase 1 — Traslado a la zona de trabajo",
        items: [
          "Ir montado en la cabina durante desplazamientos por calzada o trayectos largos.",
          "Al subir/bajar de la cabina: siempre de cara a ella, usando escalones y agarraderas.",
          "El conductor/a organiza las paradas — tiene la visión del área de trabajo."
        ]
      },
      {
        title: "Fase 2 — Retirada de residuos y bolsas del contorno de papeleras",
        items: [
          "Descender correctamente de la cabina y subirse a la estribera trasera (vehículo detenido + casco puesto).",
          "Al detenerse el vehículo: descender de la estribera, ir a la ventanilla del conductor/a, recoger tantas bolsas nuevas como papeleras haya en ese punto y acercarse a la zona.",
          "Retirar las bolsas de los recipientes (si no estuviesen fuera), anudarlas y reponer con bolsas nuevas.",
          "Si el operario/a de limpieza de playas ya lo hizo: solo depositar los residuos a granel y bolsas en la tolva.",
          "Para residuos de tamaño medio/grande: abrir la compuerta de carga, introducirlos en la tolva y cerrar la compuerta asegurando los pestillos."
        ]
      },
      {
        title: "Fase 3 — Compactación de residuos en la tolva",
        items: [
          "Activar el sistema de compactación desde el cuadro de mandos para prensar y empujar residuos al fondo.",
          "SIEMPRE con el vehículo detenido y el operario/a FUERA de las estriberas.",
          "Mantener brazos extendidos, distancia de seguridad y contacto visual con el equipo durante la operación.",
          "Cuando la tolva esté llena: comunicarlo al conductor/a e ir a realizar la descarga.",
          "OBLIGATORIO replegar las estriberas antes de subirse a la cabina."
        ]
      },
      {
        title: "Fase 4 — Ayuda durante el vaciado de la tolva en zona de transferencia",
        items: [
          "La descarga NO se realiza en el Centro Ambiental sino en nodrizas o cajas de gran volumen.",
          "Mientras se espera turno: permanecer en cabina. PROHIBIDO descender si hay vehículos manipulando.",
          "Cuando sea el turno: descender de la cabina y guiar al conductor/a para alinear el vehículo (~2 metros del nodriza).",
          "Asegurarse de que las estriberas del nodriza estén replegadas.",
          "Si el nodriza tiene placa de descarga: (a) asegurarse de que las estriberas estén desplegadas antes de subir la placa. (b) Bajar la placa desde mandos del lateral trasero del nodriza. (c) Recoger las estriberas una vez desplegada la placa.",
          "Guiar al conductor/a para el encuadre final.",
          "Tras la descarga: recoger con tablillas los residuos caídos al suelo y depositarlos en la tolva del nodriza.",
          "La maniobra de compactado del nodriza es responsabilidad de su conductor/a — el operario/a NO debe manipular esos mandos.",
          "Al terminar: subirse correctamente a la cabina y continuar la tarea."
        ]
      },
      {
        title: "Fase 5 — Comunicación al finalizar la jornada",
        items: [
          "Informar al Coordinador/a del desarrollo de la jornada y las incidencias.",
          "El desarrollo es completo y satisfactorio solo si se alcanzan los objetivos y se sigue el método."
        ]
      }
    ],
    objectives: [
      "Retirar residuos de tamaño grande y medio de la zona de playa asignada.",
      "Depositar en la tolva del vehículo recolector las bolsas de residuos de las papeleras de playa y sus alrededores.",
      "Realizar las tareas de señalización durante el posicionamiento del vehículo para su descarga."
    ],
    questions: [
      {
        question: "¿Qué composición de equipo realiza la recogida de papeleras en playas?",
        options: ["1 conductor/a + 2 operarios/as de limpieza", "1 conductor/a + 1 operario/a de limpieza", "2 conductores/as + 1 operario/a de limpieza", "1 conductor/a + 3 operarios/as de limpieza"],
        correct: 1,
        explanation: "El equipo está formado por 1 conductor/a y 1 operario/a de limpieza, con vehículo recolector de tracción integral con tolva de mediana capacidad."
      },
      {
        question: "¿Dónde debe ir el operario/a durante los desplazamientos por calzada?",
        options: ["En la estribera trasera", "Montado en la cabina", "Caminando junto al vehículo", "En la parte trasera del vehículo"],
        correct: 1,
        explanation: "Durante desplazamientos por calzada o trayectos largos, el operario/a debe ir montado en la cabina."
      },
      {
        question: "¿Cómo debe subir o bajar de la cabina el operario/a?",
        options: ["De espaldas a la cabina, usando los escalones", "De cara a la cabina, usando escalones y agarraderas", "Saltando desde la estribera", "Por el lateral del vehículo sin agarraderas"],
        correct: 1,
        explanation: "Al subir/bajar de la cabina: siempre de cara a ella, usando escalones y agarraderas."
      },
      {
        question: "¿Quién organiza las paradas durante la recogida de papeleras en playas?",
        options: ["El operario/a de limpieza", "El Coordinador/a de forma remota", "El conductor/a", "Se siguen paradas predefinidas sin decisión"],
        correct: 2,
        explanation: "El conductor/a organiza las paradas, ya que tiene la visión del área de trabajo."
      },
      {
        question: "¿Qué debe hacer el operario/a al subir o bajar de la estribera trasera?",
        options: ["Puede hacerlo con el vehículo en movimiento lento", "Siempre con el vehículo detenido y casco puesto", "Solo necesita casco si hay tráfico", "Puede hacerlo si el conductor/a le da permiso"],
        correct: 1,
        explanation: "Descender correctamente de la cabina y subirse a la estribera trasera requiere vehículo detenido + casco puesto."
      },
      {
        question: "¿Qué debe hacer el operario/a inmediatamente al detenerse el vehículo en un punto de recogida?",
        options: ["Ir directamente a las papeleras", "Descender de la estribera, ir a la ventanilla del conductor/a y recoger bolsas nuevas", "Esperar a que el conductor/a le entregue las bolsas", "Abrir la compuerta de carga"],
        correct: 1,
        explanation: "Al detenerse el vehículo: descender de la estribera, ir a la ventanilla del conductor/a, recoger tantas bolsas nuevas como papeleras haya en ese punto y acercarse a la zona."
      },
      {
        question: "¿Cuántas bolsas nuevas debe recoger el operario/a en cada parada?",
        options: ["Siempre 2 bolsas", "Las que indique el conductor/a", "Tantas bolsas nuevas como papeleras haya en ese punto", "Una bolsa por cada 2 papeleras"],
        correct: 2,
        explanation: "Debe recoger tantas bolsas nuevas como papeleras haya en ese punto."
      },
      {
        question: "¿Qué debe hacer el operario/a si las bolsas de las papeleras no están fuera del recipiente?",
        options: ["Esperar a que otro operario las saque", "Retirar las bolsas de los recipientes, anudarlas y reponer con bolsas nuevas", "Solo reponer bolsas nuevas sin retirar las viejas", "Comunicarlo al Coordinador/a"],
        correct: 1,
        explanation: "Retirar las bolsas de los recipientes (si no estuviesen fuera), anudarlas y reponer con bolsas nuevas."
      },
      {
        question: "Si el operario/a de limpieza de playas ya ha retirado las bolsas de las papeleras, ¿qué debe hacer el equipo del vehículo recolector?",
        options: ["Retirar las bolsas de nuevo para verificar", "Solo depositar los residuos a granel y bolsas en la tolva", "Esperar a que el operario de playas termine", "Comunicarlo al Coordinador/a"],
        correct: 1,
        explanation: "Si el operario/a de limpieza de playas ya lo hizo: solo depositar los residuos a granel y bolsas en la tolva."
      },
      {
        question: "¿Cómo se deben introducir los residuos de tamaño medio/grande en la tolva?",
        options: ["Abrir la compuerta, introducirlos y dejarla abierta", "Abrir la compuerta de carga, introducirlos y cerrar asegurando los pestillos", "Lanzarlos directamente desde la estribera", "Esperar a la compactación para introducirlos"],
        correct: 1,
        explanation: "Para residuos de tamaño medio/grande: abrir la compuerta de carga, introducirlos en la tolva y cerrar la compuerta asegurando los pestillos."
      },
      {
        question: "¿Desde dónde se activa el sistema de compactación de la tolva?",
        options: ["Desde la cabina del conductor", "Desde el cuadro de mandos de compactación", "Desde la estribera trasera", "Desde los mandos del lateral del nodriza"],
        correct: 1,
        explanation: "Se activa el sistema de compactación desde el cuadro de mandos para prensar y empujar residuos al fondo."
      },
      {
        question: "¿Qué dos condiciones son SIEMPRE obligatorias para activar la compactación?",
        options: ["Vehículo detenido y operario/a en la estribera", "Vehículo en movimiento lento y casco puesto", "Vehículo detenido y operario/a FUERA de las estriberas", "Vehículo detenido y conductor/a en la cabina"],
        correct: 2,
        explanation: "La compactación se activa SIEMPRE con el vehículo detenido y el operario/a FUERA de las estriberas."
      },
      {
        question: "¿Qué debe mantener el operario/a durante la operación de compactación?",
        options: ["Brazos recogidos y contacto visual con el conductor", "Brazos extendidos, distancia de seguridad y contacto visual con el equipo", "Brazos extendidos y espalda al equipo", "Distancia de seguridad y espalda al vehículo"],
        correct: 1,
        explanation: "Mantener brazos extendidos, distancia de seguridad y contacto visual con el equipo durante la operación."
      },
      {
        question: "¿Qué debe hacer el operario/a cuando la tolva está llena?",
        options: ["Activar la compactación de nuevo", "Comunicarlo al conductor/a e ir a realizar la descarga", "Seguir recogiendo bolsas", "Esperar instrucciones del Coordinador/a"],
        correct: 1,
        explanation: "Cuando la tolva esté llena: comunicarlo al conductor/a e ir a realizar la descarga."
      },
      {
        question: "¿Qué es OBLIGATORIO hacer antes de subirse a la cabina?",
        options: ["Cerrar la compuerta de carga", "Comunicar al Coordinador/a", "Replegar las estriberas", "Activar la compactación"],
        correct: 2,
        explanation: "Es OBLIGATORIO replegar las estriberas antes de subirse a la cabina."
      },
      {
        question: "¿Dónde se realiza la descarga de los residuos del vehículo recolector de playas?",
        options: ["En el Centro Ambiental", "En nodrizas o cajas de gran volumen", "En la playa más cercana", "En cualquier punto de transferencia"],
        correct: 1,
        explanation: "La descarga NO se realiza en el Centro Ambiental sino en nodrizas o cajas de gran volumen."
      },
      {
        question: "¿Dónde debe permanecer el operario/a mientras se espera turno para descargar?",
        options: ["En la estribera trasera", "En cabina", "De pie junto al vehículo", "A 5 metros del nodriza"],
        correct: 1,
        explanation: "Mientras se espera turno: permanecer en cabina. PROHIBIDO descender si hay vehículos manipulando."
      },
      {
        question: "¿Qué está PROHIBIDO hacer si hay vehículos manipulando en la zona de descarga?",
        options: ["Activar la compactación", "Descender del vehículo", "Comunicarse con el conductor/a", "Permanecer en cabina"],
        correct: 1,
        explanation: "PROHIBIDO descender si hay vehículos manipulando."
      },
      {
        question: "¿A qué distancia aproximada del nodriza se debe alinear el vehículo para la descarga?",
        options: ["1 metro", "~2 metros", "5 metros", "10 metros"],
        correct: 1,
        explanation: "Se debe guiar al conductor/a para alinear el vehículo a aproximadamente 2 metros del nodriza."
      },
      {
        question: "¿Qué debe verificar el operario/a respecto a las estriberas del nodriza antes de la descarga?",
        options: ["Que estén desplegadas", "Que estén replegadas", "Que estén en posición intermedia", "No es necesario verificarlas"],
        correct: 1,
        explanation: "Asegurarse de que las estriberas del nodriza estén replegadas."
      },
      {
        question: "Si el nodriza tiene placa de descarga, ¿qué se debe hacer ANTES de subir la placa?",
        options: ["Recoger las estriberas", "Asegurarse de que las estriberas estén desplegadas", "Bajar la placa desde los mandos", "Guiar al conductor/a para el encuadre final"],
        correct: 1,
        explanation: "Si el nodriza tiene placa de descarga: asegurarse de que las estriberas estén desplegadas antes de subir la placa."
      },
      {
        question: "¿Desde dónde se baja la placa de descarga del nodriza?",
        options: ["Desde la cabina del conductor/a", "Desde el cuadro de mandos del vehículo recolector", "Desde los mandos del lateral trasero del nodriza", "Desde los mandos del lateral delantero del nodriza"],
        correct: 2,
        explanation: "Bajar la placa desde mandos del lateral trasero del nodriza."
      },
      {
        question: "¿Qué se debe hacer con las estriberas del nodriza UNA VEZ desplegada la placa de descarga?",
        options: ["Dejarlas desplegadas", "Recogerlas", "Retirarlas completamente", "No es necesario tocarlas"],
        correct: 1,
        explanation: "Recoger las estriberas una vez desplegada la placa."
      },
      {
        question: "¿Quién guía al conductor/a para el encuadre final con el nodriza?",
        options: ["El conductor/a del nodriza", "El Coordinador/a", "El operario/a de limpieza", "Se hace automáticamente"],
        correct: 2,
        explanation: "El operario/a guía al conductor/a para el encuadre final."
      },
      {
        question: "¿Qué se debe hacer tras la descarga con los residuos caídos al suelo?",
        options: ["Dejarlos para el operario de playas", "Recogerlos con tablillas y depositarlos en la tolva del nodriza", "Barrerlos con una escoba", "Comunicarlo al Coordinador/a"],
        correct: 1,
        explanation: "Tras la descarga: recoger con tablillas los residuos caídos al suelo y depositarlos en la tolva del nodriza."
      },
      {
        question: "¿Quién es responsable de la maniobra de compactado del nodriza?",
        options: ["El operario/a de limpieza del vehículo recolector", "El Coordinador/a", "El conductor/a del nodriza", "Cualquier operario presente"],
        correct: 2,
        explanation: "La maniobra de compactado del nodriza es responsabilidad de su conductor/a — el operario/a NO debe manipular esos mandos."
      },
      {
        question: "¿Qué debe hacer el operario/a del vehículo recolector respecto a los mandos de compactado del nodriza?",
        options: ["Puede usarlos si el conductor del nodriza se lo pide", "NO debe manipular esos mandos", "Solo puede usarlos en caso de emergencia", "Puede usarlos si ha sido autorizado"],
        correct: 1,
        explanation: "El operario/a NO debe manipular los mandos de compactado del nodriza."
      },
      {
        question: "¿Qué se debe hacer al terminar la descarga en el nodriza?",
        options: ["Quedarse en la estribera del nodriza", "Subirse correctamente a la cabina y continuar la tarea", "Esperar instrucciones del conductor del nodriza", "Ir directamente al Centro Ambiental"],
        correct: 1,
        explanation: "Al terminar: subirse correctamente a la cabina y continuar la tarea."
      },
      {
        question: "¿A quién debe informar el operario/a del desarrollo de la jornada?",
        options: ["Al conductor/a", "Al Coordinador/a", "Al operario de playas", "Al jefe de flota"],
        correct: 1,
        explanation: "Informar al Coordinador/a del desarrollo de la jornada y las incidencias."
      },
      {
        question: "¿Cuándo se considera que el desarrollo de la jornada es completo y satisfactorio?",
        options: ["Solo si se alcanzan los objetivos", "Solo si se sigue el método", "Solo si se alcanzan los objetivos Y se sigue el método", "Cuando el Coordinador/a lo indique"],
        correct: 2,
        explanation: "El desarrollo es completo y satisfactorio solo si se alcanzan los objetivos y se sigue el método."
      },
      {
        question: "¿Cuántos objetivos tiene el servicio de recogida de papeleras en playas?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "El servicio tiene 3 objetivos: retirar residuos de tamaño grande y medio, depositar bolsas de residuos en la tolva del vehículo recolector y realizar tareas de señalización durante el posicionamiento para descarga."
      },
      {
        question: "¿Cuál de los siguientes es un objetivo del servicio de recogida de papeleras en playas?",
        options: ["Barrer toda la arena de la playa", "Retirar residuos de tamaño grande y medio de la zona de playa asignada", "Limpiar los contenedores de carga trasera", "Recoger animales muertos en la playa"],
        correct: 1,
        explanation: "Uno de los 3 objetivos es retirar residuos de tamaño grande y medio de la zona de playa asignada."
      },
      {
        question: "¿Cuál de estas herramientas NO forma parte del equipo de recogida de papeleras en playas?",
        options: ["Vehículo recolector con tolva", "Bolsas nuevas", "Escoba jardinera", "Cuadro de mandos de compactación"],
        correct: 2,
        explanation: "Las herramientas son: vehículo recolector con tolva, bolsas nuevas, casco de protección y cuadro de mandos de compactación. La escoba jardinera no está en este servicio."
      },
      {
        question: "¿Qué tipo de vehículo se utiliza en la recogida de papeleras en playas?",
        options: ["Vehículo auxiliar ligero", "Recolector compactador de cabina ampliada", "Vehículo recolector de tracción integral con tolva de mediana capacidad", "Camión multibasculante"],
        correct: 2,
        explanation: "Se utiliza un vehículo recolector de tracción integral con tolva de mediana capacidad."
      },
      {
        question: "¿Qué EPI es obligatorio llevar puesto al subir o bajar de la estribera trasera?",
        options: ["Guantes de protección", "Gafas de seguridad", "Casco de protección", "Arnés de seguridad"],
        correct: 2,
        explanation: "Se requiere casco de protección puesto al subirse a la estribera trasera."
      },
      {
        question: "¿Qué se debe hacer con las bolsas de las papeleras que NO están fuera del recipiente?",
        options: ["Esperar a que otro operario las saque", "Retirarlas de los recipientes, anudarlas y reponer con bolsas nuevas", "Solo reponer bolsas nuevas sin retirar las viejas", "Dejarlas para el operario de limpieza de playas"],
        correct: 1,
        explanation: "Retirar las bolsas de los recipientes (si no estuviesen fuera), anudarlas y reponer con bolsas nuevas."
      },
      {
        question: "¿Qué función cumple el cuadro de mandos en el servicio de recogida de papeleras en playas?",
        options: ["Controlar la velocidad del vehículo", "Activar el sistema de compactación de la tolva", "Manejar la placa de descarga del nodriza", "Controlar las luces del vehículo"],
        correct: 1,
        explanation: "El cuadro de mandos se usa para activar el sistema de compactación para prensar y empujar residuos al fondo."
      },
      {
        question: "¿Qué diferencia hay entre la descarga de papeleras de playas y el barrido con vehículo auxiliar respecto al destino de los residuos?",
        options: ["Ambos descargan en el Centro Ambiental", "Papeleras de playas descarga en nodrizas; vehículo auxiliar en cajas de transferencia o nodrizas", "Papeleras de playas descarga en la playa", "No hay diferencia, ambos van al mismo sitio"],
        correct: 1,
        explanation: "La descarga de papeleras de playas NO se realiza en el Centro Ambiental sino en nodrizas o cajas de gran volumen."
      },
      {
        question: "¿Qué se debe hacer al terminar la descarga en el nodriza?",
        options: ["Esperar instrucciones del conductor/a del nodriza", "Recoger residuos caídos con tablillas y depositarlos en la tolva del nodriza", "Volver al vehículo directamente", "Comunicar al Coordinador/a la descarga completada"],
        correct: 1,
        explanation: "Tras la descarga: recoger con tablillas los residuos caídos al suelo y depositarlos en la tolva del nodriza."
      },
      {
        question: "¿Qué secuencia es correcta para la operación con placa de descarga del nodriza?",
        options: ["Recoger estriberas → subir placa → bajar placa → desplegar estriberas", "Desplegar estriberas → subir placa → bajar placa desde mandos laterales traseros → recoger estriberas", "Subir placa → desplegar estriberas → bajar placa → recoger estriberas", "Desplegar estriberas → bajar placa → subir placa → recoger estriberas"],
        correct: 1,
        explanation: "Secuencia correcta: (a) estriberas desplegadas antes de subir la placa, (b) bajar la placa desde mandos del lateral trasero del nodriza, (c) recoger estriberas una vez desplegada la placa."
      },
      {
        question: "¿Qué está prohibido hacer durante la espera de turno en la zona de transferencia?",
        options: ["Permanecer en cabina", "Descender si hay vehículos manipulando", "Comunicarse con el conductor/a", "Verificar el estado de la tolva"],
        correct: 1,
        explanation: "PROHIBIDO descender si hay vehículos manipulando mientras se espera turno."
      },
      {
        question: "¿Qué herramienta se usa para recoger los residuos caídos al suelo tras la descarga?",
        options: ["Escoba", "Tablillas", "Chapulina", "Espuerta"],
        correct: 1,
        explanation: "Se recogen con tablillas los residuos caídos al suelo y se depositan en la tolva del nodriza."
      },
      {
        question: "¿Cuántas fases tiene el método de trabajo de recogida de papeleras en playas?",
        options: ["3", "4", "5", "6"],
        correct: 2,
        explanation: "El método tiene 5 fases: Traslado, Retirada de residuos, Compactación, Ayuda durante el vaciado y Comunicación al finalizar."
      },
      {
        question: "¿En qué fase se activa el sistema de compactación desde el cuadro de mandos?",
        options: ["Fase 1 — Traslado a la zona de trabajo", "Fase 2 — Retirada de residuos y bolsas", "Fase 3 — Compactación de residuos en la tolva", "Fase 4 — Ayuda durante el vaciado"],
        correct: 2,
        explanation: "La compactación se activa en la Fase 3 desde el cuadro de mandos para prensar y empujar residuos al fondo."
      },
      {
        question: "¿En qué fase se realiza la descarga en nodrizas o cajas de gran volumen?",
        options: ["Fase 2 — Retirada de residuos", "Fase 3 — Compactación", "Fase 4 — Ayuda durante el vaciado de la tolva en zona de transferencia", "Fase 5 — Comunicación al finalizar"],
        correct: 2,
        explanation: "La descarga en nodrizas o cajas de gran volumen se realiza en la Fase 4."
      }
    ]
  },
  {
    id: 11,
    number: "11",
    title: "Servicios de Recogida",
    description: "Resumen de todos los servicios de recogida que presta Limasam, incluyendo recogida orgánica de carga trasera, carga manual, vehículos auxiliares, podas, muebles y RAEE, industrias, voluminosos, nodrizas, animales muertos y lavado de contenedores.",
    tools: ["Tablillas", "Bieldos", "Escobas jardineras", "Palas", "Cubos de brigada", "Espuertas", "Bolsas", "Eslingas o cables de acero", "Mando a distancia", "Cadenas de acero"],
    services: [
      { name: "Recogida Orgánica de Carga Trasera", team: "1 conductor/a + 2 operarios/as", vehicles: "Recolectores compactadores carga trasera de 7, 12 o 24 m³", keyPoints: ["Desplazamiento del contenedor ENTRE LOS DOS operarios/as", "Vaciado completo del contenedor", "Limpieza de restos a granel en el alrededor", "Posicionar con la boca hacia la acera", "Dejar la tapa cerrada", "Dejar los frenos accionados"] },
      { name: "Recogida de Carga Manual", team: "1 conductor/a + 2 operarios/as", vehicles: "Recolectores compactadores carga trasera 7/12/24 m³; en polígonos también GEESINK", keyPoints: ["Habitual en Centro Histórico, polígonos industriales y zonas con residuos en el suelo", "En polígonos: palas, bieldos, escobas jardineras y cubos de brigada", "Mismos puntos de verificación que carga trasera"] },
      { name: "Recogida Manual con Vehículo Auxiliar", team: "2 operarios/as (uno autorizado para conducir)", vehicles: "1 vehículo auxiliar + camión nodriza o caja abierta", keyPoints: ["Se presta principalmente en zona Centro Histórico y zonas con contenedores soterrados", "Desplazamientos por zonas peatonales con precauciones", "NO arrojar residuos con la prensa del nodriza en funcionamiento"] },
      { name: "Apoyo a la Recogida de Carga Lateral", team: "1 operario/a autorizado para conducir", vehicles: "1 vehículo auxiliar + camión nodriza o caja 10/18 m³", keyPoints: ["Retirar residuos en el alrededor de contenedores de carga lateral o islas soterradas", "Preferentemente antes del paso del camión de recogida", "Sin desplazamientos innecesarios a los puntos de vertido"] },
      { name: "Recogida de Podas", team: "1 conductor/a + 2 operarios/as", vehicles: "Recolector compactador carga trasera 12 o 24 m³; o industrial (si hay cajas)", keyPoints: ["Herramientas: 1 par tablillas, 1 espuerta, 2 bieldos, 1 escoba jardinera, cajas de 5 m³", "Retirar pilas de residuos de podas dispuestas en la vía pública", "Los operarios llevan y utilizan los EPIs asignados"] },
      { name: "Recogida de Muebles y RAEE", team: "1 conductor/a + 1 operario/a", vehicles: "Vehículo caja abierta con plataforma elevadora de 16 m³ / Recolector compactador 12/23/24 m³", keyPoints: ["IMPORTANTE: muebles y RAEE deben ir en camiones DISTINTOS — no se pueden mezclar", "Transportarlos al centro ambiental o punto de transferencia autorizado"] },
      { name: "Recogida de Industrias", team: "1 conductor/a + 2 operarios/as", vehicles: "Vehículo recolector compactador industrial de 21 m³", keyPoints: ["Herramientas: Tablillas, bieldos, escoba jardinera, cadenas de acero (puente grúa), palas, cubos", "Recoger cajas metálicas de 5 m³ y los residuos de sus alrededores"] },
      { name: "Recogida de Voluminosos, Hospitales y Grandes Centros Comerciales", team: "1 conductor/a", vehicles: "1 vehículo multibasculante + cajas de 10/14/16/18 m³ o autocompactadores", keyPoints: ["El vehículo empieza con una caja vacía (excepto autocompactadores — sale sin caja)", "Conectar freno de mano, toma de fuerza, estabilizar y abrir pestillos antes de recoger la caja", "El vehículo debe estar cuadrado en línea perfecta con la caja o autocompactador"] },
      { name: "Vehículo de Transferencia (Nodriza)", team: "1 conductor/a", vehicles: "1 vehículo recolector compactador de carga trasera o de industrias", keyPoints: ["Proporciona punto de transferencia móvil para vehículos auxiliares, brigadas, papeleras de playa y barredoras", "La manipulación de la prensa la realiza el conductor/a del nodriza, NO los operarios que acuden a vaciar", "Antes de accionar el prensado: comprobar que no hay ningún operario arrojando residuos"] },
      { name: "Recogida de Animales Muertos", team: "1 conductor/a + 1 operario/a", vehicles: "1 camión caja abierta con brazo articulado", keyPoints: ["PREVIO: certificado veterinario que acredite la muerte del animal", "EPIs especiales: mascarillas, guantes de goma, monos", "El animal es asegurado con eslingas/cable de acero antes de su elevación a la caja"] },
      { name: "Lavado de Contenedores de Carga Trasera", team: "1 conductor/a + 2 operarios/as", vehicles: "1 vehículo de lavado de cubos y contenedores de carga trasera", keyPoints: ["Desplazamiento del contenedor entre los dos operarios/as", "Lavado completo del contenedor"] }
    ],
    phases: [
      {
        title: "Recogida Orgánica de Carga Trasera",
        items: [
          "Equipo: 1 conductor/a + 2 operarios/as de recogida.",
          "Vehículos: Recolectores compactadores carga trasera de 7, 12 o 24 m³.",
          "Desplazamiento del contenedor (no cubos) ENTRE LOS DOS operarios/as y ubicación en zona de seguridad.",
          "Vaciado completo del contenedor. Limpieza de restos a granel en el alrededor si fuera necesario.",
          "Una vez vaciado: posicionarlo con la boca hacia la acera para facilitar el depósito de residuos por los usuarios.",
          "Dejar la tapa del contenedor cerrada (salvo órdenes contrarias del mando).",
          "Dejar los frenos accionados para evitar desplazamiento accidental.",
          "En algunos lugares se necesitan pases especiales, mandos a distancia o llaves (Hospital Civil, PCR u otros)."
        ]
      },
      {
        title: "Recogida de Carga Manual",
        items: [
          "Equipo: 1 conductor/a + 2 operarios/as de recogida.",
          "Vehículos: Recolectores compactadores carga trasera 7/12/24 m³; en polígonos también GEESINK.",
          "Habitual en Centro Histórico, polígonos industriales y zonas con residuos en el suelo.",
          "Herramientas en polígonos: palas, bieldos, escobas jardineras y cubos de brigada.",
          "Mismos puntos de verificación que carga trasera: desplazamiento del contenedor entre los dos operarios, vaciado completo, limpieza de restos, posicionar con boca hacia la acera, tapa cerrada, frenos accionados."
        ]
      },
      {
        title: "Recogida Manual con Vehículo Auxiliar",
        items: [
          "Equipo: 2 operarios/as de recogida (uno autorizado para conducir el vehículo auxiliar).",
          "Vehículos: 1 vehículo auxiliar + camión nodriza o caja abierta para transferencia de residuos.",
          "Se presta principalmente en la zona Centro Histórico y zonas con contenedores soterrados.",
          "Desplazamientos por zonas peatonales con todas las precauciones necesarias.",
          "Recogida del tipo de residuo adecuado al horario establecido.",
          "Vaciado en la zona de vertido indicada por el Coordinador/a. NO arrojar residuos con la prensa del nodriza en funcionamiento."
        ]
      },
      {
        title: "Apoyo a la Recogida de Carga Lateral con Vehículo Auxiliar",
        items: [
          "Equipo: 1 operario/a de recogida autorizado para conducir el vehículo auxiliar.",
          "Vehículos: 1 vehículo auxiliar + camión nodriza o caja 10/18 m³.",
          "Retirar/recoger residuos en el alrededor de contenedores de carga lateral o islas soterradas que puedan impedir su vaciado.",
          "Preferentemente antes del paso del camión de recogida.",
          "Los elementos que fuerzan las tapas para dejarlas abiertas son retirados.",
          "El servicio no tiene desplazamientos innecesarios a los puntos de vertido."
        ]
      },
      {
        title: "Recogida de Podas",
        items: [
          "Equipo: 1 conductor/a + 2 operarios/as de recogida.",
          "Vehículos: Recolector compactador carga trasera 12 o 24 m³; o industrial (si hay cajas en el recorrido — único válido).",
          "Herramientas: 1 par tablillas, 1 espuerta, 2 bieldos, 1 escoba jardinera, cajas de 5 m³.",
          "Retirar hacia la tolva del vehículo las pilas de residuos de podas dispuestas en la vía pública por los ciudadanos.",
          "Los operarios/as llevan y utilizan las herramientas y los EPIs asignados a este servicio de forma correcta."
        ]
      },
      {
        title: "Recogida de Muebles y RAEE",
        items: [
          "Equipo: 1 conductor/a + 1 operario/a de recogida.",
          "Vehículos: Vehículo caja abierta con plataforma elevadora de 16 m³ / Recolector compactador 12/23/24 m³.",
          "IMPORTANTE: muebles y RAEE deben ir en camiones DISTINTOS — no se pueden mezclar.",
          "Retirar muebles/enseres y aparatos eléctricos/electrónicos (RAEE) de la vía pública y transportarlos al centro ambiental o punto de transferencia autorizado."
        ]
      },
      {
        title: "Recogida de Industrias",
        items: [
          "Equipo: 1 conductor/a + 2 operarios/as.",
          "Vehículos: Vehículo recolector compactador industrial de 21 m³.",
          "Herramientas: Tablillas, bieldos, escoba jardinera, cadenas de acero (puente grúa del camión), palas, cubos de brigada/espuertas.",
          "Recoger cajas metálicas de 5 m³ y los residuos de sus alrededores u otras zonas asignadas.",
          "Las cajas han sido vaciadas en su totalidad. Los restos de los alrededores han sido retirados y la zona ha quedado limpia."
        ]
      },
      {
        title: "Recogida de Voluminosos, Hospitales y Grandes Centros Comerciales",
        items: [
          "Equipo: 1 conductor/a.",
          "Vehículos: 1 vehículo multibasculante + cajas de 10/14/16/18 m³ o autocompactadores.",
          "Herramientas: Mando a distancia para elevación/bajada de equipos soterrados.",
          "El vehículo empieza con una caja vacía para ir cambiando las cajas a vaciar (excepto autocompactadores — sale sin caja).",
          "El vehículo debe estar cuadrado en línea perfecta con la caja o autocompactador.",
          "Conectar freno de mano, toma de fuerza, estabilizar el vehículo y abrir pestillos de seguridad antes de recoger la caja.",
          "Llevar el carro a posición tope y elevar el brazo justo debajo del acople para el gancho. Quitar el freno de mano, avanzar lentamente hasta enganchar y subir el brazo hidráulico para posicionar correctamente.",
          "Cerrar pestillos de seguridad, recoger estabilizadores y quitar la toma de fuerza."
        ]
      },
      {
        title: "Vehículo de Transferencia (Nodriza)",
        items: [
          "Equipo: 1 conductor/a.",
          "Proporciona un punto de transferencia móvil para vehículos auxiliares, brigadas, recogida de papeleras de playa y barredoras.",
          "La manipulación de la prensa la realiza el conductor/a del nodriza, NO los operarios/as que acuden a vaciar.",
          "El conductor/a se posiciona en la zona de seguridad mientras la prensa está funcionando.",
          "Antes de accionar el prensado: comprobar que no hay ningún operario/a arrojando residuos.",
          "En caso de vehículo vaciando: comprobar que la prensa no golpeará accidentalmente al vehículo que vacía.",
          "Una vez vaciados los vehículos, no deben quedar restos esparcidos en la zona de vaciado."
        ]
      },
      {
        title: "Recogida de Animales Muertos",
        items: [
          "Equipo: 1 conductor/a + 1 operario/a de recogida.",
          "Vehículos: 1 camión caja abierta con brazo articulado.",
          "Herramientas: Eslingas o cables de acero para sujetar el animal; EPIs especiales: mascarillas, guantes de goma, monos.",
          "PREVIO: certificado veterinario que acredite la muerte del animal (puede obviarse si el animal está en vía pública y lo requieren las autoridades municipales).",
          "Solo se monta cuando hay notificaciones para animales grandes (normalmente equinos).",
          "El animal es asegurado con eslingas/cable de acero antes de su elevación a la caja.",
          "El animal se transporta y deposita en el Centro Ambiental en la zona autorizada, según indicaciones de los responsables."
        ]
      },
      {
        title: "Lavado de Contenedores de Carga Trasera",
        items: [
          "Equipo: 1 conductor/a + 2 operarios/as de recogida.",
          "Vehículos: 1 vehículo de lavado de cubos y contenedores de carga trasera.",
          "Herramientas: Tablillas, cubos, contenedores, gancho de extracción de bolsas.",
          "Desplazamiento del contenedor entre los dos operarios/as.",
          "Lavado completo del contenedor."
        ]
      }
    ],
    objectives: [
      "Conocer todos los servicios de recogida que presta Limasam.",
      "Identificar el equipo, vehículos y herramientas de cada servicio.",
      "Aplicar los puntos de verificación correctos en cada tipo de recogida."
    ],
    questions: [
      {
        question: "¿Cuántos operarios/as de recogida forman el equipo de recogida orgánica de carga trasera?",
        options: ["1", "2", "3", "4"],
        correct: 1,
        explanation: "El equipo es: 1 conductor/a + 2 operarios/as de recogida."
      },
      {
        question: "¿Qué capacidades tienen los recolectores compactadores de carga trasera?",
        options: ["5, 10 o 15 m³", "7, 12 o 24 m³", "8, 16 o 20 m³", "10, 15 o 30 m³"],
        correct: 1,
        explanation: "Los vehículos son recolectores compactadores carga trasera de 7, 12 o 24 m³."
      },
      {
        question: "¿Quién debe desplazar el contenedor durante la recogida de carga trasera?",
        options: ["El conductor/a", "Un solo operario/a", "ENTRE LOS DOS operarios/as", "Cualquier persona disponible"],
        correct: 2,
        explanation: "El desplazamiento del contenedor se realiza ENTRE LOS DOS operarios/as."
      },
      {
        question: "¿Se desplazan los cubos o los contenedores en la recogida de carga trasera?",
        options: ["Los cubos", "Los contenedores (no cubos)", "Ambos indistintamente", "Solo los contenedores de más de 1000 litros"],
        correct: 1,
        explanation: "Se desplaza el contenedor (no cubos) entre los dos operarios/as."
      },
      {
        question: "¿Hacia dónde se debe posicionar la boca del contenedor una vez vaciado?",
        options: ["Hacia la calzada", "Hacia la acera", "Paralelo al bordillo", "En cualquier dirección"],
        correct: 1,
        explanation: "Se posiciona con la boca hacia la acera para facilitar el depósito de residuos por los usuarios."
      },
      {
        question: "¿Cómo se debe dejar la tapa del contenedor tras el vaciado?",
        options: ["Abierta para ventilación", "Cerrada (salvo órdenes contrarias del mando)", "Entreabierta", "Retirada"],
        correct: 1,
        explanation: "Dejar la tapa del contenedor cerrada (salvo órdenes contrarias del mando)."
      },
      {
        question: "¿Qué se debe hacer con los frenos del contenedor tras el vaciado?",
        options: ["Soltarlos", "Dejarlos accionados para evitar desplazamiento accidental", "Solo accionarlos en pendientes", "No importa su estado"],
        correct: 1,
        explanation: "Se deben dejar los frenos accionados para evitar desplazamiento accidental."
      },
      {
        question: "¿Qué se necesita en algunos lugares como Hospital Civil o PCR para acceder a los contenedores?",
        options: ["Autorización verbal", "Pases especiales, mandos a distancia o llaves", "Comunicar al Coordinador/a", "Nada especial"],
        correct: 1,
        explanation: "En algunos lugares se necesitan pases especiales, mandos a distancia o llaves (Hospital Civil, PCR u otros)."
      },
      {
        question: "¿Qué vehículo adicional se utiliza en polígonos industriales para la recogida de carga manual?",
        options: ["Nodriza", "GEESINK", "Vehículo auxiliar", "Multibasculante"],
        correct: 1,
        explanation: "En polígonos industriales se utiliza también el vehículo GEESINK."
      },
      {
        question: "¿Qué herramientas se usan en polígonos para la recogida de carga manual?",
        options: ["Escoba, recogedor y bolsa", "Palas, bieldos, escobas jardineras y cubos de brigada", "Solo tablillas y espuerta", "Chapulina y salabar"],
        correct: 1,
        explanation: "En polígonos: palas, bieldos, escobas jardineras y cubos de brigada."
      },
      {
        question: "¿Cuántos operarios/as forman el equipo de recogida manual con vehículo auxiliar?",
        options: ["1 conductor/a + 1 operario/a", "1 conductor/a + 2 operarios/as", "2 operarios/as (uno autorizado para conducir)", "Solo 1 operario/a"],
        correct: 2,
        explanation: "El equipo: 2 operarios/as de recogida (uno autorizado para conducir el vehículo auxiliar)."
      },
      {
        question: "¿En qué zonas se presta principalmente la recogida manual con vehículo auxiliar?",
        options: ["Polígonos industriales", "Playas", "Zona Centro Histórico y zonas con contenedores soterrados", "Hospitales"],
        correct: 2,
        explanation: "Se presta principalmente en la zona Centro Histórico y zonas con contenedores soterrados."
      },
      {
        question: "¿Qué está prohibido hacer durante el vaciado en el nodriza con la recogida manual con vehículo auxiliar?",
        options: ["Bajar del vehículo", "Arrojar residuos con la prensa del nodriza en funcionamiento", "Hablar con el conductor", "Usar el teléfono móvil"],
        correct: 1,
        explanation: "NO arrojar residuos con la prensa del nodriza en funcionamiento."
      },
      {
        question: "¿Cuántos operarios/as forman el equipo de apoyo a la recogida de carga lateral?",
        options: ["1 conductor/a + 2 operarios/as", "1 operario/a autorizado para conducir", "2 operarios/as", "1 conductor/a + 1 operario/a"],
        correct: 1,
        explanation: "El equipo: 1 operario/a de recogida autorizado para conducir el vehículo auxiliar."
      },
      {
        question: "¿Qué tipo de contenedores atiende el apoyo a la recogida de carga lateral?",
        options: ["Contenedores de carga trasera", "Contenedores de carga lateral o islas soterradas", "Contenedores soterrados exclusivamente", "Contenedores de playa"],
        correct: 1,
        explanation: "Retirar residuos en el alrededor de contenedores de carga lateral o islas soterradas."
      },
      {
        question: "¿Cuándo se debe realizar preferentemente el apoyo a la recogida de carga lateral?",
        options: ["Después del paso del camión", "Antes del paso del camión de recogida", "Durante el paso del camión", "No importa el momento"],
        correct: 1,
        explanation: "Preferentemente antes del paso del camión de recogida."
      },
      {
        question: "¿Qué se hace con los elementos que fuerzan las tapas de los contenedores para dejarlas abiertas?",
        options: ["Se dejan para el siguiente servicio", "Se retiran", "Se comunican al Coordinador/a", "Se dejan como advertencia"],
        correct: 1,
        explanation: "Los elementos que fuerzan las tapas para dejarlas abiertas son retirados."
      },
      {
        question: "¿Qué herramientas se usan en la recogida de podas?",
        options: ["Escoba, recogedor y bolsa", "1 par tablillas, 1 espuerta, 2 bieldos, 1 escoba jardinera, cajas de 5 m³", "Palas, bieldos y cubos", "Solo tablillas y espuerta"],
        correct: 1,
        explanation: "Herramientas: 1 par tablillas, 1 espuerta, 2 bieldos, 1 escoba jardinera, cajas de 5 m³."
      },
      {
        question: "¿Qué vehículos se usan en la recogida de podas?",
        options: ["Solo recolector compactador 7 m³", "Recolector compactador carga trasera 12 o 24 m³; o industrial si hay cajas", "Vehículo auxiliar exclusivamente", "Nodriza"],
        correct: 1,
        explanation: "Recolector compactador carga trasera 12 o 24 m³; o industrial (si hay cajas en el recorrido — único válido)."
      },
      {
        question: "¿Qué tipo de residuos se recogen en la recogida de podas?",
        options: ["Residuos orgánicos de mercados", "Pilas de residuos de podas dispuestas en la vía pública por ciudadanos", "Residuos de contenedores soterrados", "Residuos industriales"],
        correct: 1,
        explanation: "Retirar hacia la tolva las pilas de residuos de podas dispuestas en la vía pública por los ciudadanos."
      },
      {
        question: "¿Cuántos operarios/as forman el equipo de recogida de muebles y RAEE?",
        options: ["1 conductor/a + 2 operarios/as", "1 conductor/a + 1 operario/a", "2 conductor/as", "Solo 1 operario/a"],
        correct: 1,
        explanation: "El equipo: 1 conductor/a + 1 operario/a de recogida."
      },
      {
        question: "¿Qué vehículos se usan para la recogida de muebles y RAEE?",
        options: ["Solo vehículo auxiliar", "Vehículo caja abierta con plataforma elevadora de 16 m³ / Recolector compactador 12/23/24 m³", "Solo nodriza", "Solo camión multibasculante"],
        correct: 1,
        explanation: "Vehículo caja abierta con plataforma elevadora de 16 m³ / Recolector compactador 12/23/24 m³."
      },
      {
        question: "¿Se pueden mezclar muebles y RAEE en el mismo camión?",
        options: ["Sí, si caben juntos", "No, deben ir en camiones DISTINTOS", "Solo si son del mismo tipo", "Solo con autorización del Coordinador/a"],
        correct: 1,
        explanation: "IMPORTANTE: muebles y RAEE deben ir en camiones DISTINTOS — no se pueden mezclar."
      },
      {
        question: "¿A dónde se transportan los muebles y RAEE recogidos?",
        options: ["Al centro de trabajo", "Al contenedor más cercano", "Al centro ambiental o punto de transferencia autorizado", "A la caja de transferencia"],
        correct: 2,
        explanation: "Transportarlos al centro ambiental o punto de transferencia autorizado."
      },
      {
        question: "¿Qué vehículo se usa en la recogida de industrias?",
        options: ["Recolector compactador 12 m³", "Vehículo recolector compactador industrial de 21 m³", "Vehículo auxiliar", "Nodriza"],
        correct: 1,
        explanation: "Vehículo recolector compactador industrial de 21 m³."
      },
      {
        question: "¿Qué herramientas se usan en la recogida de industrias para el puente grúa del camión?",
        options: ["Eslingas de nylon", "Cadenas de acero", "Cuerdas", "Cables de fibra"],
        correct: 1,
        explanation: "Se utilizan cadenas de acero (puente grúa del camión)."
      },
      {
        question: "¿Qué se recoge en la recogida de industrias?",
        options: ["Residuos orgánicos", "Cajas metálicas de 5 m³ y los residuos de sus alrededores", "Muebles y enseres", "Residuos de podas"],
        correct: 1,
        explanation: "Recoger cajas metálicas de 5 m³ y los residuos de sus alrededores u otras zonas asignadas."
      },
      {
        question: "¿Cuántos conductores/as forman el equipo de recogida de voluminosos, hospitales y grandes centros comerciales?",
        options: ["2", "1", "3", "1 conductor/a + 1 operario/a"],
        correct: 1,
        explanation: "El equipo está formado solo por 1 conductor/a."
      },
      {
        question: "¿Qué vehículos se usan para la recogida de voluminosos, hospitales y grandes centros comerciales?",
        options: ["Recolector compactador 12 m³", "Vehículo multibasculante + cajas de 10/14/16/18 m³ o autocompactadores", "Vehículo auxiliar", "Nodriza"],
        correct: 1,
        explanation: "Vehículo multibasculante + cajas de 10/14/16/18 m³ o autocompactadores."
      },
      {
        question: "¿Qué herramienta usa el conductor/a en la recogida de voluminosos para equipos soterrados?",
        options: ["Llave de acceso", "Mando a distancia para elevación/bajada", "Palanca manual", "Cadena de acero"],
        correct: 1,
        explanation: "Mando a distancia para elevación/bajada de equipos soterrados."
      },
      {
        question: "¿Con qué caja sale el vehículo multibasculante para la recogida de voluminosos?",
        options: ["Con una caja llena", "Con una caja vacía (autocompactadores: sin caja)", "Con dos cajas", "Con la caja de 18 m³ siempre"],
        correct: 1,
        explanation: "El vehículo empieza con una caja vacía para ir cambiando las cajas a vaciar (excepto autocompactadores — sale sin caja)."
      },
      {
        question: "¿Qué se debe hacer ANTES de recoger la caja en la recogida de voluminosos?",
        options: ["Solo conectar el freno de mano", "Conectar freno de mano, toma de fuerza, estabilizar el vehículo y abrir pestillos de seguridad", "Solo estabilizar el vehículo", "Solo abrir los pestillos"],
        correct: 1,
        explanation: "Conectar freno de mano, toma de fuerza, estabilizar el vehículo y abrir pestillos de seguridad antes de recoger la caja."
      },
      {
        question: "¿Cómo debe estar el vehículo respecto a la caja o autocompactador en la recogida de voluminosos?",
        options: ["En ángulo de 45°", "Cuadrado en línea perfecta", "A 3 metros de distancia", "En diagonal"],
        correct: 1,
        explanation: "El vehículo debe estar cuadrado en línea perfecta con la caja o autocompactador."
      },
      {
        question: "¿Qué se hace después de enganchar la caja en la recogida de voluminosos?",
        options: ["Se quita el freno de mano y se avanza", "Se cierran pestillos de seguridad, se recogen estabilizadores y se quita la toma de fuerza", "Se conecta la toma de fuerza", "Se avisa al Coordinador/a"],
        correct: 1,
        explanation: "Cerrar pestillos de seguridad, recoger estabilizadores y quitar la toma de fuerza."
      },
      {
        question: "¿Quién manipula la prensa del vehículo nodriza?",
        options: ["Los operarios que acuden a vaciar", "El conductor/a del nodriza", "El Coordinador/a", "Cualquier operario autorizado"],
        correct: 1,
        explanation: "La manipulación de la prensa la realiza el conductor/a del nodriza, NO los operarios/as que acuden a vaciar."
      },
      {
        question: "¿Qué debe comprobar el conductor/a del nodriza antes de accionar el prensado?",
        options: ["Que la tolva esté llena", "Que no hay ningún operario/a arrojando residuos", "Que el motor esté encendido", "Que las estriberas estén desplegadas"],
        correct: 1,
        explanation: "Antes de accionar el prensado: comprobar que no hay ningún operario/a arrojando residuos."
      },
      {
        question: "¿Dónde se posiciona el conductor/a del nodriza mientras la prensa está funcionando?",
        options: ["Fuera del vehículo", "En la zona de seguridad", "En la estribera trasera", "En la cabina del vehículo que vacía"],
        correct: 1,
        explanation: "El conductor/a se posiciona en la zona de seguridad mientras la prensa está funcionando."
      },
      {
        question: "¿Qué se debe comprobar en caso de vehículo vaciando en el nodriza?",
        options: ["Que la tolva esté vacía", "Que la prensa no golpeará accidentalmente al vehículo que vacía", "Que el motor esté apagado", "Que las luces estén encendidas"],
        correct: 1,
        explanation: "En caso de vehículo vaciando: comprobar que la prensa no golpeará accidentalmente al vehículo que vacía."
      },
      {
        question: "¿Qué vehículo se usa para la recogida de animales muertos?",
        options: ["Recolector compactador", "Camión caja abierta con brazo articulado", "Vehículo auxiliar", "Nodriza"],
        correct: 1,
        explanation: "1 camión caja abierta con brazo articulado."
      },
      {
        question: "¿Qué documento se requiere previamente para la recogida de animales muertos?",
        options: ["Autorización municipal", "Certificado veterinario que acredite la muerte del animal", "Permiso del propietario", "Informe policial"],
        correct: 1,
        explanation: "Certificado veterinario que acredite la muerte del animal (puede obviarse si el animal está en vía pública y lo requieren las autoridades municipales)."
      },
      {
        question: "¿Cuándo se puede obviar el certificado veterinario para la recogida de animales muertos?",
        options: ["Nunca, es obligatorio siempre", "Si el animal está en vía pública y lo requieren las autoridades municipales", "Si el animal es pequeño", "Si el Coordinador/a lo autoriza"],
        correct: 1,
        explanation: "Puede obviarse si el animal está en vía pública y lo requieren las autoridades municipales."
      },
      {
        question: "¿Qué EPIs especiales se usan en la recogida de animales muertos?",
        options: ["Casco y chaleco reflectante", "Mascarillas, guantes de goma y monos", "Gafas de protección y botas", "Arnés de seguridad"],
        correct: 1,
        explanation: "EPIs especiales: mascarillas, guantes de goma, monos."
      },
      {
        question: "¿Con qué se asegura el animal antes de su elevación a la caja?",
        options: ["Cuerdas de nylon", "Eslingas o cables de acero", "Cadenas de plástico", "Cintas de amarre"],
        correct: 1,
        explanation: "El animal es asegurado con eslingas/cable de acero antes de su elevación a la caja."
      },
      {
        question: "¿Para qué tipo de animales se monta específicamente el servicio de recogida de animales muertos?",
        options: ["Animales pequeños", "Animales grandes (normalmente equinos)", "Solo perros", "Solo gatos"],
        correct: 1,
        explanation: "Solo se monta cuando hay notificaciones para animales grandes (normalmente equinos)."
      },
      {
        question: "¿Cuántos operarios/as forman el equipo de lavado de contenedores de carga trasera?",
        options: ["1 conductor/a + 1 operario/a", "1 conductor/a + 2 operarios/as", "2 conductor/as", "Solo 1 operario/a"],
        correct: 1,
        explanation: "El equipo: 1 conductor/a + 2 operarios/as de recogida."
      },
      {
        question: "¿Qué herramientas se usan en el lavado de contenedores de carga trasera?",
        options: ["Escoba, cepillo y detergente", "Tablillas, cubos, contenedores, gancho de extracción de bolsas", "Manguera y sopladora", "Solo tablillas y bolsas"],
        correct: 1,
        explanation: "Herramientas: Tablillas, cubos, contenedores, gancho de extracción de bolsas."
      },
      {
        question: "¿Quién proporciona el punto de transferencia móvil para vehículos auxiliares, brigadas, papeleras de playa y barredoras?",
        options: ["El centro ambiental", "El vehículo de transferencia (nodriza)", "Las cajas de transferencia fijas", "El Coordinador/a"],
        correct: 1,
        explanation: "El vehículo de transferencia (nodriza) proporciona un punto de transferencia móvil."
      },
      {
        question: "¿Qué equipo tiene la recogida de carga manual?",
        options: ["1 conductor/a + 1 operario/a", "1 conductor/a + 2 operarios/as", "2 operarios/as", "Solo 1 conductor/a"],
        correct: 1,
        explanation: "El equipo: 1 conductor/a + 2 operarios/as de recogida."
      },
      {
        question: "¿Dónde se deposita el animal muerto recogido?",
        options: ["En el contenedor orgánico", "En el Centro Ambiental en la zona autorizada", "En la caja de transferencia", "En el vertedero municipal"],
        correct: 1,
        explanation: "El animal se transporta y deposita en el Centro Ambiental en la zona autorizada, según indicaciones de los responsables."
      }
    ]
  }
];

/* ===========================
   PHASE QUESTIONS — Generated from TOPICS data
   =========================== */

function generatePhaseQuestions() {
  const questions = [];

  // Primero, identificar fases únicas (nombre solo aparece en un tema)
  const phaseNameToTopics = {};
  TOPICS.forEach(topic => {
    topic.phases.forEach(phase => {
      const cleanName = phase.title.replace(/^Fase \d+[A-Z]? — /, '');
      if (!phaseNameToTopics[cleanName]) phaseNameToTopics[cleanName] = [];
      phaseNameToTopics[cleanName].push(topic.id);
    });
  });
  const uniquePhases = Object.entries(phaseNameToTopics).filter(([, topicIds]) => topicIds.length === 1);

  TOPICS.forEach(topic => {
    const numPhases = topic.phases.length;

    // Tipo 1: ¿Cuántas fases tiene este tema?
    const wrongCounts = [3, 4, 5, 6, 7].filter(n => n !== numPhases).slice(0, 3);
    const countOptions = [`${numPhases} fases`, ...wrongCounts.map(n => `${n} fases`)].sort(() => Math.random() - 0.5);
    const correctCountIdx = countOptions.indexOf(`${numPhases} fases`);
    questions.push({
      question: `¿Cuántas fases tiene "${topic.title}"?`,
      options: countOptions,
      correct: correctCountIdx,
      explanation: `"${topic.title}" tiene ${numPhases} fases.`,
      topicId: topic.id,
      topicTitle: topic.title,
      type: 'phase'
    });

    // Tipo 2: ¿Cómo se llama la Fase N?
    topic.phases.forEach((phase, idx) => {
      const phaseNum = phase.title.match(/Fase (\d+[A-Z]?)/)?.[1] || `${idx + 1}`;
      const otherTitles = topic.phases
        .filter((_, i) => i !== idx)
        .map(p => p.title.replace(/^Fase \d+[A-Z]? — /, ''));

      const allOtherPhases = TOPICS.flatMap(t =>
        t.phases.filter(p => p.title !== phase.title).map(p => p.title.replace(/^Fase \d+[A-Z]? — /, ''))
      );
      const distractors = [...new Set(allOtherPhases)].filter(t => !otherTitles.includes(t));

      const shuffledDistractors = distractors.sort(() => Math.random() - 0.5).slice(0, 3);
      const options = [phase.title.replace(/^Fase \d+[A-Z]? — /, ''), ...shuffledDistractors].sort(() => Math.random() - 0.5);
      const correctIdx = options.indexOf(phase.title.replace(/^Fase \d+[A-Z]? — /, ''));

      questions.push({
        question: `¿Cómo se llama la Fase ${phaseNum} de "${topic.title}"?`,
        options,
        correct: correctIdx,
        explanation: `La Fase ${phaseNum} de "${topic.title}" es: "${phase.title.replace(/^Fase \d+[A-Z]? — /, '')}".`,
        topicId: topic.id,
        topicTitle: topic.title,
        type: 'phase'
      });
    });
  });

  // Tipo 3: ¿A qué tema pertenece esta fase? — SOLO fases únicas
  uniquePhases.forEach(([cleanName, topicIds]) => {
    const topicId = topicIds[0];
    const topic = TOPICS.find(t => t.id === topicId);
    const otherTopics = TOPICS.filter(t => t.id !== topicId);
    const distractorTopics = otherTopics.sort(() => Math.random() - 0.5).slice(0, 3);
    const options = [topic.title, ...distractorTopics.map(t => t.title)].sort(() => Math.random() - 0.5);
    const correctIdx = options.indexOf(topic.title);

    questions.push({
      question: `¿A qué tipo de trabajo pertenece la fase "${cleanName}"?`,
      options,
      correct: correctIdx,
      explanation: `"${cleanName}" es una fase exclusiva de "${topic.title}".`,
      topicId: topic.id,
      topicTitle: topic.title,
      type: 'phase'
    });
  });

  // Tipo 4: Orden de fases — ¿qué va antes?
  TOPICS.forEach(topic => {
    for (let i = 0; i < topic.phases.length - 1; i++) {
      const phaseA = topic.phases[i];
      const phaseB = topic.phases[i + 1];
      const titleA = phaseA.title.replace(/^Fase \d+[A-Z]? — /, '');
      const titleB = phaseB.title.replace(/^Fase \d+[A-Z]? — /, '');

      questions.push({
        question: `En "${topic.title}", ¿qué fase va primero?`,
        options: [titleA, titleB],
        correct: 0,
        explanation: `En "${topic.title}", "${titleA}" va antes que "${titleB}".`,
        topicId: topic.id,
        topicTitle: topic.title,
        type: 'phase'
      });
    }
  });

  // Tipo 5: ¿Qué se hace en la Fase N? (basado en el primer item)
  TOPICS.forEach(topic => {
    topic.phases.forEach((phase, idx) => {
      if (phase.items.length > 0) {
        const phaseNum = phase.title.match(/Fase (\d+[A-Z]?)/)?.[1] || `${idx + 1}`;
        const firstItem = phase.items[0];
        const otherItems = TOPICS.flatMap(t =>
          t.phases.flatMap(p => p.items).filter(item => item !== firstItem)
        );
        const distractors = [...new Set(otherItems)].sort(() => Math.random() - 0.5).slice(0, 3);
        const options = [firstItem, ...distractors].sort(() => Math.random() - 0.5);
        const correctIdx = options.indexOf(firstItem);

        questions.push({
          question: `¿Qué se hace en la Fase ${phaseNum} de "${topic.title}"?`,
          options,
          correct: correctIdx,
          explanation: `En la Fase ${phaseNum} de "${topic.title}": ${firstItem}`,
          topicId: topic.id,
          topicTitle: topic.title,
          type: 'phase'
        });
      }
    });
  });

  return questions;
}

const PHASE_QUESTIONS = generatePhaseQuestions();
