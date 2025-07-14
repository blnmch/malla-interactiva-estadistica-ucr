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
            /* ... (todos los demás ciclos permanecen igual) ... */
        ],
        optativos: [
            /* ... (todos los cursos optativos permanecen igual) ... */
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
            createCourseElement(curso, optativesContainer);
        });

        updateProgress();
    }

    // Crear elemento de curso
    function createCourseElement(curso, container) {
        const cursoElement = document.createElement('div');
        cursoElement.className = 'curso';
        cursoElement.dataset.codigo = curso.codigo;
        
        // Verificar si el curso está aprobado
        if (cursosAprobados.includes(curso.codigo)) {
            cursoElement.classList.add('completed');
            creditosAprobados += curso.creditos;
        } else {
            // Verificar requisitos
            const requisitosCumplidos = curso.requisitos.every(req => cursosAprobados.includes(req));
            const correquisitosCumplidos = curso.correquisitos.every(corr => cursosAprobados.includes(corr));
            
            if (requisitosCumplidos && correquisitosCumplidos) {
                cursoElement.classList.add('unlocked');
            } else {
                cursoElement.classList.add('locked');
            }
        }
        
        // Contenido del curso
        cursoElement.innerHTML = `
            <div class="curso-code">${curso.codigo}</div>
            <div class="curso-name">${curso.nombre}</div>
            <div class="curso-credits">${curso.creditos} créditos</div>
            ${cursoElement.classList.contains('locked') ? 
                `<div class="curso-requisitos">
                    ${curso.requisitos.length > 0 ? `Requisitos: ${curso.requisitos.join(', ')}` : ''}
                    ${curso.correquisitos.length > 0 ? `Correquisitos: ${curso.correquisitos.join(', ')}` : ''}
                </div>` : ''}
        `;
        
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
