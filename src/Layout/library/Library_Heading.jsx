const LibraryHeading = ({ icon, title }) => {
  return (
    <div className="flex md:text-lg font-main font-bold text-text items-center gap-3 pb-2 border-b-2 border-border-dark">
      <i className={icon}></i>
      <h1>{title}</h1>
    </div>
  )
}

export default LibraryHeading;