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
