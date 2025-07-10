$(function(){
    if(window.location.href.indexOf('index')!= -1)  {
        $('.galeria').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 1200,
          auto: true,
        });
        let posts = [
            {
                title: 'Titulo articulo 1',
                date: 'Publicado el dia '+moment().date()+' de '+moment().format('MMMM')+' del '+moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam fugit amet possimus error accusamus velit facilis a, ipsam quam placeat ex illum. Soluta ea non ratione quae earum asperiores porro! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quia et saepe magnam mollitia, nobis, incidunt sapiente reiciendis assumenda enim aspernatur sunt odit animi aliquam rerum. Modi sed cumque aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati nisi cumque repellat incidunt facere ipsum sapiente laborum temporibus ut harum, eos et eligendi deserunt possimus delectus ab vero iure.'
            },{ 
                title: 'Titulo articulo 2',
                date: 'Publicado el dia '+moment().date()+' de '+moment().format('MMMM')+' del '+moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam fugit amet possimus error accusamus velit facilis a, ipsam quam placeat ex illum. Soluta ea non ratione quae earum asperiores porro! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quia et saepe magnam mollitia, nobis, incidunt sapiente reiciendis assumenda enim aspernatur sunt odit animi aliquam rerum. Modi sed cumque aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati nisi cumque repellat incidunt facere ipsum sapiente laborum temporibus ut harum, eos et eligendi deserunt possimus delectus ab vero iure.'
            },{
                title: 'Titulo articulo 3',
                date: 'Publicado el dia '+moment().date()+' de '+moment().format('MMMM')+' del '+moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam fugit amet possimus error accusamus velit facilis a, ipsam quam placeat ex illum. Soluta ea non ratione quae earum asperiores porro! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quia et saepe magnam mollitia, nobis, incidunt sapiente reiciendis assumenda enim aspernatur sunt odit animi aliquam rerum. Modi sed cumque aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati nisi cumque repellat incidunt facere ipsum sapiente laborum temporibus ut harum, eos et eligendi deserunt possimus delectus ab vero iure.'
            },{
                title: 'Titulo articulo 4',
                date: 'Publicado el dia '+moment().date()+' de '+moment().format('MMMM')+' del '+moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam fugit amet possimus error accusamus velit facilis a, ipsam quam placeat ex illum. Soluta ea non ratione quae earum asperiores porro! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quia et saepe magnam mollitia, nobis, incidunt sapiente reiciendis assumenda enim aspernatur sunt odit animi aliquam rerum. Modi sed cumque aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati nisi cumque repellat incidunt facere ipsum sapiente laborum temporibus ut harum, eos et eligendi deserunt possimus delectus ab vero iure.'
            },{
                title: 'Titulo articulo 5',
                date: 'Publicado el dia '+moment().date()+' de '+moment().format('MMMM')+' del '+moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam fugit amet possimus error accusamus velit facilis a, ipsam quam placeat ex illum. Soluta ea non ratione quae earum asperiores porro! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quia et saepe magnam mollitia, nobis, incidunt sapiente reiciendis assumenda enim aspernatur sunt odit animi aliquam rerum. Modi sed cumque aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati nisi cumque repellat incidunt facere ipsum sapiente laborum temporibus ut harum, eos et eligendi deserunt possimus delectus ab vero iure.'
            }]
            posts.forEach((element,index) =>{
                let post =`
                <article class="post">
                        <h2>${element.title}</h2>
                        <span class="date">${element.date}</span>
                        <p>
                            ${element.content}
                        </p>
                        <a href="#" class="button">Leer más</a>
                    </article>
                `;
                $("#posts").append(post);
            })
    }
    if(window.location.href.indexOf('about')!= -1){
        $('#acordion h3').addClass('ui-state-active')
        $('#acordion').accordion({collapsible: true}).click(function(){
            $('#acordion h3').addClass('ui-state-active')
        });
        $('.galeria').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 1200,
          auto: true
        });
        
    }
    if(window.location.href.indexOf('reloj')!= -1){
        setInterval(function(){
            let reloj = moment().format('h:mm:ss')
            $('#reloj p').html(reloj)
        },1000)
    }
    let tema = $('#tema');
    attrtema = localStorage.getItem("theme");
    tema.attr('ref',localStorage.getItem("theme"))
    $('#green').click(function(){
        tema.attr('href','css/green.css');
    });
    $('#blue').click(function(){
        tema.attr('href','css/blue.css');
    });
    $('#red').click(function(){
        tema.attr('href','css/red.css');
        localStorage.setItem("theme", 'css/red.css');
    });
    $('.subir').click(function(){
        $('html,body').animate({
            scrollTop:0
        },500);
    });
    $('#login form').submit(function(){
        let name = $('#form_name').val();
        localStorage.setItem("form_name", name);
    })
    let form_name = localStorage.getItem("form_name");
    if(form_name){
        $('#about p').html("<br><strong>Bienvenido " + form_name+" </strong> <br><br>");
        $('#about p').append("<a  class='button' href='' id='logout'> Cerrar sesion </a>")
        $('#login').hide();
    }
    $('#logout').click(function(){
        localStorage.clear();
    }).css({'width':'90px','margin':'0px auto'});
});
