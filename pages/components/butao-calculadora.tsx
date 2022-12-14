export default function Botao({number = ''}) {

    return (
        <>
          <button className="bg-gray shadow-gray-dark shadow-sm w-[60px] h-[44px] select-none rounded-md text-gray-dark font-bold " >{number}</button>
         
        </>
      )
}