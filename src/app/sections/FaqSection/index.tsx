const faqs = [
  {
    question: "Quanto custa criar um site profissional em Belo Horizonte?",
    answer: "A WebKey oferece pacotes a partir de R$1.500 para sites básicos até R$5.000+ para sites premium com páginas ilimitadas, suporte pós-entrega e SEO completo."
  },
  {
    question: "A WebKey faz atendimento presencial em BH?",
    answer: "Sim, atendemos presencialmente na Grande Belo Horizonte, além de suporte remoto para todo o Brasil."
  },
  {
    question: "Qual o prazo para criar um site?",
    answer: "O prazo varia de 5 a 7 dias úteis para o Pacote Básico, 10 a 15 dias para o Profissional e 15 a 30 dias para o Premium."
  },
  {
    question: "O site inclui suporte após a entrega?",
    answer: "Sim. Todos os projetos incluem pelo menos 2 semanas de suporte pós-entrega, com correções, orientações e acompanhamento."
  }
];

export default function FaqSection() {
  return (
    <section className="text-light bg-dark bg-opacity-90 w-full py-4 px-2 mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Perguntas Frequentes</h2>
      <dl className="flex flex-col gap-2">
        {faqs.map((faq, index) => (
          <div key={index}>
            <dt className="text-sm font-semibold">{faq.question}</dt>
            <dd className="mt-2 text-sm font-light">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}