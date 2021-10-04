import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Video = () => {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return <div className="video-area margin-top-80 margin-bottom-75">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-md-12">
                <div className="video-content" style={{background: 'url("'+publicUrl+'assets/img/others/video.png") no-repeat center center/cover'}}>
                  <a href="#" className="video-btn-style-02"><i className="fa fa-play" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>


        }
}

export default Video