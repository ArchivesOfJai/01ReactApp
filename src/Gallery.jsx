import RandomPicture from "./RandomPictures";

const gallery = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  rowGap:"10px",
  columnGap:"15px"
};

function Gallery() {
  return (
    <>
      <div style={gallery}>
        <RandomPicture />
        <RandomPicture />
        <RandomPicture />
        <RandomPicture />
        <RandomPicture />
        <RandomPicture />
        <RandomPicture />
        <RandomPicture />
        <RandomPicture />
        <RandomPicture />
      </div>
    </>
  );
}

export default Gallery;
