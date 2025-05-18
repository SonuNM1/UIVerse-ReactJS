import React, { createContext, useEffect, useRef, useState } from "react";

export const ListingContext = createContext();

export const ListingProvider = ({ children }) => {

  const fileInputRef = useRef(null);

  const [images, setImages] = useState([]);
  const [description, setDescription] = useState('') ; 
  const [price, setPrice] = useState('')
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')
  const [listings, setListings] = useState([]) ; // store all created listings 

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    const newImages = files.slice(0, 3 - images.length); // max 3 images

    setImages((prev) => [...prev, ...newImages]);

    e.target.value = ""; // reset input so same file can be reselected
  };

  const removeImage = (index) => {
    const updated = images.filter((_, i) => i !== index);

    setImages(updated);

    // reset file input to allow re-selection of same file

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const addListing = (newListing) => {
    setListings(prev => [...prev, newListing])
  }

  // load listings from localStorage 

  useEffect(() => {
    const savedListings = localStorage.getItem('listings') ; 

    if(savedListings){
        setListings(JSON.parse(savedListings))
    }
  }, [])

  // Save listings to localStorage on update 

  useEffect(() => {
    localStorage.setItem('listings', JSON.stringify(listings))
  },[listings])

  return (
    <ListingContext.Provider value={{
        images,
        setImages,
        handleImageChange, 
        removeImage, 
        fileInputRef, 
        title, 
        setTitle, 
        description,
        setDescription, 
        price, 
        setPrice,
        listings, 
        addListing, 
        location, 
        setLocation    
    }} >
        {children}
    </ListingContext.Provider>
  );
};

