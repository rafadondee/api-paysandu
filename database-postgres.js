import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 
  async listPaysandu() {
    const paysandu = await sql`select * from paysandu`;
    return paysandu;
  }

  async createPaysandu(paysandu) {
    const id = randomUUID();
    console.log('id', id);
    const nome = paysandu.nome;
    const numero_camiseta = paysandu.numero_camiseta;
    const posicao_em_campo = paysandu.posicao_em_campo;
    
    await sql`insert into paysandu (id, nome, numero_camiseta, posicao_em_campo)
    values (${id}, ${nome}, ${numero_camiseta}, ${posicao_em_campo})`
  }

  async updatePaysandu(id, paysandu) {
    const nome = paysandu.nome;
    const numero_camiseta = paysandu.password;
    const posicao_em_campo = paysandu.posicao_em_campo;

    await sql`update paysandu set 
        nome = ${nome},
        numero_camiseta = ${numero_camiseta},
        posicao_em_campo = ${posicao_em_campo}
        where id = ${id}
    `;
  }

  async deletePaysandu(id) {
    await sql`delete from paysandu where id = ${id}`
  }

}