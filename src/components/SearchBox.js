
const SearchBox = (props) => {
  return (  
    <div>
      <input placeholder='Search Movies' 
             value={props.value}
             onChange={(event)=>props.setSearchValue(event.target.value)}/>
    </div>
  );
}
 
export default SearchBox;