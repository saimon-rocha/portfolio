
"use client";

// useEffect permite executar código que depende do navegador.
// useRef permite acessar o elemento <canvas> sem provocar novas renderizações.
import { useEffect, useRef } from "react";

// Define o formato de cada partícula.
// Cada partícula é um objeto com posição, velocidade, tamanho e cor.
type Particle = {
  x: number; // Posição horizontal na tela.
  y: number; // Posição vertical na tela.
  vx: number; // Velocidade horizontal: positiva vai para a direita.
  vy: number; // Velocidade vertical: positiva vai para baixo.
  radius: number; // Raio do círculo que representa a partícula.
  color: string; // Valores RGB usados para desenhar a partícula.
};

export default function AnimatedBackground() {
  // Referência ao elemento canvas que será desenhado pelo JavaScript.
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Acessa o canvas depois que o componente é montado no navegador.
    const canvas = canvasRef.current;

    // Se o canvas não existir, não há nada para desenhar.
    if (!canvas) return;

    // Obtém o contexto 2D, que contém as ferramentas de desenho.
    const ctx = canvas.getContext("2d");

    // O navegador pode não conseguir criar o contexto.
    if (!ctx) return;

    // Após as verificações, o TypeScript sabe que estes objetos são válidos.
    const context: CanvasRenderingContext2D = ctx;

    // Dimensões visíveis da área de desenho, em pixels CSS.
    let width = 0;
    let height = 0;

    // Fator usado para deixar o desenho nítido em telas de alta densidade.
    let pixelRatio = 1;

    // Array que armazenará todas as partículas.
    let particles: Particle[] = [];

    // Guarda o identificador da animação para podermos cancelá-la.
    let animationFrame = 0;

    // Detecta se o usuário prefere movimento reduzido no sistema.
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    // Cores RGB: verde-limão e azul-ciano.
    const colors = ["163, 230, 53", "56, 189, 248"];

    // Armazena a posição atual e a posição desejada do cursor ou dedo.
    const pointer = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false, // Indica se existe interação ativa.
      isTouch: false, // Diferencia toque de mouse.
    };

    // Cria as partículas e distribui suas posições aleatoriamente.
    function createParticles() {
      // Área total da tela.
      const area = width * height;

      // Considera telas com menos de 640 px como mobile.
      const isMobile = width < 640;

      // Define quantas partículas criar conforme o tamanho da tela.
      // Os limites evitam excesso de partículas e consumo desnecessário.
      const count = isMobile
        ? Math.max(42, Math.min(65, Math.floor(area / 12000)))
        : Math.max(65, Math.min(135, Math.floor(area / 12500)));

      // Gera um array com a quantidade calculada de partículas.
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width, // Posição horizontal aleatória.
        y: Math.random() * height, // Posição vertical aleatória.

        // Velocidades pequenas para um movimento mais elegante.
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,

        // Varia o tamanho dos pontos.
        radius: Math.random() * 1.4 + 1.1,

        // Escolhe aleatoriamente uma das cores da rede.
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
    }

    // Ajusta o canvas quando a janela muda de tamanho.
    function resizeCanvas() {
      width = window.innerWidth;
      height = window.innerHeight;

      // Limita o fator de escala para controlar o custo de renderização.
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);

      // Define a resolução interna do canvas.
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);

      // Define o tamanho visual do canvas em pixels CSS.
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Ajusta o sistema de coordenadas para telas de alta densidade.
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      // Recria as partículas para preencher a nova área.
      createParticles();

      // Desenha um quadro sem movimentar as partículas.
      drawFrame(false);
    }

    // Desenha um quadro inteiro da animação.
    // animate indica se devemos atualizar as posições neste quadro.
    function drawFrame(animate: boolean) {
      // Limpa o quadro anterior para desenhar a imagem atualizada.
      context.clearRect(0, 0, width, height);

      if (animate) {
        // Atualiza a posição de cada partícula usando sua velocidade.
        for (const particle of particles) {
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Quando uma partícula sai da tela, ela reaparece no lado oposto.
          if (particle.x < -5) particle.x = width + 5;
          if (particle.x > width + 5) particle.x = -5;
          if (particle.y < -5) particle.y = height + 5;
          if (particle.y > height + 5) particle.y = -5;
        }

        // Faz a posição visual do cursor acompanhar a posição desejada
        // gradualmente, em vez de saltar diretamente para ela.
        if (pointer.active) {
          pointer.x += (pointer.targetX - pointer.x) * 0.09;
          pointer.y += (pointer.targetY - pointer.y) * 0.09;
        }
      }

      // Usa conexões menores no mobile e maiores no desktop.
      const isMobile = width < 640;
      const connectionDistance = isMobile ? 130 : 165;

      // No toque, mostra um brilho colorido sem deslocar a rede.
      if (pointer.active && pointer.isTouch) {
        // Gradiente radial: centro luminoso e bordas transparentes.
        const glow = context.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          150
        );

        glow.addColorStop(0, "rgba(163, 230, 53, 0.09)");
        glow.addColorStop(0.5, "rgba(56, 189, 248, 0.035)");
        glow.addColorStop(1, "rgba(56, 189, 248, 0)");

        // Pinta a área do brilho usando o gradiente criado.
        context.fillStyle = glow;
        context.fillRect(
          pointer.x - 150,
          pointer.y - 150,
          300,
          300
        );
      }

      // Percorre cada partícula para procurar outras próximas.
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];

        // Começa em i + 1 para evitar comparar a partícula consigo mesma
        // e evitar desenhar a mesma conexão duas vezes.
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];

          // Diferença entre as posições das duas partículas.
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;

          // Distância real entre os pontos, calculada por Pitágoras.
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Se estiverem longe demais, não desenha uma conexão.
          if (distance >= connectionDistance) continue;

          // Linhas mais próximas ficam mais visíveis.
          const opacity =
            (1 - distance / connectionDistance) * 0.24;

          // Desenha uma linha ligando os dois pontos.
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(other.x, other.y);

          // Define cor, transparência e espessura da linha.
          context.strokeStyle = `rgba(${particle.color}, ${opacity})`;
          context.lineWidth = 0.75;
          context.stroke();
        }

        // No desktop, cria conexões adicionais próximas ao mouse.
        // Essa interação fica desativada para o toque no mobile.
        if (pointer.active && !pointer.isTouch) {
          const dx = particle.x - pointer.x;
          const dy = particle.y - pointer.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Só conecta o cursor às partículas que estiverem próximas.
          if (distance < 160) {
            // A linha desaparece gradualmente com a distância.
            const opacity = (1 - distance / 160) * 0.2;

            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(pointer.x, pointer.y);
            context.strokeStyle = `rgba(163, 230, 53, ${opacity})`;
            context.lineWidth = 0.8;
            context.stroke();
          }
        }
      }

      // Desenha os círculos que representam as partículas.
      for (const particle of particles) {
        context.beginPath();

        // Cria um círculo completo na posição da partícula.
        context.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        );

        // Define a cor preenchida do ponto.
        context.fillStyle = `rgba(${particle.color}, 0.9)`;

        // Define a cor e a intensidade do brilho externo.
        context.shadowColor = `rgb(${particle.color})`;
        context.shadowBlur = 7;

        // Preenche o círculo.
        context.fill();
      }

      // Desliga o desfoque para não afetar desenhos posteriores.
      context.shadowBlur = 0;
    }

    // Executa um quadro e agenda o próximo.
    // Esse ciclo contínuo é o que produz a animação.
    function animate() {
      drawFrame(true);
      animationFrame = window.requestAnimationFrame(animate);
    }

    // Inicia ou reinicia a animação respeitando a preferência do usuário.
    function startAnimation() {
      // Evita criar dois ciclos de animação ao mesmo tempo.
      window.cancelAnimationFrame(animationFrame);

      if (reducedMotion.matches) {
        // Com movimento reduzido, desativa a interação e desenha
        // as partículas em uma posição estática.
        pointer.active = false;
        drawFrame(false);
        return;
      }

      // Caso contrário, inicia a animação contínua.
      animate();
    }

    // Atualiza a posição desejada do mouse ou do dedo.
    function handlePointerMove(event: PointerEvent) {
      pointer.targetX = event.clientX;
      pointer.targetY = event.clientY;

      // O tipo do ponteiro informa se a interação veio de um toque.
      pointer.isTouch = event.pointerType === "touch";
      pointer.active = true;

      // Na primeira interação, posiciona o cursor imediatamente.
      // Isso evita uma transição inicial a partir do canto da tela.
      if (pointer.x < 0 || pointer.y < 0) {
        pointer.x = event.clientX;
        pointer.y = event.clientY;
      }
    }

    // Encerra a interação quando o toque termina ou é cancelado.
    function handlePointerEnd(event: PointerEvent) {
      if (event.pointerType === "touch") {
        pointer.active = false;
      }
    }

    // Desativa a interação quando a janela perde o foco
    // ou quando o ponteiro sai da área do documento.
    function handlePointerLeave() {
      pointer.active = false;
    }

    // Configura o tamanho, cria as partículas e inicia o efeito.
    resizeCanvas();
    startAnimation();

    // Registra os eventos necessários.
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("pointerup", handlePointerEnd);
    window.addEventListener("pointercancel", handlePointerEnd);
    window.addEventListener("blur", handlePointerLeave);
    document.addEventListener("pointerleave", handlePointerLeave);

    // Se a preferência de movimento mudar, reinicia o efeito adequadamente.
    reducedMotion.addEventListener("change", startAnimation);

    // Limpa os recursos quando o componente é desmontado.
    // Isso evita animações duplicadas e eventos pendurados.
    return () => {
      window.cancelAnimationFrame(animationFrame);

      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerEnd);
      window.removeEventListener("pointercancel", handlePointerEnd);
      window.removeEventListener("blur", handlePointerLeave);

      document.removeEventListener("pointerleave", handlePointerLeave);
      reducedMotion.removeEventListener("change", startAnimation);
    };
  }, []);

  // O canvas fica dentro de um elemento decorativo.
  // aria-hidden evita que o efeito visual seja anunciado como conteúdo.
  return (
    <div className="site-background" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="site-background__canvas"
      />
    </div>
  );
}
