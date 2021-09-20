import React, {useState, useEffect} from 'react';
import Header from './Header';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProductList()
{
	const [data, setData] = useState([]);
	useEffect(  () => {
	    getData();
	}, []);

  async function getData(){
	  let result = await fetch("http://127.0.0.1:8000/api/list");
	    result = await result.json();
		setData(result);
	}

 async function deleteOperation(id){
   let result = await fetch('http://127.0.0.1:8000/api/delete/'+id, {
 		method : "DELETE",
 	})
    result = await result.json();
    getData();
 }
 
  console.warn('result',data);
	return(
		<>
		 <Header />
		<div className="col-sm-8 offset-sm-2">
		<h1>Product List</h1>
		<Table className="stripped">
		<thead>
		 <tr>
		 <td>Id</td>
		 <td>Name</td>
		 <td>Price</td>
		 <td>Description</td>
		 <td>Image</td>
		 <td>Action</td>
		 </tr>
		</thead>
		<tbody>
		{
			data.map((item,i)=>
               <tr key={i}>
               <td>{item.id}</td>
               <td>{item.name}</td>
               <td>{item.price}</td>
               <td>{item.description}</td>
               <td><img src={"http://127.0.0.1:8000/" + item.file_path} /></td>
               <td>
               <Link to={"update/"+ item.id}>
               <span className="btn btn-success btn-sm">Update</span>
               </Link>
               <span onClick={()=>deleteOperation(item.id)} className="btn btn-danger btn-sm">Delete</span></td>
		</tr>
			)
		
		}
		</tbody>
		</Table>
		</div>
		</>
	)
}
export default ProductList;