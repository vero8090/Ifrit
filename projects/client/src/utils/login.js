import axios from "axios"

export const LoginAccount = async(inputEmail,inputPassword, toogle)=>{
   
    
    try {
         let response = toogle==true?
         await axios.post('http://localhost:8000/admin/login', {email:inputEmail,password:inputPassword})
          :
          console.log('user') // taro disini buat API user
            
          console.log(response)
            
            return{
                response:response.data.message,
                id:response.data.data.token,
                username:response.data.data.username,
                role:response.data.data.role
            }  
        }
     catch (error) {
           return{
            response:error.response.data.message
           }
    }
    
        
   
}