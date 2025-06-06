import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative bg-[#082749] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#082749] to-[#0d3b6d] z-0"></div>
        <div className="relative container mx-auto px-4 py-24 z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-12">
              <Image
                src="/camin_pulse_logo_full.svg"
                alt="Camin Pulse"
                width={300}
                height={150}
                className="mb-8"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-[#12D9C6]">
              Le pouls qui guide vos produits
            </h1>
            <p className="text-2xl text-center mb-6 text-gray-200">
              Parce qu'un monde plus intelligent ne vaut rien s'il n'est pas également plus humain.
            </p>
            <p className="text-xl text-center mb-12 text-gray-300">
              Camin Pulse est un cabinet de conseil nouvelle génération basé à Montpellier qui accompagne les entreprises à forte ambition dans leurs transformations organisationnelles, digitales et culturelles.
            </p>
            <div className="flex justify-center">
              <button className="group bg-[#12D9C6] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#12D9C6]/90 transition-all transform hover:scale-105 flex items-center space-x-2">
                <span>👉 Réserver un échange stratégique</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </header>

      {/* Founder's Message Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-[#082749] text-center">🎤 Mot du fondateur</h2>
          <div className="prose max-w-4xl mx-auto bg-gray-50 p-8 rounded-2xl shadow-lg">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-[#082749]">Remy Buffetto – Camin Pulse</h3>
              <p className="italic text-gray-600 mb-6">
                Chers partenaires, clients et ami·e·s de Camin Pulse,
              </p>
              <p className="mb-4">
                Lorsque j'ai lancé Camin Pulse, j'ai choisi un nom qui raconte déjà une histoire : « Camin », le chemin, et « Pulse », le battement qui nous anime. Notre aventure est née d'une conviction simple : chaque solution technologique doit remettre l'humain au centre, tout en insufflant l'énergie nécessaire pour avancer ensemble vers un avenir plus responsable.
              </p>
              <h4 className="text-xl font-semibold mt-8 mb-6 text-[#082749]">Nos valeurs nous guident au quotidien :</h4>
              <ul className="space-y-6 mb-8">
                {[
                  { title: "Humanité d'abord", desc: "Nous créons des expériences qui améliorent concrètement la vie de celles et ceux qui les utilisent." },
                  { title: "Innovation responsable", desc: "Nos idées s'appuient sur la recherche de sens : progrès, oui, mais jamais au détriment de l'éthique ni de la planète." },
                  { title: "Transparence", desc: "Nous travaillons à visage découvert : parler vrai, partager nos réussites comme nos défis, c'est le socle de la confiance." },
                  { title: "Passion collective", desc: "Le « pulse » de notre équipe : un esprit d'entraide, de curiosité et de dépassement continu." }
                ].map((value, index) => (
                  <li key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                    <CheckCircleIcon className="w-6 h-6 text-[#12D9C6] flex-shrink-0" />
                    <div>
                      <span className="font-semibold block mb-1">{value.title}</span>
                      <span className="text-gray-600">{value.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mb-4">
                Mon expertise, c'est de relier les points : quinze ans passés à l’intersection de la stratégie numérique, du design d'expérience et du management de projets innovants m'ont appris que la magie naît quand on fait dialoguer la créativité et la rigueur. Je mets aujourd'hui ce savoir-faire au service de nos clients pour transformer leurs idées en produits et services concrets, porteurs de valeur durable.
              </p>
              <p className="mb-4">
                Ce « mot » est avant tout une invitation. Rejoignez-nous sur le chemin : questionnons, testons, grandissons. Chez Camin Pulse, nous croyons que chaque collaboration est un pas de plus vers une innovation qui bat au rythme de l'humain.
              </p>
              <div className="mt-8 p-4 border-l-4 border-[#12D9C6] bg-white">
                <p className="mb-2">Avec enthousiasme,</p>
                <p className="font-semibold">Remy Buffetto</p>
                <p className="text-gray-600">Fondateur & CEO, Camin Pulse</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-[#082749] text-center">🧭 Pourquoi on existe</h2>
          <div className="prose prose-lg max-w-3xl mx-auto text-center">
            <p className="text-xl mb-6 text-gray-700">
              Trop de transformations échouent parce qu'elles oublient l'essentiel : les humains qui les vivent.
            </p>
            <p className="text-xl mb-6 text-gray-700">
              Chez Camin Pulse, nous croyons qu'il est temps de créer des entreprises qui allient performance, intelligence technologique et respect profond des personnes.
            </p>
            <p className="text-xl text-gray-700">
              Notre mission : réconcilier l'efficacité avec la sincérité, la tech avec le terrain, l'agilité avec la réalité.
            </p>
          </div>
        </div>
      </section>

      {/* Methods Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-[#082749] text-center">🛠️ Comment on travaille</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "🤝",
                title: "Coaching & Agilité vivante",
                desc: "Nous accompagnons vos équipes pour remettre du sens, du rythme et de la transparence dans vos processus. Pas de frameworks plaqués. Juste ce qui fonctionne."
              },
              {
                icon: "🤖",
                title: "IA & automatisation intelligente",
                desc: "Nous intégrons des solutions d'IA là où elles apportent une vraie valeur : gain de temps, meilleure prise de décision, détection d'opportunités, soutien au quotidien."
              },
              {
                icon: "🎯",
                title: "Conseil sans compromis",
                desc: "Pas de slide decks oubliés. Pas de consultants fantômes. On vous challenge, on construit avec vous, et on reste jusqu'au bout."
              }
            ].map((method, index) => (
              <div key={index} className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#12D9C6] group hover:scale-105 transform transition-transform">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-[#082749] group-hover:text-[#12D9C6] transition-colors">
                  {method.title}
                </h3>
                <p className="text-gray-600">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-[#082749] text-center">🚀 Nos offres</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Agile Boost",
                desc: "(2-6 semaines) Sprint intensif pour débloquer un produit, une équipe, un pivot stratégique."
              },
              {
                title: "AI Inside",
                desc: "Diagnostic + intégration concrète d'IA dans vos process (pilotage, support, produit)."
              },
              {
                title: "Culture Shift",
                desc: "Coaching collectif pour recréer une dynamique humaine forte."
              },
              {
                title: "Fractional CTPO",
                desc: "Un expert produit/tech/orga au cœur de votre équipe, à temps partiel mais à 100% engagé."
              }
            ].map((offer, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 transform cursor-pointer group">
                <h3 className="text-xl font-semibold mb-4 text-[#082749] group-hover:text-[#12D9C6] transition-colors">
                  {offer.title}
                </h3>
                <p className="text-gray-600">{offer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-[#082749] text-center">
            🎙️ Pourquoi Camin Pulse n'est pas un cabinet comme les autres
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { emoji: "🌱", text: "Turnover = 0% est un KPI." },
              { emoji: "🧭", text: "Notre boussole, ce sont vos valeurs." },
              { emoji: "💬", text: "On ne vend que ce qu'on incarne." },
              { emoji: "🧑‍🤝‍🧑", text: "On ne remplace pas vos équipes, on les renforce." },
              { emoji: "🎓", text: "Chaque mission laisse votre entreprise plus autonome." },
              { emoji: "📍", text: "Ancrés en Occitanie, connectés partout." }
            ].map((diff, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-3xl">{diff.emoji}</span>
                <p className="text-[#082749] font-medium">{diff.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-[#082749] text-center">
            🌍 Une équipe de terrain, humaine et passionnée
          </h2>
          <div className="prose prose-lg max-w-3xl mx-auto text-center">
            <p className="mb-6 text-xl text-gray-700">
              Basés à Montpellier, au cœur de la French Tech Med, nous sommes une équipe de consultants, coaches, entrepreneurs et techs convaincus que l'intelligence collective est la clé de toute transformation réussie.
            </p>
            <p className="mb-6 text-xl text-gray-700">
              On ne fait pas semblant. On vit ce qu'on enseigne.
            </p>
            <p className="text-xl text-gray-700">
              Et on choisit nos clients autant qu'ils nous choisissent.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#082749] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#082749] to-[#0d3b6d] z-0"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-8">💬 Parlez-nous de vos enjeux</h2>
          <p className="text-xl mb-12 text-gray-200 max-w-2xl mx-auto">
            Prenez 30 minutes avec nous pour faire le point sur vos défis actuels. Pas de pitch. Juste un vrai échange.
          </p>
          <button className="group bg-[#12D9C6] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#12D9C6]/90 transition-all transform hover:scale-105 flex items-center space-x-2 mx-auto">
            <span>👉 Planifier un rendez-vous</span>
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#082749] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <p className="mb-4">Contact : contact@caminpulse.com</p>
              <a href="#" className="text-[#12D9C6] hover:text-[#12D9C6]/80 flex items-center space-x-2 group">
                <span>Suivez-nous sur LinkedIn</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div>
              <p className="mb-2">📍 Montpellier, Occitanie</p>
              <p className="text-gray-300">Au cœur de la French Tech Med</p>
            </div>
            <div className="space-x-6">
              <Link href="/mentions-legales" className="text-gray-300 hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link href="/confidentialite" className="text-gray-300 hover:text-white transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
