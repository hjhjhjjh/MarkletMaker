





document.open()
document.write('<html></html>')
var babel=document.createElement('script')
babel.type='text/javascript'
babel.src='https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.14.0/babel.min.js'
babel.onload=function() {
	alert('test')
}

document.head.appendChild(babel)
//var output = Babel.transform(input, { presets: ['es2015'] }).code;
document.body.innerHTML=`

<div id='test'>test</div>

`
