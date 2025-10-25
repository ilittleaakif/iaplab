const LibraryHeading = ({ title }) => {
  return (
    <span class="flex items-center select-none">
      <span class="h-px flex-1 bg-gradient-to-r from-transparent to-text"></span>
      <h1 class="shrink-0 sm:text-lg text-sm text-text sm:px-4 px-2">{title}</h1>
      <span class="h-px flex-1 bg-gradient-to-l from-transparent to-text"></span>
    </span>
  )
}
export default LibraryHeading;

