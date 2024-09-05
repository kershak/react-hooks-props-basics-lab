import user from "../data/user";        

export default  function Links ({props: links}) {

    //const showLinks = []
    //for (let key in links) {
      //  showLinks.push(<a href={links[key]} key={links[key]}>{links[key]}</a>)
   // }

    return (
        <div id="links">
            <h3>Links</h3>
            <a href={user.links.github} >{user.links.github}</a>
            <a href={user.links.linkedin}>{user.links.linkedin}</a>
            {/*<h1>{user.links.github}</h1>   */}  
        </div>  
    )   
}

