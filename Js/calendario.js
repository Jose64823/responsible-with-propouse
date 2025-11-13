// Obtener las tareas de las mentorías del archivo principal
function obtenerTareasDeMentorias() {
  // Esta función simula la obtención de datos del archivo main.js
  // En un entorno real, esto se conectaría con el otro módulo
  const mentorias = [
    {
      titulo: "Matemáticas - Álgebra Básica",
      mentor: "Laura González",
      tareas: [
        {
          id: 1,
          titulo: "Resolver 10 ecuaciones lineales con una incógnita",
          descripcion: "Resolver 10 ecuaciones lineales con una incógnita y entregar en formato PDF.",
          fechaEntrega: "2025-02-15",
          estado: "pendiente",
          urgencia: "normal"
        },
        {
          id: 2,
          titulo: "Mapa conceptual propiedades números reales",
          descripcion: "Realizar un mapa conceptual sobre las propiedades de los números reales.",
          fechaEntrega: "2025-02-18",
          estado: "pendiente",
          urgencia: "normal"
        },
        {
          id: 3,
          titulo: "Ejercicios de factorización",
          descripcion: "Realizar ejercicios de factorización (mínimo 5) con procedimiento completo.",
          fechaEntrega: "2025-02-22",
          estado: "pendiente",
          urgencia: "urgente"
        },
        {
          id: 4,
          titulo: "Investigación ecuación cuadrática",
          descripcion: "Investigar qué es una ecuación cuadrática y sus aplicaciones.",
          fechaEntrega: "2025-02-25",
          estado: "pendiente",
          urgencia: "normal"
        },
        {
          id: 5,
          titulo: "Exposición sistemas de ecuaciones",
          descripcion: "Preparar una exposición sobre sistemas de ecuaciones.",
          fechaEntrega: "2025-03-01",
          estado: "pendiente",
          urgencia: "proxima"
        },
        {
          id: 6,
          titulo: "Problemas aplicados con álgebra",
          descripcion: "Resolver 5 problemas aplicados con álgebra de la vida real.",
          fechaEntrega: "2025-03-05",
          estado: "pendiente",
          urgencia: "normal"
        },
        {
          id: 7,
          titulo: "Estudiar productos notables",
          descripcion: "Estudiar los productos notables y realizar ejercicios prácticos.",
          fechaEntrega: "2025-03-08",
          estado: "pendiente",
          urgencia: "normal"
        },
        {
          id: 8,
          titulo: "Quiz repaso álgebra",
          descripcion: "Realizar quiz en línea de repaso de álgebra en la plataforma del colegio.",
          fechaEntrega: "2025-03-12",
          estado: "pendiente",
          urgencia: "urgente"
        }
      ]
    },
    {
      titulo: "Inglés Conversacional",
      mentor: "Carlos Ramírez",
      tareas: [
        {
          id: 9,
          titulo: "Grabar audio de presentación",
          descripcion: "Grabar un audio presentándote durante 1 minuto en inglés con buena pronunciación.",
          fechaEntrega: "2025-02-16",
          estado: "pendiente",
          urgencia: "normal"
        },
        {
          id: 10,
          titulo: "Aprender 20 palabras nuevas",
          descripcion: "Aprender 20 nuevas palabras de uso cotidiano y crear oraciones con cada una.",
          fechaEntrega: "2025-02-19",
          estado: "pendiente",
          urgencia: "normal"
        },
        {
          id: 11,
          titulo: "Resumen de video en inglés",
          descripcion: "Ver un video en inglés y escribir un resumen corto en español.",
          fechaEntrega: "2025-02-23",
          estado: "pendiente",
          urgencia: "normal"
        },
        {
          id: 12,
          titulo: "Práctica con compañero",
          descripcion: "Practicar con un compañero 5 preguntas comunes en inglés.",
          fechaEntrega: "2025-02-26",
          estado: "pendiente",
          urgencia: "proxima"
        },
        {
          id: 13,
          titulo: "Traducción artículo",
          descripcion: "Leer un artículo corto en inglés y traducirlo al español.",
          fechaEntrega: "2025-03-02",
          estado: "pendiente",
          urgencia: "normal"
        },
        {
          id: 14,
          titulo: "Juego de roles",
          descripcion: "Hacer un juego de roles (diálogo simulado) en situación cotidiana.",
          fechaEntrega: "2025-03-06",
          estado: "pendiente",
          urgencia: "normal"
        },
        {
          id: 15,
          titulo: "Práctica pronunciación app",
          descripcion: "Practicar pronunciación con una app (15 min diarios) durante una semana.",
          fechaEntrega: "2025-03-09",
          estado: "pendiente",
          urgencia: "urgente"
        },
        {
          id: 16,
          titulo: "Vocabulario podcast",
          descripcion: "Escuchar un podcast en inglés y anotar vocabulario nuevo.",
          fechaEntrega: "2025-03-13",
          estado: "pendiente",
          urgencia: "normal"
        }
      ]
    },
    {
      titulo: "Ciencias Naturales - Biología",
      mentor: "Mariana López",
      tareas: [
        {
          id: 17,
          titulo: "Dibujar célula animal y vegetal",
          descripcion: "Dibujar la célula animal y vegetal con todas sus partes etiquetadas correctamente.",
          fechaEntrega: "2025-02-17",
          estado: "pendiente",
          urgencia: "normal"
        },
        {
          id: 18,
          titulo: "Investigación función ADN",
          descripcion: "Investigar sobre la función del ADN y su importancia en la herencia.",
          fechaEntrega: "2025-02-20",
          estado: "pendiente",
          urgencia: "normal"
        },
        {
          id: 19,
          titulo: "Maqueta sistema digestivo",
          descripcion: "Hacer una maqueta del sistema digestivo con materiales reciclados.",
          fechaEntrega: "2025-02-24",
          estado: "pendiente",
          urgencia: "urgente"
        },
        {
          id: 20,
          titulo: "Guía sistemas cuerpo humano",
          descripcion: "Responder guía sobre los sistemas del cuerpo humano.",
          fechaEntrega: "2025-02-27",
          estado: "pendiente",
          urgencia: "normal"
        },
        {
          id: 21,
          titulo: "Diferencias tejidos animales y vegetales",
          descripcion: "Identificar diferencias entre tejidos animales y vegetales.",
          fechaEntrega: "2025-03-03",
          estado: "pendiente",
          urgencia: "proxima"
        },
        {
          id: 22,
          titulo: "Resumen fotosíntesis",
          descripcion: "Ver video sobre la fotosíntesis y hacer resumen del proceso.",
          fechaEntrega: "2025-03-07",
          estado: "pendiente",
          urgencia: "normal"
        },
        {
          id: 23,
          titulo: "Cuestionario libro",
          descripcion: "Resolver cuestionario del libro (pág. 45 a 50) sobre células.",
          fechaEntrega: "2025-03-10",
          estado: "pendiente",
          urgencia: "normal"
        },
        {
          id: 24,
          titulo: "Exposición sistema respiratorio",
          descripcion: "Preparar exposición sobre el sistema respiratorio.",
          fechaEntrega: "2025-03-14",
          estado: "pendiente",
          urgencia: "urgente"
        }
      ]
    },
    {
      titulo: "Programación en JavaScript",
      mentor: "Andrés Torres",
      tareas: [
        {
          id: 25,
          titulo: "Instalar VS Code",
          descripcion: "Instalar VS Code y configurar entorno de trabajo con las extensiones recomendadas.",
          fechaEntrega: "2025-02-14",
          estado: "completada",
          urgencia: "normal"
        },
        {
          id: 26,
          titulo: "Programa Hola Mundo",
          descripcion: "Crear un archivo .js y mostrar 'Hola Mundo' en la consola.",
          fechaEntrega: "2025-02-16",
          estado: "completada",
          urgencia: "normal"
        },
        {
          id: 27,
          titulo: "Programa suma números",
          descripcion: "Hacer un programa que sume dos números ingresados por el usuario.",
          fechaEntrega: "2025-02-21",
          estado: "pendiente",
          urgencia: "normal"
        },
        {
          id: 28,
          titulo: "Investigación funciones",
          descripcion: "Investigar qué es una función y crear tres ejemplos diferentes.",
          fechaEntrega: "2025-02-25",
          estado: "pendiente",
          urgencia: "proxima"
        },
        {
          id: 29,
          titulo: "Calculadora básica",
          descripcion: "Desarrollar una calculadora básica con botones para operaciones matemáticas simples.",
          fechaEntrega: "2025-02-28",
          estado: "pendiente",
          urgencia: "urgente"
        },
        {
          id: 30,
          titulo: "Práctica con arrays",
          descripcion: "Leer sobre arrays y practicar con ejemplos de manipulación.",
          fechaEntrega: "2025-03-04",
          estado: "pendiente",
          urgencia: "normal"
        },
        {
          id: 31,
          titulo: "Juego adivinar número",
          descripcion: "Crear un pequeño juego de adivinar el número entre 1 y 10.",
          fechaEntrega: "2025-03-08",
          estado: "pendiente",
          urgencia: "normal"
        },
        {
          id: 32,
          titulo: "Repaso condicionales y bucles",
          descripcion: "Repasar estructuras condicionales y bucles con ejercicios prácticos.",
          fechaEntrega: "2025-03-12",
          estado: "pendiente",
          urgencia: "normal"
        }
      ]
    },
    {
      titulo: "Historia Universal",
      mentor: "Sofía Martínez",
      tareas: [
        {
          id: 33,
          titulo: "Línea del tiempo Edad Media",
          descripcion: "Crear una línea del tiempo detallada de los principales eventos de la Edad Media.",
          fechaEntrega: "2025-02-18",
          estado: "pendiente",
          urgencia: "normal"
        },
        {
          id: 34,
          titulo: "Resumen Revolución Francesa",
          descripcion: "Leer y resumir la Revolución Francesa destacando causas y consecuencias.",
          fechaEntrega: "2025-02-22",
          estado: "pendiente",
          urgencia: "normal"
        },
        {
          id: 35,
          titulo: "Mapa conceptual Segunda Guerra Mundial",
          descripcion: "Realizar mapa conceptual sobre la Segunda Guerra Mundial.",
          fechaEntrega: "2025-02-26",
          estado: "pendiente",
          urgencia: "urgente"
        },
        {
          id: 36,
          titulo: "Comparación Egipto vs Roma",
          descripcion: "Comparar culturas antiguas: Egipto vs Roma en aspectos sociales y culturales.",
          fechaEntrega: "2025-03-01",
          estado: "pendiente",
          urgencia: "normal"
        },
        {
          id: 37,
          titulo: "Exposición Independencia de América",
          descripcion: "Preparar exposición sobre la Independencia de América.",
          fechaEntrega: "2025-03-05",
          estado: "pendiente",
          urgencia: "proxima"
        },
        {
          id: 38,
          titulo: "Opinión Guerra Fría",
          descripcion: "Ver documental sobre la Guerra Fría y escribir opinión personal.",
          fechaEntrega: "2025-03-09",
          estado: "pendiente",
          urgencia: "normal"
        },
        {
          id: 39,
          titulo: "Guía siglo XIX",
          descripcion: "Resolver guía de evaluación del siglo XIX.",
          fechaEntrega: "2025-03-13",
          estado: "pendiente",
          urgencia: "normal"
        },
        {
          id: 40,
          titulo: "Reflexión avances tecnológicos",
          descripcion: "Escribir reflexión sobre avances tecnológicos del siglo XX.",
          fechaEntrega: "2025-03-17",
          estado: "pendiente",
          urgencia: "normal"
        }
      ]
    }
  ];

  // Convertir la estructura de mentorías a una lista plana de tareas
  const todasLasTareas = [];
  let idCounter = 1;

  mentorias.forEach(mentoria => {
    mentoria.tareas.forEach(tarea => {
      todasLasTareas.push({
        id: idCounter++,
        titulo: tarea.titulo,
        descripcion: tarea.descripcion,
        fechaEntrega: tarea.fechaEntrega,
        estado: tarea.estado || "pendiente",
        urgencia: tarea.urgencia || "normal",
        mentor: mentoria.mentor,
        mentoria: mentoria.titulo
      });
    });
  });

  return todasLasTareas;
}

// Variables globales
let fechaActual = new Date();
let mesActual = fechaActual.getMonth();
let añoActual = fechaActual.getFullYear();
let tareasCalendario = [];

// Elementos del DOM
const diasMesElement = document.getElementById('dias-mes');
const mesActualElement = document.getElementById('mes-actual');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');
const hoyBtn = document.getElementById('hoy-btn');
const listaTareasElement = document.getElementById('lista-tareas');
const modalTarea = document.getElementById('modal-tarea');
const modalTituloTarea = document.getElementById('modal-titulo-tarea');
const modalMentoria = document.getElementById('modal-mentoria');
const modalFecha = document.getElementById('modal-fecha');
const modalEstado = document.getElementById('modal-estado');
const modalDescripcion = document.getElementById('modal-descripcion');
const btnCompletar = document.getElementById('btn-completar');
const btnCerrar = document.getElementById('btn-cerrar');
const closeModal = document.querySelector('.close');

// Nombres de meses en español
const meses = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

// Días de la semana en español
const diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

// Inicializar calendario
document.addEventListener('DOMContentLoaded', () => {
  // Cargar tareas desde las mentorías
  tareasCalendario = obtenerTareasDeMentorias();
  
  generarCalendario(mesActual, añoActual);
  mostrarTareasProximas();
  
  // Event listeners
  prevMonthBtn.addEventListener('click', () => cambiarMes(-1));
  nextMonthBtn.addEventListener('click', () => cambiarMes(1));
  hoyBtn.addEventListener('click', irAHoy);
  btnCerrar.addEventListener('click', cerrarModal);
  closeModal.addEventListener('click', cerrarModal);
  btnCompletar.addEventListener('click', completarTarea);
  
  // Cerrar modal al hacer clic fuera
  window.addEventListener('click', (e) => {
    if (e.target === modalTarea) {
      cerrarModal();
    }
  });
});

// Generar calendario para un mes y año específicos
function generarCalendario(mes, año) {
  // Actualizar título del mes
  mesActualElement.textContent = `${meses[mes]} ${año}`;
  
  // Limpiar calendario
  diasMesElement.innerHTML = '';
  
  // Obtener primer día del mes y cantidad de días
  const primerDia = new Date(año, mes, 1);
  const ultimoDia = new Date(año, mes + 1, 0);
  const diasEnMes = ultimoDia.getDate();
  const primerDiaSemana = primerDia.getDay(); // 0 = Domingo, 1 = Lunes, etc.
  
  // Agregar días del mes anterior (si es necesario)
  const ultimoDiaMesAnterior = new Date(año, mes, 0).getDate();
  for (let i = primerDiaSemana - 1; i >= 0; i--) {
    const dia = document.createElement('div');
    dia.classList.add('dia', 'otro-mes');
    dia.innerHTML = `
      <div class="numero-dia">${ultimoDiaMesAnterior - i}</div>
    `;
    diasMesElement.appendChild(dia);
  }
  
  // Agregar días del mes actual
  const hoy = new Date();
  for (let i = 1; i <= diasEnMes; i++) {
    const dia = document.createElement('div');
    dia.classList.add('dia');
    
    // Verificar si es hoy
    if (i === hoy.getDate() && mes === hoy.getMonth() && año === hoy.getFullYear()) {
      dia.classList.add('hoy');
    }
    
    dia.innerHTML = `
      <div class="numero-dia">${i}</div>
    `;
    
    // Agregar tareas para este día
    const fechaStr = `${año}-${String(mes + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
    const tareasDelDia = tareasCalendario.filter(tarea => tarea.fechaEntrega === fechaStr);
    
    tareasDelDia.forEach(tarea => {
      const tareaElement = document.createElement('div');
      tareaElement.classList.add('tarea-calendario', tarea.urgencia);
      if (tarea.estado === 'completada') {
        tareaElement.classList.add('completada');
      }
      tareaElement.textContent = tarea.titulo;
      tareaElement.setAttribute('data-id', tarea.id);
      tareaElement.addEventListener('click', () => abrirModalTarea(tarea.id));
      dia.appendChild(tareaElement);
    });
    
    diasMesElement.appendChild(dia);
  }
  
  // Agregar días del mes siguiente (si es necesario)
  const totalCeldas = 42; // 6 filas de 7 días
  const celdasUsadas = primerDiaSemana + diasEnMes;
  const celdasRestantes = totalCeldas - celdasUsadas;
  
  for (let i = 1; i <= celdasRestantes; i++) {
    const dia = document.createElement('div');
    dia.classList.add('dia', 'otro-mes');
    dia.innerHTML = `
      <div class="numero-dia">${i}</div>
    `;
    diasMesElement.appendChild(dia);
  }
}

// Cambiar mes (incremento puede ser -1 o 1)
function cambiarMes(incremento) {
  mesActual += incremento;
  
  if (mesActual < 0) {
    mesActual = 11;
    añoActual--;
  } else if (mesActual > 11) {
    mesActual = 0;
    añoActual++;
  }
  
  generarCalendario(mesActual, añoActual);
  mostrarTareasProximas();
}

// Ir al mes actual
function irAHoy() {
  fechaActual = new Date();
  mesActual = fechaActual.getMonth();
  añoActual = fechaActual.getFullYear();
  generarCalendario(mesActual, añoActual);
  mostrarTareasProximas();
}

// Mostrar tareas próximas en la sección lateral
function mostrarTareasProximas() {
  listaTareasElement.innerHTML = '';
  
  // Filtrar solo tareas pendientes y ordenar por fecha
  const tareasPendientes = tareasCalendario
    .filter(tarea => tarea.estado === 'pendiente')
    .sort((a, b) => new Date(a.fechaEntrega) - new Date(b.fechaEntrega));
  
  // Mostrar solo las próximas 5 tareas
  const tareasProximas = tareasPendientes.slice(0, 5);
  
  if (tareasProximas.length === 0) {
    listaTareasElement.innerHTML = '<p class="sin-tareas">No hay tareas pendientes próximas</p>';
    return;
  }
  
  tareasProximas.forEach(tarea => {
    const tareaItem = document.createElement('div');
    tareaItem.classList.add('tarea-item', tarea.urgencia);
    
    const fecha = new Date(tarea.fechaEntrega);
    const fechaFormateada = fecha.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short'
    });
    
    tareaItem.innerHTML = `
      <div class="info-tarea-item">
        <h4>${tarea.titulo}</h4>
        <p>${tarea.mentoria}</p>
      </div>
      <div class="fecha-tarea">${fechaFormateada}</div>
    `;
    
    tareaItem.addEventListener('click', () => abrirModalTarea(tarea.id));
    listaTareasElement.appendChild(tareaItem);
  });
}

// Abrir modal con detalles de la tarea
function abrirModalTarea(id) {
  const tarea = tareasCalendario.find(t => t.id === id);
  if (!tarea) return;
  
  const fecha = new Date(tarea.fechaEntrega);
  const fechaFormateada = fecha.toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  modalTituloTarea.textContent = tarea.titulo;
  modalMentoria.textContent = tarea.mentoria;
  modalFecha.textContent = fechaFormateada;
  modalEstado.textContent = tarea.estado === 'completada' ? 'Completada' : 'Pendiente';
  modalDescripcion.textContent = tarea.descripcion;
  
  // Configurar botón de completar
  if (tarea.estado === 'completada') {
    btnCompletar.textContent = 'Marcar como Pendiente';
    btnCompletar.style.backgroundColor = 'var(--color-warning)';
  } else {
    btnCompletar.textContent = 'Marcar como Completada';
    btnCompletar.style.backgroundColor = 'var(--color-success)';
  }
  
  btnCompletar.setAttribute('data-id', tarea.id);
  modalTarea.style.display = 'block';
}

// Cerrar modal
function cerrarModal() {
  modalTarea.style.display = 'none';
}

// Cambiar estado de la tarea (completada/pendiente)
function completarTarea() {
  const id = parseInt(btnCompletar.getAttribute('data-id'));
  const tareaIndex = tareasCalendario.findIndex(t => t.id === id);
  
  if (tareaIndex !== -1) {
    tareasCalendario[tareaIndex].estado = 
      tareasCalendario[tareaIndex].estado === 'completada' ? 'pendiente' : 'completada';
    
    // Actualizar calendario y lista
    generarCalendario(mesActual, añoActual);
    mostrarTareasProximas();
    
    // Cerrar modal
    cerrarModal();
  }
}

// Función para agregar estilos de "sin tareas"
function agregarEstilosSinTareas() {
  const style = document.createElement('style');
  style.textContent = `
    .sin-tareas {
      text-align: center;
      color: var(--color-text-light);
      font-style: italic;
      padding: var(--spacing-md);
    }
  `;
  document.head.appendChild(style);
}

// Agregar estilos cuando se carga la página
document.addEventListener('DOMContentLoaded', agregarEstilosSinTareas);