import React from 'react';
import './landingPage.css';
import NavbarComponent from './../navbar/navbar';
import CarouselComponent from './../carousel/carousel';
import UserCardComponent from '../userCard/userCard';
import CardComponent from '../card/card';
import DataTable from '../dataTable/dataTable'

const LandingPage=()=> {
  return (
    <div className="full-width">
    <NavbarComponent/>
    <div className="landing-container">
     <div className="fullcontainer">
       <div className="container">
      <CarouselComponent/>
     <CardComponent/>
     </div>
     <UserCardComponent/>
     </div>
     <DataTable/>
    </div>
    </div>
  );
}

export default LandingPage;