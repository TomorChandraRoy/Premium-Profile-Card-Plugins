import { RichText } from "@wordpress/block-editor";

const ProfileCard = ({ isSelected, attributes, setAttributes }) => {

  const {nameStyle,profiles} = attributes;

  const TagName = nameStyle.NameTag || "span";

  return (
    <div>

      {profiles.map((profile, index) => (
 
        <body key={index}>
          <div className="container">
            <div className="profile-card">
              <div className="card-content">
                <div className="avatar-wrapper">
                  <div className="avatar">
                  <img className="avatarImg"
                      src={profile.img}
                      alt={profile.name}
                    />
                  </div>
                </div>

                <div className="profile-info">
                  {isSelected ? (
                    <RichText
                      className="name"
                      tagName={nameStyle.NameTag}
                      value={profile?.name}
                      onChange={(NewName) => {
                        setAttributes({ name: NewName });
                      }}
                    />
                  ) : (
                    <TagName className="name">{profile?.name}</TagName>
                  )}
                  <p className="title">{profile.title}</p>

                  <div className="stats">
                    {profile.stats.map((stat, i) => (
                      <div className="stat" key={i}>
                        <span className="stat-value">{stat.value}</span>
                        <span className="stat-label">{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bio">{profile.bio}</div>

                  <div className="skills">
                    {profile.skills.map((skill, i) => (
                      <span className="skill" key={i}>
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="actions">
                    {profile.buttons.map((button, i) => (
                      <button key={i} className={`action-btn ${button.type}`}>
                        {button.label}
                        <div className="btn-effect"></div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="card-shine"></div>
              <div className="card-border"></div>
              <div className="card-glow"></div>
            </div>
          </div>
        </body>
      ))}
      
    </div>
  );
};

export default ProfileCard;
