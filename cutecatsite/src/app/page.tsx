
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PawPrint, Download, ChevronDown, Gift, Zap, Users } from 'lucide-react';
import { AppHeader } from '@/components/layout/header';
import { AppFooter } from '@/components/layout/footer';

export default function HomePage() {
  const discordInviteLink = "https://discord.com/oauth2/authorize?client_id=1378929410530476113&permissions=84992&integration_type=0&scope=bot+applications.commands";

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow">
        <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary/20 via-background to-accent/20 px-4">
          <div className="container mx-auto">
            <PawPrint className="h-16 w-16 sm:h-20 md:h-24 text-primary mx-auto mb-4 md:mb-6" />
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground font-headline">
              Bem-vindo ao CuteCatBot!
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Sua dose diária de fofura felina, diretamente no seu Discord! Gatos adoráveis para alegrar o seu dia.
            </p>
            <Link href={discordInviteLink} passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
                  <Download className="mr-2 h-5 w-5" />
                  Adicionar ao Discord
                </Button>
              </a>
            </Link>
          </div>
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <a href="#features" aria-label="Scroll to Features section">
              <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-primary animate-bounce" />
            </a>
          </div>
        </section>

        <section id="features" className="relative py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-foreground font-headline">
              Por que CuteCatBot?
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12 md:mb-16">
              CuteCatBot é a maneira perfeita de adicionar uma dose extra de alegria e fofura ao seu servidor Discord. Com uma configuração simples, ele entrega momentos felinos encantadores para toda a sua comunidade, promovendo um ambiente mais leve e divertido.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="items-center text-center">
                  <Gift className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-3" />
                  <CardTitle className="text-lg sm:text-xl md:text-2xl font-headline">Doses Diárias de Fofura</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base">
                    Receba imagens de gatos encantadoras todos os dias, ou quando quiser, diretamente no seu servidor.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="items-center text-center">
                  <Zap className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-3" />
                  <CardTitle className="text-lg sm:text-xl md:text-2xl font-headline">Fácil de Usar</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base">
                    Com o comando simples <code>!miau</code>, a diversão está a apenas uma mensagem de distância. Sem complicações!
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="items-center text-center">
                  <Users className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-3" />
                  <CardTitle className="text-lg sm:text-xl md:text-2xl font-headline">Alegria para Todos</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base">
                    Perfeito para animar sua comunidade, criar um ambiente mais leve e compartilhar sorrisos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <a href="#cta" aria-label="Scroll to Call to Action section">
              <ChevronDown className="h-6 w-6 sm:h-8 sm:h-8 md:h-10 md:w-10 text-primary animate-bounce" />
            </a>
          </div>
        </section>
        
        <section id="cta" className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground font-headline">Pronto para mais Fofura?</h2>
            <p className="text-sm sm:text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Adicionar o CuteCatBot ao seu servidor Discord é fácil e rápido. Clique no botão abaixo para começar!
            </p>
            <Link href={discordInviteLink} passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="shadow-lg transition-transform hover:scale-105">
                  <PawPrint className="mr-2 h-5 w-5" />
                  Convidar CuteCatBot Agora!
                </Button>
              </a>
            </Link>
          </div>
        </section>
      </main>
      <AppFooter />
    </div>
  );
}
