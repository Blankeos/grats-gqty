### GQTY + Grats

Built this working example for

A working example of Grats + GQTY.

I built the GraphQL API using **Grats** - autogenerates the schema.graphql from
just typedocs.

On the frontend, I consume the schema.graphql or endpoint with **GQTY** a CLI
and GraphQL Client .

#### Get Started

##### 1. Install deps for client and server

```sh
> grats-gqty > cd client
> grats-gqty/client > pnpm i
```

```sh
> grats-gqty > cd server
> grats-gqty/server > pnpm i
```

#### 2. Autogenerate Types on Client

```
> grats-gqty/client > pnpm gqty
```

### 3. Run both servers

```
> grats-gqty>server > pnpm dev

> grats-gqty>client> pnpm dev
```
