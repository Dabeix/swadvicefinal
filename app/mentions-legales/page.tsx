import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Mentions Légales | Camin Pulse',
  description: 'Mentions légales et informations juridiques de Camin Pulse, cabinet de conseil en transformation digitale basé à Montpellier.',
  openGraph: {
    title: 'Mentions Légales | Camin Pulse',
    description: 'Mentions légales et informations juridiques de Camin Pulse, cabinet de conseil en transformation digitale basé à Montpellier.',
  }
};

export default function LegalNotice() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <Breadcrumbs />
        <Link href="/" className="text-[#12D9C6] hover:text-[#12D9C6]/80 mb-8 inline-block">
          ← Retour à l'accueil
        </Link>
        
        <h1 className="text-4xl font-bold mb-8 text-[#082749]">Mentions Légales</h1>
        
        <div className="prose max-w-3xl">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#082749]">1. Informations légales</h2>
            <p>
              Camin Pulse<br />
              Société par actions simplifiée (SAS)<br />
              Capital social : [À compléter]<br />
              RCS Montpellier : [À compléter]<br />
              Siège social : Montpellier, France<br />
              N° TVA intracommunautaire : [À compléter]
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#082749]">2. Hébergement</h2>
            <p>
              Ce site est hébergé par :<br />
              Vercel Inc.<br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789<br />
              États-Unis
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#082749]">3. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, logos, etc.) est protégé par le droit d'auteur. 
              Toute reproduction ou représentation, totale ou partielle, de ce site par quelque procédé que ce soit, 
              sans l'autorisation expresse de Camin Pulse est interdite et constituerait une contrefaçon.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#082749]">4. Contact</h2>
            <p>
              Pour toute question concernant ces mentions légales, vous pouvez nous contacter à :<br />
              Email : contact@caminpulse.com
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}