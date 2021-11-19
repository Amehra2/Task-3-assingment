function App(){

  const [treatId, settreatId] = React.useState('');

  const [treatCourseId, settreatCourseId] = React.useState('');

  const [type, settype] = React.useState('');

  const [category, setcategory] = React.useState('');

  const [name, setname] = React.useState('');

  const [startDate, setstartDate] = React.useState('');

  function showClickHandler () {
    window.alert("[" + "id = "+ treatId + ", treatCourseId = "+treatCourseId+ ", type = "+ type + ", category = "+category + " , name = "+name+ " , startDate = "+startDate + "]");
  
  }

  function clearClickHandler () {
    settreatId('');
    settreatCourseId('');
    settype('');
    setcategory('');
    setname('');
    setstartDate('');
}

  return(
    <div>

        <input placeholder="treatId" value={treatId}  onChange = { e => settreatId(e.target.value)}  ></input>

        <br/>

        <input placeholder="treatCourseId" value={treatCourseId}  onChange = { e => settreatCourseId(e.target.value)}  ></input>

        <br/>

        <input placeholder="type" value={type}  onChange = { e => settype(e.target.value)}  ></input>
        
        <br/>

        <input placeholder="category" value={category}  onChange = { e => setcategory(e.target.value)}  ></input>

        <br/>

        <input placeholder="name" value={name}  onChange = { e => setname(e.target.value)}  ></input>

        <br/>

        <input placeholder="startDate" value={startDate}  onChange = { e => setstartDate(e.target.value)}  ></input>
        <button style={{color:"blue"}} onClick={showClickHandler}>show</button>

      <button style={{color:"red"}} onClick={clearClickHandler}>Clear</button>

   

        </div>
    );

  }
  
  export default App;
