'use client'

function Modal() {
  return (
      <a 
      href={`https://api.whatsapp.com/send?text=${"Olá! eu quero fazer um orçamento de website."}&phone=${"5531993966037"}`}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden fixed md:flex w-[170px] h-[150px] bg-light animate-bounce cursor-pointer 
      text-xl font-bold rounded-2xl items-center text-center bottom-10 right-10 text-web-blue"
      style={{boxShadow: "0px 0px 20px 2px rgba(9,107,255,0.9)"}}>
        FAZER ORÇAMENTO GRATUITO AGORA!
      </a>
  );
}

export default Modal;
