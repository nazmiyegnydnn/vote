import { createSlice } from '@reduxjs/toolkit' 

const initialState = { //dizimiz depomuz burada
    todos: [],
}
  

  export const appSlice =  createSlice({ //appslice kendi dosyomızın ismine göre değişitir.
    name: 'app',   //appslice kendi dosyomızın ismine göre değişitir.
    initialState,
    reducers: {
            // kull olay //
            submitTodoHandler : (state , action)  => {
            state.todos = [...state.todos ,  action.payload] 
        
        }
    
    }
  })

  export const {submitTodoHandler } = appSlice.actions  //appslice kendi dosyomızın ismine göre değişitir.//olayı gönderiyoruz

  export default appSlice.reducer  //appslice kendi dosyomızın ismine göre değişitir.