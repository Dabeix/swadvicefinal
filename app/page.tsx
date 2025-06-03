import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-sw-blue to-sw-blue/90 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <Image
              src="/swadvice logo.png"
              alt="Swadvice"
              width={200}
              height={100}
              className="mb-8"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Réconcilier l'Humain, l'Agilité et l'IA.
          </h1>
          <p className="text-xl mb-4">
            Parce qu'un monde plus intelligent ne vaut rien s'il n'est pas aussi plus humain.
          </p>
          <p className="text-lg mb-8">
            Swadvice est un cabinet de conseil nouvelle génération qui accompagne les entreprises à forte ambition dans leurs transformations organisationnelles, digitales et culturelles.
          </p>
          <button className="bg-sw-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-sw-green/90 transition-colors">
            👉 Réserver un échange stratégique
          </button>
        </div>
      </header>

      {/* Manifeste Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-sw-blue">🧭 Pourquoi on existe</h2>
          <div className="prose prose-lg max-w-3xl">
            <p className="mb-4">
              Trop de transformations échouent parce qu'elles oublient l'essentiel : les humains qui les vivent.
            </p>
            <p className="mb-4">
              Chez Swadvice, nous croyons qu'il est temps de créer des entreprises qui allient performance, intelligence technologique et respect profond des personnes.
            </p>
            <p>
              Notre mission : réconcilier l'efficacité avec la sincérité, la tech avec le terrain, l'agilité avec la réalité.
            </p>
          </div>
        </div>
      </section>

      {/* Methods Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-sw-blue">🛠️ Comment on travaille</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg border-t-4 border-sw-green">
              <h3 className="text-xl font-semibold mb-4 text-sw-blue">🤝 Coaching & Agilité vivante</h3>
              <p>Nous accompagnons vos équipes pour remettre du sens, du rythme et de la transparence dans vos processus. Pas de frameworks plaqués. Juste ce qui fonctionne.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg border-t-4 border-sw-green">
              <h3 className="text-xl font-semibold mb-4 text-sw-blue">🤖 IA & automatisation intelligente</h3>
              <p>Nous intégrons des solutions d'IA là où elles apportent une vraie valeur : gain de temps, meilleure prise de décision, détection d'opportunités, soutien au quotidien.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg border-t-4 border-sw-green">
              <h3 className="text-xl font-semibold mb-4 text-sw-blue">🎯 Conseil sans compromis</h3>
              <p>Pas de slide decks oubliés. Pas de consultants fantômes. On vous challenge, on construit avec vous, et on reste jusqu'au bout.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-sw-blue">🚀 Nos offres</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-sw-blue">Agile Boost</h3>
              <p>(2-6 semaines) Sprint intensif pour débloquer un produit, une équipe, un pivot stratégique.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-sw-blue">AI Inside</h3>
              <p>Diagnostic + intégration concrète d'IA dans vos process (pilotage, support, produit).</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-sw-blue">Culture Shift</h3>
              <p>Coaching collectif pour recréer une dynamique humaine forte.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-sw-blue">Fractional CTPO</h3>
              <p>Un expert produit/tech/orga au cœur de votre équipe, à temps partiel mais à 100% engagé.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-sw-blue">🎙️ Pourquoi Swadvice n'est pas un cabinet comme les autres</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <span className="text-2xl">🌱</span>
              <p className="text-sw-blue">Turnover = 0% est un KPI.</p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-2xl">🧭</span>
              <p className="text-sw-blue">Notre boussole, ce sont vos valeurs.</p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-2xl">💬</span>
              <p className="text-sw-blue">On ne vend que ce qu'on incarne.</p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-2xl">🧑‍🤝‍🧑</span>
              <p className="text-sw-blue">On ne remplace pas vos équipes, on les renforce.</p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-2xl">🎓</span>
              <p className="text-sw-blue">Chaque mission laisse votre entreprise plus autonome.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-sw-blue">🌍 Une équipe de terrain, humaine et passionnée</h2>
          <div className="prose prose-lg max-w-3xl">
            <p className="mb-4">
              Swadvice a été fondé par des consultants, coaches, entrepreneurs et techs convaincus que l'intelligence collective est la clé de toute transformation réussie.
            </p>
            <p className="mb-4">
              On ne fait pas semblant. On vit ce qu'on enseigne.
            </p>
            <p>
              Et on choisit nos clients autant qu'ils nous choisissent.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sw-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">💬 Parlez-nous de vos enjeux</h2>
          <p className="text-xl mb-8">
            Prenez 30 minutes avec nous pour faire le point sur vos défis actuels. Pas de pitch. Juste un vrai échange.
          </p>
          <button className="bg-sw-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-sw-green/90 transition-colors">
            👉 Planifier un rendez-vous
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-sw-blue text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-2">Contact : contact@swadvice.fr</p>
              <a href="#" className="text-sw-green hover:text-sw-green/80">Suivez-nous sur LinkedIn</a>
            </div>
            <div className="text-sm">
              <a href="#" className="text-gray-400 hover:text-white mr-4">Mentions légales</a>
              <a href="#" className="text-gray-400 hover:text-white">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}