
window.onload = function () {


    // Get the input's current value
  var btn = document.querySelector("button");
  var text = document.querySelector("input");
  btn.addEventListener( "click", function () {
    // console.log(text.value);
    var movieSearch = text.value;

    var req = new XMLHttpRequest();
    req.open("GET", "http://omdbapi.com?t=" + movieSearch);
    req.send();

    req.onreadystatechange = function () {
      if (req.readyState !== 4) { return false };

      var data = JSON.parse( req.responseText );
      console.log( data );

      var poster = data["Poster"];
      var title = data["Title"];
      var director = data["Director"];
      var actors = data["Actors"];
      var genre = data["Genre"];
      var plot = data["Plot"];

      // console.log(poster);

      var posterNode = document.querySelector(".poster_container");

      if ( posterNode !== null ) {
        posterNode.remove();
      }
      posterNode = document.createElement( "div" );
      posterNode.className = "poster_container";
      document.body.appendChild( posterNode );

      console.log( "A", posterNode );

      var newImg = document.createElement("img");
      // console.log(newImg);
      newImg.src = poster;
      posterNode.appendChild(newImg);
      var newParagraph = document.createElement("p");

      var newTitle = document.createTextNode(title);
      newParagraph.appendChild(newTitle);
      posterNode.appendChild(newParagraph);
      // var newGenre = document.createTextNode(genre);
      // newParagraph.appendChild(newGenre);
      // posterNode.appendChild(newParagraph);
      // var newDirector = document.createTextNode(director);
      // newParagraph.appendChild(newDirector);
      // posterNode.appendChild(newParagraph);
      // var newActors = document.createTextNode(actors);
      // newParagraph.appendChild(newActors);
      // posterNode.appendChild(newParagraph);
      // var newPlot = document.createTextNode(plot);
      // newParagraph.appendChild(newPlot);
      // posterNode.appendChild(newParagraph);

    };

  } );

};
