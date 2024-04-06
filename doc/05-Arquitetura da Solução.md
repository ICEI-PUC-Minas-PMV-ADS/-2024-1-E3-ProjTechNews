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
 
Para mais informações, consulte o microfundamento "Modelagem de Dados".

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

A qualidade do produto de software procura equilibrar três fatores: (a) a qualidade intrínseca do produto, (b) seu custo e (c) o atendimento, isto é, a quantidade certa no local certo e no momento certo.
A qualidade de software, conforme definido pela ISO/IEC 25010 (atualização da ISO/IEC 9126), refere-se às características e propriedades de um software que determinam seu grau de satisfação em atender às necessidades explícitas e implícitas do usuário. 

Essas características são agrupadas em oito atributos principais:

Funcionalidade: Refere-se à capacidade do software de fornecer funções que atendam aos requisitos especificados e às necessidades implícitas do usuário. Exemplo na engenharia de software: um sistema de gerenciamento de vendas que permite registrar, processar e analisar pedidos de clientes.

Confiabilidade: Diz respeito à capacidade do software de manter um nível de desempenho esperado em condições específicas durante um período de tempo determinado. Por exemplo, um sistema bancário que não falha ao processar transações críticas.

Usabilidade: Refere-se à facilidade de uso e compreensão do software pelo usuário final. Um exemplo seria um aplicativo de edição de fotos que possui uma interface intuitiva e recursos de ajuda para orientar novos usuários.

Eficiência: Relaciona-se à capacidade do software de utilizar recursos de forma adequada para realizar suas funções, como memória, processamento e largura de banda. Por exemplo, um sistema de gerenciamento de banco de dados que otimiza consultas para melhorar o desempenho.

Manutenibilidade: Refere-se à facilidade com que o software pode ser modificado, corrigido e adaptado para atender a novos requisitos ou mudanças no ambiente. Por exemplo, um sistema de controle de estoque que permite adicionar novos recursos sem afetar o funcionamento geral.

Portabilidade: Diz respeito à capacidade do software de ser transferido entre diferentes ambientes de execução sem a necessidade de modificações excessivas. Um exemplo seria um aplicativo móvel que funciona em diferentes sistemas operacionais sem perda significativa de funcionalidade.

Segurança: Refere-se à capacidade do software de proteger dados, sistemas e recursos contra acesso não autorizado, falhas e outros ataques. Por exemplo, um sistema de pagamento online que utiliza criptografia para proteger informações sensíveis do cliente.

Compatibilidade: Relaciona-se à capacidade do software de interoperar com outros sistemas, produtos ou componentes sem problemas. Um exemplo seria um navegador da web que é compatível com vários padrões da web e pode exibir corretamente diferentes tipos de conteúdo.

Esses atributos de qualidade são essenciais na engenharia de software e em diversas outras aplicações para garantir que o software atenda às expectativas dos usuários, seja confiável, seguro e fácil de usar, além de permitir modificações e adaptações conforme necessário.


> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)
