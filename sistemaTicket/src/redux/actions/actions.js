import tickets from "../../../tickets.json";//
import {
  GETALLTICKETS,
  GETBYID,
  POSTTICKETS,
  SEARCHNAME,
} from "../actionsTypes/index";
import axios from "axios";
//______________________________________________________________
// ANDA OK
export const getAlltickets = () => {
  
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/tickets");

      return dispatch({
        type: GETALLTICKETS,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching tickets:", error.response.data);
    }
  };
};
//________________________NO FUNCIONA_________________________________________________
export const getById = (id) => {
  return async (dispatch) => {
    try {
      //NO TERMINADO LA FUNCION DE LOGICA
      const ticket = tickets.data.find((ticket) => ticket.id === Number(id));

      return dispatch({
        type: GETBYID,
        payload: ticket,
      });
    } catch (error) {
      console.error(`Error fetching ticket with ID ${id}:`, error);
    }
  };
};
//_____________________________________________________________________________
// ANDA OK
export const postTickets = (ticket) => {

  return async (dispatch) => {
    try {
      const newTicket = await axios.post(
        "http://localhost:3001/tickets",
        ticket
      );;
      console.log("llego el posteo?-->", newTicket.data);
      return dispatch({
        type: POSTTICKETS,
        payload: newTicket.data,
      });
    } catch (error) {
      console.error("Error posting ticket:", error);
    }
  };
};

//_______________________________SEARCH____________________________________
// ANDA OK
export const getAllByName = (name) =>{
    return async (dispatch)=> {
        try {
            const response = await axios.get(
              `http://localhost:3001/tickets/search?name=${name}`
            );
            return dispatch({
              type: SEARCHNAME,
              payload: response.data,
            });
        } catch (error) {
            alert(error.response.data.error)
            
        }
        
      }
}

/////////////////////////////      FALLIDOS      /////////////////////////////////////////////
// import axios from "axios";
// import { GETALLTICKETS, GETBYID, POSTTICKETS } from "../actionsTypes/index";

// // Función para obtener el token de autorización
// let getAuthToken = async () => {
//   const credentials = {
//     username: "ivana123",
//     password: "ivana123",
//   };
  
//   const authResponse = await axios.post(":4443/api/v2", credentials);
 
//   return authResponse.data.token;
// };



// // Función para realizar solicitudes con autorización
// const authorizedRequest = async (url, method = "get", data = null) => {
//   const token = await getAuthToken();
//   console.log("estoy cansado viejo", token);

//   const headers = {
//     Authorization: `Bearer ${token}`,
//     "Content-Type": "application/json",
//   };

//   const axiosConfig = { url, method, headers, data };

//   return axios(axiosConfig);
// };
// // ------------------------------------------------------------------------------------------
// // poner try cach a todas las actions para ver los errrores
// export const getAlltickets = ()=>{
//   return async (dispatch)=> {
//     try{
//     const response = await authorizedRequest("/tickets");
//     return dispatch({
//       type: GETALLTICKETS,
//       payload: response.data,
//     });
//   } catch(error){
//     console.error("Error fetching tickets:", error.response.data);
//   }
//   }
// }
// // _________________________________________________
// export const getById = (id) => {
//   return async (dispatch) => {
//     try {
//        const response = await authorizedRequest(`/tickets/${id}`);
//        return dispatch({
//          type: GETBYID,
//          payload: response.data,
//        });
//     } catch (error) {
//       console.error(`Error fetching ticket with ID ${id}:`, error);
//     }
   
//   };
// };
// // __________________________________________________________-
// export const postTickets = (ticket) => {
//   console.log("que llego en postTickets action? -->", ticket)
//   return async (dispatch) => {
//     try {
//       const response = await authorizedRequest("/tickets", "post", ticket);
//       console.log("que me devuelve el response de la api?-->", response.data)
//       return dispatch({
//         type: POSTTICKETS,
//         payload: response.data,
//       });
//     } catch (error) {
//       console.error("Error posting ticket:", error);
//     }
    
//   };
// };

//------------------------------------------------------------------------

// import axios from "axios";
// import { GETALLTICKETS, GETBYID, POSTTICKETS } from "../actionsTypes/index";


// // ------------------------------------------------------------------------------------------
// // poner try cach a todas las actions para ver los errrores
// export const getAlltickets = () => {
//   return async (dispatch) => {
//     try {
//       const response = await authorizedRequest("/tickets");
//       return dispatch({
//         type: GETALLTICKETS,
//         payload: response.data,
//       });
//     } catch (error) {
//       console.error("Error fetching tickets:", error.response.data);
//     }
//   };
// };
// // _________________________________________________
// export const getById = (id) => {
//   return async (dispatch) => {
//     try {
//       const response = await authorizedRequest(`/tickets/${id}`);
//       return dispatch({
//         type: GETBYID,
//         payload: response.data,
//       });
//     } catch (error) {
//       console.error(`Error fetching ticket with ID ${id}:`, error);
//     }
//   };
// };
// // __________________________________________________________-
// export const postTickets = (ticket) => {
//   console.log("que llego en postTickets action? -->", ticket);
//   return async (dispatch) => {
//     try {
//       const response = await axios.post("/tickets", ticket);
//       console.log("que me devuelve el response de la api?-->", response.data);
//       return dispatch({
//         type: POSTTICKETS,
//         payload: response.data,
//       });
//     } catch (error) {
//       console.error("Error posting ticket:", error);
//     }
//   };
// };


// ---------------------------------------

