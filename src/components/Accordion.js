//import React, { useState } from "react";

import { useState } from "react";

// // function Accordion() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleSection = (index) => {
//     console.log(index)
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const sections = [
//     { title: "Section 1", content: "This is the content of section 1." },
//     { title: "Section 2", content: "This is the content of section 2." },
//     { title: "Section 3", content: "This is the content of section 3." },
//   ];

//   return (
//     <div>
//       {sections.map((section, index) => (
//         <div key={index}>
//           <div
//             onClick={() => toggleSection(index)}
//             style={{
//               cursor: "pointer",
//               backgroundColor: "#f0f0f0",
//               padding: "10px",
//             }}
//           >
//             {section.title}
//           </div>
//           {openIndex === index && (
//             <div style={{ padding: "10px", border: "1px solid #ddd" }}>
//               {section.content}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// // }
const Accordion = () =>{
    const [openIndex, setOpenIndex] = useState(null)

    const sections = [
            { title: "Section 1", content: "This is the content of section 1." },
            { title: "Section 2", content: "This is the content of section 2." },
            { title: "Section 3", content: "This is the content of section 3." },
          ]; 

          function toggleSection(index){
            setOpenIndex(openIndex===index ? null: index)
          }

    return (
        <div>
         {sections.map((section,index) => (
            <div key={index}>
                <div onClick = {()=>toggleSection(index)} 
                    style={{  cursor: "pointer", backgroundColor: "#f0f0f0", padding: "10px"}}
                                    >{section.title}</div>
                
                {openIndex===index? <div style={{ padding: "10px", border: "1px solid #ddd" }}>{section.content}</div>:null}
                </div>
         ))}
        </div>
        
    )
}

export default Accordion;
