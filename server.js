var http = require('http')
var Socket = require('socket.io')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/neamV');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('db connection success')
})

//mongodb test

var postSchema = new mongoose.Schema({
     author: String,
     content: String
})

var Post = mongoose.model('Post', postSchema)

const io = new Socket().attach(6567);

io.on('connection', function(socket){
    console.log('socket connected', socket.id)
    const initialState = {
        items: [
            {name: "test1"},
            {name: "test2"}
        ]
    }

    io.emit('state', initialState)

    socket.on('CRAWLER_START', function(action){
        console.log(action)
        var url = action.text
        var crawler = require('./core/crawler/crawler.js')
        crawler(url, function(result){
            console.log('result returning thru socket')
            io.emit('crawler_result', result)
        })
    })

    socket.on('state', function(state){
        console.log('state received at socket server', state)
    })

    socket.on('action', function(action){
        console.log("ACTION TYPE",action.type)
        //socket.emit('action', store.dispatch.bind(store))
        var post_dh = new Post({
            author: action.author,
            content: action.content
        })
        post_dh.save((err, post) => {
            if(err) console.log(err)
            console.log(post)
        })
    })
})

http.createServer(function(req, res){
    res.end('socket + mongodb running')
}).listen(8769, function(){
    console.log('server running 8769')
})
