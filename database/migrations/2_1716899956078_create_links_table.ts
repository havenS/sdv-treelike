import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Links extends BaseSchema {
  protected tableName = 'links'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('title').notNullable()
      table.string('url').notNullable()
      table.string('logo')
      table.string('description')
      table.string('category')
      table.integer('order')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
