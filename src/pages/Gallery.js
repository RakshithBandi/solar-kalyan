import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Load images from localStorage
  useEffect(() => {
    const savedImages = localStorage.getItem('kvkSolarGallery');
    if (savedImages) {
      setGalleryImages(JSON.parse(savedImages));
    }
  }, []);

  // Check if user is already logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('kvkAdmin');
    if (isLoggedIn) {
      setIsAdmin(true);
    }
  }, []);

  // Handle login
  const handleLogin = (username, password) => {
    const authorizedUsers = [
      { username: 'admin', password: 'kvk123' },
      { username: 'manager', password: 'solar456' }
    ];

    const isValid = authorizedUsers.some(user => 
      user.username === username && user.password === password
    );

    if (isValid) {
      setIsAdmin(true);
      setShowLogin(false);
      setLoginError('');
      localStorage.setItem('kvkAdmin', 'true');
    } else {
      setLoginError('Invalid credentials! Please check your username and password.');
    }
  };

  // Handle logout
  const handleLogout = () => {
    setIsAdmin(false);
    setShowUploadForm(false);
    localStorage.removeItem('kvkAdmin');
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get('title');
    const category = formData.get('category');
    const imageFile = formData.get('image');

    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImage = {
          id: Date.now(),
          title: title,
          category: category,
          image: reader.result,
          date: new Date().toLocaleDateString()
        };

        const updatedImages = [...galleryImages, newImage];
        setGalleryImages(updatedImages);
        localStorage.setItem('kvkSolarGallery', JSON.stringify(updatedImages));
        
        // Reset form and close
        e.target.reset();
        setShowUploadForm(false);
      };
      reader.readAsDataURL(imageFile);
    }
  };

  // Handle image delete
  const handleDeleteImage = (imageId) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      const updatedImages = galleryImages.filter(img => img.id !== imageId);
      setGalleryImages(updatedImages);
      localStorage.setItem('kvkSolarGallery', JSON.stringify(updatedImages));
    }
  };

  return (
    <div className="gallery-page">
      {/* Admin Header */}
      {isAdmin && (
        <div className="admin-header">
          <div className="container">
            <span>Admin Mode - You can upload and manage images</span>
            <div className="admin-buttons">
              <button 
                onClick={() => setShowUploadForm(true)}
                className="btn btn-primary"
              >
                📁 Upload Image
              </button>
              <button onClick={handleLogout} className="btn btn-secondary">
                🚪 Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="container">
          <h1>Our Project Gallery</h1>
          <p>Explore our successful solar installations</p>
          
          {/* Admin Login Button for non-admin users */}
          {!isAdmin && (
            <button 
              className="admin-login-btn"
              onClick={() => setShowLogin(true)}
            >
              🔑 Admin Login
            </button>
          )}
        </div>
      </section>

      {/* Upload Form Modal */}
      {showUploadForm && isAdmin && (
        <div className="modal-overlay">
          <div className="upload-modal">
            <button 
              className="close-btn"
              onClick={() => setShowUploadForm(false)}
            >
              ×
            </button>
            <h2>Upload New Image</h2>
            <form onSubmit={handleImageUpload}>
              <div className="form-group">
                <label>Image Title:</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter image title"
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Category:</label>
                <select name="category" required>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Select Image:</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  required
                />
                <p className="file-hint">Images will be displayed at 300x300 pixels</p>
              </div>
              
              <div className="form-buttons">
                <button type="submit" className="btn btn-primary">
                  📤 Upload Image
                </button>
                <button 
                  type="button" 
                  onClick={() => setShowUploadForm(false)}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Gallery Images Display */}
      <section className="gallery-display">
        <div className="container">
          <div className="gallery-info">
            <h2>Our Projects ({galleryImages.length})</h2>
            {galleryImages.length === 0 && (
              <p className="no-images">No images uploaded yet. Admin can upload images using the login above.</p>
            )}
          </div>

          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div key={image.id} className="gallery-item">
                <div className="image-container">
                  <img 
                    src={image.image} 
                    alt={image.title}
                    className="fixed-size-image"
                  />
                  {isAdmin && (
                    <button 
                      onClick={() => handleDeleteImage(image.id)}
                      className="delete-btn"
                      title="Delete image"
                    >
                      🗑️
                    </button>
                  )}
                </div>
                <div className="image-info">
                  <h3>{image.title}</h3>
                  <span className="category">{image.category}</span>
                  <span className="date">{image.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Login Modal */}
      {showLogin && (
        <div className="modal-overlay">
          <div className="login-modal">
            <button 
              className="close-btn"
              onClick={() => {
                setShowLogin(false);
                setLoginError('');
              }}
            >
              ×
            </button>
            <h2>Admin Login</h2>
            <p>Authorized personnel only</p>
            
            <LoginForm 
              onLogin={handleLogin} 
              loginError={loginError}
            />
          </div>
        </div>
      )}
    </div>
  );
};

// Login Form Component
const LoginForm = ({ onLogin, loginError }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="form-group">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      
      <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {loginError && (
        <div className="error-message">
          {loginError}
        </div>
      )}
      
      <button type="submit" className="btn btn-primary">
        🔐 Login
      </button>

      <div className="login-hint">
        <p>Contact system administrator for login credentials</p>
      </div>
    </form>
  );
};

export default Gallery;