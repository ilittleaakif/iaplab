import { ArrowRight } from 'lucide-react'
import * as Wizard from '../Data/Wizard'
export const ExtraCard = ({ icon: Icon, title, des, btn, Link, clickEvent = null }) => {
  return (
    <div
      className={`bg-gradient-to-br from-bg-card to-bg-bg-dark border-2 border-border text-text flex flex-col justify-between md:p-6 p-4 h-fit transition-all`}>

      <div className="flex items-center mb-4">
        <Icon className={`md:w-8 md:h-8 w-6 h-6 mr-3`} />
        <h2 className="text-lg font-bold md:text-xl">{title}</h2>
      </div>

      <p className="mb-6 text-text-soft">{des}</p>
      <button
        onClick={clickEvent ? clickEvent : () => Wizard.OpenLink(Link)}
        className={`cursor-pointer inline-flex items-center gap-2 font-medium hover:underline`}>
        <span>{btn}</span>
        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 " />
      </button>
    </div>
  )
}