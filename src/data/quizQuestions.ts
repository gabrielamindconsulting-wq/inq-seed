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
      { id: 1, area: 'Socioemocional', question: 'Seu bebê apresenta o sorriso social até o final do primeiro trimestre?', supportText: 'O sorriso social é aquele que o bebê faz em resposta ao rosto ou à voz de quem cuida dele — diferente do sorriso reflexo que ocorre dormindo. Se em algum momento até os 3 meses seu bebê sorriu para você ao vê-lo ou ao ouvir sua voz, marque SIM.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby smile' },
      { id: 2, area: 'Sensório-motor', question: 'Seu bebê apresenta o olhar vago, com pouco interesse pelas pessoas e coisas ao redor?', supportText: 'Um bebê com desenvolvimento típico começa a fixar o olhar e demonstrar curiosidade. Olhar vago significa que os olhos parecem "perdidos", sem focar em nada. Se o bebê raramente olha para você ou para objetos com interesse, marque SIM.', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'newborn eyes' },
      { id: 3, area: 'Sensório-motor', question: 'Seu bebê observa e acompanha com os olhos o movimento de objetos ou pessoas?', supportText: 'Movimente um brinquedo colorido devagar na frente do bebê. Ele deveria seguir o objeto com o olhar. Se o bebê nunca fez isso em nenhum momento, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby mobile' },
      { id: 4, area: 'Comunicação', question: 'Seu bebê responde ou reage a sons (como voz, palma ou barulho)?', supportText: 'O bebê deve piscar, se movimentar, parar o que está fazendo ou tentar localizar a fonte do som quando ouve um barulho próximo. Se nunca demonstrou nenhuma reação a sons, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'newborn sound' },
      { id: 5, area: 'Função Manual', question: 'Seu bebê mantém sempre as mãos fechadas (em punho)?', supportText: 'Nos primeiros meses é normal o bebê ter as mãos fechadas, mas ele deve começar a abri-las espontaneamente. Se as mãos sempre ficam em punho cerrado, sem abrir em nenhum momento, marque SIM.', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'baby hands' },
      { id: 6, area: 'Sensório-motor', question: 'Seu bebê apresenta algum grau de controle da cabeça até o final do primeiro trimestre?', supportText: 'Ao redor de 3 meses, o bebê já deve conseguir sustentar a cabeça por alguns segundos quando está de bruços ou ereto. Se nunca demonstrou nenhum esforço de controle da cabeça, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby head' },
    ],
  },
  {
    id: 'P2',
    label: '4 a 6 meses',
    questions: [
      { id: 1, area: 'Sensório-motor', question: 'Seu bebê parece muito molinho, com pouca firmeza no corpo?', supportText: 'Quando você pega o bebê no colo, ele deve oferecer alguma resistência e firmar o corpo. Se ele fica completamente mole, como uma boneca de pano, sem qualquer tônus, marque SIM.', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'baby holding' },
      { id: 2, area: 'Sensório-motor', question: 'Os braços ou as pernas do seu bebê parecem muito rígidos, difíceis de dobrar?', supportText: 'Ao tentar dobrar o bracinho ou a perninha do bebê suavemente, você sente muita resistência — como se os membros estivessem "duros"? Se sim, marque SIM.', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'baby rigid' },
      { id: 3, area: 'Comunicação', question: 'Seu bebê vira a cabeça para o lado de onde vem um som (a partir dos 4 meses)?', supportText: 'Fale com o bebê do lado que ele não está olhando, ou balance um chocalho. Ele deve virar a cabeça em direção ao som. Se nunca fez isso, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby sound' },
      { id: 4, area: 'Socioemocional', question: 'Seu bebê dá risada ou sorri quando interage com pessoas?', supportText: 'A gargalhada e o sorriso em resposta à interação com adultos devem aparecer neste período. Se o bebê nunca riu ou sorriu ao ver o rosto de quem cuida dele, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby laugh' },
      { id: 5, area: 'Função Manual', question: 'Seu bebê tenta pegar objetos ou brinquedos que estão ao alcance das mãos?', supportText: 'Coloque um brinquedo colorido na frente do bebê, ao alcance. Ele deve estender o braço tentando pegar. Se nunca demonstrou essa tentativa, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby grab toy' },
      { id: 6, area: 'Sensório-motor', question: 'Seu bebê rola ou se movimenta em alguma direção?', supportText: 'Por volta de 4 a 6 meses, o bebê começa a rolar de barriga para cima para barriga para baixo, ou vice-versa. Se nunca realizou nenhum rolamento ou deslocamento, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby rolling' },
    ],
  },
  {
    id: 'P3',
    label: '7 a 9 meses',
    questions: [
      { id: 1, area: 'Sensório-motor', question: 'Quando você coloca o bebê de pé com apoio, as pernas dele sustentam algum peso?', supportText: 'Segure o bebê pela cintura e apoie os pés dele no chão ou no seu colo. Ele deve empurrar com as perninhas, apoiando parte do peso. Se as pernas ficam completamente moles sem sustentar nada, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby standing' },
      { id: 2, area: 'Função Manual', question: 'Seu bebê consegue passar um objeto de uma mão para a outra?', supportText: 'Dê ao bebê um brinquedo pequeno em uma das mãos. Ele deve, em algum momento, transferi-lo para a outra mão. Se nunca fez isso, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby hands transfer' },
      { id: 3, area: 'Comunicação', question: 'Seu bebê balbucia ou emite sons como "baba", "dada", "mama"?', supportText: 'O balbucio é quando o bebê emite sons de forma repetida e brinca com a própria voz. Se o bebê ficou quieto e nunca emitiu sons espontâneos além do choro, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby babbling' },
      { id: 4, area: 'Cognitivo', question: 'Seu bebê demonstra interesse ou reage à brincadeira "Cadê o bebê? Achou!"?', supportText: 'Cubra o rosto com um pano e diga "Cadê?", depois descubra e diga "Achou!". O bebê deve demonstrar expectativa ou alegria. Se nunca reagiu a essa brincadeira, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby peekaboo' },
      { id: 5, area: 'Sensório-motor', question: 'Seu bebê consegue se manter sentado, mesmo que por pouco tempo?', supportText: 'Por volta de 8 a 9 meses, o bebê deve conseguir ficar sentado com apoio das próprias mãos ou de forma independente. Se ele ainda não consegue se sentar de forma alguma, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby sitting' },
      { id: 6, area: 'Socioemocional', question: 'Seu bebê sorri raramente para as pessoas com quem convive?', supportText: 'Neste período, o bebê deve sorrir com frequência para pessoas conhecidas. Se ele raramente sorri durante interações, mesmo com quem cuida dele diariamente, marque SIM.', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'baby smile social' },
    ],
  },
  {
    id: 'P4',
    label: '10 a 12 meses',
    questions: [
      { id: 1, area: 'Sensório-motor', question: 'Seu bebê engatinha ou se desloca no chão de alguma forma?', supportText: 'Alguns bebês arrastam a barriga, outros usam os quatro apoios — qualquer forma de deslocamento coordenado é válida. Se nunca se deslocou de nenhuma forma, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby crawling' },
      { id: 2, area: 'Sensório-motor', question: 'Seu bebê consegue ficar de pé se apoiando em algo (sofá, grade do berço, sua mão)?', supportText: 'O bebê deve ser capaz de se levantar e se manter de pé quando tem um apoio para se segurar. Se nunca tentou ou conseguiu ficar de pé com apoio, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby standing support' },
      { id: 3, area: 'Cognitivo', question: 'Seu bebê aprendeu gestos como balançar a cabeça dizendo "não" ou acenar "tchau"?', supportText: 'Esses gestos mostram que o bebê entende o significado de ações sociais e já se comunica pelo corpo. Se nunca imitou ou usou algum gesto comunicativo, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby waving' },
      { id: 4, area: 'Comunicação', question: 'Seu bebê fala sílabas como "ma", "pa", "da", ou continua balbuciando?', supportText: 'Atenção especial: se o bebê balbuciava antes e parou completamente, isso também é sinal de alerta. Qualquer regressão na comunicação deve ser considerada. Se nunca falou sílabas ou parou de balbuciar, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby babbling' },
      { id: 5, area: 'Função Manual', question: 'Seu bebê aponta com o dedo para objetos, brinquedos ou pessoas?', supportText: 'O bebê deve usar o dedo indicador para mostrar algo que quer ou que lhe chama atenção. Se nunca apontou com o dedinho, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'baby pointing' },
      { id: 6, area: 'Socioemocional', question: 'Seu bebê está frequentemente irritado ou apático, com pouco sorriso social?', supportText: 'Um bebê que chora muito sem motivo aparente, ou que fica indiferente ao que acontece ao redor e raramente sorri, pode precisar de avaliação. Se isso descreve seu bebê na maior parte do tempo, marque SIM.', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'baby mood' },
    ],
  },
  {
    id: 'P5',
    label: '13 a 15 meses',
    questions: [
      { id: 1, area: 'Sensório-motor', question: 'Sua criança consegue andar (mesmo que ainda de forma cambaleante)?', supportText: 'Por volta dos 12 a 15 meses, a maioria das crianças já dá os primeiros passos independentes. Alguns tropeçam bastante — isso é normal. O importante é que já dá alguns passos sem apoio. Se nunca andou, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler walking' },
      { id: 2, area: 'Cognitivo', question: 'Sua criança demonstra saber para que servem objetos do dia a dia (ex.: escova no cabelo, colher para comer)?', supportText: 'Ela não precisa usar o objeto corretamente, mas deve mostrar que sabe para que ele serve. Se não demonstra conhecimento da função de nenhum objeto, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler objects' },
      { id: 3, area: 'Comunicação', question: 'Sua criança fala pelo menos 6 palavras com significado (ex.: água, mamã, papá, não, dá)?', supportText: 'Palavras com função são usadas com intenção — não precisam ser pronunciadas perfeitamente. "Água" pode sair como "ua". O importante é que a criança as use com sentido. Se usa menos de 6, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler words' },
      { id: 4, area: 'Socioemocional', question: 'Sua criança percebe e reage quando os pais ou cuidadores saem ou voltam?', supportText: 'A criança deve mostrar alguma reação quando o cuidador sai — choro, protesto — e ao retornar — alegria, aproximação. Se é completamente indiferente à presença ou ausência dos pais, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler mother separation' },
      { id: 5, area: 'Função Manual', question: 'Sua criança aponta para objetos ou figuras quando você os nomeia (ex.: "Cadê o cachorro?")?', supportText: 'Mostre um livro com imagens e pergunte "Cadê o cachorro?". A criança deve apontar com o dedo para a imagem correta. Se nunca fez isso, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler pointing' },
      { id: 6, area: 'Cognitivo', question: 'Sua criança faz brincadeiras de "faz de conta" simples (ex.: falar ao telefone, dar comidinha à boneca)?', supportText: 'O jogo simbólico é quando a criança finge que algo é outra coisa ou imita ações do dia a dia. Se nunca fez nenhum tipo de brincadeira simbólica, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler pretend play' },
    ],
  },
  {
    id: 'P6',
    label: '16 a 18 meses',
    questions: [
      { id: 1, area: 'Sensório-motor', question: 'Sua criança perdeu alguma habilidade que já havia conquistado (ex.: parou de andar, de falar)?', supportText: 'Atenção: qualquer regressão no desenvolvimento é sinal importante de alerta. Se a criança andava e parou, falava palavras e parou, ou deixou de fazer algo que já fazia, marque SIM e entre em contato com o Instituto imediatamente.', positiveAnswer: 'NÃO', alertAnswer: 'SIM', imageKeyword: 'toddler regression' },
      { id: 2, area: 'Comunicação', question: 'Sua criança está aprendendo novas palavras (o vocabulário está crescendo)?', supportText: 'Neste período, o vocabulário deve estar crescendo gradualmente. Se permanece estagnado há meses, sem nenhuma palavra nova, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler vocabulary' },
      { id: 3, area: 'Cognitivo', question: 'Sua criança demonstra saber para que servem objetos comuns (telefone, colher, escova)?', supportText: 'A criança já deve demonstrar claramente a função dos objetos: pegar a colher e fingir comer, pegar o telefone e falar "alô". Se não demonstra esse conhecimento, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler learning' },
      { id: 4, area: 'Socioemocional', question: 'Sua criança demonstra afeto pelas pessoas com quem convive (abraça, beija, busca contato)?', supportText: 'A criança já deve demonstrar afeto claramente por seus cuidadores. Se é indiferente ao contato afetivo, nunca busca abraço ou proximidade, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler hug parent' },
      { id: 5, area: 'Função Manual', question: 'Sua criança aponta com o dedo para mostrar coisas interessantes às outras pessoas?', supportText: 'Diferente de apontar para pedir, aqui a criança aponta para compartilhar: olha para você e aponta para um avião ou cachorro, como se dissesse "olha isso!". Se nunca fez isso, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler pointing share' },
      { id: 6, area: 'Sensório-motor', question: 'Sua criança já anda de forma independente (sem apoio)?', supportText: 'Aos 18 meses, a criança deve andar sem precisar de apoio, mesmo que ainda tropeçe às vezes. Se ainda não anda sem apoio de nenhuma forma, marque NÃO.', positiveAnswer: 'SIM', alertAnswer: 'NÃO', imageKeyword: 'toddler walking independent' },
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
