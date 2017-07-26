document.body.style.margin;
document.body.style.color;
document.body.style.font;

    let a = Number(prompt('Enter a:'));
    let b = Number(prompt('Enter b:'));
    let c = Number(prompt('Enter c:'));
    function Disqrim(a, b, c){
        let discr = Math.pow(b, 2) - 4 * a * c;
        return discr;
    }
    let disq = Disqrim(a, b, c);
    document.write('Disqriminator is: ' + disq + '<br>');
    
    
        let x1 = ((-b + Math.sqrt(disq))/(2*a));
        let x2 = ((-b - Math.sqrt(disq))/(2*a));
    function QuadraticEquation(a, b, c){
        if (disq > 0) {
            return x1 + x2;
        } else 
        if (disq === 0) {
            return x1;
        } else
        {
            return 'No roots';
        }
    }
     QuadraticEquation(a, b, c);
     document.write('x1 = ' + x1 + ';' + '<br>' + 'x2 = ' + x2);





//Style for header
$(document).ready(function() {
 $.fn.animate_Text = function() {
  var string = this.text();
  return this.each(function(){
   var $this = $(this);
   $this.html(string.replace(/./g, '<span class="new">$&</span>'));
   $this.find('span.new').each(function(i, el){
    setTimeout(function(){ $(el).addClass('div_opacity'); }, 90 * i);
   });
  });
 };
 $('#example').show();
 $('#example').animate_Text();
});
//