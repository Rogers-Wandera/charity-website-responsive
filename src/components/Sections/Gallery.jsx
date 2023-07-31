import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import charity1 from "../../assets/save/1 (1).jpg";
import charity2 from "../../assets/save/1 (2).jpg";
import charity3 from "../../assets/save/1 (3).jpg";
import charity4 from "../../assets/save/1 (4).jpg";
import charity5 from "../../assets/save/1 (5).jpg";
import charity6 from "../../assets/save/1 (6).jpg";
import charity7 from "../../assets/save/1 (7).jpg";
import charity8 from "../../assets/save/1 (8).jpg";
import charity9 from "../../assets/save/1 (9).jpg";
import charity10 from "../../assets/save/1 (10).jpg";
import charity11 from "../../assets/save/1 (11).jpg";
import charity12 from "../../assets/save/1 (12).jpg";
import charity13 from "../../assets/save/1 (13).jpg";
import charity14 from "../../assets/save/1 (14).jpg";
import charity15 from "../../assets/save/1 (15).jpg";
import charity16 from "../../assets/save/1 (16).jpg";
import charity17 from "../../assets/save/1 (17).jpg";
import charity18 from "../../assets/more-charity/1.jpg";
import charity19 from "../../assets/more-charity/2.jpg";
import charity20 from "../../assets/more-charity/4.jpg";
import charity21 from "../../assets/more-charity/5.jpg";
import charity22 from "../../assets/more-charity/12.jpg";

export default function GalleryImage() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        overflowY: "scroll",
        margin: "8rem 0 2rem 0",
      }}
    >
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: charity1,
    title: "Bed",
    author: "Save My Soul For Africa",
  },
  {
    img: charity2,
    title: "Books",
    author: "Save My Soul For Africa",
  },
  {
    img: charity3,
    title: "Sink",
    author: "Save My Soul For Africa",
  },
  {
    img: charity4,
    title: "Kitchen",
    author: "Save My Soul For Africa",
  },
  {
    img: charity5,
    title: "Blinds",
    author: "Save My Soul For Africa",
  },
  {
    img: charity6,
    title: "Chairs",
    author: "Save My Soul For Africa",
  },
  {
    img: charity7,
    title: "Laptop",
    author: "Save My Soul For Africa",
  },
  {
    img: charity8,
    title: "Doors",
    author: "Save My Soul For Africa",
  },
  {
    img: charity10,
    title: "Coffee",
    author: "Save My Soul For Africa",
  },
  {
    img: charity11,
    title: "Storage",
    author: "Save My Soul For Africa",
  },
  {
    img: charity12,
    title: "Candle",
    author: "Save My Soul For Africa",
  },
  {
    img: charity13,
    title: "Coffee table",
    author: "Save My Soul For Africa",
  },
  {
    img: charity9,
    title: "Coffee table",
    author: "Save My Soul For Africa",
  },
  {
    img: charity14,
    title: "Coffee table",
    author: "Save My Soul For Africa",
  },
  {
    img: charity15,
    title: "Coffee table",
    author: "Save My Soul For Africa",
  },
  {
    img: charity16,
    title: "Coffee table",
    author: "Save My Soul For Africa",
  },
  {
    img: charity17,
    title: "Coffee table",
    author: "Save My Soul For Africa",
  },
  {
    img: charity18,
    title: "Coffee table",
    author: "Save My Soul For Africa",
  },
  {
    img: charity19,
    title: "Coffee table",
    author: "Save My Soul For Africa",
  },
  {
    img: charity18,
    title: "Coffee table",
    author: "Save My Soul For Africa",
  },
  {
    img: charity19,
    title: "Coffee table",
    author: "Save My Soul For Africa",
  },
  {
    img: charity20,
    title: "Coffee table",
    author: "Save My Soul For Africa",
  },
  {
    img: charity21,
    title: "Coffee table",
    author: "Save My Soul For Africa",
  },
  {
    img: charity22,
    title: "Coffee table",
    author: "Save My Soul For Africa",
  },
];
