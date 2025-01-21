import { __ } from "@wordpress/i18n";
import { MediaUpload } from "@wordpress/block-editor";
import {
  PanelBody,
  __experimentalInputControl as InputControl,
  TextControl,
  Button,
  TextareaControl,
} from "@wordpress/components";

const General = ({ attributes, setAttributes }) => {
  const { profiles } = attributes;

  const handleAddProfile = () => {
    const newProfile = {
      name: "New User",
      img: "https://i.ibb.co.com/JjgYLtD/forest-6874717-1920.jpg",
      bio: "Creative designer with 5+ years of experience in digital product design and brand identity.",
      title: "Product Designer",
      stats: [
        { label: "Projects", value: "1.3k" },
        { label: "Followers", value: "30.0k" },
        { label: "Following", value: "5.0k" },
      ],
      skills: ["UI/UX", "Branding", "Motion"],
      buttons: [
        { type: "primary", label: "Follow" },
        { type: "secondary", label: "Message" },
      ],
    };
    setAttributes({ profiles: [...profiles, newProfile] });
  };

  const handleRemoveProfile = (index) => {
    const updatedProfiles = profiles.filter((_, i) => i !== index);
    setAttributes({ profiles: updatedProfiles });
  };

  const handleProfileChange = (index, key, value) => {
    const updatedProfiles = [...profiles];
    updatedProfiles[index][key] = value;
    setAttributes({ profiles: updatedProfiles });
  };

  const handleDuplicateProfile = (index) => {
    const profileToDuplicate = profiles[index];
    const updatedProfiles = [...profiles, { ...profileToDuplicate }];
    setAttributes({ profiles: updatedProfiles });
  };
  // Stats Start
  const handleStatsChange = (profileIndex, statIndex, key, value) => {
    const updatedProfiles = [...profiles];

    updatedProfiles[profileIndex] = {
      ...updatedProfiles[profileIndex],

      stats: updatedProfiles[profileIndex].stats.map((stat, index) =>
        index === statIndex ? { ...stat, [key]: value } : stat
      ),
    };
    setAttributes({ profiles: updatedProfiles });
  };
  // Stats End

  // skills start
  const handleAddSkill = (profileIndex) => {
    const updatedProfiles = [...profiles];
    updatedProfiles[profileIndex] = {
      ...updatedProfiles[profileIndex],
      skills: [...updatedProfiles[profileIndex].skills, "New Skill"]
    };
    setAttributes({ profiles: updatedProfiles });
  };

  const handleSkillChange = (profileIndex, skillIndex, value) => {
    const updatedProfiles = [...profiles];
    updatedProfiles[profileIndex] = {
      ...updatedProfiles[profileIndex],
      skills: updatedProfiles[profileIndex].skills.map((skill, index) =>
        index === skillIndex ? value : skill
      ),
    };
    setAttributes({ profiles: updatedProfiles });
  };

  const handleRemoveSkill = (profileIndex, skillIndex) => {
    const updatedProfiles = [...profiles];
    updatedProfiles[profileIndex] = {
      ...updatedProfiles[profileIndex],
      skills: updatedProfiles[profileIndex].skills.filter(
        (_, index) => index !== skillIndex
      ),
    };
    setAttributes({ profiles: updatedProfiles });
  };
  // skills end

  // button start

  // const handleAddButton = (profileIndex) => {
  //   const updatedProfiles = [...profiles];
  //   updatedProfiles[profileIndex] = {
  //     ...updatedProfiles[profileIndex],
  //     buttons: [...updatedProfiles[profileIndex].buttons, { label: "New Button" }]
  //   };
  //   setAttributes({ profiles: updatedProfiles });
  // };

  const handleButtonChange = (profileIndex, buttonIndex, value) => {
    const updatedProfiles = [...profiles];
    updatedProfiles[profileIndex].buttons[buttonIndex] = {
      ...updatedProfiles[profileIndex].buttons[buttonIndex],
      label: value,
    };
    setAttributes({ profiles: updatedProfiles });
  };
  const handleRemoveButton = (profileIndex, buttonIndex) => {
    const updatedProfiles = [...profiles];
    updatedProfiles[profileIndex] = {
      ...updatedProfiles[profileIndex],
      buttons: updatedProfiles[profileIndex].buttons.filter(
        (_, index) => index !== buttonIndex
      ),
    };
    setAttributes({ profiles: updatedProfiles });
  };

  //button end

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Profile Customization", "b-blocks")}
        initialOpen={false}
      >
        {profiles.map((profile, index) => (
          <div key={index}>
            <PanelBody
              className="bPlPanelBody"
              title={`${__("Profile", "b-blocks")} - ${profile?.name || __("Name not set", "b-blocks")} (${index + 1})`}
              initialOpen={false}
            >
              <div key={index} className="profile-card">
                <div
                  className="imageSection"
                  style={{ marginTop: "20px", marginBottom: "20px" }}
                >
                  {/* Image URL Input */}
                  <TextControl
                    label={__("Image URL:", "b-blocks")}
                    placeholder={__("Enter Image URL...", "b-blocks")}
                    value={profile.img || ""}
                    onChange={(value) =>
                      handleProfileChange(index, "img", value)
                    }
                  />

                  {/* Media Upload */}
                  <MediaUpload
                    onSelect={(media) => {
                      handleProfileChange(index, "img", media.url);
                    }}
                    allowedTypes={["image"]}
                    render={({ open }) => (
                      <Button
                        onClick={open}
                        isPrimary
                        className="editor-media-placeholder_button is-button is-default is-large"
                      >
                        {__("Upload Image", "b-blocks")}
                      </Button>
                    )}
                  />
                </div>

                <TextControl
                  label={__("Name", "b-blocks")}
                  placeholder="Your Name"
                  value={profile?.name}
                  onChange={(value) =>
                    handleProfileChange(index, "name", value)
                  }
                />
                <InputControl
                  style={{ marginTop: "20px", marginBottom: "20px" }}
                  label="Title"
                  value={profile?.title}
                  onChange={(newTitle) =>
                    handleProfileChange(index, "title", newTitle)
                  }
                  placeholder="Your Postion Name"
                />
                <TextareaControl
                  label={__("Description : ", "b-blocks")}
                  placeholder={__("Your Description Add...", "b-blocks")}
                  value={profile?.bio || ""}
                  onChange={(dec) => handleProfileChange(index, "bio", dec)}
                />

                {/* button */}
                <div
                  className=""
                  style={{ marginBottom: "20px", display: "flex" }}
                >
                  <Button
                    isDestructive
                    isSecondary
                    onClick={() => handleRemoveProfile(index)}
                  >
                    {__("Remove Profile", "b-blocks")}
                  </Button>

                  <Button
                    isSecondary
                    onClick={() => handleDuplicateProfile(index)}
                    style={{ marginLeft: "5px" }}
                  >
                    {__("Duplicate", "b-blocks")}
                  </Button>
                </div>
              </div>
            </PanelBody>
          </div>
        ))}
        <Button isPrimary onClick={handleAddProfile}>
          {__("Add Profile", "b-blocks")}
        </Button>
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Stats Customization", "b-blocks")}
        initialOpen={false}
      >
        {profiles.map((profile, index) => (
          <div key={index}>
      <PanelBody
        className="bPlPanelBody"
        title={`${__("Starts", "b-blocks")} -  (${index + 1})`}
        initialOpen={false}
      >
          <div style={{ marginTop: "20px" }} key={index}>
            {profile.stats.map((stat, statIndex) => (
              <div key={statIndex} className="stat-editor">
                <TextControl
                  label="Label"
                  value={stat.label}
                  onChange={(value) =>
                    handleStatsChange(index, statIndex, "label", value)
                  }
                />
                <TextControl
                  label="Value"
                  value={stat.value}
                  onChange={(value) =>
                    handleStatsChange(index, statIndex, "value", value)
                  }
                />
              </div>
            ))}
          </div>
      </PanelBody>

      </div>

        ))}
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Skills Customization", "b-blocks")}
        initialOpen={false}
      >
        {profiles.map((profile, index) => (
      <div key={index}>
      <PanelBody
        className="bPlPanelBody"
        title={`${__("Skills", "b-blocks")} -  (${index + 1})`}
        initialOpen={false}
      >
            {profile.skills.map((skill, skillIndex) => (
              <div key={skillIndex} style={{ marginBottom: "10px" }}>
                <TextControl
                  label={__("Skill " + (skillIndex + 1), "b-blocks")}
                  value={skill}
                  onChange={(newSkill) =>
                    handleSkillChange(index, skillIndex, newSkill)
                  }
                />
                <Button
                  isDestructive
                  isSecondary
                  onClick={() => handleRemoveSkill(index, skillIndex)}
                  style={{ marginTop: "5px" }}
                >
                  {__("Remove Skill", "b-blocks")}
                </Button>
              </div>
            ))}
            <Button
              isPrimary
              onClick={() => handleAddSkill(index)}
              style={{ marginTop: "10px" }}
            >
              {__("Add Skill", "b-blocks")}
            </Button>
      </PanelBody>

      </div>
        ))}
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Buttons Customization", "b-blocks")}
        initialOpen={false}
      >
        {profiles.map((profile, index) => (
          <div
            style={{ marginTop: "20px" }}
            className="uttonsSection"
            key={index}
          >
        <PanelBody
        className="bPlPanelBody"
        title={`${__("Buttons", "b-blocks")} -  (${index + 1})`}
        initialOpen={false}
      >
            {profile.buttons.map((button, buttonIndex) => (
              <div
                key={buttonIndex}
                style={{ marginBottom: "10px" }}
                className="profile-card"
              >
                <TextControl
                  label={__("Button " + (buttonIndex + 1), "b-blocks")}
                  value={button.label}
                  onChange={(newLabel) =>
                    handleButtonChange(index, buttonIndex, newLabel)
                  }
                />
                <Button
                  isDestructive
                  isSecondary
                  onClick={() => handleRemoveButton(index, buttonIndex)}
                  style={{ marginTop: "5px" }}
                >
                  {__("Remove Button", "b-blocks")}
                </Button>
              </div>
            ))}
            {/* button add */}
            {/* <Button
                isPrimary
               onClick={() => handleAddButton(index)}
              style={{ marginTop: "10px" }}
               >
            {__("Add Button", "b-blocks")}
            </Button> */}
      </PanelBody>
          </div>
        ))}
      </PanelBody>
    </>
  );
};

export default General;
