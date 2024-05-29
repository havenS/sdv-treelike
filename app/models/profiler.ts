import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import ViewStatsProfiler from './view_stats_profiler.js'

export default class Profiler extends BaseModel {
  @hasOne(() => User)
  declare profile: HasOne<typeof User>

  @hasMany(() => ViewStatsProfiler)
  declare view_stats_profilRs: HasMany<typeof ViewStatsProfiler>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare url: string

  @column()
  declare bio: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
