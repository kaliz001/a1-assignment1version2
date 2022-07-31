const http = require('http'),
      fs   = require('fs')
      

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    case "/animation.js":
      sendFile(response, "animation.js");
      break;
    case "/style.css":
      sendFile(response, "style.css");
      break; 
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || 3000 )

const sendFile = function( response, filename ) {
  fs.readFile( filename, function( err, content ) {
    response.end( content, 'utf-8' );
   });
};
