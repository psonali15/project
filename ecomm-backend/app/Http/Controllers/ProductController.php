<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function addProduct(Request $req)
    {
        $product = new Product;
        $product->name = $req->input('name');
        $product->file_path = $req->file('file')->store('products');
        $product->description = $req->input('description');
        $product->price = $req->input('price');
        $product->save();

       return $product;
    }

    public function list(){

        return Product::all();  
    }

    public function delete($id){
      
      $result = Product::where('id', $id)->delete();

      if($result){

        return ["result" => "Product has been deleted!"];

      }else{
       
        return ["result" => "Delete operation failed!"];

      }

    }
   
   public function edit($id){

    return Product::where('id', $id)->first();

   }

   public function update(Request $request, $id){

    $product = Product::find($id);
    $product->name =$request->input('name');
    $product->description = $request->input('description');
    $product->price = $request->input('price');
    if($request->file('file')){
       $product->file_path = $request->file('file')->store('products');
    }
    
    return $product;


   }

   public function searchProduct($key){
    
    return Product::where('name', 'Like', "%$key%")->get();

   }
}
