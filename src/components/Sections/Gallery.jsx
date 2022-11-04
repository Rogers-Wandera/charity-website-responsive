import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import charity1 from "../../assets/img-charity/3.jpg";
import charity2 from "../../assets/img-charity/7.jpg";
import charity3 from "../../assets/img-charity/28.jpg";
import charity4 from "../../assets/img-charity/29.jpg";
import charity5 from "../../assets/img-charity/30.jpg";
import charity6 from "../../assets/img-charity/31.jpg";
import charity7 from "../../assets/img-charity/32.jpg";
import charity8 from "../../assets/img-charity/33.jpg";
import charity9 from "../../assets/img-charity/24.jpg";
import charity10 from "../../assets/img-charity/25.jpg";
import charity11 from "../../assets/img-charity/26.jpg";
import charity12 from "../../assets/img-charity/23.jpg";
import charity13 from "../../assets/img-charity/22.jpg";
import charity14 from "../../assets/img-charity/13.jpg";
import charity15 from "../../assets/img-charity/14.jpg";
import charity16 from "../../assets/img-charity/16.jpg";
import charity17 from "../../assets/img-charity/21.jpg";

export default function GalleryImage() {
  return (
    <Box sx={{ width: "100%", height: "auto", overflowY: 'scroll' }}>
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
    title: 'Bed',
    author: "Love Happiness Foundation",
  },
  {
    img: charity2,
    title: 'Books',
    author: "Love Happiness Foundation",
  },
  {
    img: charity3,
    title: 'Sink',
    author: "Love Happiness Foundation",
  },
  {
    img: charity4,
    title: 'Kitchen',
    author: "Love Happiness Foundation",
  },
  {
    img: charity5,
    title: 'Blinds',
    author: "Love Happiness Foundation",
  },
  {
    img: charity6,
    title: 'Chairs',
    author: "Love Happiness Foundation",
  },
  {
    img: charity7,
    title: 'Laptop',
    author: "Love Happiness Foundation",
  },
  {
    img: charity8,
    title: 'Doors',
    author: "Love Happiness Foundation",
  },
  {
    img: charity10,
    title: 'Coffee',
    author: "Love Happiness Foundation",
  },
  {
    img: charity11,
    title: 'Storage',
    author: "Love Happiness Foundation",
  },
  {
    img: charity12,
    title: 'Candle',
    author: "Love Happiness Foundation",
  },
  {
    img: charity13,
    title: 'Coffee table',
    author: "Love Happiness Foundation",
  },
  {
    img: charity9,
    title: 'Coffee table',
    author: "Love Happiness Foundation",
  },
  {
    img: charity14,
    title: 'Coffee table',
    author: "Love Happiness Foundation",
  },
  {
    img: charity15,
    title: 'Coffee table',
    author: "Love Happiness Foundation",
  },
  {
    img: charity16,
    title: 'Coffee table',
    author: "Love Happiness Foundation",
  },
  {
    img: charity17,
    title: 'Coffee table',
    author: "Love Happiness Foundation",
  },
];