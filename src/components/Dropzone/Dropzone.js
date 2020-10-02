import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone'

import './Dropzone.css';

export default function Dropzone({ setData }) {
  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        const data = JSON.parse(reader.result);
        setData(data);
      }
      reader.readAsText(file)
    })
  }, [setData]);

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Load a JSON file here.</p>
      }
    </div>
  )
}

Dropzone.propTypes = {
  setData: PropTypes.func.isRequired,
};
