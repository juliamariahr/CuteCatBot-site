"use client";

import { AppHeader } from '@/components/layout/header';
import { AppFooter } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';

export default function TermosDeServicoPage() {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    setLastUpdated(new Date().toLocaleDateString('pt-BR'));
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl font-bold text-center text-foreground font-headline">
              Termos de Serviço do CuteCatBot
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground">
            {lastUpdated && <p className="text-center italic">Última atualização: {lastUpdated}</p>}

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">1. Aceitação dos Termos</h2>
              <p>Ao adicionar ou usar o CuteCatBot em seu servidor Discord ou ao acessar nosso site, você concorda em cumprir estes Termos de Serviço. Se você não concordar com qualquer parte dos termos, não poderá usar nossos serviços.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">2. Descrição do Serviço</h2>
              <p>O CuteCatBot é um bot para Discord que fornece conteúdo relacionado a gatos e funcionalidades para entretenimento, como o envio programado de fotos de gatos e a resposta ao comando "/miau" com uma foto de gato. As imagens de gatos são fornecidas através da API pública thecatapi.com. O site associado serve para apresentar o bot, seus recursos e fornecer informações relevantes.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">3. Uso Aceitável</h2>
              <p>Você concorda em não usar o CuteCatBot para qualquer propósito ilegal ou proibido por estes termos. Você não deve:</p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>Interferir ou interromper o funcionamento do bot ou dos servidores.</li>
                <li>Tentar obter acesso não autorizado ao bot ou aos seus sistemas relacionados.</li>
                <li>Usar o bot de maneira que possa danificar, desabilitar, sobrecarregar ou prejudicar o serviço ou o serviço de terceiros (thecatapi.com).</li>
                <li>Utilizar o bot para enviar spam ou mensagens não solicitadas.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">4. Disponibilidade do Serviço</h2>
              <p>Nos esforçamos para manter o CuteCatBot operacional. No entanto, podemos precisar interromper o serviço para manutenção ou devido a circunstâncias imprevistas. A disponibilidade das imagens de gatos depende da API thecatapi.com e não garantimos sua disponibilidade ou o conteúdo fornecido por ela. Não garantimos disponibilidade ininterrupta do CuteCatBot.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">5. Propriedade Intelectual</h2>
              <p>O CuteCatBot, incluindo seu código-fonte (excluindo bibliotecas de terceiros) e design, são de nossa propriedade ou licenciados para nós. O conteúdo fornecido pelo bot (as imagens de gatos) é obtido da thecatapi.com e está sujeito aos termos de uso e licenciamento da thecatapi.com.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">6. Isenção de Garantias</h2>
              <p>O CuteCatBot é fornecido "como está" e "conforme disponível", sem garantias de qualquer tipo, expressas ou implícitas. Não garantimos que o serviço será livre de erros ou que o acesso será contínuo ou ininterrupto. O conteúdo (imagens de gatos) é fornecido pela thecatapi.com "como está", e não nos responsabilizamos por ele.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">7. Limitação de Responsabilidade</h2>
              <p>Em nenhuma circunstância o CuteCatBot ou seus desenvolvedores serão responsáveis por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais resultantes do uso ou da incapacidade de usar o serviço, incluindo, mas não se limitando a, problemas com as imagens fornecidas pela thecatapi.com.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">8. Modificações nos Termos</h2>
              <p>Reservamo-nos o direito de modificar estes Termos de Serviço a qualquer momento. Notificaremos sobre alterações significativas através de um anúncio em nosso site ou por outros meios. O uso continuado do serviço após tais modificações constitui sua aceitação dos novos termos.</p>
            </section>
          </CardContent>
        </Card>
      </main>
      <AppFooter />
    </div>
  );
}
