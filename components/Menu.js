import React, { Component } from "react";
import Link from "next/link";


const linkStyle = {
    marginRight: 15
};

class Menu extends Component {
  constructor() {
    super();
  
  }

  getSlug(url) {
      const parts = url.split("/");
      return parts.length > 2 ? parts[parts.length - 2] : "";
  }

  state = { showing: false };

  render() {
    const { showing } = this.state;
    const lang = this.props.lang;
      const menuItems = this.props.menu.items.map((item, index) => {
        if (item.object === "custom") {
            return (
                <Link   href={item.url} key={item.ID}>
                  <li>  <a  onClick={() => this.setState({ showing: !showing })} href={item.url} style={linkStyle}>{item.title}</a></li>
                </Link>
            );
        }
        const slug = this.getSlug(item.url);
        const actualPage = item.object === "category" ? "category" : "post";
        return (
            <Link
                as={`/${item.object}/${slug}`}
                href={`/${actualPage}?slug=${slug}&apiRoute=${item.object}`}
                key={item.ID}
            >
               <li><a style={linkStyle}>{item.title}</a></li>
            </Link>
        );
    });

    const menuItemsen = this.props.en.items.map((item, index) => {
        if (item.object === "custom") {
            return (
                <Link   href={item.url} key={item.ID}>
                  <li>  <a  onClick={() => this.setState({ showing: !showing })} href={item.url} style={linkStyle}>{item.title}</a></li>
                </Link>
            );
        }
        const slug = this.getSlug(item.url);
        const actualPage = item.object === "category" ? "category" : "post";
        return (
            <Link
                as={`/${item.object}/${slug}`}
                href={`/${actualPage}?slug=${slug}&apiRoute=${item.object}`}
                key={item.ID}
            >
               <li><a style={linkStyle}>{item.title}</a></li>
            </Link>
        );
    });


    return(
        <div className={this.state.showing ? 'menu-open': null} >
    
       <i className="toggle-menu" onClick={() => this.setState({ showing: !showing })}></i>
      
       { showing 
        ?
        <nav className="menu-top">

        { lang ?
            <ol> {menuItems}</ol>
        :     <ol> {menuItemsen}</ol>
        }
        <div className="grid">
        <div className="grid-line grid-line-1"></div>
        <div className="grid-line grid-line-5"></div>
    </div>
    <div className="toggle-grid"></div>
    </nav>
 
    : null
      }
      </div>
    )
  }


}

export default Menu;
