import React from 'react';




function MedicalTreatmentPanel() {


  const [treatId, setTreatId] = React.useState('');

  const [treatCourseId, setTreatCourseId] = React.useState('');

  const [type, setType] = React.useState('');

  const [category, setCategory] = React.useState('');

  const [name, setName] = React.useState('');

  const [startDate, setStartDate] = React.useState('');
  const [display, setDisplay] = React.useState();


  const handleTreatChange = e => setTreatId(e.target.value)
  const handleTreatCourseIdChange = e => setTreatCourseId(e.target.value)
  const handleTypeChange = e => setType(e.target.value)
  const handleCategoryChange = e => setCategory(e.target.value)
  const handleNameChange = e => setName(e.target.value)
  const handleStartDatechange = e => setStartDate(e.target.value)
  const handleDisplay = e => setDisplay("hello")
  


  function ShowClickHandler () {
    if(display === "hello"){
      return(
      <h1> 

<li>{treatId}</li>
<li>{treatCourseId}</li>
<li>{type}</li>
<li>{category}</li>
<li>{name}</li>
<li>{startDate}</li>


      </h1> 
      )
    }
    return null;

  
      
   
   
}


function clearClickHandler () {
    setTreatId('');
    setTreatCourseId('');
    setType('');
    setCategory('');
    setName('');
    setStartDate('');
    setDisplay();

}




  return(
    <div>

        <input placeholder="treatId" value={treatId}  onChange = {handleTreatChange}   ></input>

        <br/>

        <input placeholder="treatCourseId" value={treatCourseId} onChange={handleTreatCourseIdChange}  ></input>

        <br/>

        <input placeholder="type" value={type}  value={type} onChange={handleTypeChange}  ></input>
        
        <br/>

        <input placeholder="category" value={category}  onChange={handleCategoryChange} ></input>
        <br/>

        <input placeholder="name" value={name}  onChange = {handleNameChange}  ></input>

        <br/>

        <input placeholder="startDate" value={startDate}  onChange = {handleStartDatechange}  ></input>

        <button style={{color:"blue"}} onClick={handleDisplay}>show</button>

      <button style={{color:"red"}} onClick={clearClickHandler}>Clear</button>
      < ShowClickHandler />
        </div>
    
    );

  }


  
  export default MedicalTreatmentPanel;
