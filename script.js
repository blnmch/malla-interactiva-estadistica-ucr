document.addEventListener('DOMContentLoaded', function() {
    // Datos completos del plan de estudios (VIII ciclos)
    const planEstudios = {
        ciclos: [
            {
                nombre: "I CICLO",
                cursos: [
                    { codigo: "MA-0001", nombre: "MATEMÁTICA GENERAL", creditos: 4, requisitos: [], correquisitos: [] },
                    { codigo: "MA-0002", nombre: "CÁLCULO DIFERENCIAL", creditos: 4, requisitos: ["MA-0001"], correquisitos: [] },
                    { codigo: "XS-0101", nombre: "INTRODUCCIÓN A LA ESTADÍSTICA", creditos: 3, requisitos: [], correquisitos: [] },
                    { codigo: "LM-3040", nombre: "INGLÉS PARA ESTADÍSTICA I", creditos: 3, requisitos: [], correquisitos: [] },
                    { codigo: "CS-0001", nombre: "CULTURA Y SOCIEDAD", creditos: 3, requisitos: [], correquisitos: [] }
                ]
            },
            {
                nombre: "II CICLO",
                cursos: [
                    { codigo: "MA-0003", nombre: "CÁLCULO INTEGRAL", creditos: 4, requisitos: ["MA-0002"], correquisitos: [] },
                    { codigo: "XS-0102", nombre: "ESTADÍSTICA DESCRIPTIVA", creditos: 4, requisitos: ["XS-0101"], correquisitos: [] },
                    { codigo: "CI-0201", nombre: "FUNDAMENTOS DE PROGRAMACIÓN", creditos: 4, requisitos: [], correquisitos: [] },
                    { codigo: "LM-3041", nombre: "INGLÉS PARA ESTADÍSTICA II", creditos: 3, requisitos: ["LM-3040"], correquisitos: [] },
                    { codigo: "CS-0002", nombre: "REALIDAD NACIONAL", creditos: 3, requisitos: [], correquisitos: [] }
                ]
            },
            {
                nombre: "III CICLO",
                cursos: [
                    { codigo: "MA-0004", nombre: "CÁLCULO EN VARIAS VARIABLES", creditos: 4, requisitos: ["MA-0003"], correquisitos: [] },
                    { codigo: "XS-0103", nombre: "PROBABILIDAD", creditos: 4, requisitos: ["MA-0003", "XS-0102"], correquisitos: [] },
                    { codigo: "XS-0104", nombre: "ANÁLISIS EXPLORATORIO DE DATOS", creditos: 3, requisitos: ["XS-0102", "CI-0201"], correquisitos: [] },
                    { codigo: "XS-0105", nombre: "ÁLGEBRA LINEAL", creditos: 4, requisitos: ["MA-0002"], correquisitos: [] },
                    { codigo: "CS-0003", nombre: "HISTORIA DE LAS IDEAS", creditos: 3, requisitos: [], correquisitos: [] }
                ]
            },
            {
                nombre: "IV CICLO",
                cursos: [
                    { codigo: "XS-0106", nombre: "INFERENCIA ESTADÍSTICA", creditos: 4, requisitos: ["XS-0103"], correquisitos: [] },
                    { codigo: "XS-0107", nombre: "MODELOS LINEALES", creditos: 4, requisitos: ["XS-0103", "XS-0105"], correquisitos: [] },
                    { codigo: "XS-0108", nombre: "MUESTREO ESTADÍSTICO", creditos: 4, requisitos: ["XS-0102", "XS-0103"], correquisitos: [] },
                    { codigo: "XS-0109", nombre: "PROGRAMACIÓN ESTADÍSTICA", creditos: 3, requisitos: ["CI-0201", "XS-0104"], correquisitos: [] },
                    { codigo: "SR-I", nombre: "SEMINARIO DE REALIDAD NACIONAL I", creditos: 2, requisitos: ["CS-0002"], correquisitos: [] }
                ]
            },
            {
                nombre: "V CICLO",
                cursos: [
                    { codigo: "XS-0125", nombre: "DISEÑO DE EXPERIMENTOS", creditos: 4, requisitos: ["XS-0107"], correquisitos: [] },
                    { codigo: "XS-0126", nombre: "ANÁLISIS MULTIVARIADO", creditos: 4, requisitos: ["XS-0105", "XS-0107"], correquisitos: [] },
                    { codigo: "XS-0129", nombre: "MODELOS LINEALES GENERALIZADOS", creditos: 4, requisitos: ["XS-0107"], correquisitos: [] },
                    { codigo: "XS-0130", nombre: "ESTADÍSTICA NO PARAMÉTRICA", creditos: 3, requisitos: ["XS-0106"], correquisitos: [] },
                    { codigo: "XS-3130", nombre: "BASES DE DATOS", creditos: 3, requisitos: ["CI-0201", "XS-0109"], correquisitos: [] }
                ]
            },
            {
                nombre: "VI CICLO",
                cursos: [
                    { codigo: "XS-0123", nombre: "PROCESOS ESTOCÁSTICOS", creditos: 4, requisitos: ["XS-0103", "XS-0105"], correquisitos: [] },
                    { codigo: "XS-0131", nombre: "ANÁLISIS DE SUPERVIVENCIA", creditos: 3, requisitos: ["XS-0106", "XS-0129"], correquisitos: [] },
                    { codigo: "XS-0133", nombre: "MINERÍA DE DATOS", creditos: 4, requisitos: ["XS-0126", "XS-3130"], correquisitos: [] },
                    { codigo: "XS-3310", nombre: "SIMULACIÓN ESTADÍSTICA", creditos: 3, requisitos: ["XS-0103", "XS-0109"], correquisitos: [] },
                    { codigo: "XS-4050", nombre: "VISUALIZACIÓN DE DATOS", creditos: 3, requisitos: ["XS-0104", "XS-3130"], correquisitos: [] }
                ]
            },
            {
                nombre: "VII CICLO",
                cursos: [
                    { codigo: "SR-II", nombre: "SEMINARIO DE REALIDAD NACIONAL II", creditos: 2, requisitos: ["SR-I"], correquisitos: [] },
                    { codigo: "LM-3042", nombre: "INGLÉS PARA ESTADÍSTICA IV", creditos: 3, requisitos: ["LM-3041"], correquisitos: [] },
                    { codigo: "OPT-3", nombre: "OPTATIVO (3 créditos)", creditos: 3, requisitos: [], correquisitos: [] },
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
                    { codigo: "OPT-3-VIII", nombre: "OPTATIVO (3 créditos)", creditos: 3, requisitos: [], correquisitos: [] }
                ]
            }
        ],
        optativos: [
            { codigo: "CA-0101", nombre: "INTRODUCCIÓN A CIENCIAS ACTUARIALES", creditos: 2, requisitos: [] },
            { codigo: "CC-0009", nombre: "SEMINARIO DE COMUNICACIÓN BÁSICA PARA OTRAS CARRERAS", creditos: 3, requisitos: [] },
            { codigo: "CI-0202", nombre: "PRINCIPIOS DE INFORMÁTICA", creditos: 4, requisitos: ["MA-0001"] },
            { codigo: "CP-0215", nombre: "TEORÍA DEL PODER", creditos: 3, requisitos: [] },
            { codigo: "CS-0004", nombre: "FILOSOFÍA DE LA CIENCIA", creditos: 3, requisitos: [] },
            { codigo: "CS-0005", nombre: "ECONOMÍA POLÍTICA", creditos: 3, requisitos: [] },
            { codigo: "CS-0006", nombre: "SOCIOLOGÍA DEL DESARROLLO", creditos: 3, requisitos: [] },
            { codigo: "MA-0005", nombre: "ECUACIONES DIFERENCIALES", creditos: 4, requisitos: ["MA-0003", "MA-0004"] },
            { codigo: "MA-0006", nombre: "ANÁLISIS NUMÉRICO", creditos: 4, requisitos: ["MA-0003", "CI-0201"] },
            { codigo: "XE-0156", nombre: "INTRODUCCIÓN A LA ECONOMÍA", creditos: 4, requisitos: [] }
        ]
    };

    // Estado de los cursos completados
    let completedCourses = JSON.parse(localStorage.getItem('completedCourses')) || [];
    
    // Renderizar todos los ciclos
    function renderAllCourses() {
        const container = document.getElementById('semesters-container');
        container.innerHTML = '';
        
        planEstudios.ciclos.forEach(ciclo => {
            const cicloElement = document.createElement('div');
            cicloElement.className = 'semester';
            
            const header = document.createElement('div');
            header.className = 'semester-header';
            header.textContent = ciclo.nombre;
            cicloElement.appendChild(header);
            
            const coursesList = document.createElement('div');
            coursesList.className = 'courses-list';
            
            ciclo.cursos.forEach(curso => {
                createCourseElement(curso, coursesList);
            });
            
            cicloElement.appendChild(coursesList);
            container.appendChild(cicloElement);
        });
        
        updateProgress();
    }
    
    // Crear elemento de curso
    function createCourseElement(curso, container, isOptativo = false) {
        const cursoElement = document.createElement('div');
        let cursoClass = 'curso';
        
        if (isOptativo) {
            cursoClass += ' optativo';
        }
        
        // Verificar si el curso está completado
        const isCompleted = completedCourses.includes(curso.codigo);
        
        // Verificar requisitos para determinar si está bloqueado
        const allReqsMet = curso.requisitos.every(req => completedCourses.includes(req));
        const isUnlocked = curso.requisitos.length === 0 || allReqsMet;
        
        if (isCompleted) {
            cursoClass += ' completed';
        } else if (isUnlocked) {
            cursoClass += ' unlocked';
        } else {
            cursoClass += ' locked';
        }
        
        cursoElement.className = cursoClass;
        cursoElement.innerHTML = `
            <div class="curso-code">
                <span>${curso.codigo}</span>
                <span class="curso-credits">${curso.creditos} cr</span>
            </div>
            <div class="curso-name">${curso.nombre}</div>
        `;
        
        // Mostrar requisitos en tooltip
        if (curso.requisitos.length > 0) {
            cursoElement.setAttribute('title', `Requisitos: ${curso.requisitos.join(', ')}`);
        }
        
        // Agregar evento de click
        if (!cursoElement.classList.contains('locked')) {
            cursoElement.addEventListener('click', function() {
                toggleCourseCompletion(curso.codigo);
                
                // Efecto visual
                this.classList.add('active');
                setTimeout(() => {
                    this.classList.remove('active');
                }, 300);
            });
        }
        
        container.appendChild(cursoElement);
    }
    
    // Alternar estado de completado
    function toggleCourseCompletion(courseCode) {
        const index = completedCourses.indexOf(courseCode);
        
        if (index === -1) {
            completedCourses.push(courseCode);
        } else {
            completedCourses.splice(index, 1);
        }
        
        localStorage.setItem('completedCourses', JSON.stringify(completedCourses));
        renderAllCourses();
        renderOptatives();
        updateProgress();
    }
    
    // Renderizar optativos
    function renderOptatives() {
        const container = document.getElementById('optatives-container');
        container.innerHTML = '';
        
        planEstudios.optativos.forEach(curso => {
            createCourseElement(curso, container, true);
        });
    }
    
    // Actualizar barra de progreso
    function updateProgress() {
        // Calcular total de cursos
        let totalCourses = 0;
        planEstudios.ciclos.forEach(ciclo => {
            totalCourses += ciclo.cursos.length;
        });
        
        // Calcular porcentaje completado
        const percentage = Math.round((completedCourses.length / totalCourses) * 100);
        
        // Actualizar UI
        document.getElementById('progress-bar').style.width = `${percentage}%`;
        document.getElementById('progress-text').textContent = `${percentage}% completado`;
    }
    
    // Inicialización
    renderAllCourses();
    renderOptatives();
});
