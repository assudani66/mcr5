"use client"
import React, { useState } from 'react'

const Add_Edit_RecipeModal = ({recipeDetails}) => {
  const [formState,setFormState] = useState(
    {
      name:"",
      imageURL: "",
      instructions: "",
      cusineType : "",
      ingredients : ""
  }
)

const [imageSource,setImageSource] = useState("")

  const handleInput = (e) => {
    setFormState({
      ...formState,[e.target.name] : e.target.value
    })
    console.log(formState)
  }
  const uploadImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageSource(e.target.value);
      setFormState({ ...formState, imageURL: imageUrl.toString() });
    }
  };
  const handleSubmit = () =>{
  }
  return (
    <div>
      <form>
        <label>
          Enter Name
        <input name="name" value={formState.name} onChange={e=>handleInput(e)} />
        </label>
        <label>
          Enter image
          <img src={formState.imageURL} alt="uploadedImage"/>
          <input type="file" name="imageURL" value={imageSource} onChange={e=>uploadImage(e)} />
        </label>
        <label>
          Enter cusine Type
        <input name="cusineType" value={formState.cusineType} onChange={e=>handleInput(e)} />
        </label>
        <label>
          Enter Instruction
        <input name="instructions" value={formState.instructions} onChange={e=>handleInput(e)} />
        </label>
        <label>
          Enter Ingredients
        <input name="ingredients" value={formState.ingredients} onChange={e=>handleInput(e)} />
        </label>
        <button>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Add_Edit_RecipeModal