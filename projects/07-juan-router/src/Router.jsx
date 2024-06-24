import { Children, useEffect, useState } from "react"
import { EVENTS } from "./const"
import {match} from 'path-to-regexp'

export function Router({children, routes= [], defaultComponent: DefaultComponent = () => <h1>404</h1>}) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
  
    useEffect(()=>{
  
      const onLocationChange = () => {
        setCurrentPath(window.location.pathname)
      }
  
      window.addEventListener(EVENTS.PUSHSTATE,onLocationChange)
      window.addEventListener(EVENTS.POPSTATE,onLocationChange)
  
      return () =>{
        window.removeEventListener(EVENTS.PUSHSTATE,onLocationChange)
        window.removeEventListener(EVENTS.POPSTATE,onLocationChange)
      }
  
    },[])

    let routeParams = {}

    //add routes from children <Route/> components

    const routesFromChildren = Children.map(children, ({props,type}) => {{

      const {name} = type
      const isRoute = name === 'Route'

      return isRoute ? props : null

    }})

    const routesToUse = routes.concat(routesFromChildren)
  
    const Page = routesToUse.find(({path})=> {
      if(path===currentPath) return true

      //path-to-regexp para poder detectar rutas dinámicas ejmp: /search/:query
      const matcherhUrl = match(path, {decode: decodeURIComponent})
      const matched = matcherhUrl(currentPath)
      if(!matched) return false

      //guardar parámetros de la url extraidos con path-to-regex
      //ruta ->> /search/:query, url->> /search/javascript
      //matched.params.query === 'javascript'
      routeParams = matched.params
      return true;

    })?.Component
  
    return Page ? <Page routeParams={routeParams}/> : <DefaultComponent routeParams={routeParams}/>
  }