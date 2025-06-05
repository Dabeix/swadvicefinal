import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#082749] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <Image
              src="/camin_pulse_logo_full.svg"
              alt="Camin Pulse"
              width={300}
              height={150}
              className="mb-8"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Le pouls qui guide vos produits
          </h1>
          <p className="text-xl mb-4">
            Parce qu&apos;un monde plus intelligent ne vaut rien s&apos;il n&apos;est pas aussi plus humain.
          </p>
          <p className="text-lg mb-8">
            Camin Pulse est un cabinet de conseil nouvelle génération basé à Montpellier qui accompagne les entreprises à forte ambition dans leurs transformations organisationnelles, digitales et culturelles.
          </p>
          <button className="bg-[#12D9C6] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#12D9C6]/90 transition-colors">
            👉 Réserver un échange stratégique
          </button>
        </div>
      </header>

      {/* Rest of the sections with updated colors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-[#082749]">🧭 Pourquoi on existe</h2>
          <div className="prose prose-lg max-w-3xl">
            <p className="mb-4">
              Trop de transformations échouent parce qu&apos;elles oublient l&apos;essentiel : les humains qui les vivent.
            </p>
            <p className="mb-4">
              Chez Camin Pulse, nous croyons qu&apos;il est temps de créer des entreprises qui allient performance, intelligence technologique et respect profond des personnes.
            </p>
            <p>
              Notre mission : réconcilier l&apos;efficacité avec la sincérité, la tech avec le terrain, l&apos;agilité avec la réalité.
            </p>
          </div>
        </div>
      </section>

      {/* Methods Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-[#082749]">🛠️ Comment on travaille</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg border-t-4 border-[#12D9C6]">
              <h3 className="text-xl font-semibold mb-4 text-[#082749]">🤝 Coaching & Agilité vivante</h3>
              <p>Nous accompagnons vos équipes pour remettre du sens, du rythme et de la transparence dans vos processus. Pas de frameworks plaqués. Juste ce qui fonctionne.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg border-t-4 border-[#12D9C6]">
              <h3 className="text-xl font-semibold mb-4 text-[#082749]">🤖 IA & automatisation intelligente</h3>
              <p>Nous intégrons des solutions d&apos;IA là où elles apportent une vraie valeur : gain de temps, meilleure prise de décision, détection d&apos;opportunités, soutien au quotidien.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg border-t-4 border-[#12D9C6]">
              <h3 className="text-xl font-semibold mb-4 text-[#082749]">🎯 Conseil sans compromis</h3>
              <p>Pas de slide decks oubliés. Pas de consultants fantômes. On vous challenge, on construit avec vous, et on reste jusqu&apos;au bout.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections... */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-[#082749]">🚀 Nos offres</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-[#082749]">Agile Boost</h3>
              <p>(2-6 semaines) Sprint intensif pour débloquer un produit, une équipe, un pivot stratégique.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-[#082749]">AI Inside</h3>
              <p>Diagnostic + intégration concrète d&apos;IA dans vos process (pilotage, support, produit).</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-[#082749]">Culture Shift</h3>
              <p>Coaching collectif pour recréer une dynamique humaine forte.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-[#082749]">Fractional CTPO</h3>
              <p>Un expert produit/tech/orga au cœur de votre équipe, à temps partiel mais à 100% engagé.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-[#082749]">🎙️ Pourquoi Camin Pulse n&apos;est pas un cabinet comme les autres</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <span className="text-2xl">🌱</span>
              <p className="text-[#082749]">Turnover = 0% est un KPI.</p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-2xl">🧭</span>
              <p className="text-[#082749]">Notre boussole, ce sont vos valeurs.</p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-2xl">💬</span>
              <p className="text-[#082749]">On ne vend que ce qu&apos;on incarne.</p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-2xl">🧑‍🤝‍🧑</span>
              <p className="text-[#082749]">On ne remplace pas vos équipes, on les renforce.</p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-2xl">🎓</span>
              <p className="text-[#082749]">Chaque mission laisse votre entreprise plus autonome.</p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-2xl">📍</span>
              <p className="text-[#082749]">Ancrés en Occitanie, connectés partout.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-[#082749]">🌍 Une équipe de terrain, humaine et passionnée</h2>
          <div className="prose prose-lg max-w-3xl">
            <p className="mb-4">
              Basés à Montpellier, au cœur de la French Tech Med, nous sommes une équipe de consultants, coaches, entrepreneurs et techs convaincus que l&apos;intelligence collective est la clé de toute transformation réussie.
            </p>
            <p className="mb-4">
              On ne fait pas semblant. On vit ce qu&apos;on enseigne.
            </p>
            <p>
              Et on choisit nos clients autant qu&apos;ils nous choisissent.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#082749] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">💬 Parlez-nous de vos enjeux</h2>
          <p className="text-xl mb-8">
            Prenez 30 minutes avec nous pour faire le point sur vos défis actuels. Pas de pitch. Juste un vrai échange.
          </p>
          <button className="bg-[#12D9C6] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#12D9C6]/90 transition-colors">
            👉 Planifier un rendez-vous
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#082749] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="mb-2">Contact : contact@caminpulse.com</p>
              <a href="#" className="text-[#12D9C6] hover:text-[#12D9C6]/80">Suivez-nous sur LinkedIn</a>
            </div>
            <div>
              <p className="mb-2">📍 Montpellier, Occitanie</p>
              <p>Au cœur de la French Tech Med</p>
            </div>
            <div className="text-sm">
              <Link href="/mentions-legales" className="text-gray-400 hover:text-white mr-4">
                Mentions légales
              </Link>
              <Link href="/confidentialite" className="text-gray-400 hover:text-white">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}