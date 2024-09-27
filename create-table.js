import { sql } from './db.js'

sql`
  CREATE TABLE paysandu (
      id text PRIMARY KEY,
      nome character varying(255),
      numero_camiseta character varying(255),
      posicao_em_campo character varying(255)
  );
`.then(() => {
  console.log('tabela criada');
})