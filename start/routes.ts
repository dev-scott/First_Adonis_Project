/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.post('/about', () => {
  return 'about post'
})

Route.post('/test', () => {
  return 'test post'
})

// Route.get('/posts/:id', ({ params, request }) => {
//   const { id } = params
//   console.log(request.all().name)
//   return `${id}`
// }).where('id', Route.matchers.number())

Route.group(() => {
  Route.get('/about', () => {
    return 'about page'
  })
}).prefix('/api')

Route.get('/posts', 'PostsController.index')
