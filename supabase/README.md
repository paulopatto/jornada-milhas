# Supabase

Este diretório contém a configuração e os recursos do **Supabase** para o projeto **Jornada Milhas**.

## O que é o Supabase?

O [Supabase](https://supabase.com/) é uma alternativa de código aberto ao Firebase. Ele fornece todas as ferramentas de backend necessárias para criar um produto:
- **Banco de Dados PostgreSQL**: Um banco de dados relacional completo.
- **Autenticação**: Gerenciamento de usuários e logins.
- **Edge Functions**: Funções serverless escritas em TypeScript.
- **Storage**: Armazenamento de arquivos grandes.
- **Realtime**: Escuta de mudanças no banco de dados em tempo real.

## Instalação da CLI do Supabase

Para gerenciar o banco de dados, criar migrações e testar funções localmente, você deve instalar a CLI do Supabase via npm:

```bash
# Instalação global via npm
npm install supabase --save-dev
```

*Nota: Você também pode usar `npx supabase` para rodar comandos sem instalação global.*

Para inicializar o projeto (se ainda não estiver inicializado):

```bash
npx supabase init
```

Para iniciar os serviços localmente (requer Docker):

```bash
npx supabase start
```

## Links Úteis e Documentação

Aqui estão os links diretos para as partes mais importantes da documentação:

- [🚀 Documentação Geral](https://supabase.com/docs)
- [🔄 Migrações de Banco de Dados](https://supabase.com/docs/guides/database/migrations)
- [⚡ Edge Functions](https://supabase.com/docs/guides/functions)
- [CLI Reference](https://supabase.com/docs/reference/cli/introduction)

---

Desenvolvido para o projeto **Jornada Milhas**.
