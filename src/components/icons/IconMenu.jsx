export function IconMenu({ className = "" }) {
    return (
      <svg
        className={`w-full h-full ${className}`}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="transition-all duration-500 group-hover:fill-yellow-mellow"
          d="M4 9.33329V6.66663H28V9.33329H4ZM4 25.3333V22.6666H28V25.3333H4ZM4 17.3333V14.6666H21.3333V17.3333H4Z"
          fill="white"
        />
      </svg>
    )
  }

  export function IconClose({ className = "" }) {
    return (
        <svg 
            className={`w-full h-full ${className}`}
            width="32" 
            height="32" 
            viewBox="0 0 32 32" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M8.3776 25.1777L6.82227 23.6224L14.4443 16.0001L6.82227 8.37772L8.3776 6.82239L15.9999 14.4444L23.6223 6.82239L25.1776 8.37772L17.5556 16.0001L25.1776 23.6224L23.6223 25.1777L15.9999 17.5557L8.3776 25.1777Z" 
                fill="white"
            />
        </svg>  
    )
}