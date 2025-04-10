import React from "react";

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Sobre o Adote um Pet</h1>

      <div className="max-w-3xl">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Nossa Missão</h2>
          <p className="text-gray-700 mb-4">
            O Adote um Pet é uma plataforma dedicada a conectar animais que
            precisam de um lar amoroso com pessoas que desejam adotar um novo
            membro para sua família. Nossa missão é facilitar o processo de
            adoção e garantir que cada pet encontre um lar onde será amado e
            cuidado.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Como Funciona</h2>
          <p className="text-gray-700 mb-4">
            Nossa plataforma permite que você:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Visualize pets disponíveis para adoção</li>
            <li>Conheça detalhes sobre cada animal</li>
            <li>Entre em contato com os responsáveis</li>
            <li>Encontre o companheiro perfeito para sua família</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Por que Adotar?</h2>
          <p className="text-gray-700 mb-4">
            Ao adotar um pet, você não está apenas ganhando um novo amigo, mas
            também:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Salva uma vida</li>
            <li>Dá uma segunda chance a um animal</li>
            <li>Contribui para reduzir o número de animais abandonados</li>
            <li>Ganha um companheiro leal e amoroso</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
