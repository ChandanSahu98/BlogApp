import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum have more</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Rerum nisi ad quisquam autem ipsum odit tempore, 
        itaque aut voluptatum animi aperiam doloribus recusandae 
        placeat harum dolore fugit minus. Eum, vero.
        itaque aut voluptatum animi aperiam doloribus recusandae 
        placeat harum dolore fugit minus. Eum, vero.
      </p>
    </div>
  )
}
