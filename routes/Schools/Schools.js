import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {
  Image,
  Button,
  Row,
  Col,
  Container,
  Media,
  Card
} from 'react-bootstrap';
import image1 from './img1.jpeg';
import './Schools.css';
import Cards from './Cards.js';
import engineering from './Engineering.png';
import Commerce from './commerce and managment.jpeg';
import Health from './health science .jpg';
import Applied from './applied science.jpg';
import Arts from './arts.jpg';

function Schools() {
  return (<div >
    <div className="rectangle1">
      <div className="header">Schools</div>
    </div>
    <div className="background">
      <div className="trial">
        <Cards name="Engineering" image={engineering} width="220" height="280" content="School of Engineering under Dayananda Sagar University provides Science & Technology based Education that is required to develop high caliber Engineers suitable for Industry and Scientific Organization.
              The curriculum focuses on knowledge based course work integrated with skill development as a part of training. It equally helps in inculcating the scientific temper necessary for the Lifelong learning process."/>
        <Cards name="Commerce And Managment Studies" image={Commerce} width="230" height="200" content="Dayananda Sagar University with its legacy of over more than five decades of imparting higher education on par with global standards in various disciplines offers undergraduate and post graduate programs in commerce and management.
              The School provides a rich learning environment with world class infrastructure together with top class faculty team."/>
        <Cards name="Basic And Applied Sciences" image={Applied} width="220" height="220" content="The School of Basic and Applied Sciences (SBAS) of Dayananda Sagar University (DSU) stands up to the task of producing world class graduates with capability and confidence to handle real-life challenges.
              The curriculum at SBAS focuses both on developing the intellectual appetite of the students as well as helping them to become skilled at novel problem-solving approaches."/>
        <Cards name="Health Science" image={Health} width="200" height="200" content="School of Health sciences under Dayananda Sagar University provides value based education and focuses on knowledge based course work integrated with skill development.
              The college of Nursing Sciences, Pharmaceutical Sciences and college of Physiotherapy are running under the School of Health Sciences."/>
        <Cards name="Arts And Humanities" image={Arts} width="200" height="200" content="New media. New world. New opportunities. These call for a fresh approach in understanding and communicating ideas in the changing world.
              The College of Journalism and Mass Communication (CJMC) is nurturing fresh talent in the field of mass communication and new media that can meet the emerging communication challenges."/>
      </div>
    </div>
  </div>);
}

export default Schools;
