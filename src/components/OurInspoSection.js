import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 1900px;
  width: 100%;
  background-color: pink;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Header = styled.div`
  height: 100px;
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  padding-left: 90px;
  font-size: 100px;
`;

const InspoPic = styled.div`
  width: 436px;
  height: 490px;
  background: black;
  display: block;
  clip-path: ellipse(23% 49% at 48% 51%);
`;

const InspoPicTwo = styled.div`
  width: 336px;
  height: 390px;
  background: black;
  display: block;
  clip-path: ellipse(23% 49% at 48% 51%);
`;

const OurInspoSection = () => {
  return (
    <div>
      <Header>Our Inspo</Header>
      <Container>
        <InspoPic>Test</InspoPic>
        <InspoPicTwo></InspoPicTwo>
        <InspoPic>Test</InspoPic>
        <InspoPic>Test</InspoPic>
        <InspoPicTwo></InspoPicTwo>
        <InspoPic>Test</InspoPic>
        <InspoPicTwo></InspoPicTwo>
        <InspoPic>Test</InspoPic>
        <InspoPic>Test</InspoPic>
        <InspoPicTwo></InspoPicTwo>
        <InspoPic>Test</InspoPic>
        <InspoPicTwo></InspoPicTwo>
      </Container>
    </div>
  );
};

export default OurInspoSection;

// import React from 'react';
// import styled from 'styled-components';
// import Chip from '../media/chip.jpg';
// import Coffee from '../media/coffee.jpg';
// import Coffee2 from '../media/coffee2.jpg';
// import Coldbrew from '../media/coldbrew.jpg';
// import Dinner from '../media/dinner.jpg';
// import Dinner2 from '../media/dinner2.jpg';
// import Drums from '../media/drums.jpg';
// import Flower from '../media/flower.jpg';
// import Gummy from '../media/gummy.jpg';
// import Orange from '../media/orange.jpg';
// import Orange2 from '../media/orange2.jpg';
// import Orange3 from '../media/orange3.jpg';
// import Palm from '../media/palm.jpg';
// import Pink from '../media/pink.jpg';
// import Pink2 from '../media/pink2.jpg';
// import Plant2 from '../media/plant2.jpg';
// import Rainbow from '../media/rainbow.jpg';
// import Room from '../media/room.jpg';
// import Sculpture from '../media/sculpture.jpg';
// import Surf from '../media/surf.jpg';
// import Surf2 from '../media/surf2.jpg';
// import Surfboards from '../media/surfboards.jpg';
// import Swamp from '../media/swamp.jpg';

// const MainContainer = styled.div`
//   height: 80vh;
//   width: 100vw;
//   background-color: black;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Title = styled.div`
//   height: 100px;
//   width: 100vw;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 30px;
//   margin-bottom: -60px;
//   font-size: 45px;
// `;

// // LEFT PIC BOX ONE //

// const LeftOne = styled.div`
//   height: 75%;
//   width: 22%;
//   display: flex;
//   flex-direction: column;
//   background-color: black;
// `;

// const TopLeftOne = styled.div`
//   height: 33.3%;
//   width: 100%;
//   background-color: black;
//   display: flex;

//   .pic1 {
//     height: 99%;
//     width: 48%;
//     :hover {
//       box-shadow: 1px 1px;
//       border-radius: 2px;
//     }
//   }

//   .pic2 {
//     height: 99%;
//     width: 50%;
//     padding-left: 1%;
//     :hover {
//       box-shadow: 1px 1px;
//       border-radius: 2px;
//     }
//   }
// `;

// const MiddleLeftOne = styled.div`
//   height: 33.3%;
//   width: 100%;
//   background-color: black;
//   display: flex;

//   .pic2 {
//     height: 99%;
//     width: 99%;
//     :hover {
//       box-shadow: 1px 1px;
//       border-radius: 2px;
//     }
//   }
// `;

// const BottomLeftOne = styled.div`
//   height: 33.3%;
//   width: 100%;
//   background-color: black;

//   .pic3 {
//     height: 99%;
//     width: 99%;
//     :hover {
//       box-shadow: 1px 1px;
//       border-radius: 2px;
//     }
//   }
// `;

// // LEFT PIC BOX TWO //

// const LeftTwo = styled.div`
//   height: 75%;
//   width: 22%;
//   display: flex;
//   flex-direction: column;
//   background-color: black;
// `;

// const TopLeftTwo = styled.div`
//   height: 40%;
//   width: 100%;
//   background-color: black;

//   .pic1 {
//     height: 99%;
//     width: 99%;
//     :hover {
//       box-shadow: 1px 1px;
//       border-radius: 2px;
//     }
//   }
// `;

// const MiddleLeftTwo = styled.div`
//   height: 30%;
//   width: 100%;
//   background-color: black;

//   .pic1 {
//     height: 99%;
//     width: 48%;

//     :hover {
//       box-shadow: 1px 1px;
//       border-radius: 2px;
//     }
//   }

//   .pic2 {
//     height: 99%;
//     width: 50%;
//     padding-left: 1%;
//     :hover {
//       box-shadow: 1px 1px;
//       border-radius: 2px;
//     }
//   }
// `;

// const BottomLeftTwo = styled.div`
//   height: 30%;
//   width: 100%;
//   background-color: black;

//   .pic1 {
//     height: 99%;
//     width: 48%;
//     :hover {
//       box-shadow: 1px 1px;
//       border-radius: 2px;
//     }
//   }

//   .pic2 {
//     height: 99%;
//     width: 50%;
//     padding-left: 1%;
//     :hover {
//       box-shadow: 1px 1px;
//       border-radius: 2px;
//     }
//   }
// `;

// // RIGHt PIC BOX TWO //

// const RightOne = styled.div`
//   height: 75%;
//   width: 22%;
//   display: flex;
//   flex-direction: column;
//   background-color: black;
// `;

// const TopRightOne = styled.div`
//   height: 33.3%;
//   width: 100%;
//   background-color: black;

//   .pic1 {
//     height: 99%;
//     width: 48%;
//     :hover {
//       box-shadow: 1px 1px;
//       border-radius: 2px;
//     }
//   }

//   .pic2 {
//     height: 99%;
//     width: 50%;
//     padding-left: 1%;
//     :hover {
//       box-shadow: 1px 1px;
//       border-radius: 2px;
//     }
//   }
// `;

// const MiddleRightOne = styled.div`
//   height: 33.3%;
//   width: 100%;
//   background-color: black;
// `;

// const BottomRightOne = styled.div`
//   height: 66.6%;
//   width: 100%;
//   background-color: black;

//   .pic1 {
//     height: 100%;
//     width: 99%;
//     :hover {
//       box-shadow: 1px 1px;
//       border-radius: 2px;
//     }
//   }
// `;

// // RIGHt PIC BOX TWO //

// const RightTwo = styled.div`
//   height: 75%;
//   width: 22%;
//   display: flex;
//   flex-direction: column;
//   background-color: black;
// `;

// const TopRightTwo = styled.div`
//   height: 33.3%;
//   width: 100%;
//   background-color: black;
//   display: flex;

//   .pic1 {
//     height: 99%;
//     width: 48%;
//     :hover {
//       box-shadow: 1px 1px;
//       border-radius: 2px;
//     }
//   }

//   .pic2 {
//     height: 99%;
//     width: 50%;
//     padding-left: 1%;
//     :hover {
//       box-shadow: 1px 1px;
//       border-radius: 2px;
//     }
//   }
// `;

// const MiddleRightTwo = styled.div`
//   height: 33.3%;
//   width: 100%;
//   background-color: black;

//   .pic3 {
//     height: 99%;
//     width: 99%;
//     :hover {
//       box-shadow: 1px 1px;
//       border-radius: 2px;
//     }
//   }
// `;

// const BottomRightTwo = styled.div`
//   height: 33.3%;
//   width: 100%;
//   background-color: black;

//   .pic3 {
//     height: 99%;
//     width: 99%;
//     :hover {
//       box-shadow: 1px 1px;
//       border-radius: 2px;
//     }
//   }
// `;
// const OurInspoSection = () => {
//   return (
//     <>
//       <Title>Our Daily Inspo</Title>
//       <MainContainer>
//         <LeftOne>
//           <TopLeftOne>
//             <img className="pic1" src={Chip} alt="sticky note" />
//             <img className="pic2" src={Palm} alt="sticky note" />
//           </TopLeftOne>
//           <MiddleLeftOne>
//             <img className="pic2" src={Flower} alt="sticky note" />
//           </MiddleLeftOne>
//           <BottomLeftOne>
//             <img className="pic3" src={Orange3} alt="sticky note" />
//           </BottomLeftOne>
//         </LeftOne>
//         <LeftTwo>
//           <TopLeftTwo>
//             <img className="pic1" src={Surf} alt="sticky note" />
//           </TopLeftTwo>
//           <MiddleLeftTwo>
//             <img className="pic1" src={Drums} alt="sticky note" />
//             <img className="pic2" src={Coffee} alt="sticky note" />
//           </MiddleLeftTwo>
//           <BottomLeftTwo>
//             <img className="pic1" src={Plant2} alt="sticky note" />
//             <img className="pic2" src={Dinner} alt="sticky note" />
//           </BottomLeftTwo>
//         </LeftTwo>
//         <RightOne>
//           <TopRightOne>
//             <img className="pic1" src={Coldbrew} alt="sticky note" />
//             <img className="pic2" src={Surfboards} alt="sticky note" />
//           </TopRightOne>
//           <BottomRightOne>
//             <img className="pic1" src={Surf2} alt="sticky note" />
//           </BottomRightOne>
//         </RightOne>
//         <RightTwo>
//           <TopRightTwo>
//             <img className="pic1" src={Dinner2} alt="sticky note" />
//             <img className="pic2" src={Pink} alt="sticky note" />
//           </TopRightTwo>
//           <MiddleRightTwo>
//             <img className="pic3" src={Sculpture} alt="sticky note" />
//           </MiddleRightTwo>
//           <BottomRightTwo>
//             <img className="pic3" src={Swamp} alt="sticky note" />
//           </BottomRightTwo>
//         </RightTwo>
//       </MainContainer>
//     </>
//   );
// };

// export default OurInspoSection;
