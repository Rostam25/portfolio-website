
import colorSharp from "../assets/img/color-sharp.png"
import * as React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';


export const Education = () => {
    return (
        <MDBCard style={{ width: '30rem', marginTop: '5rem' }}>
          <MDBCardBody>
            <MDBCardTitle>Queen Mary University of London</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </MDBCardText>
            <div className='flex-row'>
              <a href='#'>Card link</a>
              <a href='#' style={{ marginLeft: '1.25rem' }}>
                Another link
              </a>
            </div>
          </MDBCardBody>
        </MDBCard>
      );
}
