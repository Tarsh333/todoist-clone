const Reducer =(state,action)=>{
    if (action.type==='CHANGE_OPEN') {
        return {...state , opened:action.payload}
    }
    if (action.type==='REMOVE_TASK') {
        const newTasks=state.tasks.filter(task=>task.id!==action.payload)
        return {...state , tasks:newTasks}
    }
    if (action.type==='ADD_PROJECT') {
        return {...state , projects:[...state.projects,action.payload]}
    }
    if (action.type==='DELETE_PROJECT') {
        const newProjects=state.projects.filter(proj=>proj!==action.payload)
        if (state.opened===action.payload) {
            return {...state , projects:newProjects,opened:'inbox'}
        }
        return {...state , projects:newProjects}
    }
    if (action.type==='ADD_TASK') {
        return {...state , tasks:[...state.tasks,{time:action.payload.time,project:action.payload.project,title:action.payload.title,id:action.payload.id}]}
    }
}
export default Reducer