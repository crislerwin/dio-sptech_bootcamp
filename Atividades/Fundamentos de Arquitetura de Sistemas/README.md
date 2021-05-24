# Fundamentos da Arquitetura de Sistemas

# Serviços Web - Aula 1

- Serviços Web ou Web Services são soluções para aplicações se comunicarem independente de linguagem, softwares e hardwares utilizados.
- Inicialmente Serviços web foram criados para troca de mensagens utilizando a linguagem XML (Extensible Markup Language) sobre o Protocolo HTTP sendo identificado por URI (Uniform Resource Identifier).
- Podemos dizer que Serviços Web são API's que se comunicam por meio de redoes sobre o protocolo HTTP.

## Vantagens

- linguagem Comum
- Integração
- Reutilização de implementação
- Segurança
- Custos

## Principais tecnologias

- SOAP
- REST
- XML
- JSON

# Estrutura SOAP - Aula 2

## Objetivos da Aula

- O que é SOAP
- Vantagens de se utilizar SOAP
- O que é XML
- Entender a estrutura de uma mensagem SOAP

## SOAP

- SOAP - Simple Object Access Protocol
- É um protocolo baseado em XML para acessar serviços web principalmente por HTTP.
- Pode se dizer que SOAP é uma definição de como serviços web se comunicam.
- Foi desenvolvida para facilitar integrações entre aplicações.

## Vantagens

- Permite integrações entre aplicações, independente de linguagem, pois usa como linguagem comum o XML
- É independente de plataforma e software.
- Meio de transporte genérico, ou seja, pode ser usado por outros protocolos além do HTTP.

## O que é XML

- XML - Extensible Markup Language
- É uma linguagem de marcação criada na década de 90 pela W3C
- Facilita a separação de conteúdo
- Não tem limitação de criação de tags
- Linguagem comum para integrações entre aplicações

## Estrutura SOAP

- SOAP Envelope é o primeiro elemento do documento e é usado para encapsular toda a mensagem SOAP.
- SOAP Header é o elemento onde possui informações de atributos e metadados de requisição.
- SOAP Body é o elemento que contém os detalhes da mensagem.

# Entendendo o que é WSDL e XSD - Aula 3

## Objetivos da Aula

1. O que é WSDL
2. O que é XSD
3. SOAP na prática

## WSDL

- WSDL - Web Services Description Language
- Usado para descrever Web Services, funciona como um contrato do Serviço.
- A descrição é feito em um documento XML, onde é descrito o serviço, especificações de acesso, operações e métodos.

## XSD

- XSD - XML Schema Definition
- É um schema no formato XML para definir a estrutura de dados que será validada no XML.
- O XSD funciona como uma documentação de como deve ser montado o SOAP Message (XML) que será enviado através de Web Service.

# Aprenda o que são REST, API e JSON - Aula 4

## Objetivos da Aula

1. O que é REST
2. Vantagens de se utilizar REST
3. O que é API
4. Entendendo os métodos utilizados pelo REST
5. Estrutura de um REST
6. Estrutura de um JSON

## REST

- REST - Representational State Transfer.
- É um estilo de arquitetura de software que define a implementação de um serviço web.
- Podem trabalhar com os formatos XML,JSON ou outros.

## Vantagens do REST

- Permite integrações entre aplicações e também entre cliente e servidor em páginas web e aplicações.
- Utiliza dos métodos HTTP para definir a operação que está sendo efetuada.
- Arquitetura de fácil compreensão.

## API

- API - Application Programming Interface
- São conjuntos de rotinas documentados e disponibilizados por uma aplicação para que outras aplicações possam consumir suas funcionalidades
- Ficou popular com o aumento dos serviços web.
- As maiores plataformas de tecnologia disponibilizam APIs para acessos de suas funcionalidades, algumas delas são: Facebook, Twitter, Telegram, Whatsapp, Github entre outras.

## Principais Métodos HTTP

- GET - Solicita a representação de um recursos.
- POST - Solicita a criação de um recurso.
- DELETE - Solicita a exclusão de um recurso.
- PUT - Solicita a atualização de um recurso.

## JSON

- JSON - JavaScript Object Notation.
- Formatação leve utilizada para troca de mensagens entre sistemas.
- Usa-se de uma estrutura de chave valor e também de listas ordenadas.
- Um dos formatos mais populares e mais utilizados para troca de mensagens entre sistemas.

# Integração com Rest e métodos HTTP na prática - Aula 5

## Objetivos da aula

1. Integração com serviços REST
2. Métodos HTTP na prática
3. Código de estado HTTP

## Código de Estado (Status Code)

- Usado pelo servido para avisar o cliente sobre o estado da operação solicitada
- 1xx - Informativo
- 2xx - Sucesso
- 3xx - Redirecionamento
- 4xx - Erro do Cliente
- 5xx - Erro do Servidor

# Conceitos de arquitetura em aplicações para internet - Aula 6

## Objetivos da aula

1. Tipos de arquitetura
2. Comparativo entre tipos de arquitetura
3. Gerenciamento de erros e volume de acesso

## Requisitos básicos

- Conhecimentos básicos sobre protocolo HTTP e proxy
- Entendimento sobre REST API
- Conhecimentos sobre Docker
- Saber programar

# Comparando os modelos Monolito e microserviços

## Monolito

Pros

- Baixa complexidade
- Monitoramento simplificado

Contras

- Stack única
- Compartilhamento de recursos
- Mais complexo a escalabilidade

## Microsserviço #1

Pros

- Stack dinâmica
- Simples escalabilidade

Contras

- Acoplamento
- Monitoramento mais complexo
- Provisionamento mais complexo

## Microsserviços #2

Pros

- Stack dinâmica
- Simples escalabilidade
- Desacoplamento

Contras

- Monitoramento mais complexo
- Provisionamento mais complexo

## Microsserviços #3

Pros

- Stack dinâmica
- Simples escalabilidade
- Desacoplamento
- Menor complexidade

Contras

- Provisionamento mais complexo
- Plataforma inteira depende do gerenciador de pipeline
