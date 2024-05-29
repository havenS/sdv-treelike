import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import Profiler from './profiler.js'

import type { HasOne, HasMany } from '@adonisjs/lucid/types/relations'
import Provider from './provider.js'
import ViewStatsLink from './view_stats_link.js'

export default class Link extends BaseModel {
  @hasOne(() => Profiler)
  declare profiler: HasOne<typeof Profiler>

  @hasOne(() => Provider)
  declare provider: HasOne<typeof Provider>

  @hasMany(() => ViewStatsLink)
  declare view_stats_links: HasMany<typeof ViewStatsLink>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare url: string

  @column()
  declare logo: string

  @column()
  declare description: string

  @column()
  declare category: string

  @column()
  declare order: number
}
