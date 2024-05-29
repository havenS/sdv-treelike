/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AutoSwagger from 'adonis-autoswagger'
import swagger from '#config/swagger'
import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

router
  .group(() => {
    router.post('register', 'auth_controller.register')
    router.post('login', 'auth_controller.login')
  })
  .prefix('auth')

router
  .group(() => {
    // @AutoSwagger - User
    router.put('/', 'users_controller.update')

    /**
     * @index
     * @operationId getProducts
     * @description Returns array of producs and it's relations
     * @responseBody <200> - <User>
     */
    router.get('/', 'users_controller.me')
  })
  .prefix('user')
  .use(middleware.auth())

// SWAGGER
// returns swagger in YAML
router.get('/swagger', async () => {
  return AutoSwagger.default.docs(router.toJSON(), swagger)
})

// Renders Swagger-UI and passes YAML-output of /swagger
router.get('/docs', async () => {
  return AutoSwagger.default.ui('/swagger', swagger)
  // return AutoSwagger.default.scalar("/swagger", swagger); to use Scalar instead
  // return AutoSwagger.default.rapidoc("/swagger", swagger); to use RapiDoc instead
})
