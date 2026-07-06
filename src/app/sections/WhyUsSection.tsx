export default function HeroBanner() {
  const data = [
    {
      title: "Soluções personalizadas", 
      text: "oferecemos nossos serviços em módulos, permitindo montar o pacote ideal de acordo com as necessidades, objetivos e orçamento do seu negócio."
    },
    {
      title: "Suporte próximo e ágil", 
      text: "nossa equipe permanece disponível para esclarecer dúvidas e oferecer suporte durante todo o desenvolvimento do projeto e após a entrega."
    },
    {
      title: "Atendimento presencial na Grande Belo Horizonte", 
      text: "para clientes da região, também disponibilizamos reuniões presenciais, proporcionando um acompanhamento mais próximo e alinhado."
    },
    {
      title: "Suporte pós-entrega", 
      text: "todos os projetos incluem um período mínimo de 2 semanas de suporte, garantindo correções, orientações e acompanhamento para que seu site continue funcionando com excelência."
    }
  ]
  return (
    <div className="flex flex-col w-[95%] lg:w-[70%] text-[#1B1B1B] my-24 gap-20 text-3xl font-semibold text-center justify-center text-light">
        <h2 className="text-5xl mb-2">Por que trabalhar conosco e aumentar suas vendas online?</h2>
        {data.map((item, index) => (
          <div key={index}>
            <h3>{item.title}:</h3>
            <p className="font-thin">{item.text}</p>
          </div>
        ))}
      </div>
  );
}