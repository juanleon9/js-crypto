sha1=function(l,n,u,e,j,v,x){function m(b,e,a){e="";for(a=8;a--;)e+=(b>>>a*4&15).toString(j);return e}return function(b){var w=0,a=0,k=[],o=1732584193,p=4023233417,q=2562383102,r=271733878,s=3285377520,f,d,g,h,c,t,i=[];b=unescape(encodeURIComponent(b));for(d=f=b[u];a<d-3;)i[n](b[l](a++)<<v|b[l](a++)<<j|b[l](a++)<<8|b[l](a++));for(c=x<<v;f-- >a;)c=c>>>8|b[l](f)<<v;for(i[n](c);i[u]%j!=14;)i[n](0);for(i[n](d>>>29,d<<3&e);w<i[u];w+=j){for(a=-1;++a<80;)c=k[a-3]^k[a-8]^k[a-14]^k[a-j],k[a]=a<j?i[w+a]:c<<1|c>>>31;f=o;b=p;d=q;g=r;h=s;for(a=0;a<80;)c=f<<5|f>>>27,t=h+k[a]+1518500249,h=c+(b^d^g)+t+341275144,c=[c+(b&d|~b&g)+t,h,c+(b&d|b&g|d&g)+t+882459459,h+1535694389][0|a++/20],h=g,g=d,d=b<<30|b>>>2,b=f,f=c&e;o=o+f&e;p=p+b&e;q=q+d&e;r=r+g&e;s=s+h&e}return m(o)+m(p)+m(q)+m(r)+m(s)}}("charCodeAt","push","length",4294967295,16,24,128);