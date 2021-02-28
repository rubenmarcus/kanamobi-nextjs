export const Config = {apiUrl: 'http://54.157.106.129/wp-json', apiUrl2:'https://rubenmarcus.com/clients/kana/wp-json'}

export const Api = {
    menu: `${Config.apiUrl}/menus/v1/menus/kana-menu`,
    enmenu: `${Config.apiUrl}/menus/v1/menus/header-menu`,
    sliders: `${Config.apiUrl}/wp/v2/slider?&_embed`,
    social: `${Config.apiUrl}/wp/v2/social`,
    blog: `${Config.apiUrl}/wp/v2/posts?categories=3&per_page=4&_embed`,
    blogEN: `${Config.apiUrl}/wp/v2/posts?categories=12&per_page=4&_embed`,
    clients: `${Config.apiUrl}/gallery/post/60`,
    quemsomos: `${Config.apiUrl}/wp/v2/pages?slug=quem-somos`,
    quemsomosgallery: `${Config.apiUrl}/gallery/post/72`,
    timeline: `${Config.apiUrl}/wp/v2/timeline`,
    ecossistema: `${Config.apiUrl}/wp/v2/pages?slug=ecossistema-digital`,
    ecossistemain: `${Config.apiUrl}/wp/v2/ecossistema`,
    cases: `${Config.apiUrl}/wp/v2/cases?&_embed`,
    casesDest: `${Config.apiUrl}/wp/v2/cases?categories=6`,
    sucessstories: `${Config.apiUrl}/wp/v2/pages?slug=success-stories`,
    contact: `${Config.apiUrl}/wp/v2/contact`,
    bekanamober: `${Config.apiUrl}/wp/v2/pages?slug=como-e-ser-um-kanamober`,
    vagas: `${Config.apiUrl}/wp/v2/vagas`,
    escritorio: `${Config.apiUrl}/wp/v2/escritorios`,
  }
