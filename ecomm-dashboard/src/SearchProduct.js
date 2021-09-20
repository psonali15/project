import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header';
import { Table } from 'react-bootstrap';

function SearchProduct()
{
	const [data, setData] = useState([]);

     async function searchData(key){
       
       let result = await fetch("http://127.0.0.1:8000/api/search/"+ key);

       result = await result.json();

       console.warn(result);

       setData(result);


	}
	return(
		<>
		 <Header />
		<div className="col-sm-6 offset-sm-3">
		     <h1>Search Product</h1>
		     <input type="text" onChange={(e)=>{searchData(e.target.value)}} className="form-control" placeholder="Search Product" />
 	<br/>
 	
 	<Table className="stripped">
		<thead>
		 <tr>
		 <td>Id</td>
		 <td>Name</td>
		 <td>Price</td>
		 <td>Description</td>
		 <td>Image</td>
		 
		 </tr>
		</thead>
		<tbody>
		{
			data.map((item)=>
               <tr>
               <td>{item.id}</td>
               <td>{item.name}</td>
               <td>{item.price}</td>
               <td>{item.description}</td>
               <td><img src={"http://127.0.0.1:8000/" + item.file_path} /></td>
              
		</tr>
			)
		
		}
		</tbody>
		</Table>

		</div>
		</>
	)
}
export default SearchProduct;