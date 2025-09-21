export const LibraryHeading = ({icon : Icon, title, accent }) => {
  return (
    <div className="flex font-poppins font-semibold text-text items-center gap-3 pb-2 border-b border-border-light">
      <Icon className="md:w-6 md:h-6 w-5 h-5" color={accent}/>
      <h1 className="md:text-lg">{title}</h1>
    </div>
  )
}