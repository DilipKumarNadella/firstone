import React from "react";
const Searchbox=({searchchange})=>{
    return(
        <div className="p-2">
<input className="py-2 px-3  bg-blue-200 "
 type='search'
  placeholder="search robots"
  onChange={searchchange}
/>
</div>
    );
}
export default Searchbox;