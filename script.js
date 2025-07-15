document.addEventListener('DOMContentLoaded', function() {
    // Datos de los cursos organizados por semestre
    const curriculumData = [
        {
            semester: "I CICLO",
            courses: [
                { code: "EG-", name: "CURSO DE ARTE", credits: 2, requirements: [] },
                { code: "EG-I", name: "CURSO INTEGRADO DE HUMANIDADES I", credits: 6, requirements: [] },
                { code: "MA-0001", name: "PRECÁLCULO", credits: 0, requirements: [] },
                { code: "XS-0124", name: "ANÁLISIS EXPLORATORIO DE DATOS", credits: 4, requirements: [] },
                { code: "RP-", name: "REPERTORIO", credits: 3, requirements: [] }
            ]
        },
        {
            semester: "II CICLO",
            courses: [
                { code: "EF-", name: "ACTIVIDAD DEPORTIVA", credits: 0, requirements: [] },
                { code: "EG-II", name: "CURSO INTEGRADO DE HUMANIDADES II", credits: 6, requirements: ["EG-I"] },
                { code: "MA-0155", name: "CÁLCULO DIFERENCIAL E INTEGRAL I", credits: 4, requirements: ["MA-0001"] },
                { code: "MA-1004", name: "ÁLGEBRA LINEAL", credits: 3, requirements: [] },
                { code: "XS-1130", name: "PRINCIPIOS DE INFERENCIA ESTADÍSTICA", credits: 4, requirements: ["XS-0124"] }
            ]
        },
        {
            semester: "III CICLO",
            courses: [
                { code: "MA-1023", name: "CÁLCULO CON OPTIMIZACIÓN", credits: 4, requirements: ["MA-1001", "MA-0213", "MA-1021", "CA-0151", "MA-0155"] },
                { code: "SR-I", name: "SEMINARIO DE REALIDAD NACIONAL I", credits: 2, requirements: ["EG-II"] },
                { code: "XS-0122", name: "MODELOS PROBABILÍSTICOS I", credits: 4, requirements: ["CA-0151", "MA-1021", "MA-0155", "XS-1130"] },
                { code: "XS-0129", name: "PROGRAMACIÓN PARA ESTADÍSTICA I", credits: 4, requirements: ["XS-0124"] },
                { code: "XS-3150", name: "DISEÑO DE EXPERIMENTOS", credits: 4, requirements: ["CA-0252", "MA-1004", "XS-1130"] }
            ]
        },
        {
            semester: "IV CICLO",
            courses: [
                { code: "LM-3039", name: "INGLÉS PARA ESTADÍSTICA I", credits: 3, requirements: ["XS-1130"] },
                { code: "XS-0123", name: "MODELOS PROBABILÍSTICOS II", credits: 4, requirements: ["MA-1023", "XS-0122"] },
                { code: "XS-0130", name: "PROGRAMACIÓN PARA ESTADÍSTICA II", credits: 4, requirements: ["XS-0129"] },
                { code: "XS-2130", name: "MODELOS DE REGRESIÓN APLICADOS", credits: 4, requirements: ["CA-0252", "MA-1004", "XS-0122", "XS-0129", "XS-3150"] },
                { code: "XS-3510", name: "METODOLOGÍA DE LA INVESTIGACIÓN CIENTÍFICA", credits: 3, requirements: ["XS-3150"] }
            ]
        },
        {
            semester: "V CICLO",
            courses: [
                { code: "LM-3040", name: "INGLÉS PARA ESTADÍSTICA II", credits: 3, requirements: ["LM-3039"] },
                { code: "XS-0125", name: "MODELOS LINEALES AVANZADOS", credits: 4, requirements: ["XS-0123", "XS-2130", "XS-3150"] },
                { code: "XS-0133", name: "INTRODUCCIÓN A LA DEMOGRAFÍA Y BIOESTADÍSTICA", credits: 3, requirements: ["XS-2130"] },
                { code: "XS-3110", name: "DISEÑOS DE MUESTREO PROBABILÍSTICO", credits: 4, requirements: ["XS-0123", "XS-0129", "XS-3510"] },
                { code: "XS-3310", name: "TEORÍA ESTADÍSTICA", credits: 4, requirements: ["XS-0123"] }
            ]
        },
        {
            semester: "VI CICLO",
            courses: [
                { code: "LM-3041", name: "INGLÉS PARA ESTADÍSTICA III", credits: 3, requirements: ["LM-3040", "XS-2130"] },
                { code: "XS-0126", name: "MINERÍA DE DATOS Y ANÁLISIS MULTIVARIADO", credits: 4, requirements: ["XS-0130", "XS-0123", "XS-2130"] },
                { code: "XS-0131", name: "GESTIÓN DE BASES DE DATOS Y ANÁLISIS DE INFORMACIÓN", credits: 4, requirements: ["XS-0130"] },
                { code: "XS-3130", name: "DISEÑO Y EJECUCIÓN DE ENCUESTAS POR MUESTREO", credits: 4, requirements: ["XS-3110"] },
                { code: "XS-4050", name: "TÉCNICAS DE MEDICIÓN PARA ESTADÍSTICA", credits: 3, requirements: ["XS-0130", "XS-0123", "XS-2130"] }
            ]
        },
        {
            semester: "VII CICLO",
            courses: [
                { code: "SR-II", name: "SEMINARIO DE REALIDAD NACIONAL II", credits: 2, requirements: ["SR-I"] },
                { code: "LM-3042", name: "INGLÉS PARA ESTADÍSTICA IV", credits: 3, requirements: ["LM-3041"] },
                { code: "OPT-", name: "OPTATIVO", credits: 3, requirements: [] },
                { code: "XS-0128", name: "INFERENCIA BAYESIANA", credits: 4, requirements: ["XS-0125", "XS-0130", "XS-3310"] },
                { code: "XS-0134", name: "CONSTRUCCIÓN DE INDICADORES", credits: 3, requirements: ["XS-0125", "XS-0126", "XS-0133", "XS-3130", "XS-4050"] },
                { code: "XS-4410", name: "PRÁCTICA PROFESIONAL I", credits: 3, requirements: ["XS-0125", "XS-0126", "XS-0131", "XS-0133", "XS-3130", "XS-3310", "XS-4050"] }
            ]
        },
        {
            semester: "VIII CICLO",
            courses: [
                { code: "XS-4430", name: "PRÁCTICA PROFESIONAL II", credits: 4, requirements: ["XS-0128", "XS-0134", "XS-4410"] },
                { code: "XS-0132", name: "MÉTODOS PARA CIENCIA DE DATOS", credits: 4, requirements: ["XS-0126"] },
                { code: "XS-0127", name: "ANÁLISIS DE SERIES TEMPORALES", credits: 4, requirements: ["XS-0126", "XS-3310"] },
                { code: "OPT-", name: "OPTATIVO", credits: 6, requirements: [] }
            ]
        }
    ];

    // Estado de los cursos (aprobados o no)
    let coursesState = {};
    const totalCourses = curriculumData.reduce((acc, semester) => acc + semester.courses.length, 0);
    
    // Elementos del DOM
    const semestersContainer = document.querySelector('.semesters-container');
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
            curriculumData.forEach(semester => {
                semester.courses.forEach(course => {
                    coursesState[course.code] = false;
                });
            });
        }

        renderCurriculum();
        updateProgress();
    }

    // Renderizar la malla curricular
    function renderCurriculum() {
        semestersContainer.innerHTML = '';

        curriculumData.forEach(semester => {
            const semesterElement = document.createElement('div');
            semesterElement.className = 'semester';

            const semesterHeader = document.createElement('div');
            semesterHeader.className = 'semester-header';
            semesterHeader.textContent = semester.semester;

            const coursesContainer = document.createElement('div');
            coursesContainer.className = 'courses-container';

            semester.courses.forEach(course => {
                const courseElement = document.createElement('div');
                courseElement.className = 'course';
                
                // Verificar si el curso está bloqueado
                const isLocked = course.requirements.length > 0 && 
                                !course.requirements.some(req => coursesState[req]);
                
                if (isLocked) {
                    courseElement.classList.add('locked');
                } else if (coursesState[course.code]) {
                    courseElement.classList.add('completed');
                }

                const courseCode = document.createElement('div');
                courseCode.className = 'course-code';
                courseCode.textContent = course.code;

                const courseName = document.createElement('div');
                courseName.className = 'course-name';
                courseName.textContent = course.name;

                const courseCredits = document.createElement('div');
                courseCredits.className = 'course-credits';
                courseCredits.textContent = `Créditos: ${course.credits}`;

                if (course.requirements.length > 0) {
                    const courseRequirements = document.createElement('div');
                    courseRequirements.className = 'course-requirements';
                    courseRequirements.textContent = `Requisitos: ${course.requirements.join(', ')}`;
                    courseElement.appendChild(courseRequirements);
                }

                const courseToggle = document.createElement('input');
                courseToggle.type = 'checkbox';
                courseToggle.className = 'course-toggle';
                courseToggle.checked = coursesState[course.code];
                courseToggle.disabled = isLocked;
                
                courseToggle.addEventListener('change', function() {
                    coursesState[course.code] = this.checked;
                    localStorage.setItem('coursesState', JSON.stringify(coursesState));
                    renderCurriculum();
                    updateProgress();
                });

                if (isLocked) {
                    const lockIcon = document.createElement('div');
                    lockIcon.className = 'lock-icon';
                    lockIcon.innerHTML = '🔒';
                    courseElement.appendChild(lockIcon);
                }

                courseElement.appendChild(courseCode);
                courseElement.appendChild(courseName);
                courseElement.appendChild(courseCredits);
                courseElement.appendChild(courseToggle);
                coursesContainer.appendChild(courseElement);
            });

            semesterElement.appendChild(semesterHeader);
            semesterElement.appendChild(coursesContainer);
            semestersContainer.appendChild(semesterElement);
        });
    }

    // Actualizar la barra de progreso
    function updateProgress() {
        const completedCourses = Object.values(coursesState).filter(state => state).length;
        const progress = (completedCourses / totalCourses) * 100;
        
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${Math.round(progress)}% completado`;
    }

    // Reiniciar el progreso
    resetBtn.addEventListener('click', function() {
        if (confirm('¿Estás seguro de que quieres reiniciar tu progreso?')) {
            curriculumData.forEach(semester => {
                semester.courses.forEach(course => {
                    coursesState[course.code] = false;
                });
            });
            localStorage.setItem('coursesState', JSON.stringify(coursesState));
            renderCurriculum();
            updateProgress();
        }
    });

    // Inicializar la aplicación
    initCurriculum();
});
