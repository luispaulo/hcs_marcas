import { createFileRoute } from "@tanstack/react-router";
import { Shield, Search, FileCheck, Award, Phone, Mail, Check, ArrowRight, Scale, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const phone = "61982481004";
  const phoneDisplay = "(61) 98248-1004";
  const email = "luispaulolpsn@gmail.com";
  const whatsapp = `https://wa.me/55${phone}?text=${encodeURIComponent("Olá! Gostaria de registrar minha marca.")}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-bold text-lg">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md" style={{ background: "var(--gradient-gold)" }}>
              <Scale className="h-5 w-5 text-primary" />
            </span>
            <span>HCS<span className="text-muted-foreground font-normal ml-1">Registro de Marcas</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#servicos" className="hover:text-primary-glow transition-colors">Serviços</a>
            <a href="#processo" className="hover:text-primary-glow transition-colors">Processo</a>
            <a href="#sobre" className="hover:text-primary-glow transition-colors">Sobre</a>
            <a href="#contato" className="hover:text-primary-glow transition-colors">Contato</a>
          </nav>
          <Button asChild size="sm" className="bg-primary hover:bg-primary-glow">
            <a href={whatsapp} target="_blank" rel="noopener noreferrer">Fale conosco</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative pt-32 pb-24 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium mb-6">
              <Shield className="h-3.5 w-3.5" /> Especialistas em propriedade intelectual
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Proteja sua marca com <span style={{ background: "var(--gradient-gold)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>segurança jurídica</span>
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl">
              A HCS Registro de Marcas cuida de todo o processo no INPI para você. Da pesquisa de viabilidade ao certificado final, com transparência e acompanhamento completo.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:opacity-90" style={{ boxShadow: "var(--shadow-gold)" }}>
                <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                  Solicitar análise gratuita <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white/30 text-primary-foreground hover:bg-white/10">
                <a href="#servicos">Conhecer serviços</a>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { v: "+500", l: "Marcas registradas" },
                { v: "98%", l: "Taxa de aprovação" },
                { v: "10+", l: "Anos de atuação" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-bold" style={{ color: "var(--gold)" }}>{s.v}</div>
                  <div className="text-xs text-primary-foreground/70 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={heroImg} alt="Proteção de marca registrada" width={1536} height={1024} className="w-full h-auto rounded-2xl" style={{ boxShadow: "var(--shadow-elegant)" }} />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Nossos serviços</h2>
            <p className="mt-4 text-muted-foreground">Soluções completas em propriedade intelectual para empresas e empreendedores.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Search, title: "Pesquisa de viabilidade", desc: "Análise completa para verificar se sua marca está disponível para registro no INPI." },
              { icon: FileCheck, title: "Registro de marca", desc: "Cuidamos de todo o processo de depósito e acompanhamento até a concessão." },
              { icon: Shield, title: "Monitoramento", desc: "Vigilância contínua para detectar e impedir tentativas de uso indevido." },
              { icon: Award, title: "Renovação decenal", desc: "Garantimos a manutenção do seu registro com renovações dentro do prazo." },
              { icon: Scale, title: "Recursos e oposições", desc: "Defesa técnica em processos administrativos no INPI." },
              { icon: Users, title: "Consultoria estratégica", desc: "Orientação para construir um portfólio sólido de propriedade intelectual." },
            ].map((s) => (
              <div key={s.title} className="group p-8 rounded-xl border border-border bg-card hover:border-accent transition-all hover:-translate-y-1" style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg mb-5" style={{ background: "var(--gradient-gold)" }}>
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="processo" className="py-24 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Como funciona</h2>
            <p className="mt-4 text-muted-foreground">Um processo claro, transparente e acompanhado de ponta a ponta.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { n: "01", t: "Análise gratuita", d: "Conversamos sobre sua marca e fazemos uma busca prévia." },
              { n: "02", t: "Pesquisa técnica", d: "Verificação completa de viabilidade no banco do INPI." },
              { n: "03", t: "Depósito", d: "Protocolo do pedido de registro com toda documentação." },
              { n: "04", t: "Acompanhamento", d: "Monitoramento até a concessão do certificado de registro." },
            ].map((p) => (
              <div key={p.n} className="relative">
                <div className="text-5xl font-bold mb-3" style={{ background: "var(--gradient-hero)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{p.n}</div>
                <h3 className="font-semibold text-lg mb-2">{p.t}</h3>
                <p className="text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Por que escolher a HCS?</h2>
            <p className="mt-4 text-muted-foreground">Mais de uma década protegendo o que há de mais valioso para o seu negócio: sua marca.</p>
            <ul className="mt-8 space-y-4">
              {[
                "Atendimento personalizado e direto com especialistas",
                "Transparência total em prazos, custos e etapas",
                "Acompanhamento completo até o certificado final",
                "Estratégia jurídica para maximizar a aprovação",
                "Suporte pós-registro e monitoramento ativo",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full flex-shrink-0" style={{ background: "var(--gradient-gold)" }}>
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <span className="text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Clock, t: "Resposta rápida", d: "Retorno em até 24 horas úteis" },
              { icon: Shield, t: "Segurança", d: "Sigilo total das informações" },
              { icon: Award, t: "Experiência", d: "Centenas de marcas registradas" },
              { icon: Users, t: "Dedicação", d: "Atendimento humanizado" },
            ].map((c) => (
              <div key={c.t} className="p-6 rounded-xl bg-card border border-border">
                <c.icon className="h-7 w-7 mb-3" style={{ color: "var(--gold)" }} />
                <h4 className="font-semibold">{c.t}</h4>
                <p className="text-xs text-muted-foreground mt-1">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contato" className="py-24" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-6 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
            Pronto para proteger sua marca?
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
            Solicite uma análise gratuita e descubra a viabilidade do registro da sua marca hoje mesmo.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href={`tel:+55${phone}`} className="flex items-center gap-3 group">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full" style={{ background: "var(--gradient-gold)" }}>
                <Phone className="h-5 w-5 text-primary" />
              </span>
              <div className="text-left">
                <div className="text-xs text-primary-foreground/70">Telefone / WhatsApp</div>
                <div className="font-semibold group-hover:text-accent transition-colors">{phoneDisplay}</div>
              </div>
            </a>
            <a href={`mailto:${email}`} className="flex items-center gap-3 group">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full" style={{ background: "var(--gradient-gold)" }}>
                <Mail className="h-5 w-5 text-primary" />
              </span>
              <div className="text-left">
                <div className="text-xs text-primary-foreground/70">E-mail</div>
                <div className="font-semibold group-hover:text-accent transition-colors">{email}</div>
              </div>
            </a>
          </div>
          <Button asChild size="lg" className="mt-10 bg-accent text-accent-foreground hover:opacity-90" style={{ boxShadow: "var(--shadow-gold)" }}>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-primary text-primary-foreground/70 text-sm">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Scale className="h-4 w-4" style={{ color: "var(--gold)" }} />
            <span>© {new Date().getFullYear()} HCS Registro de Marcas. Todos os direitos reservados.</span>
          </div>
          <div className="flex gap-6">
            <a href={`tel:+55${phone}`} className="hover:text-accent">{phoneDisplay}</a>
            <a href={`mailto:${email}`} className="hover:text-accent">{email}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
