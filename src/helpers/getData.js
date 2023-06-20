import projects from '../data/projects'


export const getData = ( publisher ) => {


    const validPublisers = ['collaborations']
    if(!validPublisers.includes(publisher)){
        throw new Error(`${ publisher } is not valid publiser`)
    }

    return projects.filter(project => project.publisher)

}



