import DirectoryItem from "../directory-item/DirectoryItem";
import "./directory.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map(({ title, id, imageUrl }) => (
        <DirectoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Directory;
