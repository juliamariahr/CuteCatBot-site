"use client";

import { AppHeader } from '@/components/layout/header';
import { AppFooter } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';

export default function PoliticaDePrivacidadePage() {
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
              Política de Privacidade do CuteCatBot
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground">
            {lastUpdated && <p className="text-center italic">Última atualização: {lastUpdated}</p>}

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">1. Introdução</h2>
              <p>A sua privacidade é importante para nós. Esta Política de Privacidade explica como o CuteCatBot coleta, usa e protege suas informações quando você utiliza nosso bot no Discord e nosso site.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">2. Informações que Coletamos</h2>
              <p>Coletamos informações mínimas necessárias para o funcionamento do bot e do site:</p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li><strong>Do Bot no Discord:</strong> Podemos coletar IDs de servidor e IDs de canal para configurar o envio de conteúdo. As imagens de gatos são obtidas através da API pública thecatapi.com. Não armazenamos conteúdo de mensagens, exceto os comandos diretos para o bot (como "!miau"). Não coletamos informações pessoais identificáveis dos usuários do Discord.</li>
                <li><strong>Do Site:</strong> Ao acessar nosso site, podemos coletar informações técnicas padrão, como endereço IP e tipo de navegador. Esses dados são usados para operar e melhorar o serviço, e para monitoramento de segurança e performance. Não usamos cookies para rastreamento pessoal no site principal.</li>
                <li><strong>Serviços de Terceiros (thecatapi.com):</strong> O CuteCatBot utiliza a API pública thecatapi.com para buscar imagens de gatos. Nós não armazenamos essas imagens. O uso da thecatapi.com está sujeito à sua própria política de privacidade, que você pode consultar diretamente no site deles. O CuteCatBot não tem controle sobre as práticas de coleta de dados da thecatapi.com.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">3. Como Usamos Suas Informações</h2>
              <p>Utilizamos as informações coletadas para:</p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>Fornecer e manter os serviços do CuteCatBot, incluindo o envio de fotos de gatos obtidas da thecatapi.com.</li>
                <li>Monitorar o uso do serviço para identificar problemas e realizar melhorias.</li>
                <li>Garantir a segurança e a integridade do nosso serviço.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">4. Compartilhamento de Informações</h2>
              <p>Não vendemos, alugamos ou trocamos suas informações pessoais com terceiros. Podemos compartilhar informações agregadas ou anonimizadas que não o identifiquem diretamente.</p>
              <p>Podemos divulgar informações if formos obrigados por lei ou se acreditarmos de boa fé que tal ação é necessária para:</p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>Cumprir uma obrigação legal.</li>
                <li>Proteger e defender nossos direitos ou propriedade.</li>
                <li>Prevenir ou investigar possíveis irregularidades relacionadas ao serviço.</li>
                <li>Proteger a segurança pessoal dos usuários do serviço ou do público.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">5. Segurança de Dados</h2>
              <p>Empregamos medidas de segurança para proteger suas informações contra acesso, alteração, divulgação ou destruição não autorizados. No entanto, nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro.</p>
            </section>
            
            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">6. Retenção de Dados</h2>
              <p>Reteremos as informações coletadas apenas pelo tempo necessário para cumprir os propósitos descritos nesta política, a menos que um período de retenção mais longo seja exigido ou permitido por lei.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">7. Privacidade de Crianças</h2>
              <p>Nossos serviços não são direcionados a crianças menores de 13 anos (ou a idade mínima aplicável em sua jurisdição). Não coletamos intencionalmente informações pessoais de crianças. Se você é pai ou responsável e sabe que seu filho nos forneceu informações pessoais, entre em contato conosco.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">8. Alterações nesta Política de Privacidade</h2>
              <p>Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando a nova Política de Privacidade nesta página e atualizando a data da "Última atualização".</p>
            </section>
          </CardContent>
        </Card>
      </main>
      <AppFooter />
    </div>
  );
}
