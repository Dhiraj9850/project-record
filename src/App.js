import React,{useState} from 'react'
import Projectsidebar from './components/Projectsidebar'
import Noprojectselected from './components/Noprojectselected'
import Newproject from './components/Newproject';
import SelectedProject from './components/SelectedProject';




const App = () => {
  
  const [projectState, setProjectState] = useState({
      selectedProjectId:undefined,
      projects:[],
      tasks:[]
  });

const handleStartAddproject=()=>{
    setProjectState((prevState)=>{
       return{
          ...prevState,
          selectedProjectId:null
       }
    })
}

const handleCancelProject=()=>{
     setProjectState((prevState)=>{
        return{
           ...prevState,
           selectedProjectId:undefined
        }
     })
}

const handleSelectProject=(id)=>{
     setProjectState((prevState)=>{
        return{
           ...prevState,
           selectedProjectId:id
        }
     })
}

const handleAddProject=(projectData)=>{
   setProjectState(prevState=>{
      const projectId = Math.random();
      const newproject = {
          ...projectData,
          id:projectId
      }

       return{
          ...prevState,
          selectedProjectId:undefined,
          projects:[...prevState.projects,newproject]
       }
   })
}

const handleDeleteproject=()=>{
    setProjectState((prevState)=>{
        return{
           ...prevState,
           selectedProjectId:undefined,
           projects:prevState.projects.filter((project)=>project.id !== prevState.selectedProjectId)
         }
    })
}

const handleAddTask=(text)=>{
   setProjectState(prevState=>{
      const taskId= Math.random();
 
      const newTask={
         text:text,
         projectId:prevState.selectedProjectId,
         id:taskId
      }

      return{
         ...prevState,
         tasks:[newTask,...prevState.tasks]
      }
   })
}

const handleDeleteTask=(id)=>{
   setProjectState((prevState)=>{
      return{
         ...prevState,
         tasks:projectState.tasks.filter((task)=>task.id !== id)
      }

   })
}

const selectedProject = projectState.projects.find((project)=>project.id=== projectState.selectedProjectId)
let content = <SelectedProject project={selectedProject} onDelete={handleDeleteproject} onAddTask={handleAddTask} tasks={projectState.tasks} onDeleteTask={handleDeleteTask}/>;

if(projectState.selectedProjectId === null){
   content = <Newproject onAdd={handleAddProject} onCancel={handleCancelProject}/>
}
else if(projectState.selectedProjectId === undefined){
   content =  <Noprojectselected onStartaddProject={handleStartAddproject}/>
}

  return (
    <main className="h-screen flex gap-8">
        <Projectsidebar onStartaddProject={handleStartAddproject} projects={projectState.projects} onSelect={handleSelectProject}/>
       {content}
    </main>
  )
}

export default App