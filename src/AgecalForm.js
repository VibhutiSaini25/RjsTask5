import {useState} from "react";
import PropTypes from "prop-types";
const AgecalForm=({calcAge})=>{
    const [birthDate,setBirthDate]=useState(' ');
    const handleChangeDate=(e)=>{
        setBirthDate(e.target.value);
    }; 
    const handleSubmit=(e)=>{
        e.preventDefault();
        calcAge(birthDate);

    };
    return (
        <form
          onSubmit={handleSubmit}
          
        >
          <input
            
            value={birthDate}
            type='date'
            onChange={handleChangeDate}
          />
          <br/>
          <button
           
            disabled={!birthDate}
            type='submit'
          >
            Calculate Age
          </button>
        </form>
      );
        
    
};
AgecalForm.protoTypes={
    calcAge:PropTypes.func.isRequired,
};
export default AgecalForm;