// Datos simulados de mentorías con tareas
const mentorias = [
  {
    titulo: "Matemáticas - Álgebra Básica",
    descripcion: "Aprende a resolver ecuaciones, factorización y fundamentos del álgebra.",
    mentor: "Laura González",
    tareas: [
      "Resolver 10 ecuaciones lineales con una incógnita.",
      "Realizar un mapa conceptual sobre las propiedades de los números reales.",
      "Ejercicios de factorización (mínimo 5).",
      "Investigar qué es una ecuación cuadrática.",
      "Preparar una exposición sobre sistemas de ecuaciones.",
      "Resolver 5 problemas aplicados con álgebra.",
      "Estudiar los productos notables.",
      "Realizar quiz en línea de repaso de álgebra."
    ]
  },
  {
    titulo: "Inglés Conversacional",
    descripcion: "Mejora tu pronunciación y fluidez en conversaciones cotidianas.",
    mentor: "Carlos Ramírez",
    tareas: [
      "Grabar un audio presentándote durante 1 minuto.",
      "Aprender 20 nuevas palabras de uso cotidiano.",
      "Ver un video en inglés y escribir un resumen corto.",
      "Practicar con un compañero 5 preguntas comunes.",
      "Leer un artículo corto en inglés y traducirlo.",
      "Hacer un juego de roles (diálogo simulado).",
      "Practicar pronunciación con una app (15 min diarios).",
      "Escuchar un podcast en inglés y anotar vocabulario nuevo."
    ]
  },
  {
    titulo: "Ciencias Naturales - Biología",
    descripcion: "Repasaremos los sistemas del cuerpo humano y la célula.",
    mentor: "Mariana López",
    tareas: [
      "Dibujar la célula animal y vegetal con sus partes.",
      "Investigar sobre la función del ADN.",
      "Hacer una maqueta del sistema digestivo.",
      "Responder guía sobre los sistemas del cuerpo humano.",
      "Identificar diferencias entre tejidos animales y vegetales.",
      "Ver video sobre la fotosíntesis y hacer resumen.",
      "Resolver cuestionario del libro (pág. 45 a 50).",
      "Exposición sobre el sistema respiratorio."
    ]
  },
  {
    titulo: "Programación en JavaScript",
    descripcion: "Introducción a la lógica de programación y desarrollo web con JS.",
    mentor: "Andrés Torres",
    tareas: [
      "Instalar VS Code y configurar entorno de trabajo.",
      "Crear un archivo .js y mostrar 'Hola Mundo'.",
      "Hacer un programa que sume dos números.",
      "Investigar qué es una función y crear tres ejemplos.",
      "Desarrollar una calculadora básica con botones.",
      "Leer sobre arrays y practicar con ejemplos.",
      "Crear un pequeño juego de adivinar el número.",
      "Repasar estructuras condicionales y bucles."
    ]
  },
  {
    titulo: "Historia Universal",
    descripcion: "Analizaremos los hechos más importantes que marcaron la historia.",
    mentor: "Sofía Martínez",
    tareas: [
      "Hacer línea del tiempo de la Edad Media.",
      "Leer y resumir la Revolución Francesa.",
      "Realizar mapa conceptual sobre la Segunda Guerra Mundial.",
      "Comparar culturas antiguas: Egipto vs Roma.",
      "Hacer exposición sobre la Independencia de América.",
      "Ver documental sobre la Guerra Fría y opinar.",
      "Resolver guía de evaluación del siglo XIX.",
      "Escribir reflexión sobre avances tecnológicos del siglo XX."
    ]
  },
];

// --- ELEMENTOS DEL DOM ---
const container = document.getElementById("cards-container");
const searchInput = document.getElementById("searchInput");
const filterMentor = document.getElementById("filterMentor");

// Modal de detalles
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalImg = document.getElementById("modal-img");
const modalDescription = document.getElementById("modal-description");
const modalMentor = document.getElementById("modal-mentor");
const closeModal = document.querySelector(".close");

// --- NUEVO MODAL DE TAREAS ---
const tareasModal = document.createElement("div");
tareasModal.classList.add("modal");
tareasModal.innerHTML = `
  <div class="modal-content">
    <span class="close-tareas">&times;</span>
    <h2 id="tareas-title"></h2>
    <ul id="tareas-list"></ul>
  </div>
`;
document.body.appendChild(tareasModal);
const closeTareasModal = tareasModal.querySelector(".close-tareas");
const tareasTitle = document.getElementById("tareas-title");
const tareasList = document.getElementById("tareas-list");

// --- GENERAR OPCIONES DE MENTORES ---
function cargarMentores() {
  const mentores = [...new Set(mentorias.map(m => m.mentor))];
  mentores.forEach(mentor => {
    const option = document.createElement("option");
    option.value = mentor;
    option.textContent = mentor;
    filterMentor.appendChild(option);
  });
}

// --- GENERAR CARDS ---
function generarCards(lista) {
  container.innerHTML = "";
  lista.forEach((mentoria, index) => {
    const card = document.createElement("div");
    card.classList.add("card-pendiente");

    card.innerHTML = `
      <div class="card-content">
        <h3>${mentoria.titulo}</h3>
        <p><strong>Mentor:</strong> ${mentoria.mentor}</p>
        <p>${mentoria.descripcion}</p>
        <button onclick="abrirModal(${index})">Ver Detalles</button>
        <button onclick="verTareas(${index})" class="btn-tareas">Ver Tareas</button>
      </div>
    `;

    container.appendChild(card);
  });
}

// --- FILTRAR MENTORÍAS ---
function filtrar() {
  const texto = searchInput.value.toLowerCase();
  const mentorSeleccionado = filterMentor.value;

  const resultado = mentorias.filter(m =>
    (m.titulo.toLowerCase().includes(texto) || m.descripcion.toLowerCase().includes(texto)) &&
    (mentorSeleccionado === "all" || m.mentor === mentorSeleccionado)
  );

  generarCards(resultado);
}

// --- MODAL DE DETALLES ---
function abrirModal(index) {
  const m = mentorias[index];
  modalTitle.textContent = m.titulo;
  modalImg.src = m.imagen;
  modalDescription.textContent = m.descripcion;
  modalMentor.textContent = m.mentor;
  modal.style.display = "block";
}

// --- MODAL DE TAREAS ---
function verTareas(index) {
  const m = mentorias[index];
  tareasTitle.textContent = `Tareas de ${m.titulo}`;
  tareasList.innerHTML = "";
  m.tareas.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    tareasList.appendChild(li);
  });
  tareasModal.style.display = "block";
}

// --- CIERRE DE MODALES ---
closeModal.onclick = () => modal.style.display = "none";
closeTareasModal.onclick = () => tareasModal.style.display = "none";
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
  if (e.target === tareasModal) tareasModal.style.display = "none";
};

// --- EVENTOS ---
searchInput.addEventListener("input", filtrar);
filterMentor.addEventListener("change", filtrar);

// --- INICIALIZAR ---
document.addEventListener("DOMContentLoaded", () => {
  cargarMentores();
  generarCards(mentorias);
});
