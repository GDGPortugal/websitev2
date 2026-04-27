# Contribuir para o GDG Portugal

Obrigado por quereres contribuir! 🎉 Este guia explica como adicionar novos eventos ou novas comunidades GDG ao site.

---

## Adicionar um novo Evento (DevFest)

1. Cria um ficheiro em `src/content/events/` com o nome `devfest-cidade-ano.mdx`
2. Cola o seguinte template e preenche com os dados do evento:

```mdx
---
name: DevFest Cidade Ano
city: Cidade
date: DD de Mês de AAAA
venue: Nome do Local
description: Descrição curta do evento.
time: 'HH:MM – HH:MM'
location: Morada completa, Código Postal Cidade, PT
ticketType: Presencial
registrationUrl: https://link-de-inscricao.com
published: true
---

## Sobre o evento

Descrição detalhada do evento...

## O que vais encontrar

- Talks técnicas
- Workshops práticos
- Networking
```

### Campos obrigatórios

| Campo             | Tipo    | Exemplo                             |
| ----------------- | ------- | ----------------------------------- |
| `name`            | texto   | `DevFest Lisboa 2025`               |
| `city`            | texto   | `Lisboa`                            |
| `date`            | texto   | `15 de Setembro de 2025`            |
| `venue`           | texto   | `Centro de Congressos de Lisboa`    |
| `description`     | texto   | Descrição curta do evento           |
| `time`            | texto   | `"09:00 – 19:00"`                   |
| `location`        | texto   | Morada completa                     |
| `ticketType`      | enum    | `Presencial`, `Online` ou `Híbrido` |
| `registrationUrl` | URL     | `https://...`                       |
| `published`       | boolean | `true` ou `false`                   |

---

## Adicionar uma nova Comunidade GDG

1. Cria um ficheiro em `src/content/gdgs/` com o nome `gdg-cidade.mdx`
2. Cola o seguinte template e preenche com os dados da comunidade:

```mdx
---
name: GDG Cidade
city: Cidade
description: Descrição curta da comunidade.
memberCount: 500
foundedYear: 2020
meetupUrl: https://gdg.community.dev/gdg-cidade
googleDevUrl: https://developers.google.com/community/gdg/groups/cidade
published: true
---

## Sobre a comunidade

Descrição detalhada da comunidade...
```

### Campos obrigatórios

| Campo          | Tipo    | Exemplo                                                     |
| -------------- | ------- | ----------------------------------------------------------- |
| `name`         | texto   | `GDG Lisboa`                                                |
| `city`         | texto   | `Lisboa`                                                    |
| `description`  | texto   | Descrição curta                                             |
| `memberCount`  | número  | `2100`                                                      |
| `foundedYear`  | número  | `2018`                                                      |
| `meetupUrl`    | URL     | `https://gdg.community.dev/gdg-lisboa`                      |
| `googleDevUrl` | URL     | `https://developers.google.com/community/gdg/groups/lisboa` |
| `published`    | boolean | `true` ou `false`                                           |

---

## Como fazer Pull Request

1. Faz **fork** deste repositório
2. Cria uma **branch** com um nome descritivo:
   ```bash
   git checkout -b add/devfest-coimbra-2025
   ```
3. Adiciona o teu ficheiro `.mdx` na pasta correta
4. Faz **commit** das alterações:
   ```bash
   git add .
   git commit -m "feat: adiciona DevFest Coimbra 2025"
   ```
5. Faz **push** para o teu fork:
   ```bash
   git push origin add/devfest-coimbra-2025
   ```
6. Abre um **Pull Request** no GitHub — é só isso! 🚀

---

## Notas importantes

- O campo `published` controla se o conteúdo aparece no site. Usa `false` para rascunhos.
- O `ticketType` de eventos só aceita: `Presencial`, `Online` ou `Híbrido`.
- Todos os URLs devem ser válidos (começar com `https://`).
- A data dos eventos deve seguir o formato: `DD de Mês de AAAA` (ex: `15 de Setembro de 2025`).
