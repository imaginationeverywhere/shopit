import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class VideoV2 = () => {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return <div className="video-area margin-top-80">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-md-12">
                <div className="video-content-02 bg-image" style={{background: 'url("'+publicUrl+'assets/img/others/video2.png") no-repeat center center/cover'}}>
                  <a href="#" className="video-btn-style-03"><i className="fa fa-play" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>



        }
}

export default VideoV2