import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
  public index = async ({ response, view }: HttpContextContract) => {
    const post = {
      title: 'test',
      hidden: false,
    }

    const html = await view.render('posts/index', { title: 'test', post })
    // return response.status(200).json('Okay it is working now')
    return html
  }
}
