import React, { Component } from 'react'
import MicRecorder from 'mic-recorder-to-mp3';
import './AudioRecord.css'
//import AudioTestingFunctional from './AudioTestingFunctional';
//import FilesUploadComponent from './FileUploadComponent';
//import FilesUploadFunctional from './FilesUploadFunctional';
//import { createAudioFile } from '../../apiForAudioSending';
import { createAudioFile } from 'Layouts/Teacher Dashboard/Files/Apis/apiForAudio';
const Mp3Recorder = new MicRecorder({ bitRate: 128 });
export default class AudioRecorder extends Component {
  constructor(props) {
    super(props);
    var PathName = window.location.pathname
    var findingIndex = PathName.indexOf("audio")
    console.log(findingIndex)
    var UrlId = PathName.slice((findingIndex + 6), PathName.length)
    
    this.state = {
      files: [],
      file: '',
      isRecording: false,
      blobURL: '',
      isBlocked: false,
      id: UrlId
    }
    //console.log(this.props.match.params.id)
    this.loadFiles = this.loadFiles.bind(this);
  }

  start = () => {
    if (this.state.isBlocked) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder
        .start()
        .then(() => {
          this.setState({ isRecording: true });
        }).catch((e) => console.error(e));
    }
  };

  stop = () => {
    
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob)
        var randomValue = Math.floor((Math.random() * 100000) + 1)
        var newName = this.state.id + "_" + randomValue + ".mp3"
        console.log(blob)
        console.log(newName)
        var file = new File([blob], newName , { type: blob.type })
        this.fileChanged(file)
        this.setState({ blobURL, isRecording: false });
      }).catch((e) => console.log(e));
  };


  componentDidMount() {
    this.loadFiles();
    navigator.getUserMedia({ audio: true },
      () => {
        console.log('Permission Granted');
        this.setState({ isBlocked: false });
      },
      () => {
        console.log('Permission Denied');
        this.setState({ isBlocked: true })
      },
    );
  }

  loadFiles() {
    fetch('/api/files')
      .then(res => res.json())
      .then(files => {
        if (files.message) {
          console.log('No Files');
          this.setState({ files: [] })
        } else {
          this.setState({ files })
        }
      });
  }

  fileChanged(event) {
    //const f = event.target.files[0];
    //const test = this.state.blobURL
    //console.log(f)
    console.log(event)
    this.setState({
      file: event
    });
  }
  

  deleteFile(event) {
    event.preventDefault();
    const id = event.target.id;

    fetch('/api/files/'+id, {
      method: 'DELETE'
    }).then(res => res.json())
      .then(response => {
        console.log(response);
        if (response.success) this.loadFiles()
        else alert('Delete Failed');
      })
  }

  uploadFile(event) {
    event.preventDefault();
    let data = new FormData();
    data.append('file', this.state.file);
    createAudioFile(data)
    /*
    fetch('/api/files', {
      method: 'POST',
      body: data
    })
    /*
    .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.loadFiles();
        } else {
          alert('Upload failed');
        }
      });
    */
  }

  render() {
    const { files } = this.state;
    return (
      <div>
        <div>
<div>
{/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column">
{/* Main Content */}
<div id="content">
  {/* Begin Page Content */}
  <div className="containerBlackDashboard-fluid">
    {/* Page Heading */}
    <h1 className="h3BlackDashboard mb-2 text-gray-800"></h1>
    {/* DataTales Example */}
    <div className="card shadow mb-4 text-center">
      <div className="card-header py-3" style = {{color : "white", backgroundColor : "#b4b4b4"}}>
        <h6 className="m-0 font-weight-bold text-white"></h6>
      </div>
      <div className="card-body">
      <div>
      <audio src={this.state.blobURL} controls="controls" />
          <div>
            
          <div className="buttonNewTheme mb-2">
                        <button  className="btnSass play-pause buttonSass" style = {{fontWeight : "bold"}}  onClick={this.start} disabled={this.state.isRecording}>
                          <i className="fa fa-play fa-lg"></i>
                        </button>
                    </div>
          </div>
          <div>
           <div className="buttonNewTheme mb-2">
                        <button  className="btnSass play-pause buttonSass" style = {{fontWeight : "bold"}}  onClick={this.stop} disabled={!this.state.isRecording}>
                          <i className="fa fa-stop fa-lg"></i>
                        </button>
                    </div>
          </div>
          <div className="buttonNewTheme mb-2">
          <button  className="btnSass play-pause buttonSass" style = {{fontWeight : "bold"}}  onClick={this.uploadFile.bind(this)}>
            <i className="fa fa-upload fa-lg"></i>
          </button>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  {/* /.containerBlackDashboard-fluid */}
</div>
{/* End of Main Content */}
{/* Footer */}

{/* End of Footer */}
</div>
{/* End of Content Wrapper */}
{/* End of Page Wrapper */}
      </div>
      </div>
      </div>
    );
  }
}
