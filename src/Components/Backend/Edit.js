import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import ProfileCard from "../Common/ProfileCard";

const Edit = (props) => {
  const { attributes, setAttributes, clientId,isSelected} = props;

  // const { } = attributes;

  return (
    <>
      <Settings {...{ attributes, setAttributes, }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />

        <ProfileCard isSelected={isSelected} attributes={attributes} setAttributes={setAttributes}></ProfileCard>
      </div>
    </>
  );
};
export default Edit;
