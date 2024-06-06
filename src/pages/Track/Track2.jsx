import SidebarTrack from './SidebarTrack';
import RegistrTrack2 from './RegistrTrack2';

const Track2 = () => {
  return (
    <div className="container mx-auto flex items-start gap-5 px-4">
      <SidebarTrack />
      <RegistrTrack2 className="w-[840px]"/>
    </div>
  );
}

export default Track2