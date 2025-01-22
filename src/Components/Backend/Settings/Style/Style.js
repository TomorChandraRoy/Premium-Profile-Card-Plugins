import { __ } from "@wordpress/i18n";
import {
  ColorPalette,
  FontSizePicker,
  PanelBody,
  SelectControl,
  __experimentalBoxControl as BoxControl,
  __experimentalUnitControl as UnitControl,
  GradientPicker,
  ToggleControl,
} from "@wordpress/components";
import {} from "../../../../../../bpl-tools/Components";

const Style = ({ attributes, setAttributes }) => {
  const {
    nameStyle,
    titleStyle,
    bioStyle,
    statsStyle,
    width,
    height,
    profileRadius,
    gradientBackground,
    skillsStyle,
    buttonToggle,
    buttonStyle,
  } = attributes;
  // console.log(buttonToggle);

  const { NameColor, NameTag } = nameStyle;
  const { titleColor, titleSize } = titleStyle;
  const { bioSize, bioColor } = bioStyle;
  const { labelColor, labelSize, valueColor, valueSize } = statsStyle;
  const { buttonBg, buttonColor } = buttonStyle;

  return (
    <>
      <PanelBody
        className="bPlPanel"
        title={__("Profile Styles ", "b-blocks")}
        initialOpen={false}
      >
        <h3>{__("Name Color:", "b-blocks")}</h3>
        <GradientPicker
          onChange={(color) => {
            setAttributes({ nameStyle: { ...nameStyle, NameColor: color } });
          }}
          value={NameColor || ""}
        />
        <SelectControl
          label={__("Name Tag : ")}
          value={NameTag}
          onChange={(tag) => {
            setAttributes({ nameStyle: { ...nameStyle, NameTag: tag } });
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
            setAttributes({ titleStyle: { ...titleStyle, titleColor: color } });
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
            setAttributes({ titleStyle: { ...titleStyle, titleSize: size } });
          }}
          value={titleSize}
        />
        <h3>{__("Bio Color:", "b-blocks")}</h3>
        <ColorPalette
          value={bioColor}
          onChange={(color) => {
            setAttributes({ bioStyle: { ...bioStyle, bioColor: color } });
          }}
        />

        <h3>{__("Bio Size:", "b-blocks")}</h3>
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
            setAttributes({ bioStyle: { ...bioStyle, bioSize: size } });
          }}
          value={bioSize}
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
        <div style={{ marginTop: "20px" }}>
          {__("Value Color:", "b-blocks")}
        </div>
        <GradientPicker
          onChange={(color) => {
            setAttributes({ statsStyle: { ...statsStyle, valueColor: color } });
          }}
          value={valueColor || ""}
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

      <PanelBody title={__("Skills Style", "b-blocks")} initialOpen={false}>
        <h3>{__("Skill Color:", "b-blocks")}</h3>
        <ColorPalette
          value={skillsStyle.skillsColor}
          onChange={(color) => {
            setAttributes({
              skillsStyle: { ...skillsStyle, skillsColor: color },
            });
          }}
        />
        <h3>{__("BG Color:", "b-blocks")}</h3>
        <ColorPalette
          value={skillsStyle.skillsBg}
          onChange={(color) => {
            setAttributes({ skillsStyle: { ...skillsStyle, skillsBg: color } });
          }}
        />
      </PanelBody>

      <PanelBody
        title={__("Profile Card Size", "b-blocks")}
        initialOpen={false}
      >
        <UnitControl
          label="Height"
          value={height}
          onChange={(newHeight) => setAttributes({ height: newHeight })}
        />
        <UnitControl
          label="Width"
          value={width}
          onChange={(newWidth) => setAttributes({ width: newWidth })}
        />

        <BoxControl
          label="Border Radius"
          values={profileRadius}
          onChange={(Value) => setAttributes({ profileRadius: Value })}
        />

        <h3>Background Color</h3>
        <GradientPicker
          onChange={(color) => setAttributes({ gradientBackground: color })}
          value={gradientBackground}
        />
      </PanelBody>

      <PanelBody title={__("Button Style", "b-blocks")} initialOpen={false}>
        <ToggleControl
          label="Button ON/OFF"
          help={buttonToggle ? "Button ON." : "Button OFF"}
          checked={buttonToggle}
          onChange={(e) => setAttributes({ buttonToggle: e })}
        />

        <h3>{__("Button Text Color:", "b-blocks")}</h3>
        <ColorPalette
          value={buttonColor}
          onChange={(color) => {
            setAttributes({
              buttonStyle: { ...buttonStyle, buttonColor: color },
            });
          }}
        />
        <h3>{__(" Button BG Color:", "b-blocks")}</h3>
        <ColorPalette
          value={buttonBg}
          onChange={(color) => {
            setAttributes({ buttonStyle: { ...buttonStyle, buttonBg: color } });
          }}
        />
      </PanelBody>
    </>
  );
};

export default Style;
