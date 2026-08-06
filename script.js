const unitData = [
  {
    id: "unit1",
    title: "Unidad 1",
    topics: [
      {
        title: "Modelo de Von Neumann y arquitectura de Harvard",
        kind: "concept",
        concept: "El modelo de Von Neumann organiza la memoria y la CPU en una arquitectura unificada, mientras que Harvard separa memoria de instrucciones y datos para mejorar rendimiento.",
        definition: "La arquitectura von Neumann utiliza un único bus para instrucciones y datos; Harvard usa buses separados.",
        features: ["Procesador único", "Memoria compartida", "Ejecución secuencial", "Mayor simplicidad"],
        differences: ["Von Neumann: un bus compartido", "Harvard: buses separados", "Harvard: mayor velocidad en sistemas embebidos"],
        examples: ["Microcontroladores", "Procesadores de señales", "Computadoras modernas con pipeline"],
        images: [createSvgDataUrl("Von Neumann", "#4f8cff"), createSvgDataUrl("Harvard", "#8b5cf6")],
        questions: [
          {
            prompt: "¿Qué característica define a la arquitectura de Harvard?",
            options: ["Un mismo bus para datos e instrucciones", "Buses separados para datos e instrucciones", "Sin memoria", "Sin CPU"],
            answer: 1,
            explanation: "Harvard utiliza buses separados para aumentar el rendimiento y evitar cuellos de botella."
          },
          {
            prompt: "¿Cuál arquitectura es más simple de implementar?",
            options: ["Harvard", "Von Neumann", "Ambas igual", "Ninguna"],
            answer: 1,
            explanation: "Von Neumann es la arquitectura más simple porque comparte el bus de memoria e instrucciones."
          }
        ]
      },
      {
        title: "Sistemas operativos",
        kind: "system",
        concept: "Un sistema operativo es el software principal que administra los recursos del sistema y ofrece servicios a los programas.",
        definition: "Es el intermediario entre el usuario, el hardware y las aplicaciones.",
        features: ["Gestión de procesos", "Administración de memoria", "Manejo de archivos", "Seguridad y multitarea"],
        examples: ["Windows", "Linux", "macOS"],
        images: [createSvgDataUrl("Kernel", "#22c55e"), createSvgDataUrl("Gestión de procesos", "#06b6d4"), createSvgDataUrl("Memoria", "#f59e0b"), createSvgDataUrl("Archivos", "#ec4899")],
        questions: [
          {
            prompt: "¿Cuál es la función principal de un sistema operativo?",
            options: ["Editar videos", "Administrar recursos y servicios del sistema", "Diseñar circuitos", "Ninguna"],
            answer: 1,
            explanation: "El sistema operativo gestiona memoria, procesos, archivos y dispositivos del equipo."
          },
          {
            prompt: "¿Qué ejemplo corresponde a un sistema operativo?",
            options: ["Excel", "Linux", "Photoshop", "Word"],
            answer: 1,
            explanation: "Linux es un sistema operativo ampliamente utilizado en servidores y entornos educativos."
          }
        ]
      },
      {
        title: "Sistema de numeración y conversiones",
        kind: "number",
        concept: "Los sistemas de numeración representan cantidades con diferentes bases y reglas de agrupación.",
        definition: "Los más usados son binario, decimal, octal y hexadecimal.",
        features: ["Base 2", "Base 10", "Base 8", "Base 16"],
        examples: ["1010₂ = 10₁₀", "27₁₀ = 33₈", "2A₁₆ = 42₁₀"],
        images: [createSvgDataUrl("Binario", "#4f8cff"), createSvgDataUrl("Hexadecimal", "#ec4899"), createSvgDataUrl("Octal", "#22c55e")],
        exercises: [
          "1011₂ → 11₁₀",
          "13₁₀ → 1101₂",
          "25₈ → 21₁₀",
          "45₁₀ → 55₈",
          "1A₁₆ → 26₁₀",
          "32₁₀ → 20₁₆"
        ],
        questions: [
          {
            prompt: "¿Cuál es la base del sistema binario?",
            options: ["8", "10", "2", "16"],
            answer: 2,
            explanation: "El sistema binario sólo usa dos símbolos: 0 y 1."
          },
          {
            prompt: "¿Qué símbolo no se usa en hexadecimal?",
            options: ["A", "B", "G", "F"],
            answer: 2,
            explanation: "Hexadecimal usa dígitos del 0 al 9 y letras A-F."
          }
        ]
      },
      {
        title: "Aritmética binaria",
        kind: "binaryMath",
        concept: "La aritmética binaria realiza operaciones con números representados en base 2.",
        definition: "Se aplica suma, resta, multiplicación y división siguiendo reglas binarias.",
        features: ["Suma con acarreo", "Resta con préstamo", "Multiplicación repetida", "División por desplazamiento"],
        examples: ["101 + 011 = 1000", "110 - 011 = 011", "101 × 11 = 1111"],
        questions: [
          {
            prompt: "¿Qué ocurre en una suma binaria cuando el resultado supera 1?",
            options: ["Se ignora", "Se genera acarreo", "Se elimina", "Se convierte a decimal"],
            answer: 1,
            explanation: "En binario, al sumar 1 + 1 se produce un acarreo equivalente a 2 en base 10."
          },
          {
            prompt: "¿Cuál es la base usada en la aritmética binaria?",
            options: ["Base 8", "Base 10", "Base 2", "Base 16"],
            answer: 2,
            explanation: "La aritmética binaria trabaja con números en base 2."
          }
        ]
      },
      {
        title: "Álgebra de Boole",
        kind: "boolean",
        concept: "El álgebra de Boole estudia operaciones lógicas con valores verdadero/falso.",
        definition: "Se usa en circuitos eléctricos, bases de datos y programación lógica.",
        features: ["Variables booleanas", "AND", "OR", "NOT"],
        examples: ["True AND False = False", "True OR False = True", "NOT True = False"],
        questions: [
          {
            prompt: "¿Qué resultado tiene True AND False?",
            options: ["True", "False", "Indefinido", "Ninguno"],
            answer: 1,
            explanation: "AND solo devuelve verdadero si ambas condiciones son verdaderas."
          },
          {
            prompt: "¿Qué operación invierte un valor booleano?",
            options: ["AND", "OR", "NOT", "XOR"],
            answer: 2,
            explanation: "NOT invierte el valor de verdad de una condición."
          }
        ]
      }
    ]
  },
  {
    id: "unit2",
    title: "Unidad 2",
    topics: [
      {
        title: "Algoritmos y sus características",
        kind: "concept",
        concept: "Un algoritmo es una secuencia ordenada de pasos para resolver un problema.",
        definition: "Permite describir la solución de forma precisa y verificable.",
        features: ["Precisión", "Finitud", "Entrada y salida", "Eficiencia"],
        examples: ["Calcular el promedio", "Ordenar números", "Encontrar el mayor valor"],
        questions: [
          {
            prompt: "¿Qué es un algoritmo?",
            options: ["Una herramienta visual", "Una receta paso a paso", "Un lenguaje de programación", "Un sistema operativo"],
            answer: 1,
            explanation: "Un algoritmo es una serie ordenada de pasos para resolver un problema."
          },
          {
            prompt: "¿Cuál característica no corresponde a un algoritmo?",
            options: ["Precisión", "Finitud", "Ambigüedad", "Entrada/Salida"],
            answer: 2,
            explanation: "Un algoritmo debe ser claro y no ambiguo."
          }
        ]
      },
      {
        title: "Diagramas de flujo como herramienta de modelación de algoritmos",
        kind: "flow",
        concept: "Los diagramas de flujo representan gráficamente la lógica de un algoritmo.",
        definition: "Usan símbolos estandarizados para mostrar entradas, procesos y decisiones.",
        features: ["Inicio/fin", "Procesos", "Decisiones", "Flujos"],
        examples: ["Proceso de compra", "Validación de contraseña", "Evaluación de notas"],
        images: [createSvgDataUrl("Diagrama de flujo", "#4f8cff")],
        questions: [
          {
            prompt: "¿Qué representa un rombo en un diagrama de flujo?",
            options: ["Inicio", "Proceso", "Decisión", "Fin"],
            answer: 2,
            explanation: "El rombo representa una decisión o condición dentro del algoritmo."
          },
          {
            prompt: "¿Cuál es la función principal del diagrama de flujo?",
            options: ["Compilar código", "Modelar algoritmos", "Almacenar datos", "Diseñar la interfaz"],
            answer: 1,
            explanation: "Los diagramas de flujo sirven para visualizar la lógica de un algoritmo."
          }
        ]
      },
      {
        title: "Pseudocódigo: una herramienta de palabras útil",
        kind: "pseudocode",
        concept: "El pseudocódigo es una forma sencilla de escribir algoritmos usando palabras y estructuras básicas.",
        definition: "Sirve para planificar antes de escribir código en un lenguaje real.",
        examples: [
          {
            title: "Ejemplo 1: sumar dos números",
            code: "Inicio\nLeer a, b\nSuma ← a + b\nEscribir Suma\nFin",
            explanation: "Se leen datos, se realiza la suma y se muestra el resultado."
          },
          {
            title: "Ejemplo 2: par o impar",
            code: "Inicio\nLeer n\nSi n mod 2 = 0 Entonces\n  Escribir 'Par'\nSino\n  Escribir 'Impar'\nFinSi\nFin",
            explanation: "Se evalúa el módulo del número para decidir si es par o impar."
          },
          {
            title: "Ejemplo 3: mayor entre dos valores",
            code: "Inicio\nLeer a, b\nSi a > b Entonces\n  Escribir a\nSino\n  Escribir b\nFinSi\nFin",
            explanation: "Se compara ambos números y se muestra el mayor."
          }
        ],
        questions: [
          {
            prompt: "¿Para qué sirve el pseudocódigo?",
            options: ["Mostrar gráficos", "Planificar algoritmos antes de programar", "Ejecutar software", "Configurar hardware"],
            answer: 1,
            explanation: "El pseudocódigo permite describir la solución de forma clara antes de traducirla a lenguaje de programación."
          },
          {
            prompt: "¿Cuál estructura se usa para tomar decisiones?",
            options: ["Repetir", "Si entonces", "Asignar", "Inicio"],
            answer: 1,
            explanation: "La estructura condicional se representa con Si/Entonces/Sino."
          }
        ]
      },
      {
        title: "Modelado de problemas",
        kind: "problemModel",
        concept: "El modelado de problemas consiste en transformar una situación real en una representación lógica y resoluble.",
        definition: "Se analiza la entrada, el proceso y la salida para encontrar la solución.",
        features: ["Análisis", "Entrada", "Proceso", "Salida"],
        examples: ["Calcular IVA", "Inventario de productos", "Sistema de turnos"],
        questions: [
          {
            prompt: "¿Qué se identifica en la fase de entrada?",
            options: ["El resultado final", "Los datos necesarios", "Los errores", "La interfaz"],
            answer: 1,
            explanation: "La entrada corresponde a los datos que recibe el problema para resolverlo."
          },
          {
            prompt: "¿Qué representa el proceso?",
            options: ["La información obtenida", "Las operaciones que transforman los datos", "La interfaz del usuario", "El hardware"],
            answer: 1,
            explanation: "El proceso es la parte lógica donde se aplican operaciones para obtener una solución."
          }
        ]
      }
    ]
  },
  {
    id: "unit3",
    title: "Unidad 3",
    topics: [
      {
        title: "Lenguajes y paradigmas de programación",
        kind: "paradigms",
        concept: "Los lenguajes de programación permiten expresar algoritmos de distinto modo según el paradigma.",
        definition: "Los paradigmas organizan las reglas de diseño y ejecución del código.",
        features: ["Imperativo", "Orientado a objetos", "Funcional"],
        examples: ["Python", "Java", "Haskell"],
        questions: [
          {
            prompt: "¿Qué es un paradigma de programación?",
            options: ["Una biblioteca de gráficos", "Un estilo de estructurar programas", "Un tipo de hardware", "Un sistema operativo"],
            answer: 1,
            explanation: "Un paradigma define una forma particular de pensar y escribir programas."
          },
          {
            prompt: "¿Cuál paradigma se enfoca en objetos y clases?",
            options: ["Funcional", "Imperativo", "Orientado a objetos", "Lógico"],
            answer: 2,
            explanation: "El paradigma orientado a objetos organiza el código en clases y objetos."
          }
        ]
      },
      {
        title: "Introducción a la programación en Python",
        kind: "pythonIntro",
        concept: "Python es un lenguaje accesible, potente y de sintaxis clara para enseñar programación.",
        definition: "Se utiliza en automatización, ciencia de datos, inteligencia artificial y desarrollo web.",
        features: ["Sintaxis legible", "Tipado dinámico", "Gran comunidad", "Multiplataforma"],
        examples: [
          {
            title: "Ejemplo 1: saludo",
            code: "nombre = 'Andrea'\nprint('Hola,', nombre)",
            explanation: "Se declara una variable y se muestra un mensaje en pantalla."
          },
          {
            title: "Ejemplo 2: suma",
            code: "a = 5\nb = 3\nprint(a + b)",
            explanation: "Se suman dos valores y se imprime el resultado."
          },
          {
            title: "Ejemplo 3: entrada",
            code: "nombre = input('Ingresa tu nombre: ')\nprint('Bienvenida', nombre)",
            explanation: "Se solicita información al usuario y se muestra un saludo."
          }
        ],
        questions: [
          {
            prompt: "¿Qué función permite recibir datos desde teclado en Python?",
            options: ["print()", "input()", "len()", "type()"],
            answer: 1,
            explanation: "input() permite capturar información ingresada por el usuario."
          },
          {
            prompt: "¿Qué se usa para mostrar resultados en pantalla?",
            options: ["read()", "input()", "print()", "write()"],
            answer: 2,
            explanation: "print() muestra información en la consola."
          }
        ]
      },
      {
        title: "Operadores algebraicos, relacionales y lógicos",
        kind: "operators",
        concept: "Los operadores permiten manipular datos y comparar expresiones en Python.",
        definition: "Los principales grupos son algebraicos, relacionales y lógicos.",
        features: ["Algebraicos: +,-,*,/,%,**", "Relacionales: ==, !=, >, <", "Lógicos: and, or, not"],
        examples: [
          "print(8 + 2)",
          "print(5 >= 3)",
          "print(True and False)"
        ],
        questions: [
          {
            prompt: "¿Qué operador compara si dos valores son iguales?",
            options: ["=", "==", ":=", "!="],
            answer: 1,
            explanation: "El operador == devuelve True si ambos valores son iguales."
          },
          {
            prompt: "¿Qué operador lógico combina condiciones y requiere que ambas sean verdaderas?",
            options: ["or", "not", "and", "%"],
            answer: 2,
            explanation: "and devuelve True solo si ambas condiciones son verdaderas."
          }
        ]
      },
      {
        title: "Estructuras de control condicionales",
        kind: "conditionals",
        concept: "Las estructuras condicionales permiten ejecutar instrucciones según una condición.",
        definition: "Se usan if, elif y else para tomar decisiones.",
        examples: [
          {
            title: "Ejemplo 1: comparación",
            code: "edad = 18\nif edad >= 18:\n    print('Mayor de edad')",
            explanation: "Si la condición se cumple, se ejecuta la instrucción."
          },
          {
            title: "Ejemplo 2: varias opciones",
            code: "nota = 8\nif nota >= 9:\n    print('Excelente')\nelif nota >= 7:\n    print('Muy bien')\nelse:\n    print('Debes mejorar')",
            explanation: "elif permite evaluar varias condiciones de forma ordenada."
          }
        ],
        questions: [
          {
            prompt: "¿Qué estructura se usa para ejecutar instrucciones cuando una condición es verdadera?",
            options: ["for", "while", "if", "print"],
            answer: 2,
            explanation: "if permite ejecutar código si la condición se cumple."
          },
          {
            prompt: "¿Qué instrucción se usa cuando ninguna condición anterior se cumple?",
            options: ["elif", "else", "return", "input"],
            answer: 1,
            explanation: "else se ejecuta cuando no se cumplen las condiciones previas."
          }
        ]
      },
      {
        title: "Estructuras de control repetitivas",
        kind: "loops",
        concept: "Las estructuras repetitivas ejecutan instrucciones varias veces para ahorrar código.",
        definition: "Se usan for y while, además de contadores y acumuladores.",
        examples: [
          {
            title: "Ejemplo 1: ciclo for",
            code: "for i in range(3):\n    print(i)",
            explanation: "Se repite el bloque tres veces."
          },
          {
            title: "Ejemplo 2: contador",
            code: "contador = 0\nwhile contador < 3:\n    print(contador)\n    contador += 1",
            explanation: "El contador controla cuántas veces se repite el ciclo."
          }
        ],
        questions: [
          {
            prompt: "¿Qué estructura repite instrucciones un número determinado de veces?",
            options: ["if", "for", "else", "input"],
            answer: 1,
            explanation: "for se usa cuando se conoce cuántas veces se requiere repetir."
          },
          {
            prompt: "¿Qué se usa para acumular valores durante un ciclo?",
            options: ["contador", "acumulador", "booleano", "lista"],
            answer: 1,
            explanation: "El acumulador suma progresivamente valores dentro de un ciclo."
          }
        ]
      }
    ]
  }
];

const state = {
  currentPanel: "inicio",
  answers: {},
  scores: { unit1: 0, unit2: 0, unit3: 0 },
  progress: { unit1: 0, unit2: 0, unit3: 0 }
};

const navButtons = document.querySelectorAll(".nav-btn");
const panels = document.querySelectorAll(".panel");
const customizerPanel = document.getElementById("customizerPanel");
const customizeBtn = document.getElementById("customizeBtn");
const closeCustomizerBtn = document.getElementById("closeCustomizer");
const themeSelect = document.getElementById("themeSelect");
const backgroundSelect = document.getElementById("backgroundSelect");
const logoInput = document.getElementById("logoInput");
const logoPreview = document.getElementById("logoPreview");
const backgroundBtn = document.getElementById("backgroundBtn");
const themeSearch = document.getElementById("themeSearch");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
const scrollTopBtn = document.getElementById("scrollTopBtn");
const scrollToUnitsBtn = document.getElementById("scrollToUnits");
const logoPreviewWrap = document.getElementById("logoPreviewWrap");

function createSvgDataUrl(label, color) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"> <rect width="100%" height="100%" rx="32" fill="${color}" /> <circle cx="300" cy="180" r="110" fill="rgba(255,255,255,0.18)" /> <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Segoe UI, Arial" font-size="28" fill="white">${label}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function renderUnits() {
  renderUnitContent(0, document.getElementById("unit1Content"));
  renderUnitContent(1, document.getElementById("unit2Content"));
  renderUnitContent(2, document.getElementById("unit3Content"));
}

function renderUnitContent(index, container) {
  const unit = unitData[index];
  container.innerHTML = "";
  unit.topics.forEach((topic) => {
    const topicCard = document.createElement("article");
    topicCard.className = "topic-card";
    topicCard.innerHTML = buildTopicMarkup(topic);
    container.appendChild(topicCard);
  });

  const unitKey = `unit${index + 1}`;
  updateUnitProgress(unitKey);
  bindQuizEvents(unitKey);
}

function buildTopicMarkup(topic) {
  let content = `<h3>${topic.title}</h3>`;
  if (topic.concept) content += `<p><strong>Concepto:</strong> ${topic.concept}</p>`;
  if (topic.definition) content += `<p><strong>Definición:</strong> ${topic.definition}</p>`;
  if (topic.features?.length) {
    content += `<ul>${topic.features.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  }
  if (topic.differences?.length) {
    content += `<p><strong>Diferencias:</strong></p><ul>${topic.differences.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  }
  if (topic.examples?.length) {
    content += `<p><strong>Ejemplos:</strong></p><ul>${topic.examples.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  }
  if (topic.exercises?.length) {
    content += `<p><strong>Ejercicios:</strong></p><ul>${topic.exercises.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  }
  if (topic.images?.length) {
    content += `<div class="image-row">${topic.images.map((src) => `<div class="image-card"><img src="${src}" alt="${topic.title}" loading="lazy" /></div>`).join("")}</div>`;
  }
  if (topic.kind === "pseudocode" && topic.examples?.length) {
    content += `<div class="example-card">${topic.examples.map((example) => `
      <div>
        <h4>${example.title}</h4>
        <pre class="code-block">${example.code}</pre>
        <button class="copy-btn" data-code="${escapeAttr(example.code)}">Copiar código PSeInt</button>
        <p>${example.explanation}</p>
      </div>
    `).join("")}</div>`;
  }
  if (topic.kind === "pythonIntro" || topic.kind === "conditionals" || topic.kind === "loops") {
    content += `<div class="example-card">${topic.examples.map((example) => `
      <div>
        <h4>${example.title}</h4>
        <pre class="code-block">${example.code}</pre>
        <button class="copy-btn" data-code="${escapeAttr(example.code)}">Copiar código Python</button>
        <p>${example.explanation}</p>
      </div>
    `).join("")}</div>`;
  }
  if (topic.kind === "operators") {
    content += `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Tipo</th><th>Operadores</th></tr></thead>
          <tbody>
            <tr><td>Algebraicos</td><td>+, -, *, /, %, **</td></tr>
            <tr><td>Relacionales</td><td>==, !=, &gt;, &lt;, &gt;=, &lt;=</td></tr>
            <tr><td>Lógicos</td><td>and, or, not</td></tr>
          </tbody>
        </table>
      </div>
      <div class="example-card">
        <h4>Ejemplos funcionales</h4>
        <pre class="code-block">${topic.examples.join("\n")}</pre>
        <button class="copy-btn" data-code="${escapeAttr(topic.examples.join("\n"))}">Copiar código Python</button>
      </div>
    `;
  }
  if (topic.questions?.length) {
    const quizBlock = topic.questions.map((q, i) => `
      <div class="quiz-item" data-question-title="${topic.title}" data-question-index="${i}">
        <strong>${q.prompt}</strong>
        <div class="options">
          ${q.options.map((option, idx) => `<button class="quiz-option" data-index="${idx}">${option}</button>`).join("")}
        </div>
        <div class="feedback" data-feedback></div>
      </div>
    `).join("");
    content += `<div class="quiz-section">${quizBlock}</div>`;
  }
  return content;
}

function escapeAttr(value) {
  return value.replace(/"/g, '&quot;');
}

function bindQuizEvents(unitKey) {
  const unitIndex = parseInt(unitKey.replace("unit", "")) - 1;
  const container = document.getElementById(`${unitKey}Content`);
  const questionButtons = container.querySelectorAll(".quiz-option");
  questionButtons.forEach((button) => {
    button.addEventListener("click", () => handleAnswer(button, unitIndex));
  });
}

function handleAnswer(button, unitIndex) {
  const quizItem = button.closest(".quiz-item");
  const feedback = quizItem.querySelector("[data-feedback]");
  const options = [...quizItem.querySelectorAll(".quiz-option")];
  const selectedIndex = parseInt(button.dataset.index, 10);
  const questionId = `${quizItem.dataset.questionTitle}-${quizItem.dataset.questionIndex}`;
  const key = `${unitIndex + 1}-${questionId}`;

  if (state.answers[key]) return;
  state.answers[key] = selectedIndex;

  const answerIndex = getCorrectAnswerIndex(unitIndex, quizItem);
  options.forEach((option) => option.disabled = true);
  const isCorrect = selectedIndex === answerIndex;
  const questionData = unitData[unitIndex].topics.find((topic) => topic.title === quizItem.dataset.questionTitle)?.questions?.[parseInt(quizItem.dataset.questionIndex, 10)] || {};
  const explanation = questionData.explanation || "";

  if (isCorrect) {
    state.scores[`unit${unitIndex + 1}`] += 1;
    button.classList.add("correct");
    feedback.innerHTML = `<strong>Correcta.</strong> ${explanation}`;
  } else {
    button.classList.add("incorrect");
    options[answerIndex].classList.add("correct");
    feedback.innerHTML = `<strong>Incorrecta.</strong> ${explanation}`;
  }

  state.progress[`unit${unitIndex + 1}`] = Object.keys(state.answers).filter((answerKey) => answerKey.startsWith(`${unitIndex + 1}-`)).length;
  updateUnitProgress(`unit${unitIndex + 1}`);
}

function getCorrectAnswerIndex(unitIndex, quizItem) {
  const topicTitle = quizItem.dataset.questionTitle;
  const questionIndex = parseInt(quizItem.dataset.questionIndex, 10);
  const topic = unitData[unitIndex].topics.find((item) => item.title === topicTitle);
  return topic?.questions?.[questionIndex]?.answer ?? 0;
}

function updateUnitProgress(unitKey) {
  const index = parseInt(unitKey.replace("unit", "")) - 1;
  const totalQuestions = unitData[index].topics.reduce((acc, topic) => acc + topic.questions.length, 0);
  const answered = Object.keys(state.answers).filter((answerKey) => answerKey.startsWith(`${index + 1}-`)).length;
  const progress = Math.round((answered / totalQuestions) * 100);
  const score = state.scores[unitKey];
  document.getElementById(`${unitKey}ProgressLabel`).textContent = `${answered}/${totalQuestions} preguntas`;
  document.getElementById(`${unitKey}ProgressBar`).style.width = `${progress}%`;
  document.getElementById(`${unitKey}ScoreLabel`).textContent = `Puntaje: ${score}/${totalQuestions}`;

  if (answered === totalQuestions) {
    const container = document.getElementById(`${unitKey}Content`);
    const summary = document.createElement("div");
    summary.className = "result-card";
    const pct = Math.round((score / totalQuestions) * 100);
    const grade = pct >= 90 ? "A" : pct >= 80 ? "B" : pct >= 70 ? "C" : pct >= 60 ? "D" : "E";
    summary.innerHTML = `<h4>Resultado final</h4><p>Preguntas totales: ${totalQuestions}</p><p>Respuestas correctas: ${score}</p><p>Respuestas incorrectas: ${totalQuestions - score}</p><p>Porcentaje: ${pct}%</p><p>Calificación: ${grade}</p>`;
    if (!container.querySelector(".result-card")) {
      container.appendChild(summary);
    }
  }
}

function showPanel(target) {
  panels.forEach((panel) => panel.classList.toggle("active", panel.id === target));
  navButtons.forEach((button) => button.classList.toggle("active", button.dataset.target === target));
  state.currentPanel = target;
}

function applyTheme(theme) {
  const validThemes = ["blue", "purple", "green", "cyan", "pink", "orange", "white", "dark"];
  if (!validThemes.includes(theme)) theme = "blue";
  document.body.className = document.body.className.replace(/theme-(blue|purple|green|cyan|pink|orange|white|dark)/g, "");
  document.body.classList.add(`theme-${theme}`);
  localStorage.setItem("cvTheme", theme);
  themeSelect.value = theme;
}

function applyBackground(background) {
  const validBackgrounds = ["aurora", "waves", "grid", "cosmic", "nebula"];
  if (!validBackgrounds.includes(background)) background = "aurora";
  document.body.className = document.body.className.replace(/bg-(aurora|waves|grid|cosmic|nebula)/g, "");
  document.body.classList.add(`bg-${background}`);
  localStorage.setItem("cvBackground", background);
  backgroundSelect.value = background;
}

function createParticles() {
  const particleField = document.getElementById("particleField");
  const count = 44;
  for (let i = 0; i < count; i += 1) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${8 + Math.random() * 10}s`;
    particle.style.animationDelay = `${Math.random() * 6}s`;
    particleField.appendChild(particle);
  }
}

function loadPreferences() {
  const savedTheme = localStorage.getItem("cvTheme") || "blue";
  const savedBackground = localStorage.getItem("cvBackground") || "aurora";
  const savedLogo = localStorage.getItem("cvLogo");
  applyTheme(savedTheme);
  applyBackground(savedBackground);
  if (savedLogo) {
    renderLogoPreview(savedLogo, localStorage.getItem("cvLogoType") || "image");
  }
}

function renderLogoPreview(dataUrl, type) {
  if (type === "pdf") {
    logoPreview.innerHTML = `<object data="${dataUrl}" type="application/pdf"><p>No se pudo mostrar el PDF.</p></object>`;
  } else {
    logoPreview.innerHTML = `<img src="${dataUrl}" alt="Logo cargado" />`;
  }
  logoPreviewWrap.innerHTML = type === "pdf" ? `<embed src="${dataUrl}" type="application/pdf" />` : `<img src="${dataUrl}" alt="Logo cargado" />`;
}

function copyCode(button) {
  const code = button.dataset.code;
  const originalLabel = button.textContent;
  navigator.clipboard.writeText(code).then(() => {
    button.textContent = "¡Copiado!";
    setTimeout(() => {
      button.textContent = originalLabel;
    }, 1200);
  }).catch(() => {
    button.textContent = "No disponible";
    setTimeout(() => {
      button.textContent = originalLabel;
    }, 1200);
  });
}

function attachEvents() {
  navButtons.forEach((button) => {
    button.addEventListener("click", () => showPanel(button.dataset.target));
  });

  customizeBtn.addEventListener("click", () => customizerPanel.classList.add("open"));
  closeCustomizerBtn.addEventListener("click", () => customizerPanel.classList.remove("open"));
  customizerPanel.addEventListener("click", (event) => {
    if (event.target === customizerPanel) customizerPanel.classList.remove("open");
  });

  themeSelect.addEventListener("change", (event) => applyTheme(event.target.value));
  backgroundSelect.addEventListener("change", (event) => applyBackground(event.target.value));
  backgroundBtn.addEventListener("click", () => {
    const backgrounds = ["aurora", "waves", "grid", "cosmic", "nebula"];
    const current = document.body.className.match(/bg-(aurora|waves|grid|cosmic|nebula)/)?.[0].replace("bg-", "") || "aurora";
    const next = backgrounds[(backgrounds.indexOf(current) + 1) % backgrounds.length];
    applyBackground(next);
  });

  logoInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      const type = file.type.includes("pdf") ? "pdf" : "image";
      localStorage.setItem("cvLogo", dataUrl);
      localStorage.setItem("cvLogoType", type);
      renderLogoPreview(dataUrl, type);
    };
    reader.readAsDataURL(file);
  });

  document.addEventListener("click", (event) => {
    const copyButton = event.target.closest(".copy-btn");
    if (copyButton) {
      copyCode(copyButton);
    }
  });

  document.addEventListener("click", (event) => {
    const imageCard = event.target.closest(".image-card img");
    if (imageCard) {
      lightboxImage.src = imageCard.src;
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
    }
  });

  lightboxClose.addEventListener("click", () => {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
  });
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      lightbox.classList.remove("open");
      lightbox.setAttribute("aria-hidden", "true");
    }
  });

  themeSearch.addEventListener("input", (event) => {
    const query = event.target.value.trim().toLowerCase();
    document.querySelectorAll(".topic-card").forEach((card) => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? "block" : "none";
    });
  });

  window.addEventListener("scroll", () => {
    const show = window.scrollY > 220;
    scrollTopBtn.classList.toggle("show", show);
  });

  scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  scrollToUnitsBtn.addEventListener("click", () => document.getElementById("unidad-1").scrollIntoView({ behavior: "smooth", block: "start" }));
}

function init() {
  createParticles();
  loadPreferences();
  renderUnits();
  attachEvents();
  showPanel("inicio");
}

init();
