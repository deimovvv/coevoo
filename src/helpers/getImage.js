import projects from "../data/projects"


const getImage = (image) => {

    return projects.find(project => project.image === image)


}


export default getImage