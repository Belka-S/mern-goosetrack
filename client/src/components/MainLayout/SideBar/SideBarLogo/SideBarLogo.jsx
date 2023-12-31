import gooseMob1x from 'images/others/mobile/goose1x.png';
import gooseMob2x from 'images/others/mobile/goose2x.png';
import gooseMob3x from 'images/others/mobile/goose3x.png';
import gooseTabl1x from 'images/others/tablet/goose1x.png';
import gooseTabl2x from 'images/others/tablet/goose2x.png';
import gooseTabl3x from 'images/others/tablet/goose3x.png';
import gooseDesk1x from 'images/others/desktop/goose1x.png';
import gooseDesk2x from 'images/others/desktop/goose2x.png';
import gooseDesk3x from 'images/others/desktop/goose3x.png';

import { LogoText, LogoDiv, LogoIMG } from './SideBarLogo.styled';

export default function SideBarLogo() {
  return (
    <LogoDiv>
      <LogoIMG
        srcSet={`${gooseMob1x} 1x,
        ${gooseMob2x} 2x,
        ${gooseMob3x} 3x,
        ${gooseTabl1x} 1x,
        ${gooseTabl2x} 2x,
        ${gooseTabl3x} 3x,
        ${gooseDesk1x} 1x,
        ${gooseDesk2x} 2x,
        ${gooseDesk3x} 3x`}
        src={gooseMob1x}
        alt="SideBarLogo"
        type="image/png"
      />
      <LogoText>
        G<i style={{ marginLeft: '-2px', paddingRight: '1px', letterSpacing: '-0.03em' }}>oo</i>
        seTrack
      </LogoText>
    </LogoDiv>
  );
}
