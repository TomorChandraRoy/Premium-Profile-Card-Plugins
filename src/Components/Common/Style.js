const Style = ({ attributes, id }) => {
  const { nameStyle, titleStyle, statsStyle, width, height,profileRadius,gradientBackground } = attributes;
  const { NameColor } = nameStyle;
  const { titleColor, titleSize } = titleStyle;

  const { labelColor, labelSize, valueColor, valueSize } = statsStyle;
  const { top, right, bottom, left } = profileRadius;

  const mainSl = `#${id}`;
  const profileInfo = `${mainSl} .profile-info`;
  const name = `${profileInfo} .name`;
  const title = `${profileInfo} .title`;

  const Stats = `${mainSl} .stats`;
  const stat = `${Stats} .stat`;
  const statValue = `${stat} .stat-value`;
  const statlabel = `${Stats} .stat-label`;

  const container = `${mainSl} .container`;
  const profileCard = `${container} .profile-card`;

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
	${statlabel}{
	color:${labelColor};
	font-size:${labelSize};
	}
	${statValue}{
	color:${valueColor};
	font-size:${valueSize};
	}
  ${profileCard}{
   max-width:${width};
   height:${height};
   border-radius:${top} ${right} ${bottom} ${left};
   background:${gradientBackground}
  }
    `,
      }}
    />
  );
};

export default Style;
