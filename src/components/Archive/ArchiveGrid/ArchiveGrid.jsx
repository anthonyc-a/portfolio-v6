import React from "react"
import ArchiveGridItem from "./ArchiveGridItem/ArchiveGridItem"
import img1 from "../../../../static/img/arch.webp"
import img2 from "../../../../static/img/rarchitecture.png"
import img3 from "../../../../static/img/StudioPB.png"
import img4 from "../../../../static/img/smth_studios.png"
import img5 from "../../../../static/img/ve-go.png"
import img6 from "../../../../static/img/PAK.webp"

const ArchiveGrid = ({ preview, setPreview }) => {
  return (
    <div className="archive-grid">
      <ArchiveGridItem
        preview={preview}
        setPreview={setPreview}
        title={"Archvizual"}
        img={img1}
      />
      <ArchiveGridItem
        preview={preview}
        setPreview={setPreview}
        title={"R Architecture"}
        img={img2}
      />
      <ArchiveGridItem
        preview={preview}
        setPreview={setPreview}
        title={"Studio PB"}
        img={img3}
      />
      <ArchiveGridItem
        preview={preview}
        setPreview={setPreview}
        title={"Smthn Studios"}
        img={img4}
      />
      <ArchiveGridItem
        preview={preview}
        setPreview={setPreview}
        title={"VE-GO"}
        img={img5}
      />
      <ArchiveGridItem
        preview={preview}
        setPreview={setPreview}
        title={"PAK NFT Archive"}
        img={img6}
      />
    </div>
  )
}

export default ArchiveGrid
