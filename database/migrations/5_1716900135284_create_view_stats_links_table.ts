import { BaseSchema } from '@adonisjs/lucid/schema'

export default class ViewStatsLinks extends BaseSchema {
  protected tableName = 'view_stats_links'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('link_id').unsigned().references('id').inTable('links').onDelete('CASCADE')
      table.timestamps(true, true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
