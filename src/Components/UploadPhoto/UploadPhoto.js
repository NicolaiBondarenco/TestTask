import React, { useState } from 'react'
import './UploadPhoto.scss'

export const UploadPhoto = ({ setPhoto }) => {
  const [namePhoto, setNamePhoto] = useState('Upload your photo')

  const handleFileInputChange = (event) => {
    const file = event.target.files[0]
    setNamePhoto(file.name)
    setPhoto(file)
  }

  return (
    <div className="uploadPhoto">
      <span className="uploadPhoto__btn">Upload</span>
      <input
        accept="image/*"
        className="uploadPhoto__file"
        onChange={handleFileInputChange}
        type="file"
      />
      <input
        className="uploadPhoto__input"
        type="text"
        value={namePhoto}
        readOnly
      />
    </div>
  )
}
