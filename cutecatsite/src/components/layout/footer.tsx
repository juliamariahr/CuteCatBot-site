import Link from 'next/link';

export function AppFooter() {
  return (
    <footer className="py-8 bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <Link href="/termos-de-servico" className="text-sm hover:text-primary transition-colors">
            Termos de Serviço
          </Link>
          <Link href="/politica-de-privacidade" className="text-sm hover:text-primary transition-colors">
            Política de Privacidade
          </Link>
        </div>
        <p className="text-sm">
          CuteCatBot &copy; {new Date().getFullYear()} - Espalhando alegria, uma foto de gato por vez.
        </p>
      </div>
    </footer>
  );
}
