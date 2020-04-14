const AdminReducer = (state,action) =>{
    switch(action.type){
        case 'CHANGE_MODE':
            return state === 'dark' ? state = 'light' : state = 'dark' 
        default :
            return state
        }
}

export default AdminReducer;