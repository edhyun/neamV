module.exports = crawler

function crawler(url, callback){
    var request = require('request').defaults({maxRedirects:20})
    var cheerio = require('cheerio');
    var iconv = require('iconv-lite');
    var charset = require('charset');
    var options = {
        url: url,
        method: 'GET',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) routerleWebKit/601.2.7 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.7'
        }
    }
    var chunks = [];
    request(
        options,
        function(err, response, body){
            if(err){
                return console.log(err);
            }
        }
    ).on('data', function(data){
        // decompressed data as it is received

    }).on('response', function(response) {
        // unmodified http.IncomingMessage object
        response.on('data', function(data) {
          // compressed data as it is received
          //console.log('received ' + data.length + ' bytes of compressed data')
          chunks.push(data);
        });
        response.on('end', function(){
            var contentType = response.headers['content-type'];
            var this_charset = charset(contentType) || response.headers['content-encoding'] || "utf8";
            var decodedBody = iconv.decode(Buffer.concat(chunks), this_charset);
            var $ = cheerio.load(decodedBody);
            console.log('request called')
            extractBody($, function(jsonRes){
                alchemy(url, function(alchemy_result){
                    var result = {
                        contentType: contentType,
                        jsonRes: jsonRes,
                        alchemy_result: alchemy_result
                    }

                    //console.log(result)
                    console.log('crawler done')
                    return callback(result)
                })
            })

            function extractBody($, callback){
                var jsonRes = {};
                jsonRes.site_title = $('title').text();
                $('meta').each(function(){
                    var name;
                    if(typeof $( this ).attr( 'property' ) !== 'undefined'){
                        name = $( this ).attr( 'property' ).slice(3);
                    }else{
                        name = $( this ).attr( 'name' );
                    }
                    //var name = $( this ).attr( 'property' ) || $( this ).attr( 'name' );
                    var value = $( this ).attr( 'content' );
                    if ( name ) {
                        jsonRes[ name ] = value;
                    }
                });

                jsonRes.image = jsonRes.image || $('image').first().attr('src');
                jsonRes.description = jsonRes.description || $('p').first().text() || "No Description";
                jsonRes.url = url;

                callback(jsonRes);
            }
        })
    })
}

function alchemy(url, callback){
    var AlchemyAPI = require('./alchemyapi');
    var alchemyapi = new AlchemyAPI();
    var target_url = url;
    var output = {};
    console.log('alchemy called')
    return keywords(url, output, callback);

    function keywords(url, output, callback) {
    	alchemyapi.keywords('url', target_url, { 'sentiment':0 }, function(response) {
    		output['keywords'] = { url:target_url, response:JSON.stringify(response,null,4), results:response['keywords'] };
            concepts(url, output, callback);
    	});
    }

    function concepts(url, output, callback) {
    	alchemyapi.concepts('url', target_url, { 'showSourceText':1 }, function(response) {
    		output['concepts'] = { url:target_url, response:JSON.stringify(response,null,4), results:response['concepts'] };
            callback(output)
    	});
    }
}
