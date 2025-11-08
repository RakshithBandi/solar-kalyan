import React, { useState } from 'react';
import './AdminPanel.css';

const AdminPanel = ({ galleryImages, setGalleryImages }) => {
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [editingImage, setEditingImage] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    category: 'residential',
    location: '',
    capacity: '',
    description: '',
    image: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Convert image to base64 for localStorage storage
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          image: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingImage) {
      // Update existing image
      const updatedImages = galleryImages.map(img =>
        img.id === editingImage.id
          ? { ...img, ...formData }
          : img
      );
      setGalleryImages(updatedImages);
      localStorage.setItem('kvkSolarGallery', JSON.stringify(updatedImages));
      setEditingImage(null);
    } else {
      // Add new image
      const newImage = {
        id: Date.now(), // Simple ID generation
        ...formData
      };
      
      const updatedImages = [...galleryImages, newImage];
      setGalleryImages(updatedImages);
      localStorage.setItem('kvkSolarGallery', JSON.stringify(updatedImages));
    }
    
    // Reset form
    setFormData({
      title: '',
      category: 'residential',
      location: '',
      capacity: '',
      description: '',
      image: null
    });
    setShowUploadForm(false);
  };

  const handleEdit = (image) => {
    setFormData({
      title: image.title,
      category: image.category,
      location: image.location,
      capacity: image.capacity,
      description: image.description,
      image: image.image
    });
    setEditingImage(image);
    setShowUploadForm(true);
  };

  const handleDelete = (imageId) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      const updatedImages = galleryImages.filter(img => img.id !== imageId);
      setGalleryImages(updatedImages);
      localStorage.setItem('kvkSolarGallery', JSON.stringify(updatedImages));
    }
  };

  const cancelEdit = () => {
    setEditingImage(null);
    setFormData({
      title: '',
      category: 'residential',
      location: '',
      capacity: '',
      description: '',
      image: null
    });
    setShowUploadForm(false);
  };

  return (
    <section className="admin-panel">
      <div className="container">
        <div className="admin-header">
          <h2>Gallery Management</h2>
          <button 
            className="btn btn-primary"
            onClick={() => setShowUploadForm(true)}
          >
            + Add New Project
          </button>
        </div>

        {/* Upload/Edit Form */}
        {showUploadForm && (
          <div className="upload-form">
            <h3>{editingImage ? 'Edit Project' : 'Add New Project'}</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Project Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter project title"
                  />
                </div>
                
                <div className="form-group">
                  <label>Category *</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Location *</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter location"
                  />
                </div>
                
                <div className="form-group">
                  <label>Capacity *</label>
                  <input
                    type="text"
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., 5 kW"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  placeholder="Enter project description"
                />
              </div>

              <div className="form-group">
                <label>Project Image *</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  required={!editingImage}
                />
                {formData.image && (
                  <div className="image-preview">
                    <img src={formData.image} alt="Preview" />
                  </div>
                )}
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                  {editingImage ? 'Update Project' : 'Add Project'}
                </button>
                <button type="button" onClick={cancelEdit} className="btn btn-secondary">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Images List */}
        <div className="images-list">
          <h3>Current Projects ({galleryImages.length})</h3>
          <div className="admin-gallery-grid">
            {galleryImages.map(image => (
              <div key={image.id} className="admin-gallery-item">
                <div className="admin-image">
                  <img src={image.image} alt={image.title} />
                </div>
                <div className="admin-image-info">
                  <h4>{image.title}</h4>
                  <p>{image.location} • {image.capacity}</p>
                  <p className="category">{image.category}</p>
                </div>
                <div className="admin-actions">
                  <button 
                    onClick={() => handleEdit(image)}
                    className="btn-edit"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(image.id)}
                    className="btn-delete"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;