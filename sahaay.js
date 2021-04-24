 let time='';
      let a='';
      let h='';
      let m='';
      let s='';
      setInterval(()=>{
        a=new Date();
        h=(a.getHours())%12+'';
        m=a.getMinutes()+'';
        s=a.getSeconds()+'';
        p=a.get
        while(h.length<2)
          h='0'+h;
         while(m.length<2)
          m='0'+m;
         while(s.length<2)
          s='0'+s;
        time=h+':'+m+':'+s;
        console.log(s);
        document.getElementById('sahay1').innerHTML=time;
      },1000);