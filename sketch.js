var cr, cg, cb, sw, ert, x, y, loc, write_flag;
write_flag = 'write';
cr=255;
cg=255;
cb=255;
loc = 0;
sw=5;
ert = 'ARROW';
x = window.screen.width * window.devicePixelRatio - (window.screen.width * window.devicePixelRatio/15);
y = window.screen.height * window.devicePixelRatio / 1.15;

function changefontcolor(clr_r, clr_g, clr_b, clr_sw, clr_ert) {
	cr = clr_r;
	cg = clr_g;
	cb = clr_b;
	sw = clr_sw;
	ert = clr_ert;
	write_flag = 'write';
}
let new_page_mobile = function(sketch){
	sketch.setup = function() {
	  var new_canvas = sketch.createCanvas(x, y);
	  sketch.background(115, 110, 110);
	  new_canvas.parent('sketch-holder');
	  loc = loc + y;
	  add_page_no();
	  //sketch.fullscreen()
	}

	sketch.touchMoved = function() {
		if (write_flag === 'write') {
		 sketch.stroke(cr,cg,cb);
		 sketch.strokeWeight(sw);
		 //sketch.cursor(ert);
		 sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
		 return false;
		}
	}
};

function scroll_write(ctr_flg){
	write_flag = ctr_flg;
}
function add_space() {
	new p5(new_page_mobile);
}

function add_page_no(){
	var c = document.getElementById("sketch-holder").childElementCount;
	if(c > 0){
		var canvas_to_add_page_no = document.getElementById("defaultCanvas"+(c-1));
		var context_to_add_page_no = canvas_to_add_page_no.getContext("2d");
		context_to_add_page_no.font = "20px Georgia";
		context_to_add_page_no.fillText("Page No : "+c, 10, 20);
		context_to_add_page_no.beginPath();
        context_to_add_page_no.rect(0,25,x,y);
        context_to_add_page_no.clip();
	}
}
function get_count(){
  var c = document.getElementById("sketch-holder").childElementCount;
  c = c - 1;
  if(c < 0){
  	document.getElementById("canvasImg").style.display = "none";
  	alert("you have not give your solution");
  }
  else if(c >= 0){
  	document.getElementById("canvasImg").style.display = "block";
	var e = document.getElementById('canvasImg');
	var first = e.firstElementChild; 
	while (first) { 
		first.remove(); 
		first = e.firstElementChild; 
	}
  	var temp_count = 0;
  	while(c >= temp_count){
  		var img = new Image(); 
  		var canvas_to_append = document.getElementById("defaultCanvas"+temp_count);
  		var dataUrl_to_append = canvas_to_append.toDataURL();// url of image
  		img.src = dataUrl_to_append;
  		document.getElementById('canvasImg').appendChild(img);
  		temp_count = temp_count + 1;
  	}
  	//var dataUrl_to_save = canvas_to_save.toDataURL();// url of image
  	//document.getElementById('canvasImg').src = dataUrl_to_save;
  }
  else{
  	alert("Something Wrong");
  }
}
