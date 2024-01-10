import services from '../data/services'


export const getServices = ( category ) => {

    if (!category) {
        return services; // Mostrar todos los proyectos sin filtro
      }
    
    return services.filter(service => service.category === category)

}



