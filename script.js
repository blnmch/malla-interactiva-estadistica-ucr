document.addEventListener('DOMContentLoaded', function() {
    // Datos del plan de estudios
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
                    { codigo: "XS-3150", nombre: "DISENO DE EXPERIMENTOS", creditos: 4, requisitos: ["MA-1004", "XS-1130"], correquisitos: ["XS-0122", "XS-0129"] }
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
                    { codigo: "XS-3110", nombre: "DISENOS DE MUESTREO PROBABILÍSTICO", creditos: 4, requisitos: ["XS-0123", "XS-0129", "XS-3510"], correquisitos: [] },
                    { codigo: "XS-3310", nombre: "TEORÍA ESTADÍSTICA", creditos: 4, requisitos: ["XS-0123"], correquisitos: [] }
                ]
            },
            {
                nombre: "VI CICLO",
                cursos: [
                    { codigo: "LM-3041", nombre: "INGLÉS PARA ESTADÍSTICA III", creditos: 3, requisitos: ["LM-3040", "XS-2130"], correquisitos: [] },
                    { codigo: "XS-0126", nombre: "MINERÍA DE DATOS Y ANÁLISIS MULTIVARIADO", creditos: 4, requisitos: ["XS-0130", "XS-0123", "XS-2130"], correquisitos: [] },
                    { codigo: "XS-0131", nombre: "GESTIÓN DE BASES DE DATOS Y ANÁLISIS DE INFORMACIÓN", creditos: 4, requisitos: ["XS-0130"], correquisitos: [] },
                    { codigo: "XS-3130", nombre: "DISENO Y EJECUCIÓN DE ENCUESTAS POR MUESTREO", creditos: 4, requisitos: ["XS-3110"], correquisitos: ["XS-4050"] },
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
            { codigo: "CA-0101", nombre: "INTRODUCCIÓN A CIENCIAS ACTUARIALES", creditos: 2, requisitos: [] },
            { codigo: "CC-0009", nombre: "SEMINARIO DE COMUNICACIÓN BÁSICA PARA OTRAS CARRERAS", creditos: 3, requisitos: [] },
            { codigo: "CI-0202", nombre: "PRINCIPIOS DE INFORMÁTICA", creditos: 4, requisitos: ["MA-0001"] },
            { codigo: "CP-0215", nombre: "TEORÍA DEL PODER", creditos: 3, requisitos: [] },
            { codigo: "CP-1000", nombre: "ÉTICA Y POLÍTICA", creditos: 3, requisitos: [] },
            { codigo: "CP-1212", nombre: "POLÍTICA ACTUAL COSTARRICENSE", creditos: 3, requisitos: [] },
            { codigo: "DN-0102", nombre: "APLICACIONES OFIMÁTICAS PARA LA TOMA DE DECISIONES", creditos: 3, requisitos: [] },
            { codigo: "DN-0104", nombre: "ELEMENTOS FUNDAMENTALES DE LEGISLACIÓN EMPRESARIAL", creditos: 3, requisitos: ["XS-3510"] },
            { codigo: "DN-0114", nombre: "COMUNICACIÓN INTERCULTURAL DE LOS NEGOCIOS", creditos: 3, requisitos: ["XS-3510"] },
            { codigo: "DN-0171", nombre: "GESTIÓN SOSTENIBLE DE EMPRESAS", creditos: 3, requisitos: ["XS-3510"] },
            { codigo: "DN-0304", nombre: "LIDERAZGO GERENCIAL", creditos: 3, requisitos: ["XS-3510"] },
            { codigo: "DN-0507", nombre: "ESTRATEGIAS Y TÁCTICAS DE NEGOCIACIÓN", creditos: 3, requisitos: ["XS-3510"] },
            { codigo: "F-2034", nombre: "LÓGICA SIMBÓLICA BÁSICA", creditos: 3, requisitos: [] },
            { codigo: "F-2036", nombre: "LÓGICA MODAL", creditos: 3, requisitos: [] },
            { codigo: "F-2037", nombre: "LÓGICA SIMBÓLICA AVANZADA", creditos: 3, requisitos: ["F-2034"] },
            { codigo: "F-2334", nombre: "FILOSOFÍA DE LA CIENCIA", creditos: 3, requisitos: [] },
            { codigo: "F-2454", nombre: "INTRODUCCIÓN A LA EPISTEMOLOGÍA", creditos: 3, requisitos: [] },
            { codigo: "HA-1001", nombre: "HISTORIA DE LAS INSTITUCIONES DE COSTA RICA", creditos: 4, requisitos: [] },
            { codigo: "HA-0111", nombre: "HISTORIA DE LAS MUJERES DE COSTA RICA (SIGLOS XIX-XXI)", creditos: 3, requisitos: [] },
            { codigo: "HA-2021", nombre: "FORMACIÓN CIUDADANA I", creditos: 2, requisitos: [] },
            { codigo: "II-0806", nombre: "METROLOGÍA Y NORMALIZACIÓN", creditos: 3, requisitos: ["XS-3150"] },
            { codigo: "MA-0150", nombre: "PRINCIPIOS DE MATEMÁTICA", creditos: 4, requisitos: [] },
            { codigo: "MA-0250", nombre: "CÁLCULO EN UNA VARIABLE I", creditos: 4, requisitos: ["MA-0001", "MA-0150"] },
            { codigo: "MA-0350", nombre: "CÁLCULO EN UNA VARIABLE II", creditos: 4, requisitos: ["MA-0250"] },
            { codigo: "PC-0200", nombre: "CONTABILIDAD BÁSICA", creditos: 4, requisitos: ["XS-3510"] },
            { codigo: "PC-0240", nombre: "MATEMÁTICA FINANCIERA", creditos: 3, requisitos: ["XS-3510"] },
            { codigo: "PS-0001", nombre: "PSICOLOGÍA GENERAL I", creditos: 3, requisitos: [] },
            { codigo: "SO-1133", nombre: "SOCIOLOGÍA BÁSICA I", creditos: 3, requisitos: [] },
            { codigo: "SO-1134", nombre: "SOCIOLOGÍA BÁSICA II", creditos: 3, requisitos: ["SO-1133"] },
            { codigo: "XE-0156", nombre: "INTRODUCCIÓN A LA ECONOMÍA", creditos: 4, requisitos: [] }
        ]
    };

    // Estado de la aplicación
    const state = {
        cursosAprobados: JSON.parse(localStorage.getItem('cursosAprobados')) || [],
        creditosAprobados: parseInt(localStorage.getItem('creditosAprobados')) || 0,
        totalCreditos: 0
    };

    // Calcular total de créditos
    planEstudios.ciclos.forEach(ciclo => {
        ciclo.cursos.forEach(curso => {
            state.totalCreditos += curso.creditos;
        });
    });

    // Agregar créditos de optativos (mínimo 9 créditos)
    state.totalCreditos += 9;

    // Renderizar la malla curricular
    function renderMalla() {
        const gridContainer = document.querySelector('.grid-container');
        gridContainer.innerHTML = '';

        planEstudios.ciclos.forEach(ciclo => {
            const cicloElement = document.createElement('div');
            cicloElement.className = 'ciclo';
            cicloElement.innerHTML = `<h2>${ciclo.nombre}</h2>`;
            
            ciclo.cursos.forEach(curso => {
                const cursoElement = document.createElement('div');
                cursoElement.className = 'course';
                cursoElement.dataset.codigo = curso.codigo;
                
                // Verificar si el curso está aprobado
                const aprobado = state.cursosAprobados.includes(curso.codigo);
                
                // Verificar requisitos
                const requisitosCumplidos = curso.requisitos.every(req => 
                    state.cursosAprobados.includes(req));
                
                // Verificar correquisitos
                const correquisitosCumplidos = curso.correquisitos.every(corr => 
                    state.cursosAprobados.includes(corr));
                
                // Determinar estado del curso
                if (aprobado) {
                    cursoElement.classList.add('completed');
                } else if (requisitosCumplidos && correquisitosCumplidos) {
                    cursoElement.classList.add('available');
                } else {
                    cursoElement.classList.add('locked');
                }
                
                // Construir tooltip de requisitos
                let requisitosText = '';
                if (curso.requisitos.length > 0) {
                    requisitosText += `Requisitos: ${curso.requisitos.join(', ')}`;
                }
                if (curso.correquisitos.length > 0) {
                    if (requisitosText) requisitosText += '<br>';
                    requisitosText += `Correquisitos: ${curso.correquisitos.join(', ')}`;
                }
                
                cursoElement.innerHTML += `
                    <div class="course-code">${curso.codigo}</div>
                    <div class="course-name">${curso.nombre}</div>
                    <div class="course-credits">${curso.creditos} créditos</div>
                    ${requisitosText ? `<div class="course-requirements">${requisitosText}</div>` : ''}
                `;
                
                // Agregar evento de clic
                if (!aprobado && requisitosCumplidos && correquisitosCumplidos) {
                    cursoElement.addEventListener('click', () => {
                        toggleCursoAprobado(curso.codigo, curso.creditos);
                    });
                }
                
                cicloElement.appendChild(cursoElement);
            });
            
            gridContainer.appendChild(cicloElement);
        });
        
        // Renderizar optativos
        renderOptativos();
        
        // Actualizar barra de progreso
        updateProgressBar();
    }

    // Renderizar cursos optativos
    function renderOptativos() {
        const electivesGrid = document.getElementById('electives-grid');
        electivesGrid.innerHTML = '';
        
        planEstudios.optativos.forEach(optativo => {
            const electiveElement = document.createElement('div');
            electiveElement.className = 'elective';
            electiveElement.dataset.codigo = optativo.codigo;
            
            // Verificar si el optativo está aprobado
            const aprobado = state.cursosAprobados.includes(optativo.codigo);
            
            // Verificar requisitos
            const requisitosCumplidos = optativo.requisitos.every(req => 
                state.cursosAprobados.includes(req));
            
            // Determinar estado del optativo
            if (aprobado) {
                electiveElement.classList.add('completed');
            } else if (requisitosCumplidos) {
                electiveElement.classList.add('available');
            } else {
                electiveElement.classList.add('locked');
            }
            
            // Construir tooltip de requisitos
            let requisitosText = optativo.requisitos.length > 0 ? 
                `Requisitos: ${optativo.requisitos.join(', ')}` : '';
            
            electiveElement.innerHTML = `
                <div class="course-code">${optativo.codigo}</div>
                <div class="course-name">${optativo.nombre}</div>
                <div class="course-credits">${optativo.creditos} créditos</div>
                ${requisitosText ? `<div class="course-requirements">${requisitosText}</div>` : ''}
            `;
            
            // Agregar evento de clic
            if (!aprobado && requisitosCumplidos) {
                electiveElement.addEventListener('click', () => {
                    toggleCursoAprobado(optativo.codigo, optativo.creditos);
                });
            }
            
            electivesGrid.appendChild(electiveElement);
        });
    }

    // Alternar estado de aprobación de un curso
    function toggleCursoAprobado(codigo, creditos) {
        const index = state.cursosAprobados.indexOf(codigo);
        
        if (index === -1) {
            // Marcar como aprobado
            state.cursosAprobados.push(codigo);
            state.creditosAprobados += creditos;
        } else {
            // Marcar como no aprobado
            state.cursosAprobados.splice(index, 1);
            state.creditosAprobados -= creditos;
        }
        
        // Guardar en localStorage
        localStorage.setItem('cursosAprobados', JSON.stringify(state.cursosAprobados));
        localStorage.setItem('creditosAprobados', state.creditosAprobados);
        
        // Volver a renderizar
        renderMalla();
    }

    // Actualizar barra de progreso
    function updateProgressBar() {
        const progressBar = document.getElementById('progress-bar');
        const progressText = document.getElementById('progress-text');
        const creditsCount = document.getElementById('credits-count');
        
        const porcentaje = Math.round((state.creditosAprobados / state.totalCreditos) * 100);
        progressBar.style.width = `${porcentaje}%`;
        progressText.textContent = `${porcentaje}% completado`;
        creditsCount.textContent = `${state.creditosAprobados} créditos aprobados`;
    }

    // Inicializar la aplicación
    renderMalla();
});
