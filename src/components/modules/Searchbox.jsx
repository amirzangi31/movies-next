"use client"

import ZarbIcon from "@/icons/ZarbIcon"



const Searchbox = ({open , setOpen}) => {
  const openHandler = () => {
    setOpen(true)
    console.log(open)
  }
  const closeHandler = () => {
    setOpen(false)
    console.log(open)
  }


  return (
    <div className={`bg-bg-secondary  flex justify-start items-center ${open ? "gap-4" : "md:gap-4"} px-4 py-2 rounded-3xl relative w-full shadow-sh-black`}>
            <span className={`cursor-pointer ${open && "hidden"} md:hidden`} onClick={openHandler}> 
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M13.75 24.75C16.1906 24.7495 18.5609 23.9325 20.4834 22.429L26.5279 28.4735L28.4721 26.5293L22.4276 20.4847C23.9319 18.562 24.7494 16.1912 24.75 13.75C24.75 7.68488 19.8151 2.75 13.75 2.75C7.68488 2.75 2.75 7.68488 2.75 13.75C2.75 19.8151 7.68488 24.75 13.75 24.75ZM13.75 5.5C18.2999 5.5 22 9.20012 22 13.75C22 18.2999 18.2999 22 13.75 22C9.20012 22 5.5 18.2999 5.5 13.75C5.5 9.20012 9.20012 5.5 13.75 5.5Z" fill="#E3E3E3" fillOpacity="0.7"/>
                       <path d="M15.6915 11.8057C16.2126 12.3282 16.5 13.0185 16.5 13.75H19.25C19.2512 13.0273 19.1092 12.3116 18.8321 11.6442C18.555 10.9767 18.1484 10.3708 17.6358 9.8615C15.554 7.7825 11.9446 7.7825 9.86426 9.8615L11.8058 11.8085C12.8508 10.7662 14.652 10.769 15.6915 11.8057Z" fill="#E3E3E3" fillOpacity="0.7"/>
                    </svg>
            </span>
            <span className={`cursor-pointer ${!open && "hidden"} md:block`} onClick={closeHandler}>
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M13.75 24.75C16.1906 24.7495 18.5609 23.9325 20.4834 22.429L26.5279 28.4735L28.4721 26.5293L22.4276 20.4847C23.9319 18.562 24.7494 16.1912 24.75 13.75C24.75 7.68488 19.8151 2.75 13.75 2.75C7.68488 2.75 2.75 7.68488 2.75 13.75C2.75 19.8151 7.68488 24.75 13.75 24.75ZM13.75 5.5C18.2999 5.5 22 9.20012 22 13.75C22 18.2999 18.2999 22 13.75 22C9.20012 22 5.5 18.2999 5.5 13.75C5.5 9.20012 9.20012 5.5 13.75 5.5Z" fill="#E3E3E3" fillOpacity="0.7"/>
                       <path d="M15.6915 11.8057C16.2126 12.3282 16.5 13.0185 16.5 13.75H19.25C19.2512 13.0273 19.1092 12.3116 18.8321 11.6442C18.555 10.9767 18.1484 10.3708 17.6358 9.8615C15.554 7.7825 11.9446 7.7825 9.86426 9.8615L11.8058 11.8085C12.8508 10.7662 14.652 10.769 15.6915 11.8057Z" fill="#E3E3E3" fillOpacity="0.7"/>
                    </svg>
            </span>
            <input type="text" className={`${open ? "flex-1 " : "w-0 md:w-auto"}  text-text text-md  placeholder:text-text placeholder:text-md transition-all duration-300`} 
            placeholder='جستجوی فیلم و سریال ...' />
            <span className={`w-[40px] h-[47px] cursor-pointer ${open ? "md:hidden" : "hidden"} rounded-full flex justify-center items-center text-3xl `}
            onClick={closeHandler}
            >
              <ZarbIcon width={15} height={15} /> 
            </span>
    </div>
  )
}

export default Searchbox