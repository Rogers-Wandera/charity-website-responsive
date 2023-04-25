import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";
import image1 from "../../assets/img-charity/24.jpg";
import image2 from "../../assets/img-charity/8.jpg";
import image3 from "../../assets/img-charity/10.jpg";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Blog Stories</h1>
            <p className="font13">
              You will get to witness what we have done for the kids in the past
              years
              <br />
              Be kindful enough to help a soul.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Built a bore hole for clean water!"
                text="We believe good health starts from taking and using clean water so we solisted funds and we managed to build a bore hole."
                tag="Save My Soul For Africa"
                author="Save My Soul For Africa"
                action={() => alert("Details comming soon")}
                image={image1}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Purchased Scholarstic materials!"
                text="We believe children are the future of tomorrow, so educating them is the key, we bought books and other scholarstic materials for them."
                tag="Save My Soul For Africa"
                author="Save My Soul For Africa"
                action={() => alert("Details comming soon")}
                image={image2}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Social Life and social Gatherings!"
                text="We beleieve that games and social gatherings are key to bringing up kids the better way so we put up social gatherings and provide small gifts to them."
                tag="Save My Soul For Africa"
                author="Save My Soul For Africa"
                action={() => alert("Details comming soon")}
                image={image3}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">What People Say?</h1>
            <p className="font13">
              What people say about Love Happiness Foundation Uganda
              <br />
              These are people reviews that they give to our Foundation
            </p>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
