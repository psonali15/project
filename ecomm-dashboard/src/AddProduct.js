import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header';

function AddProduct()
{
	const history = useHistory();

	useEffect(() => {

		if (localStorage.getItem("product-info")) {

			history.push('/add');
		}

	}, []);

	const [name, setName] = useState("");
	const [file, setFile] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");

	async function addNewProduct(e)
	{
		//let item = {name,file, description, price}

		console.warn(name,file, description, price);
        
        const formData = new FormData();

        formData.append('file', file);
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);

	   let result = await fetch('http://127.0.0.1:8000/api/addproduct',{
			method : "POST",
			body : formData
			// headers : {
			// 	"Content-Type" : "application/json",
			// 	"Accept" : "application/json"
			// }
		});
	   alert("Data has been saved");

		// result = await result.json();
		// localStorage.setItem('product-info', JSON.stringify(result));
		// history.push('/add');
	}
	return(
		<>
		 <Header />
		<div className="col-sm-6 offset-sm-3">
		     <h1>Add Product Page</h1>
		     <input type="text" onChange={(e)=>{setName(e.target.value)}} className="form-control" placeholder="Product Name" />
             <br/>
             <input type="file" onChange={(e)=>{setFile(e.target.files[0])}} className="form-control" placeholder="File Name" />
             <br/>
             <input type="text" onChange={(e)=>{setDescription(e.target.value)}} className="form-control" placeholder="Description" />
             <br/>
             <input type="text" onChange={(e)=>{setPrice(e.target.value)}} className="form-control" placeholder="Price" />
             <br/>
             <br/>
             <button className="btn btn-primary" onClick={addNewProduct} >Add Product</button>
		</div>
		</>
	)
}
export default AddProduct;