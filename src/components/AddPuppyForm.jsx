import { useState, useEffect} from "react";

const AddPuppyForm = () => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, breed, imageUrl)
    // should use useEffect to get a reRender!!!
    // keep on getting an error
    try{
      const postPuppy = async () =>{
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players', {
        method: "POST", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name, breed, imageUrl})})
    }
    postPuppy();
  } catch (error) {
    console.log(error);
  }}

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Add a Puppy!</h1>
        <label>Name: <input type="text" placeholder="Fidelius" id="name" 
        onChange={(e) => setName(e.target.value)}></input></label>

        <label>Breed: <input type="text" placeholder="Labradoodle" id="breed" 
        onChange={(e) => setBreed(e.target.value)}></input></label>

        <label>Image URL: <input type="url" placeholder="https://images.dog.ceo/breeds/poodle-miniature/n02113712_8655.jpg" id="imageUrl" 
        onChange={(e) => setImageUrl(e.target.value)}></input></label>

        <button id="submit">Submit</button>
      </form>
    </>
  )
}

export default AddPuppyForm;  