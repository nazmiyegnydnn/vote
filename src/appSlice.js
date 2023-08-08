import { createSlice } from '@reduxjs/toolkit' 

const initialState = { //dizimiz depomuz burada
    product: [
        {
            id:1,
            name: "tolga"
        },
        {
            id:2,
            name: "tolga"
        }
    ],
}
  

  export const appSlice =  createSlice({ //appslice kendi dosyomızın ismine göre değişitir.
    name: 'app',   //appslice kendi dosyomızın ismine göre değişitir.
    initialState,
    reducers: {
            // kull olay //
             addcategory : (state , action)  => {
            state.category = [...state.category , {id:3 , name: "c3"}]  
        }
        
    }
  })

  export const {addcategory } = appSlice.actions  //appslice kendi dosyomızın ismine göre değişitir.//olayı gönderiyoruz

  export default appSlice.reducer  //appslice kendi dosyomızın ismine göre değişitir.