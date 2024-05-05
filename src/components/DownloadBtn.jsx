import React from 'react';
import { Link } from 'react-router-dom';

const DownloadBtn = (props) => {

  const downloadFile = (e) => {
    e.preventDefault()
    // Assuming the file path is known

    const {filePath, fileName} = props

    // Create a link element
    const link = document.createElement('a');
    link.href = filePath; // Set the href to the file path
    link.download = fileName; // Set the filename for the download
    document.body.appendChild(link);

    // Click the link to trigger the download
    link.click();

    // Clean up
    document.body.removeChild(link);
  };

  return (
      <>
      {/* <div>
        <button onClick={downloadFile}>Download File</button>
      </div> */}
      <Link className="btn w-50 border-end" onClick={downloadFile} target="_blank">Download CV</Link>
      </>
  );
};

export default DownloadBtn;
