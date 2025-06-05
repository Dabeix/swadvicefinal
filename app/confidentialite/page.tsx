import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16">
        <Link href="/" className="text-[#12D9C6] hover:text-[#12D9C6]/80 mb-8 inline-block">
          ← Retour à l'accueil
        </Link>
        
        <h1 className="text-4xl font-bold mb-8 text-[#082749]">Politique de Confidentialité</h1>
        
        <div className="prose max-w-3xl">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#082749]">1. Collecte des données</h2>
            <p>
              Nous collectons uniquement les données personnelles nécessaires à la fourniture de nos services 
              et au traitement de vos demandes. Ces données peuvent inclure :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Nom et prénom</li>
              <li>Adresse email professionnelle</li>
              <li>Numéro de téléphone</li>
              <li>Fonction et entreprise</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#082749]">2. Utilisation des données</h2>
            <p>
              Vos données sont utilisées pour :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Répondre à vos demandes de contact</li>
              <li>Vous envoyer des informations sur nos services</li>
              <li>Améliorer notre offre et notre communication</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#082749]">3. Protection des données</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données 
              personnelles contre tout accès, modification, divulgation ou destruction non autorisés.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#082749]">4. Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
              <li>Droit d'opposition</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#082749]">5. Contact</h2>
            <p>
              Pour toute question concernant notre politique de confidentialité ou pour exercer vos droits, 
              vous pouvez nous contacter à :<br />
              Email : contact@caminpulse.com
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}