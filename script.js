document.addEventListener('DOMContentLoaded', function() {
    // DATOS COMPLETOS DEL PLAN DE ESTUDIOS (8 CICLOS + OPTATIVAS)
    const planEstudios = {
        ciclos: [
            {
                nombre: "I SEMESTRE",
                cursos: [
                    { codigo: "EG-", nombre: "CURSO DE ARTE", creditos: 2, requisitos: [], correquisitos: [] },
                    { codigo: "EG-I", nombre: "CURSO INTEGRADO DE HUMANIDADES I", creditos: 6, requisitos: [], correquisitos: [] },
                    { codigo: "MA-0001", nombre: "PRECÁLCULO", creditos: 0, requisitos: [], correquisitos: [] },
                    { codigo: "XS-0124", nombre: "ANÁLISIS EXPLORATORIO DE DATOS", creditos: 4, requisitos: [], correquisitos: [] },
                    { codigo: "RP-", nombre: "REPERTORIO", creditos: 3, requisitos: [], correquisitos: [] }
                ]
            },
            {
                nombre: "II SEMESTRE",
                cursos: [
                    { codigo: "EF-", nombre: "ACTIVIDAD DEPORTIVA", creditos: 0, requisitos: [], correquisitos: [] },
                    { codigo: "EG-II", nombre: "CURSO INTEGRADO DE HUMANIDADES II", creditos: 6, requisitos: ["EG-I"], correquisitos: [] },
                    { codigo: "MA-0155", nombre: "CÁLCULO DIFERENCIAL E INTEGRAL I", creditos: 4, requisitos: ["MA-0001"], correquisitos: [] },
                    { codigo: "MA-1004", nombre: "ÁLGEBRA LINEAL", creditos: 3, requisitos: [], correquisitos: [] },
                    { codigo: "XS-1130", nombre: "PRINCIPIOS DE INFERENCIA ESTADÍSTICA", creditos: 4, requisitos: ["XS-0124"], correquisitos: [] }
                ]
            },
            {
                nombre: "III SEMESTRE",
                cursos: [
                    { codigo: "MA-1023", nombre: "CÁLCULO CON OPTIMIZACIÓN", creditos: 4, requisitos: ["MA-0155"], correquisitos: ["MA-1004"] },
                    { codigo: "SR-I", nombre: "SEMINARIO DE REALIDAD NACIONAL I", creditos: 2, requisitos: ["EG-II"], correquisitos: [] },
                    { codigo: "XS-0122", nombre: "MODELOS PROBABILÍSTICOS I", creditos: 4, requisitos: ["XS-1130"], correquisitos: ["MA-1023"] },
                    { codigo: "XS-0129", nombre: "PROGRAMACIÓN PARA ESTADÍSTICA I", creditos: 4, requisitos: ["XS-0124"], correquisitos: [] },
                    { codigo: "XS-3150", nombre: "DISEÑO DE EXPERIMENTOS", creditos: 4, requisitos: ["XS-1130"], correquisitos: ["XS-0122", "XS-0129"] }
                ]
            },
            {
                nombre: "IV SEMESTRE",
                cursos: [
                    { codigo: "LM-3039", nombre: "INGLÉS PARA ESTADÍSTICA I", creditos: 3, requisitos: ["XS-1130"], correquisitos: [] },
                    { codigo: "XS-0123", nombre: "MODELOS PROBABILÍSTICOS II", creditos: 4, requisitos: ["MA-1023", "XS-0122"], correquisitos: [] },
                    { codigo: "XS-0130", nombre: "PROGRAMACIÓN PARA ESTADÍSTICA II", creditos: 4, requisitos: ["XS-0129"], correquisitos: [] },
                    { codigo: "XS-2130", nombre: "MODELOS DE REGRESIÓN APLICADOS", creditos: 4, requisitos: ["XS-0122", "XS-0129", "XS-3150"], correquisitos: [] },
                    { codigo: "XS-3510", nombre: "METODOLOGÍA DE LA INVESTIGACIÓN CIENTÍFICA", creditos: 3, requisitos: ["XS-3150"], correquisitos: [] }
                ]
            },
            {
                nombre: "V SEMESTRE",
                cursos: [
                    { codigo: "LM-3040", nombre: "INGLÉS PARA ESTADÍSTICA II", creditos: 3, requisitos: ["LM-3039"], correquisitos: [] },
                    { codigo: "XS-0125", nombre: "MODELOS LINEALES AVANZADOS", creditos: 4, requisitos: ["XS-0123", "XS-2130", "XS-3150"], correquisitos: [] },
                    { codigo: "XS-0133", nombre: "INTRODUCCIÓN A LA DEMOGRAFÍA Y BIOESTADÍSTICA", creditos: 3, requisitos: ["XS-2130"], correquisitos: [] },
                    { codigo: "XS-3110", nombre: "DISEÑOS DE MUESTREO PROBABILÍSTICO", creditos: 4, requisitos: ["XS-0123", "XS-0129", "XS-3510"], correquisitos: [] },
                    { codigo: "XS-3310", nombre: "TEORÍA ESTADÍSTICA", creditos: 4, requisitos: ["XS-0123"], correquisitos: [] }
                ]
            },
            {
                nombre: "VI SEMESTRE",
                cursos: [
                    { codigo: "LM-3041", nombre: "INGLÉS PARA ESTADÍSTICA III", creditos: 3, requisitos: ["LM-3040", "XS-2130"], correquisitos: [] },
                    { codigo: "XS-0126", nombre: "MINERÍA DE DATOS Y ANÁLISIS MULTIVARIADO", creditos: 4, requisitos: ["XS-0130", "XS-0123", "XS-2130"], correquisitos: [] },
                    { codigo: "XS-0131", nombre: "GESTIÓN DE BASES DE DATOS Y ANÁLISIS DE INFORMACIÓN", creditos: 4, requisitos: ["XS-0130"], correquisitos: [] },
                    { codigo: "XS-3130", nombre: "DISEÑO Y EJECUCIÓN DE ENCUESTAS POR MUESTREO", creditos: 4, requisitos: ["XS-3110"], correquisitos: ["XS-4050"] },
                    { codigo: "XS-4050", nombre: "TÉCNICAS DE MEDICIÓN PARA ESTADÍSTICA", creditos: 3, requisitos: ["XS-0130", "XS-0123", "XS-2130"], correquisitos: ["XS-0126"] }
                ]
            },
            {
                nombre: "VII SEMESTRE",
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
                nombre: "VIII SEMESTRE",
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

    // Estado de cursos completados
    let completedCourses = JSON.parse(localStorage.getItem('completedCourses')) || [];
    
    // Renderizar todos los ciclos (ESTILO VERTICAL)
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
                const courseElement = document.createElement('div');
                courseElement.className = 'course-card';
                
                // Asignar color según tipo de curso
                let cardColor = '';
                if (curso.codigo.startsWith('MA-')) cardColor = 'math-card';
                else if (curso.codigo.startsWith('XS-')) cardColor = 'stats-card';
                else if (curso.codigo.startsWith('LM-')) cardColor = 'english-card';
                else if (curso.codigo.startsWith('EG-') || curso.codigo.startsWith('SR-')) cardColor = 'humanities-card';
                else if (curso.codigo.startsWith('OPT')) cardColor = 'optative-card';
                else cardColor = 'default-card';
                
                courseElement.className = `course-card ${cardColor} ${completedCourses.includes(curso.codigo) ? 'completed' : ''}`;
                
                courseElement.innerHTML = `
                    <div class="course-name">${curso.nombre}</div>
                    <div class="course-footer">
                        <span class="course-code">${curso.codigo}</span>
                        <span class="course-credits">${curso.creditos} créditos</span>
                    </div>
                    ${curso.requisitos.length > 0 ? 
                        `<div class="course-req">Requisitos: ${curso.requisitos.join(', ')}</div>` : ''}
                    ${curso.correquisitos.length > 0 ? 
                        `<div class="course-req">Correquisitos: ${curso.correquisitos.join(', ')}</div>` : ''}
                `;
                
                courseElement.addEventListener('click', function() {
                    toggleCourseCompletion(curso.codigo);
                    this.classList.toggle('completed');
                });
                
                coursesList.appendChild(courseElement);
            });
            
            cicloElement.appendChild(coursesList);
            container.appendChild(cicloElement);
        });
        
        updateProgress();
    }

    // Renderizar TODAS LAS OPTATIVAS
    function renderOptatives() {
        const container = document.getElementById('optatives-container');
        container.innerHTML = '<h3>Cursos Optativos Disponibles</h3>';
        
        const optativesGrid = document.createElement('div');
        optativesGrid.className = 'optatives-grid';
        
        planEstudios.optativos.forEach(curso => {
            const optativeElement = document.createElement('div');
            optativeElement.className = `course-card optative-card ${completedCourses.includes(curso.codigo) ? 'completed' : ''}`;
            
            optativeElement.innerHTML = `
                <div class="course-name">${curso.nombre}</div>
                <div class="course-footer">
                    <span class="course-code">${curso.codigo}</span>
                    <span class="course-credits">${curso.creditos} créditos</span>
                </div>
                ${curso.requisitos.length > 0 ? 
                    `<div class="course-req">Requisitos: ${curso.requisitos.join(', ')}</div>` : ''}
            `;
            
            optativeElement.addEventListener('click', function() {
                toggleCourseCompletion(curso.codigo);
                this.classList.toggle('completed');
            });
            
            optativesGrid.appendChild(optativeElement);
        });
        
        container.appendChild(optativesGrid);
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
        updateProgress();
    }

    // Actualizar barra de progreso
    function updateProgress() {
        let total = 0;
        planEstudios.ciclos.forEach(c => total += c.cursos.length);
        const percent = Math.round((completedCourses.length / total) * 100);
        
        const progressBar = document.getElementById('progress-bar');
        progressBar.style.width = `${percent}%`;
        
        const progressText = document.getElementById('progress-text');
        progressText.textContent = `${percent}% completado`;
        progressText.style.color = percent > 50 ? '#fff' : '#333';
    }

    // Inicialización
    renderAllCourses();
    renderOptatives();
});
