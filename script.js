document.addEventListener('DOMContentLoaded', function() {
    // Datos completos del plan de estudios con VIII ciclos
    const planEstudios = {
        ciclos: [
            {
                nombre: "I CICLO",
                cursos: [
                    { codigo: "EG-", nombre: "CURSO DE ARTE", creditos: 2, requisitos: [], correquisitos: [] },
                    { codigo: "EG-I", nombre: "CURSO INTEGRADO DE HUMANIDADES I", creditos: 6, requisitos: [], correquisitos: [] },
                    { codigo: "MA-0001", nombre: "PRECÁLCULO", creditos: 0, requisitos: [], correquisitos: [] },
                    { codigo: "XS-0124", nombre: "ANÁLISIS EXPLORATORIO DE DATOS", creditos: 4, requisitos: [], correquisitos: [] },
                    { codigo: "RP-", nombre: "REPERTORIO", creditos: 3, requisitos: [], correquisitos: [] }
                ]
            },
            {
                nombre: "II CICLO",
                cursos: [
                    { codigo: "EF-", nombre: "ACTIVIDAD DEPORTIVA", creditos: 0, requisitos: [], correquisitos: [] },
                    { codigo: "EG-II", nombre: "CURSO INTEGRADO DE HUMANIDADES II", creditos: 6, requisitos: ["EG-I"], correquisitos: [] },
                    { codigo: "MA-0155", nombre: "CÁLCULO DIFERENCIAL E INTEGRAL I", creditos: 4, requisitos: ["MA-0001"], correquisitos: [] },
                    { codigo: "MA-1004", nombre: "ÁLGEBRA LINEAL", creditos: 3, requisitos: [], correquisitos: [] },
                    { codigo: "XS-1130", nombre: "PRINCIPIOS DE INFERENCIA ESTADÍSTICA", creditos: 4, requisitos: ["XS-0124"], correquisitos: ["MA-0155"] }
                ]
            },
            {
                nombre: "III CICLO",
                cursos: [
                    { codigo: "MA-1023", nombre: "CÁLCULO CON OPTIMIZACIÓN", creditos: 4, requisitos: ["MA-0155"], correquisitos: ["MA-1004"] },
                    { codigo: "SR-I", nombre: "SEMINARIO DE REALIDAD NACIONAL I", creditos: 2, requisitos: ["EG-II"], correquisitos: [] },
                    { codigo: "XS-0122", nombre: "MODELOS PROBABILÍSTICOS I", creditos: 4, requisitos: ["MA-0155", "XS-1130"], correquisitos: ["MA-1023"] },
                    { codigo: "XS-0129", nombre: "PROGRAMACIÓN PARA ESTADÍSTICA I", creditos: 4, requisitos: ["XS-0124"], correquisitos: [] },
                    { codigo: "XS-3150", nombre: "DISEÑO DE EXPERIMENTOS", creditos: 4, requisitos: ["MA-1004", "XS-1130"], correquisitos: ["XS-0122", "XS-0129"] }
                ]
            },
            {
                nombre: "IV CICLO",
                cursos: [
                    { codigo: "LM-3039", nombre: "INGLÉS PARA ESTADÍSTICA I", creditos: 3, requisitos: ["XS-1130"], correquisitos: [] },
                    { codigo: "XS-0123", nombre: "MODELOS PROBABILÍSTICOS II", creditos: 4, requisitos: ["MA-1023", "XS-0122"], correquisitos: [] },
                    { codigo: "XS-0130", nombre: "PROGRAMACIÓN PARA ESTADÍSTICA II", creditos: 4, requisitos: ["XS-0129"], correquisitos: [] },
                    { codigo: "XS-2130", nombre: "MODELOS DE REGRESIÓN APLICADOS", creditos: 4, requisitos: ["MA-1004", "XS-0122", "XS-0129", "XS-3150"], correquisitos: [] },
                    { codigo: "XS-3510", nombre: "METODOLOGÍA DE LA INVESTIGACIÓN CIENTÍFICA", creditos: 3, requisitos: ["XS-3150"], correquisitos: [] }
                ]
            },
            {
                nombre: "V CICLO",
                cursos: [
                    { codigo: "LM-3040", nombre: "INGLÉS PARA ESTADÍSTICA II", creditos: 3, requisitos: ["LM-3039"], correquisitos: [] },
                    { codigo: "XS-0125", nombre: "MODELOS LINEALES AVANZADOS", creditos: 4, requisitos: ["XS-0123", "XS-2130", "XS-3150"], correquisitos: ["XS-3310"] },
                    { codigo: "XS-0133", nombre: "INTRODUCCIÓN A LA DEMOGRAFÍA Y BIOESTADÍSTICA", creditos: 3, requisitos: ["XS-2130"], correquisitos: [] },
                    { codigo: "XS-3110", nombre: "DISEÑOS DE MUESTREO PROBABILÍSTICO", creditos: 4, requisitos: ["XS-0123", "XS-0129", "XS-3510"], correquisitos: [] },
                    { codigo: "XS-3310", nombre: "TEORÍA ESTADÍSTICA", creditos: 4, requisitos: ["XS-0123"], correquisitos: [] }
                ]
            },
            {
                nombre: "VI CICLO",
                cursos: [
                    { codigo: "LM-3041", nombre: "INGLÉS PARA ESTADÍSTICA III", creditos: 3, requisitos: ["LM-3040", "XS-2130"], correquisitos: [] },
                    { codigo: "XS-0126", nombre: "MINERÍA DE DATOS Y ANÁLISIS MULTIVARIADO", creditos: 4, requisitos: ["XS-0130", "XS-0123", "XS-2130"], correquisitos: [] },
                    { codigo: "XS-0131", nombre: "GESTIÓN DE BASES DE DATOS Y ANÁLISIS DE INFORMACIÓN", creditos: 4, requisitos: ["XS-0130"], correquisitos: [] },
                    { codigo: "XS-3130", nombre: "DISEÑO Y EJECUCIÓN DE ENCUESTAS POR MUESTREO", creditos: 4, requisitos: ["XS-3110"], correquisitos: ["XS-4050"] },
                    { codigo: "XS-4050", nombre: "TÉCNICAS DE MEDICIÓN PARA ESTADÍSTICA", creditos: 3, requisitos: ["XS-0130", "XS-0123", "XS-2130"], correquisitos: ["XS-0126"] }
                ]
            },
            {
                nombre: "VII CICLO",
                cursos: [
                    { codigo: "SR-II", nombre: "SEMINARIO DE REALIDAD NACIONAL II", creditos: 2, requisitos: ["SR-I"], correquisitos: [] },
                    { codigo: "LM-3042", nombre: "INGLÉS PARA ESTADÍSTICA IV", creditos: 3, requisitos: ["LM-3041"], correquisitos: [] },
                    { codigo: "OPT-", nombre: "OPTATIVO", creditos: 3, requisitos: [], correquisitos: [] },
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
                    { codigo: "OPT-", nombre: "OPTATIVO", creditos: 6, requisitos: [], correquisitos: [] }
                ]
            }
        ],
        optativos: [
            // Lista completa de cursos optativos...
            { codigo: "CA-0101", nombre: "INTRODUCCIÓN A CIENCIAS ACTUARIALES", creditos: 2, requisitos: [] },
            { codigo: "CC-0009", nombre: "SEMINARIO DE COMUNICACIÓN BÁSICA PARA OTRAS CARRERAS", creditos: 3, requisitos: [] },
            // ... (todos los demás optativos)
        ]
    };

    // Estado de los cursos
    let cursosAprobados = JSON.parse(localStorage.getItem('cursosAprobados')) || [];
    let totalCreditos = 0;
    let creditosAprobados = 0;

    // Elementos del DOM
    const gridContainer = document.getElementById('grid-container');
    const optativesContainer = document.getElementById('optatives-container');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');

    // Función para verificar requisitos con "O"
    function cumpleRequisitos(requisitos, cursosAprobados) {
        if (!requisitos || requisitos.length === 0) return true;
        
        // Para requisitos que son alternativas (separados por " o ")
        const gruposO = requisitos.map(req => {
            if (typeof req === 'string' && req.includes(" o ")) {
                return req.split(" o ").map(item => item.trim());
            }
            return [req];
        });
        
        return gruposO.every(grupo => 
            grupo.some(codigo => cursosAprobados.includes(codigo))
        );
    }

    // Renderizar todos los cursos
    function renderAllCourses() {
        gridContainer.innerHTML = '';
        optativesContainer.innerHTML = '';
        totalCreditos = 0;
        creditosAprobados = 0;

        // Renderizar ciclos regulares
        planEstudios.ciclos.forEach(ciclo => {
            const cicloElement = document.createElement('div');
            cicloElement.className = 'ciclo';
            
            const cicloHeader = document.createElement('div');
            cicloHeader.className = 'ciclo-header';
            cicloHeader.textContent = ciclo.nombre;
            cicloElement.appendChild(cicloHeader);
            
            ciclo.cursos.forEach(curso => {
                totalCreditos += curso.creditos;
                createCourseElement(curso, cicloElement);
            });
            
            gridContainer.appendChild(cicloElement);
        });

        // Renderizar cursos optativos
        planEstudios.optativos.forEach(curso => {
            totalCreditos += curso.creditos;
            createCourseElement(curso, optativesContainer, true);
        });

        updateProgress();
    }

    // Crear elemento de curso
    function createCourseElement(curso, container, isOptativo = false) {
        const cursoElement = document.createElement('div');
        cursoElement.className = 'curso';
        cursoElement.dataset.codigo = curso.codigo;
        
        // Verificar si el curso está aprobado
        if (cursosAprobados.includes(curso.codigo)) {
            cursoElement.classList.add('completed');
            creditosAprobados += curso.creditos;
        } else {
            // Verificar requisitos (con lógica "O")
            const requisitosCumplidos = cumpleRequisitos(curso.requisitos, cursosAprobados);
            const correquisitosCumplidos = cumpleRequisitos(curso.correquisitos, cursosAprobados);
            
            if (requisitosCumplidos && correquisitosCumplidos) {
                cursoElement.classList.add('unlocked');
            } else {
                cursoElement.classList.add('locked');
            }
        }
        
        // Contenido del curso
        const cursoCode = document.createElement('div');
        cursoCode.className = 'curso-code';
        cursoCode.textContent = curso.codigo;
        cursoElement.appendChild(cursoCode);
        
        const cursoName = document.createElement('div');
        cursoName.className = 'curso-name';
        cursoName.textContent = curso.nombre;
        cursoElement.appendChild(cursoName);
        
        const cursoCredits = document.createElement('div');
        cursoCredits.className = 'curso-credits';
        cursoCredits.textContent = `${curso.creditos} créditos`;
        cursoElement.appendChild(cursoCredits);
        
        // Mostrar requisitos si el curso está bloqueado
        if (cursoElement.classList.contains('locked')) {
            const requisitosText = document.createElement('div');
            requisitosText.className = 'curso-requisitos';
            
            let requisitosInfo = [];
            
            if (curso.requisitos && curso.requisitos.length > 0) {
                requisitosInfo.push(`Requisitos: ${Array.isArray(curso.requisitos) ? curso.requisitos.join(' o ') : curso.requisitos}`);
            }
            
            if (curso.correquisitos && curso.correquisitos.length > 0) {
                requisitosInfo.push(`Correquisitos: ${Array.isArray(curso.correquisitos) ? curso.correquisitos.join(' o ') : curso.correquisitos}`);
            }
            
            requisitosText.textContent = requisitosInfo.join(' | ');
            cursoElement.appendChild(requisitosText);
        }
        
        // Evento de clic
        cursoElement.addEventListener('click', function() {
            if (this.classList.contains('locked')) return;
            
            if (this.classList.contains('completed')) {
                // Desmarcar como aprobado
                this.classList.remove('completed');
                this.classList.add('unlocked');
                const index = cursosAprobados.indexOf(this.dataset.codigo);
                if (index > -1) {
                    cursosAprobados.splice(index, 1);
                    creditosAprobados -= curso.creditos;
                }
            } else {
                // Marcar como aprobado
                this.classList.remove('unlocked');
                this.classList.add('completed');
                cursosAprobados.push(this.dataset.codigo);
                creditosAprobados += curso.creditos;
            }
            
            localStorage.setItem('cursosAprobados', JSON.stringify(cursosAprobados));
            renderAllCourses();
        });
        
        container.appendChild(cursoElement);
    }

    // Actualizar barra de progreso
    function updateProgress() {
        const porcentaje = Math.round((creditosAprobados / totalCreditos) * 100);
        progressBar.style.width = `${porcentaje}%`;
        progressText.textContent = `${porcentaje}% completado`;
    }

    // Inicializar
    renderAllCourses();
});
