import React, { Component } from 'react';
import { Link } from 'gatsby';
import logo from "../../assets/images/logo.png"
import Menu from "../Menu"
  import {
    FaMoon,
  FaSun,

  

  } from "react-icons/fa"
import FloatingContact from '../FloatingContact';

const DrawerNav = () => {




    return (
      <>


    <li
        as={ChakraLink}
   
        onClick={darkMode.toggle}
                  aria-label="Change color theme of the site"
                  fontSize={18}
            
                >        
                             {darkMode.value ? <FaSun fontSize={32} color='#ef8e38 ' />:<FaMoon  fontSize={32}/> }
                           
                  
                  
                </li>
      
           
        
      
        
      </>
    )
  }
class NavbarTwo extends Component {

    // Navbar 
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <>
      <FloatingContact/>
            <React.Fragment>
  
     
                 <div id="navbar" className="navbar-area navbar-style-two">
                    <div className="main-nav">
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light">

                                <Link to="/"  as="a" className="navbar-brand">
                                    <img src={logo} alt="CadVision" width={80} height={80} />
                                </Link>


                                <button
                                    onClick={this.toggleNavbar}
                                    className={classTwo}
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="icon-bar top-bar"></span>
                                    <span className="icon-bar middle-bar"></span>
                                    <span className="icon-bar bottom-bar"></span>
                                </button>

                   
                   
                                <div className={classOne} id="navbarSupportedContent">
        
                  
          
                                    <ul className="navbar-nav mx-auto">
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">
                                                    Home 
                                               
                                            </Link>

                                          
                                          
                                        </li>
                                     
                                        <li className="nav-item">
                                            <Link to=""className="nav-link"  as="a" >
                                                    Company <i className='bx bx-chevron-down'></i>
                                                
                                            </Link>

                                            <ul className="dropdown-menu">
                                               

                                                <li className="nav-item">
                                                    <Link to="/overview"  className="nav-link"  as="a" >Overview
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                <Link to="/mission-values" className="nav-link"  as="a" >
                                                    Mission & Values 
                                                     
                                                    </Link>
                                                    </li>   
                                                    <li className="nav-item">
                                                <Link to="/Leadership" className="nav-link" as="a" >
                                                Leadership
 
                                                     
                                                    </Link>
                                                    </li>
                                                   

                                             
  
                                             

                                                
                                            </ul>
                                        </li>
 
                       
                                       
                                        


                                        <li className="nav-item">
                                            <Link to=""className="nav-link"  as="a" >
                                            Products <i className='bx bx-chevron-down'></i>
                                                
                                            </Link>

                                            <ul className="dropdown-menu">
                                               


                                                <li className="nav-item">
                                                    <Link to="/cead"className="nav-link"  as="a" >
                                                            CEAD <i className='bx bx-chevron-right float-right'></i>
                                                        
                                                    </Link>

                                                    <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                            <Link to="/cead" className="nav-link" as="a" >Introduction
                                                            </Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link to="/cead/cdeds-methodology" className="nav-link"  as="a" >CDEDS Methodology
                                                            </Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link to="/cead/customer-success-story"  className="nav-link"  as="a" >Success Stories

                                                            </Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link to="/cead/resources"  className="nav-link"  as="a" >Resources

                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                
                                                
                                                
  
                                             

                                                
                                            </ul>
                                        </li>
 
                                        <li className="nav-item">
                                            <Link to="" className="nav-link"  as="a" >
                                            Services <i className='bx bx-chevron-down'></i>
                                               
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link to="/services/cad-customization-services" className="nav-link" as="a" >CAD Customization Services
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link to="/services/custom-engineering-solutions"  className="nav-link" as="a" >Custom Engineering Solutions
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link to="/services/knowledge-based-engineering"  className="nav-link" as="a" >Knowledge Based Engineering
                                                    </Link>
                                                </li>
                                                
                                                <li className="nav-item">
                                                    <Link to="/services/outsourced-product-development"  className="nav-link"  as="a" >Outsourced Product Development
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="" className="nav-link"  as="a" >
                                            Resources <i className='bx bx-chevron-down'></i>
                                               
                                            </Link>

                                            <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                    <Link to="/blog" className="nav-link" as="a" >Blog
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/videos" className="nav-link" as="a" >Videos
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link to="/case-studies" className="nav-link" as="a" >Case Studies
                                                    </Link>
                                                </li>

                                            
                                                
                                                
                                            </ul>
                                        </li>
 
                                        <li className="nav-item">
                                            <Link to="/careers" className="nav-link" as="a" >Careers
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/contact" className="nav-link" as="a" >Contact 
                                            </Link>
                                        </li>
                                    </ul>

                 <div className="others-options">
                 <a href="https://www.linkedin.com/company/cadvision-engineers-private-limited"  target="_blank" className="default-btn1">
                                        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjEwMCUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIGlkPSJnNTg5MSI+PHBhdGggZD0iTTUxMiw2NGMwLC0zNS4zMjMgLTI4LjY3NywtNjQgLTY0LC02NGwtMzg0LDBjLTM1LjMyMywwIC02NCwyOC42NzcgLTY0LDY0bDAsMzg0YzAsMzUuMzIzIDI4LjY3Nyw2NCA2NCw2NGwzODQsMGMzNS4zMjMsMCA2NCwtMjguNjc3IDY0LC02NGwwLC0zODRaIiBpZD0iYmFja2dyb3VuZCIgc3R5bGU9ImZpbGw6IzI4NjdiMjsiLz48ZyBpZD0ic2hhcGVzIj48cmVjdCBoZWlnaHQ9IjI1Ny45NjIiIGlkPSJyZWN0MTEiIHN0eWxlPSJmaWxsOiNmZmY7IiB3aWR0aD0iODUuNzYiIHg9IjYxLjA1MyIgeT0iMTc4LjY2NyIvPjxwYXRoIGQ9Ik0xMDQuNTEyLDU0LjI4Yy0yOS4zNDEsMCAtNDguNTEyLDE5LjI5IC00OC41MTIsNDQuNTczYzAsMjQuNzUyIDE4LjU4OCw0NC41NzQgNDcuMzc3LDQ0LjU3NGwwLjU1NCwwYzI5LjkwMywwIDQ4LjUxNiwtMTkuODIyIDQ4LjUxNiwtNDQuNTc0Yy0wLjU1NSwtMjUuMjgzIC0xOC42MTEsLTQ0LjU3MyAtNDcuOTM1LC00NC41NzNaIiBpZD0icGF0aDEzLTAiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PHBhdGggZD0iTTM1Ny4yNzgsMTcyLjYwMWMtNDUuNDksMCAtNjUuODY2LDI1LjAxNyAtNzcuMjc2LDQyLjU4OWwwLC0zNi41MjNsLTg1LjczOCwwYzEuMTM3LDI0LjE5NyAwLDI1Ny45NjEgMCwyNTcuOTYxbDg1LjczNywwbDAsLTE0NC4wNjRjMCwtNy43MTEgMC41NTQsLTE1LjQyIDIuODI3LC0yMC45MzFjNi4xODgsLTE1LjQgMjAuMzA1LC0zMS4zNTIgNDMuOTkzLC0zMS4zNTJjMzEuMDEyLDAgNDMuNDM2LDIzLjY2NCA0My40MzYsNTguMzI3bDAsMTM4LjAybDg1Ljc0MSwwbDAsLTE0Ny45M2MwLC03OS4yMzcgLTQyLjMwNSwtMTE2LjA5NyAtOTguNzIsLTExNi4wOTdaIiBpZD0icGF0aDE1IiBzdHlsZT0iZmlsbDojZmZmO2ZpbGwtcnVsZTpub256ZXJvOyIvPjwvZz48L2c+PC9zdmc+" alt="logo" width={30} />

                                        </a>

                                        <a href="https://www.facebook.com/CADVisionEngineers"  target="_blank" className="default-btn1">

                                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI1MTIiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcyBpZD0iZGVmczEyIi8+PGcgaWQ9Imc1OTkxIj48cmVjdCBoZWlnaHQ9IjUxMiIgaWQ9InJlY3QyOTg3IiByeD0iNjQiIHJ5PSI2NCIgc3R5bGU9ImZpbGw6IzNiNTk5ODtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIgd2lkdGg9IjUxMiIgeD0iMCIgeT0iMCIvPjxwYXRoIGQ9Ik0gMjg2Ljk2NzgzLDQ1NS45OTk3MiBWIDI3My41Mzc1MyBoIDYxLjI0NCBsIDkuMTY5OSwtNzEuMTAyNjYgaCAtNzAuNDEyNDYgdiAtNDUuMzk0OTMgYyAwLC0yMC41ODgyOCA1LjcyMDY2LC0zNC42MTk0MiAzNS4yMzQ5NiwtMzQuNjE5NDIgbCAzNy42NTU0LC0wLjAxMTIgViA1OC44MDc5MTUgYyAtNi41MDk3LC0wLjg3MzgxIC0yOC44NTcxLC0yLjgwNzk0IC01NC44Njc1LC0yLjgwNzk0IC01NC4yODgwMywwIC05MS40NDk5NSwzMy4xNDU4NSAtOTEuNDQ5OTUsOTMuOTk4MTI1IHYgNTIuNDM3MDggaCAtNjEuNDAxODEgdiA3MS4xMDI2NiBoIDYxLjQwMDM5IHYgMTgyLjQ2MjE5IGggNzMuNDI3MDcgeiIgaWQ9ImZfMV8iIHN0eWxlPSJmaWxsOiNmZmZmZmYiLz48L2c+PC9zdmc+" width={30}/>

                                        </a>
                                        <a href="https://www.youtube.com/channel/UCg2Vg6nrYsxotwGu6bLd2Bw"  target="_blank" className="default-btn1">

<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNjdweCIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY3IDY3OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjcgNjciIHdpZHRoPSI2N3B4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNNDIuNTI3LDQxLjM0Yy0wLjI3OCwwLTAuNDc4LDAuMDc4LTAuNiwwLjI0NCAgYy0wLjEyMSwwLjE1NS0wLjE4LDAuNDI0LTAuMTgsMC43OTZ2MC44OTZoMS41NDNWNDIuMzhjMC0wLjM3MS0wLjA2Mi0wLjY0LTAuMTg1LTAuNzk2QzQyLjk4OSw0MS40MTgsNDIuNzkyLDQxLjM0LDQyLjUyNyw0MS4zNHogICBNMzYuNTA5LDQxLjMwOGMwLjIzNCwwLDAuNDE3LDAuMDc4LDAuNTQ0LDAuMjMxYzAuMTIzLDAuMTU0LDAuMTg1LDAuMzgzLDAuMTg1LDAuNjgzdjQuNTgzYzAsMC4yODYtMC4wNTMsMC40ODctMC4xNTMsMC42MTEgIGMtMC4xLDAuMTI3LTAuMjU2LDAuMTktMC40NywwLjE5Yy0wLjE0OCwwLTAuMjg3LTAuMDM0LTAuNDIxLTAuMDk3Yy0wLjEzNS0wLjA2Mi0wLjI3NC0wLjE3LTAuNDE1LTAuMzEzdi01LjUzMSAgYzAuMTE5LTAuMTIyLDAuMjM5LTAuMjEzLDAuMzYtMC4yNzFDMzYuMjYsNDEuMzM1LDM2LjM4Myw0MS4zMDgsMzYuNTA5LDQxLjMwOHogTTQxLjc0OCw0NC42NTd2MS42NzMgIGMwLDAuNDY4LDAuMDU3LDAuNzkxLDAuMTcsMC45NzRjMC4xMTgsMC4xOCwwLjMxMywwLjI2OSwwLjU5MiwwLjI2OWMwLjI4OSwwLDAuNDkxLTAuMDc2LDAuNjA2LTAuMjI5ICBjMC4xMTQtMC4xNTMsMC4xNzUtMC40OSwwLjE3NS0xLjAxM3YtMC40MDRoMS43OTV2MC40NTVjMCwwLjkxMS0wLjIxNywxLjU5Ny0wLjY1NywyLjA2Yy0wLjQzNSwwLjQ1OC0xLjA4OSwwLjY4Ni0xLjk1OCwwLjY4NiAgYy0wLjc4MSwwLTEuMzk4LTAuMjQyLTEuODQ3LTAuNzMxYy0wLjQ0OC0wLjQ4Ni0wLjY3Ni0xLjE1Ny0wLjY3Ni0yLjAxNHYtMy45ODZjMC0wLjc2OCwwLjI0OS0xLjM5OCwwLjc0Mi0xLjg4MiAgYzAuNDkzLTAuNDg0LDEuMTI4LTAuNzI3LDEuOTExLTAuNzI3YzAuNzk5LDAsMS40MTMsMC4yMjUsMS44NDMsMC42NzRjMC40MjksMC40NDgsMC42NDIsMS4wOTMsMC42NDIsMS45MzV2Mi4yNjNINDEuNzQ4eiAgIE0zOC42MjMsNDguNDk1Yy0wLjI3MSwwLjMzNi0wLjY2OSwwLjUwMS0xLjE4NywwLjUwMWMtMC4zNDMsMC0wLjY0Ni0wLjA2Mi0wLjkxMi0wLjE5MWMtMC4yNjctMC4xMy0wLjUxOS0wLjMyOS0wLjc0Ni0wLjYwMnYwLjY4MSAgaC0xLjc2NFYzNi44NTJoMS43NjR2My44NzRjMC4yMzctMC4yNjksMC40ODUtMC40NzcsMC43NDgtMC42MTZjMC4yNjctMC4xNDEsMC41MzQtMC4yMTEsMC44MDUtMC4yMTEgIGMwLjU1NCwwLDAuOTc1LDAuMTg5LDEuMjY1LDAuNTY1YzAuMjk0LDAuMzc5LDAuNDM4LDAuOTM0LDAuNDM4LDEuNjZ2NC45MjZDMzkuMDM0LDQ3LjY3OCwzOC44OTcsNDguMTU5LDM4LjYyMyw0OC40OTV6ICAgTTMwLjk1OCw0OC44ODR2LTAuOTc2Yy0wLjMyNSwwLjM2MS0wLjY1OCwwLjYzNi0xLjAwOSwwLjgyMmMtMC4zNDksMC4xOTEtMC42ODYsMC4yODMtMS4wMTQsMC4yODMgIGMtMC40MDUsMC0wLjcwNS0wLjEzLTAuOTEzLTAuMzk2Yy0wLjIwMS0wLjI2Ni0wLjMwNS0wLjY1OC0wLjMwNS0xLjE4OXYtNy40MjJoMS43NDR2Ni44MWMwLDAuMjExLDAuMDM3LDAuMzYyLDAuMTA3LDAuNDU1ICBjMC4wNzcsMC4wOTYsMC4xOTYsMC4xNDIsMC4zNTgsMC4xNDJjMC4xMjgsMCwwLjI5Mi0wLjA2MiwwLjQ4OC0wLjE4OGMwLjE5Ny0wLjEyNSwwLjM3NS0wLjI4MiwwLjU0Mi0wLjQ3NXYtNi43NDRoMS43NDR2OC44NzggIEgzMC45NTh6IE0yNC45MTYsMzguNnYxMC4yODRoLTEuOTY4VjM4LjZoLTIuMDM0di0xLjc0OGg2LjAzNlYzOC42SDI0LjkxNnogTTMyLjk5NCwzMi45NzljMC0wLjAwMiwxMi4wOCwwLjAxOCwxMy41MTQsMS40NSAgYzEuNDM5LDEuNDM0LDEuNDU1LDguNTEzLDEuNDU1LDguNTU0YzAsMC0wLjAxMiw3LjExNy0xLjQ1NSw4LjU1NkM0NS4wNzQsNTIuOTY5LDMyLjk5NCw1MywzMi45OTQsNTNzLTEyLjA3OS0wLjAzMS0xMy41MTYtMS40NjIgIGMtMS40MzgtMS40MzQtMS40NDEtOC41MDItMS40NDEtOC41NTZjMC0wLjA0LDAuMDA0LTcuMTIsMS40NDEtOC41NTRDMjAuOTE2LDMyLjk5NiwzMi45OTQsMzIuOTc3LDMyLjk5NCwzMi45Nzl6IE00Mi41MiwyOS4yNTUgIGgtMS45NjZ2LTEuMDhjLTAuMzU4LDAuMzk3LTAuNzM2LDAuNzAzLTEuMTMsMC45MDljLTAuMzkyLDAuMjA4LTAuNzcxLDAuMzEyLTEuMTQsMC4zMTJjLTAuNDU4LDAtMC43OTctMC4xNDYtMS4wMjctMC40MzggIGMtMC4yMjktMC4yOTEtMC4zNDUtMC43MjctMC4zNDUtMS4zMTF2LTguMTczaDEuOTYydjcuNDk3YzAsMC4yMzEsMC4wNDUsMC4zOTksMC4xMjcsMC41MDJjMC4wOCwwLjEwNCwwLjIxNiwwLjE1NiwwLjM5OSwwLjE1NiAgYzAuMTQzLDAsMC4zMjctMC4wNjgsMC41NDgtMC4yMDZjMC4yMi0wLjEzNywwLjQyMy0wLjMxMiwwLjYwNS0wLjUyNnYtNy40MjNoMS45NjZWMjkuMjU1eiBNMzEuODQ3LDI3LjU4OCAgYzAuMTM5LDAuMTQ3LDAuMzM5LDAuMjE5LDAuNiwwLjIxOWMwLjI2NiwwLDAuNDc2LTAuMDc0LDAuNjM0LTAuMjIzYzAuMTU3LTAuMTUyLDAuMjM1LTAuMzU4LDAuMjM1LTAuNjE4di01LjMyNyAgYzAtMC4yMTQtMC4wOC0wLjM4Ny0wLjI0MS0wLjUxOWMtMC4xNi0wLjEzMS0wLjM3LTAuMTk2LTAuNjI4LTAuMTk2Yy0wLjI0MSwwLTAuNDM1LDAuMDY1LTAuNTg2LDAuMTk2ICBjLTAuMTQ4LDAuMTMyLTAuMjI1LDAuMzA1LTAuMjI1LDAuNTE5djUuMzI3QzMxLjYzNiwyNy4yMzMsMzEuNzA4LDI3LjQzOSwzMS44NDcsMjcuNTg4eiBNMzAuNDA4LDE5LjkwMyAgYzAuNTI4LTAuNDQ5LDEuMjQxLTAuNjc1LDIuMTMyLTAuNjc1YzAuODEyLDAsMS40OCwwLjIzNywyLjAwMSwwLjcxMmMwLjUxNywwLjQ3MywwLjc3NywxLjA4MywwLjc3NywxLjgyN3Y1LjA1MiAgYzAsMC44MzYtMC4yNTUsMS40OS0wLjc2MiwxLjk2OGMtMC41MTMsMC40NzYtMS4yMTIsMC43MTQtMi4xMDYsMC43MTRjLTAuODU4LDAtMS41NDctMC4yNDYtMi4wNjQtMC43MzYgIGMtMC41MTMtMC40OTEtMC43NzItMS4xNTItMC43NzItMS45ODN2LTUuMDY4QzI5LjYxMywyMC45NTQsMjkuODc3LDIwLjM1MSwzMC40MDgsMTkuOTAzeiBNMjQuMjYyLDE2aC0yLjIyOWwyLjYzNCw4LjAwM3Y1LjI1MiAgaDIuMjEzdi01LjVMMjkuNDU0LDE2aC0yLjI1bC0xLjM2Niw1LjI5OGgtMC4xMzlMMjQuMjYyLDE2eiBNMyw0aDYwdjYwSDNWNHoiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNDRjM0Mjc7Ii8+PC9zdmc+" width={30} />

</a>
                
                      
                                            
                         </div>
                        
                        
                        
                    
                         </div>
                        
                            </nav>
                        </div>
                    </div>
                </div>
        
            </React.Fragment>
            </>
        );
    }
}

export default NavbarTwo;
