import React from "react"

const ArchiveGridItem = ({ preview, setPreview, img, title }) => {
  return (
    <div
      className="archive-grid-item"
      onClick={() => {
        setPreview(img)
      }}
    >
      <div className="grid-item-inner">
        <div
          className={preview === img ? "item-overlay active" : "item-overlay"}
        >
          <span>{title}</span>
        </div>
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default ArchiveGridItem
