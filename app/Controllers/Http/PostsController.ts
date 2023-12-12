import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
  public index = async ({ response, view }: HttpContextContract) => {
    const html = await view.render('posts/index', { title: 'test' })
    // return response.status(200).json('Okay it is working now')
    return html
  }
}
