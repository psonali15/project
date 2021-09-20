import React, {useState, useEffect} from 'react';
import Header from './Header';
import { withRouter } from 'react-router-dom';

function UpdateProduct(props)
{
	console.warn(props.match.params.id);
	let id = props.match.params.id;
 
  const [data, setData] = useState([]);

 const [name, setName] = useState("");
 const [file, setFile] = useState("");
 const [price, setPrice] = useState("");
 const [description, setDescription] = useState("");

  const [post, setPost] = useState({});


 useEffect(async () => {

 	let result = await fetch("http://127.0.0.1:8000/api/edit/"+id, {
 		method : "GET",
 	})
 	result = await result.json();
 	setData(result);
 	//console.warn(result);
 	
 }, [])


 const handleChange = ({target}) => {
        const {name,description,price, value} = target;
        setPost({...post, [name]: value});
        //console.log(post.description);
    };

async function UpdateProduct(id){
 	

   // const formData = new FormData();

   //      formData.append('file', file);
   //      formData.append('name', name);
   //      formData.append('description', description);
   //      formData.append('price', price);

   //      alert(formData.name);

 let result = await fetch("http://127.0.0.1:8000/api/update/"+id,{
 		method : "PUT",
 		body: JSON.stringify({
 			id: id,
            name: post.name,
            file: post.file,
            price: post.price,
            description: post.description,
 		}),
 		headers: {
 			"Accept" : "application/json",
            "Content-type": "application/json"
          }
 	})

 result = result.json();
 
 alert("Data has been update");   
 }
  
	return(
		<>
		 <Header />
		<div className="col-sm-6 offset-sm-3">
		    
		     <h1>Update Product Page</h1>
		     <input type="text" name="name" defaultValue={data.name} onChange={handleChange}  className="form-control" placeholder="Name"/><br/>
		     <input type="file"  name="file" onChange={handleChange} className="form-control" placeholder="File"/>
		     <img style={{width:100}} src={"http://127.0.0.1:8000/"+data.file_path} />
		     <br/>
		     <input type="text" name="price" defaultValue={data.price} onChange={handleChange} className="form-control" placeholder="Price"/><br/>
		     <input type="text" name="description" defaultValue={data.description} onChange={handleChange} className="form-control" placeholder="Description"/><br/>
		     <br/>
		     <button onClick={()=>UpdateProduct(data.id)} type="submit" className="btn btn-primary">Update</button>
		</div>
		</>
	)
}
export default withRouter(UpdateProduct);