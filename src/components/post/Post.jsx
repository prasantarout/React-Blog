import "./post.css";
import {Link } from "react-router-dom";
export default function Post() {
    return (
        <div className="post">

            <img className="postImg" src="/images/stone.jpeg" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="PostCat">
                        <Link className="link" to="/single">PUMICE</Link>
                        </span>
                    </div>
                <span className="postTitle">Crow's armor is a post-Moon Lord armor set that can be obtained after defeating Volcanox. It requires 155 Pyroplasm, 
                24 Volcanic Stone and Nebula armor to make the full set.
                </span><hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <img className="postImg" src="/images/picture2.jpeg" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="PostCat">Cyclone</span>
                    </div>
                <span className="postTitle">In meteorology, a cyclone (/ˈsaɪ.kloʊn/) is a large scale air mass that rotates around a strong center of low atmospheric pressure, counterclockwise in the Northern Hemisphere and clockwise in
                 the Southern Hemisphere as viewed from above (opposite to an anticyclone)
                </span><hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <img className="postImg" src="/images/tornado.jpg" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="PostCat">Tornaddo</span>
                    </div>
                <span className="postTitle">A tornado is a violently rotating column of air, in contact with the ground, either pendant from a cumuliform cloud or underneath 
                a cumuliform cloud, and often (but not always) visible as a funnel cloud.
                </span><hr/>
                <span className="postDate">1 hour ago</span>
            </div>
        </div>
    )
}
