export const LibraryHeading = ({icon : Icon, title, accent }) => {
  return (
    <div className="flex font-main font-bold text-text items-center gap-3 pb-2 border-b-2 border-border-dark">
      <Icon className="md:w-6 md:h-6 w-5 h-5" color={accent}/>
      <h1 className="md:text-lg">{title}</h1>
    </div>
  )
}