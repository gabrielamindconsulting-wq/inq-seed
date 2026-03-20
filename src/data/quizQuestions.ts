export interface Question {
  id: number;
  area: 'Socioemocional' | 'Sensório-motor' | 'Função Manual' | 'Cognitivo' | 'Comunicação';
  question: string;
  supportText: string;
  positiveAnswer: 'SIM' | 'NÃO';
  alertAnswer: 'SIM' | 'NÃO';
  imageKeyword: string;
}

export interface AgePeriod {
  id: string;
  label: string;
  questions: Question[];
}

export const agePeriods: AgePeriod[] = [
  {
    id: 'P1',
    label: '0 a 3 meses',
    questions: [
      { id: 1, area: 'Socioemocional', question: 'Apresenta o sorriso social até o final do primeiro trimestre?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby smile' },
      { id: 2, area: 'Sensório-motor', question: 'Apresenta o olhar vago com pouco interesse?', supportText: '', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'newborn eyes' },
      { id: 3, area: 'Sensório-motor', question: 'Observa e acompanha os movimentos dos objetos e/ou das coisas?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby mobile' },
      { id: 4, area: 'Sensório-motor', question: 'Ao menor ruído realiza movimentos de sobressalto ou susto?', supportText: '', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'newborn sound' },
      { id: 5, area: 'Sensório-motor', question: 'Apresenta movimentos involuntários?', supportText: '', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'baby hands' },
      { id: 6, area: 'Sensório-motor', question: 'Apresenta movimentos circulares das mãos (fluxo contínuo de movimentos involuntários lentos, contínuos e contorcidos)?', supportText: '', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'baby hands' },
      { id: 7, area: 'Sensório-motor', question: 'Apresenta tremores das extremidades (mãos e pés)?', supportText: '', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'baby hands' },
      { id: 8, area: 'Sensório-motor', question: 'Apresenta exacerbação do reflexo de sucção?', supportText: '', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'baby holding' },
      { id: 9, area: 'Função Manual', question: 'Mantém sempre as mãos fechadas?', supportText: '', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'baby hands' },
      { id: 10, area: 'Função Manual', question: 'Leva a mão à boca?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby hands' },
      { id: 11, area: 'Comunicação', question: 'Responde ou reage aos sons?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'newborn sound' },
      { id: 12, area: 'Sensório-motor', question: 'Apresenta algum grau de controle de cabeça até o final do primeiro trimestre?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby head' },
    ],
  },
  {
    id: 'P2',
    label: '4 a 6 meses',
    questions: [
      { id: 1, area: 'Sensório-motor', question: 'Apresenta até o final do segundo trimestre hipotonia do eixo do corpo (molinho demais)?', supportText: '', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'baby holding' },
      { id: 2, area: 'Sensório-motor', question: 'Apresenta deficiência ou falta de controle da cabeça?', supportText: '', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'baby head' },
      { id: 3, area: 'Sensório-motor', question: 'Apresenta hipertonia de membros (rigidez dos membros)?', supportText: '', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'baby rigid' },
      { id: 4, area: 'Sensório-motor', question: 'Demonstra falta de interesse ou é extremamente lento na movimentação?', supportText: '', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'baby holding' },
      { id: 5, area: 'Sensório-motor', question: 'Apresenta movimentos involuntários?', supportText: '', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'baby hands' },
      { id: 6, area: 'Sensório-motor', question: 'Empurra com as pernas, quando os pés estão encostados na parede ou em superfície dura?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby standing' },
      { id: 7, area: 'Sensório-motor', question: 'Apresenta movimentos bruscos, tipo: choque, tremor ou descarga?', supportText: '', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'baby hands' },
      { id: 8, area: 'Comunicação', question: 'Vira a cabeça para localizar sons (4 meses)?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby sound' },
      { id: 9, area: 'Socioemocional', question: 'Apresenta o sorriso social?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby laugh' },
      { id: 10, area: 'Comunicação', question: 'Reage quando chamado pelo próprio nome?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby sound' },
      { id: 11, area: 'Sensório-motor', question: 'Observa o movimento de objetos, coisas e/ou pessoas?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby mobile' },
      { id: 12, area: 'Função Manual', question: 'Tenta pegar objetos e/ou brinquedos que estão ao alcance?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby grab toy' },
      { id: 13, area: 'Sensório-motor', question: 'Rola ou se movimenta em alguma direção?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby rolling' },
      { id: 14, area: 'Comunicação', question: 'Emite ou reage aos sons?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'newborn sound' },
      { id: 15, area: 'Função Manual', question: 'Apresenta dificuldade em levar objetos e/ou brinquedos à boca?', supportText: '', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'baby hands' },
      { id: 16, area: 'Socioemocional', question: 'Demonstra afeto por seus cuidadores?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby smile social' },
    ],
  },
  {
    id: 'P3',
    label: '7 a 9 meses',
    questions: [
      { id: 1, area: 'Sensório-motor', question: 'Apresenta pernas moles, com dificuldade de suportar o peso quando colocado de pé (hipotonia)?', supportText: '', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'baby standing' },
      { id: 2, area: 'Sensório-motor', question: 'Apresenta pernas duras ou dificuldade de dobrar (hipertonia)?', supportText: '', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'baby rigid' },
      { id: 3, area: 'Sensório-motor', question: 'É capaz de se manter sentado (hipotonia de tronco)?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby sitting' },
      { id: 4, area: 'Função Manual', question: 'Persiste em manter as mãos fechadas e os polegares voltados para as palmas das mãos?', supportText: '', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'baby hands' },
      { id: 5, area: 'Função Manual', question: 'Transfere objetos e/ou brinquedos de uma mão para a outra?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby hands transfer' },
      { id: 6, area: 'Comunicação', question: 'Responde ao próprio nome?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby sound' },
      { id: 7, area: 'Comunicação', question: 'Apresenta incapacidade de localizar sons e/ou ruídos?', supportText: '', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'newborn sound' },
      { id: 8, area: 'Comunicação', question: 'Balbucia ou vocaliza?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby babbling' },
      { id: 9, area: 'Socioemocional', question: 'Apresenta pouco sorriso social?', supportText: '', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'baby smile social' },
      { id: 10, area: 'Cognitivo', question: 'Demonstra interesse durante a leitura de um adulto?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby peekaboo' },
      { id: 11, area: 'Cognitivo', question: 'Demonstra interesse pela brincadeira "Cadê o bebê?/Achou."?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby peekaboo' },
      { id: 12, area: 'Cognitivo', question: 'Olha para onde você aponta?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby smile social' },
      { id: 13, area: 'Socioemocional', question: 'Participa de alguma brincadeira envolvendo dar e receber objetos?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby hands transfer' },
    ],
  },
  {
    id: 'P4',
    label: '10 a 12 meses',
    questions: [
      { id: 1, area: 'Sensório-motor', question: 'Perdeu habilidades naquilo que já tinha adquirido?', supportText: '', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'baby mood' },
      { id: 2, area: 'Sensório-motor', question: 'Engatinha?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby crawling' },
      { id: 3, area: 'Sensório-motor', question: 'Consegue ficar de pé com apoio?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby standing support' },
      { id: 4, area: 'Cognitivo', question: 'Procura por objetos e/ou brinquedos que viu serem escondidos?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby peekaboo' },
      { id: 5, area: 'Cognitivo', question: 'Aprendeu gestos como: balançar a cabeça dizendo não e acenar dando tchau?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby waving' },
      { id: 6, area: 'Função Manual', question: 'Aponta para objetos/brinquedos/pessoas?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby pointing' },
      { id: 7, area: 'Sensório-motor', question: 'Permanece muito tempo parado ou com os olhos parados?', supportText: '', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'newborn eyes' },
      { id: 8, area: 'Sensório-motor', question: 'Apresenta movimentos anormais?', supportText: '', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'baby hands' },
      { id: 9, area: 'Comunicação', question: 'Fala sílabas ou deixou de balbuciar?', supportText: 'Atenção: se o bebê balbuciava antes e parou, isso é sinal de alerta.', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'baby babbling' },
      { id: 10, area: 'Comunicação', question: 'Apresenta tentativa de dialogar com o cuidador com quem mais interage?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby sound' },
      { id: 11, area: 'Socioemocional', question: 'Encontra-se psiquicamente irritado ou inerte, com sorriso social pobre?', supportText: '', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'baby mood' },
    ],
  },
  {
    id: 'P5',
    label: '13 a 15 meses',
    questions: [
      { id: 1, area: 'Sensório-motor', question: 'Perdeu habilidades que já havia conquistado?', supportText: '', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'toddler regression' },
      { id: 2, area: 'Sensório-motor', question: 'Consegue andar?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler walking' },
      { id: 3, area: 'Função Manual', question: 'Aponta para objetos quando nomeados?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler pointing' },
      { id: 4, area: 'Cognitivo', question: 'Sabe a utilidade dos objetos?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler objects' },
      { id: 5, area: 'Cognitivo', question: 'Faz imitação?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler imitation' },
      { id: 6, area: 'Comunicação', question: 'Aprende novas palavras?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler words' },
      { id: 7, area: 'Comunicação', question: 'Apresenta um vocabulário de, no mínimo, seis palavras com função?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler words' },
      { id: 8, area: 'Comunicação', question: 'Percebe sons no ambiente?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'newborn sound' },
      { id: 9, area: 'Socioemocional', question: 'Liga ou percebe se os pais/cuidadores saem ou retornam?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler mother separation' },
      { id: 10, area: 'Função Manual', question: 'Aponta para mostrar coisas para outras pessoas?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler pointing share' },
      { id: 11, area: 'Cognitivo', question: 'Possui jogo simbólico?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler pretend play' },
    ],
  },
  {
    id: 'P6',
    label: '16 a 18 meses',
    questions: [
      { id: 1, area: 'Sensório-motor', question: 'Perdeu habilidades que já havia adquirido?', supportText: '', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'toddler regression' },
      { id: 2, area: 'Cognitivo', question: 'Consegue seguir comandos simples?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler learning' },
      { id: 3, area: 'Cognitivo', question: 'Imita sons, gestos, expressões e palavras?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler imitation' },
      { id: 4, area: 'Sensório-motor', question: 'Consegue andar/caminhar com firmeza?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler walking independent' },
      { id: 5, area: 'Cognitivo', question: 'Conhece a utilidade e a função de objetos e brinquedos?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler objects' },
      { id: 6, area: 'Comunicação', question: 'Usa frases de 2 palavras (por exemplo, "beber água")?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler two words' },
      { id: 7, area: 'Comunicação', question: 'Fala alguma palavra?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler words' },
      { id: 8, area: 'Cognitivo', question: 'Sabe o que fazer com coisas comuns, como escova, telefone, garfo, colher?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler objects' },
      { id: 9, area: 'Função Manual', question: 'Imita ações e palavras?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler imitation' },
      { id: 10, area: 'Socioemocional', question: 'Isola-se, recusa-se a brincar com outras crianças?', supportText: '', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'toddler social play' },
      { id: 11, area: 'Sensório-motor', question: 'Apresenta gestos e/ou movimentos repetitivos?', supportText: '', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'toddler running' },
      { id: 12, area: 'Socioemocional', question: 'Faz contato visual?', supportText: '', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler eye contact' },
    ],
  },
  {
    id: 'P7',
    label: '1 ano e 7 meses a 2 anos',
    questions: [
      { id: 1, area: 'Sensório-motor', question: 'Sua criança consegue andar ou caminhar com firmeza?', supportText: 'Aos 2 anos, a criança já deve andar com segurança, correr e até chutar uma bola sem cair. Se ainda caminha de forma muito instável ou não anda, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler running' },
      { id: 2, area: 'Cognitivo', question: 'Sua criança conhece a utilidade e função de objetos e brinquedos (ex.: escova para o cabelo, colher para comer)?', supportText: 'Ela deve usar os objetos corretamente nas brincadeiras ou no dia a dia. Se não demonstra saber para que servem as coisas, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler pretend play' },
      { id: 3, area: 'Comunicação', question: 'Sua criança já usa frases de 2 palavras juntas (ex.: "mamã não", "beber água", "vai lá")?', supportText: 'Por volta dos 2 anos, a criança já deve combinar duas palavras para se comunicar. Se ainda fala apenas palavras soltas ou não fala nada, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler two words' },
      { id: 4, area: 'Socioemocional', question: 'Sua criança se isola ou recusa interagir com outras crianças quando há oportunidade?', supportText: 'Nesta fase, a criança já deve demonstrar interesse por outras crianças. Se sempre se afasta, ignora ou chora ao ser colocada perto de outras crianças, marque SIM.', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'toddler social play' },
      { id: 5, area: 'Função Manual', question: 'Sua criança imita ações e palavras que vê ou ouve (ex.: imita varrer, falar ao telefone)?', supportText: 'A imitação é fundamental para o aprendizado. Se você fizer gestos simples na frente dela, ela deve tentar imitar. Se nunca tenta imitar ações ou sons do cotidiano, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler imitation' },
      { id: 6, area: 'Socioemocional', question: 'Sua criança faz contato visual com as pessoas ao se comunicar ou interagir?', supportText: 'A criança deve olhar nos olhos das pessoas durante a interação, quando chamada pelo nome ou quando está pedindo algo. Se raramente ou nunca mantém contato visual, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler eye contact' },
    ],
  },
  {
    id: 'P8',
    label: '3 anos (36 meses)',
    questions: [
      { id: 1, area: 'Sensório-motor', question: 'Sua criança cai com muita frequência ou tem dificuldade para subir e descer degraus?', supportText: 'Aos 3 anos, a criança já deve subir e descer escadas com razoável segurança. Se cai muito mais do que outras crianças da mesma idade ou tem grande dificuldade em degraus, marque SIM.', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'child stairs' },
      { id: 2, area: 'Cognitivo', question: 'Sua criança entende e atende a comandos simples (ex.: "pega o sapato", "senta aqui", "joga fora")?', supportText: 'Dê uma instrução simples, sem gesticular. A criança deve entender e realizar o que foi pedido. Se raramente ou nunca segue comandos verbais simples, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'child following instruction' },
      { id: 3, area: 'Comunicação', question: 'Sua criança usa frases (mesmo curtas) para se comunicar no dia a dia?', supportText: 'Aos 3 anos, a criança já deve usar frases de pelo menos 2 a 3 palavras. Ex.: "Eu quero água", "Mamãe, vai passear?". Se usa apenas palavras soltas ou gestos, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'child speaking' },
      { id: 4, area: 'Cognitivo', question: 'Sua criança brinca de faz de conta (ex.: de casinha, de médico, de cozinhar)?', supportText: 'A criança deve criar cenários imaginários, assumir papéis e usar objetos simbolicamente. Se nunca brinca assim, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'child pretend play' },
      { id: 5, area: 'Função Manual', question: 'Sua criança consegue manusear objetos e brinquedos simples com as mãos (ex.: empilhar blocos, folhear livro, usar colher)?', supportText: 'Aos 3 anos, a criança deve ter razoável habilidade manual. Se tem muita dificuldade para manusear objetos simples, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'child blocks stacking' },
      { id: 6, area: 'Socioemocional', question: 'Sua criança demonstra interesse por pessoas, brinquedos e pelo que acontece ao redor?', supportText: 'A criança deve demonstrar curiosidade pelo mundo: explorar brinquedos, se interessar por outras pessoas, reagir ao que acontece ao redor. Se parece indiferente a tudo, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'child curious' },
    ],
  },
  {
    id: 'P9',
    label: '4 anos (48 meses)',
    questions: [
      { id: 1, area: 'Sensório-motor', question: 'Sua criança consegue pular com os dois pés juntos no mesmo lugar?', supportText: 'Peça para a criança pular como um coelho, com os dois pés saindo do chão ao mesmo tempo. Aos 4 anos ela já deve conseguir. Se ainda não consegue pular com os dois pés, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'child jumping' },
      { id: 2, area: 'Função Manual', question: 'Sua criança consegue rabiscar ou desenhar com lápis ou giz de cera?', supportText: 'Não é necessário desenhar algo reconhecível. A criança deve conseguir fazer marcas, rabiscos ou formas no papel. Se tem grande dificuldade para segurar o lápis e rabiscar, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'child drawing' },
      { id: 3, area: 'Comunicação', question: 'A fala da sua criança é compreensível para pessoas que não são da família?', supportText: 'Aos 4 anos, pessoas de fora devem conseguir entender boa parte do que a criança fala. Se apenas os pais entendem, ou se ela só repete falas de desenhos, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'child speaking comprehensible' },
      { id: 4, area: 'Cognitivo', question: 'Sua criança entende conceitos como: dentro/fora, igual/diferente, grande/pequeno?', supportText: 'Peça para ela colocar o brinquedo "dentro" da caixa, ou mostre duas figuras e pergunte se são "iguais" ou "diferentes". Se não entende esses conceitos básicos, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'child concepts learning' },
      { id: 5, area: 'Socioemocional', question: 'Sua criança interage com outras crianças e responde a pessoas de fora do convívio familiar?', supportText: 'Ela não precisa ser extrovertida, mas deve demonstrar algum interesse em outras crianças. Se ignora completamente outras crianças e pessoas de fora, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'child playing peers' },
      { id: 6, area: 'Cognitivo', question: 'Sua criança demonstra interesse em brincadeiras de faz de conta e em jogos interativos com outras pessoas?', supportText: 'Aos 4 anos, o faz de conta fica mais elaborado. A criança deve gostar de interagir em jogos com outras crianças. Se não tem interesse em nenhum jogo ou brincadeira interativa, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'child imaginative play' },
    ],
  },
  {
    id: 'P10',
    label: '5 anos (60 meses)',
    questions: [
      { id: 1, area: 'Sensório-motor', question: 'Sua criança consegue pular erguendo os dois pés do chão ao mesmo tempo (saltar)?', supportText: 'Aos 5 anos, a criança deve conseguir pular em distância, pular de um lugar mais alto e até ficar num pé só por alguns segundos. Se ainda não consegue saltar com os dois pés, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'child jumping leap' },
      { id: 2, area: 'Função Manual', question: 'Sua criança consegue desenhar figuras simples (boneco palito, casa, sol)?', supportText: 'Aos 5 anos, deve ser capaz de desenhar um bonequinho com pelo menos cabeça, corpo e membros. Se não consegue reproduzir nenhuma forma reconhecível, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'child drawing figure' },
      { id: 3, area: 'Comunicação', question: 'Sua criança sabe dizer seu próprio nome e sobrenome?', supportText: 'Pergunte: "Qual é o seu nome completo?" A criança deve responder com primeiro nome e pelo menos parte do sobrenome. Se não sabe ou não responde, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'child name identity' },
      { id: 4, area: 'Cognitivo', question: 'Sua criança já consegue diferenciar o que é real do que é de mentira ou de história (ex.: sabe que o monstro da história não existe)?', supportText: 'Aos 5 anos, a criança começa a entender a diferença entre faz de conta e realidade. Se ainda confunde totalmente o real com o imaginário de forma persistente, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'child real fantasy' },
      { id: 5, area: 'Socioemocional', question: 'Sua criança consegue expressar suas emoções de forma adequada (sem crises extremas na maior parte do tempo)?', supportText: 'Toda criança tem birras ocasionais, mas aos 5 anos já deve ter mais autocontrole. Se apresenta crises extremas de agressividade, medo intenso ou tristeza com muita frequência e sem motivo, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'child emotions expressing' },
      { id: 6, area: 'Comunicação', question: 'Sua criança compreende o que as pessoas falam com ela (segue conversas e instruções)?', supportText: 'Aos 5 anos, a criança deve entender histórias, perguntas e instruções mais elaboradas. Se parece não compreender o que é dito na maior parte do tempo, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'child comprehension language' },
    ],
  },
  {
    id: 'P11',
    label: '6 anos (72 meses)',
    questions: [
      { id: 1, area: 'Sensório-motor', question: 'Sua criança perdeu alguma habilidade que já havia conquistado (motora, de fala, social)?', supportText: 'Atenção: qualquer regressão significativa é sempre um sinal de alerta. Se a criança regrediu em algo que já dominava, marque SIM e entre em contato com o Instituto.', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'child regression skills' },
      { id: 2, area: 'Comunicação', question: 'A fala da sua criança é compreensível e ela usa frases com gramática adequada para a idade?', supportText: 'Aos 6 anos, a criança deve pronunciar quase todos os sons corretamente e usar frases completas. Se a fala ainda é muito difícil de entender, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'child speech clear' },
      { id: 3, area: 'Cognitivo', question: 'Sua criança está aprendendo coisas novas (na escola, em casa)?', supportText: 'Nesta fase, a criança inicia a alfabetização e aprende conceitos matemáticos básicos. Se tem grande dificuldade para aprender qualquer coisa nova, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'child learning school' },
      { id: 4, area: 'Socioemocional', question: 'Sua criança consegue reconhecer e expressar suas emoções de forma adequada (sem comportamentos extremos na maior parte do tempo)?', supportText: 'Aos 6 anos, deve ter mais autocontrole emocional e lidar melhor com frustrações. Se apresenta agressividade intensa ou tristeza profunda com frequência, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'child emotions control' },
      { id: 5, area: 'Função Manual', question: 'Sua criança realiza atividades básicas da rotina com independência (vestir-se, escovar dentes, lavar mãos)?', supportText: 'Aos 6 anos, deve ser capaz de realizar atividades básicas com pouca ou nenhuma ajuda. Se ainda depende totalmente de adulto para todas as atividades, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'child independence routine' },
      { id: 6, area: 'Socioemocional', question: 'Sua criança tem iniciativa para se comunicar e responde adequadamente quando as pessoas falam com ela?', supportText: 'A criança deve iniciar conversas espontaneamente, fazer perguntas, contar o que aconteceu na escola. Se raramente inicia comunicação e responde de forma superficial, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'child communication initiate' },
    ],
  },
];

export function getAgePeriodFromBirthDate(birthDate: Date): string | null {
  const now = new Date();
  const diffMs = now.getTime() - birthDate.getTime();
  const months = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 30.44));

  if (months >= 0 && months <= 3) return 'P1';
  if (months >= 4 && months <= 6) return 'P2';
  if (months >= 7 && months <= 9) return 'P3';
  if (months >= 10 && months <= 12) return 'P4';
  if (months >= 13 && months <= 15) return 'P5';
  if (months >= 16 && months <= 18) return 'P6';
  if (months >= 19 && months <= 24) return 'P7';
  if (months >= 25 && months <= 42) return 'P8';
  if (months >= 43 && months <= 54) return 'P9';
  if (months >= 55 && months <= 66) return 'P10';
  if (months >= 67 && months <= 78) return 'P11';
  return null;
}
