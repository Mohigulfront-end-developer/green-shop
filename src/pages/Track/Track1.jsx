import SidebarTrack from './SidebarTrack'
import RegistrTrack from './RegistrTrack'

export const Track1 = () => {
  return (
    <div>
        <div className="container mx-auto px-4 flex items-start gap-3">
            <SidebarTrack/>
            <RegistrTrack/>
        </div>
    </div>
  )
}
