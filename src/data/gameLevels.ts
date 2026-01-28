//import all icons from fontawesome
import { faPowerOff, faEarListen, faBoxOpen, faShapes, faSuitcase, faSignsPost, faListOl, faRotate, faHammer, faDragon } from "@fortawesome/free-solid-svg-icons";

export const gameLevels = [
    {
        id: 1,
        title: "O Despertar (Hello World)",
        x: 50, y: 5, // Posição em porcentagem (Left, Top)
        icon: faPowerOff,
        desc: "Toda jornada começa com um único passo. Sua primeira tarefa é fazer o computador falar. Em Python, usamos a função <code>print()</code> para enviar mensagens para a saída padrão.",
        code: `print("Olá, Aventureiro!")\nprint("Sua jornada começa agora.")`,
        challenge: "Abra seu editor Python e faça o script exibir seu nome.",
        unlocks: [2]
    },
    {
        id: 2,
        title: "Os Ecos do Abismo (Input)",
        x: 20, y: 18, // Zigue-zague para esquerda
        icon: faEarListen,
        desc: "A serpente acordou, mas ela é surda às suas necessidades. Você precisa ensinar a ela o feitiço da escuta para que ela possa interagir.\nA Magia da Entrada\nPara interagir, usamos o comando <code>input()</code>. Porém, um som ouvido logo se perde se não for guardado.\nO Receptáculo (Variáveis)\nImagine uma caixa mágica com um rótulo. Em Python, chamamos isso de <strong>Variável</strong>. É onde guardamos o que o usuário digita.",
        code:`# 'nome_heroi' é a Variável (o Receptáculo)\nnome_heroi = input("Qual seu nome, viajante? ")\nprint("Saudações, ",nome_heroi)`,
        challenge:"Desafio: Crie um script que use input() para perguntar o nome do jogador e armazene-o em uma variável.",
        unlocks: [3]
    },
    {
        id: 3,
        title: "O Vale das Variáveis",
        x: 100, y: 20,
        icon: faBoxOpen,
        desc: "Você encontrou itens mágicos, mas precisa guardá-los. Variáveis são como caixas onde armazenamos dados (números, textos, booleanos) para usar depois.",
        code: `# Guardando dados\nhero_name = "Kael"\nlevel = 1\nhealth = 100.5\nis_alive = True\n\nprint(f"Herói: {hero_name}, Nível: {level}")`,
        challenge: "Crie variáveis para 'ataque' e 'defesa' e exiba a soma delas.",
        unlocks: [4]
    },
    {
        id: 4,
        title: 'A Alquimia da Matéria (Tipos)',
        x: 80, y: 30, // Zigue-zague para direita
        icon: faShapes,
        desc: 'A serpente agora possui memória, mas está confusa. Ela tenta somar "Maçã" com "Espada". Você deve ensinar a ela a natureza das essências.\nOs Elementos Primordiais\nEm Python, cada dado tem um "Tipo" (Type). Misturar tipos incompatíveis causa o caos.\nstr (String):Texto, pergaminhos. Ex: "Mago"\nint (Inteiro):Números puros. Ex: 10 de Ouro\nfloat (Real): Números quebrados. 10.5 de Dano\nbool (Booleano):Verdadeiro ou Falso.\n<strong>Nota:</strong> O <code>input()</code> sempre devolve <strong>Texto (str)</strong>!',
        code:`100 # int\n"Gandalf" # str\n# Tentar somar vida + nome daria erro!\nprint(type(vida))`,
        challenge: "Crie variáveis 'força' e 'magia' e exiba a multiplicação delas. ",
        unlocks: [5]
    },
    {
        id: 5,
        title: "O Inventário (Listas)",
        x: 40, y: 45, // x:60 y:85
        icon: faSuitcase,
        desc: "Sua mochila está cheia. Listas permitem armazenar múltiplos itens em uma única variável ordenadamente. Você pode adicionar, remover e acessar itens pelo índice.",
        code: `inventory = ["Espada", "Escudo", "Poção"]\n\n# Adicionando item\ninventory.append("Mapa")\n\n# Acessando o primeiro item\nprint(f"Equipado: {inventory[0]}")`,
        challenge: "Crie uma lista de inimigos. Remova o primeiro inimigo da lista após 'derrotá-lo'.",
        unlocks: [6]
    },
    {
        id: 6,
        title: "A Encruzilhada (If/Else)",
        x: 70, y: 58,
        icon: faSignsPost,
        desc: "O caminho se divide. Se você for forte, vá para a esquerda; senão, vá para a direita. As condicionais <code>if</code>, <code>elif</code> e <code>else</code> controlam o fluxo do destino.",
        code: `monster_level = 5\nmy_level = 3\n\nif my_level >= monster_level:\n    print("Você venceu o monstro!")\nelse:\n    print("Fuga tática necessária!")`,
        challenge: "Escreva uma condição que verifica se a vida (health) é menor que 0. Se for, imprima 'Game Over'.",
        unlocks: [7]
    },
    {
        id: 7,
        title: "A Floresta da Iteração (For)",
        x: 25, y: 72,
        icon: faListOl,
        desc: "Uma horda de inimigos aparece. Você precisa atacar cada um deles, um por um. O loop <code>for</code> é perfeito para percorrer listas ou sequências numéricas.",
        code: `# Usando range para repetir 5 vezes\nfor i in range(5):\n    print(f"Ataque de espada número {i+1}!")`,
        challenge: "Use um loop 'for' para somar todos os números de 0 a 10.",
        unlocks: [8]
    },
    {
        id: 8,
        title: "O Loop do Tempo (While)",
        x: 60, y: 85,
        icon: faRotate,
        desc: "Você está preso em um feitiço temporal! O <code>while</code> repete um bloco de código enquanto uma condição for verdadeira. Cuidado com loops infinitos!",
        code: `potions = 3\n\nwhile potions > 0:\n    print(f"Usando poção... Restam {potions-1}")\n    potions = potions - 1\n\nprint("Acabaram as poções!")`,
        challenge: "Crie um loop que conta de 10 até 0 (contagem regressiva).",
        unlocks: [9]
    },
    {
        id: 9,
        title: "A Forja das Funções",
        x: 90, y: 96,
        icon: faHammer,
        desc: "Você aprendeu golpes repetitivos. Hora de criar uma técnica especial! Funções (<code>def</code>) são blocos de código reutilizáveis que organizam sua lógica.",
        code: `def cast_fireball(damage):\n    print(f"Lançando bola de fogo! Dano: {damage}")\n\n# Chamando a função\ncast_fireball(50)\ncast_fireball(100)`,
        challenge: "Crie uma função que receba dois números e retorne o maior deles.",
        unlocks: [10]
    },
    {
        id: 10,
        title: "O Dragão Final (Projeto)",
        x: 50, y: 96,
        icon: faDragon,
        desc: "O desafio final. Combine tudo o que aprendeu: Variáveis, Condicionais, Loops e Funções para criar um mini sistema de batalha.",
        code: `import random\n\ndef dragon_battle():\n    dragon_hp = 100\n    while dragon_hp > 0:\n        dmg = random.randint(10, 30)\n        dragon_hp -= dmg\n        print(f"Você causou {dmg} de dano!")\n    print("O Dragão caiu!")\n\ndragon_battle()`,
        challenge: "Copie o código, adicione uma variável para a vida do Jogador e faça o dragão atacar de volta!",
        unlocks: []
    }
];