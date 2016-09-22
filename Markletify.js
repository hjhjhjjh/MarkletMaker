function load() {
//Clear current page
document.open()
document.write('<html></html>')

//Load Babel & Uglify
var babel=document.createElement('script')
var uglify=document.createElement('script')
uglify.type='text/javascript'
babel.type='text/javascript'
babel.src='https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.14.0/babel.min.js'
uglify.src='https://cdn.rawgit.com/wilcoffey/MarkletMaker/master/UglifyJS.js'
document.head.appendChild(babel)
document.head.appendChild(uglify)


//and the rest
function run() {
	var output = Babel.transform(document.getElementById('input').value, { presets: ['es2015'] }).code;
	var ugly=UglifyJS.parse(output)
	var stream = UglifyJS.OutputStream();
	ugly.print(stream);
	document.getElementById('output').value='javascript:'+stream.toString()
}
document.body.innerHTML=`
<style>body,html{margin:0;padding:0;width:100%;height:100%;text-align:center;background-color:#ccc;box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}textarea{float:left;resize:none;height:60vh;width:40vw}button{width:80vw;height:5vh;font-size:3vh;flex-grow:0;flex-shrink:0}#container{width:80vw;margin:5vh auto;padding:0}h1{width:80vw;height:5vh;margin:0;font-family:arial;background-color:#5d9;border-left:1px solid #a9a9a9;border-right:1px solid #a9a9a9;border-top:1px solid #a9a9a9;line-height:5vh}</style>
<div id='container'>
<h1>Markletify</h1>
<textarea id='input'></textarea>
<textarea id='output'></textarea>
<button id='run'>GO!</button>
</div>
`
document.getElementById('run').onclick=run
document.title='Markletify'
}
load()
