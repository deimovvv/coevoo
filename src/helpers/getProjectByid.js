import projects from "../data/projects"


const getProjectByid = (id) => {

    return projects.find(project => project.id === id)


}


export default getProjectByid