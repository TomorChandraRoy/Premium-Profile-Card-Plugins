const Style = ({ attributes, id }) => {
  const { nameStyle, titleStyle, statsStyle, width, height,profileRadius,gradientBackground,bioStyle,skillsStyle,buttonStyle } = attributes;
  const { NameColor } = nameStyle;
  const { titleColor, titleSize } = titleStyle;
  const { bioSize, bioColor } = bioStyle;
  const {skillsBg,skillsColor} = skillsStyle;

  const { labelColor, labelSize, valueColor, valueSize } = statsStyle;
  const { top, right, bottom, left } = profileRadius;

  const { buttonBg,buttonColor,buttonSecondary } = buttonStyle;

  const mainSl = `#${id}`;
  const profileInfo = `${mainSl} .profile-info`;
  const name = `${profileInfo} .name`;
  const title = `${profileInfo} .title`;
  const bio = `${profileInfo} .bio`;

  const skills = `${profileInfo} .skills`;
  const skill = `${skills} .skill`;

  const Stats = `${mainSl} .stats`;
  const stat = `${Stats} .stat`;
  const statValue = `${stat} .stat-value`;
  const statlabel = `${Stats} .stat-label`;



  const container = `${mainSl} .container`;
  const profileCard = `${container} .profile-card`;


  const actions = `${profileInfo} .actions .primary`;
  const secondary = `${profileInfo} .actions .secondary`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
	${name}{
  background:${NameColor};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

	}
	${title}{
	color:${titleColor};
	font-size:${titleSize};
	}
	${bio}{
	color:${bioColor};
	font-size:${bioSize};
	}
	${statlabel}{
	color:${labelColor};
	font-size:${labelSize};
	}
	${skill}{
   background:${skillsBg};
   color:${skillsColor};
	}
	${skill}:hover{
        background: rgba(255, 255, 255, 0.1);
        color: white;
        transform: translateY(-2px);
	}
	${statValue}{
	background:${valueColor};
  background-clip: text;
  -webkit-text-fill-color: transparent;
	font-size:${valueSize};
	}
  ${profileCard}{
   max-width:${width};
   height:${height};
   border-radius:${top} ${right} ${bottom} ${left};
   background:${gradientBackground};
  }
   ${secondary}{
   background:${buttonSecondary};
   }
   ${actions}{
   background:${buttonBg};
   color:${buttonColor};
   }
    `,
      }}
    />
  );
};

export default Style;
