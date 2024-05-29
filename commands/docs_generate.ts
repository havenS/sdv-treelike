import { BaseCommand } from '@adonisjs/core/ace'
import { CommandOptions } from '@adonisjs/core/types/ace'
import swagger from '#config/swagger'
import { AutoSwagger } from 'adonis-autoswagger/dist/autoswagger.js'
export default class DocsGenerate extends BaseCommand {
  static commandName = 'docs:generate'

  static options: CommandOptions = {
    startApp: true,
    allowUnknownFlags: false,
    staysAlive: false,
  }

  async run() {
    const Router = await this.app.container.make('router')
    const aSwagger = new AutoSwagger()
    Router.commit()
    await aSwagger.writeFile(Router.toJSON(), swagger)
  }
}
