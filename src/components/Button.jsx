

const Button = ({styles}) => {
  return (
    <button type="button" className={` py-4 px-6 
    bg-blue-gradient font-poppins font-medium ${styles}
    text-[18px] text-primary outline-none rounded-md `} >
        Get Started
    </button>
  )
}

export default Button

