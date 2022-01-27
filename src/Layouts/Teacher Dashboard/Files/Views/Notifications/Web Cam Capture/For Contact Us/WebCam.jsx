import React, { useState, useEffect  } from 'react';
import Webcam from "react-webcam";
import { createAudioFile } from '../../../apiForAudioSending';


const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user"
};

export const WebcamCapture = () => {
    useEffect(() => {
        const fetchItems = async function() {
            loadFiles()
          }
        fetchItems()
        }, []);

    const [filesSetting, setFilesSetting] = React.useState({files: [], file: '',});       
    const [image,setImage]=useState('');
    const webcamRef = React.useRef(null);

    const loadFiles = () => {
      fetch('/api/files')
        .then(res => res.json())
        .then(files => {
          if (files.message) {
            console.log('No Files');
            setFilesSetting({ files: [] })
          } else {
            setFilesSetting({ files })
          }
        });
    }
    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc)
        console.log(imageSrc)
        var url = imageSrc
        fetch(url)
        .then(res => res.blob())
        .then((blob) => {
            var file = new File([blob], "ScreenShot.jpg", { type: blob.type })
            fileChanged(file)
          })  
        });

        const fileChanged = (data) => {
            //const f = event.target.files[0];
            //const test = this.state.blobURL
            //console.log(f)
            console.log(data, "testing")
            filesSetting.file = data
            uploadFile()
          }
          
          const uploadFile = (event) => {
            //event.preventDefault();
            console.log(filesSetting.file, "hi")
            let data = new FormData();
            data.append('file', filesSetting.file);
            console.log(data, "beenstock")
            createAudioFile(data)
            /*
            fetch('/api/files', {
              method: 'POST',
              body: data
            }).then(res => res.json())
              .then(data => {
                if (data.success) {
                  loadFiles();
                } else {
                  alert('Upload failed');
                }
              });
              */
          }         
    return (
        <div className="webcam-container">
            <div className="webcam-img">

                {image == '' ? <Webcam
                    audio={false}
                    height={200}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={220}
                    videoConstraints={videoConstraints}
                /> : <img src={image} />}
            </div>
            <div>
                {image != '' ?
                    <button onClick={(e) => {
                        e.preventDefault();
                        setImage('')
                    }}
                        className="btn btn-success mt-2 mb-2">
                        Retake Image</button> :
                    <button onClick={(e) => {
                        e.preventDefault();
                        capture();
                    }}
                        className="btn btn-dark mt-2 mb-2">Capture</button>
                }
            </div>
        </div>
    );
};
