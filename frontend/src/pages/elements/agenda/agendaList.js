// import { useState, useEffect, useRef } from "react";
// import * as React from "react";
// import IconButton from "@mui/material/IconButton";
// import DeleteIcon from "@mui/icons-material/Delete";
// import Fab from "@mui/material/Fab";
// import EditIcon from "@mui/icons-material/Edit";
// import AddIcon from "@mui/icons-material/Add";
// import TextField from "@mui/material/TextField";
// import css from "../agenda/agendaList.module.css"
// import CloseIcon from "@mui/icons-material/Close";
// import CheckIcon from "@mui/icons-material/Check";
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { TimeField } from '@mui/x-date-pickers/TimeField';
// import dayjs from 'dayjs';



// const AgendaList = () => {

// const [newItem, setNewItem] = useState({ attributes: { theme: "", time:"" } });
//   const [data, setData] = useState(null);
//   const [inputError, setInputError] = useState(false);
//   const [editModeMap, setEditModeMap] = useState({});
//   const [editedItemMap, setEditedItemMap] = useState({});
//   const [deleteConfirmationMap, setDeleteConfirmationMap] = useState({});
//   const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));
//   const inputRef = useRef({});
  

  
//     useEffect(() => {
//       fetch("http://localhost:1337/api/lessons")
//         .then((response) => response.json())
//         .then((data) => {
//           setData(data);
//         })
//         .catch((error) => {
//             console.error(error);
//         });
//     }, []);
    
    


//     const fetchData = () => {
//         fetch("http://localhost:1337/api/lessons")
//           .then((response) => response.json())
//           .then((data) => {
//             setData(data);
//           })
//           .catch((error) => {
//             console.error(error);
//           });
//       };
//       useEffect(() => {
//         fetchData();
//       }, []);




//     const handleChange = (id) => {
//   setEditModeMap((prevEditModeMap) => ({
//     ...prevEditModeMap,
//     [id]: false,
//   }));
//   setEditedItemMap((prevEditedItemMap) => ({
//     ...prevEditedItemMap,
//     [id]: "",
//   }));


    
//   };

//   const handleAddItem = () => {
//     if (newItem.attributes.theme.trim() === "") {
//       setInputError(true);
//       return;
//     }
    
  
//     fetch("http://localhost:1337/api/lessons", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ data: newItem.attributes }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Success:", data);
//         setNewItem({ attributes: { theme: "", time: "" } });
//         setInputError(false);
//         fetchData();
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };


//   const handleInputChange = (event) => {
//     if (event.target.value !== "") {
//       setInputError(false);
//     }

//     setNewItem((prevNewItem) => ({
//       ...prevNewItem,
//       attributes: {
//         ...prevNewItem.attributes,
//         theme: event.target.value,
//       },
//     }));
//     inputRef.current.focus();
//   };
  
//   const handleDeleteItem = (id) => {
//     if (deleteConfirmationMap[id]) {
//       fetch(`http://localhost:1337/api/lessons/${id}`, {
//         method: "DELETE",
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           console.log("Success:", data);
//           fetchData();
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//         });
//     } else {
// setDeleteConfirmationMap((prevDeleteConfirmationMap) => ({
//         ...prevDeleteConfirmationMap,
//         [id]: true,
//       }));

//     }
    
//   };



//   const handleEditItem = (item) => {
//     setEditModeMap((prevEditModeMap) => ({
//       ...prevEditModeMap,
//       [item.id]: true,
//     }));
//     setEditedItemMap((prevEditedItemMap) => ({
//       ...prevEditedItemMap,
//       [item.id]: item.attributes.theme,
//     }));
//   };


//   const handleSaveItem = (id) => {
//     const updatedItem = {
//       ...data.data.find((item) => item.id === id),
//       attributes: {
//         ...data.data.find((item) => item.id === id).attributes,
//         theme: editedItemMap[id],
//       },
//     };

//     fetch(`http://localhost:1337/api/lessons/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ data: updatedItem.attributes }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Success:", data);
//         setEditModeMap((prevEditModeMap) => ({
//           ...prevEditModeMap,
//           [id]: false,
//         }));
//         setEditedItemMap((prevEditedItemMap) => ({
//           ...prevEditedItemMap,
//           [id]: "",
//         }));
//         fetchData();
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   const handleKeyDown = (event, id) => {
//     if (event.key === "Enter") {
//       handleSaveItem(id);
//     } else if (event.key === "Escape") {
//       handleSaveItem(id);
//     }
//   };



//   return (
//     <>
//       <ul className={css.agenda__list}>
//         {data &&
//           data.data.map((item) => (
//             <li className={css.agenda__item} key={item.id}>
//               {deleteConfirmationMap[item.id] ? (
//                 <>
//                 <span>{item.attributes.theme}</span>
//                 <div  className={css.button__list}>
//                   <IconButton
//                     aria-label="cancel-delete"
//                     size="small"
//                     onClick={() =>
//                       setDeleteConfirmationMap((prevDeleteConfirmationMap) => ({
//                         ...prevDeleteConfirmationMap,
//                         [item.id]: false,
//                       }))
//                     }
//                   >
//                     <CloseIcon />
//                   </IconButton>
//                   <IconButton
//                     aria-label="confirm-delete"
//                     size="small"
//                     onClick={() => handleDeleteItem(item.id)}
//                   >
//                     <CheckIcon />
//                   </IconButton>
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   {editModeMap[item.id] ? (
//                     <TextField
//                       type="text"
//                       autoFocus
//                       value={editedItemMap[item.id]}
//                       onChange={(e) =>
//                         setEditedItemMap((prevEditedItemMap) => ({
//                           ...prevEditedItemMap,
//                           [item.id]: e.target.value,
//                         }))
//                       }
//                       onBlur={() => handleSaveItem(item.id)}
//                       onKeyDown={(e) => handleKeyDown(e, item.id)}
//                     />
//                   ) : (
//                     <>
//                       <span>{item.attributes.theme}</span>
//                       <div className={css.button__list}>
//                       <IconButton
//                         aria-label="edit"
//                         size="small"
//                         onClick={() => handleEditItem(item)}
//                       >
//                         <EditIcon />
//                       </IconButton>
//                       <IconButton
//                         aria-label="delete"
//                         size="small"
//                         onClick={() =>
//                           setDeleteConfirmationMap((prevDeleteConfirmationMap) => ({
//                             ...prevDeleteConfirmationMap,
//                             [item.id]: true,
//                           }))
//                         }
//                       >
//                         <DeleteIcon />
//                       </IconButton>
//                       </div>
//                     </>
//                   )}
//                 </>
//               )}
//             </li>
//           ))}
//       </ul>
//       <div className = {css.inputBox}>
//         { inputError ? 
//         <>
//         <TextField
//        error
//        id="outlined-error"
              
//         label="Error"
//         helperText="Incorrect entry."
//        value = {newItem.attributes.theme || ''}
//         autoFocus
//         onChange={handleInputChange} 
//         inputRef={inputRef} 
//       />
//         <Fab
//         size="small"
//         color="secondary"
//         aria-label="add"
//         onClick={handleAddItem}
//       >
//         <AddIcon />
//       </Fab>
//       </>
//          : (
//           <>
//         <TextField
//         autoFocus
//           type="text"
//           helperText="Add theme."
//          label="Theme"
//           value={newItem.attributes.theme}
//           onChange={(e) =>
//             setNewItem({
//               ...newItem,
//               attributes: { ...newItem.attributes, theme: e.target.value },
//             })
            
            
//           }
          
//         />
// <Fab
//         size="small"
//         color="secondary"
//         aria-label="add"
//         onClick={handleAddItem}
//       >
//         <AddIcon />
//       </Fab>
     
//       </>
//         )
        
//         }
      
//       </div>
      
//     </>
//   );

// }
// export default AgendaList