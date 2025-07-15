document.addEventListener('DOMContentLoaded', function() {
    // Variables para llevar el conteo de créditos
    let totalCredits = 0;
    const totalCreditsElement = document.getElementById('total-credits');
    
    // Obtener todos los cursos
    const courses = document.querySelectorAll('.course');
    
    // Cargar cursos aprobados desde localStorage
    const completedCourses = JSON.parse(localStorage.getItem('completedCourses')) || [];
    const approvedCredits = parseInt(localStorage.getItem('approvedCredits')) || 0;
    totalCredits = approvedCredits;
    totalCreditsElement.textContent = totalCredits;
    
    // Marcar cursos aprobados al cargar la página
    completedCourses.forEach(courseCode => {
        const courseElement = document.querySelector(`.course[data-code="${courseCode}"]`);
        if (courseElement) {
            markCourseAsCompleted(courseElement);
        }
    });
    
    // Actualizar estado de todos los cursos (bloqueados/desbloqueados)
    updateCourseStatus();
    
    // Agregar event listeners a los cursos
    courses.forEach(course => {
        course.addEventListener('click', function() {
            if (this.classList.contains('locked')) return;
            
            if (this.classList.contains('completed')) {
                unmarkCourseAsCompleted(this);
            } else {
                markCourseAsCompleted(this);
            }
            
            // Actualizar estado de todos los cursos después de cambiar uno
            updateCourseStatus();
            
            // Actualizar créditos totales
            totalCreditsElement.textContent = totalCredits;
            
            // Guardar en localStorage
            saveProgress();
        });
    });
    
    // Función para marcar un curso como completado
    function markCourseAsCompleted(courseElement) {
        if (!courseElement.classList.contains('completed')) {
            courseElement.classList.add('completed');
            const credits = parseInt(courseElement.getAttribute('data-credits'));
            totalCredits += credits;
            
            // Agregar a la lista de cursos completados si no está ya
            const courseCode = courseElement.getAttribute('data-code');
            if (!completedCourses.includes(courseCode)) {
                completedCourses.push(courseCode);
            }
        }
    }
    
    // Función para desmarcar un curso como completado
    function unmarkCourseAsCompleted(courseElement) {
        if (courseElement.classList.contains('completed')) {
            courseElement.classList.remove('completed');
            const credits = parseInt(courseElement.getAttribute('data-credits'));
            totalCredits -= credits;
            
            // Remover de la lista de cursos completados
            const courseCode = courseElement.getAttribute('data-code');
            const index = completedCourses.indexOf(courseCode);
            if (index > -1) {
                completedCourses.splice(index, 1);
            }
        }
    }
    
    // Función para actualizar el estado de todos los cursos (bloqueados/desbloqueados)
    function updateCourseStatus() {
        courses.forEach(course => {
            // Si el curso ya está completado, no hacer nada
            if (course.classList.contains('completed')) return;
            
            // Verificar requisitos
            const requirements = course.getAttribute('data-requirements');
            const corequisites = course.getAttribute('data-corequisites');
            
            let requirementsMet = true;
            let corequisitesMet = true;
            
            // Verificar requisitos principales
            if (requirements) {
                // Los requisitos pueden ser grupos separados por comas (AND) y opciones separadas por | (OR)
                const requirementGroups = requirements.split(',');
                
                for (const group of requirementGroups) {
                    const options = group.split('|').map(opt => opt.trim());
                    const groupMet = options.some(opt => completedCourses.includes(opt));
                    
                    if (!groupMet) {
                        requirementsMet = false;
                        break;
                    }
                }
            }
            
            // Verificar correquisitos (si existen)
            if (corequisites) {
                const coreqGroups = corequisites.split(',');
                
                for (const group of coreqGroups) {
                    const options = group.split('|').map(opt => opt.trim());
                    const groupMet = options.some(opt => completedCourses.includes(opt));
                    
                    if (!groupMet) {
                        corequisitesMet = false;
                        break;
                    }
                }
            }
            
            // Actualizar estado del curso
            if (requirements && !requirementsMet) {
                course.classList.add('locked');
            } else {
                course.classList.remove('locked');
            }
        });
    }
    
    // Función para guardar el progreso en localStorage
    function saveProgress() {
        localStorage.setItem('completedCourses', JSON.stringify(completedCourses));
        localStorage.setItem('approvedCredits', totalCredits.toString());
    }
    
    // Botón para resetear todo (opcional)
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reiniciar Progreso';
    resetButton.style.display = 'block';
    resetButton.style.margin = '20px auto';
    resetButton.style.padding = '10px 20px';
    resetButton.style.backgroundColor = '#f44336';
    resetButton.style.color = 'white';
    resetButton.style.border = 'none';
    resetButton.style.borderRadius = '5px';
    resetButton.style.cursor = 'pointer';
    
    resetButton.addEventListener('click', function() {
        if (confirm('¿Estás seguro de que quieres reiniciar todo tu progreso?')) {
            // Limpiar localStorage
            localStorage.removeItem('completedCourses');
            localStorage.removeItem('approvedCredits');
            
            // Reiniciar variables
            completedCourses.length = 0;
            totalCredits = 0;
            totalCreditsElement.textContent = '0';
            
            // Quitar clases de completado y bloqueado
            courses.forEach(course => {
                course.classList.remove('completed', 'locked');
            });
            
            // Actualizar estado de los cursos
            updateCourseStatus();
        }
    });
    
    document.querySelector('.container').appendChild(resetButton);
});
