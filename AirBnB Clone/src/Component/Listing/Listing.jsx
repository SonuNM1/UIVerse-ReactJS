import React, { useContext } from "react";
import "./Listing.css";
import { IoMdAdd } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import {ListingContext} from "../../Context/ListingContext";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Listing = () => {

  const {
    images, 
    handleImageChange, 
    removeImage,
    fileInputRef,
    title, 
    setTitle, 
    description, 
    setDescription, 
    price, 
    setPrice, 
    addListing,
    setImages,
    location, 
    setLocation  
  } = useContext(ListingContext)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    if (images.length === 0) {
      alert("Please upload at least one image.");
      return;
    }
    
    const newListing = {
      title, 
      description, 
      price, 
      images,
      location 
    }

    addListing(newListing) ; // add to context 

    toast.success('Listing created successfully!')

    // form reset 

    setTitle('') ; 
    setDescription('') ;
    setPrice('') ; 
    setImages([]) ; 

    if(fileInputRef.current){
      fileInputRef.current.value = '' ; 
    }

    setTimeout(() => {
      navigate('/') ; // redirect to home to see the listing 
    },1500)

  };

  return (
    <div id="Listing">
      <form onSubmit={handleSubmit}>
        <span id="listingtitle">Add Your Listing</span>

        {/* Title */}

        <div className="list">
          <label htmlFor="title">Title</label>
          <input 
            type="text" 
            name="title" 
            id="title" 
            required 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Description */}

        <div className="list">
          <label htmlFor="des">Description</label>
          <textarea 
            id="des" 
            name="description" 
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            ></textarea>
        </div>

        {/* Image Upload */}

        <div className="list">
          <label htmlFor="images">Upload Images (max 3)</label>
          <input
            type="file"
            id="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            disabled={images.length >= 3}
            ref={fileInputRef}
          />
        </div>

        {/* Preview section */}

        <div className="preview-container">
          {images.map((image, index) => (
            <div key={index} className="preview-wrapper">
              <img
                src={URL.createObjectURL(image)}
                alt={`preview ${index + 1}`}
                className="preview-img"
              />

              <button
                type="button"
                className="delete-btn"
                onClick={() => removeImage(index)}
              >
                <IoCloseSharp size={12} />
              </button>
            </div>
          ))}
        </div>

        {/* Price */}

        <div className="list">
          <label htmlFor="price">Price (in ₹)</label>
          <input 
            type="number" 
            id="price" 
            name="price" 
            required   
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        {/* Location */}

        <div className="list">
          <label htmlFor="location">Location</label>
          <input 
            type="text" 
            id="location" name="location" 
            required 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <button className="submit_button" type="submit">
          <IoMdAdd /> Create listing
        </button>
      </form>
    </div>
  );
};

export default Listing;
