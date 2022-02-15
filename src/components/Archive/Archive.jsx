import React from "react"
import img1 from "../../../static/img/arch.webp"
import ArchiveGrid from "./ArchiveGrid/ArchiveGrid"
import ArchiveSlider from "./ArchiveSlider/ArchiveSlider"

const Archive = () => {
  const [preview, setPreview] = React.useState(img1)

  return (
    <div className="archive">
      <div className="archive-img-contain">
        <div className="archive-img-inner">
          <img src={preview} alt="" />
        </div>
      </div>

      <ArchiveGrid preview={preview} setPreview={setPreview} />
      <ArchiveSlider preview={preview} setPreview={setPreview} />
    </div>
  )
}

export default Archive
