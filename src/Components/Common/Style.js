const Style = ({ attributes, id }) => {
  const { nameStyle, titleStyle ,statsStyle} = attributes;
  const { NameColor } = nameStyle;
  const { titleColor, titleSize } = titleStyle;

  const {labelColor,labelSize,valueColor,valueSize } = statsStyle;

// console.log("dy",labelColor,labelSize,valueColor,valueSize);
//   console.log(titleSize);

  // console.log(nameStyle);

  const mainSl = `#${id}`;
  const profileInfo = `${mainSl} .profile-info`;
  const name = `${profileInfo} .name`;
  const title = `${profileInfo} .title`;

  const Stats = `${mainSl} .stats`;
  const stat = `${Stats} .stat`;
  const statValue = `${stat} .stat-value`;
  const statlabel = `${Stats} .stat-label`;

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



    `,
      }}
    />
  );
};

export default Style;
