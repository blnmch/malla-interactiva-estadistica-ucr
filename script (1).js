document.addEventListener('DOMContentLoaded', function() {
    // Datos del plan de estudios (VIII ciclos completos)
    const planEstudios = {
        ciclos: [
            // Ciclos I-VII (manteniendo la estructura anterior)
            // ...
            {
                nombre: "VII CICLO",
                cursos: [
                    { codigo: "SR-II", nombre: "SEMINARIO DE REALIDAD NACIONAL II", creditos: 2, requisitos: ["SR-I"], correquisitos: [] },
                    { codigo: "LM-3042", nombre: "INGLÉS PARA ESTADÍSTICA IV", creditos: 3, requisitos: ["LM-3041"], correquisitos: [] },
                    { codigo: "OPT-3", nombre: "OPTATIVO (3 créditos)", creditos: 3, requisitos: [], correquisitos: [] }, // Modificado
                    { codigo: "XS-0128", nombre: "INFERENCIA BAYESIANA", creditos: 4, requisitos: ["XS-0125", "XS-0130", "XS-3310"], correquisitos: [] },
                    { codigo: "XS-0134", nombre: "CONSTRUCCIÓN DE INDICADORES", creditos: 3, requisitos: ["XS-0125", "XS-0126", "XS-0133", "XS-3130", "XS-4050"], correquisitos: [] },
                    { codigo: "XS-4410", nombre: "PRÁCTICA PROFESIONAL I", creditos: 3, requisitos: ["XS-0125", "XS-0126", "XS-0131", "XS-0133", "XS-3130", "XS-3310", "XS-4050"], correquisitos: ["XS-0134"] }
                ]
            },
            {
                nombre: "VIII CICLO",
                cursos: [
                    { codigo: "XS-4430", nombre: "PRÁCTICA PROFESIONAL II", creditos: 4, requisitos: ["XS-0128", "XS-0134", "XS-4410"], correquisitos: ["XS-0127", "XS-0132"] },
                    { codigo: "XS-0132", nombre: "MÉTODOS PARA CIENCIA DE DATOS", creditos: 4, requisitos: ["XS-0126"], correquisitos: [] },
                    { codigo: "XS-0127", nombre: "ANÁLISIS DE SERIES TEMPORALES", creditos: 4, requisitos: ["XS-0126", "XS-3310"], correquisitos: [] },
                    { codigo: "OPT-3-VIII", nombre: "OPTATIVO (3 créditos)", creditos: 3, requisitos: [], correquisitos: [] } // Agregado
                ]
            }
        ],
        optativos: [
            // Lista COMPLETA de cursos optativos según el plan
            { codigo: "CA-0101", nombre: "INTRODUCCIÓN A CIENCIAS ACTUARIALES", creditos: 2, requisitos: [] },
            { codigo: "CC-0009", nombre: "SEMINARIO DE COMUNICACIÓN BÁSICA PARA OTRAS CARRERAS", creditos: 3, requisitos: [] },
            { codigo: "CI-0202", nombre: "PRINCIPIOS DE INFORMÁTICA", creditos: 4, requisitos: ["MA-0001"] },
            { codigo: "CP-0215", nombre: "TEORÍA DEL PODER", creditos: 3, requisitos: [] },
            // ... (Agrega TODOS los optativos restantes)
            { codigo: "XE-0156", nombre: "INTRODUCCIÓN A LA ECONOMÍA", creditos: 4, requisitos: [] }
        ]
    };

    // [El resto del código permanece igual...]
    
    // Modificar la función createCourseElement para mostrar mejor los optativos
    function createCourseElement(curso, container, isOptativo = false) {
        const cursoElement = document.createElement('div');
        cursoElement.className = 'curso' + (isOptativo ? ' optativo' : '');
        
        // [Resto de la función igual, pero puedes añadir estilos específicos para optativos]
    }

    // Función para renderizar los optativos en una sección aparte
    function renderOptatives() {
        const optativesSection = document.createElement('div');
        optativesSection.className = 'optatives-section';
        
        const title = document.createElement('h2');
        title.textContent = 'Cursos Optativos Disponibles';
        optativesSection.appendChild(title);
        
        const optativesContainer = document.createElement('div');
        optativesContainer.className = 'optatives-container';
        optativesContainer.id = 'optatives-container';
        
        planEstudios.optativos.forEach(curso => {
            createCourseElement(curso, optativesContainer, true);
        });
        
        optativesSection.appendChild(optativesContainer);
        document.querySelector('.container').appendChild(optativesSection);
    }

    // Inicialización
    renderAllCourses();
    renderOptatives(); // Nueva función para mostrar optativos aparte
});
