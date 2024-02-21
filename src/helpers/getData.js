import projects from '../data/projects'


export const getData = ( category ) => {

    if (!category) {
        return projects; // Mostrar todos los proyectos sin filtro
      }
    


    const validCategory = ['collaborations', 'All', 'Videoclips', 'VR / AR','Virtual Production', '3D & Environment']

    if(!validCategory.includes(category)){
        throw new Error(`${ category } is not valid category`)
    }

    return projects.filter(project => project.category === category)

}



