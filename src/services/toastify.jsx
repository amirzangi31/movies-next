import toast from "react-hot-toast"

const toastify = (type , text) =>{
    
    toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } 
          ${type === "error" ? "bg-error" : "bg-success"}
          
          min-w-[200px] justify-center items-center   shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black px-8 py-2 `}
        >
          
          <p>
            {text}
          </p>
          

        </div>
      ) , {
        duration : 2000
      })
}

export default toastify