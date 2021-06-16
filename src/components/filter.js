const Filter = ({handleOrdering, handleDirection}) => {
  return (
    <div>
      <span>Order by: </span>
      <select name='Ordering' id="choose_ordering" onChange={handleOrdering} defaultValue={''}>
        <option value=''></option>
        <option value="released">Release Date</option>
        <option value="name">Name</option>
        <option value="rating">Rating</option>
      </select>
      <select name='Direction' id="choose_direction" onChange={handleDirection} defaultValue={1}>
        <option value={''}>Ascendent</option>
        <option value={'-'}>Descendent</option>
      </select>
    </div>
  );
};

export default Filter;