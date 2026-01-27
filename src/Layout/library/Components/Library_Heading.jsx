const LibraryHeading = ({ title }) => {
  return (
    <span className="flex items-center select-none">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-accent"></span>
      <h1 className="shrink-0 font-logo font-bold text-accent sm:text-lg text-sm sm:px-4 px-2">{title}</h1>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-accent"></span>
    </span>
  )
}
export default LibraryHeading;

