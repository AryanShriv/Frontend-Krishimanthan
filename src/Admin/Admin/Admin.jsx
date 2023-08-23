import React, { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import "./Admin.css";

export const Admin = () => {
  const toast = useToast();

  const [formState, setFormState] = useState({
    name: "",
    image: "",
    description: "",
    category: "",
  });

  const categories = [
    {
      name: "कृषि",
      subcategories: [
        "राष्ट्रीय समाचार",
        "रादेशिक समाचार",
        "कारपोरेट कहानियां की गतिविधियां",
        "सफलता की कहानी",
        "कृषि विभाग द्वारा संचालित योजनाएं",
        "कृषि में हो रहे नवाचार",
        "फसल तकनीक",
        "खेती बाड़ी की समस्याओं का समाधान",
        "कृषि मशीनरी",
      ],
    },
    {
      name: "सहकारिता",
      subcategories: [
        "राष्ट्रीय समाचार",
        "प्रादेशिक समाचार",
        "सफल सहकारी समितियों की कहानियां",
        "अंतरराष्ट्रीय स्तर पर संचालित सहकारी गतिविधियां",
        "सहकारिता में हो रहे नवाचार",
        "किसी सरकारी कर्मचारी ने यदि कोई उल्लेखनीय कार्य किया है तो उसकी जानकारी",
        "सहकारिता विभाग द्वारा संचालित योजनाओं की जानकारी",
      ],
    },
    {
      name: "पशुपालन",
      subcategories: [
        "राष्ट्रीय समाचार",
        "प्रादेशिक समाचार",
        "राष्ट्र एवं राज्य स्तर पर संचालित पशुपालन की योजनाएं",
        "सफलता की कहानी",
        "दुग्ध व्यवसाय में उल्लेखनीय कार्य करने वाले सरकारी एवं निजी संस्थानों की जानकारी",
      ],
    },
    {
      name: "पंचायत",
      subcategories: [
        "राष्ट्रीय समाचार",
        "प्रादेशिक समाचार",
        "सफल पंचायतों की कहानियां",
        "पंचायतों में हो रहे नवाचार",
        "पंचायत विभाग द्वारा चलाई जा रही योजनाएं",
      ],
    },
    {
      name: "वन",
      subcategories: [
        "राष्ट्रीय समाचार",
        "प्रादेशिक समाचार",
        "वन विभाग की योजनाएं",
        "वन विभाग में नवाचार",
        "वरना क्षेत्र क्षेत्र में रहने वाले आदिवासियों की दी जा रही सुविधाएं",
        "सफलता की कहानियां",
        "देश प्रदेश में राष्ट्रीय उद्यानों में जानकारी",
        "वनोपज से संबंधित जानकारी",
      ],
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    if (imageFile) {
      const formData = new FormData();
      formData.append("image", imageFile);

      // Make an API call to upload the image
      axios
        .post("https://your-api-url.com/upload", formData)
        .then((response) => {
          // Assuming the API returns the image URL
          const imageUrl = response.data.imageUrl;

          setFormState((prevState) => ({
            ...prevState,
            image: imageUrl,
          }));
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://your-api-url.com/news", formState)
      .then((res) => {
        toast({
          name: "News Added Successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        setFormState({
          name: "",
          image: "",
          description: "",
          category: "",
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          name: "Error adding news.",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      });
  };

  return (
    <div className="admin-center">
      <div className="admin-container">
        <h1>Krishi Manthan</h1>
        <form className="news-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Title:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image:</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formState.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"
              value={formState.category}
              onChange={handleInputChange}
            >
              <option value="">Select Category</option>
              {categories.map((categoryGroup) => (
                <optgroup label={categoryGroup.name} key={categoryGroup.name}>
                  {categoryGroup.subcategories.map((subcategory) => (
                    <option key={subcategory} value={subcategory}>
                      {subcategory}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
