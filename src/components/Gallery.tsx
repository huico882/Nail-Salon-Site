import { ImageList, ImageListItem } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const Gallery = () => {
  return (
    <Box
      mt={6}
      sx={{
        width: "95%",
        overflowY: "scroll",
        maxHeight: "600px",
        padding: 1.5,
      }}
      //   alignContent="center"
    >
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

const itemData = [
  {
    img: "/NailArtJPEG/IMG_0609.jpg",
    title: "Bed",
  },
  {
    img: "/NailArtJPEG/IMG_1477.jpg",
    title: "Books",
  },
  {
    img: "/NailArtJPEG/IMG_1478.jpg",
    title: "Sink",
  },
  {
    img: "/NailArtJPEG/IMG_1479.jpg",
    title: "Kitchen",
  },
  {
    img: "/NailArtJPEG/IMG_1540.jpg",
    title: "Blinds",
  },
  {
    img: "/NailArtJPEG/IMG_1565.jpg",
    title: "Chairs",
  },
  {
    img: "/NailArtJPEG/IMG_1628.jpg",
    title: "Laptop",
  },
  {
    img: "/NailArtJPEG/IMG_1852.jpg",
    title: "Doors",
  },
  {
    img: "/NailArtJPEG/IMG_1853.jpg",
    title: "Coffee",
  },
  {
    img: "/NailArtJPEG/IMG_2187.jpg",
    title: "Storage",
  },
  {
    img: "/NailArtJPEG/IMG_2194.jpg",
    title: "Candle",
  },
  {
    img: "/NailArtJPEG/IMG_2934.jpg",
    title: "Coffee table",
  },
  {
    img: "/NailArtJPEG/IMG_2220.jpg",
    title: "Coffee table",
  },
  {
    img: "/NailArtJPEG/IMG_2935.jpg",
    title: "Coffee table",
  },
  {
    img: "/NailArtJPEG/IMG_2951.jpg",
    title: "Coffee table",
  },
];
