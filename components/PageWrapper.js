import React from "react";
import { Api } from "config/config.js";
import { apiCall } from "config/apicall.js";

const PageWrapper = Comp => (
  class extends React.Component {

    static async getInitialProps(args) {

      const resMenu = await apiCall(Api.menu);
      const Menu = await resMenu.json();
 
      const resenMenu = await apiCall(Api.enmenu);
      const enMenu = await resenMenu.json();

      const resBlog = await apiCall(Api.blog);
      const Blog = await resBlog.json();

      
      const resBlogEN = await apiCall(Api.blogEN);
      const BlogEN = await resBlogEN.json();

      const resSliders = await apiCall(Api.sliders);
      const Sliders = await resSliders.json();

      const resClients = await apiCall(Api.clients);
      const Clients = await resClients.json();

      const resQuemSomos = await apiCall(Api.quemsomos);
      const QuemSomos = await resQuemSomos.json();

      const resQuemSomosGallery = await apiCall(Api.quemsomosgallery);
      const QuemSomosGallery = await resQuemSomosGallery.json();

      const resEcossistema = await apiCall(Api.ecossistema);
      const Ecossistema = await resEcossistema.json();

      const resEcossistemaIn = await apiCall(Api.ecossistemain);
      const EcossistemaIn = await resEcossistemaIn.json();

      const resVagas = await apiCall(Api.vagas);
      const Vagas = await resVagas.json();

      const resEscritorio = await apiCall(Api.escritorio);
      const  Escritorio = await resEscritorio.json();


      const resSocial = await apiCall(Api.social);
      const Social = await resSocial.json();

      const resCases = await apiCall(Api.cases);
      const Cases = await resCases.json();

      const resSuccess = await apiCall(Api.sucessstories); 
      const Success = await resSuccess.json();

      const resCasesDest = await apiCall(Api.casesDest);
      const CasesDest = await resCasesDest.json();

      const resbeKana = await apiCall(Api.bekanamober);
      const BeKanamober = await resbeKana.json();
      
      return {
        Menu,
        enMenu,
        Blog,
        Sliders,
        Clients,
        Cases,
        Success,
        CasesDest,
        QuemSomosGallery,
        QuemSomos,
        Ecossistema,
        EcossistemaIn,
        Vagas,
        Escritorio,
        Social,
        BeKanamober,
        BlogEN,
        ...(Comp.getInitialProps ? await Comp.getInitialProps(args) : null),
      };
    }

    render() {
      return (
        <Comp {...this.props} />
      )
    }
  }
)

export default PageWrapper;
