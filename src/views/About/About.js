import React from "react";
import styled, { keyframes } from "styled-components";
import { slideInLeft } from "react-animations";
import { Image, Intro, H2, Container, Banner } from "../../Global";

export default function About(props) {
  const Bio = styled.div`
    padding: 60px 20px 5px;
    margin: 20px;
  `;

  const slideInLeftAnimation = keyframes`${slideInLeft}`;
  const SlideDiv = styled.div`
    animation: 2s ${slideInLeftAnimation};
  `;

  return (
    <>
      <Banner>
        <SlideDiv>
          <Intro>Meet The Cabbages!</Intro>
        </SlideDiv>
      </Banner>
      <Container>
        <Bio>
          <Image src="https://i.ibb.co/kXL09SP/brain.jpg" alt="Lincoln" className="image"></Image>
          <H2>Lincoln Gage</H2>
          <p>
            Chupa chups macaroon sesame snaps sweet carrot cake brownie. Cotton candy powder tart gummies
            fruitcake halvah danish. Sweet roll topping gummies dessert dessert gummi bears gummi bears sugar
            plum. Carrot cake sugar plum soufflé cake brownie pie cake. Chocolate liquorice chocolate. Cotton
            candy cake tootsie roll jujubes pastry icing danish. Cake gummi bears wafer candy jelly carrot
            cake jelly beans. Powder jelly pastry. Powder carrot cake donut pie donut. Icing caramels
            chocolate cake gummies sweet roll candy jujubes croissant. Marshmallow croissant bonbon sesame
            snaps dragée wafer dragée. Jujubes croissant danish. Pastry jujubes carrot cake sweet dragée
            tiramisu bear claw. Brownie wafer cake sweet roll danish carrot cake bonbon liquorice halvah.
          </p>
        </Bio>
        <Bio>
          <Image src="https://i.ibb.co/kXL09SP/brain.jpg" alt="Milton" className="image"></Image>
          <H2>Milton Grady</H2>
          <p>
            Cake lemon drops candy canes tootsie roll sugar plum cookie cake cotton candy halvah. Pudding
            biscuit topping danish liquorice carrot cake halvah. Carrot cake cake cupcake candy chocolate
            cookie dragée marzipan cupcake. Marzipan gummies tart danish halvah topping halvah. Cupcake
            cupcake jelly beans sweet roll powder gummi bears tart chocolate bar. Carrot cake chocolate cake
            soufflé halvah biscuit liquorice jujubes tiramisu cheesecake. Biscuit topping ice cream powder
            liquorice cookie pie. Chupa chups ice cream liquorice sweet candy oat cake chocolate cake sweet.
            Dessert tiramisu dragée. Gingerbread muffin lollipop donut croissant tart sweet cookie. Oat cake
            croissant croissant tiramisu tootsie roll. Carrot cake cookie candy canes chocolate macaroon
            halvah tiramisu tiramisu. Macaroon cake macaroon candy canes.
          </p>
        </Bio>

        <Bio>
          <Image src="https://i.ibb.co/kXL09SP/brain.jpg" alt="Billy" className="image"></Image>
          <H2>Billy Le</H2>
          <p>
            Gummies pastry macaroon donut cake jelly marzipan powder. Chupa chups dessert chocolate jelly
            muffin donut candy wafer. Cheesecake carrot cake cheesecake toffee jelly-o marzipan tart. Icing
            marzipan tootsie roll. Chocolate topping gummi bears fruitcake gummies. Tootsie roll macaroon
            fruitcake cotton candy jujubes tart chocolate bar gummies sweet. Chocolate fruitcake wafer
            cheesecake bonbon cotton candy ice cream fruitcake powder. Liquorice candy canes carrot cake.
            Tiramisu tootsie roll croissant topping gummi bears donut oat cake tootsie roll. Cheesecake sugar
            plum jelly beans candy canes marshmallow gummies. Caramels croissant bonbon cheesecake muffin.
            Danish tiramisu tootsie roll. Ice cream marshmallow caramels chocolate cake gummies.
          </p>
        </Bio>

        <Bio>
          <Image src="https://i.ibb.co/CQtwZWJ/Anakaheadshot.jpg" alt="Anaka" className="image"></Image>
          <H2>Anaka Norfleet</H2>
          <p>
            What sets me apart from everyone else stems from my background in nursing. During my 14+ years as
            an ER nurse, I have honed my communication skills by greeting people on one of the worst days of
            their lives, calming their fears and building their trust by employing active listening and then
            using the information obtained to combine with my technical skills to not only find a solution
            that meets their needs, but also allows me to anticipate needs they may not even know they have
            yet. I believe the key components of customer service include not only listening to the customer,
            but knowing what questions to ask in order to dig a little deeper. What a person perceives as
            their biggest problem is often not the root of the actual problem. My process of extracting
            information, using critical thinking to evaluate and prioritize what’s important and then
            employing the necessary technical skills to solve the problem is what enables me to efficiently
            create a solution to whatever problem a customer may experience.
          </p>
          <p>
            During my time as an ER nurse, I have been challenged many times to think outside the box in order
            to treat unique situations that people sometimes find themselves in. Never knowing what is coming
            through the door at any moment has prepared me to remain calm and think clearly under extremely
            stressful situations. Critical thinking coupled with creativity is the basis of ER nursing.
          </p>
          <p>
            I believe this combination of skills is not only rare to find in someone else, but it also
            extremely valuable to have in a software engineer.
          </p>
        </Bio>
      </Container>
    </>
  );
}
