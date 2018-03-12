
let _name;

const searchBar=(props)=>(
  <div style={{marginTop:'10px'}}>
      <input type="text" ref={input=>_name=input} style={{minWidth:'400px'}} placeholder="enter planet name to search"/>
      <button onClick={()=>props.searchHandler(_name.value)}>Search</button>
  </div>
);

export default searchBar;
