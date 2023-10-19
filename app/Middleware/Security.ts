import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'
import axios from 'axios'
export default class Security {
  // public async handle({ request,response }: HttpContextContract, next: () => Promise<void>) {
  //   let theRequest = request.toJSON()
  //   console.log(theRequest);
  //   let token = theRequest.headers.authorization.replace("Bearer ", "")
  //   //console.log(token)
  //   try {
  //     const result = await axios.get(`${Env.get('MS-SECURITY')}/api/public/security/token-validation`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         url:theRequest.url,
  //         method:theRequest.method
  //       }
  //     })
  //     console.log("La respuesta de ms-security >"+result.data+"<")
  //     if (result.data == "") {
  //       console.log("no puede ingresar")
  //       return response.status(401)
  //     } else {
  //       console.log(result.data)
  //       await next()
  //     }
  //   } catch (error) {
  //     console.error(error)
  //     return response.status(401)
  //   }
  // }
  public async handle({ request, response }: HttpContextContract, next: () => Promise<void>) {
    let theRequest = request.toJSON()
    console.log(theRequest);
    let token = theRequest.headers.authorization.replace("Bearer ", "")
    let data: object = {
      url: theRequest.url,
      method: theRequest.method
    }
    try {
      const result = await axios.post(`${Env.get('MS-SECURITY')}/api/public/security/permissions-validation`, data,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      console.log("La respuesta de ms-security >" + result.data + "<")
      if (result.data == "") {
        console.log("no puede ingresar")
        return response.status(401)
      } else {
        console.log(result.data)
        await next()
      }
    } catch (error) {
      console.error(error)
      return response.status(401)
    }
  }
}


