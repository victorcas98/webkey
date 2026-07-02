const WHATSAPP_URL = `https://api.whatsapp.com/send?text=${encodeURIComponent("Olá! eu quero fazer um orçamento de website.")}&phone=5531993966037`;

interface CtaButtonProps {
  variant?: "rounded" | "square";
  children: React.ReactNode;
}

export default function CtaButton({ variant = "rounded", children }: CtaButtonProps) {
  const base = "bg-light text-web-blue font-semibold cursor-pointer text-center";
  const styles = {
    rounded: "py-6 px-6 w-[90%] m-2 text-3xl rounded-full items-center justify-center",
    square:    "h-[100px] lg:w-[50%] w-[90%] p-2 mb-4 mt-6 text-2xl rounded-2xl flex justify-center items-center",
  };

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{ boxShadow: "0px 0px 20px 2px rgba(9,107,255,0.9)" }}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </a>
  );
}