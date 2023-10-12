import {useState} from 'react';
import AgecalForm from './AgecalForm';
import Ageres from './Ageres';
import {differenceInYears} from 'date-fns'

function App() 
{
  const [age,setAge]=useState(null);
  const calcAge=(birthDate)=>{
    const today= new Date();
    const birthDateObj= new Date(birthDate);
    const ageYears=differenceInYears(today,birthDateObj);
    new Date(today.getFullYear(),today.getMonth(),birthDateObj.getDate());
    setAge({
      years:ageYears

    }) ;

  };
  
  return (
    <center >
      <h1>Age Calulator</h1>
      <AgecalForm calcAge={calcAge}/>
      {age && <Ageres age={age}/>}
      
    </center>
  );
}

export default App;
