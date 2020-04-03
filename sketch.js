var cr, cg, cb, sw, ert, x, y, loc, write_flag;
write_flag = 'write';
cr=255;
cg=255;
cb=255;
loc = 0;
sw=1;
ert = 'ARROW';
x = window.screen.width * window.devicePixelRatio - (window.screen.width * window.devicePixelRatio/15);
y = window.screen.height * window.devicePixelRatio/2;

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
	  sketch.background(0);
	  new_canvas.parent('sketch-holder');
	  loc = loc + y;
	  sketch.fullscreen()
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