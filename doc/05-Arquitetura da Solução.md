# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

## Diagrama de Classes
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/2024-1-E3-ProjTechNews/blob/main/doc/img/diagrama%20de%20classes.24.09%20.jpg?raw=true)




## Modelo ER (Projeto Conceitual)

![Modelo Entidade Relacionamento](https://github.com/ICEI-PUC-Minas-PMV-ADS/2024-1-E3-ProjTechNews/blob/main/doc/img/projeto%20conceitual.jpg?raw=true)

## Projeto da Base de Dados

![Projeto da Base de Dados](https://github.com/ICEI-PUC-Minas-PMV-ADS/2024-1-E3-ProjTechNews/blob/main/doc/img/projeto%20da%20base%20de%20dados.png?raw=true)
O projeto da base de dados corresponde à representação das entidades e relacionamentos identificadas no Modelo ER, no formato de tabelas, com colunas e chaves primárias/estrangeiras necessárias para representar corretamente as restrições de integridade.
 
## Diagrama BPMN

![BPMN](https://github.com/ICEI-PUC-Minas-PMV-ADS/2024-1-E3-ProjTechNews/blob/main/doc/img/BPMN.jpg)

## Processo de Negócio

### Etapa 1: Acesso Inicial
- Descrição: O usuário abre a aplicação em seu dispositivo.
- Entrada: Usuário seleciona o ícone do aplicativo.
- Saída: A tela de login/cadastro é exibida.
- Responsável: Aplicativo.

### Etapa 2: Cadastro ou Login
- Descrição: O usuário tem a opção de se cadastrar ou fazer login.
- Opção 1: Cadastro
- Descrição: Usuário escolhe se cadastrar.
- Entrada: Dados de cadastro (nome, e-mail, senha).
- Saída: Conta criada e usuário logado.
- Responsável: Sistema de gerenciamento de usuários.
  
- Opção 2: Login
- Descrição: Usuário escolhe fazer login.
- Entrada: Credenciais de login (e-mail, senha).
- Saída: Usuário logado.
- Responsável: Sistema de gerenciamento de usuários.
- Saída Geral: Usuário autenticado e redirecionado para a home da aplicação.
- Responsável: Sistema de autenticação.

### Etapa 3: Navegação na Home
- Descrição: O usuário acessa a home após o login.
- Entrada: Usuário autenticado.
- Saída: Tela principal com opções de visualizar notícias e postar notícias.
- Responsável: Aplicativo.

### Etapa 4: Visualizar Notícias
- Descrição: O usuário opta por visualizar as notícias postadas.
- Entrada: Seleção da opção "Visualizar Notícias".
- Saída: Exibição de notícias disponíveis.
- Responsável: Sistema de gerenciamento de conteúdo.

### Etapa 5: Postar Notícia
- Descrição: O usuário opta por postar sua própria notícia.
- Entrada: Seleção da opção "Postar Notícia" e inserção do conteúdo da notícia (título, texto, imagens).
- Saída: Notícia publicada e visível para outros usuários.
- Responsável: Sistema de gerenciamento de conteúdo.

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Indicadores de qualidade de software

1. Funcionalidade
- Definição: A capacidade do software de fornecer funcionalidades que atendam às necessidades especificadas.

- Indicadores: Completude funcional, correção funcional, adequação funcional.
- Justificativa: Para o, é crucial que todas as funcionalidades de autenticação e gerenciamento de notícias funcionem conforme esperado, permitindo aos usuários realizar todas as operações previstas sem erros.

2. Confiabilidade
- Definição: A capacidade do software de manter um nível de desempenho sob condições definidas por um período determinado.

- Indicadores: Maturidade, disponibilidade, tolerância a falhas.
- Justificativa: O aplicativo deve ser confiável ao lidar com autenticações e transações de dados (como postar e recuperar notícias), mantendo a integridade e a disponibilidade dos dados mesmo em caso de falhas.

3. Usabilidade
- Definição: A capacidade do software de ser compreendido, aprendido, usado e atraente para o usuário, sob condições específicas.

- Indicadores: Facilidade de aprendizado, eficácia, eficiência na utilização, satisfação do usuário.
- Justificativa: Usabilidade é essencial, especialmente para garantir que novos usuários possam facilmente se registrar, fazer login e usar as funcionalidades do aplicativo sem dificuldades, promovendo uma experiência de usuário positiva.

4. Eficiência
- Definição: A capacidade do software de proporcionar desempenho apropriado, relativo à quantidade de recursos usados, sob condições definidas.

- Indicadores: Comportamento em relação ao tempo, comportamento em relação aos recursos.
- Justificativa: O aplicativo deve carregar e responder rapidamente às ações do usuário, mesmo sob carga, usando o mínimo possível de recursos do dispositivo e da rede.

5. Manutenibilidade
- Definição: A capacidade do software de ser modificado, incluindo correções, melhorias ou adaptações.

- Indicadores: Modularidade, reusabilidade, analisabilidade, capacidade de ser testado e modificado.
- Justificativa: Importante para garantir que o aplicativo possa ser facilmente atualizado e mantido, permitindo correções de bugs, atualizações de funcionalidades e adaptações a novos requisitos de negócios ou mudanças tecnológicas sem grandes custos.

6. Portabilidade
- Definição: A capacidade do software de ser transferido de um ambiente para outro.

- Indicadores: Adaptabilidade, capacidade de instalação, coexistência, substituibilidade.
- Justificativa: Essencial para um aplicativo móvel que pode precisar operar em diferentes sistemas operacionais e dispositivos, facilitando a distribuição e a operação em diferentes plataformas móveis sem necessidade de extensivas reconfigurações.

Esses indicadores ajudarão a monitorar e melhorar continuamente a qualidade do software ao longo do desenvolvimento e após o lançamento. A avaliação regular desses aspectos é crucial para garantir a satisfação do usuário e o sucesso do aplicativo no mercado competitivo.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, identifique as sub-características que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão a equipe avaliar os objetos de interesse.

> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)
