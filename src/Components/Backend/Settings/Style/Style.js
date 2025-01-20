import { __ } from "@wordpress/i18n";
import {
  ColorPalette,
  FontSizePicker,
  PanelBody,
  SelectControl,
  __experimentalBoxControl as BoxControl,
  __experimentalUnitControl as UnitControl,

} from "@wordpress/components";
import {} from "../../../../../../bpl-tools/Components";

const Style = ({ attributes, setAttributes }) => {
  const { nameStyle,titleStyle,statsStyle} = attributes;
  const {NameColor,NameTag}= nameStyle;
  const {titleColor,titleSize}= titleStyle;
  const {labelColor,labelSize,valueColor,valueSize}= statsStyle;


  

  console.log(labelColor,labelSize,valueColor,valueSize);
  

  return (
    <>
      <PanelBody
        className="bPlPanel"
        title={__("Profile Styles ", "b-blocks")}
        initialOpen={false}
      >


        <h3>{__("Name Color:", "b-blocks")}</h3>
        <ColorPalette
          value={NameColor || ""}
          onChange={(color) => {
            setAttributes({ nameStyle:{...nameStyle, NameColor: color} });
          }}
        />
        <SelectControl
          label={__("Name Tag : ")}
          value={NameTag}
          onChange={(tag) => {
            setAttributes({ nameStyle:{...nameStyle, NameTag: tag }});
          }}
          options={[
            { value: null, label: "Select a User", disabled: true },
            { value: "h2", label: "H2" },
            { value: "h3", label: "H3" },
            { value: "h4", label: "H4" },
            { value: "h5", label: "H5" },
            { value: "h6", label: "H6" },
          ]}
        />

      <h3>{__("Title Color:", "b-blocks")}</h3>
        <ColorPalette
          value={titleColor}
          onChange={(color) => {
            setAttributes({ titleStyle:{...titleStyle, titleColor: color }});
          }}
        />

       <h3>{__("Title Size:", "b-blocks")}</h3>
        <FontSizePicker
          fontSizes={[
            {
              name: "Small",
              size: 12,
              slug: "small",
            },
            {
              name: "Normal",
              size: 16,
              slug: "normal",
            },
            {
              name: "Big",
              size: 26,
              slug: "big",
            },
          ]}
          onChange={(size) => {
            setAttributes({ titleStyle:{...titleStyle, titleSize: size }});
          }}
          value={titleSize}
        />
      </PanelBody>

      <PanelBody title={__("Stats Style", "b-blocks")} initialOpen={false}>
        
        {/* Label Color */}
        <h3>{__("Label Color:", "b-blocks")}</h3>
        <ColorPalette
          value={labelColor}
          onChange={(color) => {
            setAttributes({ statsStyle: { ...statsStyle, labelColor: color } });
          }}
        />
        
        {/* Label Size */}
        <h3>{__("Label Size:", "b-blocks")}</h3>
        <FontSizePicker
          fontSizes={[
            { name: "Small", size: 12, slug: "small" },
            { name: "Normal", size: 16, slug: "normal" },
            { name: "Big", size: 26, slug: "big" },
          ]}
          onChange={(size) => {
            setAttributes({ statsStyle: { ...statsStyle, labelSize: size } });
          }}
          value={labelSize}
        />
        
        {/* Value Color */}
        <h3>{__("Value Color:", "b-blocks")}</h3>
        <ColorPalette
          value={valueColor}
          onChange={(color) => {
            setAttributes({ statsStyle: { ...statsStyle, valueColor: color } });
          }}
        />
        
        {/* Title Size */}
        <h3>{__("Value Size:", "b-blocks")}</h3>
        <FontSizePicker
          fontSizes={[
            { name: "Small", size: 12, slug: "small" },
            { name: "Normal", size: 16, slug: "normal" },
            { name: "Big", size: 26, slug: "big" },
          ]}
          onChange={(size) => {
            setAttributes({ statsStyle: { ...statsStyle, valueSize: size } });
          }}
          value={valueSize}
        />
      </PanelBody>


      <PanelBody title={__("Slider Size", "b-blocks")} initialOpen={false}>
        <UnitControl
          label="Height"
          value={""}
          onChange={(newHeight) => setAttributes({ sliderHeight: newHeight })}
        />
        <UnitControl
          label="Width"
          value={""}
          onChange={(newWidth) => setAttributes({ sliderWidth: newWidth })}
        />
      </PanelBody>

      <PanelBody title={__("Border Radius", "b-blocks")} initialOpen={false}>
        <BoxControl
          label="Border Radius"
          values={""}
          onChange={(Value) => setAttributes({ SliderRedius: Value })}
        />
      </PanelBody>

    </>
  );
};

export default Style;
