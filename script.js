document.addEventListener('DOMContentLoaded', function() {
    // Datos completos del plan de estudios de Estadística
    const curriculumData = [
        {
            semester: "I CICLO",
            courses: [
                { 
                    code: "EG-", 
                    name: "CURSO DE ARTE", 
                    credits: 2,
                    hours: { t: 0, p: 0, l: 0, tp: 0 },
                    requirements: [],
                    corequisites: []
                },
                { 
                    code: "EG-I", 
                    name: "CURSO INTEGRADO DE HUMANIDADES I", 
                    credits: 6,
                    hours: { t: 0, p: 0, l: 0, tp: 0 },
                    requirements: [],
                    corequisites: []
                },
                { 
                    code: "MA-0001", 
                    name: "PRECÁLCULO", 
                    credits: 0,
                    hours: { t: 5, p: 0, l: 0, tp: 0 },
                    requirements: [],
                    corequisites: []
                },
                { 
                    code: "XS-0124", 
                    name: "ANÁLISIS EXPLORATORIO DE DATOS", 
                    credits: 4,
                    hours: { t: 2, p: 2, l: 0, tp: 0 },
                    requirements: [],
                    corequisites: []
                },
                { 
                    code: "RP-", 
                    name: "REPERTORIO", 
                    credits: 3,
                    hours: { t: 0, p: 0, l: 0, tp: 0 },
                    requirements: [],
                    corequisites: []
                }
            ]
        },
        {
            semester: "II CICLO",
            courses: [
                { 
                    code: "EF-", 
                    name: "ACTIVIDAD DEPORTIVA", 
                    credits: 0,
                    hours: { t: 0, p: 0, l: 0, tp: 0 },
                    requirements: [],
                    corequisites: []
                },
                { 
                    code: "EG-II", 
                    name: "CURSO INTEGRADO DE HUMANIDADES II", 
                    credits: 6,
                    hours: { t: 0, p: 0, l: 0, tp: 0 },
                    requirements: ["EG-I"],
                    corequisites: []
                },
                { 
                    code: "MA-0155", 
                    name: "CÁLCULO DIFERENCIAL E INTEGRAL I", 
                    credits: 4,
                    hours: { t: 5, p: 0, l: 0, tp: 0 },
                    requirements: ["MA-0001"],
                    corequisites: []
                },
                { 
                    code: "MA-1004", 
                    name: "ÁLGEBRA LINEAL", 
                    credits: 3,
                    hours: { t: 5, p: 0, l: 0, tp: 0 },
                    requirements: [],
                    corequisites: []
                },
                { 
                    code: "XS-1130", 
                    name: "PRINCIPIOS DE INFERENCIA ESTADÍSTICA", 
                    credits: 4,
                    hours: { t: 2, p: 2, l: 0, tp: 0 },
                    requirements: ["XS-0124"],
                    corequisites: ["CA-0151", "MA-0155", "MA-1021"]
                }
            ]
        },
        {
            semester: "III CICLO",
            courses: [
                { 
                    code: "MA-1023", 
                    name: "CÁLCULO CON OPTIMIZACIÓN", 
                    credits: 4,
                    hours: { t: 5, p: 0, l: 0, tp: 0 },
                    requirements: ["MA-1001", "MA-0213", "MA-1021", "CA-0151", "MA-0155"],
                    corequisites: ["MA-1004"]
                },
                { 
                    code: "SR-I", 
                    name: "SEMINARIO DE REALIDAD NACIONAL I", 
                    credits: 2,
                    hours: { t: 0, p: 0, l: 0, tp: 0 },
                    requirements: ["EG-II"],
                    corequisites: []
                },
                { 
                    code: "XS-0122", 
                    name: "MODELOS PROBABILÍSTICOS I", 
                    credits: 4,
                    hours: { t: 3, p: 1, l: 0, tp: 0 },
                    requirements: ["CA-0151", "MA-1021", "MA-0155", "XS-1130"],
                    corequisites: ["MA-1023"]
                },
                { 
                    code: "XS-0129", 
                    name: "PROGRAMACIÓN PARA ESTADÍSTICA I", 
                    credits: 4,
                    hours: { t: 0, p: 4, l: 0, tp: 0 },
                    requirements: ["XS-0124"],
                    corequisites: []
                },
                { 
                    code: "XS-3150", 
                    name: "DISEÑO DE EXPERIMENTOS", 
                    credits: 4,
                    hours: { t: 2, p: 2, l: 0, tp: 0 },
                    requirements: ["CA-0252", "MA-1004", "XS-1130"],
                    corequisites: ["XS-0122", "XS-0129"]
                }
            ]
        },
        {
            semester: "IV CICLO",
            courses: [
                { 
                    code: "LM-3039", 
                    name: "INGLÉS PARA ESTADÍSTICA I", 
                    credits: 3,
                    hours: { t: 0, p: 0, l: 0, tp: 4 },
                    requirements: ["XS-1130"],
                    corequisites: []
                },
                { 
                    code: "XS-0123", 
                    name: "MODELOS PROBABILÍSTICOS II", 
                    credits: 4,
                    hours: { t: 3, p: 1, l: 0, tp: 0 },
                    requirements: ["MA-1023", "XS-0122"],
                    corequisites: []
                },
                { 
                    code: "XS-0130", 
                    name: "PROGRAMACIÓN PARA ESTADÍSTICA II", 
                    credits: 4,
                    hours: { t: 0, p: 4, l: 0, tp: 0 },
                    requirements: ["XS-0129"],
                    corequisites: []
                },
                { 
                    code: "XS-2130", 
                    name: "MODELOS DE REGRESIÓN APLICADOS", 
                    credits: 4,
                    hours: { t: 2, p: 2, l: 0, tp: 0 },
                    requirements: ["CA-0252", "MA-1004", "XS-0122", "XS-0129", "XS-3150"],
                    corequisites: []
                },
                { 
                    code: "XS-3510", 
                    name: "METODOLOGÍA DE LA INVESTIGACIÓN CIENTÍFICA", 
                    credits: 3,
                    hours: { t: 3, p: 0, l: 0, tp: 0 },
                    requirements: ["XS-3150"],
                    corequisites: []
                }
            ]
        },
        {
            semester: "V CICLO",
            courses: [
                { 
                    code: "LM-3040", 
                    name: "INGLÉS PARA ESTADÍSTICA II", 
                    credits: 3,
                    hours: { t: 0, p: 0, l: 0, tp: 4 },
                    requirements: ["LM-3039"],
                    corequisites: []
                },
                { 
                    code: "XS-0125", 
                    name: "MODELOS LINEALES AVANZADOS", 
                    credits: 4,
                    hours: { t: 2, p: 2, l: 0, tp: 0 },
                    requirements: ["XS-0123", "XS-2130", "XS-3150"],
                    corequisites: ["XS-3310"]
                },
                { 
                    code: "XS-0133", 
                    name: "INTRODUCCIÓN A LA DEMOGRAFÍA Y BIOESTADÍSTICA", 
                    credits: 3,
                    hours: { t: 2, p: 2, l: 0, tp: 0 },
                    requirements: ["XS-2130"],
                    corequisites: []
                },
                { 
                    code: "XS-3110", 
                    name: "DISEÑOS DE MUESTREO PROBABILÍSTICO", 
                    credits: 4,
                    hours: { t: 4, p: 1, l: 0, tp: 0 },
                    requirements: ["XS-0123", "XS-0129", "XS-3510"],
                    corequisites: []
                },
                { 
                    code: "XS-3310", 
                    name: "TEORÍA ESTADÍSTICA", 
                    credits: 4,
                    hours: { t: 2, p: 2, l: 0, tp: 0 },
                    requirements: ["XS-0123"],
                    corequisites: []
                }
            ]
        },
        {
            semester: "VI CICLO",
            courses: [
                { 
                    code: "LM-3041", 
                    name: "INGLÉS PARA ESTADÍSTICA III", 
                    credits: 3,
                    hours: { t: 0, p: 0, l: 0, tp: 4 },
                    requirements: ["LM-3040", "XS-2130"],
                    corequisites: []
                },
                { 
                    code: "XS-0126", 
                    name: "MINERÍA DE DATOS Y ANÁLISIS MULTIVARIADO", 
                    credits: 4,
                    hours: { t: 2, p: 2, l: 0, tp: 0 },
                    requirements: ["XS-0130", "XS-0123", "XS-2130"],
                    corequisites: []
                },
                { 
                    code: "XS-0131", 
                    name: "GESTIÓN DE BASES DE DATOS Y ANÁLISIS DE INFORMACIÓN", 
                    credits: 4,
                    hours: { t: 2, p: 2, l: 0, tp: 0 },
                    requirements: ["XS-0130"],
                    corequisites: []
                },
                { 
                    code: "XS-3130", 
                    name: "DISEÑO Y EJECUCIÓN DE ENCUESTAS POR MUESTREO", 
                    credits: 4,
                    hours: { t: 1, p: 3, l: 0, tp: 0 },
                    requirements: ["XS-3110"],
                    corequisites: ["XS-4050"]
                },
                { 
                    code: "XS-4050", 
                    name: "TÉCNICAS DE MEDICIÓN PARA ESTADÍSTICA", 
                    credits: 3,
                    hours: { t: 1, p: 2, l: 0, tp: 0 },
                    requirements: ["XS-0130", "XS-0123", "XS-2130"],
                    corequisites: ["XS-0126"]
                }
            ]
        },
        {
            semester: "VII CICLO",
            courses: [
                { 
                    code: "SR-II", 
                    name: "SEMINARIO DE REALIDAD NACIONAL II", 
                    credits: 2,
                    hours: { t: 0, p: 0, l: 0, tp: 0 },
                    requirements: ["SR-I"],
                    corequisites: []
                },
                { 
                    code: "LM-3042", 
                    name: "INGLÉS PARA ESTADÍSTICA IV", 
                    credits: 3,
                    hours: { t: 0, p: 0, l: 0, tp: 4 },
                    requirements: ["LM-3041"],
                    corequisites: []
                },
                { 
                    code: "OPT-", 
                    name: "OPTATIVO", 
                    credits: 3,
                    hours: { t: 0, p: 0, l: 0, tp: 0 },
                    requirements: [],
                    corequisites: []
                },
                { 
                    code: "XS-0128", 
                    name: "INFERENCIA BAYESIANA", 
                    credits: 4,
                    hours: { t: 2, p: 2, l: 0, tp: 0 },
                    requirements: ["XS-0125", "XS-0130", "XS-3310"],
                    corequisites: []
                },
                { 
                    code: "XS-0134", 
                    name: "CONSTRUCCIÓN DE INDICADORES", 
                    credits: 3,
                    hours: { t: 2, p: 1, l: 0, tp: 0 },
                    requirements: ["XS-0125", "XS-0126", "XS-0133", "XS-3130", "XS-4050"],
                    corequisites: []
                },
                { 
                    code: "XS-4410", 
                    name: "PRÁCTICA PROFESIONAL I", 
                    credits: 3,
                    hours: { t: 1, p: 2, l: 0, tp: 0 },
                    requirements: ["XS-0125", "XS-0126", "XS-0131", "XS-0133", "XS-3130", "XS-3310", "XS-4050"],
                    corequisites: ["XS-0134"]
                }
            ]
        },
        {
            semester: "VIII CICLO",
            courses: [
                { 
                    code: "XS-4430", 
                    name: "PRÁCTICA PROFESIONAL II", 
                    credits: 4,
                    hours: { t: 2, p: 3, l: 0, tp: 0 },
                    requirements: ["XS-0128", "XS-0134", "XS-4410"],
                    corequisites: ["XS-0127", "XS-0132"]
                },
                { 
                    code: "XS-0132", 
                    name: "MÉTODOS PARA CIENCIA DE DATOS", 
                    credits: 4,
                    hours: { t: 2, p: 2, l: 0, tp: 0 },
                    requirements: ["XS-0126"],
                    corequisites: []
                },
                { 
                    code: "XS-0127", 
                    name: "ANÁLISIS DE SERIES TEMPORALES", 
                    credits: 4,
                    hours: { t: 2, p: 2, l: 0, tp: 0 },
                    requirements: ["XS-0126", "XS-3310"],
                    corequisites: []
                },
                { 
                    code: "OPT-", 
                    name: "OPTATIVO", 
                    credits: 6,
                    hours: { t: 0, p: 0, l: 0, tp: 0 },
                    requirements: [],
                    corequisites: []
                }
            ]
        }
    ];

    // Cursos optativos
    const optativesData = [
        { code: "CA-0101", name: "INTRODUCCIÓN A CIENCIAS ACTUARIALES", credits: 2, requirements: [] },
        { code: "CC-0009", name: "SEMINARIO DE COMUNICACIÓN BÁSICA PARA OTRAS CARRERAS", credits: 3, requirements: [] },
        { code: "CI-0202", name: "PRINCIPIOS DE INFORMÁTICA", credits: 4, requirements: ["MA-0205", "MA-0225", "MA-0230", "MA-1001", "MA-1210", "CA-0151", "MA-1101"] },
        { code: "CP-0215", name: "TEORÍA DEL PODER", credits: 3, requirements: [] },
        { code: "CP-1000", name: "ÉTICA Y POLÍTICA", credits: 3, requirements: [] },
        { code: "CP-1212", name: "POLÍTICA ACTUAL COSTARRICENSE", credits: 3, requirements: [] },
        { code: "DN-0102", name: "APLICACIONES OFIMÁTICAS PARA LA TOMA DE DECISIONES", credits: 3, requirements: [] },
        { code: "DN-0104", name: "ELEMENTOS FUNDAMENTALES DE LEGISLACIÓN EMPRESARIAL", credits: 3, requirements: ["DN-0101", "PC-0170", "XS-3510"] },
        { code: "DN-0114", name: "COMUNICACIÓN INTERCULTURAL DE LOS NEGOCIOS", credits: 3, requirements: ["PC-0409", "DN-0113", "DN-0546", "DN-0583", "XS-3510"] },
        { code: "DN-0171", name: "GESTIÓN SOSTENIBLE DE EMPRESAS", credits: 3, requirements: ["DN-0405", "PC-0409", "XS-3510"] },
        { code: "DN-0304", name: "LIDERAZGO GERENCIAL", credits: 3, requirements: ["DN-0106", "DN-0203", "XS-3510"] },
        { code: "DN-0507", name: "ESTRATEGIAS Y TÁCTICAS DE NEGOCIACIÓN", credits: 3, requirements: ["DN-0111", "DN-0406", "XS-3510"] },
        { code: "F-2034", name: "LÓGICA SIMBÓLICA BÁSICA", credits: 3, requirements: [] },
        { code: "F-2036", name: "LÓGICA MODAL", credits: 3, requirements: [] },
        { code: "F-2037", name: "LÓGICA SIMBÓLICA AVANZADA", credits: 3, requirements: ["F-2034"] },
        { code: "F-2334", name: "FILOSOFÍA DE LA CIENCIA", credits: 3, requirements: [] },
        { code: "F-2454", name: "INTRODUCCIÓN A LA EPISTEMOLOGÍA", credits: 3, requirements: [] },
        { code: "HA-1001", name: "HISTORIA DE LAS INSTITUCIONES DE COSTA RICA", credits: 4, requirements: [] },
        { code: "HA-0111", name: "HISTORIA DE LAS MUJERES DE COSTA RICA (SIGLOS XIX-XXI)", credits: 3, requirements: [] },
        { code: "HA-2021", name: "FORMACIÓN CIUDADANA I", credits: 2, requirements: [] },
        { code: "II-0806", name: "METROLOGÍA Y NORMALIZACIÓN", credits: 3, requirements: ["II-0602", "XS-3150"] },
        { code: "MA-0150", name: "PRINCIPIOS DE MATEMÁTICA", credits: 4, requirements: [] },
        { code: "MA-0250", name: "CÁLCULO EN UNA VARIABLE I", credits: 4, requirements: ["MA-0001", "MA-0150"] },
        { code: "MA-0350", name: "CÁLCULO EN UNA VARIABLE II", credits: 4, requirements: ["MA-0250"] },
        { code: "PC-0200", name: "CONTABILIDAD BÁSICA", credits: 4, requirements: ["DN-0101", "PC-0170", "XE-0156", "EC-1100", "XS-3510"] },
        { code: "PC-0240", name: "MATEMÁTICA FINANCIERA", credits: 3, requirements: ["MA-1021", "XS-3510"] },
        { code: "PS-0001", name: "PSICOLOGÍA GENERAL I", credits: 3, requirements: [] },
        { code: "SO-1133", name: "SOCIOLOGÍA BÁSICA I", credits: 3, requirements: [] },
        { code: "SO-1134", name: "SOCIOLOGÍA BÁSICA II", credits: 3, requirements: ["SO-1133"] },
        { code: "XE-0156", name: "INTRODUCCIÓN A LA ECONOMÍA", credits: 4, requirements: [] }
    ];

    // Estado de los cursos
    let coursesState = {};
    const totalCourses = curriculumData.reduce((acc, semester) => acc + semester.courses.length, 0) + optativesData.length;
    
    // Elementos del DOM
    const semestersContainer = document.querySelector('.semesters-container');
    const optativesContainer = document.getElementById('optatives-container');
    const resetBtn = document.getElementById('reset-btn');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');

    // Inicializar la malla curricular
    function initCurriculum() {
        // Cargar estado guardado o inicializar uno nuevo
        const savedState = localStorage.getItem('coursesState');
        if (savedState) {
            coursesState = JSON.parse(savedState);
        } else {
            // Inicializar todos los cursos como no completados
            curriculumData.forEach(semester => {
                semester.courses.forEach(course => {
                    coursesState[course.code] = false;
                });
            });
            optativesData.forEach(course => {
                coursesState[course.code] = false;
            });
        }

        renderCurriculum();
        renderOptatives();
        updateProgress();
    }

    // Renderizar la malla curricular por ciclos
    function renderCurriculum() {
        semestersContainer.innerHTML = '';

        curriculumData.forEach(semester => {
            const semesterElement = document.createElement('div');
            semesterElement.className = 'semester';

            const semesterHeader = document.createElement('div');
            semesterHeader.className = 'semester-header';
            
            const semesterTitle = document.createElement('span');
            semesterTitle.textContent = semester.semester;
            
            // Calcular créditos del semestre
            const semesterCredits = semester.courses.reduce((acc, course) => acc + course.credits, 0);
            const creditsSpan = document.createElement('span');
            creditsSpan.className = 'semester-credits';
            creditsSpan.textContent = `${semesterCredits} créditos`;
            
            semesterHeader.appendChild(semesterTitle);
            semesterHeader.appendChild(creditsSpan);

            const coursesContainer = document.createElement('div');
            coursesContainer.className = 'courses-container';

            semester.courses.forEach(course => {
                const courseElement = document.createElement('div');
                courseElement.className = 'course';
                
                // Verificar si el curso está bloqueado por requisitos
                const isLockedByRequirements = course.requirements.length > 0 && 
                                !course.requirements.some(req => coursesState[req]);
                
                // Verificar si el curso está bloqueado por correquisitos
                const isLockedByCorequisites = course.corequisites.length > 0 && 
                                course.corequisites.every(coreq => !coursesState[coreq]);
                
                const isLocked = isLockedByRequirements || isLockedByCorequisites;

                if (isLocked) {
                    courseElement.classList.add('locked');
                } else if (coursesState[course.code]) {
                    courseElement.classList.add('completed');
                }

                // Código y créditos
                const courseCode = document.createElement('div');
                courseCode.className = 'course-code';
                courseCode.innerHTML = `
                    <span>${course.code}</span>
                    <span class="course-credits">${course.credits} créditos</span>
                `;

                // Nombre del curso
                const courseName = document.createElement('div');
                courseName.className = 'course-name';
                courseName.textContent = course.name;

                // Horas del curso
                const courseHours = document.createElement('div');
                courseHours.className = 'course-hours';
                
                if (course.hours.t > 0) {
                    const tItem = document.createElement('div');
                    tItem.className = 'hour-item';
                    tItem.innerHTML = `<i class="fas fa-chalkboard-teacher"></i> T: ${course.hours.t}`;
                    courseHours.appendChild(tItem);
                }
                
                if (course.hours.p > 0) {
                    const pItem = document.createElement('div');
                    pItem.className = 'hour-item';
                    pItem.innerHTML = `<i class="fas fa-laptop-code"></i> P: ${course.hours.p}`;
                    courseHours.appendChild(pItem);
                }
                
                if (course.hours.l > 0) {
                    const lItem = document.createElement('div');
                    lItem.className = 'hour-item';
                    lItem.innerHTML = `<i class="fas fa-flask"></i> L: ${course.hours.l}`;
                    courseHours.appendChild(lItem);
                }
                
                if (course.hours.tp > 0) {
                    const tpItem = document.createElement('div');
                    tpItem.className = 'hour-item';
                    tpItem.innerHTML = `<i class="fas fa-comments"></i> TP: ${course.hours.tp}`;
                    courseHours.appendChild(tpItem);
                }

                // Requisitos y correquisitos
                const requirementsText = [];
                if (course.requirements.length > 0) {
                    requirementsText.push(`Requisitos: ${course.requirements.join(', ')}`);
                }
                if (course.corequisites.length > 0) {
                    requirementsText.push(`Correquisitos: ${course.corequisites.join(', ')}`);
                }

                if (requirementsText.length > 0) {
                    const courseRequirements = document.createElement('div');
                    courseRequirements.className = 'course-requirements';
                    courseRequirements.textContent = requirementsText.join(' | ');
                    courseElement.appendChild(courseRequirements);
                }

                // Checkbox invisible para marcar/desmarcar
                const courseToggle = document.createElement('input');
                courseToggle.type = 'checkbox';
                courseToggle.className = 'course-toggle';
                courseToggle.checked = coursesState[course.code];
 de que quieres reiniciar todo tu progreso?')) {
            // Reiniciar todos los cursos
            curriculumData.forEach(semester => {
                semester.courses.forEach(course => {
                    coursesState[course.code] = false;
                });
            });
            optativesData.forEach(course => {
                coursesState[course.code] = false;
            });
            
            saveProgress();
            renderCurriculum();
            renderOptatives();
            updateProgress();
        }
    });

    // Inicializar la aplicación
    initCurriculum();
});
